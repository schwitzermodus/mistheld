/* =====================================================
   PDF-Export — mehrseitiges Querformat im App-/LitM-Look.
   jsPDF wird lazy per dynamischem Import geladen (nicht im Haupt-Bundle).
===================================================== */
import { state } from '../state/session';
import { getDisplayTheme } from '../core/generation';
import { displayThemebook, displayMight, STRINGS } from '../i18n/strings.js';
import { capitalizeFirst } from '../util/text';
import { loadPdfFonts, pdfRegisterFonts } from './fonts';

const PDF_LAYOUT = { pageW: 297, pageH: 210, mx: 14, my: 14 };
const PDF_COLORS: any = {
  paper: [250, 243, 223], ink: [42, 36, 25], inkSoft: [91, 82, 64],
  accent: [139, 58, 43], gold: [169, 134, 70], line: [206, 196, 170], light: [251, 243, 223],
  origin: [98, 114, 78], adventure: [145, 94, 79], greatness: [101, 108, 107],
};
function pdfMightColor(type: string): number[] { return type === 'Adventure' ? PDF_COLORS.adventure : type === 'Greatness' ? PDF_COLORS.greatness : PDF_COLORS.origin; }

function pdfPaper(doc: any): void { var L = PDF_LAYOUT, C = PDF_COLORS; doc.setFillColor.apply(doc, C.paper); doc.rect(0, 0, L.pageW, L.pageH, 'F'); }
function pdfMiniLabel(doc: any, FF: string, label: string, x: number, y: number): number { doc.setFont(FF, 'bold'); doc.setFontSize(7); doc.setTextColor.apply(doc, PDF_COLORS.gold); doc.text(label, x, y); return y + 4.6; }
function pdfDivider(doc: any, cx: number, y: number, halfW: number): void {
  var C = PDF_COLORS; doc.setDrawColor.apply(doc, C.gold); doc.setLineWidth(0.3);
  doc.line(cx - halfW, y, cx - 2.4, y); doc.line(cx + 2.4, y, cx + halfW, y);
  doc.setFillColor.apply(doc, C.gold);
  doc.triangle(cx - 1.6, y, cx, y - 1.6, cx + 1.6, y, 'F'); doc.triangle(cx - 1.6, y, cx, y + 1.6, cx + 1.6, y, 'F');
}
function pdfThemeCard(doc: any, FF: string, theme: any, x: number, y: number, w: number, h: number): void {
  var C = PDF_COLORS, mc = pdfMightColor(theme.type);
  doc.setFillColor.apply(doc, C.paper); doc.setDrawColor.apply(doc, C.gold); doc.setLineWidth(0.7);
  doc.roundedRect(x, y, w, h, 2.4, 2.4, 'FD');
  var bandH = 14;
  doc.setFillColor.apply(doc, mc); doc.rect(x + 0.7, y + 0.7, w - 1.4, bandH, 'F');
  doc.setTextColor.apply(doc, C.light); doc.setFont(FF, 'bold'); doc.setFontSize(8);
  doc.text(displayThemebook(theme.themebook).toUpperCase(), x + w / 2, y + 6, { align: 'center' });
  doc.setFont(FF, 'italic'); doc.setFontSize(8.5);
  doc.text(displayMight(theme.type), x + w / 2, y + 11.2, { align: 'center' });
  var cy = y + bandH + 8;
  doc.setTextColor.apply(doc, C.ink); doc.setFont(FF, 'bolditalic'); doc.setFontSize(15);
  var tl = doc.splitTextToSize(capitalizeFirst(theme.titleTag.text), w - 10);
  doc.text(tl, x + w / 2, cy, { align: 'center' }); cy += tl.length * 6 + 2;
  pdfDivider(doc, x + w / 2, cy, (w - 18) / 2); cy += 6;
  cy = pdfMiniLabel(doc, FF, STRINGS.pdf.powerTags.toUpperCase(), x + 6, cy);
  doc.setFont(FF, 'normal'); doc.setFontSize(10.5); doc.setTextColor.apply(doc, C.ink);
  theme.powerTags.forEach(function (t: any) { var ls = doc.splitTextToSize(capitalizeFirst(t.text), w - 12); doc.text(ls, x + 6, cy); cy += ls.length * 5; });
  if (theme.tierTag) { doc.setFont(FF, 'italic'); doc.setFontSize(10.5); doc.setTextColor.apply(doc, C.gold); var tt = doc.splitTextToSize(capitalizeFirst(theme.tierTag.text), w - 12); doc.text(tt, x + 6, cy); cy += tt.length * 5; }
  cy += 3.5; cy = pdfMiniLabel(doc, FF, STRINGS.pdf.weaknessTag.toUpperCase(), x + 6, cy);
  doc.setFont(FF, 'italic'); doc.setFontSize(10.5); doc.setTextColor.apply(doc, C.accent);
  var wl = doc.splitTextToSize(capitalizeFirst(theme.weaknessTag.text), w - 12); doc.text(wl, x + 6, cy);
  var footH = 50, fy = y + h - footH;
  doc.setFillColor.apply(doc, mc); doc.rect(x + 0.7, fy, w - 1.4, footH - 0.7, 'F');
  doc.setTextColor.apply(doc, C.light); doc.setFont(FF, 'bold'); doc.setFontSize(7);
  doc.text(STRINGS.pdf.quest.toUpperCase(), x + w / 2, fy + 6, { align: 'center' });
  doc.setFont(FF, 'bolditalic'); doc.setFontSize(10.5);
  var qt = doc.splitTextToSize('„' + capitalizeFirst(theme.quest.title) + '“', w - 12);
  doc.text(qt, x + w / 2, fy + 12, { align: 'center' }); var qy = fy + 12 + qt.length * 5 + 1;
  doc.setFont(FF, 'italic'); doc.setFontSize(8.5); doc.setTextColor.apply(doc, C.light);
  doc.text(doc.splitTextToSize(theme.quest.description, w - 12), x + w / 2, qy, { align: 'center' });
}
function pdfHeroPage(doc: any, FF: string): void {
  var L = PDF_LAYOUT, C = PDF_COLORS, h = state.hero || {};
  pdfPaper(doc);
  var x = L.mx, w = L.pageW - 2 * L.mx;
  doc.setTextColor.apply(doc, C.accent); doc.setFont(FF, 'bold'); doc.setFontSize(9);
  doc.text(STRINGS.pdf.sheetTitle.toUpperCase(), x, L.my + 2);
  doc.setTextColor.apply(doc, C.ink); doc.setFont(FF, 'bolditalic'); doc.setFontSize(30);
  doc.text(((h.firstName || '') + ' ' + (h.epithet || '')).trim(), x, L.my + 14);
  doc.setDrawColor.apply(doc, C.gold); doc.setLineWidth(0.5); doc.line(x, L.my + 18, L.pageW - L.mx, L.my + 18);
  var cy = L.my + 26;
  if (h.title) { doc.setFont(FF, 'italic'); doc.setFontSize(14); doc.setTextColor.apply(doc, C.accent); doc.text(doc.splitTextToSize(h.title, w), x, cy); cy += 9; }
  if (h.description) { doc.setFont(FF, 'normal'); doc.setFontSize(11); doc.setTextColor.apply(doc, C.ink); var dl = doc.splitTextToSize(h.description, w); doc.text(dl, x, cy); cy += dl.length * 5 + 5; }
  if (h.story) { cy = pdfMiniLabel(doc, FF, STRINGS.pdf.storyLabel.toUpperCase(), x, cy) + 2; doc.setFont(FF, 'italic'); doc.setFontSize(11); doc.setTextColor.apply(doc, C.inkSoft); var sl = doc.splitTextToSize(h.story, w); doc.text(sl, x, cy); }
  var bh = 46, by = L.pageH - L.my - bh, bw = (w - 2 * 6) / 3;
  [STRINGS.pdf.backpack, STRINGS.pdf.fellowship, STRINGS.pdf.notes].forEach(function (lab: string, i: number) {
    var bx = x + i * (bw + 6);
    doc.setFillColor.apply(doc, C.paper); doc.setDrawColor.apply(doc, C.gold); doc.setLineWidth(0.5); doc.roundedRect(bx, by, bw, bh, 2, 2, 'FD');
    doc.setFont(FF, 'bold'); doc.setFontSize(8); doc.setTextColor.apply(doc, C.accent); doc.text(lab.toUpperCase(), bx + 4, by + 6);
    doc.setDrawColor.apply(doc, C.line); doc.setLineWidth(0.2);
    for (var ly = by + 12; ly < by + bh - 3; ly += 6) { doc.line(bx + 4, ly, bx + bw - 4, ly); }
  });
}
export async function generatePDF(): Promise<void> {
  var prop = state.proposals[state.proposalIndex]; if (!prop) return;
  var win = window.open('', '_blank'); // synchron im Klick-Handler -> nicht vom Popup-Blocker geblockt
  try {
    var mod = await import('jspdf');
    var jsPDF = (mod as any).jsPDF;
    await loadPdfFonts();
    var doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    var FF = pdfRegisterFonts(doc) ? 'Cormorant' : 'times';
    var L = PDF_LAYOUT, gap = 5;
    pdfHeroPage(doc, FF);
    doc.addPage(); pdfPaper(doc);
    var nm = ((state.hero || {}).firstName ? ((state.hero.firstName + ' ' + state.hero.epithet).trim()) : STRINGS.pdf.sheetTitle);
    doc.setFont(FF, 'bold'); doc.setFontSize(9); doc.setTextColor.apply(doc, PDF_COLORS.accent);
    doc.text(nm.toUpperCase(), L.mx, L.my + 1);
    doc.setDrawColor.apply(doc, PDF_COLORS.gold); doc.setLineWidth(0.4); doc.line(L.mx, L.my + 4, L.pageW - L.mx, L.my + 4);
    var cardY = L.my + 9, cW = (L.pageW - 2 * L.mx - 3 * gap) / 4, cH = L.pageH - cardY - L.my;
    prop.themes.forEach(function (_: any, i: number) { pdfThemeCard(doc, FF, getDisplayTheme(i), L.mx + i * (cW + gap), cardY, cW, cH); });
    var url = URL.createObjectURL(doc.output('blob'));
    if (win) { win.location.href = url; } else { window.open(url, '_blank'); }
  } catch (err) { console.error('PDF-Fehler:', err); if (win) { try { win.close(); } catch (_) {} } alert(STRINGS.pdf.errCreate); }
}
