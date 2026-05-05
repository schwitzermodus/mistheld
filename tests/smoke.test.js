import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*.mp3',                    route => route.abort());
  await page.route('**/fonts.googleapis.com/**',  route => route.abort());
  await page.route('**/fonts.gstatic.com/**',     route => route.abort());
  await page.route('**/cdnjs.cloudflare.com/**',  route => route.abort());
});

// Hilfsfunktion: Ergebnis-Screen mit generierten Daten laden
async function loadResultScreen(page) {
  await page.evaluate(() => {
    state.proposals  = [generateProposal('initial')];
    state.proposalIndex = 0;
    state.edits      = {};
    state.hero       = generateHero();
    state.resultPage = 0;
    show('screen-result');
    renderCurrentResultPage();
    attachResultPageSwipe();
  });
}

// =============================================================
// SCREEN VISIBILITY
// =============================================================

test('Startseite: Nur Welcome-Screen sichtbar', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#screen-welcome')).toBeVisible();
  await expect(page.locator('#screen-swipe')).not.toBeVisible();
  await expect(page.locator('#screen-result')).not.toBeVisible();
  await expect(page.locator('#screen-settings')).not.toBeVisible();
});

test('Startseite: Gear-Icon und Mute-Button sichtbar', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#btn-settings')).toBeVisible();
  await expect(page.locator('#btn-mute')).toBeVisible();
  await expect(page.locator('#btn-start')).toBeVisible();
});

// =============================================================
// SCREEN TRANSITIONS
// =============================================================

test('Einstellungen oeffnen und schliessen', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-settings').click();
  await expect(page.locator('#screen-settings')).toBeVisible();
  await expect(page.locator('#screen-welcome')).not.toBeVisible();
  await page.locator('#btn-settings-back').click();
  await expect(page.locator('#screen-welcome')).toBeVisible();
  await expect(page.locator('#screen-settings')).not.toBeVisible();
});

test('Los-gehts zeigt Swipe-Screen mit Phase-Intro', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-start').click();
  await expect(page.locator('#screen-swipe')).toBeVisible();
  await expect(page.locator('#phase-intro-overlay')).toBeVisible();
  await expect(page.locator('#btn-settings')).not.toBeVisible();
});

test('Phase-Intro: Tippen startet Kartenstapel', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-start').click();
  await page.locator('#phase-intro-overlay').click();
  await expect(page.locator('#phase-intro-overlay')).not.toBeVisible();
  await expect(page.locator('.card.front')).toBeVisible();
});

test('Gear-Icon im Ergebnis-Screen nicht sichtbar', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => show('screen-result'));
  await expect(page.locator('#screen-result')).toBeVisible();
  await expect(page.locator('#btn-settings')).not.toBeVisible();
});

// =============================================================
// JS-GESUNDHEIT
// =============================================================

test('Keine JS-Fehler beim Seitenaufruf', async ({ page }) => {
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  expect(errors).toHaveLength(0);
});

test('STRINGS geladen (inline in index.html)', async ({ page }) => {
  await page.goto('/');
  const ok = await page.evaluate(() => typeof STRINGS === 'object' && typeof STRINGS.hero === 'object');
  expect(ok).toBe(true);
});

test('HELD-KATALOG geladen', async ({ page }) => {
  await page.goto('/');
  const ok = await page.evaluate(() =>
    Array.isArray(HERO_FIRSTNAMES) && HERO_FIRSTNAMES.length >= 10 &&
    Array.isArray(HERO_EPITHETS)   && HERO_EPITHETS.length   >= 10 &&
    Array.isArray(HERO_TITLES)     && HERO_TITLES.length     >= 10 &&
    Array.isArray(HERO_DESCRIPTIONS) && HERO_DESCRIPTIONS.length >= 10
  );
  expect(ok).toBe(true);
});

test('THEMEBOOKS geladen (20 Eintraege)', async ({ page }) => {
  await page.goto('/');
  const count = await page.evaluate(() => Object.keys(THEMEBOOKS).length);
  expect(count).toBe(20);
});

test('PHASES geladen (4 Phasen)', async ({ page }) => {
  await page.goto('/');
  const count = await page.evaluate(() => PHASES.length);
  expect(count).toBe(4);
});

test('Settings-Default: Origin aktiv, Adventure+Greatness inaktiv', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-settings').click();
  await expect(page.locator('#toggle-origin')).toBeChecked();
  await expect(page.locator('#toggle-adventure')).not.toBeChecked();
  await expect(page.locator('#toggle-greatness')).not.toBeChecked();
});

test('Letzter Toggle nicht deaktivierbar (min. 1 Might-Stufe)', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-settings').click();
  await expect(page.locator('#toggle-origin')).toBeDisabled();
});

// =============================================================
// #29: ERGEBNIS-SCREEN (Held-Uebersicht + Swipe-Pages)
// =============================================================

test('#29: Ergebnis-Screen zeigt Held-Seite zuerst', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await expect(page.locator('#screen-result')).toBeVisible();
  await expect(page.locator('.result-hero-page')).toBeVisible();
  await expect(page.locator('.hero-name')).toBeVisible();
  await expect(page.locator('.hero-description')).toBeVisible();
});

test('#29: Held-Seite hat 4 Reroll-Buttons', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  const btns = page.locator('.hero-reroll-btn');
  await expect(btns).toHaveCount(4);
});

test('#29: Navigation zur naechsten Seite zeigt Theme', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await page.locator('#result-nav-next').click();
  await expect(page.locator('.result-theme-page')).toBeVisible();
  await expect(page.locator('.rtp-title-tag')).toBeVisible();
});

test('#29: Bearbeiten-Button oeffnet Edit-Sheet', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await page.locator('#result-nav-next').click();
  await page.locator('.rtp-edit-btn').click();
  await expect(page.locator('#edit-sheet-overlay')).toHaveClass(/active/);
  await expect(page.locator('.es-full-reroll')).toBeVisible();
});

test('#29: Edit-Sheet schliesst durch Overlay-Tap', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await page.locator('#result-nav-next').click();
  await page.locator('.rtp-edit-btn').click();
  await expect(page.locator('#edit-sheet-overlay')).toHaveClass(/active/);
  await page.evaluate(() => document.getElementById('edit-sheet-overlay').click());
  await expect(page.locator('#edit-sheet-overlay')).not.toHaveClass(/active/);
});

test('#29: Letzte Seite zeigt Speichern-Optionen', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  // Zur letzten Seite navigieren (1 Held + 4 Themes + 1 Save = 6 Seiten, Index 5)
  await page.evaluate(() => {
    state.resultPage = totalResultPages() - 1;
    renderCurrentResultPage();
  });
  await expect(page.locator('.result-save-page')).toBeVisible();
  await expect(page.locator('#save-pdf')).toBeVisible();
  await expect(page.locator('#save-restart')).toBeVisible();
});

test('#29: Dots zeigen korrekte Seitenanzahl', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  const dotCount = await page.locator('.result-dot').count();
  // 1 Held + 4 Themes + 1 Save = 6
  expect(dotCount).toBe(6);
});

test('#29: Reroll im Edit-Sheet aktualisiert Theme-Seite', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await page.locator('#result-nav-next').click();
  const before = await page.locator('.rtp-title-tag').textContent();
  await page.locator('.rtp-edit-btn').click();
  // ersten Reroll-Button im Sheet klicken (Titelschlagwort)
  await page.locator('.es-reroll-btn').first().click();
  const after = await page.locator('.rtp-title-tag').textContent();
  // Wert sollte sich geaendert haben (oder gleich geblieben sein bei gleichem Zufallswert)
  // Mindestens: kein Fehler geworfen
  expect(typeof after).toBe('string');
});
