#!/usr/bin/env node
// Mechanisches Gate für die Tag-Definition — titel-verankerte Form.
// Regeln/Struktur kommen aus der EINZIGEN Quelle src/data/criteria.js (FORM_RULES/STRUCTURE);
// menschliche Doku: TAGS.md. THEMEBOOKS[name] = { type, titles: [ {text, hooks, powerTags[], weaknessTags[], quests[]} ] }
// Prüft je Bündel: Phrasenform (max Wörter, kein Komma, kein Satzende), Bündelstruktur,
// keine Dopplung, Quests (Titel+Beschreibung). Zusätzlich: jeder Themebook hat einen
// Kriterien-Eintrag (Daten <-> criteria gekoppelt). Exit 1 bei Verstößen (pre-commit + CI).
const path = require('path');
const { pathToFileURL } = require('url');

const errors = [];
let RULES, STRUCT;
const txt = (e) => (((e && e.text) || e || '') + '').trim();
function checkPhrase(t, where) {
  if (!t) { errors.push(where + ' — leer'); return; }
  if (t.split(/\s+/).length > RULES.maxWords) errors.push(where + ' "' + t + '" — > ' + RULES.maxWords + ' Wörter');
  if (RULES.forbidComma && t.includes(',')) errors.push(where + ' "' + t + '" — Komma');
  if (RULES.forbidSentenceEnd && /[.!?]$/.test(t)) errors.push(where + ' "' + t + '" — Satzzeichen am Ende');
}

(async () => {
const imp = (rel) => import(pathToFileURL(path.join(__dirname, '..', 'src', 'data', rel)).href);
const { THEMEBOOKS } = await imp('themebooks.js');
const { FORM_RULES, STRUCTURE, THEMEBOOK_QUESTIONS } = await imp('criteria.js');
RULES = FORM_RULES; STRUCT = STRUCTURE;

Object.keys(THEMEBOOKS).forEach((name) => {
  // Daten <-> Kriterien koppeln: jeder Themebook braucht offizielle Fragen.
  if (!THEMEBOOK_QUESTIONS[name]) errors.push(name + ' — kein criteria-Eintrag (THEMEBOOK_QUESTIONS)');
  const titles = THEMEBOOKS[name].titles;
  if (!Array.isArray(titles)) { errors.push(name + ' — kein titles-Array'); return; }
  if (titles.length !== STRUCT.titlesPerBook) errors.push(name + ' — ' + titles.length + ' Titel (erwartet ' + STRUCT.titlesPerBook + ')');
  titles.forEach((T, i) => {
    const w = name + '/Titel#' + i;
    checkPhrase(txt(T), w + ' titel');
    if (!Array.isArray(T.powerTags) || T.powerTags.length < STRUCT.minPowerTags) errors.push(w + ' — <' + STRUCT.minPowerTags + ' powerTags');
    if (!Array.isArray(T.weaknessTags) || T.weaknessTags.length < STRUCT.minWeaknessTags) errors.push(w + ' — <' + STRUCT.minWeaknessTags + ' weaknessTags');
    if (!Array.isArray(T.quests) || T.quests.length < STRUCT.minQuests) errors.push(w + ' — <' + STRUCT.minQuests + ' quests');
    const seen = new Set();
    (T.powerTags || []).concat(T.weaknessTags || []).forEach((t) => {
      const s = txt(t);
      checkPhrase(s, w + ' tag');
      const key = s.toLowerCase();
      if (seen.has(key)) errors.push(w + ' — Dopplung "' + s + '"');
      seen.add(key);
    });
    (T.quests || []).forEach((q) => {
      // Quests sind KEINE Tags: Titel ist ein Ich-Ziel-Satz (etablierte Form), keine Phrasenregel.
      if (!q.title || !q.title.trim()) errors.push(w + ' — Quest ohne Titel');
      if (!q.description || !q.description.trim()) errors.push(w + ' — Quest ohne Beschreibung');
    });
  });
});

if (errors.length) {
  console.error('Tag-Validierung FEHLGESCHLAGEN (' + errors.length + ' Verstöße gegen TAGS.md / criteria.js):');
  errors.slice(0, 60).forEach((e) => console.error('  ' + e));
  process.exit(1);
}
console.log('Tag-Validierung OK — Form + Struktur (criteria.js) erfüllt, alle Themebooks kriterien-gekoppelt.');
})().catch((e) => { console.error(e); process.exit(1); });
