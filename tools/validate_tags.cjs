#!/usr/bin/env node
// Mechanisches Gate für die Tag-Definition (siehe TAGS.md).
// Prüft ALLE Power/Weakness Tags + Titel-Vorschläge in data.js:
//   - max. 5 Wörter (bevorzugt 1–3) — nie ein ganzer Satz
//   - kein Komma (kein Komma-Nebensatz)
//   - kein satzbeendendes Zeichen (. ! ?)
//   - nicht leer, keine Dopplung innerhalb eines Pools
// Quests sind keine Tags und werden nicht geprüft.
// Exit 1 bei Verstößen → blockiert Commit (pre-commit) und CI.
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
const src = fs.readFileSync(dataPath, 'utf8');
const { THEMEBOOKS } = new Function(src + '\nreturn { THEMEBOOKS };')();

const POOLS = ['titleTagSuggestions', 'powerTagPool', 'weaknessTagPool'];
const MAX_WORDS = 5;
const errors = [];

Object.keys(THEMEBOOKS).forEach((name) => {
  POOLS.forEach((pool) => {
    const seen = new Set();
    (THEMEBOOKS[name][pool] || []).forEach((e) => {
      const t = ((e && e.text) || e || '').trim();
      const where = name + '/' + pool + ': "' + t + '"';
      if (!t) { errors.push(where + ' — leerer Tag'); return; }
      const words = t.split(/\s+/).length;
      if (words > MAX_WORDS) errors.push(where + ' — ' + words + ' Wörter (max ' + MAX_WORDS + ')');
      if (t.includes(',')) errors.push(where + ' — Komma (kein Komma-Nebensatz)');
      if (/[.!?]$/.test(t)) errors.push(where + ' — Satzzeichen am Ende (kein ganzer Satz)');
      const key = t.toLowerCase();
      if (seen.has(key)) errors.push(where + ' — Dopplung im Pool');
      seen.add(key);
    });
  });
});

if (errors.length) {
  console.error('Tag-Validierung FEHLGESCHLAGEN (' + errors.length + ' Verstöße gegen TAGS.md):');
  errors.forEach((e) => console.error('  ' + e));
  process.exit(1);
}
console.log('Tag-Validierung OK — alle Tags erfüllen TAGS.md.');
