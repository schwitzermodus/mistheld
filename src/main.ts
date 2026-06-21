/* =====================================================
   Mistheld · Bootstrap. Verdrahtet Module + Event-Bindings.
   Legt zentrale APIs auf window (fuer Playwright-Tests / Debug).
===================================================== */
import { $ } from './util/dom';
import { state } from './state/session';
import { SCREENS } from './core/constants';
import { STRINGS } from './i18n/strings.js';
import { THEMEBOOKS } from './data/themebooks.js';
import { PHASES } from './data/inspirations.js';
import { HERO_FIRSTNAMES } from './data/heroPools.js';
import { generateProposal, generateHero, composeHeroStory } from './core/generation';
import { initStrings, show } from './ui/navigation';
import { initAudio } from './ui/audio';
import { initWelcomePreview } from './ui/welcomePreview';
import { renderIntro, selectIntroMode, saveSettingsFromUI } from './ui/intro';
import { startSwipe, programmaticDecide, undoLast, skipRemainingSwipes } from './ui/swipe';
import { renderHeldenblatt, setHbEditing } from './ui/result';
import { closeEditSheet } from './ui/editSheet';
import { openSettings, setPreset, applyQuickAction } from './ui/settingsUI';
import { openLibrary, closeLibrary } from './ui/library';
import { generatePDF } from './pdf/export';

/* INIT */
initStrings(); initAudio(); initWelcomePreview();

/* EVENT BINDINGS */
$('btn-start').addEventListener('click', function () { renderIntro(); show(SCREENS.INTRO); });
if ($('btn-library')) $('btn-library').addEventListener('click', openLibrary);
if ($('lib-close')) $('lib-close').addEventListener('click', closeLibrary);
if ($('library-overlay')) $('library-overlay').addEventListener('click', function (e: any) { if (e.target === $('library-overlay')) closeLibrary(); });
if ($('btn-intro-start')) $('btn-intro-start').addEventListener('click', startSwipe);
if ($('btn-intro-back')) $('btn-intro-back').addEventListener('click', function () { show(SCREENS.WELCOME, true); });
if ($('intro-modes')) {
  $('intro-modes').querySelectorAll('.intro-mode').forEach(function (b: any) {
    b.addEventListener('click', function () { selectIntroMode(b.dataset.preset); });
  });
}
if ($('intro-settings-link')) {
  $('intro-settings-link').addEventListener('click', openSettings);
  $('intro-settings-link').addEventListener('keydown', function (e: any) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openSettings(); } });
}
$('btn-yes').addEventListener('click', function () { programmaticDecide('yes'); });
$('btn-no').addEventListener('click', function () { programmaticDecide('no'); });
$('btn-undo').addEventListener('click', undoLast);
$('btn-skip').addEventListener('click', skipRemainingSwipes);
$('btn-settings').addEventListener('click', openSettings);
$('btn-settings-back').addEventListener('click', function () {
  saveSettingsFromUI();
  var ret = state.settingsReturn || SCREENS.WELCOME;
  if (ret === SCREENS.INTRO) renderIntro();
  show(ret, true);
});
if ($('hb-save')) $('hb-save').addEventListener('click', generatePDF);
if ($('hb-restart')) $('hb-restart').addEventListener('click', function () { setHbEditing(false); document.body.classList.remove('swipe-active'); show(SCREENS.WELCOME, true); });
if ($('hb-edit')) $('hb-edit').addEventListener('click', function () { setHbEditing(true); });
if ($('hb-done')) $('hb-done').addEventListener('click', function () { setHbEditing(false); });
$('edit-sheet-overlay').addEventListener('click', function (e: any) { if (e.target === $('edit-sheet-overlay')) closeEditSheet(); });
if ($('settings-preset-modes')) {
  $('settings-preset-modes').querySelectorAll('.intro-mode').forEach(function (b: any) {
    b.addEventListener('click', function () { setPreset(b.dataset.preset); });
  });
}
if ($('settings-tt-quick')) {
  $('settings-tt-quick').querySelectorAll('.tt-quick-btn').forEach(function (b: any) {
    b.addEventListener('click', function () { applyQuickAction(b.dataset.act); });
  });
}
// Zoom-Verhinderung (iOS Safari)
document.addEventListener('gesturestart', function (e: any) { e.preventDefault(); }, { passive: false } as any);
document.addEventListener('gesturechange', function (e: any) { e.preventDefault(); }, { passive: false } as any);
document.addEventListener('gestureend', function (e: any) { e.preventDefault(); }, { passive: false } as any);
document.addEventListener('touchmove', function (e: any) {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

document.addEventListener('keydown', function (e: any) {
  if (e.key === 'Escape' && $('library-overlay') && $('library-overlay').classList.contains('active')) { closeLibrary(); return; }
  if ($('screen-swipe').classList.contains('active')) {
    if (e.key === 'ArrowRight') { e.preventDefault(); programmaticDecide('yes'); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); programmaticDecide('no'); }
    else if (e.key === 'Backspace') { e.preventDefault(); undoLast(); }
  }
  if ($('screen-result').classList.contains('active')) {
    if (e.key === 'Escape') { closeEditSheet(); }
  }
});

/* Globals fuer Playwright-Smoke-Tests / Debug (kein Teil der oeffentlichen API). */
Object.assign(window as any, {
  state, STRINGS, THEMEBOOKS, PHASES, HERO_FIRSTNAMES,
  generateProposal, generateHero, composeHeroStory, show, renderHeldenblatt,
});
