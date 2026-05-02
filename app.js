/* =====================================================
   Mistheld · App-Logik
   - Pointer Events API (iOS Safari 13+)
   - GPU-beschleunigte Animationen (translate3d)
   - Velocity-basierte Swipe-Erkennung
   - Card-Stack (3 Karten gestapelt)
   - body.swipe-active lockt iOS-Scroll
===================================================== */

const state = {
  phaseIndex: 0,
  cardIndex: 0,
  shuffledCards: [],
  swipes: [],
  affinityScores: {},
  hookCounts: {},
  proposals: [],
  proposalIndex: 0,
  themeCarouselIndex: 0
};

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
  document.body.classList.add('swipe-active');
  loadPhase();
  show('screen-swipe');
}

function loadPhase() {
  const phase = PHASES[state.phaseIndex];
  state.shuffledCards = shuffleArray([...phase.cards]);
  state.cardIndex = 0;
  updatePhaseUI();
  renderCard();
}

function updatePhaseUI() {
  const phase = PHASES[state.phaseIndex];
  document.getElementById('phase-eyebrow').textContent = phase.eyebrow;
  document.getElementById('phase-title').textContent = phase.title;
  document.getElementById('card-counter').textContent =
    `Karte ${state.cardIndex + 1} von ${state.shuffledCards.length}`;

  const dots = document.querySelectorAll('#phase-progress .phase-dot');
  dots.forEach((dot, i) => {
    dot.classList.remove('active', 'done');
    if (i < state.phaseIndex) dot.classList.add('done');
    else if (i === state.phaseIndex) dot.classList.add('active');
  });

  document.getElementById('btn-undo').disabled = state.swipes.length === 0;
}

function renderCard() {
  const stage = document.getElementById('card-stage');
  stage.innerHTML = '';

  if (state.cardIndex >= state.shuffledCards.length) {
    if (state.phaseIndex < PHASES.length - 1) {
      state.phaseIndex++;
      loadPhase();
    } else {
      finishSwiping();
    }
    return;
  }

  // Stack: zeichne max. 3 Karten, hinterste zuerst, vorderste zuletzt
  const stackDepth = 3;
  for (let i = stackDepth - 1; i >= 0; i--) {
    const idx = state.cardIndex + i;
    if (idx >= state.shuffledCards.length) continue;
    const card = state.shuffledCards[idx];
    const cardEl = document.createElement('div');
    cardEl.className = 'card' + (i === 0 ? ' front' : ' behind');
    cardEl.style.zIndex = String(10 - i);
    cardEl.innerHTML = `
      <div class="card-decision-overlay yes">Passt</div>
      <div class="card-decision-overlay no">Nicht</div>
      <div class="card-glyph">~</div>
      <div class="card-title">${card.title}</div>
      <div class="card-text">${card.text}</div>
    `;
    if (i === 0) attachSwipe(cardEl);
    stage.appendChild(cardEl);
  }
  updatePhaseUI();
}

/* Adaptive Re-Sort innerhalb der Phase: thematisch ähnliche Karten zusammen */
function adaptiveResort() {
  if (state.cardIndex < 2) return;
  if (state.cardIndex >= state.shuffledCards.length - 1) return;

  const remaining = state.shuffledCards.slice(state.cardIndex + 1);
  const seen = state.shuffledCards.slice(0, state.cardIndex + 1);

  const phasePref = {};
  state.swipes
    .filter(s => s.dir === 'yes' && s.phase === state.phaseIndex)
    .forEach(s => {
      Object.entries(s.card.affinities || {}).forEach(([tb, w]) => {
        phasePref[tb] = (phasePref[tb] || 0) + w;
      });
    });

  if (Object.keys(phasePref).length === 0) return;

  remaining.sort((a, b) => {
    const score = (card) => {
      let total = 0;
      Object.entries(card.affinities || {}).forEach(([tb, w]) => {
        if (phasePref[tb]) total += phasePref[tb] * w;
      });
      return total;
    };
    return score(b) - score(a);
  });

  state.shuffledCards = [...seen, ...remaining];
}

/* =====================================================
   SWIPE INTERACTION (Pointer Events)
===================================================== */

function attachSwipe(cardEl) {
  let startX = 0, startY = 0;
  let dx = 0, dy = 0;
  let dragging = false;
  let lastX = 0, lastTime = 0;
  let velocityX = 0;
  let activePointerId = null;
  let locked = false;

  const yesEl = cardEl.querySelector('.yes');
  const noEl = cardEl.querySelector('.no');

  const onDown = (e) => {
    if (locked || activePointerId !== null) return;
    activePointerId = e.pointerId;
    try { cardEl.setPointerCapture(e.pointerId); } catch (_) {}
    dragging = true;
    cardEl.classList.add('dragging');
    startX = e.clientX;
    startY = e.clientY;
    lastX = e.clientX;
    lastTime = performance.now();
    dx = 0; dy = 0;
    velocityX = 0;
  };

  const onMove = (e) => {
    if (!dragging || e.pointerId !== activePointerId) return;
    if (e.cancelable) e.preventDefault();

    const now = performance.now();
    const dt = now - lastTime;
    if (dt > 0) {
      const instantV = (e.clientX - lastX) / dt;
      // Low-pass-Filter für stabile Velocity
      velocityX = velocityX * 0.6 + instantV * 0.4;
    }
    lastX = e.clientX;
    lastTime = now;
    dx = e.clientX - startX;
    dy = e.clientY - startY;

    const rotate = Math.max(-18, Math.min(18, dx * 0.06));
    cardEl.style.transform =
      `translate3d(${dx}px, ${dy * 0.18}px, 0) rotate(${rotate}deg)`;

    if (dx > 12) {
      yesEl.style.opacity = String(Math.min(1, (dx - 12) / 60));
      noEl.style.opacity = '0';
    } else if (dx < -12) {
      noEl.style.opacity = String(Math.min(1, (-dx - 12) / 60));
      yesEl.style.opacity = '0';
    } else {
      yesEl.style.opacity = '0';
      noEl.style.opacity = '0';
    }
  };

  const onUp = (e) => {
    if (!dragging || e.pointerId !== activePointerId) return;
    dragging = false;
    activePointerId = null;
    cardEl.classList.remove('dragging');
    try { cardEl.releasePointerCapture(e.pointerId); } catch (_) {}

    const distanceThreshold = 70;
    const velocityThreshold = 0.55;

    const swipeYes = dx > distanceThreshold ||
      (velocityX > velocityThreshold && dx > 10);
    const swipeNo = dx < -distanceThreshold ||
      (velocityX < -velocityThreshold && dx < -10);

    if (swipeYes) {
      locked = true;
      flyOut(cardEl, 'yes', velocityX, dy);
    } else if (swipeNo) {
      locked = true;
      flyOut(cardEl, 'no', velocityX, dy);
    } else {
      // Spring zurück
      cardEl.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
      yesEl.style.opacity = '0';
      noEl.style.opacity = '0';
    }
  };

  cardEl.addEventListener('pointerdown', onDown);
  cardEl.addEventListener('pointermove', onMove, { passive: false });
  cardEl.addEventListener('pointerup', onUp);
  cardEl.addEventListener('pointercancel', onUp);
  // Defensive: blockiere Touchmove, falls Pointer Events nicht greifen
  cardEl.addEventListener('touchmove', (e) => {
    if (dragging && e.cancelable) e.preventDefault();
  }, { passive: false });
}

function flyOut(cardEl, direction, velocityX, dy) {
  const sign = direction === 'yes' ? 1 : -1;
  cardEl.classList.add(direction === 'yes' ? 'gone-right' : 'gone-left');

  // Mache nächste (behind) Karte sofort zur neuen front
  const stage = cardEl.parentElement;
  if (stage) {
    const next = stage.querySelector('.card.behind');
    if (next) {
      next.classList.remove('behind');
      next.classList.add('front');
      next.style.transform = 'translate3d(0, 0, 0) scale(1)';
      next.style.opacity = '1';
    }
  }

  // Haptik (auf iOS leider weitgehend ignoriert, schadet aber nicht)
  try { if (navigator.vibrate) navigator.vibrate(8); } catch (_) {}

  decide(direction);

  setTimeout(() => {
    renderCard();
  }, 380);
}

function decide(direction) {
  const card = state.shuffledCards[state.cardIndex];
  if (!card) return;

  if (direction === 'yes') {
    Object.entries(card.affinities || {}).forEach(([tb, w]) => {
      state.affinityScores[tb] = (state.affinityScores[tb] || 0) + w;
    });
    (card.hooks || []).forEach(h => {
      state.hookCounts[h] = (state.hookCounts[h] || 0) + 1;
    });
  } else {
    Object.entries(card.affinities || {}).forEach(([tb, w]) => {
      state.affinityScores[tb] = (state.affinityScores[tb] || 0) - 0.2 * w;
    });
  }

  state.swipes.push({ phase: state.phaseIndex, card, dir: direction });
  state.cardIndex++;
  adaptiveResort();
}

// Tap auf Buttons → simulierter Swipe
function programmaticDecide(direction) {
  const stage = document.getElementById('card-stage');
  const cardEl = stage.querySelector('.card.front');
  if (!cardEl || cardEl.classList.contains('gone-left') ||
      cardEl.classList.contains('gone-right')) return;

  const overlay = cardEl.querySelector(direction === 'yes' ? '.yes' : '.no');
  if (overlay) overlay.style.opacity = '1';
  flyOut(cardEl, direction, 0, 0);
}

function undoLast() {
  if (state.swipes.length === 0) return;
  const last = state.swipes.pop();

  if (last.dir === 'yes') {
    Object.entries(last.card.affinities || {}).forEach(([tb, w]) => {
      state.affinityScores[tb] = (state.affinityScores[tb] || 0) - w;
    });
    (last.card.hooks || []).forEach(h => {
      state.hookCounts[h] = Math.max(0, (state.hookCounts[h] || 0) - 1);
    });
  } else {
    Object.entries(last.card.affinities || {}).forEach(([tb, w]) => {
      state.affinityScores[tb] = (state.affinityScores[tb] || 0) + 0.2 * w;
    });
  }

  if (last.phase !== state.phaseIndex) {
    state.phaseIndex = last.phase;
    const phase = PHASES[state.phaseIndex];
    state.shuffledCards = phase.cards.slice();
    const idx = state.shuffledCards.findIndex(c => c.title === last.card.title);
    if (idx >= 0) {
      const [target] = state.shuffledCards.splice(idx, 1);
      state.shuffledCards.splice(0, 0, target);
      state.cardIndex = 0;
    }
  } else {
    state.cardIndex = Math.max(0, state.cardIndex - 1);
    const exists = state.shuffledCards.some(
      (c, i) => i >= state.cardIndex && c.title === last.card.title
    );
    if (!exists) {
      state.shuffledCards.splice(state.cardIndex, 0, last.card);
    }
  }

  renderCard();
}

/* =====================================================
   GENERATOR
===================================================== */

function pickTopThemebook(typeName, scores, exclude = []) {
  const candidates = TYPE_TO_THEMEBOOKS[typeName].filter(tb => !exclude.includes(tb));
  let best = candidates[0], bestScore = -Infinity;
  candidates.forEach(tb => {
    const s = scores[tb] || 0;
    if (s > bestScore) { bestScore = s; best = tb; }
  });
  return best;
}

function pickRandomDifferent(arr, count) {
  const result = [];
  const used = new Set();
  while (result.length < count && used.size < arr.length) {
    const idx = Math.floor(Math.random() * arr.length);
    if (used.has(idx)) continue;
    used.add(idx);
    result.push(arr[idx]);
  }
  return result;
}

function generateTheme(themebookName) {
  const tb = THEMEBOOKS[themebookName];
  return {
    type: tb.type,
    themebook: themebookName,
    titleTag: pickRandomDifferent(tb.titleTagSuggestions, 1)[0],
    powerTags: pickRandomDifferent(tb.powerTagPool, 3),
    weaknessTag: pickRandomDifferent(tb.weaknessTagPool, 1)[0],
    quest: pickRandomDifferent(tb.questPool, 1)[0]
  };
}

function generateProposal(mode = 'initial', baseProposal = null) {
  const scores = state.affinityScores;
  let originTb, adventureTb, greatnessTb, mightTb;

  if (mode === 'initial') {
    originTb    = pickTopThemebook('Origin', scores);
    adventureTb = pickTopThemebook('Adventure', scores);
    greatnessTb = pickTopThemebook('Greatness', scores);
    mightTb     = pickTopThemebook('Variable Might', scores);
  } else if (mode === 'tags-only' && baseProposal) {
    originTb    = baseProposal.themes[0].themebook;
    adventureTb = baseProposal.themes[1].themebook;
    greatnessTb = baseProposal.themes[2].themebook;
    mightTb     = baseProposal.themes[3].themebook;
  } else if (mode === 'new-themebooks' && baseProposal) {
    originTb    = pickTopThemebook('Origin', scores, [baseProposal.themes[0].themebook]);
    adventureTb = pickTopThemebook('Adventure', scores, [baseProposal.themes[1].themebook]);
    greatnessTb = pickTopThemebook('Greatness', scores, [baseProposal.themes[2].themebook]);
    mightTb     = pickTopThemebook('Variable Might', scores, [baseProposal.themes[3].themebook]);
  } else {
    const r = arr => arr[Math.floor(Math.random() * arr.length)];
    originTb    = r(TYPE_TO_THEMEBOOKS['Origin']);
    adventureTb = r(TYPE_TO_THEMEBOOKS['Adventure']);
    greatnessTb = r(TYPE_TO_THEMEBOOKS['Greatness']);
    mightTb     = r(TYPE_TO_THEMEBOOKS['Variable Might']);
  }

  return {
    mode,
    themes: [
      generateTheme(originTb),
      generateTheme(adventureTb),
      generateTheme(greatnessTb),
      generateTheme(mightTb)
    ]
  };
}

function finishSwiping() {
  document.body.classList.remove('swipe-active');
  showLoading('Helden weben...');
  setTimeout(() => {
    state.proposals = [generateProposal('initial')];
    state.proposalIndex = 0;
    state.themeCarouselIndex = 0;
    renderResult();
    show('screen-result');
    hideLoading();
  }, 800);
}

function generateAlternative() {
  const idx = state.proposals.length;
  let mode;
  if (idx === 1) mode = 'tags-only';
  else if (idx === 2) mode = 'new-themebooks';
  else if (idx === 3) mode = 'fresh';
  else return;

  showLoading('Anderen Helden weben...');
  setTimeout(() => {
    state.proposals.push(generateProposal(mode, state.proposals[0]));
    state.proposalIndex = state.proposals.length - 1;
    state.themeCarouselIndex = 0;
    renderResult();
    hideLoading();
  }, 600);
}

/* =====================================================
   RESULT RENDER
===================================================== */

function renderResult() {
  const proposal = state.proposals[state.proposalIndex];
  const track = document.getElementById('theme-track');
  const pagination = document.getElementById('theme-pagination');

  track.innerHTML = '';
  pagination.innerHTML = '';

  proposal.themes.forEach((theme, i) => {
    const card = document.createElement('div');
    card.className = 'theme-card';
    card.innerHTML = `
      <div class="theme-card-header">
        <div class="theme-type-badge">${theme.type}</div>
        <div class="theme-themebook">Themebook · ${theme.themebook}</div>
        <div class="theme-title-tag">${theme.titleTag}</div>
      </div>
      <div class="theme-section">
        <div class="theme-section-label">Power Tags</div>
        <ul class="tag-list">
          ${theme.powerTags.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
      <div class="theme-section">
        <div class="theme-section-label">Weakness Tag</div>
        <div class="tag-weakness">${theme.weaknessTag}</div>
      </div>
      <div class="theme-section">
        <div class="theme-section-label">Quest</div>
        <div class="tag-quest">„${theme.quest}"</div>
      </div>
    `;
    track.appendChild(card);

    const dot = document.createElement('div');
    dot.className = 'theme-page-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => scrollToTheme(i));
    pagination.appendChild(dot);
  });

  track.onscroll = () => {
    const w = track.clientWidth;
    const idx = Math.round(track.scrollLeft / w);
    if (idx !== state.themeCarouselIndex) {
      state.themeCarouselIndex = idx;
      updateThemeDots();
    }
  };

  document.getElementById('result-counter').textContent =
    `Vorschlag ${state.proposalIndex + 1} von ${Math.min(4, state.proposals.length)}` +
    (state.proposals.length < 4 ? ` · noch ${4 - state.proposals.length} möglich` : '');

  const btnAlt = document.getElementById('btn-alternative');
  btnAlt.disabled = state.proposals.length >= 4;
  btnAlt.style.opacity = state.proposals.length >= 4 ? 0.4 : 1;
  btnAlt.textContent = state.proposals.length >= 4 ?
    'Alle Vorschläge gesehen' : 'Anderen Vorschlag';

  scrollToTheme(0);
}

function scrollToTheme(i) {
  const track = document.getElementById('theme-track');
  track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
  state.themeCarouselIndex = i;
  updateThemeDots();
}

function updateThemeDots() {
  document.querySelectorAll('#theme-pagination .theme-page-dot').forEach((d, i) => {
    d.classList.toggle('active', i === state.themeCarouselIndex);
  });
}

/* =====================================================
   PDF GENERATION (A4 Querformat)
===================================================== */

async function generatePDF() {
  const proposal = state.proposals[state.proposalIndex];
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

  const pageW = 297, pageH = 210, marginX = 12, marginY = 12;

  doc.setFillColor(250, 243, 223);
  doc.rect(0, 0, pageW, pageH, 'F');

  doc.setTextColor(42, 36, 25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('LEGEND IN THE MIST · HERO CARD', marginX, marginY + 6);

  doc.setDrawColor(169, 134, 70);
  doc.setLineWidth(0.4);
  doc.line(marginX, marginY + 9, pageW - marginX, marginY + 9);

  const cardW = (pageW - 2 * marginX - 3 * 4) / 4;
  const cardX0 = marginX;
  const cardY0 = marginY + 16;
  const cardH = pageH - cardY0 - marginY;

  proposal.themes.forEach((theme, i) => {
    const x = cardX0 + i * (cardW + 4);
    const y = cardY0;

    doc.setDrawColor(42, 36, 25);
    doc.setLineWidth(0.3);
    doc.rect(x, y, cardW, cardH);

    doc.setFillColor(236, 224, 196);
    doc.rect(x, y, cardW, 16, 'F');
    doc.setDrawColor(42, 36, 25);
    doc.line(x, y + 16, x + cardW, y + 16);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(139, 58, 43);
    doc.text(theme.type.toUpperCase(), x + cardW / 2, y + 6, { align: 'center' });

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(91, 82, 64);
    doc.text(`Themebook · ${theme.themebook}`, x + cardW / 2, y + 11, { align: 'center' });

    doc.setFont('times', 'italic');
    doc.setFontSize(13);
    doc.setTextColor(42, 36, 25);
    const titleLines = doc.splitTextToSize(theme.titleTag, cardW - 6);
    doc.text(titleLines, x + cardW / 2, y + 22, { align: 'center' });

    let cursorY = y + 22 + (titleLines.length * 5) + 4;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(139, 58, 43);
    doc.text('POWER TAGS', x + 4, cursorY);
    cursorY += 4;

    doc.setFont('times', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(42, 36, 25);
    theme.powerTags.forEach(tag => {
      const lines = doc.splitTextToSize(`◦ ${tag}`, cardW - 8);
      doc.text(lines, x + 4, cursorY);
      cursorY += lines.length * 4.5;
    });

    cursorY += 3;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(139, 58, 43);
    doc.text('WEAKNESS TAG', x + 4, cursorY);
    cursorY += 4;

    doc.setFont('times', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(139, 58, 43);
    const wLines = doc.splitTextToSize(theme.weaknessTag, cardW - 8);
    doc.text(wLines, x + 4, cursorY);
    cursorY += wLines.length * 4.5 + 4;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(139, 58, 43);
    doc.text('QUEST', x + 4, cursorY);
    cursorY += 4;

    doc.setFont('times', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(42, 36, 25);
    const qLines = doc.splitTextToSize(`„${theme.quest}"`, cardW - 8);
    doc.text(qLines, x + 4, cursorY);
  });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(91, 82, 64);
  doc.text('Mistheld · LitM Heldengenerator', pageW - marginX, pageH - 4, { align: 'right' });

  doc.save('mistheld-character.pdf');
}

/* =====================================================
   UI HELPERS
===================================================== */

function show(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function showLoading(text) {
  document.getElementById('loading-text').textContent = text || 'Einen Moment...';
  document.getElementById('loading').classList.add('active');
}

function hideLoading() {
  document.getElementById('loading').classList.remove('active');
}

function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* =====================================================
   EVENT BINDINGS
===================================================== */

document.getElementById('btn-start').addEventListener('click', startSwipe);
document.getElementById('btn-yes').addEventListener('click', () => programmaticDecide('yes'));
document.getElementById('btn-no').addEventListener('click', () => programmaticDecide('no'));
document.getElementById('btn-undo').addEventListener('click', undoLast);
document.getElementById('btn-accept').addEventListener('click', generatePDF);
document.getElementById('btn-alternative').addEventListener('click', generateAlternative);
document.getElementById('btn-restart').addEventListener('click', () => {
  document.body.classList.remove('swipe-active');
  show('screen-welcome');
});
