/* =====================================================
   Charakter-Persistenz. Trennt den fertigen, serialisierbaren Character vom
   fluechtigen Sitzungs-Scratchpad (state.proposals/edits/hero).
   Store-Interface ist bewusst backend-tauglich geschnitten: spaeter kann ein
   BackendStore (Sync/Analytics) die LocalStorageStore-Implementierung ersetzen,
   ohne dass UI-Code sich aendert.
===================================================== */
import { state } from './session';
import { THEMEBOOKS } from '../data/themebooks.js';
import { getDisplayTheme } from '../core/generation';
import { loadSettings } from '../core/settings';
import { CHARACTER_SCHEMA_VERSION } from '../model';
import type { Character, Theme } from '../model';

const CHARACTERS_KEY = 'mistheld:characters';
const LAST_ID_KEY = 'mistheld:lastCharacterId';

export interface CharacterStore {
  list(): Character[];
  get(id: string): Character | null;
  save(c: Character): void;
  remove(id: string): void;
  lastId(): string | null;
  setLastId(id: string | null): void;
}

function readMap(): Record<string, Character> {
  try {
    var raw = localStorage.getItem(CHARACTERS_KEY);
    if (!raw) return {};
    var obj = JSON.parse(raw);
    return (obj && typeof obj === 'object') ? obj : {};
  } catch (_) { return {}; }
}
function writeMap(map: Record<string, Character>): void {
  try { localStorage.setItem(CHARACTERS_KEY, JSON.stringify(map)); } catch (_) {}
}

export const LocalStorageStore: CharacterStore = {
  list(): Character[] {
    var map = readMap();
    return Object.keys(map).map(function (k) { return map[k]; })
      .sort(function (a, b) { return (b.updatedAt || '').localeCompare(a.updatedAt || ''); });
  },
  get(id: string): Character | null { var map = readMap(); return map[id] || null; },
  save(c: Character): void { var map = readMap(); map[c.id] = c; writeMap(map); },
  remove(id: string): void { var map = readMap(); delete map[id]; writeMap(map); },
  lastId(): string | null { try { return localStorage.getItem(LAST_ID_KEY); } catch (_) { return null; } },
  setLastId(id: string | null): void { try { if (id) localStorage.setItem(LAST_ID_KEY, id); else localStorage.removeItem(LAST_ID_KEY); } catch (_) {} },
};

// Aktiver Store (austauschbar). Default: localStorage.
export const characterStore: CharacterStore = LocalStorageStore;

function genId(): string {
  try { if ((crypto as any) && (crypto as any).randomUUID) return (crypto as any).randomUUID(); } catch (_) {}
  return 'c_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
}

// Edits aufloesen -> reines, serialisierbares Theme (ohne Laufzeit-_titleEntry).
function resolveTheme(ti: number): Theme {
  var dt = getDisplayTheme(ti);
  return {
    type: dt.type, themebook: dt.themebook,
    titleTag: dt.titleTag, powerTags: dt.powerTags, weaknessTag: dt.weaknessTag,
    quest: dt.quest, tierTag: dt.tierTag || null,
  };
}

/** Aktuellen Sitzungs-Helden als Character materialisieren + speichern (reload-sicher). */
export function saveCurrentCharacter(): Character | null {
  var prop = state.proposals[state.proposalIndex];
  if (!state.hero || !prop) return null;
  var themes: Theme[] = prop.themes.map(function (_: any, i: number) { return resolveTheme(i); });
  var now = new Date().toISOString();
  var id = state.currentCharacterId;
  var createdAt = now;
  if (id) { var ex = characterStore.get(id); if (ex) createdAt = ex.createdAt; }
  else { id = genId(); state.currentCharacterId = id; }
  var h = state.hero;
  var c: Character = {
    id: id, schemaVersion: CHARACTER_SCHEMA_VERSION, createdAt: createdAt, updatedAt: now,
    name: { firstName: h.firstName, epithet: h.epithet, title: h.title, description: h.description },
    themes: themes, story: h.story || '', backpack: [], fellowship: [], preset: loadSettings().preset,
  };
  characterStore.save(c);
  characterStore.setLastId(id);
  return c;
}

// Beim Laden _titleEntry rekonstruieren (Anker fuer Einzel-Re-Rolls), per Titel-Text.
function rehydrateTheme(t: Theme): any {
  var book = (THEMEBOOKS as any)[t.themebook];
  var entry = book && book.titles ? book.titles.filter(function (x: any) { return x.text === (t.titleTag && t.titleTag.text); })[0] : null;
  return Object.assign({}, t, { _titleEntry: entry || null });
}

/** Gespeicherten Character in den Sitzungs-State laden (zur Anzeige/Weiterbearbeitung). */
export function loadCharacterIntoSession(c: Character): void {
  state.proposals = [{ mode: 'loaded', themes: c.themes.map(rehydrateTheme) }];
  state.proposalIndex = 0;
  state.edits = {};
  state.hero = { firstName: c.name.firstName, epithet: c.name.epithet, title: c.name.title, description: c.name.description, story: c.story };
  state.currentCharacterId = c.id;
  characterStore.setLastId(c.id);
}
