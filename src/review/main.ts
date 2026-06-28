/* =====================================================
   Tag-Review-Backoffice (dev-only). Geht Titel-Buendel der Reihe nach durch;
   pro Power-/Weakness-Tag Daumen-Feedback (runter/hoch/doppel) + optionaler Freitext.
   Persistenz ueber /api/tag-feedback (Vite-Dev-Middleware -> tools/tag-feedback.json).
   Nur Buendel mit vollstaendigen Beschreibungen (tools/tag-descriptions.json) sind reviewbar.
===================================================== */
import { THEMEBOOKS } from '../data/themebooks.js';
import { displayMight, displayThemebook } from '../i18n/strings.js';
import DESC from '../../tools/tag-descriptions.json';

const slug = (name: string) => name.replace(/\s+/g, '-');
const descMap: any = DESC;

type Vote = 'down' | 'up' | 'double';
interface TagItem { id: string; kind: 'power' | 'weakness'; text: string; description?: string; example?: string; }
interface Bundle { id: string; themebook: string; tier: string; title: string; tags: TagItem[]; ready: boolean; }

// ---- Buendel-Liste in Themebook-/Datei-Reihenfolge ----
const allBundles: Bundle[] = [];
Object.keys(THEMEBOOKS).forEach((name) => {
  const tb: any = (THEMEBOOKS as any)[name];
  (tb.titles || []).forEach((t: any, ti: number) => {
    const bid = `${slug(name)}/T${ti + 1}`;
    const tags: TagItem[] = [];
    (t.powerTags || []).forEach((tag: any, j: number) => {
      const id = `${bid}/P${j + 1}`; const d = descMap[id] || {};
      tags.push({ id, kind: 'power', text: tag.text, description: d.description, example: d.example });
    });
    (t.weaknessTags || []).forEach((tag: any, j: number) => {
      const id = `${bid}/W${j + 1}`; const d = descMap[id] || {};
      tags.push({ id, kind: 'weakness', text: tag.text, description: d.description, example: d.example });
    });
    const ready = tags.length > 0 && tags.every((x) => !!x.description);
    allBundles.push({ id: bid, themebook: name, tier: tb.type, title: t.text, tags, ready });
  });
});
const bundles = allBundles.filter((b) => b.ready);
const notReadyThemes = Object.keys(THEMEBOOKS).filter((name) =>
  !allBundles.some((b) => b.themebook === name && b.ready)).length;

// ---- Feedback-Zustand ----
let feedback: any = {};
let current = 0;
let saveTimer: any = null;

const $ = (id: string) => document.getElementById(id) as any;
const tierClass = (tier: string) => 'tier-' + String(tier).toLowerCase().split(' ')[0];

async function loadFeedback() {
  try {
    const r = await fetch('/api/tag-feedback');
    feedback = await r.json();
  } catch (_) { feedback = {}; }
  if (!feedback || typeof feedback !== 'object') feedback = {};
  if (!Array.isArray(feedback._done)) feedback._done = [];
}

function saveFeedback() {
  flashSaving();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    fetch('/api/tag-feedback', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    }).then(() => flashSaved()).catch(() => {});
  }, 350);
}
function flashSaving() { const el = $('saved'); el.textContent = 'speichere …'; el.classList.add('show'); }
function flashSaved() { const el = $('saved'); el.textContent = 'gespeichert ✓'; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 1200); }

function bundleComplete(b: Bundle) { return b.tags.every((t) => feedback[t.id] && feedback[t.id].vote); }
function isDone(b: Bundle) { return feedback._done.indexOf(b.id) >= 0; }

function esc(s: string) { return String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' } as any)[c]); }

function renderJump() {
  const sel = $('jump');
  sel.innerHTML = bundles.map((b, i) =>
    `<option value="${i}"${i === current ? ' selected' : ''}>${i + 1}. ${esc(displayThemebook(b.themebook))} — ${esc(b.title)}${isDone(b) ? ' ✓' : ''}</option>`
  ).join('');
}

function voteBtn(tagId: string, v: Vote, emoji: string, label: string, cur?: string) {
  const sel = cur === v ? ` sel-${v}` : '';
  return `<button class="vote${sel}" data-tag="${tagId}" data-vote="${v}">${emoji}<span class="lbl">${label}</span></button>`;
}

function render() {
  const b = bundles[current];
  const content = $('content');
  if (!b) {
    content.innerHTML = `<div class="empty">Keine beschriebenen Bündel vorhanden.<br>Erzeuge zuerst Tag-Beschreibungen (tools/tag-descriptions.json).</div>`;
    $('progress').textContent = '';
    $('btn-done').disabled = true;
    return;
  }
  const tc = tierClass(b.tier);
  const tagCard = (t: TagItem) => {
    const fb = feedback[t.id] || {};
    const exLabel = t.kind === 'power' ? 'Hilft z.B.' : 'Hindert z.B.';
    const body = t.description
      ? `<div class="tag-desc">${esc(t.description)}</div>` +
        (t.example ? `<div class="tag-ex"><b>${exLabel}:</b> ${esc(t.example)}</div>` : '')
      : `<div class="no-desc">— noch keine Beschreibung —</div>`;
    return `<div class="tag${fb.vote ? ' rated' : ''}" data-tagcard="${t.id}">
      <div class="tag-top">
        <span class="tag-text">${esc(t.text)}</span>
        <span class="kind ${t.kind}">${t.kind === 'power' ? 'Power' : 'Weakness'}</span>
        <span class="tag-id">${esc(t.id)}</span>
      </div>
      ${body}
      <div class="votes">
        ${voteBtn(t.id, 'down', '👎', 'schwach', fb.vote)}
        ${voteBtn(t.id, 'up', '👍', 'gut', fb.vote)}
        ${voteBtn(t.id, 'double', '👍👍', 'top', fb.vote)}
      </div>
      <textarea class="note" data-note="${t.id}" placeholder="optionales Feedback …">${esc(fb.note || '')}</textarea>
    </div>`;
  };
  const power = b.tags.filter((t) => t.kind === 'power');
  const weak = b.tags.filter((t) => t.kind === 'weakness');
  content.innerHTML =
    `<div class="theme-head ${tc}">
       <div class="theme-meta">
         <span>${esc(displayThemebook(b.themebook))}</span>
         <span class="tier-badge">${esc(displayMight(b.tier))}</span>
         ${isDone(b) ? '<span class="done-tick">erledigt ✓</span>' : ''}
       </div>
       <div class="theme-title">${esc(b.title)}</div>
     </div>
     <div class="section-label">Power-Tags</div>
     ${power.map(tagCard).join('')}
     <div class="section-label">Weakness-Tags</div>
     ${weak.map(tagCard).join('')}`;

  const doneCount = bundles.filter(isDone).length;
  $('progress').textContent =
    `Bündel ${current + 1} / ${bundles.length} · ${doneCount} erledigt` +
    (notReadyThemes ? ` · ${notReadyThemes} Themes noch ohne Beschreibung (folgen später)` : '');
  $('btn-prev').disabled = current === 0;
  $('btn-next').disabled = current === bundles.length - 1;
  renderJump();
  updateDoneBtn();
  bindCardEvents();
}

function bindCardEvents() {
  document.querySelectorAll('.vote').forEach((el: any) => {
    el.onclick = () => {
      const id = el.getAttribute('data-tag'); const v = el.getAttribute('data-vote') as Vote;
      setVote(id, v);
    };
  });
  document.querySelectorAll('.note').forEach((el: any) => {
    el.oninput = () => {
      const id = el.getAttribute('data-note');
      ensure(id); feedback[id].note = el.value; saveFeedback();
    };
  });
}

function meta(id: string) {
  const b = bundles[current];
  const t = b.tags.find((x) => x.id === id)!;
  return { text: t.text, kind: t.kind, themebook: b.themebook, title: b.title };
}
function ensure(id: string) {
  if (!feedback[id]) feedback[id] = { ...meta(id), vote: null, note: '' };
}

function setVote(id: string, v: Vote) {
  ensure(id);
  feedback[id].vote = v;
  feedback[id].ts = new Date().toISOString();
  Object.assign(feedback[id], meta(id));
  // UI: Buttons im betroffenen Tag updaten
  const card = document.querySelector(`[data-tagcard="${id}"]`) as any;
  if (card) {
    card.classList.add('rated');
    card.querySelectorAll('.vote').forEach((btn: any) => {
      const bv = btn.getAttribute('data-vote');
      btn.classList.remove('sel-down', 'sel-up', 'sel-double');
      if (bv === v) btn.classList.add('sel-' + v);
    });
  }
  updateDoneBtn();
  saveFeedback();
}

function updateDoneBtn() {
  const b = bundles[current];
  const complete = b && bundleComplete(b);
  $('btn-done').disabled = !complete;
  $('done-hint').textContent = complete
    ? (isDone(b) ? 'Alle Tags bewertet — bereits als erledigt markiert.' : 'Alle Tags bewertet — du kannst abschließen.')
    : 'Bewerte jeden Tag mit einem Daumen, um abzuschließen.';
}

function go(idx: number) {
  current = Math.max(0, Math.min(bundles.length - 1, idx));
  window.scrollTo(0, 0);
  render();
}

function finishCurrent() {
  const b = bundles[current];
  if (!b || !bundleComplete(b)) return;
  if (!isDone(b)) feedback._done.push(b.id);
  saveFeedback();
  // Naechstes unerledigtes Buendel, sonst einfach das naechste
  let next = -1;
  for (let i = current + 1; i < bundles.length; i++) { if (!isDone(bundles[i])) { next = i; break; } }
  if (next < 0) for (let i = 0; i < bundles.length; i++) { if (!isDone(bundles[i])) { next = i; break; } }
  go(next >= 0 ? next : Math.min(current + 1, bundles.length - 1));
}

function firstIncomplete() {
  for (let i = 0; i < bundles.length; i++) { if (!isDone(bundles[i])) return i; }
  return 0;
}

(async function init() {
  await loadFeedback();
  $('btn-prev').onclick = () => go(current - 1);
  $('btn-next').onclick = () => go(current + 1);
  $('btn-done').onclick = finishCurrent;
  $('jump').onchange = (e: any) => go(parseInt(e.target.value, 10) || 0);
  current = firstIncomplete();
  render();
})();
