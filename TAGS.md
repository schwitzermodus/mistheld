# Tag-Definition (Herzstück von Mistheld)

Tags (Power Tags & Weakness Tags) sind der wichtigste Inhalt der App und für die
Qualität der Ergebnisse sowie die Spielmechanik von *Legend in the Mist* entscheidend.
**Alle bestehenden und zukünftigen Tags MÜSSEN diese Definition erfüllen.**

## Grundlagen
- Ein Tag ist eine **kurze Beschreibung eines bedeutsamen Aspekts** des Helden.
- Länge: **bevorzugt 1–3 Wörter**; kurze Phrasen (bis ~5 Wörter) sind erlaubt, aber **nie ein ganzer Satz**.
- Doppelrolle: Ein Tag **legt etwas in der Fiktion fest** UND **beeinflusst die Stärke (Power)** einer Aktion.
- Tags können vieles beschreiben: Fähigkeiten, mentale Fähigkeiten, Beziehungen, Hintergrund, Gegenstände, Wesen, Ressourcen, Stil/Auftreten.

## Power Tags & Weakness Tags
- **Power Tags** repräsentieren **überwiegend nützliche** Aspekte (dürfen ausnahmsweise neutral/zweischneidig sein, z. B. „berüchtigt"). In passenden Situationen sollten sie **nützlich** sein.
- **Weakness Tags** repräsentieren **einschränkende** Aspekte (Schwächen, Makel, Verwundbarkeiten). In passenden Situationen sollten sie **hinderlich** sein.

## Aufbau eines Themes (Kohärenz)
- Der **erste Power Tag ist der Titel** des Themes und benennt dessen Kern.
- **Alle weiteren Power Tags und das Weakness Tag sind verwandte, untergeordnete oder sekundäre Aspekte dieses Titels** und passen inhaltlich zu ihm.
- Tags innerhalb eines Themes **wiederholen sich nicht** inhaltlich.

## Might-Stufe
Alle Power Tags, **besonders der Titel**, passen zur Might-Stufe des Themes
(Ursprung < Abenteuer < Allmacht):
- **Ursprung** — gewöhnlich, bodenständig, im Rahmen normaler Mittel. *z. B. „Dorfklatsch", „geübter Schmied", „gutes Schwert"*
- **Abenteuer** — über dem Gewöhnlichen: bemerkenswert, selten, heldenhaft, beginnend übernatürlich. *z. B. „bemerkenswerter Schwertkämpfer", „Segen der Götter"*
- **Allmacht** — grandios, legendär, welt- oder schicksalsprägend. *z. B. „Königin des Reiches", „Zauber der Vernichtung"*

## Breit vs. spezifisch
- Spezifische/direkte Tags (z. B. „Schlafzauber") vs. breite/indirekte (z. B. „reich").
- Ein Theme sollte eine **Balance** aus spezifischen, breiten und „dazwischen"-Tags haben (so empfiehlt es das Core Book; breite Tags sind flexibler, kosten im Spiel aber oft eine Extra-Aktion).

## Verankerung in der App (Titel als Anker)
Die Daten sind **titel-verankert**: Jeder Titel ist ein Bündel aus 4–5 Power Tags,
2–3 Weakness Tags und 2–3 Quests, die alle Aspekte **genau dieses Titels** sind.
Beim Generieren zieht die App erst einen Titel und dann Power/Weakness/Quest
**aus dessen Bündel** — Kohärenz zum Titel ist damit strukturell garantiert.
Das mechanische Gate `tools/validate_tags.cjs` (pre-commit + CI) erzwingt die
Phrasenregeln und die Bündel-Struktur. Quests sind **keine** Tags (Ich-Ziel-Satz erlaubt).

---
Quelle/Abgleich: *Legend in the Mist* Core Book, S. 76–77 („Tags", „Hero Creation Checklist").
Strukturell pro generiertem Theme: Titel-Tag + 2 Power Tags + 1 Weakness Tag + 1 Quest (aus dem Titel-Bündel).

## Maschinelle Kriterien-Quelle
Diese Doku ist für Menschen. Die **maschinell genutzte** Kriterien-Quelle ist `src/data/criteria.js`:
- `FORM_RULES` + `STRUCTURE` — von `tools/validate_tags.cjs` durchgesetzt (Form + Bündelstruktur, pre-commit + CI).
- `UNIVERSAL` — universelle LitM-Bewertungsfragen (Power-Nützlichkeit, Weakness-Hinderlichkeit, Quest-Milestone/Abandon, Relevanz-Prinzip).
- `THEMEBOOK_QUESTIONS` — offizielle Power (A–J) + Weakness (A–D) Tag Questions je Themebook (verbatim aus dem Core Book).
- Relevanz-/Nützlichkeitsbewertung (semantisch): `npm run judge:tags` (LLM-Judge, `tools/judge_tags.mjs`) wendet diese Fragen an und schreibt einen Report. Manuell, nicht in CI.
