import { test, expect } from '@playwright/test';

// Externe Ressourcen blockieren (Audio, Fonts) damit Tests nicht haengen
test.beforeEach(async ({ page }) => {
  await page.route('**/*.mp3', route => route.abort());
  await page.route('**/fonts.googleapis.com/**', route => route.abort());
  await page.route('**/fonts.gstatic.com/**', route => route.abort());
});

// =============================================================
// SCREEN VISIBILITY
// Diese Tests haetten den display:flex Spezifitaets-Bug direkt gefangen:
// "settings screen not visible on load" waere sofort rot gewesen.
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
  // Gear-Icon verschwindet auf der Einstellungsseite
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
  // Gear-Icon darf im Swipe-Screen nicht sichtbar sein
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
  // Direkt auf result-screen wechseln via show()
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

  // Origin ist der einzige aktive Toggle -> muss disabled sein
  await expect(page.locator('#toggle-origin')).toBeDisabled();
});
