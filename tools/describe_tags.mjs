#!/usr/bin/env node
/* =====================================================
   Tag-Beschreibungen (manuell, LLM): erzeugt pro Tag eine knappe deutsche
   Erklaerung + ein konkretes Spielbeispiel ("bei welcher Aktion waere dieser
   Tag hilfreich?" fuer Power, "... hinderlich?" fuer Weakness). Quelle der Tags:
   src/data/themebooks.js. Kontext-Anker: src/data/criteria.js. Dient nur dem
   Review (THEME-TAG-REVIEW.md), kein App-Code.

   Cache (resumierbar): tools/tag-descriptions.json  { "<id>": {kind,text,description,example} }
   Bereits gefuellte Buendel werden uebersprungen -> inkrementell, keine Doppelkosten.

   NICHT in CI. Aufruf:
     npm run tags:describe                          # alle Themebooks (Luecken)
     npm run tags:describe -- --themebook=Relic     # ein Themebook
     npm run tags:describe -- --limit=3             # nur N Buendel
     npm run tags:describe -- --force               # auch vorhandene neu erzeugen
     npm run tags:describe -- --dry-run             # Prompt zeigen, ohne API-Aufruf

   API-Key (in dieser Reihenfolge):
     1) ENV ANTHROPIC_API_KEY
     2) lokale, gitignorierte Datei tools/.judge-config.json  { "apiKey": "sk-..." }
     3) interaktive Eingabe beim Start (optional speicherbar)
===================================================== */
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const CONFIG_PATH = path.join(__dirname, '.judge-config.json');
const CACHE_PATH = path.join(__dirname, 'tag-descriptions.json');
const MODEL = 'claude-opus-4-8';

const slug = (name) => name.replace(/\s+/g, '-');

// ---- CLI-Flags ----
function parseArgs(argv) {
  const out = { dryRun: false, force: false, themebook: null, limit: Infinity, model: MODEL };
  for (const a of argv) {
    if (a === '--dry-run') out.dryRun = true;
    else if (a === '--force') out.force = true;
    else if (a.startsWith('--themebook=')) out.themebook = a.slice('--themebook='.length);
    else if (a.startsWith('--limit=')) out.limit = parseInt(a.slice('--limit='.length), 10) || Infinity;
    else if (a.startsWith('--model=')) out.model = a.slice('--model='.length);
  }
  return out;
}

function ask(question, { hide } = {}) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    if (hide) {
      const stdout = process.stdout;
      rl._writeToOutput = function (s) { if (s.includes(question)) stdout.write(s); else stdout.write('*'); };
    }
    rl.question(question, (ans) => { rl.close(); resolve(ans.trim()); });
  });
}

async function resolveApiKey() {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY;
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const cfg = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
      if (cfg.apiKey) return cfg.apiKey;
    }
  } catch (_) {}
  console.log('Kein ANTHROPIC_API_KEY in der Umgebung und keine tools/.judge-config.json gefunden.');
  const key = await ask('Anthropic API-Key eingeben (oder Enter zum Abbruch): ', { hide: true });
  process.stdout.write('\n');
  if (!key) { console.error('Kein Key — abgebrochen.'); process.exit(1); }
  const save = (await ask('Key lokal in tools/.judge-config.json speichern? (j/N): ')).toLowerCase();
  if (save === 'j' || save === 'y') {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify({ apiKey: key }, null, 2));
    console.log('Gespeichert (gitignored).');
  }
  return key;
}

const imp = (rel) => import(pathToFileURL(path.join(ROOT, 'src', 'data', rel)).href);

function loadCache() {
  try { if (fs.existsSync(CACHE_PATH)) return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8')); } catch (_) {}
  return {};
}
function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

// Tag-Liste eines Buendels mit IDs (gleiche IDs wie export_catalog.mjs)
function bundleTags(name, ti, bundle) {
  const id = `${slug(name)}/T${ti + 1}`;
  const tags = [];
  (bundle.powerTags || []).forEach((t, j) => tags.push({ id: `${id}/P${j + 1}`, kind: 'power', text: t.text }));
  (bundle.weaknessTags || []).forEach((t, j) => tags.push({ id: `${id}/W${j + 1}`, kind: 'weakness', text: t.text }));
  return tags;
}

function buildPrompt(name, tier, mightDesc, q, ti, bundle, tags) {
  const lines = [];
  lines.push(`THEMEBOOK: ${name}  (Might-Stufe: ${tier} — ${mightDesc})`);
  lines.push(`Titel des Buendels: „${bundle.text}"`);
  lines.push('');
  if (q) {
    lines.push('Zur inneren Orientierung (offizielle Core-Book-Leitfragen, NICHT ausgeben):');
    if (q.themeQuestions) lines.push('  Theme: ' + q.themeQuestions.join(' | '));
    if (q.power) lines.push('  Power-Fragen: ' + Object.entries(q.power).map(([k, v]) => `${k}) ${v}`).join('  '));
    if (q.weakness) lines.push('  Weakness-Fragen: ' + Object.entries(q.weakness).map(([k, v]) => `${k}) ${v}`).join('  '));
    lines.push('');
  }
  lines.push('ZU BESCHREIBENDE TAGS (gib zu JEDER id genau einen Eintrag mit unveraenderter id zurueck):');
  tags.forEach((t) => lines.push(`  id=${t.id} | ${t.kind} | „${t.text}"`));
  return lines.join('\n');
}

const SYSTEM = [
  'Du bist Spielleiter-Assistent fuer das TTRPG „Legend in the Mist" (deutsche Ausgabe „Legenden des Nebels").',
  'Aufgabe: Zu jedem vorgegebenen Tag lieferst du zwei kurze deutsche Texte.',
  '',
  '1) description — EIN knapper Satz, der den Tag konkreter fasst als seine 1–5 Woerter:',
  '   Was bedeutet dieser Aspekt im Kontext des Titels und des Themes? Erklaerend, nicht bloss umformuliert.',
  '2) example — EIN konkretes Spielbeispiel:',
  '   - Power-Tag: eine konkrete Aktion oder Situation, in der dieser Tag HILFT.',
  '     (Antwort auf: „Bei welcher Aktion waere dieser Tag hilfreich?")',
  '   - Weakness-Tag: eine konkrete Aktion oder Situation, in der dieser Tag HINDERT oder Probleme macht.',
  '     (Antwort auf: „Bei welcher Aktion waere dieser Tag hinderlich?")',
  '',
  'Stil: konkret und bildhaft, aber knapp (je ca. ein Satz). Durchgehend Deutsch.',
  'Passe Tonlage und Groessenordnung an die Might-Stufe an (gewoehnlich / bemerkenswert / legendaer).',
  'Gib zu JEDER vorgegebenen id genau einen Eintrag zurueck, die id exakt unveraendert.',
].join('\n');

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: { type: 'string', description: 'unveraenderte id wie vorgegeben' },
          kind: { type: 'string', enum: ['power', 'weakness'] },
          text: { type: 'string', description: 'Tag-Text wie vorgegeben' },
          description: { type: 'string', description: 'ein knapper erklaerender deutscher Satz' },
          example: { type: 'string', description: 'ein konkretes deutsches Spielbeispiel (Power: hilft / Weakness: hindert)' },
        },
        required: ['id', 'kind', 'text', 'description', 'example'],
      },
    },
  },
  required: ['items'],
};

(async () => {
  const args = parseArgs(process.argv.slice(2));
  const { THEMEBOOKS } = await imp('themebooks.js');
  const { THEMEBOOK_QUESTIONS, MIGHT_GUIDANCE } = await imp('criteria.js');

  // Arbeitsliste (Buendel) aufbauen
  const work = [];
  Object.keys(THEMEBOOKS).forEach((name) => {
    if (args.themebook && name !== args.themebook) return;
    const tier = THEMEBOOKS[name].type;
    (THEMEBOOKS[name].titles || []).forEach((bundle, ti) => work.push({ name, tier, ti, bundle }));
  });

  const cache = loadCache();
  // Buendel ueberspringen, deren Tags bereits vollstaendig im Cache sind (ausser --force)
  const todoAll = work.filter((w) => {
    if (args.force) return true;
    const tags = bundleTags(w.name, w.ti, w.bundle);
    return tags.some((t) => !cache[t.id]);
  });
  const todo = todoAll.slice(0, args.limit);

  const mightDesc = (tier) => (MIGHT_GUIDANCE[tier] ? MIGHT_GUIDANCE[tier].desc : tier);
  console.log(`Buendel zu beschreiben: ${todo.length} (gesamt offen: ${todoAll.length}, im Cache: ${Object.keys(cache).length} Tags)`);

  if (args.dryRun) {
    const w = todo[0] || work[0];
    if (!w) { console.log('Nichts zu tun.'); return; }
    const tags = bundleTags(w.name, w.ti, w.bundle);
    console.log('\n=== DRY-RUN: Beispiel-Prompt (erstes Buendel) ===\n');
    console.log('--- System ---\n' + SYSTEM);
    console.log('\n--- User ---\n' + buildPrompt(w.name, w.tier, mightDesc(w.tier), THEMEBOOK_QUESTIONS[w.name], w.ti, w.bundle, tags));
    console.log('\n(API wird im Dry-Run NICHT aufgerufen.)');
    return;
  }

  if (!todo.length) { console.log('Alles bereits im Cache — nichts zu tun (oder --force nutzen).'); return; }

  const apiKey = await resolveApiKey();
  let Anthropic;
  try { Anthropic = (await import('@anthropic-ai/sdk')).default; }
  catch (e) { console.error('@anthropic-ai/sdk nicht installiert. `npm install` ausfuehren.'); process.exit(1); }
  const client = new Anthropic({ apiKey, maxRetries: 4 });

  let okTags = 0, fail = 0;
  for (let i = 0; i < todo.length; i++) {
    const w = todo[i];
    const tags = bundleTags(w.name, w.ti, w.bundle);
    const byId = Object.fromEntries(tags.map((t) => [t.id, t]));
    const prompt = buildPrompt(w.name, w.tier, mightDesc(w.tier), THEMEBOOK_QUESTIONS[w.name], w.ti, w.bundle, tags);
    process.stdout.write(`[${i + 1}/${todo.length}] ${w.name} T${w.ti + 1} „${w.bundle.text}" … `);
    try {
      const resp = await client.messages.create({
        model: args.model,
        max_tokens: 4000,
        system: SYSTEM,
        output_config: { format: { type: 'json_schema', schema: SCHEMA }, effort: 'low' },
        messages: [{ role: 'user', content: prompt }],
      });
      if (resp.stop_reason === 'refusal') { console.log('refusal — uebersprungen'); fail++; continue; }
      const textBlock = (resp.content || []).find((b) => b.type === 'text');
      const parsed = JSON.parse(textBlock.text);
      let n = 0;
      (parsed.items || []).forEach((it) => {
        const ref = byId[it.id];
        if (!ref) return; // id nicht im Buendel -> ignorieren
        cache[it.id] = { kind: ref.kind, text: ref.text, description: it.description, example: it.example };
        n++;
      });
      saveCache(cache); // pro Buendel sofort sichern (abbruchrobust)
      okTags += n;
      const missing = tags.filter((t) => !cache[t.id]).length;
      console.log(`ok (${n} Tags${missing ? ', ' + missing + ' fehlen' : ''})`);
    } catch (err) {
      const status = err && err.status ? ' [' + err.status + ']' : '';
      console.log('FEHLER' + status + ': ' + (err && err.message ? err.message : err));
      fail++;
    }
  }

  console.log(`\nFertig. Neue/aktualisierte Tags: ${okTags} · Fehler-Buendel: ${fail}`);
  console.log(`Cache: ${CACHE_PATH} (${Object.keys(cache).length} Tags gesamt)`);
  console.log('Naechster Schritt: npm run catalog:export');
})().catch((e) => { console.error(e); process.exit(1); });
