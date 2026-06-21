#!/usr/bin/env node
/* =====================================================
   LLM-Judge (manuell): bewertet Tags/Quests gegen die offiziellen LitM-Kriterien
   (src/data/criteria.js) — Relevanz/Nützlichkeit, beantwortete Frage, Might-Passung,
   Theme-interne Diversität. Schreibt einen DEUTSCHEN, prägnanten Report.

   NICHT in CI. Aufruf:
     npm run judge:tags                       # alle Themebooks
     npm run judge:tags -- --themebook=People # ein Themebook
     npm run judge:tags -- --limit=3          # nur N Titel-Bündel
     npm run judge:tags -- --dry-run          # Prompts zeigen, ohne API-Aufruf

   API-Key (konfigurierbar + abfragend, in dieser Reihenfolge):
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
const REPORT_MD = path.join(ROOT, 'tag-quality-report.md');
const REPORT_JSON = path.join(ROOT, 'tag-quality-report.json');
const MODEL = 'claude-opus-4-8';

// ---- CLI-Flags ----
function parseArgs(argv) {
  const out = { dryRun: false, themebook: null, limit: Infinity, model: MODEL };
  for (const a of argv) {
    if (a === '--dry-run') out.dryRun = true;
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

function buildPrompt(themebook, tier, q, bundle) {
  const lines = [];
  lines.push(`THEMEBOOK: ${themebook}  (Might-Stufe: ${tier})`);
  lines.push(`Theme-Leitfragen: ${(q.themeQuestions || []).join(' | ')}`);
  lines.push('Power Tag Questions (offiziell):');
  Object.keys(q.power).forEach((k) => lines.push(`  ${k}: ${q.power[k]}`));
  lines.push('Weakness Tag Questions (offiziell):');
  Object.keys(q.weakness).forEach((k) => lines.push(`  ${k}: ${q.weakness[k]}`));
  lines.push('');
  lines.push('ZU BEWERTENDES TITEL-BÜNDEL:');
  lines.push(`  Titel (= erster Power Tag): ${bundle.text}`);
  lines.push(`  Power Tags: ${bundle.powerTags.map((t) => t.text).join(' | ')}`);
  lines.push(`  Weakness Tags: ${bundle.weaknessTags.map((t) => t.text).join(' | ')}`);
  lines.push(`  Quests: ${bundle.quests.map((x) => x.title).join(' | ')}`);
  return lines.join('\n');
}

const SYSTEM = [
  'Du bist ein strenger Prüfer für das TTRPG "Legend in the Mist".',
  'Bewerte jeden Tag/Quest gegen die offiziellen Kriterien:',
  '- Power Tag: nützlich? Welche offizielle Power-Frage (A–J) beantwortet er? Unterstützt er hilfreiche Aktionen im Spiel?',
  '- Weakness Tag: einschränkend? Welche Weakness-Frage (A–D)? Wie behindert er / verursacht Probleme?',
  '- Quest: klares Ich-Ziel mit möglichem Milestone und erkennbarem "Aufgeben"?',
  '- Passt der Tag zur Might-Stufe? Wiederholen sich Tags inhaltlich (Diversität)?',
  'Antworte AUSSCHLIESSLICH knapp auf DEUTSCH, stichwortartig (Grammatik nachrangig).',
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
          kind: { type: 'string', enum: ['title', 'power', 'weakness', 'quest'] },
          text: { type: 'string' },
          answers: { type: 'string', description: 'Buchstabe der beantworteten Frage (A–J / A–D) oder "—"' },
          useful: { type: 'integer', description: 'Nützlichkeit/Relevanz 1 (schwach) bis 5 (stark)' },
          mightFit: { type: 'boolean' },
          verdict: { type: 'string', enum: ['keep', 'revise'] },
          reason: { type: 'string', description: 'knappe deutsche Begründung' },
          suggestion: { type: 'string', description: 'knapper deutscher Verbesserungsvorschlag, sonst leer' },
        },
        required: ['kind', 'text', 'answers', 'useful', 'mightFit', 'verdict', 'reason', 'suggestion'],
      },
    },
    diversity: { type: 'string', description: 'knapp: häufen sich Tags auf derselben Frage? sonst leer' },
  },
  required: ['items', 'diversity'],
};

(async () => {
  const args = parseArgs(process.argv.slice(2));
  const { THEMEBOOKS } = await imp('themebooks.js');
  const { THEMEBOOK_QUESTIONS, MIGHT_GUIDANCE } = await imp('criteria.js');

  // Bündel-Arbeitsliste aufbauen
  const work = [];
  Object.keys(THEMEBOOKS).forEach((name) => {
    if (args.themebook && name !== args.themebook) return;
    const tier = THEMEBOOKS[name].type;
    (THEMEBOOKS[name].titles || []).forEach((bundle, i) => {
      work.push({ name, tier, index: i, bundle });
    });
  });
  const todo = work.slice(0, args.limit);
  console.log(`Bündel zu prüfen: ${todo.length}${args.themebook ? ' (Themebook ' + args.themebook + ')' : ''}${isFinite(args.limit) ? ' (limit ' + args.limit + ')' : ''}`);

  if (args.dryRun) {
    const w = todo[0];
    if (!w) { console.log('Nichts zu tun.'); return; }
    console.log('\n=== DRY-RUN: Beispiel-Prompt (erstes Bündel) ===\n');
    console.log('--- System ---\n' + SYSTEM);
    console.log('\n--- User ---\n' + buildPrompt(w.name, w.tier, THEMEBOOK_QUESTIONS[w.name], w.bundle));
    console.log('\n(API wird im Dry-Run NICHT aufgerufen.)');
    return;
  }

  const apiKey = await resolveApiKey();
  let Anthropic;
  try { Anthropic = (await import('@anthropic-ai/sdk')).default; }
  catch (e) { console.error('@anthropic-ai/sdk nicht installiert. `npm install` ausfuehren.'); process.exit(1); }
  const client = new Anthropic({ apiKey, maxRetries: 4 });

  const results = [];
  for (let i = 0; i < todo.length; i++) {
    const w = todo[i];
    const prompt = buildPrompt(w.name, w.tier, THEMEBOOK_QUESTIONS[w.name], w.bundle);
    process.stdout.write(`[${i + 1}/${todo.length}] ${w.name} #${w.index} … `);
    try {
      const resp = await client.messages.create({
        model: args.model,
        max_tokens: 4000,
        system: SYSTEM,
        output_config: { format: { type: 'json_schema', schema: SCHEMA }, effort: 'low' },
        messages: [{ role: 'user', content: prompt }],
      });
      if (resp.stop_reason === 'refusal') { console.log('refusal — übersprungen'); continue; }
      const textBlock = (resp.content || []).find((b) => b.type === 'text');
      const parsed = JSON.parse(textBlock.text);
      results.push({ themebook: w.name, tier: w.tier, index: w.index, title: w.bundle.text, ...parsed });
      const weak = (parsed.items || []).filter((it) => it.verdict === 'revise' || it.useful <= 2).length;
      console.log(`ok (${weak} schwach)`);
    } catch (err) {
      const status = err && err.status ? ' [' + err.status + ']' : '';
      console.log('FEHLER' + status + ': ' + (err && err.message ? err.message : err));
    }
  }

  // Report schreiben (Deutsch, prägnant) — schwächste zuerst
  const flat = [];
  results.forEach((r) => (r.items || []).forEach((it) => flat.push({ ...it, themebook: r.themebook, tier: r.tier, title: r.title })));
  flat.sort((a, b) => a.useful - b.useful);
  const weakList = flat.filter((it) => it.verdict === 'revise' || it.useful <= 2);

  const md = [];
  md.push('# Tag-Qualitätsreport (LLM-Judge)');
  md.push('');
  md.push(`Bündel geprüft: ${results.length} · Tags/Quests gesamt: ${flat.length} · überarbeiten/schwach: ${weakList.length}`);
  md.push('');
  md.push('## Schwächste zuerst (überarbeiten)');
  md.push('');
  weakList.forEach((it) => {
    md.push(`- **${it.themebook}** · ${it.kind} · „${it.text}" — Frage ${it.answers}, Nutzen ${it.useful}/5${it.mightFit ? '' : ', Might unpassend'}`);
    md.push(`  - Grund: ${it.reason}`);
    if (it.suggestion) md.push(`  - Vorschlag: ${it.suggestion}`);
  });
  md.push('');
  md.push('## Diversitäts-Hinweise je Bündel');
  results.forEach((r) => { if (r.diversity) md.push(`- ${r.themebook} #${r.index} („${r.title}"): ${r.diversity}`); });
  md.push('');
  fs.writeFileSync(REPORT_MD, md.join('\n'));
  fs.writeFileSync(REPORT_JSON, JSON.stringify({ results }, null, 2));
  console.log(`\nReport: ${REPORT_MD}\nJSON:   ${REPORT_JSON}`);
})().catch((e) => { console.error(e); process.exit(1); });
