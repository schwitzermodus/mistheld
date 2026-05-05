import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*.mp3',                   route => route.abort());
  await page.route('**/fonts.googleapis.com/**', route => route.abort());
  await page.route('**/fonts.gstatic.com/**',    route => route.abort());
  await page.route('**/cdnjs.cloudflare.com/**', route => route.abort());
});

// Ergebnis-Screen mit generierten Daten laden
async function loadResultScreen(page) {
  await page.evaluate(() => {
    state.proposals     = [generateProposal('initial')];
    state.proposalIndex = 0;
    state.edits         = {};
    state.hero          = generateHero();
    state.resultPage    = 0;
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

test('STRINGS und HELD-KATALOG geladen', async ({ page }) => {
  await page.goto('/');
  const ok = await page.evaluate(() =>
    typeof STRINGS === 'object' &&
    typeof STRINGS.hero === 'object' &&
    Array.isArray(HERO_FIRSTNAMES) && HERO_FIRSTNAMES.length >= 10 &&
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

test('Letzter Toggle nicht deaktivierbar', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-settings').click();
  await expect(page.locator('#toggle-origin')).toBeDisabled();
});

// =============================================================
// #29: ERGEBNIS-SCREEN
// =============================================================

test('#29: Held-Seite erscheint zuerst', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await expect(page.locator('.result-hero-page')).toBeVisible();
  await expect(page.locator('.hero-name')).toBeVisible();
  await expect(page.locator('.hero-description')).toBeVisible();
});

test('#29: Held-Seite hat 4 Reroll-Buttons', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await expect(page.locator('.hero-reroll-btn')).toHaveCount(4);
});

test('#29: Navigation zeigt Theme-Seite', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await page.locator('#result-nav-next').click();
  await expect(page.locator('.result-theme-page')).toBeVisible();
  await expect(page.locator('.rtp-title-tag')).toBeVisible();
});

test('#29: Dots zeigen 6 Seiten (Held + 4 Themes + Speichern)', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await expect(page.locator('.result-dot')).toHaveCount(6);
});

test('#29: Bearbeiten-Button oeffnet Edit-Sheet', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await page.locator('#result-nav-next').click();
  await page.locator('.rtp-edit-btn').click();
  await expect(page.locator('#edit-sheet-overlay')).toHaveClass(/active/);
  await expect(page.locator('.es-full-reroll')).toBeVisible();
});

test('#29: Edit-Sheet hat Reroll-Buttons fuer alle Elemente', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await page.locator('#result-nav-next').click();
  await page.locator('.rtp-edit-btn').click();
  // 5 Elemente: title, pow0, pow1, weakness, quest
  const count = await page.locator('.es-reroll-btn').count();
  expect(count).toBe(5);
});

test('#29: Letzte Seite zeigt Speichern-Button', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await page.evaluate(() => {
    state.resultPage = totalResultPages() - 1;
    renderCurrentResultPage();
  });
  await expect(page.locator('.result-save-page')).toBeVisible();
  await expect(page.locator('#save-pdf')).toBeVisible();
});
