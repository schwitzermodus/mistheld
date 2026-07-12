# TAG-STYLE.md

Inhalts- und Voice-Regeln für Themes, Tags und Quests im Mistheld-Katalog.

**Status:** Lebendes Dokument. Entsteht in der Kalibrierung mit Sascha und wird laufend ergänzt.

**Verhältnis zu `TAGS.md`:** `TAGS.md` definiert die strukturellen Pflichtregeln (max. 5 Wörter, bevorzugt 1–3; kein ganzer Satz; kein Komma; Power = nützlich, Weakness = einschränkend; Validierung via `tools/validate_tags.cjs`). Diese bleiben verbindlich. `TAG-STYLE.md` legt die inhaltlichen und sprachlichen Qualitätsregeln obendrauf.

**Copyright:** Alle Inhalte sind eigener deutscher Text, inspiriert von der LitM-Mechanik. Keine Übernahme oder enge Paraphrase offizieller Tag-Listen aus den Quellenbüchern (öffentliches Deployment).

---

## 1. Sprache und Wording

- **Kürze.** So wenige Wörter wie möglich. Füllverben und Artikel streichen (z.B. „trägt ein", „ein", „in den"). Beispiel: „liest in den Sternen" → „liest Sterne".
- **Einfache Sprache.** Gängige, sofort verständliche Wörter. Was man nachschlagen müsste, wird ersetzt. Beispiel: „Standesdünkel" → „Hochmut".
- **Präzises Wording.** Die treffendere Formulierung wählen. Beispiel: „falsches Siegel" → „gefälschtes Siegel".

## 2. Spielmechanische Brauchbarkeit

- **Konkretheit.** Ein Power Tag muss sofort klarmachen, welche Aktionen er stützt. Vage oder abstrakte Formulierungen fallen durch, auch wenn sie thematisch klingen. Negativbeispiel: „errechnet himmlische Bahnen".
- **Spezifisch/Breit-Balance.** LitM (Vol. I, S. 78) unterscheidet breite Tags (in vielen Situationen nutzbar, brauchen aber meist eine Prep-Action, also indirekt) und spezifische Tags (direkt nutzbar, aber nur in passenden Situationen, dafür verlässlich). Ziel ist eine **Mischung** aus breit, spezifisch und dazwischen. Diese Regel darf **kein Übergewicht breiter Tags** erzeugen.
- **Nicht zu selten relevant.** Die eigentliche Qualitätsschwelle ist nicht breit-gegen-spezifisch, sondern: Ein Tag ist zu schwach, wenn er nur in seltenen Rand- oder Sonderfällen überhaupt relevant wird. Negativbeispiele: „verborgene Gönner", „alte Beziehungen".

## 3. Themen-Kohärenz

- **Titel-Tag = erstes Power Tag.** Der Theme-Titel ist immer das erste und wichtigste Power Tag (LitM: „main power tag / theme title"). Er **zählt bei der Anzahl mit**: „max. 3 Power Tags" heißt Titel plus zwei weitere. Der Titel-Tag muss **alle** Qualitätskriterien erfüllen wie jedes andere Tag.
- **Differenzierung innerhalb des Themes.** Die Tags eines Themes sollen sich möglichst wenig überlappen, besser noch: deutlich voneinander unterscheidbar sein. Jeder Tag deckt einen eigenen Einsatzbereich ab, statt dieselbe Fähigkeit nur anders zu benennen. Negativbeispiel: „Hofmanieren" neben „feine Gesellschaft".
- **Gesinnung erlaubt, Passung entscheidet.** Tags dürfen moralisch gefärbt sein, gut wie böse (z.B. der Betrugsaspekt bei „gefälschtes Siegel"). Kriterium ist nicht Neutralität, sondern ob der Tag zum Theme/Titel und zum Heldenbild passt, das die Swipes erzeugen. Der Generator lässt einzelne Tags ohnehin austauschen.

## 4. Might-Passung (verbindlich)

**Das Theme und alle seine Tags — der Titel-Tag eingeschlossen — müssen zur Might-Stufe des Themes passen.**

- **Origin:** gewöhnlich, bodenständig, alltagsnah (z.B. „humble gravedigger", „local gossip").
- **Adventure:** über dem Gewöhnlichen, bemerkenswert (z.B. „remarkable swordfighter", „blessing of the gods").
- **Greatness:** grandios, weltbewegend (z.B. „queen of the realm", „spell of annihilation").

Grundlage: LitM Vol. I, S. 75/78/171 ff.

### App-Mechanik dazu (wichtig fürs Schreiben und Bewerten)

- Jedes Themebook hat eine **feste Buch-Stufe** (`DEFAULT_THEME_TIER` in `src/core/constants.ts`). Beispiel: Monstrosity = Greatness, Circumstance = Origin.
- Der Generator schreibt Tag-Texte **nicht um**, wenn die Stufe im Spiel abweicht. Eine Abweichung von der Buch-Stufe wird nur durch ein generisches Zusatz-Tag markiert (`generateTierDeviationTag`), nicht durch eine zweite Tag-Fassung.
- **Konsequenz für den Katalog:** Jedes Bündel wird gegen die **feste Buch-Stufe seines Themebooks** geschrieben und geprüft. Es braucht keine mehreren stufengerechten Fassungen desselben Motivs.
- **Variable Might** (Companion, Magic, Possessions): stehen standardmäßig auf Origin. Ihre Basis-Tags werden im **Origin-/Grundregister** geschrieben, weil eine Anhebung nach Adventure/Greatness mechanisch über das Marker-Tag läuft.

## 5. Power gegen Weakness

- **Spannung statt Aufhebung.** Power und Weakness eines Themes dürfen und sollen oft dieselbe Domäne betreffen (die Stärke hat einen Schatten, das erzeugt Drama), aber sie müssen in **unterschiedlichen Situationen** greifen, nicht als wortgleiche Spiegelbilder, die plausibel zugleich auf dieselbe Aktion zutreffen und sich zu einem Patt aufheben würden.
- Grundlage: LitM Vol. I, S. 76/152 und Tutorial. Eine ausgelöste Weakness ist kein bloßes −1, sie gibt dem Theme **Improve** (Hauptweg der Heldenentwicklung). Das Buch bestätigt zudem: Schwächen müssen nicht die Spiegelbilder der Stärken sein.

## 6. Quests

- **Titel.** Prägnantes Ich-Ziel oder prägnante Ziel-Formulierung. (Offen: Vereinheitlichung Ich-Satz gegen Nominalphrase, siehe unten.)
- **Beschreibung.** Liefert Hintergrund und Motivation. Wiederholt die Tags **nicht** wörtlich.

---

## Offene Punkte

- Quest-Titel-Format noch nicht vereinheitlicht (Ich-Ziel-Satz vs. evokative Nominalphrase). Beide Formen liegen aktuell im Katalog.
