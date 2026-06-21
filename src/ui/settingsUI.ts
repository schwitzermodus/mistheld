/* =====================================================
   SETTINGS-UI (Presets Einsteiger/Standard/Individuell, DOM).
===================================================== */
import { $ } from '../util/dom';
import { state } from '../state/session';
import { show } from './navigation';
import { SCREENS, DEFAULT_THEME_TIER, VARIABLE_THEME_TYPES, isVariableType, PRESETS } from '../core/constants';
import {
  loadSettings, saveSettings, effectiveLevel, isMightEditable, isThemeTypeAvailable,
  getEnabledThemeTypes, presetThemeTypes,
} from '../core/settings';
import { displayMight, displayThemebook, STRINGS } from '../i18n/strings.js';
import { escapeHtml } from '../util/text';

// Theme Types nach Tier gruppiert; die drei variablen Typen als eigene Gruppe am Ende.
const SETTINGS_GROUPS = (function () {
  var tiers = ['Origin', 'Adventure', 'Greatness'];
  var byTier: any = {}; var groups = tiers.map(function (t) { var g = { tier: t, types: [] as string[] }; byTier[t] = g; return g; });
  Object.keys(DEFAULT_THEME_TIER).forEach(function (tb) {
    if (isVariableType(tb)) return;
    byTier[DEFAULT_THEME_TIER[tb]].types.push(tb);
  });
  groups.push({ tier: 'Variable', types: VARIABLE_THEME_TYPES.slice() });
  return groups;
})();

const SETTINGS_SECTION_COLLAPSED: any = {};

export function buildSettingsUI(): void {
  var s = loadSettings();

  var seg = $('settings-preset-modes');
  if (seg) {
    seg.querySelectorAll('.intro-mode').forEach(function (b: any) {
      var on = b.dataset.preset === s.preset;
      b.classList.toggle('on', on);
      b.setAttribute('aria-checked', on ? 'true' : 'false');
      var nameEl = b.querySelector('.intro-mode-name');
      if (nameEl) nameEl.textContent = STRINGS.settings.presets[b.dataset.preset];
    });
  }
  if ($('settings-preset-hint')) $('settings-preset-hint').textContent = STRINGS.settings.presetHints[s.preset];

  var list = $('settings-themetypes-list');
  if (!list) return;
  var levels = ['Origin', 'Adventure', 'Greatness'];
  var enabledCount = 0;
  var html = '';

  SETTINGS_GROUPS.forEach(function (group: any) {
    var visible = group.types.filter(function (tb: string) { return isThemeTypeAvailable(tb, s); });
    if (visible.length === 0) return;
    var isVarGroup = group.tier === 'Variable';
    var tierCls = isVarGroup ? 'variable' : group.tier.toLowerCase();
    var collapsed = !!SETTINGS_SECTION_COLLAPSED[group.tier];
    var titleText = STRINGS.settings.ttSectionPrefix +
      (isVarGroup ? STRINGS.settings.ttVariableGroup : displayMight(group.tier));

    var rows = '';
    visible.forEach(function (tb: string) {
      var entry = s.themeTypes[tb] || { enabled: true, level: DEFAULT_THEME_TIER[tb] };
      if (entry.enabled) enabledCount++;
      var editable = isMightEditable(tb, s);
      var effLevel = effectiveLevel(tb, s);
      var ttSafeId = tb.replace(/\s/g, '_');
      var toggleAria = ' aria-label="' + escapeHtml(displayThemebook(tb)) + ' aktivieren"';

      var chips = levels.map(function (lv) {
        var sel = effLevel === lv;
        var dis = !(editable && entry.enabled);
        return '<button type="button" class="tt-level-chip tc-' + lv.toLowerCase() + (sel ? ' selected' : '') + '"' +
               ' data-tt="' + tb + '" data-level="' + lv + '"' +
               ' aria-pressed="' + (sel ? 'true' : 'false') + '"' +
               (dis ? ' disabled' : '') + '>' +
               escapeHtml(displayMight(lv)) + '</button>';
      }).join('');

      rows +=
        '<div class="tt-row' + (entry.enabled ? '' : ' disabled') + '">' +
          '<div class="tt-row-top">' +
            '<input type="checkbox" class="tt-check-input" id="tt-toggle-' + ttSafeId + '" data-tt="' + tb + '"' + toggleAria + (entry.enabled ? ' checked' : '') + '>' +
            '<label class="tt-row-label" for="tt-toggle-' + ttSafeId + '"><span class="tt-check-box" aria-hidden="true"></span><span class="tt-name">' + escapeHtml(displayThemebook(tb)) + '</span></label>' +
          '</div>' +
          '<div class="tt-level-chips">' + chips + '</div>' +
        '</div>';
    });

    html +=
      '<div class="tt-section">' +
        '<button type="button" class="tt-section-head' + (collapsed ? ' collapsed' : '') + '" data-tier="' + group.tier + '" aria-expanded="' + (!collapsed) + '">' +
          '<span class="tt-section-title tc-' + tierCls + '">' + escapeHtml(titleText) + '</span>' +
          '<span class="tt-chevron" aria-hidden="true"></span>' +
        '</button>' +
        '<div class="tt-section-body' + (collapsed ? ' collapsed' : '') + '">' + rows + '</div>' +
      '</div>';
  });

  list.innerHTML = html;

  if ($('settings-consequence')) {
    $('settings-consequence').innerHTML =
      STRINGS.settings.consequence(enabledCount, Object.keys(DEFAULT_THEME_TIER).length);
  }

  list.querySelectorAll('.tt-section-head').forEach(function (h: any) {
    h.addEventListener('click', function () {
      var t = h.dataset.tier;
      SETTINGS_SECTION_COLLAPSED[t] = !SETTINGS_SECTION_COLLAPSED[t];
      buildSettingsUI();
    });
  });
  list.querySelectorAll('input[type=checkbox][data-tt]').forEach(function (cb: any) {
    cb.addEventListener('change', function () {
      var st = loadSettings();
      var tb = cb.dataset.tt;
      if (!st.themeTypes[tb]) st.themeTypes[tb] = { enabled: true, level: DEFAULT_THEME_TIER[tb] };
      st.themeTypes[tb].enabled = cb.checked;
      if (getEnabledThemeTypes(st).length === 0) { st.themeTypes[tb].enabled = true; }
      saveSettings(st);
      buildSettingsUI();
    });
  });
  list.querySelectorAll('.tt-level-chip').forEach(function (chip: any) {
    chip.addEventListener('click', function () {
      if (chip.disabled) return;
      var st = loadSettings();
      var tb = chip.dataset.tt;
      if (!isMightEditable(tb, st)) return;
      if (!st.themeTypes[tb]) st.themeTypes[tb] = { enabled: true, level: DEFAULT_THEME_TIER[tb] };
      st.themeTypes[tb].level = chip.dataset.level;
      saveSettings(st);
      buildSettingsUI();
    });
  });
}

export function setPreset(preset: string): void {
  if (PRESETS.indexOf(preset) === -1) return;
  var st = loadSettings();
  st.preset = preset;
  st.themeTypes = presetThemeTypes(preset);
  saveSettings(st);
  buildSettingsUI();
}

export function applyQuickAction(act: string): void {
  var st = loadSettings();
  var avail = Object.keys(DEFAULT_THEME_TIER).filter(function (tb) { return isThemeTypeAvailable(tb, st); });
  if (act === 'reset') {
    st.themeTypes = presetThemeTypes(st.preset);
  } else if (act === 'all-on') {
    avail.forEach(function (tb) { st.themeTypes[tb].enabled = true; });
  } else if (act === 'all-off') {
    avail.forEach(function (tb, i) { st.themeTypes[tb].enabled = (i === 0); });
  }
  saveSettings(st);
  buildSettingsUI();
}

export function openSettings(): void {
  var active = document.querySelector('.screen.active');
  state.settingsReturn = (active && active.id) ? active.id : SCREENS.WELCOME;
  buildSettingsUI();
  show(SCREENS.SETTINGS);
}
export function updateSettingsUI(): void { buildSettingsUI(); }
