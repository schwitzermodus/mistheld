/* =====================================================
   Reine Text-/Array-Helfer (kein DOM, kein State).
===================================================== */
export function escapeHtml(s: any): string {
  return String(s).replace(/[&<>"']/g, function (m: string) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' } as any)[m];
  });
}
export function capitalizeFirst(s: any): any { if (!s) return s; return s.charAt(0).toUpperCase() + s.slice(1); }
export function displayTag(s: any): string { return escapeHtml(capitalizeFirst(s)); }
export function shuffleArray(a: any[]): any[] {
  for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
  return a;
}
export function tagText(e: any): any { return typeof e === 'string' ? e : e.text; }
export function isExpanded(e: any): boolean { return typeof e === 'object' && e && e.expanded === true; }
