/* =====================================================
   Theme- & Tag-Katalog -> Markdown-Uebersicht zum Review.
   Liest src/data/themebooks.js und schreibt THEME-TAG-REVIEW.md ins Repo-Root.
   Umfang dieser Runde: nur Tags (Titel, Power, Weakness) — Quests/Hooks/Leitfragen
   bewusst weggelassen. Regenerieren: npm run catalog:export
===================================================== */
import { THEMEBOOKS } from '../src/data/themebooks.js';
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'THEME-TAG-REVIEW.md');
const DESC_PATH = join(__dirname, 'tag-descriptions.json');

// Optionale Tag-Beschreibungen (aus tools/describe_tags.mjs). Map: id -> {description, example}
let DESC = {};
if (existsSync(DESC_PATH)) {
  try { DESC = JSON.parse(readFileSync(DESC_PATH, 'utf8')); } catch (_) { DESC = {}; }
}
const hasDesc = Object.keys(DESC).length > 0;

// Reihenfolge nach Might-Tier
const TIER_ORDER = ['Origin', 'Adventure', 'Greatness', 'Variable Might'];
const slug = (name) => name.replace(/\s+/g, '-');
const tagText = (t) => (t && typeof t === 'object' ? t.text : String(t));

const names = Object.keys(THEMEBOOKS).sort((a, b) => {
  const ta = TIER_ORDER.indexOf(THEMEBOOKS[a].type);
  const tb = TIER_ORDER.indexOf(THEMEBOOKS[b].type);
  if (ta !== tb) return ta - tb;
  return 0; // Tier-interne Reihenfolge wie im Katalog
});

let out = '';
out += '# Theme- & Tag-Übersicht zum Review\n\n';
out += 'Vollständige Übersicht aller **Tags**, die der Generator ausgeben kann. Quelle: `src/data/themebooks.js`.\n';
out += 'Alles, was im Spiel erscheint, wird aus diesem Katalog gezogen — diese Liste deckt also jede mögliche Ausgabe ab.\n\n';
out += '**Umfang dieser Runde:** nur Titel, Power-Tags und Weakness-Tags. Quests, Hooks und Core-Book-Leitfragen sind bewusst ausgelassen.\n\n';
out += '**ID-Schema:** `Themebook/T<Titel>/P<Power>` bzw. `/W<Weakness>` — z.B. `Circumstance/T1/P3`. ';
out += 'Themebooks mit Leerzeichen nutzen Bindestriche in der ID (z.B. `Skill-or-Trade/T2/W1`).\n\n';
out += '**So gibst du Feedback:** Nenne einfach die ID und deinen Kommentar (z.B. „`People/T4/P2` zu generisch"). ';
out += 'Ich leite aus deinem Feedback allgemeingültige Regeln ab und wende sie auf alle Themebooks an.\n\n';
if (hasDesc) {
  out += '**Zu jedem Tag:** eine kurze Beschreibung und ein Beispiel — _Power:_ bei welcher Aktion der Tag **hilft**, ';
  out += '_Weakness:_ bei welcher Aktion er **hindert**. Diese Texte sind eine **generierte Interpretation** ';
  out += '(via `npm run tags:describe`), keine offizielle Quelle — genau dazu dein Korrektur-Feedback.\n\n';
}
out += '_Generiert mit `npm run catalog:export` — nicht von Hand editieren._\n\n';

// Zähl-Tabelle
out += '## Übersicht\n\n';
out += '| Themebook | Tier | Titel | Power | Weakness |\n|---|---|--:|--:|--:|\n';
let totT = 0, totP = 0, totW = 0;
for (const name of names) {
  const tb = THEMEBOOKS[name];
  let p = 0, w = 0;
  tb.titles.forEach((T) => { p += (T.powerTags || []).length; w += (T.weaknessTags || []).length; });
  totT += tb.titles.length; totP += p; totW += w;
  out += `| ${name} | ${tb.type} | ${tb.titles.length} | ${p} | ${w} |\n`;
}
out += `| **Summe** | | **${totT}** | **${totP}** | **${totW}** |\n\n`;

// Detail je Themebook
let lastTier = null;
for (const name of names) {
  const tb = THEMEBOOKS[name];
  if (tb.type !== lastTier) { out += `\n---\n\n# Tier: ${tb.type}\n`; lastTier = tb.type; }
  const sl = slug(name);
  out += `\n## ${name} — ${tb.type}\n`;
  out += `ID-Präfix: \`${sl}\`\n\n`;
  tb.titles.forEach((T, ti) => {
    const id = `${sl}/T${ti + 1}`;
    out += `### ${id} — „${tagText(T)}"\n`;
    if (hasDesc) {
      // Ausführliches Listenformat: pro Tag Beschreibung + Beispiel.
      const renderList = (tags, letter, hint) => {
        if (!tags || !tags.length) return '—\n';
        return tags.map((t, j) => {
          const tid = `${id}/${letter}${j + 1}`;
          const d = DESC[tid];
          let line = `- \`${tid}\` **${tagText(t)}**`;
          if (d && d.description) line += ` — ${d.description}`;
          if (d && d.example) line += ` _${hint}:_ ${d.example}`;
          return line;
        }).join('\n') + '\n';
      };
      out += `**Power:**\n${renderList(T.powerTags, 'P', 'Hilft z.B.')}\n`;
      out += `**Weakness:**\n${renderList(T.weaknessTags, 'W', 'Hindert z.B.')}\n`;
    } else {
      // Kompaktes Fallback-Format (ohne Beschreibungs-Cache).
      const pow = (T.powerTags || []).map((t, j) => `\`${id}/P${j + 1}\` ${tagText(t)}`).join(' · ');
      const wk = (T.weaknessTags || []).map((t, j) => `\`${id}/W${j + 1}\` ${tagText(t)}`).join(' · ');
      out += `**Power:** ${pow || '—'}\n\n`;
      out += `**Weakness:** ${wk || '—'}\n\n`;
    }
  });
}

writeFileSync(OUT, out, 'utf8');
console.log(`Katalog geschrieben: ${OUT}`);
console.log(`Themebooks: ${names.length} · Titel: ${totT} · Power: ${totP} · Weakness: ${totW}`);
