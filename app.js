/* =====================================================
   Mistheld · App-Logik
===================================================== */

const CFG = Object.freeze({
  STACK_DEPTH: 3,
  SWIPE_DISTANCE: 80,
  SWIPE_VELOCITY: 0.3,
  FLY_DURATION_MS: 900,
  LOADING_DELAY_MS: 700,
  ALT_LOADING_DELAY_MS: 450,
  MAX_PROPOSALS: 4,
  HAPTIC_MS: 6,
  AUDIO_VOLUME: 0.4,
  MUTED_KEY: 'mistheld:muted',
  SETTINGS_KEY: 'mistheld:settings',
  EXPANDED_PREFERENCE: 0.7
});

/* =====================================================
   SETTINGS
===================================================== */

const DEFAULT_SETTINGS = {
  mightLevels: { Origin: true, Adventure: false, Greatness: false },
  variableMight: {
    Companion:   { enabled: true, level: 'Origin' },
    Magic:       { enabled: true, level: 'Origin' },
    Possessions: { enabled: true, level: 'Origin' }
  }
};

function loadSettings() {
  try {
    const raw = localStorage.getItem(CFG.SETTINGS_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
    const p = JSON.parse(raw);
    return {
      mightLevels: Object.assign({}, DEFAULT_SETTINGS.mightLevels, p.mightLevels || {}),
      variableMight: {
        Companion:   Object.assign({}, DEFAULT_SETTINGS.variableMight.Companion,   (p.variableMight || {}).Companion   || {}),
        Magic:       Object.assign({}, DEFAULT_SETTINGS.variableMight.Magic,       (p.variableMight || {}).Magic       || {}),
        Possessions: Object.assign({}, DEFAULT_SETTINGS.variableMight.Possessions, (p.variableMight || {}).Possessions || {})
      }
    };
  } catch (_) { return JSON.parse(JSON.stringify(DEFAULT_SETTINGS)); }
}

function saveSettings(s) {
  try { localStorage.setItem(CFG.SETTINGS_KEY, JSON.stringify(s)); } catch (_) {}
}

const state = {
  phaseIndex: 0,
  cardIndex: 0,
  shuffledCards: [],
  swipes: [],
  affinityScores: {},
  hookCounts: {},
  proposals: [],
  proposalIndex: 0,
  themeCarouselIndex: 0,
  busy: false
};

/* =====================================================
   UTIL
===================================================== */

const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function tagText(entry) {
  return typeof entry === 'string' ? entry : entry.text;
}
function isExpanded(entry) {
  return typeof entry === 'object' && entry && entry.expanded === true;
}

function pickWithExpansionPreference(arr, n) {
  const pool = arr.slice();
  const out = [];
  const target = Math.min(n, pool.length);
  while (out.length < target && pool.length > 0) {
    const expandedIndices = pool
      .map((entry, i) => isExpanded(entry) ? i : -1)
      .filter(i => i >= 0);
    let pickIdx;
    if (expandedIndices.length > 0 && Math.random() < CFG.EXPANDED_PREFERENCE) {
      pickIdx = expandedIndices[Math.floor(Math.random() * expandedIndices.length)];
    } else {
      pickIdx = Math.floor(Math.random() * pool.length);
    }
    const entry = pool.splice(pickIdx, 1)[0];
    out.push({ text: tagText(entry), expanded: isExpanded(entry) });
  }
  return out;
}

/* =====================================================
   ANZEIGEÜBERSETZUNGEN
===================================================== */

const MIGHT_DE = {
  'Origin':    'Ursprung',
  'Adventure': 'Abenteuer',
  'Greatness': 'Allmacht'
};
function displayMight(level) { return MIGHT_DE[level] || level; }

const THEMEBOOK_DE = {
  'Circumstance':       'Umstände',
  'Devotion':           'Hingabe',
  'Past':               'Vergangenheit',
  'People':             'Volk',
  'Personality':        'Persönlichkeit',
  'Skill or Trade':     'Können & Beruf',
  'Trait':              'Begabung',
  'Duty':               'Pflicht',
  'Influence':          'Einfluss',
  'Knowledge':          'Wissen',
  'Prodigious Ability': 'Außergewöhnliche Fähigkeit',
  'Relic':              'Relikt',
  'Uncanny Being':      'Seltsames Wesen',
  'Destiny':            'Bestimmung',
  'Dominion':           'Herrschaft',
  'Mastery':            'Meisterschaft',
  'Monstrosity':        'Ungeheuer',
  'Companion':          'Begleiter',
  'Magic':              'Magie',
  'Possessions':        'Besitz'
};
function displayThemebook(name) { return THEMEBOOK_DE[name] || name; }

/* =====================================================
   SCREEN MANAGEMENT
===================================================== */

function show(screenId) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $(screenId).classList.add('active');
  // Settings-Icon nur auf Startseite sichtbar
  const settingsBtn = $('btn-settings');
  if (settingsBtn) settingsBtn.style.display = screenId === 'screen-welcome' ? '' : 'none';
}

function showLoading(text) {
  $('loading-text').textContent = text || 'Einen Moment...';
  $('loading').classList.add('active');
}
function hideLoading() { $('loading').classList.remove('active'); }

/* =====================================================
   AUDIO
===================================================== */

const audio = $('bg-audio');
const muteBtn = $('btn-mute');

function isMuted() {
  try { return localStorage.getItem(CFG.MUTED_KEY) === '1'; } catch (_) { return false; }
}
function setMutedPersisted(m) {
  try { localStorage.setItem(CFG.MUTED_KEY, m ? '1' : '0'); } catch (_) {}
}

function updateMuteUI() {
  muteBtn.classList.toggle('muted', audio.muted);
  muteBtn.setAttribute('aria-label', audio.muted ? 'Musik anschalten' : 'Musik stumm schalten');
}

function tryPlay() {
  const p = audio.play();
  if (p && typeof p.catch === 'function') p.catch(() => {});
}

function initAudio() {
  audio.volume = CFG.AUDIO_VOLUME;
  audio.muted = isMuted();
  updateMuteUI();
  tryPlay();
  const kickstart = () => { tryPlay(); };
  document.addEventListener('pointerdown', kickstart);
  document.addEventListener('touchstart', kickstart, { passive: true });
  document.addEventListener('keydown', kickstart);
  document.addEventListener('click', kickstart);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !audio.muted && audio.paused) tryPlay();
  });
}

muteBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  audio.muted = !audio.muted;
  setMutedPersisted(audio.muted);
  updateMuteUI();
  if (!audio.muted && audio.paused) tryPlay();
});

initAudio();

/* =====================================================
   SCORING
===================================================== */

function applyScore(card, dir, sign) {
  const factor = (dir === 'yes' ? 1 : -0.2) * sign;
  Object.entries(card.affinities || {}).forEach(([tb, w]) => {
    state.affinityScores[tb] = (state.affinityScores[tb] || 0) + factor * w;
  });
  if (dir === 'yes') {
    (card.hooks || []).forEach(h => {
      state.hookCounts[h] = Math.max(0, (state.hookCounts[h] || 0) + sign);
    });
  }
}

/* =====================================================
   PHASE MANAGEMENT
===================================================== */

function startSwipe() {
  state.phaseIndex = 0;
  state.cardIndex = 0;
  state.swipes = [];
  state.affinityScores = {};
  state.hookCounts = {};
  state.proposals = [];
  state.proposalIndex = 0;
  state.busy = false;
  document.body.classList.add('swipe-active');
  loadPhase();
  show('screen-swipe');
}

function loadPhase() {
  const phase = PHASES[state.phaseIndex];
  state.shuffledCards = shuffleArray(phase.cards.slice());
  state.cardIndex = 0;
  renderCard();
}

function updatePhaseUI() {
  const phase = PHASES[state.phaseIndex];
  $('phase-eyebrow').textContent = phase.eyebrow;
  $('phase-title').textContent = phase.title;
  $('card-counter').textContent =
    `Karte ${state.cardIndex + 1} von ${state.shuffledCards.length}`;
  $$('#phase-progress .phase-dot').forEach((dot, i) => {
    dot.classList.remove('active', 'done');
    if (i < state.phaseIndex) dot.classList.add('done');
    else if (i === state.phaseIndex) dot.classList.add('active');
  });
  $('btn-undo').disabled = !canUndo();
}

function canUndo() {
  if (state.swipes.length === 0) return false;
  const last = state.swipes[state.swipes.length - 1];
  return last.phase === state.phaseIndex;
}

function renderCard() {
  const stage = $('card-stage');
  stage.querySelectorAll('.card:not(.abandoned)').forEach(c => c.remove());
  if (state.cardIndex >= state.shuffledCards.length) {
    if (state.phaseIndex < PHASES.length - 1) {
      state.phaseIndex++;
      loadPhase();
    } else {
      finishSwiping();
    }
    return;
  }
  for (let i = CFG.STACK_DEPTH - 1; i >= 0; i--) {
    const idx = state.cardIndex + i;
    if (idx >= state.shuffledCards.length) continue;
    const card = state.shuffledCards[idx];
    const cardEl = document.createElement('div');
    cardEl.className = 'card' + (i === 0 ? ' front' : ` behind behind-${i}`);
    cardEl.style.zIndex = String(10 - i);
    cardEl.innerHTML = `
      <div class="card-decision-overlay yes">Passt</div>
      <div class="card-decision-overlay no">Nicht</div>
      <div class="card-glyph">~</div>
      <div class="card-title">${escapeHtml(card.title)}</div>
      <div class="card-text">${escapeHtml(card.text)}</div>
    `;
    if (i === 0) attachSwipe(cardEl);
    stage.appendChild(cardEl);
  }
  updatePhaseUI();
}

function adaptiveResort() {
  // Beginne mit Resorting ab der 3. Karte; schütz nur bereits entschiedene Karten.
  // state.cardIndex wurde in decide() bereits inkrementiert → zeigt auf nächste Karte.
  if (state.cardIndex < 2 || state.cardIndex >= state.shuffledCards.length) return;
  const phasePref = {};
  state.swipes
    .filter(s => s.dir === 'yes' && s.phase === state.phaseIndex)
    .forEach(s => Object.entries(s.card.affinities || {}).forEach(([tb, w]) => {
      phasePref[tb] = (phasePref[tb] || 0) + w;
    }));
  if (Object.keys(phasePref).length === 0) return;
  // Korrekt: seen = alle bereits entschiedenen Karten (0 bis cardIndex-1)
  // Die Karte bei cardIndex (nächste) darf ebenfalls resortiert werden
  const seen = state.shuffledCards.slice(0, state.cardIndex);
  const remaining = state.shuffledCards.slice(state.cardIndex);
  const score = (card) => Object.entries(card.affinities || {})
    .reduce((sum, [tb, w]) => sum + (phasePref[tb] || 0) * w, 0);
  remaining.sort((a, b) => score(b) - score(a));
  state.shuffledCards = [...seen, ...remaining];
}

/* =====================================================
   SWIPE INTERACTION
===================================================== */

function attachSwipe(cardEl) {
  let startX = 0, dx = 0;
  let dragging = false;
  let lastX = 0, lastTime = 0;
  let velocityX = 0;
  let activePointerId = null;
  const yesEl = cardEl.querySelector('.yes');
  const noEl  = cardEl.querySelector('.no');
  const updateOverlay = () => {
    if (dx > 8) {
      yesEl.style.opacity = String(Math.min(1, (dx - 8) / 60));
      noEl.style.opacity  = '0';
    } else if (dx < -8) {
      noEl.style.opacity  = String(Math.min(1, (-dx - 8) / 60));
      yesEl.style.opacity = '0';
    } else {
      yesEl.style.opacity = '0';
      noEl.style.opacity  = '0';
    }
  };
  const onDown = (e) => {
    if (cardEl.classList.contains('abandoned')) return;
    if (activePointerId !== null) return;
    activePointerId = e.pointerId;
    try { cardEl.setPointerCapture(e.pointerId); } catch (_) {}
    dragging = true;
    cardEl.classList.add('dragging');
    startX = lastX = e.clientX;
    lastTime = performance.now();
    dx = 0; velocityX = 0;
  };
  const onMove = (e) => {
    if (!dragging || e.pointerId !== activePointerId) return;
    if (e.cancelable) e.preventDefault();
    const now = performance.now();
    const dt = now - lastTime;
    if (dt > 0) {
      const instantV = (e.clientX - lastX) / dt;
      velocityX = velocityX * 0.5 + instantV * 0.5;
    }
    lastX = e.clientX;
    lastTime = now;
    dx = e.clientX - startX;
    const rotate = Math.max(-18, Math.min(18, dx * 0.06));
    cardEl.style.transform = `translate3d(${dx}px, 0, 0) rotate(${rotate}deg)`;
    updateOverlay();
  };
  const onUp = (e) => {
    if (!dragging || e.pointerId !== activePointerId) return;
    dragging = false;
    activePointerId = null;
    cardEl.classList.remove('dragging');
    try { cardEl.releasePointerCapture(e.pointerId); } catch (_) {}
    const isYes = dx >  CFG.SWIPE_DISTANCE || (velocityX >  CFG.SWIPE_VELOCITY && dx >  4);
    const isNo  = dx < -CFG.SWIPE_DISTANCE || (velocityX < -CFG.SWIPE_VELOCITY && dx < -4);
    if (isYes) flyOut(cardEl, 'yes');
    else if (isNo) flyOut(cardEl, 'no');
    else {
      cardEl.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
      yesEl.style.opacity = '0';
      noEl.style.opacity  = '0';
    }
  };
  cardEl.addEventListener('pointerdown', onDown);
  cardEl.addEventListener('pointermove', onMove, { passive: false });
  cardEl.addEventListener('pointerup', onUp);
  cardEl.addEventListener('pointercancel', onUp);
}

function flyOut(cardEl, direction) {
  if (cardEl.classList.contains('abandoned')) return;
  cardEl.classList.add('abandoned', direction === 'yes' ? 'gone-right' : 'gone-left');
  try { if (navigator.vibrate) navigator.vibrate(CFG.HAPTIC_MS); } catch (_) {}
  decide(direction);
  renderCard();
  setTimeout(() => cardEl.remove(), CFG.FLY_DURATION_MS + 80);
}

function decide(direction) {
  const card = state.shuffledCards[state.cardIndex];
  if (!card) return;
  applyScore(card, direction, +1);
  state.swipes.push({ phase: state.phaseIndex, card, dir: direction });
  state.cardIndex++;
  adaptiveResort();
}

function programmaticDecide(direction) {
  const cardEl = $('card-stage').querySelector('.card.front:not(.abandoned)');
  if (!cardEl) return;
  flyOut(cardEl, direction);
}

function undoLast() {
  if (!canUndo()) return;
  const last = state.swipes.pop();
  applyScore(last.card, last.dir, -1);
  state.cardIndex = Math.max(0, state.cardIndex - 1);
  renderCard();
}

/* =====================================================
   GENERATOR
===================================================== */

function pickBestFrom(list, exclude) {
  const cands = list.filter(tb => !(exclude || []).includes(tb));
  const pool = cands.length ? cands : list;
  return pool.reduce((best, tb) =>
    (state.affinityScores[tb] || 0) > (state.affinityScores[best] || -Infinity) ? tb : best,
    pool[0]
  );
}

function pickRandomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function pickQuestWithExpansionPreference(pool) {
  const expanded = pool.filter(q => q.expanded);
  if (expanded.length > 0 && Math.random() < CFG.EXPANDED_PREFERENCE) {
    return expanded[Math.floor(Math.random() * expanded.length)];
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

function generateTheme(themebookName) {
  const tb = THEMEBOOKS[themebookName];
  const titleTag    = pickWithExpansionPreference(tb.titleTagSuggestions, 1)[0];
  const powerTags   = pickWithExpansionPreference(tb.powerTagPool, 2);
  const weaknessTag = pickWithExpansionPreference(tb.weaknessTagPool, 1)[0];
  const quest       = pickQuestWithExpansionPreference(tb.questPool);

  let resolvedType = tb.type;
  if (tb.type === 'Variable Might') {
    const s = loadSettings();
    resolvedType = (s.variableMight[themebookName] || {}).level || 'Origin';
  }

  return { type: resolvedType, themebook: themebookName, titleTag, powerTags, weaknessTag, quest };
}

function generateProposal(mode, baseProposal) {
  mode = mode || 'initial';
  const s = loadSettings();
  const enabledLevels = ['Origin','Adventure','Greatness'].filter(l => s.mightLevels[l]);
  if (!enabledLevels.length) enabledLevels.push('Origin');
  const enabledVM = ['Companion','Magic','Possessions'].filter(k => s.variableMight[k].enabled);

  const standardSlots = [0,1,2].map(i => enabledLevels[i % enabledLevels.length]);
  const allSlots = enabledVM.length ? [...standardSlots, 'Variable Might'] :
    [...standardSlots, enabledLevels[standardSlots.length % enabledLevels.length]];

  const themebooks = allSlots.map((slotType, i) => {
    const list = slotType === 'Variable Might'
      ? (enabledVM.length ? enabledVM : ['Companion'])
      : TYPE_TO_THEMEBOOKS[slotType];
    if (mode === 'initial')        return pickBestFrom(list);
    if (mode === 'tags-only')      return baseProposal.themes[i].themebook;
    if (mode === 'new-themebooks') return pickBestFrom(list, [baseProposal.themes[i].themebook]);
    return pickRandomFrom(list);
  });

  return { mode, themes: themebooks.map(generateTheme) };
}

function finishSwiping() {
  document.body.classList.remove('swipe-active');
  state.busy = true;
  showLoading('Helden weben...');
  setTimeout(() => {
    state.proposals = [generateProposal('initial')];
    state.proposalIndex = 0;
    state.themeCarouselIndex = 0;
    show('screen-result');
    requestAnimationFrame(() => {
      renderResult();
      hideLoading();
      state.busy = false;
    });
  }, CFG.LOADING_DELAY_MS);
}

function generateAlternative() {
  if (state.busy) return;
  if (state.proposals.length >= CFG.MAX_PROPOSALS) return;
  const idx = state.proposals.length;
  const mode = idx === 1 ? 'tags-only' : idx === 2 ? 'new-themebooks' : 'fresh';
  state.busy = true;
  $('btn-alternative').disabled = true;
  showLoading('Anderen Helden weben...');
  setTimeout(() => {
    state.proposals.push(generateProposal(mode, state.proposals[0]));
    state.proposalIndex = state.proposals.length - 1;
    state.themeCarouselIndex = 0;
    // BUG FIX: state.busy muss VOR renderResult() auf false gesetzt werden,
    // sonst setzt renderResult() btnAlt.disabled = exhausted || true → permanent disabled.
    state.busy = false;
    renderResult();
    hideLoading();
  }, CFG.ALT_LOADING_DELAY_MS);
}

/* =====================================================
   RESULT RENDER
===================================================== */

function renderResult() {
  const proposal = state.proposals[state.proposalIndex];
  const track = $('theme-track');
  const pagination = $('theme-pagination');
  track.innerHTML = '';
  pagination.innerHTML = '';
  proposal.themes.forEach((theme, i) => {
    track.appendChild(buildThemeCard(theme));
    const dot = document.createElement('div');
    dot.className = 'theme-page-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => scrollToTheme(i));
    pagination.appendChild(dot);
  });
  track.onscroll = onTrackScroll;
  const btnAlt = $('btn-alternative');
  const exhausted = state.proposals.length >= CFG.MAX_PROPOSALS;
  btnAlt.disabled = exhausted || state.busy;
  btnAlt.style.opacity = exhausted ? '0.4' : '1';
  btnAlt.textContent = exhausted ? 'Alle Vorschl\u00e4ge gesehen' : 'Anderen Vorschlag';
  scrollToTheme(0, false);
}

function expandedMark(entry) {
  return entry && entry.expanded
    ? '<span class="expanded-marker" title="Erweiterung" aria-label="Erweiterung">\u2726</span>'
    : '';
}

function buildThemeCard(theme) {
  const card = document.createElement('div');
  const mc = theme.type === 'Origin' ? 'tc-origin'
           : theme.type === 'Adventure' ? 'tc-adventure'
           : theme.type === 'Greatness' ? 'tc-greatness'
           : 'tc-origin';
  card.className = 'theme-card ' + mc;

  const allPowerHtml = [
    `<div class="tc-power-title">${escapeHtml(theme.titleTag.text)}${expandedMark(theme.titleTag)}</div>`,
    ...theme.powerTags.map(t => `<div class="tc-power-tag">${escapeHtml(t.text)}${expandedMark(t)}</div>`)
  ].join('');

  card.innerHTML = `
    <div class="tc-header">
      <div class="tc-type">${escapeHtml(displayThemebook(theme.themebook))}</div>
      <div class="tc-might">${escapeHtml(displayMight(theme.type))}</div>
    </div>
    ${allPowerHtml}
    <div class="tc-weakness">${escapeHtml(theme.weaknessTag.text)}${expandedMark(theme.weaknessTag)}</div>
    <div class="tc-quest-section">
      <div class="tc-quest-label">Quest</div>
      <div class="tc-quest-title">&bdquo;${escapeHtml(theme.quest.title)}&ldquo;${expandedMark(theme.quest)}</div>
      <div class="tc-quest-desc">${escapeHtml(theme.quest.description)}</div>
    </div>
  `;
  return card;
}

function onTrackScroll() {
  const track = $('theme-track');
  const w = track.clientWidth;
  if (!w) return;
  const idx = Math.round(track.scrollLeft / w);
  if (idx !== state.themeCarouselIndex) {
    state.themeCarouselIndex = idx;
    updateThemeDots();
  }
}

function scrollToTheme(i, smooth) {
  smooth = smooth !== false;
  const track = $('theme-track');
  if (!track.clientWidth) { requestAnimationFrame(() => scrollToTheme(i, smooth)); return; }
  track.scrollTo({ left: i * track.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
  state.themeCarouselIndex = i;
  updateThemeDots();
}

function updateThemeDots() {
  $$('#theme-pagination .theme-page-dot').forEach((d, i) => {
    d.classList.toggle('active', i === state.themeCarouselIndex);
  });
}

/* =====================================================
   PDF
===================================================== */

const PDF_LAYOUT = { pageW: 297, pageH: 210, marginX: 12, marginY: 12, gap: 4 };
const PDF_COLORS = {
  paper:   [250, 243, 223],
  ink:     [42, 36, 25],
  inkSoft: [91, 82, 64],
  accent:  [139, 58, 43],
  gold:    [169, 134, 70],
  band:    [236, 224, 196]
};

function pdfHeader(doc) {
  const { pageW, pageH, marginX, marginY } = PDF_LAYOUT;
  doc.setFillColor(...PDF_COLORS.paper);
  doc.rect(0, 0, pageW, pageH, 'F');
  doc.setTextColor(...PDF_COLORS.ink);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('LEGEND IN THE MIST \u00b7 HERO CARD', marginX, marginY + 6);
  doc.setDrawColor(...PDF_COLORS.gold);
  doc.setLineWidth(0.4);
  doc.line(marginX, marginY + 9, pageW - marginX, marginY + 9);
}

function pdfSectionLabel(doc, label, x, y) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(...PDF_COLORS.accent);
  doc.text(label, x + 4, y);
  return y + 4;
}

function pdfTagText(entry) {
  return entry && entry.expanded ? `${entry.text} \u2736` : entry.text;
}

function pdfThemeBlock(doc, theme, x, y, cardW, cardH) {
  doc.setDrawColor(...PDF_COLORS.ink);
  doc.setLineWidth(0.3);
  doc.rect(x, y, cardW, cardH);
  doc.setFillColor(...PDF_COLORS.band);
  doc.rect(x, y, cardW, 16, 'F');
  doc.line(x, y + 16, x + cardW, y + 16);
  doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(...PDF_COLORS.accent);
  doc.text(displayMight(theme.type).toUpperCase(), x + cardW / 2, y + 6, { align: 'center' });
  doc.setFont('helvetica', 'italic'); doc.setFontSize(8); doc.setTextColor(...PDF_COLORS.inkSoft);
  doc.text(displayThemebook(theme.themebook), x + cardW / 2, y + 11, { align: 'center' });
  doc.setFont('times', 'italic'); doc.setFontSize(13); doc.setTextColor(...PDF_COLORS.ink);
  const titleLines = doc.splitTextToSize(pdfTagText(theme.titleTag), cardW - 6);
  doc.text(titleLines, x + cardW / 2, y + 22, { align: 'center' });
  let cy = y + 22 + titleLines.length * 5 + 4;
  cy = pdfSectionLabel(doc, 'POWER TAGS', x, cy);
  doc.setFont('times', 'normal'); doc.setFontSize(10); doc.setTextColor(...PDF_COLORS.ink);
  theme.powerTags.forEach(tag => {
    const lines = doc.splitTextToSize(`\u25e6 ${pdfTagText(tag)}`, cardW - 8);
    doc.text(lines, x + 4, cy);
    cy += lines.length * 4.5;
  });
  cy += 3;
  cy = pdfSectionLabel(doc, 'WEAKNESS TAG', x, cy);
  doc.setFont('times', 'italic'); doc.setFontSize(10); doc.setTextColor(...PDF_COLORS.accent);
  const wLines = doc.splitTextToSize(pdfTagText(theme.weaknessTag), cardW - 8);
  doc.text(wLines, x + 4, cy);
  cy += wLines.length * 4.5 + 4;
  cy = pdfSectionLabel(doc, 'QUEST', x, cy);
  doc.setFont('times', 'italic'); doc.setFontSize(10); doc.setTextColor(...PDF_COLORS.ink);
  const questTitleText = theme.quest.expanded ? `\u201e${theme.quest.title}\u201c \u2736` : `\u201e${theme.quest.title}\u201c`;
  const qLines = doc.splitTextToSize(questTitleText, cardW - 8);
  doc.text(qLines, x + 4, cy);
  cy += qLines.length * 4.5 + 1;
  doc.setFont('times', 'italic'); doc.setFontSize(8.5); doc.setTextColor(...PDF_COLORS.inkSoft);
  const dLines = doc.splitTextToSize(theme.quest.description, cardW - 8);
  doc.text(dLines, x + 4, cy);
}

function pdfFooter(doc) {
  const { pageW, pageH, marginX } = PDF_LAYOUT;
  doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...PDF_COLORS.inkSoft);
  doc.text('Mistheld \u00b7 LitM Heldengenerator \u00b7 \u2736 markiert erweiterte Inhalte', pageW - marginX, pageH - 4, { align: 'right' });
}

async function generatePDF() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert('PDF-Bibliothek konnte nicht geladen werden.'); return;
  }
  const proposal = state.proposals[state.proposalIndex];
  if (!proposal) return;
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const { pageW, pageH, marginX, marginY, gap } = PDF_LAYOUT;
    pdfHeader(doc);
    const cardW = (pageW - 2 * marginX - 3 * gap) / 4;
    const cardY = marginY + 16;
    const cardH = pageH - cardY - marginY;
    proposal.themes.forEach((theme, i) => {
      pdfThemeBlock(doc, theme, marginX + i * (cardW + gap), cardY, cardW, cardH);
    });
    pdfFooter(doc);
    doc.save('mistheld-character.pdf');
  } catch (err) {
    console.error('PDF-Fehler:', err);
    alert('PDF konnte nicht erstellt werden.');
  }
}

/* =====================================================
   SETTINGS SCREEN
===================================================== */

function openSettings() {
  const s = loadSettings();
  $('toggle-origin').checked      = s.mightLevels.Origin;
  $('toggle-adventure').checked   = s.mightLevels.Adventure;
  $('toggle-greatness').checked   = s.mightLevels.Greatness;
  $('toggle-companion').checked   = s.variableMight.Companion.enabled;
  $('toggle-magic').checked       = s.variableMight.Magic.enabled;
  $('toggle-possessions').checked = s.variableMight.Possessions.enabled;
  $('select-companion-level').value   = s.variableMight.Companion.level;
  $('select-magic-level').value       = s.variableMight.Magic.level;
  $('select-possessions-level').value = s.variableMight.Possessions.level;
  updateSettingsUI();
  show('screen-settings');
}

function updateSettingsUI() {
  const mightCbs = [$('toggle-origin'), $('toggle-adventure'), $('toggle-greatness')];
  const checkedCount = mightCbs.filter(c => c.checked).length;
  mightCbs.forEach(cb => { cb.disabled = (checkedCount === 1 && cb.checked); });

  [['toggle-companion','select-companion-level'],
   ['toggle-magic','select-magic-level'],
   ['toggle-possessions','select-possessions-level']].forEach(([tid, sid]) => {
    const enabled = $(tid).checked;
    $(sid).disabled = !enabled;
    $(sid).style.opacity = enabled ? '1' : '0.4';
  });
}

function saveSettingsFromUI() {
  saveSettings({
    mightLevels: {
      Origin:    $('toggle-origin').checked,
      Adventure: $('toggle-adventure').checked,
      Greatness: $('toggle-greatness').checked
    },
    variableMight: {
      Companion:   { enabled: $('toggle-companion').checked,   level: $('select-companion-level').value },
      Magic:       { enabled: $('toggle-magic').checked,       level: $('select-magic-level').value },
      Possessions: { enabled: $('toggle-possessions').checked, level: $('select-possessions-level').value }
    }
  });
}

/* =====================================================
   EVENT BINDINGS
===================================================== */

$('btn-start').addEventListener('click', startSwipe);
$('btn-yes').addEventListener('click', () => programmaticDecide('yes'));
$('btn-no').addEventListener('click', () => programmaticDecide('no'));
$('btn-undo').addEventListener('click', undoLast);
$('btn-accept').addEventListener('click', generatePDF);
$('btn-alternative').addEventListener('click', generateAlternative);
$('btn-restart').addEventListener('click', () => {
  document.body.classList.remove('swipe-active');
  show('screen-welcome');
});
$('btn-settings').addEventListener('click', openSettings);
$('btn-settings-back').addEventListener('click', () => {
  saveSettingsFromUI();
  show('screen-welcome');
});

['toggle-origin','toggle-adventure','toggle-greatness',
 'toggle-companion','toggle-magic','toggle-possessions'].forEach(id => {
  $(id).addEventListener('change', updateSettingsUI);
});

document.addEventListener('keydown', (e) => {
  if (!$('screen-swipe').classList.contains('active')) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); programmaticDecide('yes'); }
  else if (e.key === 'ArrowLeft')  { e.preventDefault(); programmaticDecide('no'); }
  else if (e.key === 'Backspace')  { e.preventDefault(); undoLast(); }
});
