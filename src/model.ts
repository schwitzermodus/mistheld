/* =====================================================
   Typisiertes Datenmodell. Foundation fuer Persistenz, Helden-Weiterentwicklung
   und (spaeter) Spielmodus. Bewusst serialisierbar (nur JSON-Werte).
===================================================== */
export type MightType = 'Origin' | 'Adventure' | 'Greatness';

export interface Tag {
  text: string;
  expanded?: boolean;
  hooks: string[];
}

export interface Quest {
  title: string;
  description: string;
  hooks?: string[];
  expanded?: boolean;
}

export interface Theme {
  type: string;            // effektive Might-Stufe (Origin/Adventure/Greatness)
  themebook: string;       // Theme-Type-Schluessel (z.B. "People")
  titleTag: Tag;
  powerTags: Tag[];
  weaknessTag: Tag;
  quest: Quest;
  tierTag: Tag | null;
  _titleEntry?: any;       // Laufzeit-Anker fuer Einzel-Re-Rolls (nicht persistiert)
}

export interface HeroName {
  firstName: string;
  epithet: string;
  title: string;
  description: string;
}

export interface ThemeTypeSetting { enabled: boolean; level: string; }
export interface Settings {
  preset: string;
  themeTypes: Record<string, ThemeTypeSetting>;
}

/** Persistierter, fertiger Held. schemaVersion erlaubt spaetere Migrationen. */
export interface Character {
  id: string;
  schemaVersion: number;
  createdAt: string;       // ISO-String
  updatedAt: string;       // ISO-String
  name: HeroName;
  themes: Theme[];
  story: string;
  backpack: Tag[];
  fellowship: Tag[];
  preset: string;
}

export const CHARACTER_SCHEMA_VERSION = 1;

/* --- Tag-/Theme-Kriterien (src/data/criteria.js) --- */
export interface FormRules { maxWords: number; forbidComma: boolean; forbidSentenceEnd: boolean; }
export interface BundleStructure { titlesPerBook: number; minPowerTags: number; minWeaknessTags: number; minQuests: number; }
export interface ThemebookQuestions {
  themeQuestions: string[];        // ♦-Leitfragen des Themebooks
  power: Record<string, string>;   // offizielle Power Tag Questions A..J
  weakness: Record<string, string>; // offizielle Weakness Tag Questions A..D
}
