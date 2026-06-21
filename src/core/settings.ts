/* =====================================================
   Einstellungen/Presets (kein DOM). localStorage als Persistenz.
   beginner = nur Ursprung-Typen, Might fixiert; standard = alle Typen auf
   Buch-Stufe (nur Variable frei); custom = alles frei.
===================================================== */
import { CFG, DEFAULT_THEME_TIER, PRESETS, isVariableType } from './constants';
import type { Settings } from '../model';

// In welchem Preset ist ein Theme Type ueberhaupt verfuegbar?
export function isThemeTypeAvailable(tb: string, settings: any): boolean {
  if (settings.preset === 'beginner') return DEFAULT_THEME_TIER[tb] === 'Origin';
  return true;
}
// Darf die Might-Stufe in diesem Preset veraendert werden?
export function isMightEditable(tb: string, settings: any): boolean {
  if (settings.preset === 'custom') return true;
  if (settings.preset === 'standard') return isVariableType(tb);
  return false; // beginner: alles fixiert
}

// Aktiv-Zustaende + Stufen passend zum Preset (Default beim Wechsel/Zuruecksetzen)
export function presetThemeTypes(preset: string): Record<string, any> {
  var out: Record<string, any> = {};
  Object.keys(DEFAULT_THEME_TIER).forEach(function (tb) {
    var lvl = isVariableType(tb) ? 'Origin' : DEFAULT_THEME_TIER[tb];
    var enabled;
    if (preset === 'beginner') {
      enabled = (DEFAULT_THEME_TIER[tb] === 'Origin') && !isVariableType(tb);
    } else {
      enabled = true;
    }
    out[tb] = { enabled: enabled, level: lvl };
  });
  return out;
}

export const DEFAULT_SETTINGS: Settings = {
  preset: 'beginner',
  themeTypes: presetThemeTypes('beginner') as any,
};

// Altes Format ({standard:true/false}) auf das neue Preset-Modell abbilden
export function migratePreset(p: any): string {
  if (p && PRESETS.indexOf(p.preset) !== -1) return p.preset;
  if (p && typeof p.standard === 'boolean') return p.standard ? 'standard' : 'custom';
  return 'beginner';
}

export function loadSettings(): any {
  try {
    var raw = localStorage.getItem(CFG.SETTINGS_KEY);
    if (!raw) return { preset: 'beginner', themeTypes: presetThemeTypes('beginner') };
    var p = JSON.parse(raw);
    var preset = migratePreset(p);
    var tt = presetThemeTypes(preset);
    if (p.themeTypes) {
      Object.keys(tt).forEach(function (tb) {
        if (p.themeTypes[tb]) {
          if (typeof p.themeTypes[tb].enabled === 'boolean') tt[tb].enabled = p.themeTypes[tb].enabled;
          if (typeof p.themeTypes[tb].level === 'string') tt[tb].level = p.themeTypes[tb].level;
        }
      });
    }
    return { preset: preset, themeTypes: tt };
  } catch (_) { return { preset: 'beginner', themeTypes: presetThemeTypes('beginner') }; }
}
export function saveSettings(s: any): void { try { localStorage.setItem(CFG.SETTINGS_KEY, JSON.stringify(s)); } catch (_) {} }

// Effektive Might-Stufe — wo nicht editierbar, gilt die fixierte Buch-Stufe (Variable: Ursprung)
export function effectiveLevel(tb: string, settings: any): string {
  if (!isMightEditable(tb, settings)) {
    return isVariableType(tb) ? 'Origin' : DEFAULT_THEME_TIER[tb];
  }
  return (settings.themeTypes[tb] || {}).level || DEFAULT_THEME_TIER[tb];
}
export function isThemeTypeEnabled(tb: string, settings: any): boolean {
  if (!isThemeTypeAvailable(tb, settings)) return false;
  return (settings.themeTypes[tb] || {}).enabled !== false;
}
export function getEnabledThemeTypes(settings: any): string[] {
  return Object.keys(DEFAULT_THEME_TIER).filter(function (tb) {
    return isThemeTypeEnabled(tb, settings);
  });
}
