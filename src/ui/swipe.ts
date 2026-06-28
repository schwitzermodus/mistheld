/* =====================================================
   SWIPE-Bereich (DOM): Kartenstapel, Gesten, Vorladen, Abschluss.
===================================================== */
import { $ } from '../util/dom';
import { state } from '../state/session';
import { INSPIRATION_CARDS } from '../data/inspirations.js';
import { CFG, levelCssClass, SCREENS } from '../core/constants';
import { loadSettings, isThemeTypeEnabled, effectiveLevel, getEnabledThemeTypes } from '../core/settings';
import { applyScore, pickBestFrom, swipeReadiness } from '../core/scoring';
import { generateProposal, generateHero, composeHeroStory } from '../core/generation';
import { show, showLoading, hideLoading } from './navigation';
import { setHbEditing, renderHeldenblatt } from './result';
import { displayThemebook, STRINGS } from '../i18n/strings.js';
import { escapeHtml, displayTag, shuffleArray } from '../util/text';

// #47: Diversifizierende Sortierung — erste N Karten decken moeglichst viele Theme-Types ab
export function diversifyFirstN(cards: any[], n: number): any[] {
  var pool = shuffleArray(cards.slice());
  var picked: any[] = [], typeCount: any = {};
  while (picked.length < n && pool.length > 0) {
    var bestIdx = 0, bestScore = Infinity;
    for (var i = 0; i < pool.length; i++) {
      var types = Object.keys(pool[i].affinities || {});
      if (types.length === 0) continue;
      var maxC = 0;
      for (var j = 0; j < types.length; j++) {
        var c = typeCount[types[j]] || 0;
        if (c > maxC) maxC = c;
      }
      if (maxC < bestScore) { bestScore = maxC; bestIdx = i; }
    }
    var card = pool.splice(bestIdx, 1)[0];
    Object.keys(card.affinities || {}).forEach(function (t) { typeCount[t] = (typeCount[t] || 0) + 1; });
    picked.push(card);
  }
  return picked.concat(pool);
}

var IMG_GATE_COUNT = 8;
var IMG_GATE_TIMEOUT = 3000;

export function startSwipe(): void {
  state.cardIndex = 0; state.swipes = []; state.affinityScores = {}; state.hookCounts = {};
  state.proposals = []; state.proposalIndex = 0; state.edits = {}; state.hero = null; state.busy = false;
  state.currentCharacterId = null; // neue Sitzung -> neuer Charakter beim Speichern
  // Deck passend zu den Einstellungen: nur Inspos mit >=1 aktiviertem Theme-Typ.
  // Inspos ohne aktiven Typ wuerden ins Leere laufen -> raus aus dem Stapel.
  var _s = loadSettings();
  var eligible = INSPIRATION_CARDS.filter(function (c: any) {
    return Object.keys(c.affinities || {}).some(function (t) { return isThemeTypeEnabled(t, _s); });
  });
  // Diversitaet ueber das GESAMTE Deck (nicht nur die ersten N) + voll randomisiert.
  state.shuffledCards = diversifyFirstN(eligible, eligible.length);

  var firstBatch = state.shuffledCards.slice(0, IMG_GATE_COUNT)
    .map(function (c: any) { return c.image; }).filter(Boolean);
  var started = false;
  function proceed() {
    if (started) return; started = true;
    document.body.classList.add('swipe-active');
    show(SCREENS.SWIPE);
    hideLoading();
    renderCard();
    state.shuffledCards.forEach(function (c: any) { if (c.image) loadImage(c.image); });
  }
  if (firstBatch.length === 0) { proceed(); return; }
  showLoading(STRINGS.loading.cards);
  var done = 0;
  firstBatch.forEach(function (src: string) {
    loadImage(src, function () { done++; if (done >= firstBatch.length) proceed(); });
  });
  setTimeout(proceed, IMG_GATE_TIMEOUT);
}

var IMG_CACHE: any = {};
var IMG_PENDING: any = {};
var IMG_PRELOAD_AHEAD = 6;
export function loadImage(src: string, cb?: (ok: boolean) => void): void {
  if (!src) { if (cb) cb(false); return; }
  if (IMG_CACHE[src] === 'ok') { if (cb) cb(true); return; }
  if (IMG_CACHE[src] === 'bad') { if (cb) cb(false); return; }
  if (IMG_PENDING[src]) { if (cb) IMG_PENDING[src].push(cb); return; }
  IMG_PENDING[src] = cb ? [cb] : [];
  var pre = new Image();
  pre.onload = function () { IMG_CACHE[src] = 'ok'; var cbs = IMG_PENDING[src] || []; delete IMG_PENDING[src]; cbs.forEach(function (f: any) { f(true); }); };
  pre.onerror = function () { IMG_CACHE[src] = 'bad'; var cbs = IMG_PENDING[src] || []; delete IMG_PENDING[src]; cbs.forEach(function (f: any) { f(false); }); };
  pre.src = src;
}
export function renderCard(): void {
  var stage = $('card-stage');
  stage.querySelectorAll('.card:not(.abandoned)').forEach(function (c: any) { c.remove(); });
  if (state.cardIndex >= state.shuffledCards.length) { finishSwiping(); return; }
  updateReadiness();
  $('btn-undo').disabled = !canUndo();
  for (var i = CFG.STACK_DEPTH - 1; i >= 0; i--) {
    var idx = state.cardIndex + i;
    if (idx >= state.shuffledCards.length) continue;
    var card = state.shuffledCards[idx];
    var el = document.createElement('div');
    el.className = 'card' + (i === 0 ? ' front' : ' behind behind-' + i);
    el.style.zIndex = String(10 - i);
    var footBand = '', scrimThemes = '';
    if (i === 0 && card.affinities) {
      var _settings = loadSettings();
      var sorted = Object.entries(card.affinities)
        .filter(function (kv: any) { return isThemeTypeEnabled(kv[0], _settings); })
        .sort(function (a: any, b: any) { return b[1] - a[1]; }).slice(0, 3);
      if (sorted.length > 0) {
        var chips = sorted.map(function (kv: any) {
          return '<span class="card-theme-tag ' + levelCssClass(effectiveLevel(kv[0], _settings)) + '">' + escapeHtml(displayThemebook(kv[0])) + '</span>';
        }).join('');
        var label = escapeHtml(STRINGS.swipe.possibleThemesLabel);
        footBand = '<div class="card-foot">' +
          '<div class="card-foot-label">' + label + '</div>' +
          '<div class="card-themes">' + chips + '</div></div>';
        scrimThemes = '<div class="card-scrim-label">' + label + '</div>' +
          '<div class="card-themes">' + chips + '</div>';
      }
    }
    var archetypesHtml = '';
    if (i === 0 && card.examples && card.examples.length) {
      archetypesHtml = '<div class="card-archetypes">' +
        '<span class="card-arch-label">' + escapeHtml(STRINGS.swipe.examplesLabel) + '</span> ' +
        card.examples.map(function (ex: string) { return escapeHtml(ex); }).join(' · ') +
        '</div>';
    }
    var overlays =
      '<div class="card-decision-overlay yes">' + escapeHtml(STRINGS.swipe.decisionYes) + '</div>' +
      '<div class="card-decision-overlay no">' + escapeHtml(STRINGS.swipe.decisionNo) + '</div>' +
      '<div class="card-decision-overlay super">' + escapeHtml(STRINGS.swipe.decisionSuper) + '</div>';
    var textInner =
      '<div class="card-band">' +
        '<span class="card-eyebrow">' + escapeHtml(STRINGS.swipe.inspirationLabel) + '</span>' +
      '</div>' +
      '<div class="card-body">' +
        '<div class="card-prompt">' +
          '<div class="card-title">' + escapeHtml(card.title) + '</div>' +
          '<div class="card-divider" aria-hidden="true"><span class="card-divider-mark">❖</span></div>' +
          '<div class="card-text">' + escapeHtml(card.text) + '</div>' +
        '</div>' +
        archetypesHtml +
      '</div>' +
      footBand;
    var photoCached = card.image && IMG_CACHE[card.image] === 'ok';
    var photoInner =
      '<div class="card-photo">' +
        '<img alt=""' + (photoCached ? ' class="loaded"' : '') + ' src="' + encodeURI(card.image || '') + '">' +
        '<span class="card-photo-eyebrow">' + escapeHtml(STRINGS.swipe.inspirationLabel) + '</span>' +
        '<div class="card-scrim">' +
          '<div class="card-title">' + escapeHtml(card.title) + '</div>' +
          archetypesHtml +
          scrimThemes +
        '</div>' +
      '</div>';
    // Detail-Flip: Vorderseite = bisheriger Inhalt, Rueckseite = narrativer Ich-Text.
    // Bei Foto-Karten ist der Text sonst verborgen; der Tap dreht ihn nach vorn.
    var frontInner = card.image ? photoInner : textInner;
    var hintFront = '<span class="card-flip-hint" aria-hidden="true">i</span>';
    var hintBack = '<span class="card-flip-hint card-flip-hint-back" aria-hidden="true">↩</span>';
    el.innerHTML = overlays +
      '<div class="card-flip">' +
        '<div class="card-face card-front">' + hintFront + '<div class="card-content">' + frontInner + '</div></div>' +
        '<div class="card-face card-back">' + hintBack + '<div class="card-content">' + textInner + '</div></div>' +
      '</div>';
    if (i === 0) { attachSwipe(el); if (state.cardIndex === 0 && !state.swipes.length) el.classList.add('card-hint'); }
    stage.appendChild(el);
    if (card.image && !photoCached) {
      (function (cardEl, src, fallbackHtml) {
        var im: any = cardEl.querySelector('.card-front .card-photo img');
        if (!im) return;
        if (im.complete && im.naturalWidth > 0) { im.classList.add('loaded'); IMG_CACHE[src] = 'ok'; return; }
        im.onload = function () { im.classList.add('loaded'); IMG_CACHE[src] = 'ok'; };
        im.onerror = function () { IMG_CACHE[src] = 'bad'; var c = cardEl.querySelector('.card-front .card-content'); if (c) c.innerHTML = fallbackHtml; };
      })(el, card.image, frontInner);
    }
  }
  for (var p = 0; p < IMG_PRELOAD_AHEAD; p++) {
    var pc = state.shuffledCards[state.cardIndex + p];
    if (pc && pc.image) loadImage(pc.image);
  }
}

export function canUndo(): boolean { return state.swipes.length > 0; }

// Inspo P1.2: Fortschritts-/Readiness-Anzeige statt fixem Karten-Zaehler.
export function updateReadiness(): void {
  var rd = swipeReadiness(getEnabledThemeTypes(loadSettings()));
  var fill = $('readiness-fill');
  if (fill) { fill.style.width = Math.round(rd.progress * 100) + '%'; fill.classList.toggle('ready', rd.ready); }
  // Bereit-Leiste ist dauerhaft sichtbar: grau/disabled bis bereit, dann gruen/aktiv.
  var readyBtn: any = $('btn-ready');
  if (readyBtn) {
    readyBtn.disabled = !rd.ready;
    readyBtn.classList.toggle('ready', rd.ready);
    readyBtn.textContent = rd.ready ? STRINGS.swipe.readyCta : STRINGS.swipe.formingLabel;
  }
}

export function adaptiveResort(): void {
  if (state.cardIndex < 2 || state.cardIndex >= state.shuffledCards.length) return;
  var pp: any = {};
  // Positive Swipes (Ja UND Super-Like) treiben die Nachsortierung; Super zieht mit seinem Gewicht staerker.
  state.swipes.filter(function (s: any) { return s.dir !== 'no'; }).forEach(function (s: any) {
    var w = s.weight || 1;
    Object.entries(s.card.affinities || {}).forEach(function (kv: any) { pp[kv[0]] = (pp[kv[0]] || 0) + kv[1] * w; });
  });
  if (!Object.keys(pp).length) return;
  var seen = state.shuffledCards.slice(0, state.cardIndex);
  var rem = state.shuffledCards.slice(state.cardIndex);
  // FYP-Adaption: verbleibende Karten nach dem bisherigen Verhalten nachsortieren
  // — Affinitaet (Theme-Typen) UND Hooks (thematisches Profil) gemeinsam.
  var sc = function (c: any) {
    var aff = Object.entries(c.affinities || {}).reduce(function (s: number, kv: any) { return s + (pp[kv[0]] || 0) * kv[1]; }, 0);
    var hk = (c.hooks || []).reduce(function (s: number, h: string) { return s + Math.max(0, state.hookCounts[h] || 0); }, 0);
    return aff + CFG.ADAPT_HOOK_WEIGHT * hk;
  };
  rem.sort(function (a: any, b: any) { return sc(b) - sc(a); });
  state.shuffledCards = seen.concat(rem);
}

export function attachSwipe(el: any): void {
  var startX = 0, startY = 0, dx = 0, dy = 0, dragging = false, downTime = 0;
  var lastX = 0, lastY = 0, lastTime = 0, velocityX = 0, velocityY = 0, activePtr: any = null;
  var yesEl = el.querySelector('.yes'), noEl = el.querySelector('.no'), superEl = el.querySelector('.super');
  var resetOverlays = function () { yesEl.style.opacity = '0'; noEl.style.opacity = '0'; if (superEl) superEl.style.opacity = '0'; };
  var upd = function () {
    // Vertikal-dominant & aufwaerts => Super-Like-Overlay, sonst Ja/Nein.
    if (dy < -8 && Math.abs(dy) > Math.abs(dx)) {
      if (superEl) superEl.style.opacity = String(Math.min(1, (-dy - 8) / 60)); yesEl.style.opacity = '0'; noEl.style.opacity = '0';
    } else if (dx > 8) { yesEl.style.opacity = String(Math.min(1, (dx - 8) / 60)); noEl.style.opacity = '0'; if (superEl) superEl.style.opacity = '0'; }
    else if (dx < -8) { noEl.style.opacity = String(Math.min(1, (-dx - 8) / 60)); yesEl.style.opacity = '0'; if (superEl) superEl.style.opacity = '0'; }
    else resetOverlays();
  };
  el.addEventListener('pointerdown', function (e: any) {
    if (el.classList.contains('abandoned') || activePtr !== null) return;
    el.classList.remove('card-hint'); activePtr = e.pointerId;
    try { el.setPointerCapture(e.pointerId); } catch (_) {}
    dragging = true; el.classList.add('dragging');
    startX = lastX = e.clientX; startY = lastY = e.clientY; lastTime = downTime = performance.now(); dx = 0; dy = 0; velocityX = 0; velocityY = 0;
  });
  el.addEventListener('pointermove', function (e: any) {
    if (!dragging || e.pointerId !== activePtr) return; if (e.cancelable) e.preventDefault();
    var now = performance.now(), dt = now - lastTime;
    if (dt > 0) {
      velocityX = velocityX * 0.5 + ((e.clientX - lastX) / dt) * 0.5;
      velocityY = velocityY * 0.5 + ((e.clientY - lastY) / dt) * 0.5;
    }
    lastX = e.clientX; lastY = e.clientY; lastTime = now; dx = e.clientX - startX; dy = e.clientY - startY;
    if (el.classList.contains('flipped')) return; // Detail-Flip aktiv: Karte nicht bewegen
    // Nur Aufwaerts-Hub visualisieren (downward bleibt 0), Rotation aus der Horizontalen.
    el.style.transform = 'translate3d(' + dx + 'px,' + Math.min(0, dy) + 'px,0) rotate(' + Math.max(-18, Math.min(18, dx * 0.06)) + 'deg)';
    upd();
  }, { passive: false });
  var onUp = function (e: any) {
    if (!dragging || e.pointerId !== activePtr) return;
    dragging = false; activePtr = null; el.classList.remove('dragging');
    try { el.releasePointerCapture(e.pointerId); } catch (_) {}
    // Tap (kaum Bewegung, kurz) => Detail-Flip umschalten, kein Swipe.
    var isTap = Math.abs(dx) < CFG.TAP_MOVE_MAX && Math.abs(dy) < CFG.TAP_MOVE_MAX && (performance.now() - downTime) < 400;
    if (isTap) { el.classList.toggle('flipped'); el.style.transform = 'translate3d(0,0,0) rotate(0deg)'; resetOverlays(); return; }
    // Auf gedrehter Karte keine Swipe-Entscheidung (erst zurueckdrehen).
    if (el.classList.contains('flipped')) { el.style.transform = 'translate3d(0,0,0) rotate(0deg)'; resetOverlays(); return; }
    var up = (dy < -CFG.SWIPE_UP_DISTANCE || (velocityY < -CFG.SWIPE_UP_VELOCITY && dy < -4)) && Math.abs(dy) > Math.abs(dx);
    var iy = dx > CFG.SWIPE_DISTANCE || (velocityX > CFG.SWIPE_VELOCITY && dx > 4);
    var in_ = dx < -CFG.SWIPE_DISTANCE || (velocityX < -CFG.SWIPE_VELOCITY && dx < -4);
    if (up) flyOut(el, 'super'); else if (iy) flyOut(el, 'yes'); else if (in_) flyOut(el, 'no');
    else { el.style.transform = 'translate3d(0,0,0) rotate(0deg)'; resetOverlays(); }
  };
  el.addEventListener('pointerup', onUp); el.addEventListener('pointercancel', onUp);
}
export function flyOut(el: any, dir: string): void {
  if (el.classList.contains('abandoned')) return;
  var goneClass = dir === 'no' ? 'gone-left' : (dir === 'super' ? 'gone-up' : 'gone-right');
  el.classList.remove('card-hint'); el.classList.add('abandoned', goneClass);
  try { if (navigator.vibrate) navigator.vibrate(dir === 'super' ? CFG.HAPTIC_MS * 2 : CFG.HAPTIC_MS); } catch (_) {}
  decide(dir); renderCard(); setTimeout(function () { el.remove(); }, CFG.FLY_DURATION_MS + 80);
}
export function decide(dir: string): void {
  var c = state.shuffledCards[state.cardIndex]; if (!c) return;
  var weight = dir === 'super' ? CFG.SUPERLIKE_WEIGHT : 1;
  applyScore(c, dir, +1, weight); state.swipes.push({ card: c, dir: dir, weight: weight }); state.cardIndex++; adaptiveResort();
}
export function programmaticDecide(dir: string): void { var el = $('card-stage').querySelector('.card.front:not(.abandoned)'); if (el) flyOut(el, dir); }
export function undoLast(): void {
  if (!canUndo()) return;
  var l = state.swipes.pop(); applyScore(l.card, l.dir, -1, l.weight || 1); state.cardIndex = Math.max(0, state.cardIndex - 1); renderCard();
}

// Inspo P1.2: Swipe-Prozess abschliessen, sobald der Held bereit ist (Button).
export function skipRemainingSwipes(): void {
  if (!state.swipes.length) return;
  state.cardIndex = state.shuffledCards.length;
  var stage = $('card-stage');
  stage.querySelectorAll('.card:not(.abandoned)').forEach(function (c: any) { c.remove(); });
  finishSwiping();
}

export function finishSwiping(): void {
  document.body.classList.remove('swipe-active');
  state.busy = true; showLoading(STRINGS.loading.generating);
  setTimeout(function () {
    state.proposals = [generateProposal('initial')]; state.proposalIndex = 0; state.edits = {};
    state.hero = generateHero(); state.hero.story = composeHeroStory(); setHbEditing(false);
    show(SCREENS.RESULT);
    requestAnimationFrame(function () {
      renderHeldenblatt(); hideLoading(); state.busy = false;
    });
  }, CFG.LOADING_DELAY_MS);
}
