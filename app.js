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
  busy: false,
  edits: {},
  hero: null,
  resultPage: 0
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

function displayMight(level)    { return STRINGS.might[level]     || level; }
function displayThemebook(name) { return STRINGS.themebooks[name] || name;  }

/* =====================================================
   STRINGS INITIALISIERUNG
===================================================== */

function initStrings() {
  document.title = STRINGS.pageTitle;
  document.querySelector('.welcome-mark').textContent            = STRINGS.welcome.mark;
  document.querySelector('.welcome-title').textContent           = STRINGS.welcome.title;
  document.querySelector('.welcome-sub').textContent             = STRINGS.welcome.sub;
  document.querySelector('.welcome-instructions h3').textContent = STRINGS.welcome.howTitle;
  const ul = document.querySelector('.welcome-instructions ul');
  ul.innerHTML = '';
  STRINGS.welcome.howItems.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  });
  if ($('btn-start')) $('btn-start').textContent = STRINGS.welcome.btnStart;
  document.querySelector('.phase-intro-start').textContent = STRINGS.swipe.phaseIntroTap;
  if ($('btn-no'))   $('btn-no').setAttribute('aria-label',   STRINGS.swipe.ariaNo);
  if ($('btn-undo')) $('btn-undo').setAttribute('aria-label', STRINGS.swipe.ariaUndo);
  if ($('btn-yes'))  $('btn-yes').setAttribute('aria-label',  STRINGS.swipe.ariaYes);
  document.querySelector('#screen-settings h2').textContent = STRINGS.settings.heading;
  if ($('btn-settings-back')) $('btn-settings-back').setAttribute('aria-label', STRINGS.settings.ariaBack);
  if ($('btn-settings'))      $('btn-settings').setAttribute('aria-label',      STRINGS.settings.ariaOpen);
  if ($('settings-might-title')) $('settings-might-title').textContent = STRINGS.settings.mightGroup.title;
  if ($('settings-might-sub'))   $('settings-might-sub').textContent   = STRINGS.settings.mightGroup.sub;
  if ($('settings-vm-title'))    $('settings-vm-title').textContent    = STRINGS.settings.vmGroup.title;
  if ($('settings-vm-sub'))      $('settings-vm-sub').textContent      = STRINGS.settings.vmGroup.sub;
  Object.entries(STRINGS.settings.mightRows).forEach(([key, row]) => {
    const labelEl = document.querySelector(`[data-might-label="${key}"]`);
    const hintEl  = document.querySelector(`[data-might-hint="${key}"]`);
    if (labelEl) labelEl.textContent = row.label;
    if (hintEl)  hintEl.textContent  = row.hint;
  });
  Object.entries(STRINGS.settings.vmLabels).forEach(([key, label]) => {
    const el = document.querySelector(`[data-vm-label="${key}"]`);
    if (el) el.textContent = label;
  });
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
  if ($('loading-text')) $('loading-text').textContent = STRINGS.loading.default;
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

const audio   = $('bg-audio');
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
  audio.muted  = isMuted();
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
  state.phaseIndex    = 0;
  state.cardIndex     = 0;
  state.swipes        = [];
  state.affinityScores = {};
  state.hookCounts    = {};
  state.proposals     = [];
  state.proposalIndex = 0;
  state.edits         = {};
  state.hero          = null;
  state.resultPage    = 0;
  state.busy          = false;
  document.body.classList.add('swipe-active');
  show('screen-swipe');
  showPhaseIntro(0, loadPhase);
}

function loadPhase() {
  const phase = PHASES[state.phaseIndex];
  state.shuffledCards = shuffleArray(phase.cards.slice());
  state.cardIndex     = 0;
  renderCard();
}

function updatePhaseUI() {
  const phase = PHASES[state.phaseIndex];
  $('phase-eyebrow').textContent = phase.eyebrow;
  $('phase-title').textContent   = phase.title;
  $('card-counter').textContent  = STRINGS.swipe.cardCounter(state.cardIndex + 1, state.shuffledCards.length);
  $$('#phase-progress .phase-dot').forEach((dot, i) => {
    dot.classList.remove('active', 'done');
    if (i < state.phaseIndex)        dot.classList.add('done');
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
    const idx    = state.cardIndex + i;
    if (idx >= state.shuffledCards.length) continue;
    const card   = state.shuffledCards[idx];
    const cardEl = document.createElement('div');
    cardEl.className  = 'card' + (i === 0 ? ' front' : ` behind behind-${i}`);
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
      if (state.phaseIndex === 0 && state.cardIndex === 0 && state.swipes.length === 0)
        cardEl.classList.add('card-hint');
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
  const score     = (card) => Object.entries(card.affinities || {})
    .reduce((sum, [tb, w]) => sum + (phasePref[tb] || 0) * w, 0);
  remaining.sort((a, b) => score(b) - score(a));
  state.shuffledCards = [...seen, ...remaining];
}

/* =====================================================
   SWIPE INTERACTION
===================================================== */

function attachSwipe(cardEl) {
  let startX = 0, dx = 0, dragging = false;
  let lastX = 0, lastTime = 0, velocityX = 0;
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
    if (dt > 0) velocityX = velocityX * 0.5 + ((e.clientX - lastX) / dt) * 0.5;
    lastX = e.clientX; lastTime = now;
    dx = e.clientX - startX;
    cardEl.style.transform = `translate3d(${dx}px,0,0) rotate(${Math.max(-18, Math.min(18, dx * 0.06))}deg)`;
    updateOverlay();
  };
  const onUp = (e) => {
    if (!dragging || e.pointerId !== activePointerId) return;
    dragging = false; activePointerId = null;
    cardEl.classList.remove('dragging');
    try { cardEl.releasePointerCapture(e.pointerId); } catch (_) {}
    const isYes = dx >  CFG.SWIPE_DISTANCE || (velocityX >  CFG.SWIPE_VELOCITY && dx >  4);
    const isNo  = dx < -CFG.SWIPE_DISTANCE || (velocityX < -CFG.SWIPE_VELOCITY && dx < -4);
    if (isYes)     flyOut(cardEl, 'yes');
    else if (isNo) flyOut(cardEl, 'no');
    else {
      cardEl.style.transform = 'translate3d(0,0,0) rotate(0deg)';
      yesEl.style.opacity = '0'; noEl.style.opacity = '0';
    }
  };
  cardEl.addEventListener('pointerdown',   onDown);
  cardEl.addEventListener('pointermove',   onMove, { passive: false });
  cardEl.addEventListener('pointerup',     onUp);
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
    pool[0]);
}

function pickRandomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function pickQuestWithExpansionPreference(pool) {
  const expanded = pool.filter(q => q.expanded);
  if (expanded.length > 0 && Math.random() < CFG.EXPANDED_PREFERENCE)
    return expanded[Math.floor(Math.random() * expanded.length)];
  return pool[Math.floor(Math.random() * pool.length)];
}

function generateTheme(themebookName, settings) {
  const tb          = THEMEBOOKS[themebookName];
  const titleTag    = pickWithExpansionPreference(tb.titleTagSuggestions, 1)[0];
  const powerTags   = pickWithExpansionPreference(tb.powerTagPool, 2);
  const weaknessTag = pickWithExpansionPreference(tb.weaknessTagPool, 1)[0];
  const quest       = pickQuestWithExpansionPreference(tb.questPool);
  let resolvedType  = tb.type;
  if (tb.type === 'Variable Might')
    resolvedType = (settings.variableMight[themebookName] || {}).level || 'Origin';
  return { type: resolvedType, themebook: themebookName, titleTag, powerTags, weaknessTag, quest };
}

function generateProposal(mode, baseProposal) {
  mode = mode || 'initial';
  const s = loadSettings();
  const enabledLevels = ['Origin','Adventure','Greatness'].filter(l => s.mightLevels[l]);
  if (!enabledLevels.length) enabledLevels.push('Origin');
  const enabledVM = ['Companion','Magic','Possessions'].filter(k => s.variableMight[k].enabled);
  const standardSlots = [0,1,2].map(i => enabledLevels[i % enabledLevels.length]);
  const allSlots = enabledVM.length ? [...standardSlots, 'Variable Might']
    : [...standardSlots, enabledLevels[standardSlots.length % enabledLevels.length]];
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
    state.proposals     = [generateProposal('initial')];
    state.proposalIndex = 0;
    state.edits         = {};
    state.hero          = generateHero();
    state.resultPage    = 0;
    show('screen-result');
    requestAnimationFrame(() => {
      renderCurrentResultPage();
      attachResultPageSwipe();
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
  showLoading(STRINGS.loading.alternative);
  setTimeout(() => {
    state.proposals.push(generateProposal(mode, state.proposals[0]));
    state.proposalIndex = state.proposals.length - 1;
    state.edits      = {};
    state.resultPage = 1;
    state.busy       = false;
    renderCurrentResultPage();
    hideLoading();
  }, CFG.ALT_LOADING_DELAY_MS);
}

/* =====================================================
   HELD-GENERATOR
===================================================== */

function generateHero() {
  return {
    firstName:   pickRandomFrom(HERO_FIRSTNAMES),
    epithet:     pickRandomFrom(HERO_EPITHETS),
    title:       pickRandomFrom(HERO_TITLES),
    description: pickRandomFrom(HERO_DESCRIPTIONS)
  };
}

function rerollHeroPart(part) {
  const pools = {
    firstName:   HERO_FIRSTNAMES,
    epithet:     HERO_EPITHETS,
    title:       HERO_TITLES,
    description: HERO_DESCRIPTIONS
  };
  let newVal, attempts = 0;
  do { newVal = pickRandomFrom(pools[part]); attempts++; }
  while (newVal === state.hero[part] && attempts < 5);
  state.hero[part] = newVal;
  renderHeroPage();
}

/* =====================================================
   ERGEBNISSEITE — ELEMENT-EDITS (Themes)
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
  e.alts.push(val); e.index = e.alts.length;
}

function clearThemeElementEdits(ti) {
  ['title','pow0','pow1','weakness','quest'].forEach(k => delete state.edits[editKey(ti, k)]);
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
  if (newVal !== undefined) addAlt(ti, k, newVal);
}

function handleNavigate(ti, k, dir) {
  const e = getEdit(ti, k);
  if (!e) return;
  e.index = Math.max(0, Math.min(e.alts.length, e.index + dir));
}

/* =====================================================
   ERGEBNIS-SCREEN — SEITENNAVIGATION
===================================================== */

function totalResultPages() {
  if (!state.proposals.length) return 1;
  return 1 + state.proposals[state.proposalIndex].themes.length + 1;
}

function navigateResult(dir) {
  const newPage = state.resultPage + dir;
  if (newPage < 0 || newPage >= totalResultPages()) return;
  state.resultPage = newPage;
  renderCurrentResultPage();
}

function renderCurrentResultPage() {
  const page = state.resultPage;
  const n    = state.proposals[state.proposalIndex].themes.length;
  if (page === 0)     renderHeroPage();
  else if (page <= n) renderThemePage(page - 1);
  else                renderSavePage();
  updateResultNav();
}

function updateResultNav() {
  const total   = totalResultPages();
  const current = state.resultPage;
  const dotsEl  = $('result-dots');
  dotsEl.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.type      = 'button';
    dot.className = 'result-dot' + (i === current ? ' active' : '');
    const idx = i;
    dot.addEventListener('click', () => { state.resultPage = idx; renderCurrentResultPage(); });
    dotsEl.appendChild(dot);
  }
  const prevBtn = $('result-nav-prev');
  const nextBtn = $('result-nav-next');
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === total - 1;
  const isPreSave = current === total - 2;
  nextBtn.textContent = isPreSave ? 'Fertig \u2192' : '\u203a';
  nextBtn.classList.toggle('result-nav-finish', isPreSave);
}

function attachResultPageSwipe() {
  const pages = $('result-pages');
  let startX = 0, startY = 0, tracking = false;
  pages.addEventListener('pointerdown', (e) => { startX = e.clientX; startY = e.clientY; tracking = true; }, { passive: true });
  pages.addEventListener('pointerup', (e) => {
    if (!tracking) return; tracking = false;
    if ($('edit-sheet-overlay').classList.contains('active')) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) navigateResult(dx < 0 ? 1 : -1);
  }, { passive: true });
  pages.addEventListener('pointercancel', () => { tracking = false; }, { passive: true });
}

/* =====================================================
   SEITE 0: HELD-ÜBERSICHT
===================================================== */

function renderHeroPage() {
  const h = state.hero;
  $('result-pages').innerHTML = `
    <div class="result-page result-hero-page">
      <div class="hero-eyebrow">${escapeHtml(STRINGS.hero.eyebrow)}</div>
      <div class="hero-name">${escapeHtml(h.firstName)} ${escapeHtml(h.epithet)}</div>
      <div class="hero-divider"></div>
      <div class="hero-title">${escapeHtml(h.title)}</div>
      <div class="hero-description">${escapeHtml(h.description)}</div>
      <div class="hero-reroll-grid">
        <button class="hero-reroll-btn" data-part="firstName">${escapeHtml(STRINGS.hero.rerollFirstName)}</button>
        <button class="hero-reroll-btn" data-part="epithet">${escapeHtml(STRINGS.hero.rerollEpithet)}</button>
        <button class="hero-reroll-btn" data-part="title">${escapeHtml(STRINGS.hero.rerollTitle)}</button>
        <button class="hero-reroll-btn" data-part="description">${escapeHtml(STRINGS.hero.rerollDescription)}</button>
      </div>
    </div>`;
  $('result-pages').querySelectorAll('.hero-reroll-btn').forEach(btn => {
    btn.addEventListener('click', () => rerollHeroPart(btn.dataset.part));
  });
}

/* =====================================================
   SEITEN 1-n: THEMES (Lese-Ansicht)
===================================================== */

function expandedMark(entry) {
  if (!entry || typeof entry === 'string') return '';
  return entry.expanded
    ? `<span class="expanded-marker" title="${STRINGS.expanded.title}" aria-label="${STRINGS.expanded.ariaLabel}">${STRINGS.expanded.symbol}</span>`
    : '';
}

function renderThemePage(ti) {
  const dt = getDisplayTheme(ti);
  const mc = dt.type === 'Origin' ? 'tc-origin' : dt.type === 'Adventure' ? 'tc-adventure' : 'tc-greatness';
  const n  = state.proposals[state.proposalIndex].themes.length;
  $('result-pages').innerHTML = `
    <div class="result-page result-theme-page">
      <div class="rtp-header ${mc}">
        <div>
          <div class="rtp-themebook">${escapeHtml(displayThemebook(dt.themebook))}</div>
          <span class="rtp-might-badge">${escapeHtml(displayMight(dt.type))}</span>
        </div>
        <span class="rtp-theme-nr">${escapeHtml(STRINGS.hero.themeNr(ti + 1, n))}</span>
      </div>
      <div class="rtp-content">
        <div class="rtp-title-tag">${displayTag(dt.titleTag.text)}${expandedMark(dt.titleTag)}</div>
        <div class="rtp-power-tags">
          <div class="rtp-power-tag">${displayTag(dt.powerTags[0].text)}${expandedMark(dt.powerTags[0])}</div>
          <div class="rtp-power-tag">${displayTag(dt.powerTags[1].text)}${expandedMark(dt.powerTags[1])}</div>
        </div>
        <div class="rtp-weakness-tag">${escapeHtml(STRINGS.hero.weaknessPrefix)} ${displayTag(dt.weaknessTag.text)}${expandedMark(dt.weaknessTag)}</div>
        <div class="rtp-quest">
          <div class="rtp-quest-label">${escapeHtml(STRINGS.result.questLabel)}</div>
          <div class="rtp-quest-title">&bdquo;${escapeHtml(dt.quest.title)}&ldquo;${expandedMark(dt.quest)}</div>
          <div class="rtp-quest-desc">${escapeHtml(dt.quest.description)}</div>
        </div>
      </div>
      <div class="rtp-footer">
        <button class="rtp-edit-btn" id="rtp-edit-btn">${escapeHtml(STRINGS.hero.editTheme)}</button>
      </div>
    </div>`;
  $('rtp-edit-btn').addEventListener('click', () => openEditSheet(ti));
}

/* =====================================================
   LETZTE SEITE: SPEICHERN
===================================================== */

function renderSavePage() {
  const h        = state.hero;
  const proposal = state.proposals[state.proposalIndex];
  const exhausted = state.proposals.length >= CFG.MAX_PROPOSALS;
  const themePills = proposal.themes.map((_, ti) => {
    const dt = getDisplayTheme(ti);
    const mc = dt.type === 'Origin' ? 'pill-origin' : dt.type === 'Adventure' ? 'pill-adventure' : 'pill-greatness';
    return `<span class="save-theme-pill ${mc}">${escapeHtml(displayThemebook(dt.themebook))}</span>`;
  }).join('');
  $('result-pages').innerHTML = `
    <div class="result-page result-save-page">
      <div class="save-eyebrow">${escapeHtml(STRINGS.hero.saveEyebrow)}</div>
      <div class="save-hero-name">${escapeHtml(h.firstName)} ${escapeHtml(h.epithet)}</div>
      <div class="save-themes">${themePills}</div>
      <div class="save-actions">
        <button class="save-btn-primary" id="save-pdf">${escapeHtml(STRINGS.result.btnAccept)}</button>
        <button class="save-btn-secondary${exhausted ? ' exhausted' : ''}" id="save-alt"${exhausted ? ' disabled' : ''}>
          ${escapeHtml(exhausted ? STRINGS.result.btnAlternativeMaxed : STRINGS.result.btnAlternative)}
        </button>
        <button class="save-btn-ghost" id="save-restart">${escapeHtml(STRINGS.result.btnRestart)}</button>
      </div>
    </div>`;
  $('save-pdf').addEventListener('click', generatePDF);
  $('save-alt').addEventListener('click', () => { if (!exhausted) generateAlternative(); });
  $('save-restart').addEventListener('click', () => { document.body.classList.remove('swipe-active'); show('screen-welcome'); });
}

/* =====================================================
   EDIT SHEET
===================================================== */

function openEditSheet(ti) {
  const dt        = getDisplayTheme(ti);
  const sheetBody = $('edit-sheet-body');
  const row = (k, label, entry) => {
    const isQuest = k === 'quest';
    const rawText = isQuest ? entry.title : entry.text;
    const isWeak  = k === 'weakness';
    const e       = getEdit(ti, k);
    const total   = 1 + (e ? e.alts.length : 0);
    const idx     = e ? e.index : 0;
    const maxed   = e ? e.alts.length >= CFG.MAX_ELEMENT_ALTS : false;
    const navHtml = total > 1 ? `
      <div class="es-nav">
        <button type="button" class="es-nav-btn" data-ti="${ti}" data-k="${k}" data-dir="-1"${idx === 0 ? ' disabled' : ''}>&lsaquo;</button>
        <span class="es-nav-pos">${idx + 1}\u00a0/\u00a0${total}</span>
        <button type="button" class="es-nav-btn" data-ti="${ti}" data-k="${k}" data-dir="1"${idx >= total - 1 ? ' disabled' : ''}>&rsaquo;</button>
      </div>` : '';
    return `
      <div class="es-row">
        <div class="es-row-content">
          <div class="es-label">${escapeHtml(label)}</div>
          <div class="es-value${isWeak ? ' es-weak' : ''}">${displayTag(rawText)}${expandedMark(entry)}</div>
          ${navHtml}
        </div>
        <button type="button" class="es-reroll-btn" data-ti="${ti}" data-k="${k}"${maxed ? ' disabled' : ''}>&circlearrowleft; ${escapeHtml(STRINGS.hero.rerollShort)}</button>
      </div>`;
  };
  sheetBody.innerHTML = `
    <div class="es-header">
      <div class="es-themebook">${escapeHtml(displayThemebook(dt.themebook))}</div>
      <div class="es-might">${escapeHtml(displayMight(dt.type))}</div>
    </div>
    ${row('title',    STRINGS.hero.labelTitleTag,  dt.titleTag)}
    ${row('pow0',     STRINGS.hero.labelPower1,     dt.powerTags[0])}
    ${row('pow1',     STRINGS.hero.labelPower2,     dt.powerTags[1])}
    ${row('weakness', STRINGS.hero.labelWeakness,   dt.weaknessTag)}
    ${row('quest',    STRINGS.hero.labelQuest,      dt.quest)}
    <div class="es-footer">
      <button type="button" class="es-full-reroll" id="es-full-reroll" data-ti="${ti}">${escapeHtml(STRINGS.hero.fullReroll)}</button>
    </div>`;
  sheetBody.querySelectorAll('.es-reroll-btn').forEach(btn => {
    btn.addEventListener('click', () => { handleReroll(parseInt(btn.dataset.ti), btn.dataset.k); openEditSheet(ti); renderThemePage(ti); });
  });
  sheetBody.querySelectorAll('.es-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => { handleNavigate(parseInt(btn.dataset.ti), btn.dataset.k, parseInt(btn.dataset.dir)); openEditSheet(ti); renderThemePage(ti); });
  });
  $('es-full-reroll').addEventListener('click', () => { handleReroll(parseInt($('es-full-reroll').dataset.ti), 'theme'); openEditSheet(ti); renderThemePage(ti); });
  $('edit-sheet-overlay').classList.add('active');
}

function closeEditSheet() {
  $('edit-sheet-overlay').classList.remove('active');
}

/* =====================================================
   PDF
===================================================== */

const PDF_LAYOUT = { pageW: 297, pageH: 210, marginX: 12, marginY: 12, gap: 4 };
const PDF_COLORS = {
  paper: [250,243,223], ink: [42,36,25], inkSoft: [91,82,64],
  accent: [139,58,43], gold: [169,134,70], band: [236,224,196]
};

function pdfHeader(doc) {
  const { pageW, marginX, marginY } = PDF_LAYOUT;
  doc.setFillColor(...PDF_COLORS.paper);
  doc.rect(0, 0, pageW, PDF_LAYOUT.pageH, 'F');
  doc.setTextColor(...PDF_COLORS.ink);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  const heroName   = state.hero ? `${state.hero.firstName} ${state.hero.epithet}` : '';
  const headerText = heroName ? `${STRINGS.pdf.header} \u00b7 ${heroName}` : STRINGS.pdf.header;
  doc.text(headerText, marginX, marginY + 6);
  doc.setDrawColor(...PDF_COLORS.gold);
  doc.setLineWidth(0.4);
  doc.line(marginX, marginY + 9, pageW - marginX, marginY + 9);
  if (state.hero && state.hero.title) {
    doc.setFont('helvetica', 'italic'); doc.setFontSize(9); doc.setTextColor(...PDF_COLORS.inkSoft);
    doc.text(state.hero.title, marginX, marginY + 14);
  }
}

function pdfSectionLabel(doc, label, x, y) {
  doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(...PDF_COLORS.accent);
  doc.text(label, x + 4, y);
  return y + 4;
}

function pdfTagText(entry) {
  const t = capitalizeFirst(entry.text);
  return entry.expanded ? `${t} ${STRINGS.expanded.symbol}` : t;
}

function pdfThemeBlock(doc, theme, x, y, cardW, cardH) {
  doc.setDrawColor(...PDF_COLORS.ink); doc.setLineWidth(0.3);
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
    doc.text(lines, x + 4, cy); cy += lines.length * 4.5;
  });
  cy += 3;
  cy = pdfSectionLabel(doc, STRINGS.pdf.weaknessTag, x, cy);
  doc.setFont('times', 'italic'); doc.setFontSize(10); doc.setTextColor(...PDF_COLORS.accent);
  const wLines = doc.splitTextToSize(pdfTagText(theme.weaknessTag), cardW - 8);
  doc.text(wLines, x + 4, cy); cy += wLines.length * 4.5 + 4;
  cy = pdfSectionLabel(doc, STRINGS.pdf.quest, x, cy);
  doc.setFont('times', 'italic'); doc.setFontSize(10); doc.setTextColor(...PDF_COLORS.ink);
  const qLines = doc.splitTextToSize(`\u201e${capitalizeFirst(theme.quest.title)}\u201c${theme.quest.expanded ? ' ' + STRINGS.expanded.symbol : ''}`, cardW - 8);
  doc.text(qLines, x + 4, cy); cy += qLines.length * 4.5 + 1;
  doc.setFont('times', 'italic'); doc.setFontSize(8.5); doc.setTextColor(...PDF_COLORS.inkSoft);
  doc.text(doc.splitTextToSize(theme.quest.description, cardW - 8), x + 4, cy);
}

function pdfFooter(doc) {
  const { pageW, pageH, marginX } = PDF_LAYOUT;
  doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...PDF_COLORS.inkSoft);
  doc.text(STRINGS.pdf.footer, pageW - marginX, pageH - 4, { align: 'right' });
}

async function generatePDF() {
  if (!window.jspdf || !window.jspdf.jsPDF) { alert(STRINGS.pdf.errLoad); return; }
  const proposal = state.proposals[state.proposalIndex];
  if (!proposal) return;
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const { pageW, pageH, marginX, marginY, gap } = PDF_LAYOUT;
    pdfHeader(doc);
    const cardY = marginY + (state.hero && state.hero.title ? 20 : 16);
    const cardW = (pageW - 2 * marginX - 3 * gap) / 4;
    const cardH = pageH - cardY - marginY;
    proposal.themes.forEach((_, i) => pdfThemeBlock(doc, getDisplayTheme(i), marginX + i * (cardW + gap), cardY, cardW, cardH));
    pdfFooter(doc);
    const filename = state.hero
      ? `mistheld-${state.hero.firstName.toLowerCase()}-${state.hero.epithet.toLowerCase().replace(/\s/g, '-')}.pdf`
      : STRINGS.pdf.filename;
    doc.save(filename);
  } catch (err) { console.error('PDF-Fehler:', err); alert(STRINGS.pdf.errCreate); }
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
  const mightCbs     = [$('toggle-origin'), $('toggle-adventure'), $('toggle-greatness')];
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

initStrings();
initAudio();

$('btn-start').addEventListener('click', startSwipe);
$('btn-yes').addEventListener('click',   () => programmaticDecide('yes'));
$('btn-no').addEventListener('click',    () => programmaticDecide('no'));
$('btn-undo').addEventListener('click',  undoLast);
$('btn-settings').addEventListener('click',      openSettings);
$('btn-settings-back').addEventListener('click', () => { saveSettingsFromUI(); show('screen-welcome'); });
$('result-nav-prev').addEventListener('click', () => navigateResult(-1));
$('result-nav-next').addEventListener('click', () => navigateResult(1));
$('edit-sheet-overlay').addEventListener('click', (e) => {
  if (e.target === $('edit-sheet-overlay')) closeEditSheet();
});
['toggle-origin','toggle-adventure','toggle-greatness',
 'toggle-companion','toggle-magic','toggle-possessions'].forEach(id => {
  $(id).addEventListener('change', updateSettingsUI);
});
document.addEventListener('keydown', (e) => {
  if ($('screen-swipe').classList.contains('active')) {
    if      (e.key === 'ArrowRight') { e.preventDefault(); programmaticDecide('yes'); }
    else if (e.key === 'ArrowLeft')  { e.preventDefault(); programmaticDecide('no'); }
    else if (e.key === 'Backspace')  { e.preventDefault(); undoLast(); }
  }
  if ($('screen-result').classList.contains('active')) {
    if      (e.key === 'ArrowRight') { e.preventDefault(); navigateResult(1); }
    else if (e.key === 'ArrowLeft')  { e.preventDefault(); navigateResult(-1); }
    else if (e.key === 'Escape')     { closeEditSheet(); }
  }
});
