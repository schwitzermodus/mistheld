/* =====================================================
   Helden-Bibliothek (DOM): gespeicherte Charaktere auflisten, oeffnen, loeschen.
   Overlay vom Welcome-Screen aus erreichbar.
===================================================== */
import { $ } from '../util/dom';
import { characterStore, loadCharacterIntoSession } from '../state/persistence';
import { renderHeldenblatt, setHbEditing } from './result';
import { show } from './navigation';
import { SCREENS } from '../core/constants';
import { STRINGS } from '../i18n/strings.js';
import { escapeHtml } from '../util/text';

function fmtDate(iso: string): string {
  try { return new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }); }
  catch (_) { return ''; }
}

function renderLibrary(): void {
  var list = $('library-list'); if (!list) return;
  var chars = characterStore.list();
  if (!chars.length) {
    list.innerHTML = '<div class="lib-empty">' + escapeHtml(STRINGS.library.empty) + '</div>';
    return;
  }
  list.innerHTML = chars.map(function (c) {
    var name = escapeHtml((c.name.firstName + ' ' + c.name.epithet).trim());
    var sub = escapeHtml(c.name.title || '');
    return '<div class="lib-row" data-id="' + c.id + '">' +
      '<div class="lib-row-main">' +
        '<div class="lib-name">' + name + '</div>' +
        (sub ? '<div class="lib-sub">' + sub + '</div>' : '') +
        '<div class="lib-meta">' + c.themes.length + ' ' + escapeHtml(STRINGS.library.themesWord) + ' · ' + fmtDate(c.updatedAt) + '</div>' +
      '</div>' +
      '<div class="lib-row-actions">' +
        '<button type="button" class="lib-open" data-id="' + c.id + '">' + escapeHtml(STRINGS.library.open) + '</button>' +
        '<button type="button" class="lib-del" data-id="' + c.id + '" aria-label="' + escapeHtml(STRINGS.library.delete) + '">' + escapeHtml(STRINGS.library.delete) + '</button>' +
      '</div>' +
    '</div>';
  }).join('');
  list.querySelectorAll('.lib-open').forEach(function (b: any) {
    b.addEventListener('click', function () {
      var c = characterStore.get(b.dataset.id); if (!c) return;
      loadCharacterIntoSession(c);
      closeLibrary();
      setHbEditing(false);
      document.body.classList.remove('swipe-active');
      show(SCREENS.RESULT);
      renderHeldenblatt(true);
    });
  });
  list.querySelectorAll('.lib-del').forEach(function (b: any) {
    b.addEventListener('click', function () { characterStore.remove(b.dataset.id); renderLibrary(); });
  });
}

export function openLibrary(): void { renderLibrary(); $('library-overlay').classList.add('active'); document.body.classList.add('overlay-open'); }
export function closeLibrary(): void { $('library-overlay').classList.remove('active'); document.body.classList.remove('overlay-open'); }
export function libraryHasEntries(): boolean { return characterStore.list().length > 0; }
