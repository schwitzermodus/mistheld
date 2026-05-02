/* =====================================================
   Mistheld · App-Logik (refactored)
   - Pointer Events API · GPU-beschleunigte Animationen
   - Stack-Depth 2 (front + 1 behind)
   - Cross-Phase-Undo: blockiert (Undo nur innerhalb Phase)
   - Magic Numbers in CFG zentral
===================================================== */

const CFG = Object.freeze({
  STACK_DEPTH: 2,
  SWIPE_DISTANCE: 40,        // px
  SWIPE_VELOCITY: 0.3,       // px/ms
  FLY_DURATION_MS: 320,
  LOADING_DELAY_MS: 700,
  ALT_LOADING_DELAY_MS: 450,
  MAX_PROPOSALS: 4,
  HAPTIC_MS: 6,
  TYPES: ['Origin', 'Adventure', 'Greatness', 'Variable Might']
});

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
  busy: false  // schützt vor Mehrfach-Trigger während async-Übergängen
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

function pickRandomN(arr, n) {
  return shuffleArray(arr.slice()).slice(0, Math.min(n, arr.length));
}

function show(screenId) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $(screenId).classList.add('active');
}

function showLoading(text) {
  $('loading-text').textContent = text || 'Einen Moment...';
  $('loading').classList.add('active');
}
function hideLoading() { $('loading').classList.remove('active'); }

/* =====================================================
   SCORING (DRY: ein Helper für alle Score-Mutationen)
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
  renderCard();  // ruft updatePhaseUI() selbst
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

/* Cross-Phase-Undo bewusst blockiert (zu komplexer State-Rebuild) */
function canUndo() {
  if (state.swipes.length === 0) return false;
  const last = state.swipes[state.swipes.length - 1];
  return last.phase === state.phaseIndex;
}

function renderCard() {
  const stage = $('card-stage');
  // abandoned (=fliegt gerade raus) bleibt im DOM bis ihr setTimeout abläuft
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

  // Stack hinten zuerst zeichnen, vorderste zuletzt → richtiges Z-Stacking
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
  if (state.cardIndex < 2 || state.cardIndex >= state.shuffledCards.length - 1) return;

  const phasePref = {};
  state.swipes
    .filter(s => s.dir === 'yes' && s.phase === state.phaseIndex)
    .forEach(s => Object.entries(s.card.affinities || {}).forEach(([tb, w]) => {
      phasePref[tb] = (phasePref[tb] || 0) + w;
    }));

  if (Object.keys(phasePref).length === 0) return;

  const seen = state.shuffledCards.slice(0, state.cardIndex + 1);
  const remaining = state.shuffledCards.slice(state.cardIndex + 1);

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
      yesEl.style.opacity = String(Math.min(1, (dx - 8) / 40));
      noEl.style.opacity  = '0';
    } else if (dx < -8) {
      noEl.style.opacity  = String(Math.min(1, (-dx - 8) / 40));
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
    dx = 0;
    velocityX = 0;
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

  // State sofort update, neue Karte rendert parallel zur Flug-Animation
  decide(direction);
  renderCard();

  setTimeout(() => cardEl.remove(), CFG.FLY_DURATION_MS + 50);
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

function pickTopThemebook(typeName, exclude = []) {
  const candidates = TYPE_TO_THEMEBOOKS[typeName].filter(tb => !exclude.includes(tb));
  return candidates.reduce((best, tb) =>
    (state.affinityScores[tb] || 0) > (state.affinityScores[best] || -Infinity) ? tb : best,
    candidates[0]
  );
}

function pickRandomTb(typeName) {
  const list = TYPE_TO_THEMEBOOKS[typeName];
  return list[Math.floor(Math.random() * list.length)];
}

function generateTheme(themebookName) {
  const tb = THEMEBOOKS[themebookName];
  return {
    type: tb.type,
    themebook: themebookName,
    titleTag:    pickRandomN(tb.titleTagSuggestions, 1)[0],
    powerTags:   pickRandomN(tb.powerTagPool, 3),
    weaknessTag: pickRandomN(tb.weaknessTagPool, 1)[0],
    quest:       pickRandomN(tb.questPool, 1)[0]
  };
}

function generateProposal(mode = 'initial', baseProposal = null) {
  const themebooks = CFG.TYPES.map((type, i) => {
    if (mode === 'initial')             return pickTopThemebook(type);
    if (mode === 'tags-only')           return baseProposal.themes[i].themebook;
    if (mode === 'new-themebooks')      return pickTopThemebook(type, [baseProposal.themes[i].themebook]);
    /* fresh */                         return pickRandomTb(type);
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
    // requestAnimationFrame stellt sicher, dass der Track sichtbar ist (clientWidth > 0)
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
  const mode = idx === 1 ? 'tags-only'
             : idx === 2 ? 'new-themebooks'
             : 'fresh';

  state.busy = true;
  $('btn-alternative').disabled = true;
  showLoading('Anderen Helden weben...');
  setTimeout(() => {
    state.proposals.push(generateProposal(mode, state.proposals[0]));
    state.proposalIndex = state.proposals.length - 1;
    state.themeCarouselIndex = 0;
    renderResult();
    hideLoading();
    state.busy = false;
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

  // Scroll-Listener nur einmal pro Render binden (overrides previous via .onscroll)
  track.onscroll = onTrackScroll;

  const btnAlt = $('btn-alternative');
  const exhausted = state.proposals.length >= CFG.MAX_PROPOSALS;
  btnAlt.disabled = exhausted || state.busy;
  btnAlt.style.opacity = exhausted ? '0.4' : '1';
  btnAlt.textContent = exhausted ? 'Alle Vorschläge gesehen' : 'Anderen Vorschlag';

  scrollToTheme(0, false);
}

function buildThemeCard(theme) {
  const card = document.createElement('div');
  card.className = 'theme-card';
  card.innerHTML = `
    <div class="theme-card-header">
      <div class="theme-type-badge">${escapeHtml(theme.type)}</div>
      <div class="theme-themebook">${escapeHtml(theme.themebook)}</div>
      <div class="theme-title-tag">${escapeHtml(theme.titleTag)}</div>
    </div>
    <div class="theme-section">
      <div class="theme-section-label">Power Tags</div>
      <ul class="tag-list">
        ${theme.powerTags.map(t => `<li>${escapeHtml(t)}</li>`).join('')}
      </ul>
    </div>
    <div class="theme-section">
      <div class="theme-section-label">Weakness</div>
      <div class="tag-weakness">${escapeHtml(theme.weaknessTag)}</div>
    </div>
    <div class="theme-section">
      <div class="theme-section-label">Quest</div>
      <div class="tag-quest">„${escapeHtml(theme.quest)}"</div>
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

function scrollToTheme(i, smooth = true) {
  const track = $('theme-track');
  if (!track.clientWidth) {
    requestAnimationFrame(() => scrollToTheme(i, smooth));
    return;
  }
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
   PDF GENERATION (A4 Querformat)
===================================================== */

const PDF_LAYOUT = {
  pageW: 297, pageH: 210, marginX: 12, marginY: 12, gap: 4
};
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
  doc.text('LEGEND IN THE MIST · HERO CARD', marginX, marginY + 6);

  doc.setDrawColor(...PDF_COLORS.gold);
  doc.setLineWidth(0.4);
  doc.line(marginX, marginY + 9, pageW - marginX, marginY + 9);
}

function pdfThemeBlock(doc, theme, x, y, cardW, cardH) {
  // Frame
  doc.setDrawColor(...PDF_COLORS.ink);
  doc.setLineWidth(0.3);
  doc.rect(x, y, cardW, cardH);

  // Header band
  doc.setFillColor(...PDF_COLORS.band);
  doc.rect(x, y, cardW, 16, 'F');
  doc.line(x, y + 16, x + cardW, y + 16);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(...PDF_COLORS.accent);
  doc.text(theme.type.toUpperCase(), x + cardW / 2, y + 6, { align: 'center' });

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(...PDF_COLORS.inkSoft);
  doc.text(`Themebook · ${theme.themebook}`, x + cardW / 2, y + 11, { align: 'center' });

  // Title tag
  doc.setFont('times', 'italic');
  doc.setFontSize(13);
  doc.setTextColor(...PDF_COLORS.ink);
  const titleLines = doc.splitTextToSize(theme.titleTag, cardW - 6);
  doc.text(titleLines, x + cardW / 2, y + 22, { align: 'center' });

  let cy = y + 22 + titleLines.length * 5 + 4;

  cy = pdfSection(doc, 'POWER TAGS', x, cy, cardW, () => {
    doc.setFont('times', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...PDF_COLORS.ink);
    theme.powerTags.forEach(tag => {
      const lines = doc.splitTextToSize(`◦ ${tag}`, cardW - 8);
      doc.text(lines, x + 4, cy);
      cy += lines.length * 4.5;
    });
  });

  cy = pdfSection(doc, 'WEAKNESS TAG', x, cy + 3, cardW, () => {
    doc.setFont('times', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(...PDF_COLORS.accent);
    const lines = doc.splitTextToSize(theme.weaknessTag, cardW - 8);
    doc.text(lines, x + 4, cy);
    cy += lines.length * 4.5;
  });

  pdfSection(doc, 'QUEST', x, cy + 4, cardW, () => {
    doc.setFont('times', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(...PDF_COLORS.ink);
    const lines = doc.splitTextToSize(`„${theme.quest}"`, cardW - 8);
    doc.text(lines, x + 4, cy);
  });
}

function pdfSection(doc, label, x, y, cardW, drawBody) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(...PDF_COLORS.accent);
  doc.text(label, x + 4, y);
  drawBody();
  return y + 4;
}

function pdfFooter(doc) {
  const { pageW, pageH, marginX } = PDF_LAYOUT;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...PDF_COLORS.inkSoft);
  doc.text('Mistheld · LitM Heldengenerator', pageW - marginX, pageH - 4, { align: 'right' });
}

async function generatePDF() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert('PDF-Bibliothek konnte nicht geladen werden. Bitte Netzwerk prüfen und Seite neu laden.');
    return;
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
    alert('PDF konnte nicht erstellt werden. Bitte Konsole prüfen.');
  }
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

// Keyboard support (Desktop): ← / → für Swipe, Backspace für Undo
document.addEventListener('keydown', (e) => {
  if (!$('screen-swipe').classList.contains('active')) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); programmaticDecide('yes'); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); programmaticDecide('no'); }
  else if (e.key === 'Backspace') { e.preventDefault(); undoLast(); }
});
