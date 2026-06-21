/* =====================================================
   DOM-Shorthands. Bewusst `any` als Rueckgabe, damit der UI-Code
   nicht an strictNullChecks jeder Abfrage scheitert (inkrementelle Migration).
===================================================== */
export const $ = function (id: string): any { return document.getElementById(id); };
export const $$ = function (sel: string): any { return document.querySelectorAll(sel); };
