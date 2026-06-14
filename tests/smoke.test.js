import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*.mp3',                   route => route.abort());
  await page.route('**/fonts.googleapis.com/**', route => route.abort());
  await page.route('**/fonts.gstatic.com/**',    route => route.abort());
  await page.route('**/cdnjs.cloudflare.com/**', route => route.abort());
});

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

// SCREEN VISIBILITY
test('Startseite: Nur Welcome-Screen sichtbar', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#screen-welcome')).toBeVisible();
  await expect(page.locator('#screen-swipe')).not.toBeVisible();
  await expect(page.locator('#screen-result')).not.toBeVisible();
});

test('Startseite: Gear-Icon und Mute-Button sichtbar', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#btn-settings')).toBeVisible();
  await expect(page.locator('#btn-mute')).toBeVisible();
  await expect(page.locator('#btn-start')).toBeVisible();
});

// SCREEN TRANSITIONS
test('Einstellungen oeffnen und schliessen', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-settings').click();
  await expect(page.locator('#screen-settings')).toBeVisible();
  await page.locator('#btn-settings-back').click();
  await expect(page.locator('#screen-welcome')).toBeVisible();
});

test('Los-gehts zeigt Swipe-Screen direkt mit Kartenstapel', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-start').click();
  await expect(page.locator('#screen-swipe')).toBeVisible();
  await expect(page.locator('.card.front')).toBeVisible();
});

// JS-GESUNDHEIT
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
    STRINGS.hero.labelName === 'Name' &&
    Array.isArray(HERO_FIRSTNAMES) && HERO_FIRSTNAMES.length >= 10
  );
  expect(ok).toBe(true);
});

test('THEMEBOOKS geladen (20 Eintraege)', async ({ page }) => {
  await page.goto('/');
  const count = await page.evaluate(() => Object.keys(THEMEBOOKS).length);
  expect(count).toBe(20);
});

test('PHASES geladen (ein Stapel mit 40 Karten)', async ({ page }) => {
  await page.goto('/');
  const ok = await page.evaluate(() =>
    PHASES.length === 1 &&
    PHASES[0].cards.length >= 30
  );
  expect(ok).toBe(true);
});

test('Settings-Default: Preset Einsteiger aktiv', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-settings').click();
  await expect(page.locator('.preset-seg-btn[data-preset="beginner"]')).toHaveClass(/active/);
  // Einsteiger zeigt nur Ursprung (7) + Variable (3) = 10 Theme-Type-Zeilen
  await expect(page.locator('.tt-row')).toHaveCount(10);
});

test('Settings: Individuell zeigt alle 20 Theme-Type Zeilen', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-settings').click();
  await page.locator('.preset-seg-btn[data-preset="custom"]').click();
  await expect(page.locator('.tt-row')).toHaveCount(20);
});

// #33: UEBERSETZUNGEN
test('#33: Theme-Type Uebersetzungen korrekt', async ({ page }) => {
  await page.goto('/');
  const ok = await page.evaluate(() =>
    STRINGS.themebooks['Circumstance'] === 'Umstand' &&
    STRINGS.themebooks['Skill or Trade'] === 'F\u00e4higkeit oder Beruf' &&
    STRINGS.themebooks['Uncanny Being'] === 'Unheimliches Wesen' &&
    STRINGS.themebooks['Monstrosity'] === 'Monstrosit\u00e4t'
  );
  expect(ok).toBe(true);
});

// #34 + #36: NEUER ERGEBNIS-SCREEN (Karten)
test('#34/#36: Ergebnis-Screen zeigt Held-Karte', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await expect(page.locator('#screen-result')).toBeVisible();
  await expect(page.locator('.result-card.rc-hero')).toBeVisible();
  await expect(page.locator('.rc-hero-name')).toBeVisible();
});

test('#34/#36: Held-Karte hat Stift-Icon', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await expect(page.locator('#rc-hero-edit')).toBeVisible();
});

test('#34/#36: Dots-Navigation vorhanden', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  const count = await page.locator('.result-dot').count();
  expect(count).toBe(6); // 1 Held + 4 Themes + 1 Speichern
});

test('#34: Theme-Karte hat Stift-Icon und kein X vor Schwaeche', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  // Zur Theme-Karte navigieren
  await page.evaluate(() => { state.resultPage = 1; renderCurrentResultPage(); });
  await expect(page.locator('.result-card.rc-theme')).toBeVisible();
  await expect(page.locator('#rtp-edit-btn')).toBeVisible();
  await expect(page.locator('.rc-weakness-tag')).toBeVisible();
  // Kein X-Praefix in der Schwaechedarstellung
  const text = await page.locator('.rc-weakness-tag').textContent();
  expect(text).not.toMatch(/^\s*[Xx✕]/);
});

test('#34: Edit-Sheet durch Stift-Icon oeffnen', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await page.evaluate(() => { state.resultPage = 1; renderCurrentResultPage(); });
  await page.locator('#rtp-edit-btn').click();
  await expect(page.locator('#edit-sheet-overlay')).toHaveClass(/active/);
});

test('#36: Held-Edit-Sheet durch Stift-Icon oeffnen', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await page.locator('#rc-hero-edit').click();
  await expect(page.locator('#edit-sheet-overlay')).toHaveClass(/active/);
  await expect(page.locator('.es-reroll-btn').first()).toBeVisible();
});

test('#34/#36: Letzte Seite zeigt Speichern', async ({ page }) => {
  await page.goto('/');
  await loadResultScreen(page);
  await page.evaluate(() => {
    state.resultPage = totalResultPages() - 1;
    renderCurrentResultPage();
  });
  await expect(page.locator('.result-card.rc-save')).toBeVisible();
  await expect(page.locator('#save-pdf')).toBeVisible();
});

// #35: PHASEN-BALANCE
test('#35: Alle 20 Theme-Types haben Phasenkarten-Affinitaet', async ({ page }) => {
  await page.goto('/');
  const ok = await page.evaluate(() => {
    const all = [
      'Circumstance','Devotion','Past','People','Personality','Skill or Trade','Trait',
      'Duty','Influence','Knowledge','Prodigious Ability','Relic','Uncanny Being',
      'Destiny','Dominion','Mastery','Monstrosity','Companion','Magic','Possessions'
    ];
    const totals = {};
    PHASES.forEach(p => p.cards.forEach(c => {
      Object.entries(c.affinities||{}).forEach(([t,v]) => { totals[t]=(totals[t]||0)+v; });
    }));
    return all.every(t => (totals[t]||0) > 0);
  });
  expect(ok).toBe(true);
});
