/* =====================================================
   PDF-Schrift (Cormorant Garamond) erst beim Export lazy nachladen.
   Der Font-Bundle (fonts/cormorant.js) setzt window.MISTHELD_FONTS und bleibt
   bewusst ausserhalb des Vite-Bundles (per Script-Injektion geladen).
===================================================== */
let _pdfFontsPromise: Promise<boolean> | null = null;
export function loadPdfFonts(): Promise<boolean> {
  if ((window as any).MISTHELD_FONTS) return Promise.resolve(true);
  if (_pdfFontsPromise) return _pdfFontsPromise;
  _pdfFontsPromise = new Promise(function (res) {
    var s = document.createElement('script');
    var ver = (((document.querySelector('.app-version') as any) || {}).textContent || '').trim();
    s.src = 'fonts/cormorant.js' + (ver ? ('?v=' + encodeURIComponent(ver)) : '');
    s.onload = function () { res(!!(window as any).MISTHELD_FONTS); };
    s.onerror = function () { res(false); };
    document.head.appendChild(s);
  });
  return _pdfFontsPromise;
}
export function pdfRegisterFonts(doc: any): boolean {
  var F = (window as any).MISTHELD_FONTS; if (!F) return false;
  try {
    doc.addFileToVFS('CormR.ttf', F.regular); doc.addFont('CormR.ttf', 'Cormorant', 'normal');
    doc.addFileToVFS('CormI.ttf', F.italic); doc.addFont('CormI.ttf', 'Cormorant', 'italic');
    doc.addFileToVFS('CormSB.ttf', F.semibold); doc.addFont('CormSB.ttf', 'Cormorant', 'bold');
    doc.addFileToVFS('CormSBI.ttf', F.semibolditalic); doc.addFont('CormSBI.ttf', 'Cormorant', 'bolditalic');
    return true;
  } catch (e) { return false; }
}
