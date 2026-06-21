/* =====================================================
   SWIPE-Bereich (DOM): Kartenstapel, Gesten, Vorladen, Abschluss.
===================================================== */
import { $ } from '../util/dom';
import { state } from '../state/session';
import { PHASES } from '../data/inspirations.js';
import { CFG, tierClass, SCREENS } from '../core/constants';
import { loadSettings, isThemeTypeEnabled } from '../core/settings';
import { applyScore, pickBestFrom } from '../core/scoring';
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
  state.shuffledCards = diversifyFirstN(PHASES[0].cards, CFG.MIN_SWIPES_FOR_SKIP);

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
  $('card-counter').textContent = STRINGS.swipe.cardCounter(state.cardIndex + 1, state.shuffledCards.length);
  $('btn-undo').disabled = !canUndo();
  var skipBtn = $('btn-skip');
  if (skipBtn) {
    var done = state.cardIndex;
    skipBtn.style.display = done >= CFG.MIN_SWIPES_FOR_SKIP ? '' : 'none';
  }
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
          return '<span class="card-theme-tag ' + tierClass(kv[0]) + '">' + escapeHtml(displayThemebook(kv[0])) + '</span>';
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
      '<div class="card-decision-overlay no">' + escapeHtml(STRINGS.swipe.decisionNo) + '</div>';
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
    el.innerHTML = overlays + '<div class="card-content">' + (card.image ? photoInner : textInner) + '</div>';
    if (i === 0) { attachSwipe(el); if (state.cardIndex === 0 && !state.swipes.length) el.classList.add('card-hint'); }
    stage.appendChild(el);
    if (card.image && !photoCached) {
      (function (cardEl, src, fallbackHtml) {
        var im: any = cardEl.querySelector('.card-photo img');
        if (!im) return;
        if (im.complete && im.naturalWidth > 0) { im.classList.add('loaded'); IMG_CACHE[src] = 'ok'; return; }
        im.onload = function () { im.classList.add('loaded'); IMG_CACHE[src] = 'ok'; };
        im.onerror = function () { IMG_CACHE[src] = 'bad'; var c = cardEl.querySelector('.card-content'); if (c) c.innerHTML = fallbackHtml; };
      })(el, card.image, textInner);
    }
  }
  for (var p = 0; p < IMG_PRELOAD_AHEAD; p++) {
    var pc = state.shuffledCards[state.cardIndex + p];
    if (pc && pc.image) loadImage(pc.image);
  }
}

export function canUndo(): boolean { return state.swipes.length > 0; }

export function adaptiveResort(): void {
  if (state.cardIndex < 2 || state.cardIndex >= state.shuffledCards.length) return;
  var pp: any = {};
  state.swipes.filter(function (s: any) { return s.dir === 'yes'; }).forEach(function (s: any) {
    Object.entries(s.card.affinities || {}).forEach(function (kv: any) { pp[kv[0]] = (pp[kv[0]] || 0) + kv[1]; });
  });
  if (!Object.keys(pp).length) return;
  var seen = state.shuffledCards.slice(0, state.cardIndex);
  var rem = state.shuffledCards.slice(state.cardIndex);
  var sc = function (c: any) { return Object.entries(c.affinities || {}).reduce(function (s: number, kv: any) { return s + (pp[kv[0]] || 0) * kv[1]; }, 0); };
  rem.sort(function (a: any, b: any) { return sc(b) - sc(a); });
  state.shuffledCards = seen.concat(rem);
}

export function attachSwipe(el: any): void {
  var startX = 0, dx = 0, dragging = false, lastX = 0, lastTime = 0, velocityX = 0, activePtr: any = null;
  var yesEl = el.querySelector('.yes'), noEl = el.querySelector('.no');
  var upd = function () {
    if (dx > 8) { yesEl.style.opacity = String(Math.min(1, (dx - 8) / 60)); noEl.style.opacity = '0'; }
    else if (dx < -8) { noEl.style.opacity = String(Math.min(1, (-dx - 8) / 60)); yesEl.style.opacity = '0'; }
    else { yesEl.style.opacity = '0'; noEl.style.opacity = '0'; }
  };
  el.addEventListener('pointerdown', function (e: any) {
    if (el.classList.contains('abandoned') || activePtr !== null) return;
    el.classList.remove('card-hint'); activePtr = e.pointerId;
    try { el.setPointerCapture(e.pointerId); } catch (_) {}
    dragging = true; el.classList.add('dragging'); startX = lastX = e.clientX; lastTime = performance.now(); dx = 0; velocityX = 0;
  });
  el.addEventListener('pointermove', function (e: any) {
    if (!dragging || e.pointerId !== activePtr) return; if (e.cancelable) e.preventDefault();
    var now = performance.now(), dt = now - lastTime;
    if (dt > 0) velocityX = velocityX * 0.5 + ((e.clientX - lastX) / dt) * 0.5;
    lastX = e.clientX; lastTime = now; dx = e.clientX - startX;
    el.style.transform = 'translate3d(' + dx + 'px,0,0) rotate(' + Math.max(-18, Math.min(18, dx * 0.06)) + 'deg)';
    upd();
  }, { passive: false });
  var onUp = function (e: any) {
    if (!dragging || e.pointerId !== activePtr) return;
    dragging = false; activePtr = null; el.classList.remove('dragging');
    try { el.releasePointerCapture(e.pointerId); } catch (_) {}
    var iy = dx > CFG.SWIPE_DISTANCE || (velocityX > CFG.SWIPE_VELOCITY && dx > 4);
    var in_ = dx < -CFG.SWIPE_DISTANCE || (velocityX < -CFG.SWIPE_VELOCITY && dx < -4);
    if (iy) flyOut(el, 'yes'); else if (in_) flyOut(el, 'no');
    else { el.style.transform = 'translate3d(0,0,0) rotate(0deg)'; yesEl.style.opacity = '0'; noEl.style.opacity = '0'; }
  };
  el.addEventListener('pointerup', onUp); el.addEventListener('pointercancel', onUp);
}
export function flyOut(el: any, dir: string): void {
  if (el.classList.contains('abandoned')) return;
  el.classList.remove('card-hint'); el.classList.add('abandoned', dir === 'yes' ? 'gone-right' : 'gone-left');
  try { if (navigator.vibrate) navigator.vibrate(CFG.HAPTIC_MS); } catch (_) {}
  decide(dir); renderCard(); setTimeout(function () { el.remove(); }, CFG.FLY_DURATION_MS + 80);
}
export function decide(dir: string): void {
  var c = state.shuffledCards[state.cardIndex]; if (!c) return;
  applyScore(c, dir, +1); state.swipes.push({ card: c, dir: dir }); state.cardIndex++; adaptiveResort();
}
export function programmaticDecide(dir: string): void { var el = $('card-stage').querySelector('.card.front:not(.abandoned)'); if (el) flyOut(el, dir); }
export function undoLast(): void {
  if (!canUndo()) return;
  var l = state.swipes.pop(); applyScore(l.card, l.dir, -1); state.cardIndex = Math.max(0, state.cardIndex - 1); renderCard();
}

// #47: Swipe-Prozess fruehzeitig beenden
export function skipRemainingSwipes(): void {
  if (state.cardIndex < CFG.MIN_SWIPES_FOR_SKIP) return;
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
