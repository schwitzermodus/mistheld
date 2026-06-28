# Theme- & Tag-Übersicht zum Review

Vollständige Übersicht aller **Tags**, die der Generator ausgeben kann. Quelle: `src/data/themebooks.js`.
Alles, was im Spiel erscheint, wird aus diesem Katalog gezogen — diese Liste deckt also jede mögliche Ausgabe ab.

**Umfang dieser Runde:** nur Titel, Power-Tags und Weakness-Tags. Quests, Hooks und Core-Book-Leitfragen sind bewusst ausgelassen.

**ID-Schema:** `Themebook/T<Titel>/P<Power>` bzw. `/W<Weakness>` — z.B. `Circumstance/T1/P3`. Themebooks mit Leerzeichen nutzen Bindestriche in der ID (z.B. `Skill-or-Trade/T2/W1`).

**So gibst du Feedback:** Nenne einfach die ID und deinen Kommentar (z.B. „`People/T4/P2` zu generisch"). Ich leite aus deinem Feedback allgemeingültige Regeln ab und wende sie auf alle Themebooks an.

**Zu jedem Tag:** eine kurze Beschreibung und ein Beispiel — _Power:_ bei welcher Aktion der Tag **hilft**, _Weakness:_ bei welcher Aktion er **hindert**. Diese Texte sind eine **generierte Interpretation** (via `npm run tags:describe`), keine offizielle Quelle — genau dazu dein Korrektur-Feedback.

_Generiert mit `npm run catalog:export` — nicht von Hand editieren._

## Übersicht

| Themebook | Tier | Titel | Power | Weakness |
|---|---|--:|--:|--:|
| Circumstance | Origin | 12 | 60 | 36 |
| Devotion | Origin | 12 | 48 | 24 |
| Past | Origin | 12 | 49 | 25 |
| People | Origin | 12 | 48 | 24 |
| Personality | Origin | 12 | 48 | 24 |
| Skill or Trade | Origin | 12 | 49 | 24 |
| Trait | Origin | 12 | 48 | 24 |
| Duty | Adventure | 12 | 60 | 24 |
| Influence | Adventure | 12 | 48 | 24 |
| Knowledge | Adventure | 12 | 48 | 24 |
| Prodigious Ability | Adventure | 12 | 60 | 24 |
| Relic | Adventure | 12 | 48 | 24 |
| Uncanny Being | Adventure | 12 | 60 | 24 |
| Destiny | Greatness | 12 | 60 | 36 |
| Dominion | Greatness | 12 | 60 | 24 |
| Mastery | Greatness | 12 | 60 | 30 |
| Monstrosity | Greatness | 12 | 48 | 24 |
| Companion | Variable Might | 12 | 49 | 24 |
| Magic | Variable Might | 12 | 48 | 24 |
| Possessions | Variable Might | 12 | 48 | 24 |
| **Summe** | | **240** | **1047** | **511** |


---

# Tier: Origin

## Circumstance — Origin
ID-Präfix: `Circumstance`

### Circumstance/T1 — „gefallener Adel"
**Power:**
- `Circumstance/T1/P1` **standesgemäße Kleidung** — Edle, fein gearbeitete Garderobe, die hohen Stand auf den ersten Blick verrät. _Hilft z.B.:_ Um bei einer Festgesellschaft ohne Einladung für jemanden von Rang gehalten und eingelassen zu werden.
- `Circumstance/T1/P2` **Hofmanieren** — Sicheres Auftreten nach höfischer Etikette – Anrede, Verbeugung, Tischsitten. _Hilft z.B.:_ Um sich unter Adligen unauffällig zu bewegen und ein Gespräch mit einem Würdenträger zu eröffnen.
- `Circumstance/T1/P3` **Standesvorrecht** — Rechte und Privilegien, die dem Geburtsstand zustehen. _Hilft z.B.:_ Um sich auf altes Recht zu berufen und eine Wache zum Durchlass zu bewegen.
- `Circumstance/T1/P4` **verborgene Gönner** — Heimliche Förderer im Hintergrund, die Unterstützung zuspielen. _Hilft z.B.:_ Um in einer Notlage unerwartet an Geld, ein Versteck oder eine Fürsprache zu kommen.
- `Circumstance/T1/P5` **trägt ein falsches Siegel** — Ein gefälschtes Wappen- oder Amtssiegel, das Befugnisse vortäuscht. _Hilft z.B.:_ Um ein verschlossenes Stadttor oder Archiv mit gefälschter Vollmacht zu passieren.

**Weakness:**
- `Circumstance/T1/W1` **vom Standesdünkel verfolgt** — Hochmut und Standesgehabe stoßen andere ab. _Hindert z.B.:_ Wenn man auf die Hilfe einfacher Leute angewiesen ist, die der herablassende Ton verprellt.
- `Circumstance/T1/W2` **ein verfluchter Name** — Der eigene Name ist mit Schande oder Unheil behaftet. _Hindert z.B.:_ Wenn das Nennen des Namens Türen verschließt und Misstrauen weckt.
- `Circumstance/T1/W3` **drückende Schulden** — Hohe Schulden, deren Gläubiger im Nacken sitzen. _Hindert z.B.:_ Wenn Geldeintreiber im falschen Moment auftauchen und Druck machen.

### Circumstance/T2 — „flüchtiger Außenseiter"
**Power:**
- `Circumstance/T2/P1` **geht in der Menge unter** — Fällt in einer Menschenmenge sofort nicht mehr auf. _Hilft z.B.:_ Um Verfolger auf einem belebten Markt abzuschütteln, indem man in der Menge verschwindet.
- `Circumstance/T2/P2` **findet immer Unterschlupf** — Findet selbst in fremder Stadt rasch ein Dach über dem Kopf. _Hilft z.B.:_ Um nach Einbruch der Nacht in einer fremden Stadt sicher unterzukommen.
- `Circumstance/T2/P3` **kennt jeden Schleichweg** — Kennt Hintergassen, Abkürzungen und unbewachte Wege. _Hilft z.B.:_ Um unbemerkt durch ein abgeriegeltes Viertel zu gelangen.
- `Circumstance/T2/P4` **unauffällig** — Bleibt unscheinbar und prägt sich niemandem ein. _Hilft z.B.:_ Um an Wachen vorbeizukommen, ohne dass sich später jemand erinnert.
- `Circumstance/T2/P5` **sicheres Versteck** — Verfügt über einen verborgenen Rückzugsort. _Hilft z.B.:_ Um sich oder Beute vor Verfolgern in Sicherheit zu bringen.

**Weakness:**
- `Circumstance/T2/W1` **gehetzt von einer Macht** — Eine mächtige Instanz ist einem auf den Fersen. _Hindert z.B.:_ Wenn man sich nirgends lange aufhalten kann, ohne entdeckt zu werden.
- `Circumstance/T2/W2` **wird von alten Bekannten erkannt** — Frühere Bekannte können die Tarnung auffliegen lassen. _Hindert z.B.:_ Wenn man unerkannt bleiben will und ein alter Gefährte einen laut beim Namen ruft.
- `Circumstance/T2/W3` **verboten an manchen Orten** — Mancherorts ist einem der Zutritt untersagt. _Hindert z.B.:_ Wenn der Weg ausgerechnet durch eine Stadt führt, die einen verbannt hat.

### Circumstance/T3 — „Schankhaus-Schläger"
**Power:**
- `Circumstance/T3/P1` **Zunge wie ein Messer** — Schlagfertig und scharfzüngig im Wortgefecht. _Hilft z.B.:_ Um ein Großmaul in der Schänke vor allen bloßzustellen und einzuschüchtern.
- `Circumstance/T3/P2` **spricht die Sprache der Straße** — Beherrscht Jargon und Umgangston des einfachen Volks. _Hilft z.B.:_ Um sich unter Dieben und Tagelöhnern Vertrauen und Auskünfte zu verschaffen.
- `Circumstance/T3/P3` **ruhig in der Krise** — Bewahrt einen kühlen Kopf, wenn es brenzlig wird. _Hilft z.B.:_ Um in einer ausbrechenden Panik klar zu handeln und andere zu lenken.
- `Circumstance/T3/P4` **fester Schlag** — Schlägt im Faustkampf hart und wirkungsvoll zu. _Hilft z.B.:_ Um in einer Wirtshausschlägerei einen Gegner mit einem Hieb auszuschalten.
- `Circumstance/T3/P5` **loyale Leute** — Eine Handvoll Getreuer, die zu einem stehen. _Hilft z.B.:_ Um in der Klemme auf Helfer zählen zu können, die ohne Zögern beispringen.

**Weakness:**
- `Circumstance/T3/W1` **leicht zu provozieren** — Lässt sich schnell zu Zorn und Unbeherrschtheit reizen. _Hindert z.B.:_ Wenn ein Gegner einen mit Spott in einen Kampf lockt, den man vermeiden sollte.
- `Circumstance/T3/W2` **das Recht schützt sie nie** — Steht außerhalb des Schutzes von Gesetz und Obrigkeit. _Hindert z.B.:_ Wenn man Unrecht erleidet und keine Wache oder kein Gericht anrufen kann.
- `Circumstance/T3/W3` **drückende Schulden** — Hohe Schulden, deren Gläubiger im Nacken sitzen. _Hindert z.B.:_ Wenn Geldeintreiber im falschen Moment auftauchen und Druck machen.

### Circumstance/T4 — „einsamer Schänkengast"
**Power:**
- `Circumstance/T4/P1` **hört die Gerüchte zuerst** — Erfährt Neuigkeiten und Tratsch noch vor allen anderen. _Hilft z.B.:_ Um von einer geplanten Razzia oder einem Anschlag rechtzeitig Wind zu bekommen.
- `Circumstance/T4/P2` **leise Beobachtung** — Beobachtet aufmerksam und unbemerkt aus dem Hintergrund. _Hilft z.B.:_ Um aus einer Ecke heraus zu erkennen, wer bei einem Treffen die Fäden zieht.
- `Circumstance/T4/P3` **kennt jeden im Ort** — Kennt die Bewohner und ihre Verhältnisse genau. _Hilft z.B.:_ Um sofort zu wissen, an wen man sich für eine bestimmte Gefälligkeit wenden muss.
- `Circumstance/T4/P4` **durchschaut Masken** — Erkennt Verstellung, Lüge und falsche Freundlichkeit. _Hilft z.B.:_ Um einen Betrüger zu enttarnen, bevor man auf seinen Schwindel hereinfällt.
- `Circumstance/T4/P5` **kennt den Preis jeder Stille** — Weiß, wessen Schweigen womit zu erkaufen ist. _Hilft z.B.:_ Um eine heikle Information geheim zu halten, indem man die richtigen Leute besticht.

**Weakness:**
- `Circumstance/T4/W1` **gilt als Außenseiter** — Wird von der Gemeinschaft als Fremdkörper gesehen. _Hindert z.B.:_ Wenn man Hilfe braucht, die Gemeinschaft einen aber abweist.
- `Circumstance/T4/W2` **traut niemandem ganz** — Tiefes Misstrauen erschwert echte Bündnisse. _Hindert z.B.:_ Wenn man auf einen Verbündeten setzen müsste, aus Argwohn aber zögert.
- `Circumstance/T4/W3` **drückende Schulden** — Hohe Schulden, deren Gläubiger im Nacken sitzen. _Hindert z.B.:_ Wenn Geldeintreiber im falschen Moment auftauchen und Druck machen.

### Circumstance/T5 — „verlorenes Erbe"
**Power:**
- `Circumstance/T5/P1` **trägt ein falsches Siegel** — Ein gefälschtes Wappen- oder Amtssiegel, das Befugnisse vortäuscht. _Hilft z.B.:_ Um ein verschlossenes Stadttor oder Archiv mit gefälschter Vollmacht zu passieren.
- `Circumstance/T5/P2` **verborgene Gönner** — Heimliche Förderer im Hintergrund, die Unterstützung zuspielen. _Hilft z.B.:_ Um in einer Notlage unerwartet an Geld, ein Versteck oder eine Fürsprache zu kommen.
- `Circumstance/T5/P3` **kennt die dunklen Geheimnisse** — Weiß um verborgene Schandtaten und Skandale anderer. _Hilft z.B.:_ Um einen Mächtigen mit dem Wissen um seine Verfehlung gefügig zu machen.
- `Circumstance/T5/P4` **Gönner in der Hauptstadt** — Einflussreiche Fürsprecher in der Residenzstadt. _Hilft z.B.:_ Um über Beziehungen eine Audienz oder einen amtlichen Gefallen zu erwirken.
- `Circumstance/T5/P5` **Hofmanieren** — Sicheres Auftreten nach höfischer Etikette – Anrede, Verbeugung, Tischsitten. _Hilft z.B.:_ Um sich unter Adligen unauffällig zu bewegen und ein Gespräch mit einem Würdenträger zu eröffnen.

**Weakness:**
- `Circumstance/T5/W1` **ein verfluchter Name** — Der eigene Name ist mit Schande oder Unheil behaftet. _Hindert z.B.:_ Wenn das Nennen des Namens Türen verschließt und Misstrauen weckt.
- `Circumstance/T5/W2` **wird von alten Bekannten erkannt** — Frühere Bekannte können die Tarnung auffliegen lassen. _Hindert z.B.:_ Wenn man unerkannt bleiben will und ein alter Gefährte einen laut beim Namen ruft.
- `Circumstance/T5/W3` **vom Standesdünkel verfolgt** — Hochmut und Standesgehabe stoßen andere ab. _Hindert z.B.:_ Wenn man auf die Hilfe einfacher Leute angewiesen ist, die der herablassende Ton verprellt.

### Circumstance/T6 — „Stimme des Volkes"
**Power:**
- `Circumstance/T6/P1` **spricht für die Schwachen** — Erhebt glaubwürdig die Stimme für die Rechtlosen. _Hilft z.B.:_ Um eine eingeschüchterte Menge zu bewegen, gemeinsam gegen Unrecht aufzustehen.
- `Circumstance/T6/P2` **findet überall Verbündete** — Gewinnt schnell Menschen für die eigene Sache. _Hilft z.B.:_ Um in einer fremden Stadt rasch Helfer für ein Vorhaben zu sammeln.
- `Circumstance/T6/P3` **kennt jeden im Ort** — Kennt die Bewohner und ihre Verhältnisse genau. _Hilft z.B.:_ Um sofort zu wissen, an wen man sich für eine bestimmte Gefälligkeit wenden muss.
- `Circumstance/T6/P4` **beschwichtigender Tonfall** — Beruhigt mit ruhiger, versöhnlicher Stimme. _Hilft z.B.:_ Um einen aufgebrachten Streit zu schlichten, bevor er in Gewalt umschlägt.
- `Circumstance/T6/P5` **loyale Leute** — Eine Handvoll Getreuer, die zu einem stehen. _Hilft z.B.:_ Um in der Klemme auf Helfer zählen zu können, die ohne Zögern beispringen.

**Weakness:**
- `Circumstance/T6/W1` **gehetzt von einer Macht** — Eine mächtige Instanz ist einem auf den Fersen. _Hindert z.B.:_ Wenn man sich nirgends lange aufhalten kann, ohne entdeckt zu werden.
- `Circumstance/T6/W2` **gilt als Außenseiter** — Wird von der Gemeinschaft als Fremdkörper gesehen. _Hindert z.B.:_ Wenn man Hilfe braucht, die Gemeinschaft einen aber abweist.
- `Circumstance/T6/W3` **das Recht schützt sie nie** — Steht außerhalb des Schutzes von Gesetz und Obrigkeit. _Hindert z.B.:_ Wenn man Unrecht erleidet und keine Wache oder kein Gericht anrufen kann.

### Circumstance/T7 — „verbannter Ritter"
**Power:**
- `Circumstance/T7/P1` **standesgemäße Kleidung** — Edle, fein gearbeitete Garderobe, die hohen Stand auf den ersten Blick verrät. _Hilft z.B.:_ Um bei einer Festgesellschaft ohne Einladung für jemanden von Rang gehalten zu werden.
- `Circumstance/T7/P2` **Standesvorrecht** — Rechte und Privilegien, die dem Geburtsstand zustehen. _Hilft z.B.:_ Um sich auf altes Recht zu berufen und eine Wache zum Durchlass zu bewegen.
- `Circumstance/T7/P3` **ruhig in der Krise** — Bewahrt einen kühlen Kopf, wenn es brenzlig wird. _Hilft z.B.:_ Um in einer ausbrechenden Panik klar zu handeln und andere zu lenken.
- `Circumstance/T7/P4` **geübtes Schwert** — Solide, im Gefecht erprobte Klingenführung. _Hilft z.B.:_ Um sich in einem Zweikampf gegen einen gewöhnlichen Gegner zu behaupten.
- `Circumstance/T7/P5` **Hofmanieren** — Sicheres Auftreten nach höfischer Etikette – Anrede, Verbeugung, Tischsitten. _Hilft z.B.:_ Um sich unter Adligen unauffällig zu bewegen und ein Gespräch mit einem Würdenträger zu eröffnen.

**Weakness:**
- `Circumstance/T7/W1` **ein verfluchter Name** — Der eigene Name ist mit Schande oder Unheil behaftet. _Hindert z.B.:_ Wenn das Nennen des Namens Türen verschließt und Misstrauen weckt.
- `Circumstance/T7/W2` **vom Standesdünkel verfolgt** — Hochmut und Standesgehabe stoßen andere ab. _Hindert z.B.:_ Wenn man auf die Hilfe einfacher Leute angewiesen ist, die der herablassende Ton verprellt.
- `Circumstance/T7/W3` **verboten an manchen Orten** — Mancherorts ist einem der Zutritt untersagt. _Hindert z.B.:_ Wenn der Weg ausgerechnet durch eine Stadt führt, die einen verbannt hat.

### Circumstance/T8 — „Tochter des Schmieds"
**Power:**
- `Circumstance/T8/P1` **kennt jeden im Ort** — Kennt die Bewohner und ihre Verhältnisse genau. _Hilft z.B.:_ Um sofort zu wissen, an wen man sich für eine bestimmte Gefälligkeit wenden muss.
- `Circumstance/T8/P2` **fester Griff am Eisen** — Kräftige, sichere Hand bei der Schmiedearbeit. _Hilft z.B.:_ Um glühendes Metall ruhig und präzise in Form zu hämmern.
- `Circumstance/T8/P3` **prüfender Blick für Stahl** — Erkennt Güte und Schwächen von Metall auf einen Blick. _Hilft z.B.:_ Um eine minderwertige oder verborgen schadhafte Klinge sofort zu entlarven.
- `Circumstance/T8/P4` **lebt vom Wenigen** — Kommt mit kargen Mitteln gut zurecht. _Hilft z.B.:_ Um eine lange Notzeit ohne Vorräte und Geld zu überstehen.
- `Circumstance/T8/P5` **loyale Leute** — Eine Handvoll Getreuer, die zu einem stehen. _Hilft z.B.:_ Um in der Klemme auf Helfer zählen zu können, die ohne Zögern beispringen.

**Weakness:**
- `Circumstance/T8/W1` **gebrochene Hände** — Verletzte, schmerzende Hände schränken die Arbeit ein. _Hindert z.B.:_ Wenn feines Werkeln oder fester Zugriff gefragt ist und die Hände versagen.
- `Circumstance/T8/W2` **drückende Schulden** — Hohe Schulden, deren Gläubiger im Nacken sitzen. _Hindert z.B.:_ Wenn Geldeintreiber im falschen Moment auftauchen und Druck machen.
- `Circumstance/T8/W3` **kennt nur die Werkstatt** — Die Lebenswelt beschränkt sich auf das eigene Handwerk. _Hindert z.B.:_ Wenn man sich in höfischen oder fremden Kreisen bewegen müsste und hilflos wirkt.

### Circumstance/T9 — „fahrende Händlerin"
**Power:**
- `Circumstance/T9/P1` **findet immer Unterschlupf** — Findet selbst in fremder Stadt rasch ein Dach über dem Kopf. _Hilft z.B.:_ Um nach Einbruch der Nacht in einer fremden Stadt sicher unterzukommen.
- `Circumstance/T9/P2` **hört die Gerüchte zuerst** — Erfährt Neuigkeiten und Tratsch noch vor allen anderen. _Hilft z.B.:_ Um von einer geplanten Razzia oder einem Anschlag rechtzeitig Wind zu bekommen.
- `Circumstance/T9/P3` **kennt jeden Schleichweg** — Kennt Hintergassen, Abkürzungen und unbewachte Wege. _Hilft z.B.:_ Um unbemerkt durch ein abgeriegeltes Viertel zu gelangen.
- `Circumstance/T9/P4` **beschwichtigender Tonfall** — Beruhigt mit ruhiger, versöhnlicher Stimme. _Hilft z.B.:_ Um einen aufgebrachten Streit zu schlichten, bevor er in Gewalt umschlägt.
- `Circumstance/T9/P5` **durchschaut Masken** — Erkennt Verstellung, Lüge und falsche Freundlichkeit. _Hilft z.B.:_ Um einen Betrüger zu enttarnen, bevor man auf seinen Schwindel hereinfällt.

**Weakness:**
- `Circumstance/T9/W1` **drückende Schulden** — Hohe Schulden, deren Gläubiger im Nacken sitzen. _Hindert z.B.:_ Wenn Geldeintreiber im falschen Moment auftauchen und Druck machen.
- `Circumstance/T9/W2` **gehetzt von einer Macht** — Eine mächtige Instanz ist einem auf den Fersen. _Hindert z.B.:_ Wenn man sich nirgends lange aufhalten kann, ohne entdeckt zu werden.
- `Circumstance/T9/W3` **verboten an manchen Orten** — Mancherorts ist einem der Zutritt untersagt. _Hindert z.B.:_ Wenn der Weg ausgerechnet durch eine Stadt führt, die einen verbannt hat.

### Circumstance/T10 — „Dorfaußenseiter mit Weitblick"
**Power:**
- `Circumstance/T10/P1` **leise Beobachtung** — Beobachtet aufmerksam und unbemerkt aus dem Hintergrund. _Hilft z.B.:_ Um aus der Ferne zu erkennen, dass mit einem Fremden etwas nicht stimmt.
- `Circumstance/T10/P2` **ein Zufluchtsort** — Ein abgelegener Ort, an den man sich zurückziehen kann. _Hilft z.B.:_ Um Verfolgten einen sicheren Unterschlupf abseits der Wege zu bieten.
- `Circumstance/T10/P3` **durchschaut Masken** — Erkennt Verstellung, Lüge und falsche Freundlichkeit. _Hilft z.B.:_ Um einen Betrüger zu enttarnen, bevor man auf seinen Schwindel hereinfällt.
- `Circumstance/T10/P4` **überlebt jede Not** — Zäh und findig im nackten Überleben. _Hilft z.B.:_ Um sich in der Wildnis ohne Ausrüstung durchzuschlagen.
- `Circumstance/T10/P5` **kennt jeden Schleichweg** — Kennt Hintergassen, Abkürzungen und unbewachte Wege. _Hilft z.B.:_ Um unbemerkt durch ein abgeriegeltes Viertel zu gelangen.

**Weakness:**
- `Circumstance/T10/W1` **gilt als Außenseiter** — Wird von der Gemeinschaft als Fremdkörper gesehen. _Hindert z.B.:_ Wenn man Hilfe braucht, die Gemeinschaft einen aber abweist.
- `Circumstance/T10/W2` **traut niemandem ganz** — Tiefes Misstrauen erschwert echte Bündnisse. _Hindert z.B.:_ Wenn man auf einen Verbündeten setzen müsste, aus Argwohn aber zögert.
- `Circumstance/T10/W3` **wird belächelt im Dorf** — Wird von den Dorfbewohnern nicht ernst genommen. _Hindert z.B.:_ Wenn man vor einer Gefahr warnt, aber niemand auf einen hört.

### Circumstance/T11 — „Wanderprediger ohne Gemeinde"
**Power:**
- `Circumstance/T11/P1` **findet immer Unterschlupf** — Findet selbst in fremder Stadt rasch ein Dach über dem Kopf. _Hilft z.B.:_ Um nach Einbruch der Nacht in einer fremden Stadt sicher unterzukommen.
- `Circumstance/T11/P2` **spricht für die Schwachen** — Erhebt glaubwürdig die Stimme für die Rechtlosen. _Hilft z.B.:_ Um eine eingeschüchterte Menge zu bewegen, gemeinsam gegen Unrecht aufzustehen.
- `Circumstance/T11/P3` **findet überall Verbündete** — Gewinnt schnell Menschen für die eigene Sache. _Hilft z.B.:_ Um in einer fremden Stadt rasch Helfer für ein Vorhaben zu sammeln.
- `Circumstance/T11/P4` **tröstende Worte** — Spendet mit Worten Trost und Zuversicht. _Hilft z.B.:_ Um einem Verzweifelten neuen Mut zu geben, weiterzumachen.
- `Circumstance/T11/P5` **lebt vom Wenigen** — Kommt mit kargen Mitteln gut zurecht. _Hilft z.B.:_ Um eine lange Notzeit ohne Vorräte und Geld zu überstehen.

**Weakness:**
- `Circumstance/T11/W1` **gilt als Außenseiter** — Wird von der Gemeinschaft als Fremdkörper gesehen. _Hindert z.B.:_ Wenn man Hilfe braucht, die Gemeinschaft einen aber abweist.
- `Circumstance/T11/W2` **verboten an manchen Orten** — Mancherorts ist einem der Zutritt untersagt. _Hindert z.B.:_ Wenn der Weg ausgerechnet durch eine Stadt führt, die einen vertrieben hat.
- `Circumstance/T11/W3` **traut niemandem ganz** — Tiefes Misstrauen erschwert echte Bündnisse. _Hindert z.B.:_ Wenn man auf einen Verbündeten setzen müsste, aus Argwohn aber zögert.

### Circumstance/T12 — „freie Leibeigene"
**Power:**
- `Circumstance/T12/P1` **überlebt jede Not** — Zäh und findig im nackten Überleben. _Hilft z.B.:_ Um sich in der Wildnis ohne Ausrüstung durchzuschlagen.
- `Circumstance/T12/P2` **lebt vom Wenigen** — Kommt mit kargen Mitteln gut zurecht. _Hilft z.B.:_ Um eine lange Notzeit ohne Vorräte und Geld zu überstehen.
- `Circumstance/T12/P3` **ruhig in der Krise** — Bewahrt einen kühlen Kopf, wenn es brenzlig wird. _Hilft z.B.:_ Um in einer ausbrechenden Panik klar zu handeln und andere zu lenken.
- `Circumstance/T12/P4` **ein sicheres Versteck** — Verfügt über einen verborgenen Rückzugsort. _Hilft z.B.:_ Um sich oder andere vor Verfolgern in Sicherheit zu bringen.
- `Circumstance/T12/P5` **loyale Leute** — Eine Handvoll Getreuer, die zu einem stehen. _Hilft z.B.:_ Um in der Klemme auf Helfer zählen zu können, die ohne Zögern beispringen.

**Weakness:**
- `Circumstance/T12/W1` **das Recht schützt sie nie** — Steht außerhalb des Schutzes von Gesetz und Obrigkeit. _Hindert z.B.:_ Wenn man Unrecht erleidet und keine Wache oder kein Gericht anrufen kann.
- `Circumstance/T12/W2` **wird von alten Bekannten erkannt** — Frühere Bekannte können die Tarnung auffliegen lassen. _Hindert z.B.:_ Wenn man unerkannt bleiben will und ein alter Bekannter einen laut beim Namen ruft.
- `Circumstance/T12/W3` **gehetzt von einer Macht** — Eine mächtige Instanz ist einem auf den Fersen. _Hindert z.B.:_ Wenn man sich nirgends lange aufhalten kann, ohne entdeckt zu werden.


## Devotion — Origin
ID-Präfix: `Devotion`

### Devotion/T1 — „Schwertschwur"
**Power:**
- `Devotion/T1/P1` **Schwur ablegen**
- `Devotion/T1/P2` **betet vor dem Kampf**
- `Devotion/T1/P3` **hält ihr Wort**
- `Devotion/T1/P4` **unbeirrbar im Eid**

**Weakness:**
- `Devotion/T1/W1` **darf nicht fliehen**
- `Devotion/T1/W2` **Schwur über Vernunft**

### Devotion/T2 — „werdender Ritter"
**Power:**
- `Devotion/T2/P1` **Mut sammeln**
- `Devotion/T2/P2` **schreitet mutig ein**
- `Devotion/T2/P3` **Schutzschild für die Schwachen**
- `Devotion/T2/P4` **hält durch bis zuletzt**

**Weakness:**
- `Devotion/T2/W1` **blind durch Ehre**
- `Devotion/T2/W2` **leidet an jedem Versagen**

### Devotion/T3 — „Verteidiger des Dorfes"
**Power:**
- `Devotion/T3/P1` **schützt mit dem eigenen Leib**
- `Devotion/T3/P2` **kennt jeden Schutzbefohlenen**
- `Devotion/T3/P3` **hält die Wache allein**
- `Devotion/T3/P4` **sammelt die Dörfler**

**Weakness:**
- `Devotion/T3/W1` **kann nicht fortgehen**
- `Devotion/T3/W2` **trägt jede Not allein**

### Devotion/T4 — „Diener der Göttin"
**Power:**
- `Devotion/T4/P1` **kennt jedes Gebet**
- `Devotion/T4/P2` **Ritualgesang**
- `Devotion/T4/P3` **hält ein heiliges Symbol**
- `Devotion/T4/P4` **Zeichen gegen das Böse**

**Weakness:**
- `Devotion/T4/W1` **blind durch Hingabe**
- `Devotion/T4/W2` **die Pflicht verschlingt die Zeit**

### Devotion/T5 — „Pflegerin der Kranken"
**Power:**
- `Devotion/T5/P1` **kennt heilende Kräuter**
- `Devotion/T5/P2` **einfache Heilkunst**
- `Devotion/T5/P3` **heilende Hände**
- `Devotion/T5/P4` **beruhigt die Fiebrigen**

**Weakness:**
- `Devotion/T5/W1` **fremder Schmerz wird ihrer**
- `Devotion/T5/W2` **vergisst sich selbst**

### Devotion/T6 — „Liebe meines Lebens"
**Power:**
- `Devotion/T6/P1` **erinnert sich an einen Schwur**
- `Devotion/T6/P2` **gibt ihr Letztes**
- `Devotion/T6/P3` **nimmt Wunden für andere**
- `Devotion/T6/P4` **unverbrüchliche Treue**

**Weakness:**
- `Devotion/T6/W1` **kann nicht loslassen**
- `Devotion/T6/W2` **alles für den einen Menschen**

### Devotion/T7 — „Hüterin des Tempels"
**Power:**
- `Devotion/T7/P1` **kennt die alten heiligen Orte**
- `Devotion/T7/P2` **spricht für die Stille**
- `Devotion/T7/P3` **bewahrt heilige Riten**
- `Devotion/T7/P4` **liest verborgene Zeichen**

**Weakness:**
- `Devotion/T7/W1` **an den Ort gebunden**
- `Devotion/T7/W2` **ihr Glaube wird ausgenutzt**

### Devotion/T8 — „Schwester des Ordens"
**Power:**
- `Devotion/T8/P1` **erinnert sich an einen Schwur**
- `Devotion/T8/P2` **loyale Ordensbrüder**
- `Devotion/T8/P3` **kennt die Regel des Ordens**
- `Devotion/T8/P4` **Segen sprechen**

**Weakness:**
- `Devotion/T8/W1` **an Gehorsam gebunden**
- `Devotion/T8/W2` **die Pflicht verschlingt die Zeit**

### Devotion/T9 — „letzter Wächter"
**Power:**
- `Devotion/T9/P1` **hält durch bis zuletzt**
- `Devotion/T9/P2` **hält die Stellung allein**
- `Devotion/T9/P3` **schmerzhaft ehrlich**
- `Devotion/T9/P4` **weicht keinen Schritt**

**Weakness:**
- `Devotion/T9/W1` **darf nicht fliehen**
- `Devotion/T9/W2` **trägt die Last allein**

### Devotion/T10 — „Wächterin am Tor"
**Power:**
- `Devotion/T10/P1` **durchschaut jeden Eindringling**
- `Devotion/T10/P2` **steht fest im Durchgang**
- `Devotion/T10/P3` **kennt jede Losung**
- `Devotion/T10/P4` **wachsam bei jedem Geräusch**

**Weakness:**
- `Devotion/T10/W1` **darf den Posten nicht räumen**
- `Devotion/T10/W2` **misstraut jedem Fremden**

### Devotion/T11 — „Verbündete der Ausgestoßenen"
**Power:**
- `Devotion/T11/P1` **erkennt verborgene Verzweiflung**
- `Devotion/T11/P2` **sammelt Almosen für andere**
- `Devotion/T11/P3` **tröstet die Verzagten**
- `Devotion/T11/P4` **findet überall Verbündete**

**Weakness:**
- `Devotion/T11/W1` **kann nicht Nein sagen**
- `Devotion/T11/W2` **selbst gemieden**

### Devotion/T12 — „Heilerin ohne Lohn"
**Power:**
- `Devotion/T12/P1` **kennt heilende Kräuter**
- `Devotion/T12/P2` **heilende Hände**
- `Devotion/T12/P3` **beruhigt Sterbende**
- `Devotion/T12/P4` **gibt ihr Letztes**

**Weakness:**
- `Devotion/T12/W1` **kaum genug zum Leben**
- `Devotion/T12/W2` **kann keine Bitte abschlagen**


## Past — Origin
ID-Präfix: `Past`

### Past/T1 — „verflucht"
**Power:**
- `Past/T1/P1` **spürt einen Fluch**
- `Past/T1/P2` **Zeichen gegen Unheil**
- `Past/T1/P3` **warnende Erinnerungen**
- `Past/T1/P4` **trotzt dem Schlimmsten**

**Weakness:**
- `Past/T1/W1` **das Mal des Fluches**
- `Past/T1/W2` **wehrlos an bestimmten Orten**
- `Past/T1/W3` **wiederkehrende Albträume**

### Past/T2 — „im Krieg geschmiedet"
**Power:**
- `Past/T2/P1` **narbiger Schwertarm**
- `Past/T2/P2` **kennt das Schlachtfeld**
- `Past/T2/P3` **wittert eine Falle**
- `Past/T2/P4` **Blick fürs Schlimmste**
- `Past/T2/P5` **abgehärtet vom Schlimmsten**

**Weakness:**
- `Past/T2/W1` **verfolgt von alten Feinden**
- `Past/T2/W2` **schmerzende Erinnerung**

### Past/T3 — „letzter meines Volkes"
**Power:**
- `Past/T3/P1` **spricht eine vergessene Zunge**
- `Past/T3/P2` **kennt die Namen der Toten**
- `Past/T3/P3` **Sprache der Verlorenen**
- `Past/T3/P4` **einst gelernte Liturgie**

**Weakness:**
- `Past/T3/W1` **lebt in der Vergangenheit**
- `Past/T3/W2` **traut nur Vertrauten von einst**

### Past/T4 — „mystischer Pilger"
**Power:**
- `Past/T4/P1` **findet immer Orientierung**
- `Past/T4/P2` **reist mit leichtem Gepäck**
- `Past/T4/P3` **kennt heilige Wege**
- `Past/T4/P4` **liest die Zeichen**

**Weakness:**
- `Past/T4/W1` **nirgends lange zu Hause**
- `Past/T4/W2` **als Fremder beäugt**

### Past/T5 — „aus den Trümmern"
**Power:**
- `Past/T5/P1` **hat die Ruinen gesehen**
- `Past/T5/P2` **durchgemacht und überlebt**
- `Past/T5/P3` **lernt aus jedem Fehler**
- `Past/T5/P4` **überlebt jede Not**

**Weakness:**
- `Past/T5/W1` **bleibende Schuld**
- `Past/T5/W2` **kann nicht loslassen**

### Past/T6 — „der Heimkehrer"
**Power:**
- `Past/T6/P1` **kennt den Weg zurück**
- `Past/T6/P2` **getragene Reisetracht**
- `Past/T6/P3` **altes Andenken**
- `Past/T6/P4` **findet alte Verbündete**

**Weakness:**
- `Past/T6/W1` **daheim hat sich alles verändert**
- `Past/T6/W2` **wird von alten Bekannten erkannt**

### Past/T7 — „Feuerüberlebende"
**Power:**
- `Past/T7/P1` **Andenken eines Toten**
- `Past/T7/P2` **eiserner Wille**
- `Past/T7/P3` **eine Lektion aus Leid**
- `Past/T7/P4` **wacht beim leisesten Geräusch**

**Weakness:**
- `Past/T7/W1` **schmerzende Erinnerung**
- `Past/T7/W2` **wehrlos vor Flammen**

### Past/T8 — „entflohener Gefangener"
**Power:**
- `Past/T8/P1` **kennt den Preis des Aufgebens**
- `Past/T8/P2` **geht in der Menge unter**
- `Past/T8/P3` **sieht durch Lügen**
- `Past/T8/P4` **überlebt jede Not**

**Weakness:**
- `Past/T8/W1` **verfolgt von alten Feinden**
- `Past/T8/W2` **traut niemandem ganz**

### Past/T9 — „Kriegskind"
**Power:**
- `Past/T9/P1` **abgehärtet vom Schlimmsten**
- `Past/T9/P2` **Blick fürs Schlimmste**
- `Past/T9/P3` **trägt Narben mit Würde**
- `Past/T9/P4` **wittert eine Falle**

**Weakness:**
- `Past/T9/W1` **wiederkehrende Albträume**
- `Past/T9/W2` **kennt nur den Krieg**

### Past/T10 — „einzige Mitwisserin"
**Power:**
- `Past/T10/P1` **sieht durch Lügen**
- `Past/T10/P2` **kennt die Namen der Toten**
- `Past/T10/P3` **eine Lektion aus Leid**
- `Past/T10/P4` **hört wo andere schweigen**

**Weakness:**
- `Past/T10/W1` **wird gejagt um ihr Wissen**
- `Past/T10/W2` **traut nur Vertrauten von einst**

### Past/T11 — „getriebene ohne Heimat"
**Power:**
- `Past/T11/P1` **reist mit leichtem Gepäck**
- `Past/T11/P2` **findet immer Orientierung**
- `Past/T11/P3` **findet überall Unterschlupf**
- `Past/T11/P4` **abgehärtet vom Schlimmsten**

**Weakness:**
- `Past/T11/W1` **nirgends willkommen**
- `Past/T11/W2` **kann nicht loslassen**

### Past/T12 — „wer alles zurückließ"
**Power:**
- `Past/T12/P1` **lebt vom Wenigen**
- `Past/T12/P2` **kennt den Preis des Aufgebens**
- `Past/T12/P3` **altes Andenken**
- `Past/T12/P4` **durchgemacht und überlebt**

**Weakness:**
- `Past/T12/W1` **bleibende Schuld**
- `Past/T12/W2` **lebt in der Vergangenheit**


## People — Origin
ID-Präfix: `People`

### People/T1 — „Sylvenelf"
**Power:**
- `People/T1/P1` **kennt die Sitten meines Volkes**
- `People/T1/P2` **die Sprache der Ahnen**
- `People/T1/P3` **leiser Schritt**
- `People/T1/P4` **sieht im Dunkeln**

**Weakness:**
- `People/T1/W1` **misstrauisch gegen Fremde**
- `People/T1/W2` **fremde Sitten überfordern sie**

### People/T2 — „Highlanderin"
**Power:**
- `People/T2/P1` **unerwartete Stärke**
- `People/T2/P2` **Schwert meines Volkes**
- `People/T2/P3` **heimischer Boden gibt Kraft**
- `People/T2/P4` **wettergegerbte Haut**

**Weakness:**
- `People/T2/W1` **gemieden in dieser Gegend**
- `People/T2/W2` **loyaler als vernünftig**

### People/T3 — „Battlerider"
**Power:**
- `People/T3/P1` **Bogen meines Volkes**
- `People/T3/P2` **angeborene Schnelligkeit**
- `People/T3/P3` **Affinität zu Tieren**
- `People/T3/P4` **sitzt fest im Sattel**

**Weakness:**
- `People/T3/W1` **aus dem Element gerissen**
- `People/T3/W2` **loyaler als vernünftig**

### People/T4 — „Hexenblut"
**Power:**
- `People/T4/P1` **wittert Unrecht sofort**
- `People/T4/P2` **kennt verborgene Heilpflanzen**
- `People/T4/P3` **altertümliches Lied**
- `People/T4/P4` **trägt das Wissen der Alten**

**Weakness:**
- `People/T4/W1` **auffälliges Merkmal**
- `People/T4/W2` **gemieden in dieser Gegend**

### People/T5 — „Karawanenvolk"
**Power:**
- `People/T5/P1` **Tanz mit tiefer Bedeutung**
- `People/T5/P2` **Körpersprache nur für Eingeweihte**
- `People/T5/P3` **findet immer Orientierung**
- `People/T5/P4` **entfacht Feuer überall**

**Weakness:**
- `People/T5/W1` **gemieden in dieser Gegend**
- `People/T5/W2` **spricht mit fremdem Akzent**

### People/T6 — „Bibervolk"
**Power:**
- `People/T6/P1` **Werkzeug aus der Heimat**
- `People/T6/P2` **taucht und schwimmt mühelos**
- `People/T6/P3` **baut Dämme und Unterschlüpfe**
- `People/T6/P4` **kennt die Zeichen des Wetters**

**Weakness:**
- `People/T6/W1` **auffälliges Merkmal**
- `People/T6/W2` **misstrauisch gegen Fremde**

### People/T7 — „Fjordgeborene"
**Power:**
- `People/T7/P1` **überlebt in unwirtlichen Gebieten**
- `People/T7/P2` **wettergegerbte Haut**
- `People/T7/P3` **kennt die Zeichen des Wetters**
- `People/T7/P4` **seefest und sicher zu Schiff**

**Weakness:**
- `People/T7/W1` **aus dem Element gerissen**
- `People/T7/W2` **blind für fremde Bräuche**

### People/T8 — „Tochter der Wanderer"
**Power:**
- `People/T8/P1` **findet immer Orientierung**
- `People/T8/P2` **seelenbewegender Gesang**
- `People/T8/P3` **erkennt Gast und Eindringling**
- `People/T8/P4` **findet überall Unterschlupf**

**Weakness:**
- `People/T8/W1` **spricht mit fremdem Akzent**
- `People/T8/W2` **gemieden in dieser Gegend**

### People/T9 — „Küstenkind"
**Power:**
- `People/T9/P1` **taucht und schwimmt mühelos**
- `People/T9/P2` **kennt die Zeichen des Wetters**
- `People/T9/P3` **angeborener Sinn für Spuren**
- `People/T9/P4` **liest die Gezeiten**

**Weakness:**
- `People/T9/W1` **aus dem Element gerissen**
- `People/T9/W2` **fremde Sitten überfordern sie**

### People/T10 — „Sumpfbewohner"
**Power:**
- `People/T10/P1` **überlebt in unwirtlichen Gebieten**
- `People/T10/P2` **kennt verborgene Heilpflanzen**
- `People/T10/P3` **angeborener Sinn für Spuren**
- `People/T10/P4` **leiser Schritt**

**Weakness:**
- `People/T10/W1` **gemieden in dieser Gegend**
- `People/T10/W2` **misstrauisch gegen Fremde**

### People/T11 — „Halbblut zwischen zwei Welten"
**Power:**
- `People/T11/P1` **kennt die Sitten zweier Völker**
- `People/T11/P2` **erkennt Gast und Eindringling**
- `People/T11/P3` **die Sprache der Ahnen**
- `People/T11/P4` **vermittelt zwischen Fremden**

**Weakness:**
- `People/T11/W1` **gemieden in dieser Gegend**
- `People/T11/W2` **auffälliges Merkmal**

### People/T12 — „aus dem fernen Osten"
**Power:**
- `People/T12/P1` **trägt das Wissen der Alten**
- `People/T12/P2` **Körpersprache nur für Eingeweihte**
- `People/T12/P3` **altertümliches Lied**
- `People/T12/P4` **kennt ferne Sitten und Wege**

**Weakness:**
- `People/T12/W1` **spricht mit fremdem Akzent**
- `People/T12/W2` **fremde Sitten überfordern sie**


## Personality — Origin
ID-Präfix: `Personality`

### Personality/T1 — „Herz aus Gold"
**Power:**
- `Personality/T1/P1` **gibt sein Letztes**
- `Personality/T1/P2` **erkennt verborgene Not**
- `Personality/T1/P3` **trägt keinen Groll**
- `Personality/T1/P4` **macht Mut zum Aufstehen**

**Weakness:**
- `Personality/T1/W1` **ausnutzbar**
- `Personality/T1/W2` **nimmt sich alles zu Herzen**

### Personality/T2 — „das goldene Lächeln"
**Power:**
- `Personality/T2/P1` **einnehmendes Lächeln**
- `Personality/T2/P2` **plaudert sich aus jeder Lage**
- `Personality/T2/P3` **bringt jeden zum Reden**
- `Personality/T2/P4` **liest Räume sofort**

**Weakness:**
- `Personality/T2/W1` **erwartet Anerkennung**
- `Personality/T2/W2` **spricht zu viel**

### Personality/T3 — „mürrisch wie Stein"
**Power:**
- `Personality/T3/P1` **Sturheit als Tugend**
- `Personality/T3/P2` **einschüchterndes Auftreten**
- `Personality/T3/P3` **kalter Blick**
- `Personality/T3/P4` **gibt nie vorzeitig auf**

**Weakness:**
- `Personality/T3/W1` **leicht zu provozieren**
- `Personality/T3/W2` **verschreckt mit der schroffen Art**

### Personality/T4 — „geübte Lügnerin"
**Power:**
- `Personality/T4/P1` **durchschaut eine Lüge**
- `Personality/T4/P2` **plaudert sich aus jeder Lage**
- `Personality/T4/P3` **trägt jede Maske glaubhaft**
- `Personality/T4/P4` **behält die Ruhe**

**Weakness:**
- `Personality/T4/W1` **misstraut der eigenen Geschichte**
- `Personality/T4/W2` **wird beim Wort genommen**

### Personality/T5 — „unstillbar neugierig"
**Power:**
- `Personality/T5/P1` **kennt die richtige Frage**
- `Personality/T5/P2` **fragt im richtigen Moment**
- `Personality/T5/P3` **keine Gerüchte entgehen mir**
- `Personality/T5/P4` **merkt sich jede Einzelheit**

**Weakness:**
- `Personality/T5/W1` **verliert sich in Details**
- `Personality/T5/W2` **steckt die Nase in Fremdes**

### Personality/T6 — „tröstet die Welt"
**Power:**
- `Personality/T6/P1` **einfühlsame Stille**
- `Personality/T6/P2` **gibt anderen Hoffnung**
- `Personality/T6/P3` **gibt guten Rat**
- `Personality/T6/P4` **verbreitet Zuversicht**

**Weakness:**
- `Personality/T6/W1` **leidet unter Misstimmung**
- `Personality/T6/W2` **vergisst die eigenen Sorgen**

### Personality/T7 — „gefährlich gutgläubig"
**Power:**
- `Personality/T7/P1` **sieht das Gute im Menschen**
- `Personality/T7/P2` **macht Mut zum Aufstehen**
- `Personality/T7/P3` **trägt keinen Groll**
- `Personality/T7/P4` **gewinnt schnell Vertrauen**

**Weakness:**
- `Personality/T7/W1` **ausnutzbar**
- `Personality/T7/W2` **läuft in offene Fallen**

### Personality/T8 — „das ruhige Auge im Sturm"
**Power:**
- `Personality/T8/P1` **behält die Ruhe**
- `Personality/T8/P2` **stellt sich dem Konflikt**
- `Personality/T8/P3` **ordnet das Chaos**
- `Personality/T8/P4` **gibt anderen Halt**

**Weakness:**
- `Personality/T8/W1` **staut alles in sich auf**
- `Personality/T8/W2` **wirkt unnahbar kühl**

### Personality/T9 — „kein Blatt vor dem Mund"
**Power:**
- `Personality/T9/P1` **sucht nach der Wahrheit**
- `Personality/T9/P2` **spricht aus was alle denken**
- `Personality/T9/P3` **lässt sich nicht einschüchtern**
- `Personality/T9/P4` **durchschaut eine Lüge**

**Weakness:**
- `Personality/T9/W1` **zu ehrlich**
- `Personality/T9/W2` **macht sich Feinde mit Worten**

### Personality/T10 — „lacht zuletzt"
**Power:**
- `Personality/T10/P1` **Lacher in dunkler Stunde**
- `Personality/T10/P2` **frohe Geschichte**
- `Personality/T10/P3` **findet überall Komik**
- `Personality/T10/P4` **spielt den Narren**

**Weakness:**
- `Personality/T10/W1` **macht alles ins Lächerliche**
- `Personality/T10/W2` **sentimental im falschen Moment**

### Personality/T11 — „hält Geheimnisse wie Atemluft"
**Power:**
- `Personality/T11/P1` **verrät niemals ein Wort**
- `Personality/T11/P2` **keine Gerüchte entgehen mir**
- `Personality/T11/P3` **behält die Ruhe**
- `Personality/T11/P4` **liest Räume sofort**

**Weakness:**
- `Personality/T11/W1` **trägt zu viele Lasten allein**
- `Personality/T11/W2` **erpressbar durch das Gewusste**

### Personality/T12 — „verhängnisvoll neugierig"
**Power:**
- `Personality/T12/P1` **kennt die richtige Frage**
- `Personality/T12/P2` **spürt dem Verborgenen nach**
- `Personality/T12/P3` **fragt im richtigen Moment**
- `Personality/T12/P4` **gibt nie vorzeitig auf**

**Weakness:**
- `Personality/T12/W1` **weckt schlafende Hunde**
- `Personality/T12/W2` **verliert sich in Details**


## Skill or Trade — Origin
ID-Präfix: `Skill-or-Trade`

### Skill-or-Trade/T1 — „Hinterland-Spurenleser"
**Power:**
- `Skill-or-Trade/T1/P1` **kennt jede Spur im Wald**
- `Skill-or-Trade/T1/P2` **liest die Karte**
- `Skill-or-Trade/T1/P3` **wittert eine Falle**
- `Skill-or-Trade/T1/P4` **findet immer Orientierung**

**Weakness:**
- `Skill-or-Trade/T1/W1` **kennt nur die Wildnis**
- `Skill-or-Trade/T1/W2` **misstrauisch beobachtet**

### Skill-or-Trade/T2 — „Schmied der Berge"
**Power:**
- `Skill-or-Trade/T2/P1` **meisterhaft an der Esse**
- `Skill-or-Trade/T2/P2` **Stahl bis zur Klinge**
- `Skill-or-Trade/T2/P3` **kennt jedes Material**
- `Skill-or-Trade/T2/P4` **fester Griff**
- `Skill-or-Trade/T2/P5` **erkennt gute Arbeit**

**Weakness:**
- `Skill-or-Trade/T2/W1` **reagiert gereizt auf Pfusch**
- `Skill-or-Trade/T2/W2` **überfordert ohne Werkzeug**

### Skill-or-Trade/T3 — „taschendiebischer Wandersmann"
**Power:**
- `Skill-or-Trade/T3/P1` **flinke Finger**
- `Skill-or-Trade/T3/P2` **leise Schritte**
- `Skill-or-Trade/T3/P3` **umgeht jede Wache**
- `Skill-or-Trade/T3/P4` **geht in der Menge unter**

**Weakness:**
- `Skill-or-Trade/T3/W1` **misstrauisch beobachtet**
- `Skill-or-Trade/T3/W2` **das Recht schützt ihn nie**

### Skill-or-Trade/T4 — „Heilkundige"
**Power:**
- `Skill-or-Trade/T4/P1` **kennt heilende Kräuter**
- `Skill-or-Trade/T4/P2` **einfache Heilkunst**
- `Skill-or-Trade/T4/P3` **fachkundiger Blick**
- `Skill-or-Trade/T4/P4` **ruhige Hände**

**Weakness:**
- `Skill-or-Trade/T4/W1` **kann nicht Nein sagen**
- `Skill-or-Trade/T4/W2` **überfordert ohne Werkzeug**

### Skill-or-Trade/T5 — „Steuermann"
**Power:**
- `Skill-or-Trade/T5/P1` **liest die Karte**
- `Skill-or-Trade/T5/P2` **kennt jeden Knoten**
- `Skill-or-Trade/T5/P3` **ruhig in der Krise**
- `Skill-or-Trade/T5/P4` **kennt die Zeichen des Wetters**

**Weakness:**
- `Skill-or-Trade/T5/W1` **verloren ohne sein Schiff**
- `Skill-or-Trade/T5/W2` **kennt nur eine Welt**

### Skill-or-Trade/T6 — „Bogenbauer"
**Power:**
- `Skill-or-Trade/T6/P1` **Pfeil und Bogen geübt**
- `Skill-or-Trade/T6/P2` **gut gemachte Werkzeuge**
- `Skill-or-Trade/T6/P3` **kennt jedes Holz**
- `Skill-or-Trade/T6/P4` **arbeitet schnell ohne Fehler**

**Weakness:**
- `Skill-or-Trade/T6/W1` **verliert sich in der Arbeit**
- `Skill-or-Trade/T6/W2` **reagiert gereizt auf Pfusch**

### Skill-or-Trade/T7 — „Gerber am Fluss"
**Power:**
- `Skill-or-Trade/T7/P1` **verlässliche Routine**
- `Skill-or-Trade/T7/P2` **kennt jedes Material**
- `Skill-or-Trade/T7/P3` **schätzt Maß und Gewicht**
- `Skill-or-Trade/T7/P4` **kennt den Preis jedes Rohstoffs**

**Weakness:**
- `Skill-or-Trade/T7/W1` **wirkt einseitig**
- `Skill-or-Trade/T7/W2` **schlechte Verhandlungskünste**

### Skill-or-Trade/T8 — „Brauerin der alten Rezepte"
**Power:**
- `Skill-or-Trade/T8/P1` **gut sortierte Vorratskammer**
- `Skill-or-Trade/T8/P2` **erkennt gute Arbeit**
- `Skill-or-Trade/T8/P3` **kennt jedes Rezept**
- `Skill-or-Trade/T8/P4` **verlässliche Routine**

**Weakness:**
- `Skill-or-Trade/T8/W1` **verliert sich in der Arbeit**
- `Skill-or-Trade/T8/W2` **kennt nur eine Welt**

### Skill-or-Trade/T9 — „Kräutersammlerin"
**Power:**
- `Skill-or-Trade/T9/P1` **kennt verborgene Heilpflanzen**
- `Skill-or-Trade/T9/P2` **kennt jede Spur im Wald**
- `Skill-or-Trade/T9/P3` **trägt das Wissen der Alten**
- `Skill-or-Trade/T9/P4` **findet überall Nahrung**

**Weakness:**
- `Skill-or-Trade/T9/W1` **misstrauisch gegen Fremde**
- `Skill-or-Trade/T9/W2` **kennt nur die Wildnis**

### Skill-or-Trade/T10 — „Bote der schnellen Füße"
**Power:**
- `Skill-or-Trade/T10/P1` **findet immer Orientierung**
- `Skill-or-Trade/T10/P2` **kennt jeden Schleichweg**
- `Skill-or-Trade/T10/P3` **reist mit leichtem Gepäck**
- `Skill-or-Trade/T10/P4` **ruhig in der Krise**

**Weakness:**
- `Skill-or-Trade/T10/W1` **nie lange am selben Ort**
- `Skill-or-Trade/T10/W2` **gehetzt vom nächsten Auftrag**

### Skill-or-Trade/T11 — „Tischler der feinen Art"
**Power:**
- `Skill-or-Trade/T11/P1` **Werkzeug meines Handwerks**
- `Skill-or-Trade/T11/P2` **baut auch im Dunkeln**
- `Skill-or-Trade/T11/P3` **repariert Unbrauchbares**
- `Skill-or-Trade/T11/P4` **ungewöhnlich präzise**

**Weakness:**
- `Skill-or-Trade/T11/W1` **reagiert gereizt auf Pfusch**
- `Skill-or-Trade/T11/W2` **Berufsehre macht kompromisslos**

### Skill-or-Trade/T12 — „Seiltänzerin auf Jahrmärkten"
**Power:**
- `Skill-or-Trade/T12/P1` **eingespielte Schrittfolge**
- `Skill-or-Trade/T12/P2` **sicheres Gleichgewicht**
- `Skill-or-Trade/T12/P3` **einnehmender Auftritt**
- `Skill-or-Trade/T12/P4` **flink und gelenkig**

**Weakness:**
- `Skill-or-Trade/T12/W1` **ein Sturz beendet alles**
- `Skill-or-Trade/T12/W2` **nie lange am selben Ort**


## Trait — Origin
ID-Präfix: `Trait`

### Trait/T1 — „stark wie ein Ochse"
**Power:**
- `Trait/T1/P1` **unbändige Kraft**
- `Trait/T1/P2` **fester Griff**
- `Trait/T1/P3` **trägt schwere Lasten**
- `Trait/T1/P4` **bricht durch Hindernisse**

**Weakness:**
- `Trait/T1/W1` **auffällig für Feinde**
- `Trait/T1/W2` **schwer und langsam**

### Trait/T2 — „akrobatische Beweglichkeit"
**Power:**
- `Trait/T2/P1` **klettert wie eine Katze**
- `Trait/T2/P2` **springt höher als andere**
- `Trait/T2/P3` **leichter Schritt**
- `Trait/T2/P4` **fällt nie**

**Weakness:**
- `Trait/T2/W1` **erschöpft sich rasch**
- `Trait/T2/W2` **tollkühn ohne Maß**

### Trait/T3 — „unheimlich schön"
**Power:**
- `Trait/T3/P1` **betörende Schönheit**
- `Trait/T3/P2` **zieht Blicke an**
- `Trait/T3/P3` **unvergesslicher Anblick**
- `Trait/T3/P4` **gewinnt Sympathie sofort**

**Weakness:**
- `Trait/T3/W1` **wird beneidet**
- `Trait/T3/W2` **zieht unliebsame Neugier an**

### Trait/T4 — „wache Beobachtungsgabe"
**Power:**
- `Trait/T4/P1` **vorausschauend**
- `Trait/T4/P2` **spürt nahende Gefahr**
- `Trait/T4/P3` **liest Räume sofort**
- `Trait/T4/P4` **übersieht kein Detail**

**Weakness:**
- `Trait/T4/W1` **verliert sich in Details**
- `Trait/T4/W2` **sieht zu viel**

### Trait/T5 — „ausdauernder Schwimmer"
**Power:**
- `Trait/T5/P1` **taucht tief und lange**
- `Trait/T5/P2` **trotzt jeder Strömung**
- `Trait/T5/P3` **fühlt sich im Wasser zuhause**
- `Trait/T5/P4` **unermüdliche Beine**

**Weakness:**
- `Trait/T5/W1` **ruhelos an Land**
- `Trait/T5/W2` **trotzt der Gefahr zu lange**

### Trait/T6 — „unerschütterlich"
**Power:**
- `Trait/T6/P1` **unermüdlich**
- `Trait/T6/P2` **unerschütterliche Konzentration**
- `Trait/T6/P3` **behält die Ruhe**
- `Trait/T6/P4` **unerschütterlich heiter**

**Weakness:**
- `Trait/T6/W1` **kennt ihre Grenzen nicht**
- `Trait/T6/W2` **starr im Urteil**

### Trait/T7 — „leicht zu übersehen"
**Power:**
- `Trait/T7/P1` **geht in der Menge unter**
- `Trait/T7/P2` **leise Schritte**
- `Trait/T7/P3` **unbemerkt zuhören**
- `Trait/T7/P4` **unauffällig**

**Weakness:**
- `Trait/T7/W1` **wird leicht vergessen**
- `Trait/T7/W2` **selten ernst genommen**

### Trait/T8 — „feines Gehör"
**Power:**
- `Trait/T8/P1` **hört den leisesten Laut**
- `Trait/T8/P2` **lauscht durch Wände**
- `Trait/T8/P3` **erwacht beim leisesten Geräusch**
- `Trait/T8/P4` **scharfe Sinne**

**Weakness:**
- `Trait/T8/W1` **geplagt von Lärm**
- `Trait/T8/W2` **abgelenkt durch Geräusche**

### Trait/T9 — „guter Menschenkenner"
**Power:**
- `Trait/T9/P1` **durchschaut eine Lüge**
- `Trait/T9/P2` **hört Falschheit heraus**
- `Trait/T9/P3` **spürt Stimmungen in Räumen**
- `Trait/T9/P4` **erkennt verborgene Not**

**Weakness:**
- `Trait/T9/W1` **vertraut dem Urteil zu sehr**
- `Trait/T9/W2` **durchschaut auch Freunde**

### Trait/T10 — „Augen wie ein Falke"
**Power:**
- `Trait/T10/P1` **sieht im Halbdunkel**
- `Trait/T10/P2` **erkennt das Ferne**
- `Trait/T10/P3` **scharfer Blick fürs Detail**
- `Trait/T10/P4` **erspäht jede Bewegung**

**Weakness:**
- `Trait/T10/W1` **geblendet von hellem Licht**
- `Trait/T10/W2` **vertraut nur dem Auge**

### Trait/T11 — „zäh wie Leder"
**Power:**
- `Trait/T11/P1` **trotzt Hitze und Kälte**
- `Trait/T11/P2` **heilt schnell**
- `Trait/T11/P3` **steckt Schläge weg**
- `Trait/T11/P4` **übersteht jede Strapaze**

**Weakness:**
- `Trait/T11/W1` **ignoriert eigene Wunden**
- `Trait/T11/W2` **mutet sich zu viel zu**

### Trait/T12 — „durchdringende Stimme"
**Power:**
- `Trait/T12/P1` **übertönt jeden Lärm**
- `Trait/T12/P2` **bringt Menschen zum Schweigen**
- `Trait/T12/P3` **Befehlston wirkt sofort**
- `Trait/T12/P4` **ergreifender Gesang**

**Weakness:**
- `Trait/T12/W1` **kann sich nicht verstecken**
- `Trait/T12/W2` **redet sich in Gefahr**


---

# Tier: Adventure

## Duty — Adventure
ID-Präfix: `Duty`

### Duty/T1 — „Licht gegen die Finsternis"
**Power:**
- `Duty/T1/P1` **leuchtende Rüstung**
- `Duty/T1/P2` **gefürchteter Gegner des Bösen**
- `Duty/T1/P3` **Zeichen gegen das Böse**
- `Duty/T1/P4` **unbeirrbar im Zweck**
- `Duty/T1/P5` **spürt nahende Finsternis**

**Weakness:**
- `Duty/T1/W1` **Auftrag über Vernunft**
- `Duty/T1/W2` **verhasst bei Dienern der Nacht**

### Duty/T2 — „Söldner auf Vertrag"
**Power:**
- `Duty/T2/P1` **Vertrag in der Hand**
- `Duty/T2/P2` **hält jede Abmachung**
- `Duty/T2/P3` **unbestechlich durch Gold**
- `Duty/T2/P4` **erfahrener Klingenkämpfer**
- `Duty/T2/P5` **kennt den Preis jeder Klinge**

**Weakness:**
- `Duty/T2/W1` **dem höchsten Gebot verpflichtet**
- `Duty/T2/W2` **kein Freund ohne Sold**

### Duty/T3 — „Schwur dem Lehnsherrn"
**Power:**
- `Duty/T3/P1` **Banner meines Lehnsherrn**
- `Duty/T3/P2` **mein Eid macht mich stark**
- `Duty/T3/P3` **trägt die Autorität ihres Hauses**
- `Duty/T3/P4` **kann Legitimität einfordern**
- `Duty/T3/P5` **kraftvoller Schwur**

**Weakness:**
- `Duty/T3/W1` **an Befehle gebunden**
- `Duty/T3/W2` **kann Befehlen nicht widersprechen**

### Duty/T4 — „Hüterin des Landes"
**Power:**
- `Duty/T4/P1` **kennt das ganze Reich**
- `Duty/T4/P2` **handelt richtig ohne Befehl**
- `Duty/T4/P3` **kennt jeden Pfad des Landes**
- `Duty/T4/P4` **wacht über die Schwachen**
- `Duty/T4/P5` **liest die Zeichen des Landes**

**Weakness:**
- `Duty/T4/W1` **kann das Land nicht verlassen**
- `Duty/T4/W2` **fühlt Schuld bei jeder Verwüstung**

### Duty/T5 — „Rachezwang"
**Power:**
- `Duty/T5/P1` **unbeirrbar bis zur Vergeltung**
- `Duty/T5/P2` **vergisst kein Gesicht**
- `Duty/T5/P3` **narbiger Schwertarm**
- `Duty/T5/P4` **kalter Blick auf den Feind**
- `Duty/T5/P5` **wittert eine Falle**

**Weakness:**
- `Duty/T5/W1` **die Rache frisst alles andere**
- `Duty/T5/W2` **verhasst bei der gejagten Sippe**

### Duty/T6 — „Bote des Königs"
**Power:**
- `Duty/T6/P1` **Recht auf freien Durchgang**
- `Duty/T6/P2` **Recht auf Kost und Quartier**
- `Duty/T6/P3` **kennt jede Losung jeder Wache**
- `Duty/T6/P4` **findet immer den schnellsten Weg**
- `Duty/T6/P5` **Siegel des Königs**

**Weakness:**
- `Duty/T6/W1` **Ziel für Feinde der Krone**
- `Duty/T6/W2` **die Botschaft duldet keinen Aufschub**

### Duty/T7 — „Schwertarm des Ordens"
**Power:**
- `Duty/T7/P1` **hält die Stellung allein**
- `Duty/T7/P2` **betet vor dem Kampf**
- `Duty/T7/P3` **Anweisungen ausführen**
- `Duty/T7/P4` **geweihte Klinge des Ordens**
- `Duty/T7/P5` **Brüder im Glauben zur Seite**

**Weakness:**
- `Duty/T7/W1` **der Orden vor dem Leben**
- `Duty/T7/W2` **fühlt Schuld bei Versagen**

### Duty/T8 — „Wächterin der Grenzmark"
**Power:**
- `Duty/T8/P1` **kennt die wilde Grenze**
- `Duty/T8/P2` **wacht beim leisesten Geräusch**
- `Duty/T8/P3` **hält die Stellung allein**
- `Duty/T8/P4` **kennt die Verbündeten der Sache**
- `Duty/T8/P5` **späht den Feind frühzeitig**

**Weakness:**
- `Duty/T8/W1` **darf den Posten nie verlassen**
- `Duty/T8/W2` **fern von jeder Hilfe**

### Duty/T9 — „letzter Zeuge eines Vertrags"
**Power:**
- `Duty/T9/P1` **kennt jede Klausel auswendig**
- `Duty/T9/P2` **kennt die Grenzen ihres Auftrags**
- `Duty/T9/P3` **sieht durch Lügen**
- `Duty/T9/P4` **kennt den Preis jeder Stille**
- `Duty/T9/P5` **bewahrt das versiegelte Wort**

**Weakness:**
- `Duty/T9/W1` **gejagt um des Wissens willen**
- `Duty/T9/W2` **kann das Geheimnis nicht teilen**

### Duty/T10 — „Schuldenbegleicherin"
**Power:**
- `Duty/T10/P1` **kennt jedermanns Schulden**
- `Duty/T10/P2` **Gefälligkeiten einfordern**
- `Duty/T10/P3` **spürt jeden Schuldner auf**
- `Duty/T10/P4` **unnachgiebig im Eintreiben**
- `Duty/T10/P5` **führt Buch über jede Gefälligkeit**

**Weakness:**
- `Duty/T10/W1` **verhasst bei den Schuldnern**
- `Duty/T10/W2` **eigene Schulden holen sie ein**

### Duty/T11 — „bezahlter Verteidiger"
**Power:**
- `Duty/T11/P1` **Schutzschild für den Auftraggeber**
- `Duty/T11/P2` **instinktive Reaktion auf Gefahr**
- `Duty/T11/P3` **Vertrag in der Hand**
- `Duty/T11/P4` **deckt jede Schwachstelle ab**
- `Duty/T11/P5` **nimmt Wunden für andere**

**Weakness:**
- `Duty/T11/W1` **haftet für jedes Versagen**
- `Duty/T11/W2` **treu nur für Sold**

### Duty/T12 — „Vollstreckerin des alten Gesetzes"
**Power:**
- `Duty/T12/P1` **kennt Regeln und Ausnahmen**
- `Duty/T12/P2` **setzt Befehle ohne Feinde durch**
- `Duty/T12/P3` **unbestechlich durch Gold**
- `Duty/T12/P4` **Autorität des alten Gesetzes**
- `Duty/T12/P5` **kennt jeden Präzedenzfall**

**Weakness:**
- `Duty/T12/W1` **das Gesetz über die Gnade**
- `Duty/T12/W2` **kann keinen Auftrag aufgeben**


## Influence — Adventure
ID-Präfix: `Influence`

### Influence/T1 — „Dockmeisterin"
**Power:**
- `Influence/T1/P1` **kennt jeden Kai**
- `Influence/T1/P2` **kontrolliert die Ladung**
- `Influence/T1/P3` **Boten in jede Richtung**
- `Influence/T1/P4` **Spitzel an jeder Mole**

**Weakness:**
- `Influence/T1/W1` **Konkurrenz um den Hafen**
- `Influence/T1/W2` **Schmugglerschulden im Nacken**

### Influence/T2 — „graue Eminenz"
**Power:**
- `Influence/T2/P1` **zieht Fäden im Verborgenen**
- `Influence/T2/P2` **kennt das Geheimnis aller**
- `Influence/T2/P3` **Beobachter überall**
- `Influence/T2/P4` **eine Geste genügt**

**Weakness:**
- `Influence/T2/W1` **unsichtbare Feinde**
- `Influence/T2/W2` **erpressbar durch Geheimnisse**

### Influence/T3 — „Stadtrat"
**Power:**
- `Influence/T3/P1` **spricht mit Befehlsgewalt**
- `Influence/T3/P2` **Stimme im Ratssaal**
- `Influence/T3/P3` **kennt Regeln und Ausnahmen**
- `Influence/T3/P4` **setzt Beschlüsse durch**

**Weakness:**
- `Influence/T3/W1` **Macht macht zur Zielscheibe**
- `Influence/T3/W2` **zu viele Verpflichtungen**

### Influence/T4 — „Gildenführer"
**Power:**
- `Influence/T4/P1` **Gildensiegel**
- `Influence/T4/P2` **kann Verbündete mobilisieren**
- `Influence/T4/P3` **kennt jedermanns Schulden**
- `Influence/T4/P4` **macht und bricht Rufe**

**Weakness:**
- `Influence/T4/W1` **Konkurrenz um die Führung**
- `Influence/T4/W2` **jedes Bündnis hat seinen Preis**

### Influence/T5 — „Anführerin der Schmuggler"
**Power:**
- `Influence/T5/P1` **Zugang zu verschlossenen Orten**
- `Influence/T5/P2` **kennt jeden Schleichweg**
- `Influence/T5/P3` **loyale Schmugglerbande**
- `Influence/T5/P4` **Gold öffnet Türen**

**Weakness:**
- `Influence/T5/W1` **vom Gesetz gejagt**
- `Influence/T5/W2` **alte Intrigen holen sie ein**

### Influence/T6 — „Diplomatin"
**Power:**
- `Influence/T6/P1` **Recht auf Audienz**
- `Influence/T6/P2` **Vertrauen der Mächtigen**
- `Influence/T6/P3` **lenkt durch geschickte Fragen**
- `Influence/T6/P4` **beschwichtigt jeden Streit**

**Weakness:**
- `Influence/T6/W1` **der Hof ist ein Schlangennest**
- `Influence/T6/W2` **jedes Bündnis hat seinen Preis**

### Influence/T7 — „Händlerin mit dem Netz"
**Power:**
- `Influence/T7/P1` **eine Karte mit allen Namen**
- `Influence/T7/P2` **Boten in jede Richtung**
- `Influence/T7/P3` **Gefälligkeiten einfordern**
- `Influence/T7/P4` **kennt den Preis jeder Ware**

**Weakness:**
- `Influence/T7/W1` **zu viele Verpflichtungen**
- `Influence/T7/W2` **jedes Bündnis hat seinen Preis**

### Influence/T8 — „Beraterin im Verborgenen"
**Power:**
- `Influence/T8/P1` **Briefe öffnen Tore**
- `Influence/T8/P2` **hält Informationen zurück**
- `Influence/T8/P3` **kennt jedes Schweigen**
- `Influence/T8/P4` **flüstert ins rechte Ohr**

**Weakness:**
- `Influence/T8/W1` **erpressbar durch Geheimnisse**
- `Influence/T8/W2` **unsichtbare Feinde**

### Influence/T9 — „Mäzenin der Armen"
**Power:**
- `Influence/T9/P1` **Schatzkammer im Hintergrund**
- `Influence/T9/P2` **loyale Leute in den Gassen**
- `Influence/T9/P3` **spricht für die Schwachen**
- `Influence/T9/P4` **Gold öffnet Türen**

**Weakness:**
- `Influence/T9/W1` **Macht macht zur Zielscheibe**
- `Influence/T9/W2` **kann nicht Nein sagen**

### Influence/T10 — „Schiedsrichterin der Straßen"
**Power:**
- `Influence/T10/P1` **kennt jede Losung jeder Wache**
- `Influence/T10/P2` **schlichtet jeden Bandenkrieg**
- `Influence/T10/P3` **Vollstrecker auf Zuruf**
- `Influence/T10/P4` **hört die Gerüchte zuerst**

**Weakness:**
- `Influence/T10/W1` **Konkurrenz um die Gasse**
- `Influence/T10/W2` **verhasst bei den Verurteilten**

### Influence/T11 — „Königsmacherin"
**Power:**
- `Influence/T11/P1` **Vertrauen der Mächtigen**
- `Influence/T11/P2` **macht und bricht Rufe**
- `Influence/T11/P3` **zieht Fäden im Verborgenen**
- `Influence/T11/P4` **setzt Throne ein und ab**

**Weakness:**
- `Influence/T11/W1` **der Hof ist ein Schlangennest**
- `Influence/T11/W2` **alte Intrigen holen sie ein**

### Influence/T12 — „Stimme des Rates"
**Power:**
- `Influence/T12/P1` **kann Legitimität einfordern**
- `Influence/T12/P2` **spricht mit Befehlsgewalt**
- `Influence/T12/P3` **kennt die wahren Mächte**
- `Influence/T12/P4` **bewegt die Menge mit Worten**

**Weakness:**
- `Influence/T12/W1` **an Beschlüsse gebunden**
- `Influence/T12/W2` **Konkurrenz um das Wort**


## Knowledge — Adventure
ID-Präfix: `Knowledge`

### Knowledge/T1 — „Sterndeuter"
**Power:**
- `Knowledge/T1/P1` **liest in den Sternen**
- `Knowledge/T1/P2` **deutet die Zeichen**
- `Knowledge/T1/P3` **errechnet himmlische Bahnen**
- `Knowledge/T1/P4` **liest kommendes Unheil**

**Weakness:**
- `Knowledge/T1/W1` **gefangen in Vorzeichen**
- `Knowledge/T1/W2` **blind fürs Irdische**

### Knowledge/T2 — „Bewohner des Verborgenen"
**Power:**
- `Knowledge/T2/P1` **kennt den Weg zur Wahrheit**
- `Knowledge/T2/P2` **führt geheime Forschung**
- `Knowledge/T2/P3` **sieht verborgene Zusammenhänge**
- `Knowledge/T2/P4` **bewegt sich ungesehen**

**Weakness:**
- `Knowledge/T2/W1` **verfolgt von neugierigen Mächten**
- `Knowledge/T2/W2` **traut keinem Licht**

### Knowledge/T3 — „weitgereister Landeskenner"
**Power:**
- `Knowledge/T3/P1` **kennt jedes Land**
- `Knowledge/T3/P2` **kennt unverzeichnete Routen**
- `Knowledge/T3/P3` **liest fremde Sitten**
- `Knowledge/T3/P4` **findet überall Orientierung**

**Weakness:**
- `Knowledge/T3/W1` **nirgends wirklich daheim**
- `Knowledge/T3/W2` **fremd in jeder Heimat**

### Knowledge/T4 — „Bibliothekar des Verbotenen"
**Power:**
- `Knowledge/T4/P1` **kennt verbotene Riten**
- `Knowledge/T4/P2` **erinnert sich an jedes Buch**
- `Knowledge/T4/P3` **birgt gefährliche Bände**
- `Knowledge/T4/P4` **erkennt jeden Falschdruck**

**Weakness:**
- `Knowledge/T4/W1` **gefährliches Wissen lockt Feinde**
- `Knowledge/T4/W2` **Wahrheit vor dem Wohl anderer**

### Knowledge/T5 — „Gelehrter der alten Reiche"
**Power:**
- `Knowledge/T5/P1` **kennt den historischen Kontext**
- `Knowledge/T5/P2` **kennt jedes Provinzwappen**
- `Knowledge/T5/P3` **rekonstruiert aus Fragmenten**
- `Knowledge/T5/P4` **entlarvt geschönte Chroniken**

**Weakness:**
- `Knowledge/T5/W1` **weltfremder Bücherwurm**
- `Knowledge/T5/W2` **lebt in vergangenen Zeiten**

### Knowledge/T6 — „Sprachgelehrter"
**Power:**
- `Knowledge/T6/P1` **kennt die alten Sprachen**
- `Knowledge/T6/P2` **übersetzt jede Schrift**
- `Knowledge/T6/P3` **spricht die Sprache der Toten**
- `Knowledge/T6/P4` **hört jeden Dialekt heraus**

**Weakness:**
- `Knowledge/T6/W1` **verliert sich in Worten**
- `Knowledge/T6/W2` **nimmt jedes Wort wörtlich**

### Knowledge/T7 — „Kartografin vergessener Wege"
**Power:**
- `Knowledge/T7/P1` **zeichnet getreue Karten**
- `Knowledge/T7/P2` **kennt unverzeichnete Routen**
- `Knowledge/T7/P3` **liest jedes Gelände**
- `Knowledge/T7/P4` **merkt sich jeden Weg**

**Weakness:**
- `Knowledge/T7/W1` **besessen vom nächsten Horizont**
- `Knowledge/T7/W2` **hilflos ohne ihre Karten**

### Knowledge/T8 — „Entschlüsslerin alter Schriften"
**Power:**
- `Knowledge/T8/P1` **erkennt jedes Symbol**
- `Knowledge/T8/P2` **rekonstruiert aus Fragmenten**
- `Knowledge/T8/P3` **knackt jeden Code**
- `Knowledge/T8/P4` **sieht das Muster im Chaos**

**Weakness:**
- `Knowledge/T8/W1` **besessen von ungelösten Rätseln**
- `Knowledge/T8/W2` **Studium zehrt am Körper**

### Knowledge/T9 — „Schülerin verbotenen Wissens"
**Power:**
- `Knowledge/T9/P1` **kennt verbotene Riten**
- `Knowledge/T9/P2` **führt geheime Forschung**
- `Knowledge/T9/P3` **Wissen als Hebel**
- `Knowledge/T9/P4` **wagt was andere meiden**

**Weakness:**
- `Knowledge/T9/W1` **blind für reale Gefahr**
- `Knowledge/T9/W2` **gefährliches Wissen lockt Feinde**

### Knowledge/T10 — „Hüterin der verborgenen Archive"
**Power:**
- `Knowledge/T10/P1` **ein Lexikon an Lore**
- `Knowledge/T10/P2` **erinnert sich an jedes Buch**
- `Knowledge/T10/P3` **hält die Archive geheim**
- `Knowledge/T10/P4` **findet jede Quelle wieder**

**Weakness:**
- `Knowledge/T10/W1` **an die Archive gebunden**
- `Knowledge/T10/W2` **wird für ihr Wissen benutzt**

### Knowledge/T11 — „Kennerin der Naturgesetze"
**Power:**
- `Knowledge/T11/P1` **analysiert eine Substanz**
- `Knowledge/T11/P2` **kennt Bestienkunde**
- `Knowledge/T11/P3` **kennt die Schwäche jedes Wesens**
- `Knowledge/T11/P4` **erklärt jedes Phänomen**

**Weakness:**
- `Knowledge/T11/W1` **körperlich nicht stark**
- `Knowledge/T11/W2` **glaubt nur was sie beweist**

### Knowledge/T12 — „Forscherin der alten Kulte"
**Power:**
- `Knowledge/T12/P1` **kennt verbotene Riten**
- `Knowledge/T12/P2` **sieht die Zeichen**
- `Knowledge/T12/P3` **durchschaut jeden Glauben**
- `Knowledge/T12/P4` **spürt das Wirken der Kulte**

**Weakness:**
- `Knowledge/T12/W1` **verfolgt von neugierigen Mächten**
- `Knowledge/T12/W2` **zu tief in den Riten**


## Prodigious Ability — Adventure
ID-Präfix: `Prodigious-Ability`

### Prodigious-Ability/T1 — „fesselnder Geschichtenerzähler"
**Power:**
- `Prodigious-Ability/T1/P1` **verzaubert mit Worten**
- `Prodigious-Ability/T1/P2` **liest das Publikum**
- `Prodigious-Ability/T1/P3` **erfindet im Augenblick**
- `Prodigious-Ability/T1/P4` **kennt tausend Sagen**
- `Prodigious-Ability/T1/P5` **fesselt jeden Saal**

**Weakness:**
- `Prodigious-Ability/T1/W1` **schmückt die Wahrheit aus**
- `Prodigious-Ability/T1/W2` **braucht stets ein Publikum**

### Prodigious-Ability/T2 — „meisterhafter Koch"
**Power:**
- `Prodigious-Ability/T2/P1` **wundersames Werk**
- `Prodigious-Ability/T2/P2` **improvisiert das Unmögliche**
- `Prodigious-Ability/T2/P3` **erkennt jede Zutat**
- `Prodigious-Ability/T2/P4` **verfeinert jedes Mahl**
- `Prodigious-Ability/T2/P5` **öffnet Herzen am Tisch**

**Weakness:**
- `Prodigious-Ability/T2/W1` **reagiert gereizt auf Pfusch**
- `Prodigious-Ability/T2/W2` **wählerisch bis zur Plage**

### Prodigious-Ability/T3 — „gefürchteter Klingenmeister"
**Power:**
- `Prodigious-Ability/T3/P1` **staunenswerte Schwertkunst**
- `Prodigious-Ability/T3/P2` **eigene Signaturtechnik**
- `Prodigious-Ability/T3/P3` **erkennt den schwachen Punkt**
- `Prodigious-Ability/T3/P4` **unlesbare Technik**
- `Prodigious-Ability/T3/P5` **unerschütterlich unter Druck**

**Weakness:**
- `Prodigious-Ability/T3/W1` **wird ständig herausgefordert**
- `Prodigious-Ability/T3/W2` **verträgt keine Niederlage**

### Prodigious-Ability/T4 — „wundersamer Heiler"
**Power:**
- `Prodigious-Ability/T4/P1` **einmalige Heiltechnik**
- `Prodigious-Ability/T4/P2` **erkennt jedes Leiden**
- `Prodigious-Ability/T4/P3` **ruhige Hände im Notfall**
- `Prodigious-Ability/T4/P4` **kennt seltene Heilmittel**
- `Prodigious-Ability/T4/P5` **holt Verlorene zurück**

**Weakness:**
- `Prodigious-Ability/T4/W1` **leidet an jedem Versagen**
- `Prodigious-Ability/T4/W2` **wird für Unmögliches eingespannt**

### Prodigious-Ability/T5 — „untrüglicher Bogenschütze"
**Power:**
- `Prodigious-Ability/T5/P1` **unfehlbarer Pfeil**
- `Prodigious-Ability/T5/P2` **trifft jedes Ziel**
- `Prodigious-Ability/T5/P3` **ruhiger Atem im Anschlag**
- `Prodigious-Ability/T5/P4` **schießt schneller als der Blick**
- `Prodigious-Ability/T5/P5` **kennt jeden Bogen**

**Weakness:**
- `Prodigious-Ability/T5/W1` **wird ständig herausgefordert**
- `Prodigious-Ability/T5/W2` **hilflos im Nahkampf**

### Prodigious-Ability/T6 — „Meister des Spiels"
**Power:**
- `Prodigious-Ability/T6/P1` **blitzschnelle Auffassung**
- `Prodigious-Ability/T6/P2` **durchschaut jede Strategie**
- `Prodigious-Ability/T6/P3` **denkt zehn Züge voraus**
- `Prodigious-Ability/T6/P4` **unvorhersehbarer Weg zum Ziel**
- `Prodigious-Ability/T6/P5` **bleibt eiskalt am Brett**

**Weakness:**
- `Prodigious-Ability/T6/W1` **kann nicht verlieren**
- `Prodigious-Ability/T6/W2` **sieht überall nur Spiele**

### Prodigious-Ability/T7 — „Tänzerin ohne Gleichen"
**Power:**
- `Prodigious-Ability/T7/P1` **unbestreitbare Eleganz**
- `Prodigious-Ability/T7/P2` **staunenswerter Sprung**
- `Prodigious-Ability/T7/P3` **fesselt jeden Blick**
- `Prodigious-Ability/T7/P4` **bewegt sich wie Wasser**
- `Prodigious-Ability/T7/P5` **spricht ohne Worte**

**Weakness:**
- `Prodigious-Ability/T7/W1` **wird beneidet**
- `Prodigious-Ability/T7/W2` **erschöpft im Alltag**

### Prodigious-Ability/T8 — „Diebin des Unmöglichen"
**Power:**
- `Prodigious-Ability/T8/P1` **erstaunliche Geschwindigkeit**
- `Prodigious-Ability/T8/P2` **öffnet jedes Schloss**
- `Prodigious-Ability/T8/P3` **lautlos wie ein Schatten**
- `Prodigious-Ability/T8/P4` **improvisiert das Unmögliche**
- `Prodigious-Ability/T8/P5` **findet jeden Schwachpunkt**

**Weakness:**
- `Prodigious-Ability/T8/W1` **misstrauisch beobachtet**
- `Prodigious-Ability/T8/W2` **kann nicht widerstehen**

### Prodigious-Ability/T9 — „Bardin der Legenden"
**Power:**
- `Prodigious-Ability/T9/P1` **reißt jede Menge mit**
- `Prodigious-Ability/T9/P2` **verzaubert mit Worten**
- `Prodigious-Ability/T9/P3` **spornt andere an**
- `Prodigious-Ability/T9/P4` **kennt jedes Lied**
- `Prodigious-Ability/T9/P5` **stimmt jeden Saal um**

**Weakness:**
- `Prodigious-Ability/T9/W1` **die Gabe macht einsam**
- `Prodigious-Ability/T9/W2` **verschuldet durch Großzügigkeit**

### Prodigious-Ability/T10 — „unfehlbare Reiterin"
**Power:**
- `Prodigious-Ability/T10/P1` **verschmilzt mit dem Pferd**
- `Prodigious-Ability/T10/P2` **reitet wo keiner reitet**
- `Prodigious-Ability/T10/P3` **bändigt jedes Tier**
- `Prodigious-Ability/T10/P4` **erstaunliche Geschwindigkeit**
- `Prodigious-Ability/T10/P5` **unerschütterlich im Sattel**

**Weakness:**
- `Prodigious-Ability/T10/W1` **halb verloren ohne Ross**
- `Prodigious-Ability/T10/W2` **tollkühn im Ritt**

### Prodigious-Ability/T11 — „Rednerin der Massen"
**Power:**
- `Prodigious-Ability/T11/P1` **reißt jede Menge mit**
- `Prodigious-Ability/T11/P2` **findet stets das rechte Wort**
- `Prodigious-Ability/T11/P3` **entfacht die Menge**
- `Prodigious-Ability/T11/P4` **liest das Publikum**
- `Prodigious-Ability/T11/P5` **unerschütterlich unter Druck**

**Weakness:**
- `Prodigious-Ability/T11/W1` **arrogant gegenüber Schwächeren**
- `Prodigious-Ability/T11/W2` **glaubt der eigenen Rede**

### Prodigious-Ability/T12 — „unbesiegte Spielerin"
**Power:**
- `Prodigious-Ability/T12/P1` **durchschaut jeden Bluff**
- `Prodigious-Ability/T12/P2` **unbewegte Miene**
- `Prodigious-Ability/T12/P3` **gilt als die Beste**
- `Prodigious-Ability/T12/P4` **rechnet jede Chance**
- `Prodigious-Ability/T12/P5` **behält die Nerven**

**Weakness:**
- `Prodigious-Ability/T12/W1` **verträgt keine Niederlage**
- `Prodigious-Ability/T12/W2` **wird der Falschheit verdächtigt**


## Relic — Adventure
ID-Präfix: `Relic`

### Relic/T1 — „die Riesenfaust"
**Power:**
- `Relic/T1/P1` **donnernder Faustschlag** — Ein magisch verstärkter Hieb von gewaltiger Wucht. _Hilft z.B.:_ Um einen gepanzerten Gegner mit einem einzigen Schlag von den Füßen zu reißen.
- `Relic/T1/P2` **zerschmettert Tore** — Bricht selbst massive Tore und Mauern auf. _Hilft z.B.:_ Um sich gewaltsam Zugang zu einer verriegelten Festung zu verschaffen.
- `Relic/T1/P3` **unmenschliche Wucht** — Körperkraft weit jenseits menschlichen Maßes. _Hilft z.B.:_ Um ein umgestürztes Fuhrwerk anzuheben, das Verschüttete einklemmt.
- `Relic/T1/P4` **hält Feinde fern** — Allein die Drohung der Faust hält Angreifer auf Abstand. _Hilft z.B.:_ Um eine Übermacht einzuschüchtern, sodass keiner als Erster angreift.

**Weakness:**
- `Relic/T1/W1` **Magie fordert ihren Preis** — Der Einsatz der Magie verlangt einen körperlichen oder seelischen Tribut. _Hindert z.B.:_ Wenn die Kraft mitten im Kampf den Träger auslaugt und schwächt.
- `Relic/T1/W2` **zu schwer für Feinheit** — Die wuchtige Faust taugt nicht für feine Handgriffe. _Hindert z.B.:_ Wenn Fingerspitzengefühl gefragt ist – ein Schloss, eine Schriftrolle – und alles zerbricht.

### Relic/T2 — „Beutel mit Zauberstaub"
**Power:**
- `Relic/T2/P1` **beschwört nützliche Dinge** — Zaubert mit einer Prise das herbei, was gerade gebraucht wird. _Hilft z.B.:_ Um in der Not unvermittelt ein Seil, Licht oder Werkzeug erscheinen zu lassen.
- `Relic/T2/P2` **eine Prise für jede Not** — Hat für fast jede Lage das passende Pulver. _Hilft z.B.:_ Um eine unerwartete Hürde mit dem genau richtigen Effekt zu überwinden.
- `Relic/T2/P3` **verstärkt eigene Fähigkeiten** — Steigert kurzzeitig die eigenen Kräfte oder Sinne. _Hilft z.B.:_ Um für einen entscheidenden Moment schneller, stärker oder wacher zu sein.
- `Relic/T2/P4` **entfacht Funken aus dem Nichts** — Erzeugt Feuer und Funken ohne Zunder. _Hilft z.B.:_ Um im Regen ein Feuer zu entzünden oder Reisig blitzschnell zu entflammen.

**Weakness:**
- `Relic/T2/W1` **der Vorrat geht zur Neige** — Der Staub ist endlich und schwer zu ersetzen. _Hindert z.B.:_ Wenn im entscheidenden Moment der Beutel fast leer ist.
- `Relic/T2/W2` **Magie fordert ihren Preis** — Der Einsatz der Magie verlangt einen körperlichen oder seelischen Tribut. _Hindert z.B.:_ Wenn jede Beschwörung den Träger ein Stück Kraft oder Gesundheit kostet.

### Relic/T3 — „Kessel der Beschwörung"
**Power:**
- `Relic/T3/P1` **lauscht den Geistern** — Hört und versteht die Stimmen der Toten und Geister. _Hilft z.B.:_ Um von einem Verstorbenen zu erfahren, was niemand unter den Lebenden weiß.
- `Relic/T3/P2` **ruft Verbündete aus dem Jenseits** — Beschwört geisterhafte Helfer herbei. _Hilft z.B.:_ Um in aussichtsloser Lage übernatürlichen Beistand zu rufen.
- `Relic/T3/P3` **braut wirksame Sude** — Kocht kraftvolle Tränke und Mixturen. _Hilft z.B.:_ Um ein Gift, ein Heilmittel oder einen Zaubertrank für einen Plan herzustellen.
- `Relic/T3/P4` **bannt Wesen in den Kreis** — Zwingt beschworene Wesen in einen Bannkreis. _Hilft z.B.:_ Um einen gefährlichen Geist festzuhalten und zu befragen, statt ihn freizulassen.

**Weakness:**
- `Relic/T3/W1` **was gerufen wird bleibt** — Herbeigerufenes verschwindet nicht ohne Weiteres wieder. _Hindert z.B.:_ Wenn ein beschworenes Wesen sich der Kontrolle entzieht und zur Last wird.
- `Relic/T3/W2` **andere wollen es** — Mächtige begehren das Artefakt für sich. _Hindert z.B.:_ Wenn Rivalen Anschläge verüben, um den Kessel an sich zu bringen.

### Relic/T4 — „verfluchte Klinge"
**Power:**
- `Relic/T4/P1` **schneidet durch alles** — Durchtrennt selbst härteste Materialien mühelos. _Hilft z.B.:_ Um Ketten, Panzer oder einen verriegelten Riegel einfach durchzuschneiden.
- `Relic/T4/P2` **dürstet nach Blut** — Die Klinge giert nach Kampf und führt die Hand. _Hilft z.B.:_ Um in der Schlacht mit übermenschlicher Wildheit zuzuschlagen.
- `Relic/T4/P3` **bindet feindliche Magie** — Saugt gegnerische Zauber auf oder bricht sie. _Hilft z.B.:_ Um den Spruch eines Magiers mitten im Wirken zunichtezumachen.
- `Relic/T4/P4` **kennt den tödlichen Streich** — Findet wie von selbst die verwundbare Stelle. _Hilft z.B.:_ Um einen scheinbar unbezwingbaren Gegner mit einem gezielten Stich zu fällen.

**Weakness:**
- `Relic/T4/W1` **hat einen eigenen Willen** — Die Klinge verfolgt eigene Absichten. _Hindert z.B.:_ Wenn sie sich weigert zu rasten und den Träger zum Töten drängt.
- `Relic/T4/W2` **verändert mich subtil** — Ihr Gebrauch wandelt den Träger heimlich zum Schlechten. _Hindert z.B.:_ Wenn man unmerklich grausamer wird und Freunde sich abwenden.

### Relic/T5 — „Stab der alten Zeiten"
**Power:**
- `Relic/T5/P1` **entfesselt rohe Arkanmacht** — Schleudert ungezähmte magische Energie. _Hilft z.B.:_ Um mit einem Schlag eine Schar Feinde oder ein Hindernis hinwegzufegen.
- `Relic/T5/P2` **weckt vergessene Zauber** — Erweckt längst verschollene Sprüche zum Leben. _Hilft z.B.:_ Um eine uralte Magie zu wirken, die keine Schule mehr lehrt.
- `Relic/T5/P3` **verstärkt eigene Fähigkeiten** — Steigert kurzzeitig die eigene magische Kraft. _Hilft z.B.:_ Um einen Zauber weit über das gewohnte Maß hinaus zu verstärken.
- `Relic/T5/P4` **trägt Wissen alter Mager** — Birgt das Wissen längst verstorbener Magier. _Hilft z.B.:_ Um ein arkanes Rätsel zu lösen, indem man das gespeicherte Wissen abruft.

**Weakness:**
- `Relic/T5/W1` **Macht stellt Forderungen** — Die Macht des Artefakts verlangt Gegenleistungen. _Hindert z.B.:_ Wenn der Stab Tribut fordert, ehe er erneut gehorcht.
- `Relic/T5/W2` **alte Zauber entgleiten** — Die alten Sprüche geraten leicht außer Kontrolle. _Hindert z.B.:_ Wenn ein Zauber misslingt und unbeabsichtigten Schaden anrichtet.

### Relic/T6 — „Krone der Vergessenen"
**Power:**
- `Relic/T6/P1` **trägt Autorität der Toten** — Verleiht den Befehlston längst verstorbener Herrscher. _Hilft z.B.:_ Um Gehorsam zu gebieten, als spräche ein König aus alter Zeit.
- `Relic/T6/P2` **gebietet über Schatten** — Befehligt Schattenwesen und Dunkelheit. _Hilft z.B.:_ Um Schatten als Späher oder als Schild gegen Feinde einzusetzen.
- `Relic/T6/P3` **erinnert vergessene Eide** — Ruft alte, vergessene Schwüre ins Gedächtnis. _Hilft z.B.:_ Um jemanden an einen uralten Treueeid zu binden, den er vergaß.
- `Relic/T6/P4` **verbirgt vor dem Bösen** — Schützt den Träger vor dem Blick finsterer Mächte. _Hilft z.B.:_ Um sich der Wahrnehmung eines übernatürlichen Jägers zu entziehen.

**Weakness:**
- `Relic/T6/W1` **wer trägt hier wen** — Unklar, ob der Träger die Krone lenkt oder umgekehrt. _Hindert z.B.:_ Wenn der Wille der Krone den eigenen überlagert und das Handeln bestimmt.
- `Relic/T6/W2` **andere wollen es** — Mächtige begehren das Artefakt für sich. _Hindert z.B.:_ Wenn Rivalen Anschläge verüben, um die Krone an sich zu bringen.

### Relic/T7 — „Spiegel der Wahrheit"
**Power:**
- `Relic/T7/P1` **enthüllt verborgene Wahrheiten** — Macht Verborgenes und Geheimes sichtbar. _Hilft z.B.:_ Um die wahre Absicht hinter einer freundlichen Fassade aufzudecken.
- `Relic/T7/P2` **durchschaut jede Lüge** — Entlarvt jede Unwahrheit zuverlässig. _Hilft z.B.:_ Um in einer Verhandlung sofort zu erkennen, wer lügt.
- `Relic/T7/P3` **zeigt die Schwäche des Gegners** — Offenbart die verwundbare Stelle eines Feindes. _Hilft z.B.:_ Um vor einem Kampf die Achillesferse des Gegners zu finden.
- `Relic/T7/P4` **entlarvt falsche Gestalt** — Durchschaut Verkleidung und Gestaltwandel. _Hilft z.B.:_ Um einen verkleideten Hochstapler oder Formwandler zu enttarnen.

**Weakness:**
- `Relic/T7/W1` **zeigt auch eigene Schuld** — Der Spiegel offenbart auch die eigenen Verfehlungen. _Hindert z.B.:_ Wenn der Blick hinein einen mit der eigenen Schuld lähmt.
- `Relic/T7/W2` **andere wollen es** — Mächtige begehren das Artefakt für sich. _Hindert z.B.:_ Wenn Rivalen Anschläge verüben, um den Spiegel an sich zu bringen.

### Relic/T8 — „selbstschreibendes Buch"
**Power:**
- `Relic/T8/P1` **verzeichnet kommende Dinge** — Schreibt künftige Ereignisse von selbst auf. _Hilft z.B.:_ Um eine drohende Gefahr vorab zu erfahren und ihr zuvorzukommen.
- `Relic/T8/P2` **deutet verborgene Zeichen** — Legt rätselhafte Omen und Symbole aus. _Hilft z.B.:_ Um eine kryptische Prophezeiung zu entschlüsseln.
- `Relic/T8/P3` **beantwortet jede Frage** — Gibt auf jede Frage eine Antwort. _Hilft z.B.:_ Um eine Wissenslücke zu schließen, die sonst niemand füllen kann.
- `Relic/T8/P4` **warnt vor Gefahr** — Schlägt Alarm, ehe Unheil naht. _Hilft z.B.:_ Um rechtzeitig vor einem Hinterhalt gewarnt zu werden.

**Weakness:**
- `Relic/T8/W1` **schreibt auch böse Omen** — Verzeichnet auch düstere, beunruhigende Vorzeichen. _Hindert z.B.:_ Wenn eine unheilvolle Vorhersage den Träger lähmt oder in die Irre führt.
- `Relic/T8/W2` **hat einen eigenen Willen** — Das Buch verfolgt eigene Absichten. _Hindert z.B.:_ Wenn es Antworten verweigert oder den Leser zu eigenen Zwecken lenkt.

### Relic/T9 — „Stein der alten Festung"
**Power:**
- `Relic/T9/P1` **unerschütterlicher Schutz** — Bietet magischen Schutz, der kaum zu durchdringen ist. _Hilft z.B.:_ Um einen Angriff abzuwehren, der sonst tödlich wäre.
- `Relic/T9/P2` **hält jeden Sturm aus** — Trotzt Unwettern und gewaltigen Naturgewalten. _Hilft z.B.:_ Um eine Gruppe in einem verheerenden Sturm zu bewahren.
- `Relic/T9/P3` **birgt die Kraft der Mauern** — Trägt die Schutzkraft einer ganzen Festung in sich. _Hilft z.B.:_ Um einen improvisierten Wall nahezu unüberwindlich zu machen.
- `Relic/T9/P4` **weckt den Mut der Verteidiger** — Entflammt den Kampfgeist der Verbündeten. _Hilft z.B.:_ Um wankende Verteidiger zum Standhalten zu bewegen.

**Weakness:**
- `Relic/T9/W1` **wurzelt nur an einem Ort** — Seine Kraft wirkt nur an einem festen Ort. _Hindert z.B.:_ Wenn man den Schutz unterwegs bräuchte, er aber an die Festung gebunden ist.
- `Relic/T9/W2` **Macht stellt Forderungen** — Die Macht des Artefakts verlangt Gegenleistungen. _Hindert z.B.:_ Wenn der Stein einen Tribut fordert, ehe er erneut schützt.

### Relic/T10 — „Kette des letzten Königs"
**Power:**
- `Relic/T10/P1` **trägt königliche Autorität** — Verleiht die Befehlsgewalt eines Königs. _Hilft z.B.:_ Um Gefolgsleute kraft königlichen Anspruchs zum Gehorsam zu bewegen.
- `Relic/T10/P2` **gebietet alten Gehorsam** — Erzwingt Gehorsam aus alter Treuepflicht. _Hilft z.B.:_ Um die Anhänger eines vergangenen Throns für sich zu gewinnen.
- `Relic/T10/P3` **erinnert gebrochene Schwüre** — Ruft gebrochene Treueeide ins Gewissen. _Hilft z.B.:_ Um einen Abtrünnigen mit seinem einstigen Schwur zur Umkehr zu bewegen.
- `Relic/T10/P4` **unerklärlicher Schutz** — Bewahrt den Träger auf rätselhafte Weise. _Hilft z.B.:_ Um einem Anschlag wie durch ein Wunder zu entgehen.

**Weakness:**
- `Relic/T10/W1` **andere wollen es** — Mächtige begehren das Artefakt für sich. _Hindert z.B.:_ Wenn Rivalen Anschläge verüben, um die Kette an sich zu bringen.
- `Relic/T10/W2` **Last eines toten Throns** — Das Erbe eines untergegangenen Reiches lastet schwer. _Hindert z.B.:_ Wenn alte Feindschaften des toten Throns nun dem Träger gelten.

### Relic/T11 — „Schlüssel ohne Schloss"
**Power:**
- `Relic/T11/P1` **öffnet verschlossene Türen** — Sperrt nahezu jede Tür auf. _Hilft z.B.:_ Um in ein verriegeltes Gewölbe zu gelangen, das keinen anderen Zugang hat.
- `Relic/T11/P2` **weist den Weg** — Zeigt die Richtung zum gesuchten Ziel. _Hilft z.B.:_ Um in einem Labyrinth den Pfad zum verborgenen Raum zu finden.
- `Relic/T11/P3` **verbirgt vor dem Bösen** — Schützt den Träger vor dem Blick finsterer Mächte. _Hilft z.B.:_ Um sich vor den Spähern einer finsteren Macht zu verstecken.
- `Relic/T11/P4` **spürt verborgene Schwellen** — Erkennt geheime Türen und verborgene Übergänge. _Hilft z.B.:_ Um eine versteckte Tür in einer glatten Wand aufzuspüren.

**Weakness:**
- `Relic/T11/W1` **leicht zu verlieren** — Der kleine Schlüssel geht schnell verloren. _Hindert z.B.:_ Wenn man ihn im entscheidenden Moment verlegt oder gestohlen bekommt.
- `Relic/T11/W2` **von Dieben begehrt** — Diebe haben es auf den Schlüssel abgesehen. _Hindert z.B.:_ Wenn Langfinger einen ständig umlauern und bestehlen wollen.

### Relic/T12 — „Kapsel verlorener Stimmen"
**Power:**
- `Relic/T12/P1` **spricht in Träumen** — Übermittelt Botschaften im Schlaf. _Hilft z.B.:_ Um im Traum einen Rat oder eine Warnung der Toten zu empfangen.
- `Relic/T12/P2` **bewahrt Worte der Toten** — Konserviert die Worte Verstorbener. _Hilft z.B.:_ Um das letzte Vermächtnis eines Toten wortgetreu wiederzugeben.
- `Relic/T12/P3` **flüsternder Rat aus alter Zeit** — Gibt geflüsterten Rat aus längst vergangenen Tagen. _Hilft z.B.:_ Um in einer Zwickmühle auf die Weisheit der Ahnen zu hören.
- `Relic/T12/P4` **enthüllt verborgene Wahrheiten** — Macht Verborgenes und Geheimes sichtbar. _Hilft z.B.:_ Um ein altes Geheimnis ans Licht zu bringen, das die Toten hüteten.

**Weakness:**
- `Relic/T12/W1` **die Stimmen verstummen nie** — Das Flüstern der Stimmen hört nie auf. _Hindert z.B.:_ Wenn das unablässige Raunen Schlaf und klaren Verstand raubt.
- `Relic/T12/W2` **verändert mich subtil** — Der Umgang mit der Kapsel wandelt den Träger heimlich. _Hindert z.B.:_ Wenn man unmerklich die Wesensart der Toten annimmt.


## Uncanny Being — Adventure
ID-Präfix: `Uncanny-Being`

### Uncanny-Being/T1 — „körperloser Geist"
**Power:**
- `Uncanny-Being/T1/P1` **fließt durch Spalten**
- `Uncanny-Being/T1/P2` **unverletzlich durch Stahl**
- `Uncanny-Being/T1/P3` **bewegt Dinge ohne Berührung**
- `Uncanny-Being/T1/P4` **spricht mit Toten**
- `Uncanny-Being/T1/P5` **durchdringt jede Wand**

**Weakness:**
- `Uncanny-Being/T1/W1` **gebannt durch Salz und Eisen**
- `Uncanny-Being/T1/W2` **gemieden von Mensch und Tier**

### Uncanny-Being/T2 — „Höllenkind"
**Power:**
- `Uncanny-Being/T2/P1` **übersteht Feuer**
- `Uncanny-Being/T2/P2` **Krallen oder Reißzähne**
- `Uncanny-Being/T2/P3` **spürt böse Magie**
- `Uncanny-Being/T2/P4` **flüstert Gedanken in andere**
- `Uncanny-Being/T2/P5` **furchteinflößende Präsenz**

**Weakness:**
- `Uncanny-Being/T2/W1` **angreifbar durch heiliges Symbol**
- `Uncanny-Being/T2/W2` **gehasst von beiden Welten**

### Uncanny-Being/T3 — „kleiner Hob"
**Power:**
- `Uncanny-Being/T3/P1` **bleibt unbemerkt nach Belieben**
- `Uncanny-Being/T3/P2` **findet jeden verborgenen Winkel**
- `Uncanny-Being/T3/P3` **schließt Pakt für eine Gabe**
- `Uncanny-Being/T3/P4` **spielt listige Streiche**
- `Uncanny-Being/T3/P5` **kennt die kleinen Geister**

**Weakness:**
- `Uncanny-Being/T3/W1` **an ein Versprechen gebunden**
- `Uncanny-Being/T3/W2` **leicht beleidigt und nachtragend**

### Uncanny-Being/T4 — „Wechselgestalt"
**Power:**
- `Uncanny-Being/T4/P1` **kann sich verwandeln**
- `Uncanny-Being/T4/P2` **trägt jedes fremde Gesicht**
- `Uncanny-Being/T4/P3` **ahmt fremde Stimmen nach**
- `Uncanny-Being/T4/P4` **schlüpft in jede Rolle**
- `Uncanny-Being/T4/P5` **entkommt durch neue Haut**

**Weakness:**
- `Uncanny-Being/T4/W1` **vergisst das eigene Gesicht**
- `Uncanny-Being/T4/W2` **ein Makel verrät die Gestalt**

### Uncanny-Being/T5 — „Mondgeborene"
**Power:**
- `Uncanny-Being/T5/P1` **Kraft im Mondlicht**
- `Uncanny-Being/T5/P2` **sieht das Unsichtbare**
- `Uncanny-Being/T5/P3` **liest die Zeichen am Himmel**
- `Uncanny-Being/T5/P4` **spürt die Gezeiten des Mondes**
- `Uncanny-Being/T5/P5` **wandelt sicher bei Nacht**

**Weakness:**
- `Uncanny-Being/T5/W1` **verliert Kontrolle bei Vollmond**
- `Uncanny-Being/T5/W2` **kraftlos bei Neumond**

### Uncanny-Being/T6 — „Schattenwandler"
**Power:**
- `Uncanny-Being/T6/P1` **verschwindet in den Schatten**
- `Uncanny-Being/T6/P2` **erscheint und verschwindet**
- `Uncanny-Being/T6/P3` **sieht vollständig im Dunkeln**
- `Uncanny-Being/T6/P4` **weilt in ungesehenen Räumen**
- `Uncanny-Being/T6/P5` **schleicht ohne Geräusch**

**Weakness:**
- `Uncanny-Being/T6/W1` **ihre Nähe verstört Menschen**
- `Uncanny-Being/T6/W2` **geschwächt im hellen Licht**

### Uncanny-Being/T7 — „halbwaches Traumkind"
**Power:**
- `Uncanny-Being/T7/P1` **wandelt durch Träume**
- `Uncanny-Being/T7/P2` **hört Ungesagtes**
- `Uncanny-Being/T7/P3` **flüstert Gedanken in andere**
- `Uncanny-Being/T7/P4` **sieht kommende Dinge im Schlaf**
- `Uncanny-Being/T7/P5` **wacht wenn andere träumen**

**Weakness:**
- `Uncanny-Being/T7/W1` **verwechselt Traum und Wachsein**
- `Uncanny-Being/T7/W2` **verirrt sich in fremden Träumen**

### Uncanny-Being/T8 — „Aschenwanderin"
**Power:**
- `Uncanny-Being/T8/P1` **übersteht Feuer**
- `Uncanny-Being/T8/P2` **findet den Weg zwischen Welten**
- `Uncanny-Being/T8/P3` **liest die Spuren im Staub**
- `Uncanny-Being/T8/P4` **beschwört Asche als Schleier**
- `Uncanny-Being/T8/P5` **schläft sicher in Ruinen**

**Weakness:**
- `Uncanny-Being/T8/W1` **nirgends willkommen**
- `Uncanny-Being/T8/W2` **hinterlässt verbrannte Spuren**

### Uncanny-Being/T9 — „Wassergeborene"
**Power:**
- `Uncanny-Being/T9/P1` **taucht endlos und tief**
- `Uncanny-Being/T9/P2` **spürt die Strömungen**
- `Uncanny-Being/T9/P3` **ruft das Wasser herbei**
- `Uncanny-Being/T9/P4` **atmet unter der Oberfläche**
- `Uncanny-Being/T9/P5` **spricht mit Wesen der Tiefe**

**Weakness:**
- `Uncanny-Being/T9/W1` **vertrocknet fern vom Wasser**
- `Uncanny-Being/T9/W2` **ruhelos auf festem Land**

### Uncanny-Being/T10 — „Kind des Zwielichts"
**Power:**
- `Uncanny-Being/T10/P1` **sieht durch Glamour und Täuschung**
- `Uncanny-Being/T10/P2` **spürt lebende Seelen**
- `Uncanny-Being/T10/P3` **wandelt zwischen Tag und Nacht**
- `Uncanny-Being/T10/P4` **beeinflusst Stimmungen durch Präsenz**
- `Uncanny-Being/T10/P5` **geht ungesehen durch Dämmerung**

**Weakness:**
- `Uncanny-Being/T10/W1` **gehört weder Tag noch Nacht**
- `Uncanny-Being/T10/W2` **schwindet im hellen Mittag**

### Uncanny-Being/T11 — „Riss zwischen den Welten"
**Power:**
- `Uncanny-Being/T11/P1` **findet den Weg zwischen Welten**
- `Uncanny-Being/T11/P2` **Sprache der anderen Seite**
- `Uncanny-Being/T11/P3` **verlässt kurz den Körper**
- `Uncanny-Being/T11/P4` **öffnet verborgene Pforten**
- `Uncanny-Being/T11/P5` **spürt dünne Stellen der Welt**

**Weakness:**
- `Uncanny-Being/T11/W1` **vergisst in der anderen Welt**
- `Uncanny-Being/T11/W2` **zieht Wesen von drüben an**

### Uncanny-Being/T12 — „Gezeichnete des Mondes"
**Power:**
- `Uncanny-Being/T12/P1` **verwandelt sich im Mondlicht**
- `Uncanny-Being/T12/P2` **Krallen oder Reißzähne**
- `Uncanny-Being/T12/P3` **wittert Beute über weite Wege**
- `Uncanny-Being/T12/P4` **heilt im Schein des Mondes**
- `Uncanny-Being/T12/P5` **bricht Fesseln durch rohe Kraft**

**Weakness:**
- `Uncanny-Being/T12/W1` **verliert Kontrolle bei Vollmond**
- `Uncanny-Being/T12/W2` **das Mal verrät ihr Wesen**


---

# Tier: Greatness

## Destiny — Greatness
ID-Präfix: `Destiny`

### Destiny/T1 — „Erbin des Throns"
**Power:**
- `Destiny/T1/P1` **Blutrecht der Krone**
- `Destiny/T1/P2` **die Welt hört auf mich**
- `Destiny/T1/P3` **Treue eines ganzen Reiches**
- `Destiny/T1/P4` **ihr Wort trägt Gewicht**
- `Destiny/T1/P5` **geborene Herrscherin**

**Weakness:**
- `Destiny/T1/W1` **Rivalen wollen den Thron**
- `Destiny/T1/W2` **andere fordern meinen Tod**
- `Destiny/T1/W3` **Last der Krone**

### Destiny/T2 — „Untergang der Welt"
**Power:**
- `Destiny/T2/P1` **erkennt das Ende in allem**
- `Destiny/T2/P2` **überlebt das Unmögliche**
- `Destiny/T2/P3` **sieht das nahende Unheil**
- `Destiny/T2/P4` **unerschütterlicher Mut**
- `Destiny/T2/P5` **steht immer wieder auf**

**Weakness:**
- `Destiny/T2/W1` **die Bestimmung fordert Opfer**
- `Destiny/T2/W2` **Feinde wollen mich verhindern**
- `Destiny/T2/W3` **vom Ende gezeichnet**

### Destiny/T3 — „Sucher des Erzählers"
**Power:**
- `Destiny/T3/P1` **findet Zeichen im Zufall**
- `Destiny/T3/P2` **Zeichen weisen den Weg**
- `Destiny/T3/P3` **liest den Faden der Geschichte**
- `Destiny/T3/P4` **verbotene Türen öffnen sich**
- `Destiny/T3/P5` **spürt verborgene Wahrheit**

**Weakness:**
- `Destiny/T3/W1` **besessen von der Suche**
- `Destiny/T3/W2` **der Pfad ist eng**
- `Destiny/T3/W3` **zweifelt an der Prophezeiung**

### Destiny/T4 — „Auserwählter der Götter"
**Power:**
- `Destiny/T4/P1` **Segen der Götter**
- `Destiny/T4/P2` **wundersame Rettung**
- `Destiny/T4/P3` **Schicksal beschützt mich**
- `Destiny/T4/P4` **Verbündete erscheinen**
- `Destiny/T4/P5` **trägt göttliche Autorität**

**Weakness:**
- `Destiny/T4/W1` **die Götter fordern Gehorsam**
- `Destiny/T4/W2` **Hochmut verfolgt mich**
- `Destiny/T4/W3` **Ketzer fordern meinen Tod**

### Destiny/T5 — „das letzte Licht"
**Power:**
- `Destiny/T5/P1` **leuchtet in der Finsternis**
- `Destiny/T5/P2` **zieht die Richtigen an**
- `Destiny/T5/P3` **gibt allen Hoffnung**
- `Destiny/T5/P4` **Verbündete erscheinen**
- `Destiny/T5/P5` **hält die Dunkelheit zurück**

**Weakness:**
- `Destiny/T5/W1` **die Finsternis jagt mich**
- `Destiny/T5/W2` **darf niemals erlöschen**
- `Destiny/T5/W3` **trägt aller Hoffnung Last**

### Destiny/T6 — „das Kind der Sterne"
**Power:**
- `Destiny/T6/P1` **die Sterne stehen günstig**
- `Destiny/T6/P2` **Glück folgt meinen Schritten**
- `Destiny/T6/P3` **Vorhersehung leitet mich**
- `Destiny/T6/P4` **die Welt richtet sich aus**
- `Destiny/T6/P5` **liest den Himmel**

**Weakness:**
- `Destiny/T6/W1` **an den Sternenlauf gebunden**
- `Destiny/T6/W2` **keine freie Wahl mehr**
- `Destiny/T6/W3` **fremd unter Menschen**

### Destiny/T7 — „Trägerin des alten Zeichens"
**Power:**
- `Destiny/T7/P1` **das Mal weist mich aus**
- `Destiny/T7/P2` **verbotene Türen öffnen sich**
- `Destiny/T7/P3` **die Alten erkennen mich**
- `Destiny/T7/P4` **Zeichen pulsiert bei Gefahr**
- `Destiny/T7/P5` **schwer zu widerstehen**

**Weakness:**
- `Destiny/T7/W1` **das Mal zieht Jäger an**
- `Destiny/T7/W2` **kennt die Last nicht**
- `Destiny/T7/W3` **gezeichnet für immer**

### Destiny/T8 — „Schließerin des Risses"
**Power:**
- `Destiny/T8/P1` **bannt das Eindringende**
- `Destiny/T8/P2` **Wege öffnen sich**
- `Destiny/T8/P3` **spürt den Riss der Welt**
- `Destiny/T8/P4` **die Welt richtet sich aus**
- `Destiny/T8/P5` **hält die Schwelle**

**Weakness:**
- `Destiny/T8/W1` **der Riss zehrt an mir**
- `Destiny/T8/W2` **die Bestimmung fordert Opfer**
- `Destiny/T8/W3` **Kreaturen jenseits jagen mich**

### Destiny/T9 — „Prophezeite der Tiefe"
**Power:**
- `Destiny/T9/P1` **Träume offenbaren Geheimnisse**
- `Destiny/T9/P2` **Stimmen der Tiefe leiten mich**
- `Destiny/T9/P3` **verborgene Helfer**
- `Destiny/T9/P4` **kennt die alten Weissagungen**
- `Destiny/T9/P5` **übersteht das verborgene Grauen**

**Weakness:**
- `Destiny/T9/W1` **die Tiefe ruft nach mir**
- `Destiny/T9/W2` **zweifelt an der Prophezeiung**
- `Destiny/T9/W3` **Albträume rauben den Schlaf**

### Destiny/T10 — „Kind zweier Zeitalter"
**Power:**
- `Destiny/T10/P1` **Wissen zweier Welten**
- `Destiny/T10/P2` **Brücke zwischen alt und neu**
- `Destiny/T10/P3` **Bestimmung pulsiert in mir**
- `Destiny/T10/P4` **übersteht den Wandel der Zeit**
- `Destiny/T10/P5` **erinnert das vergangene Zeitalter**

**Weakness:**
- `Destiny/T10/W1` **in keiner Zeit zu Hause**
- `Destiny/T10/W2` **zerrissen zwischen den Welten**
- `Destiny/T10/W3` **von beiden Seiten misstraut**

### Destiny/T11 — „Erfüllerin des vergessenen Wortes"
**Power:**
- `Destiny/T11/P1` **spricht das vergessene Wort**
- `Destiny/T11/P2` **verbotene Türen öffnen sich**
- `Destiny/T11/P3` **kennt die verlorene Weissagung**
- `Destiny/T11/P4` **die Welt richtet sich aus**
- `Destiny/T11/P5` **ihr Wort trägt Gewicht**

**Weakness:**
- `Destiny/T11/W1` **das Wort verlangt seinen Preis**
- `Destiny/T11/W2` **viele begehren das Wort**
- `Destiny/T11/W3` **darf das Wort nie missbrauchen**

### Destiny/T12 — „Schlusspunkt der Geschichte"
**Power:**
- `Destiny/T12/P1` **Bestimmung pulsiert in mir**
- `Destiny/T12/P2` **mein Antlitz erkennt jeder**
- `Destiny/T12/P3` **handelt instinktiv richtig**
- `Destiny/T12/P4` **alle Wege enden bei mir**
- `Destiny/T12/P5` **überlebt das Unmögliche**

**Weakness:**
- `Destiny/T12/W1` **das Ende lastet auf mir**
- `Destiny/T12/W2` **keine freie Wahl mehr**
- `Destiny/T12/W3` **zieht ungesuchte Feinde an**


## Dominion — Greatness
ID-Präfix: `Dominion`

### Dominion/T1 — „Herrin der Mark"
**Power:**
- `Dominion/T1/P1` **Tribute aus dem Land**
- `Dominion/T1/P2` **kennt jede Grenze des Reiches**
- `Dominion/T1/P3` **Soldaten der Mark**
- `Dominion/T1/P4` **ein ergebenes Volk**
- `Dominion/T1/P5` **Banner und Wappen**

**Weakness:**
- `Dominion/T1/W1` **zahlt persönlich fürs Reich**
- `Dominion/T1/W2` **jede Schwäche wird ausgenutzt**

### Dominion/T2 — „Anführerin der Gilde"
**Power:**
- `Dominion/T2/P1` **Gildensiegel**
- `Dominion/T2/P2` **eingespielte Verwaltung**
- `Dominion/T2/P3` **Steuereinnahmen**
- `Dominion/T2/P4` **macht und bricht Rufe**
- `Dominion/T2/P5` **kennt jedermanns Schulden**

**Weakness:**
- `Dominion/T2/W1` **Konkurrenz um die Spitze**
- `Dominion/T2/W2` **jedes Bündnis hat seinen Preis**

### Dominion/T3 — „Lehnsherr von Stein"
**Power:**
- `Dominion/T3/P1` **Burg auf dem Berg**
- `Dominion/T3/P2` **Recht zu richten**
- `Dominion/T3/P3` **Räte und Berater**
- `Dominion/T3/P4` **kennt die Adligen**
- `Dominion/T3/P5` **ihr Wort verurteilt**

**Weakness:**
- `Dominion/T3/W1` **der Thron wird begehrt**
- `Dominion/T3/W2` **Schulden gegenüber Mächtigen**

### Dominion/T4 — „Königin des Tales"
**Power:**
- `Dominion/T4/P1` **ein ergebenes Volk**
- `Dominion/T4/P2` **spricht für ein Volk**
- `Dominion/T4/P3` **Tribute aus dem Land**
- `Dominion/T4/P4` **wendet Krisen ab**
- `Dominion/T4/P5` **kennt jede Grenze ihres Reiches**

**Weakness:**
- `Dominion/T4/W1` **einsam an der Spitze**
- `Dominion/T4/W2` **zahlt persönlich für ihr Reich**

### Dominion/T5 — „Befehlshaber der Wache"
**Power:**
- `Dominion/T5/P1` **regiert durch Stärke**
- `Dominion/T5/P2` **bewegt Heere in Tagen**
- `Dominion/T5/P3` **Recht auf Krieg**
- `Dominion/T5/P4` **kennt jede Losung jeder Wache**
- `Dominion/T5/P5` **Soldaten meines Reiches**

**Weakness:**
- `Dominion/T5/W1` **Aufstand gärt**
- `Dominion/T5/W2` **Entscheidungen ohne Gewissen**

### Dominion/T6 — „Herrscherin des Zwielichtreiches"
**Power:**
- `Dominion/T6/P1` **beste Spione weit und breit**
- `Dominion/T6/P2` **verborgene Reserven**
- `Dominion/T6/P3` **wendet Krisen ab**
- `Dominion/T6/P4` **kennt jedes Schweigen**
- `Dominion/T6/P5` **zieht Fäden im Verborgenen**

**Weakness:**
- `Dominion/T6/W1` **Verräter im inneren Kreis**
- `Dominion/T6/W2` **unsichtbare Feinde**

### Dominion/T7 — „Erbin einer Festung ohne Land"
**Power:**
- `Dominion/T7/P1` **Banner und Wappen**
- `Dominion/T7/P2` **kann andere legitimieren**
- `Dominion/T7/P3` **eine Handvoll treuer Soldaten**
- `Dominion/T7/P4` **uralte Ansprüche**
- `Dominion/T7/P5` **Burg auf dem Berg**

**Weakness:**
- `Dominion/T7/W1` **ein Reich nur auf Papier**
- `Dominion/T7/W2` **Schulden gegenüber Mächtigen**

### Dominion/T8 — „Anführerin des Widerstands"
**Power:**
- `Dominion/T8/P1` **kann Verbündete mobilisieren**
- `Dominion/T8/P2` **spricht für ein unterdrücktes Volk**
- `Dominion/T8/P3` **Boten in jede Richtung**
- `Dominion/T8/P4` **regiert durch Überzeugung**
- `Dominion/T8/P5` **verborgene Reserven**

**Weakness:**
- `Dominion/T8/W1` **gejagt von der herrschenden Macht**
- `Dominion/T8/W2` **Verräter im inneren Kreis**

### Dominion/T9 — „Regentin für ein Kind"
**Power:**
- `Dominion/T9/P1` **Räte und Berater**
- `Dominion/T9/P2` **kann andere legitimieren**
- `Dominion/T9/P3` **Vertrauen der Mächtigen**
- `Dominion/T9/P4` **beherrscht das Gleichgewicht der Mächte**
- `Dominion/T9/P5` **ihr Wort gilt am Hof**

**Weakness:**
- `Dominion/T9/W1` **Macht nur geliehen**
- `Dominion/T9/W2` **der Thron wird begehrt**

### Dominion/T10 — „Herrscherin durch Geburt und Last"
**Power:**
- `Dominion/T10/P1` **ererbtes Recht**
- `Dominion/T10/P2` **ein ergebenes Volk**
- `Dominion/T10/P3` **wendet Krisen ab**
- `Dominion/T10/P4` **Banner und Wappen**
- `Dominion/T10/P5` **Räte und Berater**

**Weakness:**
- `Dominion/T10/W1` **einsam an der Spitze**
- `Dominion/T10/W2` **kann die Krone nicht ablegen**

### Dominion/T11 — „Herrin der verbotenen Stadt"
**Power:**
- `Dominion/T11/P1` **Zugang zu verschlossenen Orten**
- `Dominion/T11/P2` **beste Spione weit und breit**
- `Dominion/T11/P3` **kennt das Geheimnis aller**
- `Dominion/T11/P4` **ihr Wort verurteilt**
- `Dominion/T11/P5` **verborgene Reserven**

**Weakness:**
- `Dominion/T11/W1` **jede Schwäche wird ausgenutzt**
- `Dominion/T11/W2` **alte Intrigen holen sie ein**

### Dominion/T12 — „Gebieterin über Leben und Tod"
**Power:**
- `Dominion/T12/P1` **Recht zu richten**
- `Dominion/T12/P2` **ihr Wort verurteilt**
- `Dominion/T12/P3` **ein ergebenes Volk**
- `Dominion/T12/P4` **regiert durch Furcht und Gnade**
- `Dominion/T12/P5` **Räte und Berater**

**Weakness:**
- `Dominion/T12/W1` **Entscheidungen ohne Gewissen**
- `Dominion/T12/W2` **einsam an der Spitze**


## Mastery — Greatness
ID-Präfix: `Mastery`

### Mastery/T1 — „legendärer Schmied"
**Power:**
- `Mastery/T1/P1` **Werkzeuge eines Meisters** — Meisterhaft gefertigtes Werkzeug von höchster Güte. _Hilft z.B.:_ Um eine Arbeit zu vollbringen, an der gewöhnliches Werkzeug scheitert.
- `Mastery/T1/P2` **kennt die Seele des Materials** — Versteht jedes Material bis in sein innerstes Wesen. _Hilft z.B.:_ Um aus einem scheinbar wertlosen Rohstoff sein volles Potenzial zu holen.
- `Mastery/T1/P3` **Klingen für Helden** — Schmiedet Waffen, die großer Taten würdig sind. _Hilft z.B.:_ Um einem Helden eine Klinge zu schaffen, die seiner Bestimmung gerecht wird.
- `Mastery/T1/P4` **Werke überdauern Jahrhunderte** — Seine Werke trotzen der Zeit über Generationen. _Hilft z.B.:_ Um etwas zu erschaffen, das noch in fernen Zeiten Bestand hat.
- `Mastery/T1/P5` **Feuer gehorcht ihm** — Beherrscht die Esse, als folge das Feuer seinem Willen. _Hilft z.B.:_ Um eine Schmiedearbeit zu vollenden, die exakte Hitzeführung verlangt.

**Weakness:**
- `Mastery/T1/W1` **gefährdet durch Neid** — Der Erfolg weckt gefährlichen Neid. _Hindert z.B.:_ Wenn Neider hinter dem Rücken intrigieren oder das Werk sabotieren.
- `Mastery/T1/W2` **alle wollen seine Waffen** — Jeder begehrt seine berühmten Erzeugnisse. _Hindert z.B.:_ Wenn man von Bittstellern und Räubern gleichermaßen bedrängt wird.
- `Mastery/T1/W3` **Ruhm zieht Feinde an** — Der große Ruf lockt Rivalen und Feinde herbei. _Hindert z.B.:_ Wenn Ruhmsüchtige einen herausfordern, um sich selbst einen Namen zu machen.

### Mastery/T2 — „Meister der Klinge"
**Power:**
- `Mastery/T2/P1` **unschlagbar im Wettkampf** — Bleibt im Wettstreit seines Fachs ungeschlagen. _Hilft z.B.:_ Um ein Turnier zu gewinnen, dessen Sieg Türen öffnet.
- `Mastery/T2/P2` **Technik ohne Namen** — Beherrscht einen Kunstgriff, den kein anderer kennt. _Hilft z.B.:_ Um einen Gegner mit einer Methode zu überwinden, die niemand kommen sieht.
- `Mastery/T2/P3` **liest jeden Gegner sofort** — Durchschaut Kampfstil und Absicht eines Gegners im Nu. _Hilft z.B.:_ Um die nächste Bewegung eines Duellanten vorherzusehen und zu kontern.
- `Mastery/T2/P4` **meisterhafte Kontrolle** — Führt seine Kunst mit vollkommener Präzision aus. _Hilft z.B.:_ Um einen Hieb haargenau zu setzen, ohne den Unbeteiligten daneben zu treffen.
- `Mastery/T2/P5` **gilt als Legende** — Sein Können ist sagenumwoben und weithin gerühmt. _Hilft z.B.:_ Um allein durch den Ruf Respekt und Gehör zu erzwingen.

**Weakness:**
- `Mastery/T2/W1` **Herausforderer ohne Ende** — Ständig fordern Neue zum Wettstreit heraus. _Hindert z.B.:_ Wenn man nie zur Ruhe kommt, weil immer der nächste Herausforderer wartet.
- `Mastery/T2/W2` **Ruhm zieht Feinde an** — Der große Ruf lockt Rivalen und Feinde herbei. _Hindert z.B.:_ Wenn Ruhmsüchtige einen herausfordern, um sich selbst einen Namen zu machen.
- `Mastery/T2/W3` **erträgt keine Niederlage** — Kann mit einer Niederlage nicht umgehen. _Hindert z.B.:_ Wenn verletzter Stolz nach einem Misserfolg zu unbedachtem Handeln treibt.

### Mastery/T3 — „Erbauer der Welten"
**Power:**
- `Mastery/T3/P1` **vollbringt das Unmögliche** — Schafft, was alle anderen für undurchführbar halten. _Hilft z.B.:_ Um eine Aufgabe zu lösen, die jeder Fachmann für aussichtslos erklärt.
- `Mastery/T3/P2` **geht über alles Dagewesene hinaus** — Übertrifft alles, was sein Fach je hervorbrachte. _Hilft z.B.:_ Um ein Werk zu schaffen, das jeden bisherigen Maßstab sprengt.
- `Mastery/T3/P3` **sieht Jahre im Werkstück** — Erkennt im rohen Material das fertige Werk weit voraus. _Hilft z.B.:_ Um ein gewaltiges Bauvorhaben von Anfang bis Ende zu durchdenken.
- `Mastery/T3/P4` **Werke überdauern Jahrhunderte** — Seine Werke trotzen der Zeit über Generationen. _Hilft z.B.:_ Um etwas zu erschaffen, das noch in fernen Zeiten Bestand hat.
- `Mastery/T3/P5` **Bauwerke trotzen der Zeit** — Seine Bauten überstehen Zeitalter unversehrt. _Hilft z.B.:_ Um eine Festung zu errichten, die jeder Belagerung und den Jahrhunderten standhält.

**Weakness:**
- `Mastery/T3/W1` **Geisel der eigenen Größe** — Die eigene Größe wird zur Fessel. _Hindert z.B.:_ Wenn überzogene Erwartungen jede freie Entscheidung lähmen.
- `Mastery/T3/W2` **unzumutbare Selbstansprüche** — Treibt sich mit unerfüllbaren Ansprüchen selbst. _Hindert z.B.:_ Wenn man ein gutes Werk verwirft, weil es dem eigenen Ideal nicht genügt.

### Mastery/T4 — „Königin der Stimme"
**Power:**
- `Mastery/T4/P1` **unverwechselbarer Stil** — Eine Handschrift, die sofort als die seine erkannt wird. _Hilft z.B.:_ Um ein Werk zu schaffen, das allein durch seinen Stil Bewunderung weckt.
- `Mastery/T4/P2` **bewegt jedes Herz** — Rührt mit seiner Kunst jeden Zuhörer zutiefst. _Hilft z.B.:_ Um eine feindselige Menge durch eine Darbietung umzustimmen.
- `Mastery/T4/P3` **ihr Ruf öffnet Türen** — Der berühmte Name verschafft überall Zugang. _Hilft z.B.:_ Um bei einem Mächtigen vorgelassen zu werden, der sonst niemanden empfängt.
- `Mastery/T4/P4` **meisterhafte Kontrolle** — Führt ihre Kunst mit vollkommener Präzision aus. _Hilft z.B.:_ Um auch unter Druck einen fehlerlosen, gefeierten Auftritt zu liefern.
- `Mastery/T4/P5` **gilt als Legende** — Ihr Können ist sagenumwoben und weithin gerühmt. _Hilft z.B.:_ Um allein durch den Ruf Respekt und Gehör zu erzwingen.

**Weakness:**
- `Mastery/T4/W1` **gefährdet durch Neid** — Der Erfolg weckt gefährlichen Neid. _Hindert z.B.:_ Wenn Neider hinter dem Rücken intrigieren oder den Auftritt sabotieren.
- `Mastery/T4/W2` **Ruhm zieht Feinde an** — Der große Ruf lockt Rivalen und Feinde herbei. _Hindert z.B.:_ Wenn Ruhmsüchtige einen herausfordern, um sich selbst einen Namen zu machen.

### Mastery/T5 — „unangefochtene Heilerin"
**Power:**
- `Mastery/T5/P1` **kennt jede Variante** — Beherrscht jede Spielart und Ausprägung des Fachs. _Hilft z.B.:_ Um für ein ungewöhnliches Leiden die genau passende Behandlung zu wählen.
- `Mastery/T5/P2` **andere Meister suchen Rat** — Selbst Könner des Fachs kommen um Rat. _Hilft z.B.:_ Um durch anerkannte Autorität ein Fachurteil durchzusetzen.
- `Mastery/T5/P3` **erkennt ungeahnte Fehler** — Entdeckt Mängel, die allen anderen entgehen. _Hilft z.B.:_ Um eine verborgene Ursache eines Leidens zu finden, an der andere scheitern.
- `Mastery/T5/P4` **vollbringt das Unmögliche** — Schafft, was alle anderen für undurchführbar halten. _Hilft z.B.:_ Um einen Sterbenden zu retten, den jeder andere bereits aufgegeben hat.
- `Mastery/T5/P5` **Heilung gegen jedes Leiden** — Findet ein Heilmittel für nahezu jedes Gebrechen. _Hilft z.B.:_ Um eine Krankheit zu kurieren, an der andere Heiler scheitern.

**Weakness:**
- `Mastery/T5/W1` **alle wollen von mir lernen** — Wird ständig von Lernwilligen belagert. _Hindert z.B.:_ Wenn man keine Zeit zum eigenen Wirken findet, weil alle nach Unterweisung drängen.
- `Mastery/T5/W2` **erwartet zu hohe Standards** — Setzt unrealistisch hohe Maßstäbe an andere. _Hindert z.B.:_ Wenn man fähige Helfer vergrault, weil ihnen nichts gut genug ist.
- `Mastery/T5/W3` **kein Verlust verziehen** — Verzeiht sich keinen Misserfolg, kein verlorenes Leben. _Hindert z.B.:_ Wenn die Angst vor dem Scheitern einen im entscheidenden Moment zaudern lässt.

### Mastery/T6 — „Weber des Lebens"
**Power:**
- `Mastery/T6/P1` **geheime Techniken** — Verfügt über verborgenes, gehütetes Fachwissen. _Hilft z.B.:_ Um etwas zu bewirken, dessen Methode sonst niemand kennt.
- `Mastery/T6/P2` **vollbringt das Unmögliche** — Schafft, was alle anderen für undurchführbar halten. _Hilft z.B.:_ Um eine Aufgabe zu lösen, die jeder Fachmann für aussichtslos erklärt.
- `Mastery/T6/P3` **kennt die Seele des Materials** — Versteht jedes Material – selbst lebendiges – bis in sein Wesen. _Hilft z.B.:_ Um aus widerspenstigem Stoff genau die gewünschte Form zu gewinnen.
- `Mastery/T6/P4` **Technik für jede Umgebung** — Passt seine Kunst jeder noch so widrigen Lage an. _Hilft z.B.:_ Um auch unter unmöglichen Bedingungen sein Werk zu vollbringen.
- `Mastery/T6/P5` **formt was lebendig ist** — Gestaltet sogar lebendige Materie nach seinem Willen. _Hilft z.B.:_ Um eine Pflanze oder ein Wesen gezielt umzuformen.

**Weakness:**
- `Mastery/T6/W1` **Geisel der eigenen Größe** — Die eigene Größe wird zur Fessel. _Hindert z.B.:_ Wenn überzogene Erwartungen jede freie Entscheidung lähmen.
- `Mastery/T6/W2` **gefürchtet wie gerühmt** — Wird ebenso gefürchtet wie bewundert. _Hindert z.B.:_ Wenn Misstrauen vor der eigenen Kunst nötige Hilfe verhindert.

### Mastery/T7 — „letzte ihrer Schule"
**Power:**
- `Mastery/T7/P1` **Technik ohne Namen** — Beherrscht einen Kunstgriff, den kein anderer mehr kennt. _Hilft z.B.:_ Um ein Problem mit einer Methode zu lösen, die sonst niemand beherrscht.
- `Mastery/T7/P2` **kennt die Geschichte des Fachs** — Kennt die gesamte Überlieferung seines Fachs. _Hilft z.B.:_ Um aus vergessenem Wissen die Lösung für ein altes Rätsel zu schöpfen.
- `Mastery/T7/P3` **geheime Techniken** — Verfügt über verborgenes, gehütetes Fachwissen. _Hilft z.B.:_ Um etwas zu bewirken, dessen Methode sonst niemand kennt.
- `Mastery/T7/P4` **meisterhafte Kontrolle** — Führt seine Kunst mit vollkommener Präzision aus. _Hilft z.B.:_ Um eine haarfeine, fehlerlose Arbeit unter Druck zu vollbringen.
- `Mastery/T7/P5` **trägt ein verlorenes Erbe** — Bewahrt das Erbe einer untergegangenen Schule. _Hilft z.B.:_ Um eine Kunst anzuwenden, die mit ihrer Schule fast ausgestorben ist.

**Weakness:**
- `Mastery/T7/W1` **niemand auf ihrer Ebene** — Findet niemanden von gleichem Rang. _Hindert z.B.:_ Wenn man keinen ebenbürtigen Verbündeten oder Nachfolger findet.
- `Mastery/T7/W2` **letzte Hüterin des Wissens** — Trägt als Letzte ein ganzes Wissen allein. _Hindert z.B.:_ Wenn das Wissen mit einem zu sterben droht und keiner es übernehmen kann.

### Mastery/T8 — „Meisterin der verbotenen Kunst"
**Power:**
- `Mastery/T8/P1` **geheime Techniken** — Verfügt über verborgenes, gehütetes Fachwissen. _Hilft z.B.:_ Um etwas zu bewirken, dessen Methode sonst niemand kennt.
- `Mastery/T8/P2` **Technik ohne Namen** — Beherrscht einen Kunstgriff, den kein anderer kennt. _Hilft z.B.:_ Um ein Problem mit einer Methode zu lösen, die niemand kommen sieht.
- `Mastery/T8/P3` **vollbringt das Unmögliche** — Schafft, was alle anderen für undurchführbar halten. _Hilft z.B.:_ Um eine Aufgabe zu lösen, die jeder Fachmann für aussichtslos erklärt.
- `Mastery/T8/P4` **kennt jede Variante** — Beherrscht jede Spielart und Ausprägung des Fachs. _Hilft z.B.:_ Um für ein ungewöhnliches Problem die genau passende Methode zu wählen.
- `Mastery/T8/P5` **wirkt was andere fürchten** — Wagt sich an das, wovor andere zurückschrecken. _Hilft z.B.:_ Um ein gefürchtetes, verbotenes Verfahren gezielt einzusetzen.

**Weakness:**
- `Mastery/T8/W1` **von Hütern gejagt** — Wird von Wächtern der verbotenen Kunst verfolgt. _Hindert z.B.:_ Wenn man die Kunst nicht offen anwenden kann, ohne Jäger anzulocken.
- `Mastery/T8/W2` **gefürchtet wie gerühmt** — Wird ebenso gefürchtet wie bewundert. _Hindert z.B.:_ Wenn Misstrauen vor der eigenen Kunst nötige Hilfe verhindert.
- `Mastery/T8/W3` **Ruhm zieht Feinde an** — Der große Ruf lockt Rivalen und Feinde herbei. _Hindert z.B.:_ Wenn Ruhmsüchtige einen herausfordern, um sich selbst einen Namen zu machen.

### Mastery/T9 — „Lehrmeisterin ohne Schüler"
**Power:**
- `Mastery/T9/P1` **lehrt mit einem Blick** — Vermittelt sein Können fast ohne Worte. _Hilft z.B.:_ Um einem Schüler in kürzester Zeit eine schwierige Kunst beizubringen.
- `Mastery/T9/P2` **andere Meister suchen Rat** — Selbst Könner des Fachs kommen um Rat. _Hilft z.B.:_ Um durch anerkannte Autorität ein Fachurteil durchzusetzen.
- `Mastery/T9/P3` **kennt die Geschichte des Fachs** — Kennt die gesamte Überlieferung seines Fachs. _Hilft z.B.:_ Um aus vergessenem Wissen die Lösung für ein altes Rätsel zu schöpfen.
- `Mastery/T9/P4` **erkennt ungeahnte Fehler** — Entdeckt Mängel, die allen anderen entgehen. _Hilft z.B.:_ Um einen verborgenen Konstruktionsfehler zu finden, bevor er Unheil stiftet.
- `Mastery/T9/P5` **veredelt fremdes Werk** — Hebt die Arbeit anderer auf ein höheres Niveau. _Hilft z.B.:_ Um ein misslungenes Werk eines anderen zur Meisterschaft zu vollenden.

**Weakness:**
- `Mastery/T9/W1` **niemand auf ihrer Ebene** — Findet niemanden von gleichem Rang. _Hindert z.B.:_ Wenn man keinen ebenbürtigen Verbündeten oder Nachfolger findet.
- `Mastery/T9/W2` **erträgt kein Mittelmaß** — Duldet keine Mittelmäßigkeit. _Hindert z.B.:_ Wenn man brauchbare, aber unvollkommene Hilfe abweist und allein dasteht.

### Mastery/T10 — „Legende zu Lebzeiten"
**Power:**
- `Mastery/T10/P1` **ihr Name flößt Ehrfurcht ein** — Der bloße Name gebietet Ehrfurcht. _Hilft z.B.:_ Um Gegner allein durch die Nennung des eigenen Namens einzuschüchtern.
- `Mastery/T10/P2` **ihr Ruf öffnet Türen** — Der berühmte Name verschafft überall Zugang. _Hilft z.B.:_ Um bei einem Mächtigen vorgelassen zu werden, der sonst niemanden empfängt.
- `Mastery/T10/P3` **Werkstatt mit eigenem Namen** — Eine berühmte Werkstatt, die für Spitzenqualität steht. _Hilft z.B.:_ Um mit dem Renommee der Werkstatt einen lukrativen Auftrag zu sichern.
- `Mastery/T10/P4` **vollbringt das Unmögliche** — Schafft, was alle anderen für undurchführbar halten. _Hilft z.B.:_ Um eine Aufgabe zu lösen, die jeder Fachmann für aussichtslos erklärt.
- `Mastery/T10/P5` **Schüler aus aller Welt** — Lernbegierige strömen von überall herbei. _Hilft z.B.:_ Um über ergebene Schüler überall Augen, Ohren und Helfer zu haben.

**Weakness:**
- `Mastery/T10/W1` **Geisel der eigenen Größe** — Die eigene Größe wird zur Fessel. _Hindert z.B.:_ Wenn überzogene Erwartungen jede freie Entscheidung lähmen.
- `Mastery/T10/W2` **gefährdet durch Neid** — Der Erfolg weckt gefährlichen Neid. _Hindert z.B.:_ Wenn Neider hinter dem Rücken intrigieren oder das Werk sabotieren.
- `Mastery/T10/W3` **Ruhm zieht Feinde an** — Der große Ruf lockt Rivalen und Feinde herbei. _Hindert z.B.:_ Wenn Ruhmsüchtige einen herausfordern, um sich selbst einen Namen zu machen.

### Mastery/T11 — „vollendete Navigatorin"
**Power:**
- `Mastery/T11/P1` **Technik für jede Umgebung** — Passt seine Kunst jeder noch so widrigen Lage an. _Hilft z.B.:_ Um auch in Sturm und Finsternis sicher zu navigieren.
- `Mastery/T11/P2` **kennt jede Variante** — Beherrscht jede Spielart und Ausprägung des Fachs. _Hilft z.B.:_ Um für eine ungewöhnliche Route die genau passende Methode zu wählen.
- `Mastery/T11/P3` **meisterhafte Kontrolle** — Führt ihre Kunst mit vollkommener Präzision aus. _Hilft z.B.:_ Um ein Schiff durch eine enge, tückische Passage zu steuern.
- `Mastery/T11/P4` **findet jeden Weg** — Findet selbst durch unwegsamstes Gebiet einen Pfad. _Hilft z.B.:_ Um eine Gruppe sicher durch unbekanntes, gefährliches Gelände zu führen.
- `Mastery/T11/P5` **liest Himmel und Strömung** — Deutet Gestirne, Wind und Wasser zur Navigation. _Hilft z.B.:_ Um auf offener See ohne Karte den richtigen Kurs zu halten.

**Weakness:**
- `Mastery/T11/W1` **erwartet zu hohe Standards** — Setzt unrealistisch hohe Maßstäbe an andere. _Hindert z.B.:_ Wenn man fähige Helfer vergrault, weil ihnen nichts gut genug ist.
- `Mastery/T11/W2` **niemand auf ihrer Ebene** — Findet niemanden von gleichem Rang. _Hindert z.B.:_ Wenn man keinen ebenbürtigen Verbündeten oder Nachfolger findet.

### Mastery/T12 — „Großmeisterin der Gilde"
**Power:**
- `Mastery/T12/P1` **Werkstatt mit eigenem Namen** — Eine berühmte Werkstatt, die für Spitzenqualität steht. _Hilft z.B.:_ Um mit dem Renommee der Werkstatt einen lukrativen Auftrag zu sichern.
- `Mastery/T12/P2` **ihr Ruf öffnet Türen** — Der berühmte Name verschafft überall Zugang. _Hilft z.B.:_ Um bei einem Mächtigen vorgelassen zu werden, der sonst niemanden empfängt.
- `Mastery/T12/P3` **Schüler aus aller Welt** — Lernbegierige strömen von überall herbei. _Hilft z.B.:_ Um über ergebene Schüler überall Augen, Ohren und Helfer zu haben.
- `Mastery/T12/P4` **beherrscht verwandte Disziplinen** — Meistert auch die Nachbarfächer seines Fachs. _Hilft z.B.:_ Um ein Problem zu lösen, das mehrere Disziplinen zugleich verlangt.
- `Mastery/T12/P5` **setzt den Maßstab des Fachs** — Definiert, was im Fach als meisterhaft gilt. _Hilft z.B.:_ Um als anerkannte Instanz ein verbindliches Urteil zu fällen.

**Weakness:**
- `Mastery/T12/W1` **gefährdet durch Neid** — Der Erfolg weckt gefährlichen Neid. _Hindert z.B.:_ Wenn Neider hinter dem Rücken intrigieren oder das Werk sabotieren.
- `Mastery/T12/W2` **Geisel der eigenen Größe** — Die eigene Größe wird zur Fessel. _Hindert z.B.:_ Wenn überzogene Erwartungen jede freie Entscheidung lähmen.
- `Mastery/T12/W3` **Rivalen um den Vorsitz** — Konkurrenten streiten um die Führungsrolle. _Hindert z.B.:_ Wenn interne Rivalen die eigene Autorität in der Gilde untergraben.


## Monstrosity — Greatness
ID-Präfix: `Monstrosity`

### Monstrosity/T1 — „Drachenwurm"
**Power:**
- `Monstrosity/T1/P1` **Atem aus Feuer und Eis**
- `Monstrosity/T1/P2` **unverletzbare Schuppenhaut**
- `Monstrosity/T1/P3` **Flügelschlag wie Sturm**
- `Monstrosity/T1/P4` **gehüteter Goldhort**

**Weakness:**
- `Monstrosity/T1/W1` **eine verwundbare Stelle**
- `Monstrosity/T1/W2` **begehrte Jagdtrophäe**

### Monstrosity/T2 — „Sturmtitan"
**Power:**
- `Monstrosity/T2/P1` **rufe Stürme**
- `Monstrosity/T2/P2` **verändert das Wetter**
- `Monstrosity/T2/P3` **erschütternder Donnerschrei**
- `Monstrosity/T2/P4` **gigantische Schritte**

**Weakness:**
- `Monstrosity/T2/W1` **zu groß für die Menschenwelt**
- `Monstrosity/T2/W2` **löst überall Panik aus**

### Monstrosity/T3 — „Nebelhydra"
**Power:**
- `Monstrosity/T3/P1` **viele wachsame Köpfe**
- `Monstrosity/T3/P2` **nachwachsende Glieder**
- `Monstrosity/T3/P3` **verschleiernder Nebel**
- `Monstrosity/T3/P4` **tödliches Gift**

**Weakness:**
- `Monstrosity/T3/W1` **eine verwundbare Stelle**
- `Monstrosity/T3/W2` **an Sumpf und Wasser gebunden**

### Monstrosity/T4 — „das Größenwesen aus dem See"
**Power:**
- `Monstrosity/T4/P1` **enorme Größe**
- `Monstrosity/T4/P2` **lautlos unter Wasser**
- `Monstrosity/T4/P3` **reißende Strudel**
- `Monstrosity/T4/P4` **uralter Seegrund als Versteck**

**Weakness:**
- `Monstrosity/T4/W1` **an die Tiefe gebunden**
- `Monstrosity/T4/W2` **begehrte Jagdtrophäe**

### Monstrosity/T5 — „der wandelnde Wald"
**Power:**
- `Monstrosity/T5/P1` **Sprache der Erde**
- `Monstrosity/T5/P2` **Tiere dienen ihm**
- `Monstrosity/T5/P3` **wuchernde Wurzeln und Ranken**
- `Monstrosity/T5/P4` **verschluckt von Dickicht**

**Weakness:**
- `Monstrosity/T5/W1` **langsam und schwerfällig**
- `Monstrosity/T5/W2` **verwundbar durch Feuer**

### Monstrosity/T6 — „Urblut aus dem Gebirge"
**Power:**
- `Monstrosity/T6/P1` **übermächtige Stärke**
- `Monstrosity/T6/P2` **Haut aus Fels und Erz**
- `Monstrosity/T6/P3` **baumfällender Schwanz**
- `Monstrosity/T6/P4` **Herr des eigenen Reviers**

**Weakness:**
- `Monstrosity/T6/W1` **fern der Berge geschwächt**
- `Monstrosity/T6/W2` **zu groß für die Menschenwelt**

### Monstrosity/T7 — „das letzte seiner Art"
**Power:**
- `Monstrosity/T7/P1` **altert nicht**
- `Monstrosity/T7/P2` **Wissen vergangener Zeitalter**
- `Monstrosity/T7/P3` **unergründlicher Blick**
- `Monstrosity/T7/P4` **übersteht jede Wunde**

**Weakness:**
- `Monstrosity/T7/W1` **endlose Einsamkeit**
- `Monstrosity/T7/W2` **begehrte Jagdtrophäe**

### Monstrosity/T8 — „sterblicher Rest eines Gottes"
**Power:**
- `Monstrosity/T8/P1` **Aura der Furcht**
- `Monstrosity/T8/P2` **Blut jenseits aller Magie**
- `Monstrosity/T8/P3` **Gläubige beten mich an**
- `Monstrosity/T8/P4` **Funke göttlicher Macht**

**Weakness:**
- `Monstrosity/T8/W1` **verblassende Göttlichkeit**
- `Monstrosity/T8/W2` **an den alten Namen gebunden**

### Monstrosity/T9 — „das Schlafende unter dem Eis"
**Power:**
- `Monstrosity/T9/P1` **sein Schlaf formt die Welt**
- `Monstrosity/T9/P2` **Träume reichen in die Ferne**
- `Monstrosity/T9/P3` **eisige Kälte umgibt mich**
- `Monstrosity/T9/P4` **erwacht mit unermesslicher Kraft**

**Weakness:**
- `Monstrosity/T9/W1` **fällt in unkontrollierbaren Schlaf**
- `Monstrosity/T9/W2` **verwundbar im Erwachen**

### Monstrosity/T10 — „Titan des vergessenen Zeitalters"
**Power:**
- `Monstrosity/T10/P1` **übermächtige Stärke**
- `Monstrosity/T10/P2` **der Zeit entrückt**
- `Monstrosity/T10/P3` **Wissen einer toten Welt**
- `Monstrosity/T10/P4` **erschütternder Schrei**

**Weakness:**
- `Monstrosity/T10/W1` **fremd in dieser Zeit**
- `Monstrosity/T10/W2` **gebunden an alte Riten**

### Monstrosity/T11 — „Wächter der Schwelle"
**Power:**
- `Monstrosity/T11/P1` **Schreckenskreis um mich**
- `Monstrosity/T11/P2` **spürt den Tod auf Meilen**
- `Monstrosity/T11/P3` **lässt niemanden vorbei**
- `Monstrosity/T11/P4` **kennt das Rätsel der Pforte**

**Weakness:**
- `Monstrosity/T11/W1` **an die Schwelle gebunden**
- `Monstrosity/T11/W2` **muss jedem Pakt gehorchen**

### Monstrosity/T12 — „der Verschlinger aus der Tiefe"
**Power:**
- `Monstrosity/T12/P1` **unstillbarer Hunger**
- `Monstrosity/T12/P2` **zermalmende Schlünde**
- `Monstrosity/T12/P3` **Diener gehorchen mir**
- `Monstrosity/T12/P4` **schrumpft auf Menschengröße**

**Weakness:**
- `Monstrosity/T12/W1` **der Hunger übermannt mich**
- `Monstrosity/T12/W2` **löst überall Panik aus**


---

# Tier: Variable Might

## Companion — Variable Might
ID-Präfix: `Companion`

### Companion/T1 — „Schwertbande"
**Power:**
- `Companion/T1/P1` **Bande Schwertkämpfer**
- `Companion/T1/P2` **Schulter an Schulter**
- `Companion/T1/P3` **gehorcht jedem Befehl**
- `Companion/T1/P4` **hält die Klingenlinie**
- `Companion/T1/P5` **reist als Trupp**

**Weakness:**
- `Companion/T1/W1` **lärmig und unbeherrscht**
- `Companion/T1/W2` **verlangt Sold**

### Companion/T2 — „imposanter Wolfshund"
**Power:**
- `Companion/T2/P1` **treuer Wolfshund**
- `Companion/T2/P2` **unfehlbare Spürnase**
- `Companion/T2/P3` **rettet mich im Notfall**
- `Companion/T2/P4` **schlafloser Wächter**

**Weakness:**
- `Companion/T2/W1` **gerät leicht in Gefahr**
- `Companion/T2/W2` **beschützt nur mich**

### Companion/T3 — „Schutzgeist"
**Power:**
- `Companion/T3/P1` **unsichtbarer Schutzgeist**
- `Companion/T3/P2` **spürt feindliche Absichten**
- `Companion/T3/P3` **flüstert Warnungen**
- `Companion/T3/P4` **wendet das Unglück ab**

**Weakness:**
- `Companion/T3/W1` **an mein Schicksal gebunden**
- `Companion/T3/W2` **schweigt im falschen Moment**

### Companion/T4 — „frecher Pixie"
**Power:**
- `Companion/T4/P1` **Ablenkung mit Verve**
- `Companion/T4/P2` **zerstreut die Wache**
- `Companion/T4/P3` **versteckt sich und beobachtet**
- `Companion/T4/P4` **kleiner Zauberstreich**

**Weakness:**
- `Companion/T4/W1` **handelt ungefragt falsch**
- `Companion/T4/W2` **stiftet ständig Unfug**

### Companion/T5 — „Falke meiner Mutter"
**Power:**
- `Companion/T5/P1` **späht aus der Höhe**
- `Companion/T5/P2` **bringt das Gesuchte**
- `Companion/T5/P3` **findet den Weg zurück**
- `Companion/T5/P4` **fängt Botschaften aus der Luft**

**Weakness:**
- `Companion/T5/W1` **letztes Andenken**
- `Companion/T5/W2` **scheu vor Fremden**

### Companion/T6 — „beschworener Geist"
**Power:**
- `Companion/T6/P1` **erscheint auf Ruf**
- `Companion/T6/P2` **kennt verborgenes Wissen**
- `Companion/T6/P3` **durchschreitet Wände**
- `Companion/T6/P4` **dient dem Pakt**

**Weakness:**
- `Companion/T6/W1` **fordert seinen Preis**
- `Companion/T6/W2` **deutet den Pakt eigenwillig**

### Companion/T7 — „treuer alter Strolch"
**Power:**
- `Companion/T7/P1` **kennt jede Gasse**
- `Companion/T7/P2` **schmuggelt Botschaften**
- `Companion/T7/P3` **findet überall Unterschlupf**
- `Companion/T7/P4` **steht treu zu mir**

**Weakness:**
- `Companion/T7/W1` **überall verrufen**
- `Companion/T7/W2` **alte Knochen**

### Companion/T8 — „stummer Wächter"
**Power:**
- `Companion/T8/P1` **versteht meine Zeichen**
- `Companion/T8/P2` **hält stets Wache**
- `Companion/T8/P3` **unverbrüchliche Treue**
- `Companion/T8/P4` **verrät kein Wort**

**Weakness:**
- `Companion/T8/W1` **kann nicht sprechen**
- `Companion/T8/W2` **missverstanden von anderen**

### Companion/T9 — „Geist des Hauses"
**Power:**
- `Companion/T9/P1` **kennt jeden Winkel**
- `Companion/T9/P2` **hütet alte Mauern**
- `Companion/T9/P3` **verbirgt mich im Gemäuer**
- `Companion/T9/P4` **weckt mich vor Eindringlingen**

**Weakness:**
- `Companion/T9/W1` **an das Haus gebunden**
- `Companion/T9/W2` **erträgt keine Fremden**

### Companion/T10 — „wilde Katze mit Verstand"
**Power:**
- `Companion/T10/P1` **handelt eigenständig**
- `Companion/T10/P2` **läuft schneller als mein Pferd**
- `Companion/T10/P3` **schleicht lautlos**
- `Companion/T10/P4` **durchschaut die Lage**

**Weakness:**
- `Companion/T10/W1` **folgt eigenem Willen**
- `Companion/T10/W2` **verschwindet nach Lust**

### Companion/T11 — „Veteranenbande ohne Hauptmann"
**Power:**
- `Companion/T11/P1` **erprobte Kämpfer**
- `Companion/T11/P2` **kennt jede Schlachtordnung**
- `Companion/T11/P3` **hält die Stellung**
- `Companion/T11/P4` **alte Waffenbrüder**

**Weakness:**
- `Companion/T11/W1` **führerlos und zerstritten**
- `Companion/T11/W2` **von alten Wunden gezeichnet**

### Companion/T12 — „Elementargeist auf Probe"
**Power:**
- `Companion/T12/P1` **entfacht Feuer**
- `Companion/T12/P2` **bändigt Wind und Welle**
- `Companion/T12/P3` **roher Urgewalt**
- `Companion/T12/P4` **prüft meinen Willen**

**Weakness:**
- `Companion/T12/W1` **noch nicht gebunden**
- `Companion/T12/W2` **entgleitet bei Schwäche**


## Magic — Variable Might
ID-Präfix: `Magic`

### Magic/T1 — „Hexe der Wälder"
**Power:**
- `Magic/T1/P1` **der Wald antwortet ihr**
- `Magic/T1/P2` **Heilkräuter und Salben**
- `Magic/T1/P3` **verwandelt sich in Tier**
- `Magic/T1/P4` **spricht mit Geistern**

**Weakness:**
- `Magic/T1/W1` **gehasst und gehetzt**
- `Magic/T1/W2` **verlangt einen Preis**

### Magic/T2 — „Sturmrufer"
**Power:**
- `Magic/T2/P1` **lenkt die Winde**
- `Magic/T2/P2` **ruft den Donner**
- `Magic/T2/P3` **liest die Wolken**
- `Magic/T2/P4` **verflucht den Feind**

**Weakness:**
- `Magic/T2/W1` **der Sturm gehorcht selten ganz**
- `Magic/T2/W2` **erschöpft durch Magie**

### Magic/T3 — „Heiler der Götter"
**Power:**
- `Magic/T3/P1` **heilende Hände**
- `Magic/T3/P2` **segnet die Verbündeten**
- `Magic/T3/P3` **tröstendes Licht**
- `Magic/T3/P4` **uralte Schutzzauber**

**Weakness:**
- `Magic/T3/W1` **der Körper zahlt den Preis**
- `Magic/T3/W2` **kann keinen Leidenden abweisen**

### Magic/T4 — „Bannerin der Geister"
**Power:**
- `Magic/T4/P1` **spricht mit Geistern**
- `Magic/T4/P2` **Bannkreis ziehen**
- `Magic/T4/P3` **beschwört kleine Wesen**
- `Magic/T4/P4` **sieht durch Schleier**

**Weakness:**
- `Magic/T4/W1` **zieht gefährliche Aufmerksamkeit**
- `Magic/T4/W2` **die Toten verlangen Antwort**

### Magic/T5 — „rituelle Zauberin"
**Power:**
- `Magic/T5/P1` **kleines Zauberwerk**
- `Magic/T5/P2` **hext Dinge in Bewegung**
- `Magic/T5/P3` **kennt die Regeln der Magie**
- `Magic/T5/P4` **spricht alte Worte**

**Weakness:**
- `Magic/T5/W1` **ein Ritual braucht Zeit**
- `Magic/T5/W2` **unkontrollierbare Nebenwirkungen**

### Magic/T6 — „Alchemistin"
**Power:**
- `Magic/T6/P1` **braut starke Tränke**
- `Magic/T6/P2` **Heilkräuter und Salben**
- `Magic/T6/P3` **Magieeisen erkennen**
- `Magic/T6/P4` **kennt verborgene Wirkstoffe**

**Weakness:**
- `Magic/T6/W1` **ohne Werkstatt hilflos**
- `Magic/T6/W2` **der Körper zahlt den Preis**

### Magic/T7 — „Runenschreiberin"
**Power:**
- `Magic/T7/P1` **schreibt mächtige Runen**
- `Magic/T7/P2` **liest Magie aus Objekten**
- `Magic/T7/P3` **uralte Schutzzauber**
- `Magic/T7/P4` **spricht alte Worte**

**Weakness:**
- `Magic/T7/W1` **für andere unlesbar**
- `Magic/T7/W2` **eine falsche Rune zerstört alles**

### Magic/T8 — „Beschwörerin des Wassers"
**Power:**
- `Magic/T8/P1` **ruft die Flut**
- `Magic/T8/P2` **spricht mit den Tiefen**
- `Magic/T8/P3` **Grenze von Magie und Natur**
- `Magic/T8/P4` **heilende Quellen finden**

**Weakness:**
- `Magic/T8/W1` **machtlos fern vom Wasser**
- `Magic/T8/W2` **verlangt einen Preis**

### Magic/T9 — „Traumwirkerin"
**Power:**
- `Magic/T9/P1` **flüstert in die Träume**
- `Magic/T9/P2` **biegt den Zufall**
- `Magic/T9/P3` **sieht durch Schleier**
- `Magic/T9/P4` **deutet Vorzeichen**

**Weakness:**
- `Magic/T9/W1` **verliert sich im Schlaf**
- `Magic/T9/W2` **zieht gefährliche Aufmerksamkeit**

### Magic/T10 — „Zauberin des Übergangs"
**Power:**
- `Magic/T10/P1` **öffnet verschlossene Wege**
- `Magic/T10/P2` **schreitet durch Schwellen**
- `Magic/T10/P3` **sieht verborgene Verbindungen**
- `Magic/T10/P4` **hebt Flüche**

**Weakness:**
- `Magic/T10/W1` **etwas folgt durch die Tür**
- `Magic/T10/W2` **verlangt einen Preis**

### Magic/T11 — „Hüterin des Gleichgewichts"
**Power:**
- `Magic/T11/P1` **hebt Flüche**
- `Magic/T11/P2` **Grenze von Magie und Natur**
- `Magic/T11/P3` **spürt gestörte Ordnung**
- `Magic/T11/P4` **uralte Schutzzauber**

**Weakness:**
- `Magic/T11/W1` **darf keine Seite ergreifen**
- `Magic/T11/W2` **erschöpft durch Magie**

### Magic/T12 — „Sprecherin der vergessenen Sprache"
**Power:**
- `Magic/T12/P1` **spricht alte Worte**
- `Magic/T12/P2` **liest fremde Magie**
- `Magic/T12/P3` **kennt die Regeln der Magie**
- `Magic/T12/P4` **Worte mit roher Macht**

**Weakness:**
- `Magic/T12/W1` **vergisst Zauber nach dem Wirken**
- `Magic/T12/W2` **ein Wort zu viel**


## Possessions — Variable Might
ID-Präfix: `Possessions`

### Possessions/T1 — „handgefertigte Panflöte"
**Power:**
- `Possessions/T1/P1` **seelenbewegende Weise**
- `Possessions/T1/P2` **selbst geschnitztes Rohr**
- `Possessions/T1/P3` **lockt Lauscher an**
- `Possessions/T1/P4` **stets griffbereit am Gürtel**

**Weakness:**
- `Possessions/T1/W1` **zerbrechliches Holz**
- `Possessions/T1/W2` **verrät meine Anwesenheit**

### Possessions/T2 — „verborgene Dolche"
**Power:**
- `Possessions/T2/P1` **stets eine versteckte Waffe**
- `Possessions/T2/P2` **blitzschnell gezogen**
- `Possessions/T2/P3` **unter dem Mantel getragen**
- `Possessions/T2/P4` **trifft im Dunkeln**

**Weakness:**
- `Possessions/T2/W1` **verdächtig bei Leibesvisitation**
- `Possessions/T2/W2` **taugt nur aus der Nähe**

### Possessions/T3 — „Pferd und Rüstung"
**Power:**
- `Possessions/T3/P1` **gehorsames Pferd**
- `Possessions/T3/P2` **gut gewartete Rüstung**
- `Possessions/T3/P3` **sturmreife Reiterattacke**
- `Possessions/T3/P4` **unermüdlich im Sattel**

**Weakness:**
- `Possessions/T3/W1` **schwerfällig zu Fuß**
- `Possessions/T3/W2` **das Pferd braucht Pflege**

### Possessions/T4 — „Brief des Fürsten"
**Power:**
- `Possessions/T4/P1` **Brief mit Siegel**
- `Possessions/T4/P2` **öffnet verschlossene Tore**
- `Possessions/T4/P3` **Recht auf Audienz**
- `Possessions/T4/P4` **hochfürstliche Gunst**

**Weakness:**
- `Possessions/T4/W1` **begehrt von Spionen**
- `Possessions/T4/W2` **bindet an fremde Befehle**

### Possessions/T5 — „Kette aus Gold"
**Power:**
- `Possessions/T5/P1` **wertvoller Schmuck**
- `Possessions/T5/P2` **Gold öffnet Türen**
- `Possessions/T5/P3` **verleiht edles Ansehen**
- `Possessions/T5/P4` **jederzeit zu Geld gemacht**

**Weakness:**
- `Possessions/T5/W1` **auffällig im Wert**
- `Possessions/T5/W2` **verletzlich gegen Diebe**

### Possessions/T6 — „mein Werkzeugkasten"
**Power:**
- `Possessions/T6/P1` **Werkzeug für jeden Fall**
- `Possessions/T6/P2` **repariert Unbrauchbares**
- `Possessions/T6/P3` **hat immer ein Ersatzteil**
- `Possessions/T6/P4` **stets einsatzbereit**

**Weakness:**
- `Possessions/T6/W1` **hilflos ohne den Besitz**
- `Possessions/T6/W2` **schwer zu schleppen**

### Possessions/T7 — „Truhe mit fremden Münzen"
**Power:**
- `Possessions/T7/P1` **Truhe mit Wertsachen**
- `Possessions/T7/P2` **kennt jeden Wert genau**
- `Possessions/T7/P3` **handelt mit Gewinn**
- `Possessions/T7/P4` **Münzen aus fernen Reichen**

**Weakness:**
- `Possessions/T7/W1` **begehrt von anderen**
- `Possessions/T7/W2` **verschwenderisch im Überfluss**

### Possessions/T8 — „geerbt und zu groß"
**Power:**
- `Possessions/T8/P1` **verziertes Wams**
- `Possessions/T8/P2` **trägt einen ehrwürdigen Namen**
- `Possessions/T8/P3` **alte Pracht beeindruckt noch**
- `Possessions/T8/P4` **trägt altes Haussiegel**

**Weakness:**
- `Possessions/T8/W1` **unbequem und schlecht sitzend**
- `Possessions/T8/W2` **erinnert an Verlust**

### Possessions/T9 — „Ausrüstung der toten Kompanie"
**Power:**
- `Possessions/T9/P1` **gut gewartete Kampfausrüstung**
- `Possessions/T9/P2` **Banner der gefallenen Truppe**
- `Possessions/T9/P3` **kennt jeden Kniff der Veteranen**
- `Possessions/T9/P4` **Stahl mit Schlachtenehre**

**Weakness:**
- `Possessions/T9/W1` **verfolgt von ihren Feinden**
- `Possessions/T9/W2` **lastet schwer auf der Seele**

### Possessions/T10 — „Karte mit Geheimnissen"
**Power:**
- `Possessions/T10/P1` **Reisekarten**
- `Possessions/T10/P2` **zeigt verborgene Wege**
- `Possessions/T10/P3` **markierte Schätze**
- `Possessions/T10/P4` **führt durch jedes Land**

**Weakness:**
- `Possessions/T10/W1` **begehrt von anderen**
- `Possessions/T10/W2` **unvollständig und verschlüsselt**

### Possessions/T11 — „letztes Stück Heimat"
**Power:**
- `Possessions/T11/P1` **weckt Mut in Hoffnungslosen**
- `Possessions/T11/P2` **spendet Trost in der Fremde**
- `Possessions/T11/P3` **verbindet mit den Meinen**
- `Possessions/T11/P4` **weckt vertraute Kraft**

**Weakness:**
- `Possessions/T11/W1` **Bindung an einen Ort**
- `Possessions/T11/W2` **unersetzlich wenn verloren**

### Possessions/T12 — „Nachlass eines Verschollenen"
**Power:**
- `Possessions/T12/P1` **Aufzeichnungen des Vermissten**
- `Possessions/T12/P2` **getarnter Reisemantel**
- `Possessions/T12/P3` **birgt verborgene Ressourcen**
- `Possessions/T12/P4` **Spuren einer letzten Reise**

**Weakness:**
- `Possessions/T12/W1` **weckt fremde Feinde**
- `Possessions/T12/W2` **rätselhaft und unvollständig**

