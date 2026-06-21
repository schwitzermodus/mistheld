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
// Tag-Auswahl: ohne Hook-Signal exakt wie bisher (Expanded-Preference), sonst hook-gewichtet
export function pickWithSwipeBias(arr: any[], n: number): any[] {
  var hasSignal = arr.some(function (e) { return hookScore(e) > 0; });
  if (!hasSignal) return pickWithExpansionPreference(arr, n);
  var pool = arr.slice(), out: any[] = [], target = Math.min(n, pool.length);
  while (out.length < target && pool.length > 0) {
    var weights = pool.map(function (e) { return 1 + 2.5 * hookScore(e) + (isExpanded(e) ? 0.6 : 0); });
    var idx = weightedPickIndex(weights);
    var e = pool.splice(idx, 1)[0];
    out.push({ text: tagText(e), expanded: isExpanded(e), hooks: tagHooks(e) });
  }
  return out;
}
// Quest-Auswahl analog (Quests sind Objekte {title,description,expanded?,hooks?})
export function pickQuestWithBias(pool: any[]): any {
  var hasSignal = pool.some(function (q) { return hookScore(q) > 0; });
  if (!hasSignal) return pickQuestWithExp(pool);
  var weights = pool.map(function (q) { return 1 + 2.5 * hookScore(q) + (q.expanded ? 0.6 : 0); });
  return pool[weightedPickIndex(weights)];
}
// Einzelnes Element hook-gewichtet ziehen
export function pickOneWithBias(arr: any[]): any {
  var hasSignal = arr.some(function (e) { return hookScore(e) > 0; });
  if (!hasSignal) return arr[Math.floor(Math.random() * arr.length)];
  var weights = arr.map(function (e) { return 1 + 2.5 * hookScore(e); });
  return arr[weightedPickIndex(weights)];
}
// Titel-Buendel hook-gewichtet ziehen (gibt das ganze Buendel zurueck = Anker).
export function pickTitleWithBias(titles: any[]): any {
  var hasSignal = titles.some(function (t) { return hookScore(t) > 0; });
  if (!hasSignal) return titles[Math.floor(Math.random() * titles.length)];
  var weights = titles.map(function (t) { return 1 + 2.5 * hookScore(t); });
  return titles[weightedPickIndex(weights)];
}
