#!/usr/bin/env node
// Mechanisches Gate für die Tag-Definition (siehe TAGS.md) — titel-verankerte Form.
// THEMEBOOKS[name] = { type, titles: [ {text, hooks, powerTags[], weaknessTags[], quests[]} ] }
// Prüft je Bündel:
//   - jeder Tag/Titel: max. 5 Wörter, kein Komma, kein satzbeendendes Zeichen, nicht leer
//   - Struktur: 12 Titel, je >=4 powerTags, >=2 weaknessTags, >=2 quests
//   - keine Dopplung innerhalb eines Bündels (power + weakness)
//   - Quest: title als Phrase, description vorhanden
// Exit 1 bei Verstößen → blockiert Commit (pre-commit) und CI.
const path = require('path');
const { pathToFileURL } = require('url');

const MAX_WORDS = 5;
const errors = [];
const txt = (e) => (((e && e.text) || e || '') + '').trim();
function checkPhrase(t, where) {
  if (!t) { errors.push(where + ' — leer'); return; }
  if (t.split(/\s+/).length > MAX_WORDS) errors.push(where + ' "' + t + '" — > ' + MAX_WORDS + ' Wörter');
  if (t.includes(',')) errors.push(where + ' "' + t + '" — Komma');
  if (/[.!?]$/.test(t)) errors.push(where + ' "' + t + '" — Satzzeichen am Ende');
}

(async () => {
const dataUrl = pathToFileURL(path.join(__dirname, '..', 'src', 'data', 'themebooks.js')).href;
const { THEMEBOOKS } = await import(dataUrl);

Object.keys(THEMEBOOKS).forEach((name) => {
  const titles = THEMEBOOKS[name].titles;
  if (!Array.isArray(titles)) { errors.push(name + ' — kein titles-Array'); return; }
  if (titles.length !== 12) errors.push(name + ' — ' + titles.length + ' Titel (erwartet 12)');
  titles.forEach((T, i) => {
    const w = name + '/Titel#' + i;
    checkPhrase(txt(T), w + ' titel');
    if (!Array.isArray(T.powerTags) || T.powerTags.length < 4) errors.push(w + ' — <4 powerTags');
    if (!Array.isArray(T.weaknessTags) || T.weaknessTags.length < 2) errors.push(w + ' — <2 weaknessTags');
    if (!Array.isArray(T.quests) || T.quests.length < 2) errors.push(w + ' — <2 quests');
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
  console.error('Tag-Validierung FEHLGESCHLAGEN (' + errors.length + ' Verstöße gegen TAGS.md):');
  errors.slice(0, 60).forEach((e) => console.error('  ' + e));
  process.exit(1);
}
console.log('Tag-Validierung OK — alle Titel-Bündel erfüllen TAGS.md.');
})().catch((e) => { console.error(e); process.exit(1); });
