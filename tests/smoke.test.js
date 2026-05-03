import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*.mp3', route => route.abort());
  await page.route('**/fonts.googleapis.com/**', route => route.abort());
  await page.route('**/fonts.gstatic.com/**', route => route.abort());
});

// =============================================================
// SCREEN VISIBILITY
// Diese Tests hätten den display:flex Spezifitäts-Bug direkt gefangen.
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

test('Einstellungen öffnen und schließen', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-settings').click();
  await expect(page.locator('#screen-settings')).toBeVisible();
  await expect(page.locator('#screen-welcome')).not.toBeVisible();
  await expect(page.locator('#btn-settings')).not.toBeVisible();
  await page.locator('#btn-settings-back').click();
  await expect(page.locator('#screen-welcome')).toBeVisible();
  await expect(page.locator('#screen-settings')).not.toBeVisible();
  await expect(page.locator('#btn-settings')).toBeVisible();
});

test('Los-gehts zeigt Swipe-Screen mit Phase-Intro', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-start').click();
  await expect(page.locator('#screen-swipe')).toBeVisible();
  await expect(page.locator('#screen-welcome')).not.toBeVisible();
  await expect(page.locator('#phase-intro-overlay')).toBeVisible();
  await expect(page.locator('#btn-settings')).not.toBeVisible();
});

test('Phase-Intro: Tippen startet Kartenstapel', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-start').click();
  await expect(page.locator('#phase-intro-overlay')).toBeVisible();
  await page.locator('#phase-intro-overlay').click();
  await expect(page.locator('#phase-intro-overlay')).not.toBeVisible();
  await expect(page.locator('.card.front')).toBeVisible();
  await expect(page.locator('#btn-yes')).toBeVisible();
  await expect(page.locator('#btn-no')).toBeVisible();
});

test('Gear-Icon im Ergebnis-Screen nicht sichtbar', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => show('screen-result'));
  await expect(page.locator('#screen-result')).toBeVisible();
  await expect(page.locator('#btn-settings')).not.toBeVisible();
});

// =============================================================
// JS-GESUNDHEIT / DATENLADEN
// =============================================================

test('Keine JS-Fehler beim Seitenaufruf', async ({ page }) => {
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  await page.goto('/');
  await page.waitForLoadState('networkidle').catch(() => {});
  expect(errors).toHaveLength(0);
});

test('THEMEBOOKS geladen (20 Einträge)', async ({ page }) => {
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
// #17: ELEMENT-REROLL (Ergebnisseite)
// =============================================================

test('#17: Ergebnisseite zeigt Reroll-Buttons nach Generierung', async ({ page }) => {
  await page.goto('/');
  // finishSwiping direkt aufrufen um Ergebnisseite zu laden
  await page.evaluate(() => {
    state.proposals = [generateProposal('initial')];
    state.proposalIndex = 0;
    state.edits = {};
    show('screen-result');
    renderResult();
  });
  await expect(page.locator('#screen-result')).toBeVisible();
  // Reroll-Buttons müssen vorhanden sein
  const rerollBtns = page.locator('.tc-reroll-btn');
  await expect(rerollBtns.first()).toBeVisible();
  // Mindestens 6 Reroll-Buttons pro Karte (theme + title + pow0 + pow1 + weakness + quest)
  const count = await rerollBtns.count();
  expect(count).toBeGreaterThanOrEqual(6);
});

test('#17: Reroll eines einzelnen Tags erzeugt Navigation', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    state.proposals = [generateProposal('initial')];
    state.proposalIndex = 0;
    state.edits = {};
    show('screen-result');
    renderResult();
  });
  // Klick auf ersten nicht-Theme Reroll-Button (title tag)
  const titleReroll = page.locator('.tc-editable-row').first().locator('.tc-reroll-btn');
  await titleReroll.click();
  // Navigation soll erscheinen
  await expect(page.locator('.tc-nav-pos').first()).toBeVisible();
});
