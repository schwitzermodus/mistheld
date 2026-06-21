/* =====================================================
   Screen-Navigation + i18n-Init (DOM).
===================================================== */
import { $, $$ } from '../util/dom';
import { SCREENS } from '../core/constants';
import { STRINGS } from '../i18n/strings.js';

export function initStrings(): void {
  document.title = STRINGS.pageTitle;
  (document.querySelector('.welcome-mark') as any).textContent = STRINGS.welcome.mark;
  (document.querySelector('.welcome-title') as any).textContent = STRINGS.welcome.title;
  if ($('btn-start')) $('btn-start').textContent = STRINGS.welcome.btnStart;
  if ($('btn-library')) $('btn-library').textContent = STRINGS.welcome.btnLibrary;
  if ($('lib-title')) $('lib-title').textContent = STRINGS.library.title;
  if ($('btn-no')) $('btn-no').setAttribute('aria-label', STRINGS.swipe.ariaNo);
  if ($('btn-undo')) $('btn-undo').setAttribute('aria-label', STRINGS.swipe.ariaUndo);
  if ($('btn-yes')) $('btn-yes').setAttribute('aria-label', STRINGS.swipe.ariaYes);
  if ($('btn-skip')) $('btn-skip').setAttribute('aria-label', STRINGS.swipe.ariaSkip);
  (document.querySelector('#screen-settings h2') as any).textContent = STRINGS.settings.heading;
  if ($('btn-settings-back')) $('btn-settings-back').setAttribute('aria-label', STRINGS.settings.ariaBack);
  if ($('btn-settings')) $('btn-settings').setAttribute('aria-label', STRINGS.settings.ariaOpen);
  if ($('settings-preset-intro')) $('settings-preset-intro').textContent = STRINGS.settings.presetIntro;
  var _seg = $('settings-preset-modes');
  if (_seg) _seg.querySelectorAll('.intro-mode .intro-mode-name').forEach(function (n: any) { n.textContent = STRINGS.settings.presets[n.parentNode.dataset.preset]; });
  var _quick = $('settings-tt-quick');
  if (_quick) _quick.querySelectorAll('.tt-quick-btn').forEach(function (b: any) { b.textContent = STRINGS.settings.quick[b.dataset.act]; });
  if ($('loading-text')) $('loading-text').textContent = STRINGS.loading.default;
  if ($('hb-save')) $('hb-save').textContent = STRINGS.result.btnAccept;
  if ($('hb-restart')) $('hb-restart').textContent = STRINGS.result.btnRestart;
  if ($('hb-edit')) $('hb-edit').textContent = STRINGS.result.btnEdit;
  if ($('hb-done')) $('hb-done').textContent = STRINGS.result.btnDone;
}

// #37 fix: Animation beim Zurueck-Navigieren unterbinden
export function show(screenId: string, suppressAnim?: boolean): void {
  $$('.screen').forEach(function (s: any) { s.classList.remove('active'); });
  var el = $(screenId);
  if (suppressAnim) {
    el.style.animation = 'none';
    el.getBoundingClientRect();
    el.style.animation = '';
  }
  el.classList.add('active');
  var sb = $('btn-settings');
  if (sb) sb.style.display = screenId === SCREENS.WELCOME ? '' : 'none';
  var mb = $('btn-mute');
  if (mb) mb.style.display = (screenId === SCREENS.RESULT || screenId === SCREENS.INTRO) ? 'none' : '';
}
export function showLoading(t?: string): void {
  $$('.screen').forEach(function (s: any) { s.classList.remove('active'); });
  $('loading-text').textContent = t || STRINGS.loading.default; $('loading').classList.add('active');
}
export function hideLoading(): void { $('loading').classList.remove('active'); }
