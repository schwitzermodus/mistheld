/* =====================================================
   ZWISCHENSCHRITT: Prinzip-Erklaerung + Modus-Auswahl (DOM).
===================================================== */
import { $ } from '../util/dom';
import { PRESETS } from '../core/constants';
import { loadSettings } from '../core/settings';
import { setPreset } from './settingsUI';
import { STRINGS } from '../i18n/strings.js';

export function renderIntro(): void {
  if ($('intro-title')) $('intro-title').textContent = STRINGS.intro.title;
  if ($('intro-text')) $('intro-text').textContent = STRINGS.intro.intro;
  if ($('intro-modelabel')) $('intro-modelabel').textContent = STRINGS.intro.modeLabel;
  if ($('intro-hint')) $('intro-hint').textContent = STRINGS.intro.settingsHint;
  if ($('intro-settings-link')) $('intro-settings-link').textContent = STRINGS.intro.settingsLink;
  if ($('btn-intro-start')) $('btn-intro-start').textContent = STRINGS.intro.cta;
  if ($('btn-intro-back')) $('btn-intro-back').textContent = STRINGS.intro.back;
  var cur = loadSettings().preset;
  var modes = $('intro-modes');
  if (modes) {
    modes.querySelectorAll('.intro-mode').forEach(function (b: any) {
      var p = b.dataset.preset, on = (p === cur);
      b.classList.toggle('on', on);
      b.setAttribute('aria-checked', on ? 'true' : 'false');
      var nameEl = b.querySelector('.intro-mode-name');
      if (nameEl) nameEl.textContent = STRINGS.settings.presets[p];
    });
  }
  if ($('intro-modedesc')) $('intro-modedesc').textContent = STRINGS.intro.modeDesc[cur];
}
export function selectIntroMode(preset: string): void {
  if (PRESETS.indexOf(preset) === -1) return;
  if (loadSettings().preset !== preset) setPreset(preset);
  renderIntro();
}
export function saveSettingsFromUI(): void {}
