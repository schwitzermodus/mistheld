/* =====================================================
   WELCOME-PREVIEW: rotierende Theme-Karte (DOM).
===================================================== */
import { $ } from '../util/dom';
import { TYPE_TIER, levelCssClass } from '../core/constants';
import { loadSettings, getEnabledThemeTypes, effectiveLevel } from '../core/settings';
import { generateTheme } from '../core/generation';
import { displayThemebook, displayMight, STRINGS } from '../i18n/strings.js';
import { escapeHtml, displayTag } from '../util/text';

var PREVIEW_TIERS = ['Origin', 'Adventure', 'Greatness'];
var PREVIEW_TIER_THEMEBOOKS: any = null;
var previewTierIdx = 0;
var previewLastBook: any = { Origin: '', Adventure: '', Greatness: '' };
var previewTimer: any = null;

function initPreviewThemebooks(): void {
  if (PREVIEW_TIER_THEMEBOOKS) return;
  PREVIEW_TIER_THEMEBOOKS = { Origin: [], Adventure: [], Greatness: [] };
  Object.keys(TYPE_TIER).forEach(function (tb) {
    var tier = TYPE_TIER[tb];
    if (tier !== 'Variable') PREVIEW_TIER_THEMEBOOKS[tier].push(tb);
  });
}

function generatePreviewTheme(): any {
  var s = loadSettings();
  var enabled = getEnabledThemeTypes(s);
  if (enabled.length === 0) enabled = ['People', 'Trait', 'Mastery'];
  var tier = PREVIEW_TIERS[previewTierIdx % PREVIEW_TIERS.length];
  previewTierIdx++;
  var booksAtTier = enabled.filter(function (tb) { return effectiveLevel(tb, s) === tier; });
  if (booksAtTier.length === 0) booksAtTier = enabled;
  var tb, attempts = 0;
  do { tb = booksAtTier[Math.floor(Math.random() * booksAtTier.length)]; attempts++; }
  while (tb === previewLastBook[tier] && attempts < 5 && booksAtTier.length > 1);
  previewLastBook[tier] = tb;
  return generateTheme(tb, s);
}

function buildWelcomePreviewCard(theme: any): string {
  var dt = theme, mc = levelCssClass(dt.type);
  return '<div class="hb-theme ' + mc + '">' +
    '<div class="hb-band hb-band-head">' +
      '<span class="hb-band-type">' + escapeHtml(displayThemebook(dt.themebook)) + '</span>' +
      '<span class="hb-band-might">' + escapeHtml(displayMight(dt.type)) + '</span>' +
    '</div>' +
    '<div class="hb-theme-mid">' +
      '<div class="hb-titletag">' + displayTag(dt.titleTag.text) + '</div>' +
      '<div class="hb-powertag">' + displayTag(dt.powerTags[0].text) + '</div>' +
      '<div class="hb-powertag">' + displayTag(dt.powerTags[1].text) + '</div>' +
      (dt.tierTag ? '<div class="hb-powertag hb-tiertag">' + displayTag(dt.tierTag.text) + '</div>' : '') +
      '<div class="hb-weakness">' + displayTag(dt.weaknessTag.text) + '</div>' +
    '</div>' +
    '<div class="hb-band hb-band-foot">' +
      '<div class="hb-quest-label">' + escapeHtml(STRINGS.result.questLabel) + '</div>' +
      '<div class="hb-quest-title">„' + escapeHtml(dt.quest.title) + '“</div>' +
      '<div class="hb-quest-desc">' + escapeHtml(dt.quest.description) + '</div>' +
    '</div>' +
  '</div>';
}

function showNextPreviewCard(): void {
  var container = $('welcome-preview');
  if (!container) return;
  var t = generatePreviewTheme();
  var html = buildWelcomePreviewCard(t);
  var old = container.firstElementChild;
  if (!old) {
    container.innerHTML = html;
    return;
  }
  old.style.opacity = '0';
  setTimeout(function () {
    container.innerHTML = html;
    var nc = container.firstElementChild;
    if (!nc) return;
    nc.style.opacity = '0';
    nc.getBoundingClientRect();
    nc.style.opacity = '1';
  }, 500);
}

export function initWelcomePreview(): void {
  initPreviewThemebooks();
  showNextPreviewCard();
  if (previewTimer) clearInterval(previewTimer);
  previewTimer = setInterval(function () {
    var w = $('screen-welcome');
    var sc = document.querySelector('.welcome-scroll');
    if (w && w.classList.contains('active') && (!sc || (sc as any).scrollTop < 8)) {
      showNextPreviewCard();
    }
  }, 3500);
}
