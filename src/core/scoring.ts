/* =====================================================
   Swipe-Scoring + hook-gewichtete Auswahl (kein DOM).
   Liest/mutiert den fluechtigen Sitzungs-State (affinityScores, hookCounts).
===================================================== */
import { state } from '../state/session';
import { CFG } from './constants';
import { tagText, isExpanded } from '../util/text';

export function tagHooks(e: any): string[] { return (e && typeof e === 'object' && Array.isArray(e.hooks)) ? e.hooks : []; }

export function applyScore(card: any, dir: string, sign: number): void {
  var f = (dir === 'yes' ? 1 : -0.2) * sign;
  Object.entries(card.affinities || {}).forEach(function (kv: any) { state.affinityScores[kv[0]] = (state.affinityScores[kv[0]] || 0) + f * kv[1]; });
  // Swipe-Bias: Hooks der Karte mitzaehlen (steuert spaeter Tag-/Held-Auswahl)
  (card.hooks || []).forEach(function (h: string) { state.hookCounts[h] = (state.hookCounts[h] || 0) + f; });
}

export function pickWithExpansionPreference(arr: any[], n: number): any[] {
  var pool = arr.slice(), out: any[] = [];
  var target = Math.min(n, pool.length);
  while (out.length < target && pool.length > 0) {
    var ei = pool.map(function (e, i) { return isExpanded(e) ? i : -1; }).filter(function (i) { return i >= 0; });
    var idx;
    if (ei.length > 0 && Math.random() < CFG.EXPANDED_PREFERENCE) idx = ei[Math.floor(Math.random() * ei.length)];
    else idx = Math.floor(Math.random() * pool.length);
    var e = pool.splice(idx, 1)[0];
    out.push({ text: tagText(e), expanded: isExpanded(e), hooks: tagHooks(e) });
  }
  return out;
}

export function pickBestFrom(list: string[], exclude?: string[]): string {
  var cands = list.filter(function (tb) { return !(exclude || []).includes(tb); });
  var pool = cands.length ? cands : list;
  return pool.reduce(function (best, tb) {
    return (state.affinityScores[tb] || 0) > (state.affinityScores[best] || -Infinity) ? tb : best;
  }, pool[0]);
}
export function pickRandomFrom(list: any[]): any { return list[Math.floor(Math.random() * list.length)]; }
export function pickQuestWithExp(pool: any[]): any {
  var ex = pool.filter(function (q) { return q.expanded; });
  if (ex.length > 0 && Math.random() < CFG.EXPANDED_PREFERENCE) return ex[Math.floor(Math.random() * ex.length)];
  return pool[Math.floor(Math.random() * pool.length)];
}

export function hookScore(e: any): number {
  var hs = tagHooks(e), sc = 0;
  for (var i = 0; i < hs.length; i++) { sc += Math.max(0, state.hookCounts[hs[i]] || 0); }
  return sc;
}
export function weightedPickIndex(weights: number[]): number {
  var total = weights.reduce(function (a, b) { return a + b; }, 0);
  if (total <= 0) return Math.floor(Math.random() * weights.length);
  var r = Math.random() * total;
  for (var i = 0; i < weights.length; i++) { r -= weights[i]; if (r <= 0) return i; }
  return weights.length - 1;
}

/* =====================================================
   Charakter-Profil: Top-N positive Hooks aus den Swipes, RANGBASIERT gewichtet
   (Platz 1 am staerksten). Diminishing returns gegen Ja-Inflation: gestreute
   schwache Hooks verlieren Einfluss -> entschiedener, weniger "Random".
===================================================== */
export function characterProfile(): Record<string, number> {
  var entries = Object.keys(state.hookCounts)
    .map(function (h) { return [h, state.hookCounts[h]] as [string, number]; })
    .filter(function (x) { return x[1] > 0; })
    .sort(function (a, b) { return b[1] - a[1]; })
    .slice(0, CFG.PROFILE_SIZE);
  var profile: Record<string, number> = {};
  var k = entries.length;
  entries.forEach(function (x, i) { profile[x[0]] = (k - i) / k; }); // 1.0 .. 1/k
  return profile;
}
export function hasProfileSignal(profile: Record<string, number>): boolean { return Object.keys(profile).length > 0; }
export function profileScore(e: any, profile: Record<string, number>): number {
  var hs = tagHooks(e), sc = 0;
  for (var i = 0; i < hs.length; i++) { sc += profile[hs[i]] || 0; }
  return sc;
}
// Einheitliches Auswahl-Gewicht: Profil-Pfad (geschaerft) wenn Signal da, sonst Legacy-hookScore.
function biasWeight(e: any, profile: Record<string, number>, expandedBonus: boolean): number {
  var base = hasProfileSignal(profile)
    ? CFG.PROFILE_WEIGHT * profileScore(e, profile)
    : 2.5 * hookScore(e);
  return 1 + base + (expandedBonus && isExpanded(e) ? 0.6 : 0);
}
function hasSignalFor(arr: any[], profile: Record<string, number>): boolean {
  return arr.some(function (e) { return (hasProfileSignal(profile) ? profileScore(e, profile) : hookScore(e)) > 0; });
}

/* Titel-Buendel mit Cross-Theme-Kohaesion ziehen: Profil-Ueberlappung PLUS Bonus
   fuer Ueberlappung mit den Hooks bereits gewaehlter Themes (chosenHooks) =>
   die 4 Themes ziehen entlang eines gemeinsamen Fadens (ein Charakter). */
export function pickTitleCohesive(titles: any[], profile: Record<string, number>, chosenHooks: Record<string, number>): any {
  var hasCohesion = Object.keys(chosenHooks).length > 0;
  if (!hasSignalFor(titles, profile) && !hasCohesion) return titles[Math.floor(Math.random() * titles.length)];
  var weights = titles.map(function (t) {
    var hs = tagHooks(t), coh = 0;
    for (var i = 0; i < hs.length; i++) { coh += chosenHooks[hs[i]] || 0; }
    return 1 + CFG.PROFILE_WEIGHT * profileScore(t, profile) + CFG.COHESION_WEIGHT * coh;
  });
  return titles[weightedPickIndex(weights)];
}
// Tag-Auswahl: ohne Signal exakt wie bisher (Expanded-Preference), sonst profil-geschaerft.
export function pickWithSwipeBias(arr: any[], n: number): any[] {
  var profile = characterProfile();
  if (!hasSignalFor(arr, profile)) return pickWithExpansionPreference(arr, n);
  var pool = arr.slice(), out: any[] = [], target = Math.min(n, pool.length);
  while (out.length < target && pool.length > 0) {
    var weights = pool.map(function (e) { return biasWeight(e, profile, true); });
    var idx = weightedPickIndex(weights);
    var e = pool.splice(idx, 1)[0];
    out.push({ text: tagText(e), expanded: isExpanded(e), hooks: tagHooks(e) });
  }
  return out;
}
// Quest-Auswahl analog (Quests sind Objekte {title,description,expanded?,hooks?})
export function pickQuestWithBias(pool: any[]): any {
  var profile = characterProfile();
  if (!hasSignalFor(pool, profile)) return pickQuestWithExp(pool);
  var weights = pool.map(function (q) { return biasWeight(q, profile, !!q.expanded); });
  return pool[weightedPickIndex(weights)];
}
// Einzelnes Element hook-gewichtet ziehen
export function pickOneWithBias(arr: any[]): any {
  var hasSignal = arr.some(function (e) { return hookScore(e) > 0; });
  if (!hasSignal) return arr[Math.floor(Math.random() * arr.length)];
  var weights = arr.map(function (e) { return 1 + 2.5 * hookScore(e); });
  return arr[weightedPickIndex(weights)];
}
// Titel-Buendel ziehen (ganzes Buendel = Anker), profil-geschaerft. Ohne Kohaesions-
// Kontext (z. B. Welcome-Preview, Einzel-Re-Roll). Mit Kontext: pickTitleCohesive.
export function pickTitleWithBias(titles: any[]): any {
  var profile = characterProfile();
  if (!hasSignalFor(titles, profile)) return titles[Math.floor(Math.random() * titles.length)];
  var weights = titles.map(function (t) { return biasWeight(t, profile, false); });
  return titles[weightedPickIndex(weights)];
}
