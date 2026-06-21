/* =====================================================
   EDIT SHEETS (Bottom-Sheets zum Wuerfeln/Navigieren von Alternativen, DOM).
===================================================== */
import { $ } from '../util/dom';
import { state } from '../state/session';
import { getDisplayTheme, getEdit, handleReroll, handleNavigate, rerollHeroPart } from '../core/generation';
import { renderHeldenblatt } from './result';
import { displayMight, displayThemebook, STRINGS } from '../i18n/strings.js';
import { escapeHtml, displayTag } from '../util/text';
import { CFG } from '../core/constants';

export function openHeroEditSheet(): void {
  var h = state.hero, body = $('edit-sheet-body');
  function row(part: string, label: string, val: string) {
    return '<div class="es-row">' +
      '<div class="es-row-content">' +
        '<div class="es-label">' + escapeHtml(label) + '</div>' +
        '<div class="es-value">' + escapeHtml(val) + '</div>' +
      '</div>' +
      '<button type="button" class="es-reroll-btn" data-part="' + part + '">↺ ' + escapeHtml(STRINGS.hero.rerollShort) + '</button></div>';
  }
  body.innerHTML =
    '<div class="es-header"><div class="es-themebook">' + escapeHtml(STRINGS.hero.eyebrow) + '</div></div>' +
    row('firstName', STRINGS.hero.labelFirstName, h.firstName) +
    row('epithet', STRINGS.hero.labelEpithet, h.epithet) +
    row('title', STRINGS.hero.labelTitle, h.title) +
    row('description', STRINGS.hero.labelDescription, h.description.substring(0, 55) + '…');
  body.querySelectorAll('.es-reroll-btn').forEach(function (btn: any) {
    btn.addEventListener('click', function () {
      rerollHeroPart(btn.dataset.part); openHeroEditSheet();
      renderHeldenblatt();
    });
  });
  $('edit-sheet-overlay').classList.add('active');
}

export function openEditSheet(ti: number): void {
  var dt = getDisplayTheme(ti), body = $('edit-sheet-body');
  function row(k: string, label: string, entry: any) {
    var isQ = k === 'quest', rawText = isQ ? entry.title : entry.text, isW = k === 'weakness';
    var e = getEdit(ti, k), total = 1 + (e ? e.alts.length : 0), idx = e ? e.index : 0;
    var maxed = e ? e.alts.length >= CFG.MAX_ELEMENT_ALTS : false;
    var nav = total > 1 ?
      '<div class="es-nav">' +
        '<button type="button" class="es-nav-btn" data-ti="' + ti + '" data-k="' + k + '" data-dir="-1"' + (idx === 0 ? ' disabled' : '') + '>&#8249;</button>' +
        '<span class="es-nav-pos">' + (idx + 1) + ' / ' + total + '</span>' +
        '<button type="button" class="es-nav-btn" data-ti="' + ti + '" data-k="' + k + '" data-dir="1"' + (idx >= total - 1 ? ' disabled' : '') + '>&#8250;</button>' +
      '</div>' : '';
    return '<div class="es-row">' +
      '<div class="es-row-content">' +
        '<div class="es-label">' + escapeHtml(label) + '</div>' +
        '<div class="es-value' + (isW ? ' es-weak' : '') + '">' + displayTag(rawText) + '</div>' + nav +
      '</div>' +
      '<button type="button" class="es-reroll-btn" data-ti="' + ti + '" data-k="' + k + '"' + (maxed ? ' disabled' : '') + '>' +
        '↺ ' + escapeHtml(STRINGS.hero.rerollShort) + '</button></div>';
  }
  body.innerHTML =
    '<div class="es-header"><div class="es-themebook">' + escapeHtml(displayThemebook(dt.themebook)) + '</div>' +
    '<div class="es-might">' + escapeHtml(displayMight(dt.type)) + '</div></div>' +
    row('theme', STRINGS.hero.labelTitleTag, dt.titleTag) +
    row('pow0', STRINGS.hero.labelPower1, dt.powerTags[0]) +
    row('pow1', STRINGS.hero.labelPower2, dt.powerTags[1]) +
    row('weakness', STRINGS.hero.labelWeakness, dt.weaknessTag) +
    row('quest', STRINGS.hero.labelQuest, dt.quest) +
    '<div class="es-footer"><button type="button" class="es-full-reroll" id="es-full-reroll" data-ti="' + ti + '">' + escapeHtml(STRINGS.hero.fullReroll) + '</button></div>';
  body.querySelectorAll('.es-reroll-btn').forEach(function (btn: any) {
    btn.addEventListener('click', function () {
      handleReroll(parseInt(btn.dataset.ti), btn.dataset.k);
      openEditSheet(ti);
      renderHeldenblatt();
    });
  });
  body.querySelectorAll('.es-nav-btn').forEach(function (btn: any) {
    btn.addEventListener('click', function () {
      handleNavigate(parseInt(btn.dataset.ti), btn.dataset.k, parseInt(btn.dataset.dir));
      openEditSheet(ti);
      renderHeldenblatt();
    });
  });
  var fr = $('es-full-reroll');
  fr.addEventListener('click', function () {
    handleReroll(parseInt(fr.dataset.ti), 'theme');
    openEditSheet(ti);
    renderHeldenblatt();
  });
  $('edit-sheet-overlay').classList.add('active');
}
export function closeEditSheet(): void { $('edit-sheet-overlay').classList.remove('active'); }
