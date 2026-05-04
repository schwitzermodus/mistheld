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
  MAX_ELEMENT_ALTS: 3,
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
  busy: false,
  edits: {}
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

function capitalizeFirst(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function displayTag(s) { return escapeHtml(capitalizeFirst(s)); }

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
   ANZEIGEÜBERSETZUNGEN — jetzt aus strings.js
===================================================== */

function displayMight(level)       { return STRINGS.might[level]      || level; }
function displayThemebook(name)    { return STRINGS.themebooks[name]  || name;  }

/* =====================================================
   STRINGS INITIALISIERUNG
   Füllt alle statischen HTML-Texte aus strings.js.
===================================================== */

function initStrings() {
  // Seitentitel
  document.title = STRINGS.pageTitle;

  // Startseite
  document.querySelector('.welcome-mark').textContent      = STRINGS.welcome.mark;
  document.querySelector('.welcome-title').textContent     = STRINGS.welcome.title;
  document.querySelector('.welcome-sub').textContent       = STRINGS.welcome.sub;
  document.querySelector('.welcome-instructions h3').textContent = STRINGS.welcome.howTitle;
  const ul = document.querySelector('.welcome-instructions ul');
  ul.innerHTML = '';
  STRINGS.welcome.howItems.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  });
  $('btn-start').textContent = STRINGS.welcome.btnStart;

  // Swipe-Screen
  document.querySelector('.phase-intro-start').textContent = STRINGS.swipe.phaseIntroTap;
  $('btn-no').setAttribute('aria-label',   STRINGS.swipe.ariaNo);
  $('btn-undo').setAttribute('aria-label', STRINGS.swipe.ariaUndo);
  $('btn-yes').setAttribute('aria-label',  STRINGS.swipe.ariaYes);

  // Ergebnisseite
  $('btn-accept').textContent      = STRINGS.result.btnAccept;
  $('btn-alternative').textContent = STRINGS.result.btnAlternative;
  $('btn-restart').textContent     = STRINGS.result.btnRestart;

  // Settings-Screen
  document.querySelector('#screen-settings h2').textContent                  = STRINGS.settings.heading;
  $('btn-settings-back').setAttribute('aria-label', STRINGS.settings.ariaBack);
  $('btn-settings').setAttribute('aria-label',      STRINGS.settings.ariaOpen);
  $('settings-might-title').textContent = STRINGS.settings.mightGroup.title;
  $('settings-might-sub').textContent   = STRINGS.settings.mightGroup.sub;
  $('settings-vm-title').textContent    = STRINGS.settings.vmGroup.title;
  $('settings-vm-sub').textContent      = STRINGS.settings.vmGroup.sub;

  // Might-Zeilen: Labels + Hints
  Object.entries(STRINGS.settings.mightRows).forEach(([key, row]) => {
    const labelEl = document.querySelector(`[data-might-label="${key}"]`);
    const hintEl  = document.querySelector(`[data-might-hint="${key}"]`);
    if (labelEl) labelEl.textContent = row.label;
    if (hintEl)  hintEl.textContent  = row.hint;
  });

  // VM-Labels
  Object.entries(STRINGS.settings.vmLabels).forEach(([key, label]) => {
    const el = document.querySelector(`[data-vm-label="${key}"]`);
    if (el) el.textContent = label;
  });

  // Select-Optionen aus STRINGS.might generieren (alle 3 Selects)
  ['select-companion-level', 'select-magic-level', 'select-possessions-level'].forEach(id => {
    const sel = $(id);
    if (!sel) return;
    const current = sel.value || 'Origin';
    sel.innerHTML = '';
    Object.entries(STRINGS.might).forEach(([val, label]) => {
      const opt = document.createElement('option');
      opt.value = val;
      opt.textContent = label;
      sel.appendChild(opt);
    });
    sel.value = current;
  });

  // Lade-Text (Default)
  $('loading-text').textContent = STRINGS.loading.default;
}

/* =====================================================
   SCREEN MANAGEMENT
===================================================== */

function show(screenId) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $(screenId).classList.add('active');
  const settingsBtn = $('btn-settings');
  if (settingsBtn) settingsBtn.style.display = screenId === 'screen-welcome' ? '' : 'none';
}

function showLoading(text) {
  $('loading-text').textContent = text || STRINGS.loading.default;
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
  muteBtn.setAttribute('aria-label', audio.muted ? STRINGS.audio.ariaOff : STRINGS.audio.ariaOn);
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
  const kickstart = () => tryPlay();
  document.addEventListener('pointerdown', kickstart, { once: true });
  document.addEventListener('touchstart',  kickstart, { once: true, passive: true });
  document.addEventListener('keydown',     kickstart, { once: true });
  document.addEventListener('click',       kickstart, { once: true });
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
   PHASE INTROS
===================================================== */

function showPhaseIntro(phaseIndex, callback) {
  const intro = STRINGS.phases[phaseIndex];
  $('pi-eyebrow').textContent   = intro.eyebrow;
  $('pi-title').textContent     = intro.title;
  $('pi-narrative').textContent = intro.narrative;
  const ql = $('pi-questions');
  ql.innerHTML = '';
  intro.questions.forEach(q => {
    const li = document.createElement('li');
    li.textContent = q;
    ql.appendChild(li);
  });
  const overlay = $('phase-intro-overlay');
  overlay.classList.add('active');
  const dismiss = () => {
    overlay.classList.remove('active');
    overlay.removeEventListener('pointerup', dismiss);
    callback();
  };
  overlay.addEventListener('pointerup', dismiss);
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
  state.edits = {};
  state.busy = false;
  document.body.classList.add('swipe-active');
  show('screen-swipe');
  showPhaseIntro(0, loadPhase);
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
  $('phase-title').textContent   = phase.title;
  $('card-counter').textContent  = STRINGS.swipe.cardCounter(state.cardIndex + 1, state.shuffledCards.length);
  $$('#phase-progress .phase-dot').forEach((dot, i) => {
    dot.classList.remove('active', 'done');
    if (i < state.phaseIndex)      dot.classList.add('done');
    else if (i === state.phaseIndex) dot.classList.add('active');
  });
  $('btn-undo').disabled = !canUndo();
}

function canUndo() {
  if (state.swipes.length === 0) return false;
  return state.swipes[state.swipes.length - 1].phase === state.phaseIndex;
}

function renderCard() {
  const stage = $('card-stage');
  stage.querySelectorAll('.card:not(.abandoned)').forEach(c => c.remove());
  if (state.cardIndex >= state.shuffledCards.length) {
    if (state.phaseIndex < PHASES.length - 1) {
      state.phaseIndex++;
      showPhaseIntro(state.phaseIndex, loadPhase);
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
      <div class="card-decision-overlay yes">${escapeHtml(STRINGS.swipe.decisionYes)}</div>
      <div class="card-decision-overlay no">${escapeHtml(STRINGS.swipe.decisionNo)}</div>
      <div class="card-glyph">~</div>
      <div class="card-title">${escapeHtml(card.title)}</div>
      <div class="card-divider"></div>
      <div class="card-text">${escapeHtml(card.text)}</div>
    `;
    if (i === 0) {
      attachSwipe(cardEl);
      if (state.phaseIndex === 0 && state.cardIndex === 0 && state.swipes.length === 0) {
        cardEl.classList.add('card-hint');
      }
    }
    stage.appendChild(cardEl);
  }
  updatePhaseUI();
}

function adaptiveResort() {
  if (state.cardIndex < 2 || state.cardIndex >= state.shuffledCards.length) return;
  const phasePref = {};
  state.swipes
    .filter(s => s.dir === 'yes' && s.phase === state.phaseIndex)
    .forEach(s => Object.entries(s.card.affinities || {}).forEach(([tb, w]) => {
      phasePref[tb] = (phasePref[tb] || 0) + w;
    }));
  if (Object.keys(phasePref).length === 0) return;
  const seen      = state.shuffledCards.slice(0, state.cardIndex);
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
    cardEl.classList.remove('card-hint');
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
    const dt  = now - lastTime;
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
    if (isYes)      flyOut(cardEl, 'yes');
    else if (isNo)  flyOut(cardEl, 'no');
    else {
      cardEl.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
      yesEl.style.opacity = '0';
      noEl.style.opacity  = '0';
    }
  };
  cardEl.addEventListener('pointerdown', onDown);
  cardEl.addEventListener('pointermove', onMove, { passive: false });
  cardEl.addEventListener('pointerup',   onUp);
  cardEl.addEventListener('pointercancel', onUp);
}

function flyOut(cardEl, direction) {
  if (cardEl.classList.contains('abandoned')) return;
  cardEl.classList.remove('card-hint');
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
  const pool  = cands.length ? cands : list;
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

function generateTheme(themebookName, settings) {
  const tb          = THEMEBOOKS[themebookName];
  const titleTag    = pickWithExpansionPreference(tb.titleTagSuggestions, 1)[0];
  const powerTags   = pickWithExpansionPreference(tb.powerTagPool, 2);
  const weaknessTag = pickWithExpansionPreference(tb.weaknessTagPool, 1)[0];
  const quest       = pickQuestWithExpansionPreference(tb.questPool);
  let resolvedType  = tb.type;
  if (tb.type === 'Variable Might') {
    resolvedType = (settings.variableMight[themebookName] || {}).level || 'Origin';
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

  return { mode, themes: themebooks.map(tb => generateTheme(tb, s)) };
}

function finishSwiping() {
  document.body.classList.remove('swipe-active');
  state.busy = true;
  showLoading(STRINGS.loading.generating);
  setTimeout(() => {
    state.proposals = [generateProposal('initial')];
    state.proposalIndex = 0;
    state.themeCarouselIndex = 0;
    state.edits = {};
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
  const idx  = state.proposals.length;
  const mode = idx === 1 ? 'tags-only' : idx === 2 ? 'new-themebooks' : 'fresh';
  state.busy = true;
  $('btn-alternative').disabled = true;
  showLoading(STRINGS.loading.alternative);
  setTimeout(() => {
    state.proposals.push(generateProposal(mode, state.proposals[0]));
    state.proposalIndex = state.proposals.length - 1;
    state.themeCarouselIndex = 0;
    state.edits = {};
    state.busy  = false;
    renderResult();
    hideLoading();
  }, CFG.ALT_LOADING_DELAY_MS);
}

/* =====================================================
   ERGEBNISSEITE — ELEMENT-EDITS
===================================================== */

function editKey(ti, k) { return `t${ti}-${k}`; }
function getEdit(ti, k) { return state.edits[editKey(ti, k)]; }

function getCurrentVal(ti, k, fallback) {
  const e = getEdit(ti, k);
  if (!e || e.index === 0) return fallback;
  return e.alts[e.index - 1];
}

function getDisplayTheme(ti) {
  const base = state.proposals[state.proposalIndex].themes[ti];
  const te   = getEdit(ti, 'theme');
  const tb   = (te && te.index > 0) ? te.alts[te.index - 1] : base;
  return {
    type:        tb.type,
    themebook:   tb.themebook,
    titleTag:    getCurrentVal(ti, 'title',    tb.titleTag),
    powerTags:  [getCurrentVal(ti, 'pow0',     tb.powerTags[0]),
                 getCurrentVal(ti, 'pow1',     tb.powerTags[1])],
    weaknessTag: getCurrentVal(ti, 'weakness', tb.weaknessTag),
    quest:       getCurrentVal(ti, 'quest',    tb.quest)
  };
}

function addAlt(ti, k, val) {
  const key = editKey(ti, k);
  if (!state.edits[key]) state.edits[key] = { alts: [], index: 0 };
  const e = state.edits[key];
  if (e.alts.length >= CFG.MAX_ELEMENT_ALTS) return;
  e.alts.push(val);
  e.index = e.alts.length;
}

function clearThemeElementEdits(ti) {
  ['title','pow0','pow1','weakness','quest'].forEach(k => delete state.edits[editKey(ti, k)]);
}

function handleThemeCardAction(e) {
  const rerollBtn = e.target.closest('.tc-reroll-btn');
  const navBtn    = e.target.closest('.tc-nav-btn');
  if (!rerollBtn && !navBtn) return;
  const ctrl = (rerollBtn || navBtn).closest('.tc-edit-ctrl');
  if (!ctrl) return;
  const ti = parseInt(ctrl.dataset.ti);
  const k  = ctrl.dataset.k;
  if (rerollBtn && !rerollBtn.disabled) handleReroll(ti, k);
  if (navBtn    && !navBtn.disabled)    handleNavigate(ti, k, parseInt(navBtn.dataset.dir));
}

function handleReroll(ti, k) {
  const dt = getDisplayTheme(ti);
  const tb = THEMEBOOKS[dt.themebook];
  const s  = loadSettings();
  let newVal;
  if      (k === 'theme')                { newVal = generateTheme(dt.themebook, s); clearThemeElementEdits(ti); }
  else if (k === 'title')                { newVal = pickWithExpansionPreference(tb.titleTagSuggestions, 1)[0]; }
  else if (k === 'pow0' || k === 'pow1') { newVal = pickWithExpansionPreference(tb.powerTagPool, 1)[0]; }
  else if (k === 'weakness')             { newVal = pickWithExpansionPreference(tb.weaknessTagPool, 1)[0]; }
  else if (k === 'quest')                { newVal = pickQuestWithExpansionPreference(tb.questPool); }
  if (newVal !== undefined) { addAlt(ti, k, newVal); rerenderThemeCard(ti); }
}

function handleNavigate(ti, k, dir) {
  const e = getEdit(ti, k);
  if (!e) return;
  e.index = Math.max(0, Math.min(e.alts.length, e.index + dir));
  rerenderThemeCard(ti);
}

function rerenderThemeCard(ti) {
  const track = $('theme-track');
  const old   = track.children[ti];
  if (old) track.replaceChild(buildThemeCard(ti), old);
}

/* =====================================================
   RESULT RENDER
===================================================== */

function expandedMark(entry) {
  return entry && entry.expanded
    ? `<span class="expanded-marker" title="${STRINGS.expanded.title}" aria-label="${STRINGS.expanded.ariaLabel}">${STRINGS.expanded.symbol}</span>`
    : '';
}

function buildEditCtrl(ti, k) {
  const e     = getEdit(ti, k);
  const total = 1 + (e ? e.alts.length : 0);
  const idx   = e ? e.index : 0;
  const maxed = e ? e.alts.length >= CFG.MAX_ELEMENT_ALTS : false;
  const nav   = total > 1 ? `
    <button class="tc-nav-btn" data-dir="-1" ${idx === 0 ? 'disabled' : ''}>&lsaquo;</button>
    <span class="tc-nav-pos">${idx + 1}&#160;/&#160;${total}</span>
    <button class="tc-nav-btn" data-dir="1" ${idx >= total - 1 ? 'disabled' : ''}>&rsaquo;</button>` : '';
  return `<div class="tc-edit-ctrl" data-ti="${ti}" data-k="${k}">
    ${nav}
    <button class="tc-reroll-btn" title="${escapeHtml(STRINGS.result.rerollTitle)}"${maxed ? ' disabled' : ''}>&#8634;</button>
  </div>`;
}

function buildThemeCard(ti) {
  const dt = getDisplayTheme(ti);
  const mc = dt.type === 'Origin'    ? 'tc-origin'
           : dt.type === 'Adventure' ? 'tc-adventure'
           : dt.type === 'Greatness' ? 'tc-greatness' : 'tc-origin';
  const card = document.createElement('div');
  card.className = 'theme-card ' + mc;

  const powerRows = [
    `<div class="tc-editable-row">
       <div class="tc-power-title">${displayTag(dt.titleTag.text)}${expandedMark(dt.titleTag)}</div>
       ${buildEditCtrl(ti, 'title')}
     </div>`,
    ...dt.powerTags.map((t, pi) => `
      <div class="tc-editable-row">
        <div class="tc-power-tag">${displayTag(t.text)}${expandedMark(t)}</div>
        ${buildEditCtrl(ti, 'pow' + pi)}
      </div>`)
  ].join('');

  card.innerHTML = `
    <div class="tc-header">
      <div>
        <div class="tc-type">${escapeHtml(displayThemebook(dt.themebook))}</div>
        <div class="tc-might">${escapeHtml(displayMight(dt.type))}</div>
      </div>
      ${buildEditCtrl(ti, 'theme')}
    </div>
    ${powerRows}
    <div class="tc-editable-row">
      <div class="tc-weakness">${displayTag(dt.weaknessTag.text)}${expandedMark(dt.weaknessTag)}</div>
      ${buildEditCtrl(ti, 'weakness')}
    </div>
    <div class="tc-editable-row">
      <div class="tc-quest-section">
        <div class="tc-quest-label">${escapeHtml(STRINGS.result.questLabel)}</div>
        <div class="tc-quest-title">&bdquo;${escapeHtml(dt.quest.title)}&ldquo;${expandedMark(dt.quest)}</div>
        <div class="tc-quest-desc">${escapeHtml(dt.quest.description)}</div>
      </div>
      ${buildEditCtrl(ti, 'quest')}
    </div>`;

  return card;
}

function renderResult() {
  const track      = $('theme-track');
  const pagination = $('theme-pagination');
  track.innerHTML      = '';
  pagination.innerHTML = '';
  const n = state.proposals[state.proposalIndex].themes.length;
  for (let i = 0; i < n; i++) {
    track.appendChild(buildThemeCard(i));
    const dot = document.createElement('div');
    dot.className = 'theme-page-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => scrollToTheme(i));
    pagination.appendChild(dot);
  }
  track.onclick  = handleThemeCardAction;
  track.onscroll = onTrackScroll;
  const btnAlt   = $('btn-alternative');
  const exhausted = state.proposals.length >= CFG.MAX_PROPOSALS;
  btnAlt.disabled    = exhausted || state.busy;
  btnAlt.style.opacity = exhausted ? '0.4' : '1';
  btnAlt.textContent   = exhausted ? STRINGS.result.btnAlternativeMaxed : STRINGS.result.btnAlternative;
  scrollToTheme(0, false);
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
  const { pageW, marginX, marginY } = PDF_LAYOUT;
  doc.setFillColor(...PDF_COLORS.paper);
  doc.rect(0, 0, pageW, PDF_LAYOUT.pageH, 'F');
  doc.setTextColor(...PDF_COLORS.ink);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text(STRINGS.pdf.header, marginX, marginY + 6);
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
  const t = capitalizeFirst(entry.text);
  return entry.expanded ? `${t} ${STRINGS.expanded.symbol}` : t;
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
  cy = pdfSectionLabel(doc, STRINGS.pdf.powerTags, x, cy);
  doc.setFont('times', 'normal'); doc.setFontSize(10); doc.setTextColor(...PDF_COLORS.ink);
  theme.powerTags.forEach(tag => {
    const lines = doc.splitTextToSize(`\u25e6 ${pdfTagText(tag)}`, cardW - 8);
    doc.text(lines, x + 4, cy);
    cy += lines.length * 4.5;
  });
  cy += 3;
  cy = pdfSectionLabel(doc, STRINGS.pdf.weaknessTag, x, cy);
  doc.setFont('times', 'italic'); doc.setFontSize(10); doc.setTextColor(...PDF_COLORS.accent);
  const wLines = doc.splitTextToSize(pdfTagText(theme.weaknessTag), cardW - 8);
  doc.text(wLines, x + 4, cy);
  cy += wLines.length * 4.5 + 4;
  cy = pdfSectionLabel(doc, STRINGS.pdf.quest, x, cy);
  doc.setFont('times', 'italic'); doc.setFontSize(10); doc.setTextColor(...PDF_COLORS.ink);
  const questTitleText = `\u201e${capitalizeFirst(theme.quest.title)}\u201c${theme.quest.expanded ? ' ' + STRINGS.expanded.symbol : ''}`;
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
  doc.text(STRINGS.pdf.footer, pageW - marginX, pageH - 4, { align: 'right' });
}

async function generatePDF() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert(STRINGS.pdf.errLoad); return;
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
    proposal.themes.forEach((_, i) => {
      pdfThemeBlock(doc, getDisplayTheme(i), marginX + i * (cardW + gap), cardY, cardW, cardH);
    });
    pdfFooter(doc);
    doc.save(STRINGS.pdf.filename);
  } catch (err) {
    console.error('PDF-Fehler:', err);
    alert(STRINGS.pdf.errCreate);
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
  [['toggle-companion',   'select-companion-level'],
   ['toggle-magic',       'select-magic-level'],
   ['toggle-possessions', 'select-possessions-level']].forEach(([tid, sid]) => {
    const enabled = $(tid).checked;
    $(sid).disabled    = !enabled;
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

initStrings();
initAudio();

$('btn-start').addEventListener('click', startSwipe);
$('btn-yes').addEventListener('click',   () => programmaticDecide('yes'));
$('btn-no').addEventListener('click',    () => programmaticDecide('no'));
$('btn-undo').addEventListener('click',  undoLast);
$('btn-accept').addEventListener('click',      generatePDF);
$('btn-alternative').addEventListener('click', generateAlternative);
$('btn-restart').addEventListener('click', () => {
  document.body.classList.remove('swipe-active');
  show('screen-welcome');
});
$('btn-settings').addEventListener('click',      openSettings);
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
  if      (e.key === 'ArrowRight') { e.preventDefault(); programmaticDecide('yes'); }
  else if (e.key === 'ArrowLeft')  { e.preventDefault(); programmaticDecide('no'); }
  else if (e.key === 'Backspace')  { e.preventDefault(); undoLast(); }
});
