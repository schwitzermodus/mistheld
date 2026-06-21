/* =====================================================
   Konflikt-Guard: vermeidet harte Identitaets-Widersprueche ZWISCHEN den
   4 Themes (innerhalb eines Themes ist Kohaerenz bereits strukturell garantiert).
   Bewusst kuratiert + hochpraezise (Substring-Match auf Tag-Texten), damit
   Falsch-Positive wie metaphorisch "blind durch Ehre" nicht ausgeloest werden.
   Hinweis: Die "mundane" Gegenseite (b) ist in den Daten oft nicht explizit
   getaggt — der eigentliche Schutz vor Identitaets-Dissonanz ist die Hook-
   Kohaesion (scoring.ts). Dieser Guard faengt die expliziten Faelle.
===================================================== */
export interface ConflictDomain { name: string; a: string[]; b: string[]; }

export const CONFLICT_DOMAINS: ConflictDomain[] = [
  {
    name: 'Wesensnatur', // Mensch <-> Nicht-Mensch/monstroes
    a: ['kein mensch', 'nicht menschlich', 'monströs', 'monstroes', 'ungeheuer', 'bestie', 'kreatur', 'unmensch', 'wechselbalg', 'unheimliches wesen', 'nicht von dieser welt'],
    b: ['gewöhnlicher mensch', 'gewoehnlicher mensch', 'ganz normaler mensch', 'einfacher mensch', 'bloß ein mensch', 'bloss ein mensch', 'sterblich und gewöhnlich'],
  },
  {
    name: 'Magie', // uebernatuerlich <-> ausdruecklich mundan/magielos
    a: ['magisch', 'zauber', 'verzaubert', 'übernatürlich', 'uebernatuerlich', 'arkan', 'hexerei', 'beschwört', 'beschwoert'],
    b: ['magielos', 'ohne magie', 'keine magie', 'magieblind', 'der magie abhold', 'nüchterne welt', 'nuechterne welt'],
  },
  {
    name: 'Sprache', // Stimme/Rede <-> Stummheit
    a: ['durchdringende stimme', 'redegewandt', 'wortgewaltig', 'beredt', 'mächtige wort', 'maechtige wort'],
    b: ['stumm', 'sprachlos', 'verstummt', 'kann nicht reden', 'kann nicht sprechen', 'wortlos'],
  },
  {
    name: 'Bindung', // ortsgebunden <-> rastlos/fahrend
    a: ['kann nicht fortgehen', 'ortsgebunden', 'an einen ort gebunden', 'tief verwurzelt'],
    b: ['rastlos', 'ewig unterwegs', 'nirgends zuhause', 'immer auf der straße', 'immer auf der strasse'],
  },
];

function themeTexts(t: any): string {
  var parts: string[] = [];
  if (t.titleTag && t.titleTag.text) parts.push(t.titleTag.text);
  (t.powerTags || []).forEach(function (p: any) { if (p && p.text) parts.push(p.text); });
  if (t.weaknessTag && t.weaknessTag.text) parts.push(t.weaknessTag.text);
  return parts.join(' · ').toLowerCase();
}
function any(hay: string, needles: string[]): boolean {
  for (var i = 0; i < needles.length; i++) { if (hay.indexOf(needles[i]) !== -1) return true; }
  return false;
}
function pairConflicts(xa: string, xb: string): boolean {
  for (var d = 0; d < CONFLICT_DOMAINS.length; d++) {
    var dom = CONFLICT_DOMAINS[d];
    if ((any(xa, dom.a) && any(xb, dom.b)) || (any(xa, dom.b) && any(xb, dom.a))) return true;
  }
  return false;
}

/** Index des spaeteren Themes, das mit einem frueheren kollidiert; sonst -1. */
export function findConflictIndex(themes: any[]): number {
  var texts = themes.map(themeTexts);
  for (var j = 1; j < themes.length; j++) {
    for (var i = 0; i < j; i++) {
      if (pairConflicts(texts[i], texts[j])) return j;
    }
  }
  return -1;
}
export function hasConflict(themes: any[]): boolean { return findConflictIndex(themes) !== -1; }
