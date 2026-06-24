/* =====================================================
   Inhalts-Engine (kein DOM): Theme-/Held-/Story-Generierung + Edit-Scratchpad.
   Titel ist der Anker — Power/Weakness/Quest stammen aus DEM gezogenen Buendel.
===================================================== */
import { state } from '../state/session';
import { THEMEBOOKS } from '../data/themebooks.js';
import {
  HERO_FIRSTNAMES, HERO_EPITHETS, HERO_TITLES, HERO_DESCRIPTIONS,
  HERO_TITLE_HOOKS, HERO_DESC_HOOKS,
} from '../data/heroPools.js';
import { STORY_FRAGMENTS, STORY_CLOSINGS } from '../data/storyFragments';
import { loadSettings, effectiveLevel, getEnabledThemeTypes } from './settings';
import { DEFAULT_THEME_TIER, CFG, TIER_DEVIATION_TAGS } from './constants';
import {
  pickTitleWithBias, pickTitleCohesive, characterProfile,
  pickWithSwipeBias, pickQuestWithBias, pickBestFrom, pickRandomFrom,
  tagHooks, weightedPickIndex,
} from './scoring';
import { findConflictIndex } from './conflicts';
import { capitalizeFirst } from '../util/text';

export function generateTierDeviationTag(level: string): any {
  var pool = TIER_DEVIATION_TAGS[level] || TIER_DEVIATION_TAGS.Origin;
  return { text: pool[Math.floor(Math.random() * pool.length)], expanded: false };
}

export function generateTheme(name: string, settings: any, ctx?: any): any {
  var tb = (THEMEBOOKS as any)[name];
  // Mit Kohaesions-Kontext: Titel entlang Profil + bereits gewaehlter Themes ziehen.
  var entry = ctx
    ? pickTitleCohesive(tb.titles, ctx.profile, ctx.chosenHooks)
    : pickTitleWithBias(tb.titles);                      // Titel-Buendel (Anker)
  var titleTag = { text: entry.text, expanded: false, hooks: tagHooks(entry) };
  var powerTags = pickWithSwipeBias(entry.powerTags, 2);  // aus DEM Buendel
  var weaknessTag = pickWithSwipeBias(entry.weaknessTags, 1)[0];
  var quest = pickQuestWithBias(entry.quests);
  var type = effectiveLevel(name, settings);
  var tierTag = null;
  if (type !== DEFAULT_THEME_TIER[name]) {
    tierTag = generateTierDeviationTag(type);
  }
  return { type: type, themebook: name, titleTag: titleTag, powerTags: powerTags, weaknessTag: weaknessTag, quest: quest, tierTag: tierTag, _titleEntry: entry };
}
// #44: Proposal-Generation aus aktivierten Theme Types
export function generateProposal(mode?: string, base?: any): any {
  mode = mode || 'initial';
  var s = loadSettings();
  var enabled = getEnabledThemeTypes(s);
  if (enabled.length === 0) enabled = ['People', 'Skill or Trade', 'Trait', 'Personality'];
  // Teilergebnis: nie mehr verschiedene Themes als aktivierte Theme-Typen (keine
  // erzwungene Wiederholung auf 4, wenn die Einstellungen zu eng sind).
  var n = Math.min(4, enabled.length);
  var used: string[] = [];
  var tbs: string[] = [];
  for (var i = 0; i < n; i++) {
    var avail = enabled.filter(function (tb) { return used.indexOf(tb) === -1; });
    if (avail.length === 0) avail = enabled.slice();
    var pick;
    if (mode === 'tags-only' && base && base.themes[i]) {
      pick = base.themes[i].themebook;
    } else if (mode === 'new-themebooks' && base && base.themes[i]) {
      var without = avail.filter(function (tb) { return tb !== base.themes[i].themebook; });
      pick = pickBestFrom(without.length ? without : avail);
    } else if (mode === 'initial') {
      pick = pickBestFrom(avail);
    } else {
      pick = pickRandomFrom(avail);
    }
    used.push(pick);
    tbs.push(pick);
  }

  // Cross-Theme-Kohaesion: Profil aus den Swipes; chosenHooks akkumuliert die
  // Hooks bereits gewaehlter Themes, sodass die 4 entlang eines Fadens ziehen.
  var profile = characterProfile();
  var chosenHooks: Record<string, number> = {};
  function themeHooks(t: any): string[] {
    return (tagHooks(t.titleTag) || [])
      .concat(tagHooks(t.powerTags[0]) || [], tagHooks(t.powerTags[1]) || []);
  }
  function addHooks(map: Record<string, number>, t: any): void {
    themeHooks(t).forEach(function (h) { map[h] = (map[h] || 0) + 1; });
  }
  var themes: any[] = [];
  for (var k = 0; k < tbs.length; k++) {
    var th = generateTheme(tbs[k], s, { profile: profile, chosenHooks: chosenHooks });
    themes.push(th);
    addHooks(chosenHooks, th);
  }

  // Konflikt-Guard: harte Identitaets-Widersprueche zwischen Themes aufloesen.
  for (var attempt = 0; attempt < CFG.MAX_COHESION_RETRIES; attempt++) {
    var ci = findConflictIndex(themes);
    if (ci === -1) break;
    // Kohaesions-Kontext OHNE das betroffene Theme neu aufbauen.
    var ch2: Record<string, number> = {};
    for (var x = 0; x < themes.length; x++) { if (x !== ci) addHooks(ch2, themes[x]); }
    // Ab der Haelfte der Versuche ein ungenutztes Themebook waehlen, falls der
    // Buendel-Re-Roll desselben Themebooks den Konflikt nicht aufloest.
    if (attempt >= 3) {
      var alt = enabled.filter(function (b) { return tbs.indexOf(b) === -1; });
      if (alt.length) tbs[ci] = pickRandomFrom(alt);
    }
    themes[ci] = generateTheme(tbs[ci], s, { profile: profile, chosenHooks: ch2 });
  }
  return { mode: mode, themes: themes };
}

/* HELD-GENERATOR */
export function pickHeroEntry(arr: any[], hooksByIndex: any): any {
  var score = function (i: number) { var hs = (hooksByIndex && hooksByIndex[i]) || [], s = 0; for (var j = 0; j < hs.length; j++) s += Math.max(0, state.hookCounts[hs[j]] || 0); return s; };
  var hasSignal = false; for (var i = 0; i < arr.length; i++) { if (score(i) > 0) { hasSignal = true; break; } }
  if (!hasSignal) return arr[Math.floor(Math.random() * arr.length)];
  var weights = arr.map(function (_, i) { return 1 + 2.5 * score(i); });
  return arr[weightedPickIndex(weights)];
}
export function generateHero(): any {
  return {
    firstName: pickRandomFrom(HERO_FIRSTNAMES),
    epithet: pickRandomFrom(HERO_EPITHETS),
    title: pickHeroEntry(HERO_TITLES, HERO_TITLE_HOOKS),
    description: pickHeroEntry(HERO_DESCRIPTIONS, HERO_DESC_HOOKS),
  };
}
export function rerollHeroPart(part: string): void {
  var pools: any = { firstName: HERO_FIRSTNAMES, epithet: HERO_EPITHETS, title: HERO_TITLES, description: HERO_DESCRIPTIONS };
  var hookMaps: any = { title: HERO_TITLE_HOOKS, description: HERO_DESC_HOOKS };
  var v, a = 0;
  do { v = hookMaps[part] ? pickHeroEntry(pools[part], hookMaps[part]) : pickRandomFrom(pools[part]); a++; } while (v === state.hero[part] && a < 5);
  state.hero[part] = v;
}

/* THEME-EDITS (Scratchpad ueber dem aktuellen Proposal) */
export function editKey(ti: number, k: string): string { return 't' + ti + '-' + k; }
export function getEdit(ti: number, k: string): any { return state.edits[editKey(ti, k)]; }
export function getCurrentVal(ti: number, k: string, fb: any): any { var e = getEdit(ti, k); if (!e || e.index === 0) return fb; return e.alts[e.index - 1]; }
export function getDisplayTheme(ti: number): any {
  var base = state.proposals[state.proposalIndex].themes[ti];
  var te = getEdit(ti, 'theme');
  var tb = (te && te.index > 0) ? te.alts[te.index - 1] : base;
  return {
    type: tb.type, themebook: tb.themebook,
    titleTag: getCurrentVal(ti, 'title', tb.titleTag),
    powerTags: [getCurrentVal(ti, 'pow0', tb.powerTags[0]), getCurrentVal(ti, 'pow1', tb.powerTags[1])],
    weaknessTag: getCurrentVal(ti, 'weakness', tb.weaknessTag),
    quest: getCurrentVal(ti, 'quest', tb.quest),
    tierTag: tb.tierTag || null,
  };
}
export function addAlt(ti: number, k: string, v: any): void {
  var key = editKey(ti, k);
  if (!state.edits[key]) state.edits[key] = { alts: [], index: 0 };
  var e = state.edits[key];
  if (e.alts.length >= CFG.MAX_ELEMENT_ALTS) return;
  e.alts.push(v); e.index = e.alts.length;
}
export function clearThemeEdits(ti: number): void { ['title', 'pow0', 'pow1', 'weakness', 'quest'].forEach(function (k) { delete state.edits[editKey(ti, k)]; }); }
export function getBaseTheme(ti: number): any {
  var base = state.proposals[state.proposalIndex].themes[ti];
  var te = getEdit(ti, 'theme');
  return (te && te.index > 0) ? te.alts[te.index - 1] : base;
}
export function handleReroll(ti: number, k: string): void {
  var s = loadSettings();
  if (k === 'theme' || k === 'title') {
    var nv = generateTheme(getBaseTheme(ti).themebook, s);
    clearThemeEdits(ti);
    addAlt(ti, 'theme', nv);
    return;
  }
  var entry = getBaseTheme(ti)._titleEntry;
  var v;
  if (k === 'pow0' || k === 'pow1') { v = pickWithSwipeBias(entry.powerTags, 1)[0]; }
  else if (k === 'weakness') { v = pickWithSwipeBias(entry.weaknessTags, 1)[0]; }
  else if (k === 'quest') { v = pickQuestWithBias(entry.quests); }
  if (v !== undefined) addAlt(ti, k, v);
}
export function handleNavigate(ti: number, k: string, dir: number): void {
  var e = getEdit(ti, k); if (!e) return;
  e.index = Math.max(0, Math.min(e.alts.length, e.index + dir));
}

/* STORY */
export function storyHooksFromThemes(n: number): string[] {
  var counts: any = {};
  state.proposals[state.proposalIndex].themes.forEach(function (_: any, ti: number) {
    var dt = getDisplayTheme(ti);
    [dt.titleTag, dt.powerTags[0], dt.powerTags[1]].forEach(function (t: any) {
      (((t && t.hooks)) || []).forEach(function (h: string) { counts[h] = (counts[h] || 0) + 1; });
    });
  });
  return Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; }).slice(0, n);
}
export function composeHeroStory(): string {
  var h = state.hero, t0 = getDisplayTheme(0);
  var parts = [h.firstName + ' ' + h.epithet + ' — ' + capitalizeFirst(t0.titleTag.text) + '.'];
  storyHooksFromThemes(2).forEach(function (hk) {
    var pool = STORY_FRAGMENTS[hk];
    if (pool && pool.length) parts.push(pool[Math.floor(Math.random() * pool.length)]);
  });
  parts.push(STORY_CLOSINGS[Math.floor(Math.random() * STORY_CLOSINGS.length)]);
  return parts.join(' ');
}
