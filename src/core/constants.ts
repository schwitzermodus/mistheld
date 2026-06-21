/* =====================================================
   Zentrale Konstanten (keine Magic Strings). Kein DOM, kein State.
===================================================== */
export const SCREENS = Object.freeze({
  WELCOME: 'screen-welcome',
  INTRO: 'screen-intro',
  SWIPE: 'screen-swipe',
  RESULT: 'screen-result',
  SETTINGS: 'screen-settings',
});

export const LEVEL_CSS_CLASS = Object.freeze({
  Origin: 'tc-origin', Adventure: 'tc-adventure', Greatness: 'tc-greatness',
} as Record<string, string>);
export function levelCssClass(level: string): string { return LEVEL_CSS_CLASS[level] || 'tc-origin'; }

export const CFG = Object.freeze({
  STACK_DEPTH: 3, SWIPE_DISTANCE: 80, SWIPE_VELOCITY: 0.3,
  FLY_DURATION_MS: 900, LOADING_DELAY_MS: 700, ALT_LOADING_DELAY_MS: 450,
  MAX_PROPOSALS: 4, MAX_ELEMENT_ALTS: 3, HAPTIC_MS: 6, AUDIO_VOLUME: 0.4,
  MUTED_KEY: 'mistheld:muted', SETTINGS_KEY: 'mistheld:settings', EXPANDED_PREFERENCE: 0.7,
  MIN_SWIPES_FOR_SKIP: 10,
  // Kern-Qualität R1: Charakter-Profil + Cross-Theme-Kohäsion (Swipe-Schärfung).
  PROFILE_SIZE: 4,        // Top-N positive Hooks bilden das Charakter-Profil
  PROFILE_WEIGHT: 4,      // Gewicht der Profil-Überlappung bei der Auswahl (höher = entschiedener)
  COHESION_WEIGHT: 3,     // Gewicht der Überlappung mit bereits gewählten Themes (= ein Charakter)
  MAX_COHESION_RETRIES: 6, // Re-Roll-Versuche des Konflikt-Guards (Terminierung garantiert)
});

// #44: Default-Stufe pro Theme Type laut Quellbuch
export const DEFAULT_THEME_TIER: Record<string, string> = {
  'Circumstance': 'Origin', 'Devotion': 'Origin', 'Past': 'Origin', 'People': 'Origin',
  'Personality': 'Origin', 'Skill or Trade': 'Origin', 'Trait': 'Origin',
  'Duty': 'Adventure', 'Influence': 'Adventure', 'Knowledge': 'Adventure',
  'Prodigious Ability': 'Adventure', 'Relic': 'Adventure', 'Uncanny Being': 'Adventure',
  'Destiny': 'Greatness', 'Dominion': 'Greatness', 'Mastery': 'Greatness', 'Monstrosity': 'Greatness',
  'Companion': 'Origin', 'Magic': 'Origin', 'Possessions': 'Origin',
};
// Theme Types mit variabler Might-Stufe (auch im Standard-Modus veraenderbar)
export const VARIABLE_THEME_TYPES = ['Companion', 'Magic', 'Possessions'];
export function isVariableType(tb: string): boolean { return VARIABLE_THEME_TYPES.indexOf(tb) !== -1; }

export const PRESETS = Object.freeze(['beginner', 'standard', 'custom']);

// Zuordnung Theme Type -> visuelle Tier-Kategorie fuer Swipe-Karten-Tags.
export const TYPE_TIER: Record<string, string> = {
  'Circumstance': 'Origin', 'Devotion': 'Origin', 'Past': 'Origin', 'People': 'Origin',
  'Personality': 'Origin', 'Skill or Trade': 'Origin', 'Trait': 'Origin',
  'Duty': 'Adventure', 'Influence': 'Adventure', 'Knowledge': 'Adventure',
  'Prodigious Ability': 'Adventure', 'Relic': 'Adventure', 'Uncanny Being': 'Adventure',
  'Destiny': 'Greatness', 'Dominion': 'Greatness', 'Mastery': 'Greatness', 'Monstrosity': 'Greatness',
  'Companion': 'Variable', 'Magic': 'Variable', 'Possessions': 'Variable',
};
export function tierClass(tb: string): string {
  var t = TYPE_TIER[tb] || '';
  return t === 'Origin' ? 'tc-origin' : t === 'Adventure' ? 'tc-adventure' : t === 'Greatness' ? 'tc-greatness' : 'tc-variable';
}

// #44: Tag-Pools fuer Stufen-Abweichungen
export const TIER_DEVIATION_TAGS: Record<string, string[]> = {
  Origin: ['unauffällig', 'alltäglich', 'schlicht', 'gewohnt', 'unscheinbar', 'leise', 'vertraut', 'bescheiden'],
  Adventure: ['geübt', 'gewichtig', 'bemerkenswert', 'geprägt', 'gestählt', 'erfahren', 'geachtet', 'geschult'],
  Greatness: ['legendär', 'uralt', 'unwirklich', 'mächtig', 'verflucht', 'gesegnet', 'strahlend', 'furchteinflößend'],
};
