/* =====================================================
   ERGEBNIS-BEREICH: Heldenblatt (eine scrollbare Charakterblatt-Seite, DOM).
===================================================== */
import { $ } from '../util/dom';
import { state } from '../state/session';
import { getDisplayTheme, composeHeroStory } from '../core/generation';
import { levelCssClass } from '../core/constants';
import { displayMight, displayThemebook, STRINGS } from '../i18n/strings.js';
import { escapeHtml, displayTag } from '../util/text';
import { openHeroEditSheet, openEditSheet } from './editSheet';
import { saveCurrentCharacter } from '../state/persistence';

export const FEATHER_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>';

export function setHbEditing(on: boolean): void {
  var sc = $('screen-result'); if (!sc) return;
  sc.classList.toggle('hb-editing', !!on);
}

function hbHeroSection(): string {
  var h = state.hero;
  return '<div class="hb-hero">' +
    '<button class="hb-edit" data-edit="hero" type="button" aria-label="Held bearbeiten">' + FEATHER_SVG + '</button>' +
    '<div class="hb-hero-eyebrow">' + escapeHtml(STRINGS.hero.eyebrow) + '</div>' +
    '<div class="hb-hero-name">' + escapeHtml(h.firstName) + ' ' + escapeHtml(h.epithet) + '</div>' +
    (h.title ? '<div class="hb-hero-title">' + escapeHtml(h.title) + '</div>' : '') +
    '<div class="hb-hero-desc">' + escapeHtml(h.description) + '</div>' +
  '</div>';
}
function hbStorySection(): string {
  return '<div class="hb-module hb-story">' +
    '<button class="hb-edit" data-edit="story" type="button" aria-label="Geschichte neu würfeln">' + FEATHER_SVG + '</button>' +
    '<div class="hb-seclabel">' + escapeHtml(STRINGS.result.storyLabel) + '</div>' +
    '<div class="hb-story-text">' + escapeHtml(state.hero.story || '') + '</div>' +
  '</div>';
}
function hbThemeSection(ti: number): string {
  var dt = getDisplayTheme(ti), mc = levelCssClass(dt.type);
  var headBand =
    '<div class="hb-band hb-band-head">' +
      '<span class="hb-band-type">' + escapeHtml(displayThemebook(dt.themebook)) + '</span>' +
      '<span class="hb-band-might">' + escapeHtml(displayMight(dt.type)) + '</span>' +
    '</div>';
  var mid = '<div class="hb-theme-mid">' +
      '<div class="hb-titletag">' + displayTag(dt.titleTag.text) + '</div>' +
      '<div class="hb-powertag">' + displayTag(dt.powerTags[0].text) + '</div>' +
      '<div class="hb-powertag">' + displayTag(dt.powerTags[1].text) + '</div>' +
      (dt.tierTag ? '<div class="hb-powertag hb-tiertag">' + displayTag(dt.tierTag.text) + '</div>' : '') +
      '<div class="hb-weakness">' + displayTag(dt.weaknessTag.text) + '</div>' +
    '</div>';
  var footBand =
    '<div class="hb-band hb-band-foot">' +
      '<div class="hb-quest-label">' + escapeHtml(STRINGS.result.questLabel) + '</div>' +
      '<div class="hb-quest-title">„' + escapeHtml(dt.quest.title) + '“</div>' +
      '<div class="hb-quest-desc">' + escapeHtml(dt.quest.description) + '</div>' +
    '</div>';
  return '<div class="hb-theme ' + mc + '">' +
    '<button class="hb-edit" data-edit="theme" data-ti="' + ti + '" type="button" aria-label="Theme bearbeiten">' + FEATHER_SVG + '</button>' +
    headBand + mid + footBand +
  '</div>';
}
function hbPlaceholder(label: string): string {
  return '<div class="hb-ph">' +
    '<div class="hb-ph-title">' + escapeHtml(label) + '</div>' +
    '<div class="hb-ph-sub">' + escapeHtml(STRINGS.result.placeholderSoon) + '</div>' +
  '</div>';
}
function hbDivider(): string { return '<div class="hb-divider" aria-hidden="true"><span class="hb-divider-mark">❖</span></div>'; }
export function renderHeldenblatt(): void {
  var scroll = $('hb-scroll'); if (!scroll) return;
  var st = scroll.scrollTop;
  var n = state.proposals[state.proposalIndex].themes.length;
  var inner = hbHeroSection() + hbDivider() + hbStorySection() + hbDivider() + '<div class="hb-seclabel hb-themes-label">' + escapeHtml(STRINGS.result.themesLabel) + '</div>';
  for (var i = 0; i < n; i++) inner += hbThemeSection(i);
  inner += hbPlaceholder(STRINGS.result.backpackLabel) + hbPlaceholder(STRINGS.result.fellowshipLabel);
  scroll.innerHTML = '<div class="hb-sheet">' + inner + '<div class="hb-sheet-grain" aria-hidden="true"></div></div>';
  scroll.scrollTop = st;
  bindHeldenblatt(scroll);
  // Auto-Persistenz: der aktuelle Held geht bei Reload nie verloren (reload-sicher).
  try { saveCurrentCharacter(); } catch (_) {}
}
function bindHeldenblatt(scroll: any): void {
  scroll.querySelectorAll('.hb-edit').forEach(function (btn: any) {
    btn.addEventListener('click', function (e: any) {
      e.stopPropagation();
      var k = btn.dataset.edit;
      if (k === 'hero') openHeroEditSheet();
      else if (k === 'story') { state.hero.story = composeHeroStory(); renderHeldenblatt(); }
      else if (k === 'theme') openEditSheet(parseInt(btn.dataset.ti));
    });
  });
}
