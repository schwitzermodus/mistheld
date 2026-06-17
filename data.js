/* =====================================================
   LITM DATA · Themebooks aus Vol. 1
   System: Origin / Adventure / Greatness / Variable Might

   STRUKTUR (titel-verankert): THEMEBOOKS[name] = { type, titles: [...] }
   Jeder Titel ist ein BÜNDEL und der Anker des Themes:
     { text, hooks, powerTags:[{text,hooks}], weaknessTags:[{text,hooks}],
       quests:[{title,description,hooks}] }
   Beim Generieren werden Power/Weakness/Quest IMMER aus dem gezogenen
   Titel-Bündel gewählt — so passen alle Tags und die Quest zum Titel.

   WICHTIG: Alle Tags MÜSSEN der verbindlichen Tag-Definition entsprechen —
   siehe TAGS.md im Projekt-Root. (max. 5 Wörter, bevorzugt 1–3, kein Satz,
   kein Komma; Power = nützlich, Weakness = einschränkend; verwandt zum
   Titel; passend zur Might-Stufe; Balance spezifisch/breit.)
   Quests sind KEINE Tags (Ich-Ziel-Satz erlaubt). Durchsetzung: tools/validate_tags.cjs.
===================================================== */

const THEMEBOOKS = {
  "Circumstance": {
    type: "Origin",
    titles: [
      {
        text: "gefallener Adel", hooks: ["adel","verlust"],
        powerTags: [
          { text: "standesgemäße Kleidung", hooks: ["adel"] },
          { text: "Hofmanieren", hooks: ["adel"] },
          { text: "Standesvorrecht", hooks: ["adel","macht"] },
          { text: "verborgene Gönner", hooks: ["adel","geheimnis"] },
          { text: "trägt ein falsches Siegel", hooks: ["adel","geheimnis"] },
        ],
        weaknessTags: [
          { text: "vom Standesdünkel verfolgt", hooks: ["adel"] },
          { text: "ein verfluchter Name", hooks: ["adel","verlust"] },
          { text: "drückende Schulden", hooks: ["verlust","stadt"] },
        ],
        quests: [
          { title: "Ich werde meinen alten Namen wiederherstellen.", description: "Was einst Ehre trug, liegt im Schmutz, und ich finde keinen Frieden, bis es wieder glänzt.", hooks: ["adel","verlust"] },
          { title: "Ich finde heraus, wer mich verriet.", description: "Jemand aus meinem Kreis brachte mich zu Fall, und ich werde den Namen kennen.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "flüchtiger Außenseiter", hooks: ["außenseiter","fahrend"],
        powerTags: [
          { text: "geht in der Menge unter", hooks: ["außenseiter","geheimnis"] },
          { text: "findet immer Unterschlupf", hooks: ["fahrend","stadt"] },
          { text: "kennt jeden Schleichweg", hooks: ["stadt"] },
          { text: "unauffällig", hooks: ["außenseiter","geheimnis"] },
          { text: "sicheres Versteck", hooks: ["außenseiter","geheimnis"] },
        ],
        weaknessTags: [
          { text: "gehetzt von einer Macht", hooks: ["macht","verlust"] },
          { text: "wird von alten Bekannten erkannt", hooks: ["geheimnis","verlust"] },
          { text: "verboten an manchen Orten", hooks: ["außenseiter","geheimnis"] },
        ],
        quests: [
          { title: "Ich finde einen Ort der Freiheit.", description: "Irgendwo da draußen muss ein Platz sein, an dem ich einfach atmen darf.", hooks: ["außenseiter","fahrend"] },
          { title: "Ich entkomme meinen Verfolgern endgültig.", description: "Solange sie mir auf den Fersen sind, ist kein Ort wirklich sicher.", hooks: ["außenseiter","verlust"] },
        ]
      },
      {
        text: "Schankhaus-Schläger", hooks: ["stadt","kampf"],
        powerTags: [
          { text: "Zunge wie ein Messer", hooks: ["stadt"] },
          { text: "spricht die Sprache der Straße", hooks: ["stadt","außenseiter"] },
          { text: "ruhig in der Krise", hooks: ["stadt"] },
          { text: "fester Schlag", hooks: ["kampf","stadt"] },
          { text: "loyale Leute", hooks: ["glaube","stadt"] },
        ],
        weaknessTags: [
          { text: "leicht zu provozieren", hooks: ["kampf"] },
          { text: "das Recht schützt sie nie", hooks: ["außenseiter","macht"] },
          { text: "drückende Schulden", hooks: ["verlust","stadt"] },
        ],
        quests: [
          { title: "Ich beweise meinen Wert trotz allem.", description: "Andere haben mich abgeschrieben, doch jede Tat ist eine stille Antwort.", hooks: ["außenseiter","verlust"] },
          { title: "Ich schütze die Meinen mit der Faust.", description: "Wer mein Haus anrührt, lernt, warum man mich besser meidet.", hooks: ["kampf","stadt"] },
        ]
      },
      {
        text: "einsamer Schänkengast", hooks: ["außenseiter","stadt"],
        powerTags: [
          { text: "hört die Gerüchte zuerst", hooks: ["stadt","geheimnis"] },
          { text: "leise Beobachtung", hooks: ["geheimnis"] },
          { text: "kennt jeden im Ort", hooks: ["stadt"] },
          { text: "durchschaut Masken", hooks: ["stadt","wissen"] },
          { text: "kennt den Preis jeder Stille", hooks: ["geheimnis"] },
        ],
        weaknessTags: [
          { text: "gilt als Außenseiter", hooks: ["außenseiter"] },
          { text: "traut niemandem ganz", hooks: ["außenseiter","verlust"] },
          { text: "drückende Schulden", hooks: ["verlust","stadt"] },
        ],
        quests: [
          { title: "Ich lasse nicht zu, dass sie mich vergessen.", description: "Die Welt dreht sich weiter, als wäre ich nichts, und das werde ich ändern.", hooks: ["macht","verlust"] },
          { title: "Ich finde Anschluss, ohne mich zu verlieren.", description: "Vielleicht gibt es doch einen Tisch, an dem ich dazugehören darf.", hooks: ["außenseiter","stadt"] },
        ]
      },
      {
        text: "verlorenes Erbe", hooks: ["adel","verlust"],
        powerTags: [
          { text: "trägt ein falsches Siegel", hooks: ["adel","geheimnis"] },
          { text: "verborgene Gönner", hooks: ["adel","geheimnis"] },
          { text: "kennt die dunklen Geheimnisse", hooks: ["geheimnis","stadt"] },
          { text: "Gönner in der Hauptstadt", hooks: ["adel","stadt"] },
          { text: "Hofmanieren", hooks: ["adel"] },
        ],
        weaknessTags: [
          { text: "ein verfluchter Name", hooks: ["adel","verlust"] },
          { text: "wird von alten Bekannten erkannt", hooks: ["geheimnis","verlust"] },
          { text: "vom Standesdünkel verfolgt", hooks: ["adel"] },
        ],
        quests: [
          { title: "Ich fordere mein Erbe zurück.", description: "Was mir zusteht, hält ein anderer in Händen, und das werde ich ihm nehmen.", hooks: ["adel","verlust"] },
          { title: "Ich finde heraus, wer mich verriet.", description: "Jemand stahl mir, was mein war, und ich werde seinen Namen kennen.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "Stimme des Volkes", hooks: ["macht","stadt"],
        powerTags: [
          { text: "spricht für die Schwachen", hooks: ["glaube","macht"] },
          { text: "findet überall Verbündete", hooks: ["stadt","glaube"] },
          { text: "kennt jeden im Ort", hooks: ["stadt"] },
          { text: "beschwichtigender Tonfall", hooks: ["stadt"] },
          { text: "loyale Leute", hooks: ["glaube","stadt"] },
        ],
        weaknessTags: [
          { text: "gehetzt von einer Macht", hooks: ["macht","verlust"] },
          { text: "gilt als Außenseiter", hooks: ["außenseiter"] },
          { text: "das Recht schützt sie nie", hooks: ["außenseiter","macht"] },
        ],
        quests: [
          { title: "Ich helfe denen, die niemand hört.", description: "Wo das Volk schweigen muss, leihe ich ihm meine Stimme.", hooks: ["macht","stadt"] },
          { title: "Ich lasse nicht zu, dass sie uns vergessen.", description: "Durch Taten, die im Gedächtnis hängen, sorge ich dafür, dass man uns achtet.", hooks: ["macht","verlust"] },
        ]
      },
      {
        text: "verbannter Ritter", hooks: ["adel","außenseiter"],
        powerTags: [
          { text: "standesgemäße Kleidung", hooks: ["adel"] },
          { text: "Standesvorrecht", hooks: ["adel","macht"] },
          { text: "ruhig in der Krise", hooks: ["stadt"] },
          { text: "geübtes Schwert", hooks: ["kampf","adel"] },
          { text: "Hofmanieren", hooks: ["adel"] },
        ],
        weaknessTags: [
          { text: "ein verfluchter Name", hooks: ["adel","verlust"] },
          { text: "vom Standesdünkel verfolgt", hooks: ["adel"] },
          { text: "verboten an manchen Orten", hooks: ["außenseiter","geheimnis"] },
        ],
        quests: [
          { title: "Ich beweise meine Unschuld.", description: "Man verbannte mich für ein Unrecht, das ich nie beging, und das stelle ich richtig.", hooks: ["adel","verlust"] },
          { title: "Ich verdiene meine Ehre zurück.", description: "Mit Schwert und Treue zeige ich, dass der Bann ein Fehler war.", hooks: ["adel","kampf"] },
        ]
      },
      {
        text: "Tochter des Schmieds", hooks: ["handwerk"],
        powerTags: [
          { text: "kennt jeden im Ort", hooks: ["stadt"] },
          { text: "fester Griff am Eisen", hooks: ["handwerk"] },
          { text: "prüfender Blick für Stahl", hooks: ["handwerk","wissen"] },
          { text: "lebt vom Wenigen", hooks: ["außenseiter","verlust"] },
          { text: "loyale Leute", hooks: ["glaube","stadt"] },
        ],
        weaknessTags: [
          { text: "gebrochene Hände", hooks: ["verlust","handwerk"] },
          { text: "drückende Schulden", hooks: ["verlust","stadt"] },
          { text: "kennt nur die Werkstatt", hooks: ["handwerk","außenseiter"] },
        ],
        quests: [
          { title: "Ich baue mir einen eigenen Platz.", description: "Kein Almosen, nur das, was ich mit meinen Händen geschaffen habe.", hooks: ["handwerk","außenseiter"] },
          { title: "Ich führe das Werk meines Vaters fort.", description: "Die Esse soll nicht erkalten, solange ich am Amboss stehe.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "fahrende Händlerin", hooks: ["fahrend","stadt"],
        powerTags: [
          { text: "findet immer Unterschlupf", hooks: ["fahrend","stadt"] },
          { text: "hört die Gerüchte zuerst", hooks: ["stadt","geheimnis"] },
          { text: "kennt jeden Schleichweg", hooks: ["stadt"] },
          { text: "beschwichtigender Tonfall", hooks: ["stadt"] },
          { text: "durchschaut Masken", hooks: ["stadt","wissen"] },
        ],
        weaknessTags: [
          { text: "drückende Schulden", hooks: ["verlust","stadt"] },
          { text: "gehetzt von einer Macht", hooks: ["macht","verlust"] },
          { text: "verboten an manchen Orten", hooks: ["außenseiter","geheimnis"] },
        ],
        quests: [
          { title: "Ich zahle jede Schuld zurück.", description: "Jede geliehene Münze führe ich Buch, bis das Konto ausgeglichen ist.", hooks: ["verlust","stadt"] },
          { title: "Ich baue mir einen eigenen Platz.", description: "Aus Karren und Ware soll ein Handel werden, der mir gehört.", hooks: ["fahrend","stadt"] },
        ]
      },
      {
        text: "Dorfaußenseiter mit Weitblick", hooks: ["außenseiter","natur"],
        powerTags: [
          { text: "leise Beobachtung", hooks: ["geheimnis"] },
          { text: "ein Zufluchtsort", hooks: ["außenseiter","natur"] },
          { text: "durchschaut Masken", hooks: ["stadt","wissen"] },
          { text: "überlebt jede Not", hooks: ["verlust","außenseiter"] },
          { text: "kennt jeden Schleichweg", hooks: ["stadt"] },
        ],
        weaknessTags: [
          { text: "gilt als Außenseiter", hooks: ["außenseiter"] },
          { text: "traut niemandem ganz", hooks: ["außenseiter","verlust"] },
          { text: "wird belächelt im Dorf", hooks: ["außenseiter","stadt"] },
        ],
        quests: [
          { title: "Ich beweise meinen Wert trotz allem.", description: "Man sah mich nie wirklich, doch meine Warnungen werden sie noch brauchen.", hooks: ["außenseiter","verlust"] },
          { title: "Ich öffne ihnen die Augen.", description: "Was ich kommen sehe, soll das Dorf erkennen, bevor es zu spät ist.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "Wanderprediger ohne Gemeinde", hooks: ["glaube","fahrend"],
        powerTags: [
          { text: "findet immer Unterschlupf", hooks: ["fahrend","stadt"] },
          { text: "spricht für die Schwachen", hooks: ["glaube","macht"] },
          { text: "findet überall Verbündete", hooks: ["stadt","glaube"] },
          { text: "tröstende Worte", hooks: ["glaube"] },
          { text: "lebt vom Wenigen", hooks: ["außenseiter","verlust"] },
        ],
        weaknessTags: [
          { text: "gilt als Außenseiter", hooks: ["außenseiter"] },
          { text: "verboten an manchen Orten", hooks: ["außenseiter","geheimnis"] },
          { text: "traut niemandem ganz", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "Ich finde eine Gemeinde, die mich braucht.", description: "Irgendwo warten Seelen, die meine Worte hören wollen.", hooks: ["glaube","fahrend"] },
          { title: "Ich trage den Glauben hinaus.", description: "Von Dorf zu Dorf bringe ich Trost, wo sonst keiner spricht.", hooks: ["glaube","fahrend"] },
        ]
      },
      {
        text: "freie Leibeigene", hooks: ["außenseiter","verlust"],
        powerTags: [
          { text: "überlebt jede Not", hooks: ["verlust","außenseiter"] },
          { text: "lebt vom Wenigen", hooks: ["außenseiter","verlust"] },
          { text: "ruhig in der Krise", hooks: ["stadt"] },
          { text: "ein sicheres Versteck", hooks: ["außenseiter","geheimnis"] },
          { text: "loyale Leute", hooks: ["glaube","stadt"] },
        ],
        weaknessTags: [
          { text: "das Recht schützt sie nie", hooks: ["außenseiter","macht"] },
          { text: "wird von alten Bekannten erkannt", hooks: ["geheimnis","verlust"] },
          { text: "gehetzt von einer Macht", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Ich finde einen Ort der Freiheit.", description: "Nach Jahren der Fron suche ich einen Platz, an dem mich niemand besitzt.", hooks: ["außenseiter","verlust"] },
          { title: "Ich beweise meinen Wert trotz allem.", description: "Man behandelte mich wie nichts, und jede Tat ist meine stille Antwort.", hooks: ["außenseiter","verlust"] },
        ]
      },
    ]
  },
  "Devotion": {
    type: "Origin",
    titles: [
      {
        text: "Schwertschwur", hooks: ["glaube","kampf"],
        powerTags: [
          { text: "Schwur ablegen", hooks: ["glaube"] },
          { text: "betet vor dem Kampf", hooks: ["glaube","kampf"] },
          { text: "hält ihr Wort", hooks: ["glaube"] },
          { text: "unbeirrbar im Eid", hooks: ["glaube","kampf"] },
        ],
        weaknessTags: [
          { text: "darf nicht fliehen", hooks: ["glaube","kampf"] },
          { text: "Schwur über Vernunft", hooks: ["glaube","schicksal"] },
        ],
        quests: [
          { title: "mein Gelübde halten", description: "Was ich versprochen habe, das tue ich, auch wenn die Welt sich gegen mich stellt.", hooks: ["glaube"] },
          { title: "die Treue beweisen", description: "Ich zeige, dass ein gehaltener Schwur mehr wiegt als rohe Stärke.", hooks: ["glaube","macht"] },
        ]
      },
      {
        text: "werdender Ritter", hooks: ["adel","kampf"],
        powerTags: [
          { text: "Mut sammeln", hooks: ["glaube","kampf"] },
          { text: "schreitet mutig ein", hooks: ["glaube","kampf"] },
          { text: "Schutzschild für die Schwachen", hooks: ["glaube","kampf"] },
          { text: "hält durch bis zuletzt", hooks: ["glaube","kampf"] },
        ],
        weaknessTags: [
          { text: "blind durch Ehre", hooks: ["glaube","adel"] },
          { text: "leidet an jedem Versagen", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "die Ritterprobe bestehen", description: "Ich will mir und allen beweisen, dass ich des Schwertes würdig bin.", hooks: ["adel","kampf"] },
          { title: "einen würdigen Herrn finden", description: "Ich suche jemanden, dessen Sache mein Gelübde verdient.", hooks: ["adel","glaube"] },
        ]
      },
      {
        text: "Verteidiger des Dorfes", hooks: ["glaube","kampf"],
        powerTags: [
          { text: "schützt mit dem eigenen Leib", hooks: ["glaube","kampf"] },
          { text: "kennt jeden Schutzbefohlenen", hooks: ["glaube"] },
          { text: "hält die Wache allein", hooks: ["kampf","glaube"] },
          { text: "sammelt die Dörfler", hooks: ["glaube","stadt"] },
        ],
        weaknessTags: [
          { text: "kann nicht fortgehen", hooks: ["glaube","verlust"] },
          { text: "trägt jede Not allein", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "sie beschützen bis zuletzt", description: "Solange ich atme, geschieht meinen Leuten kein Leid.", hooks: ["glaube","kampf"] },
          { title: "das Dorf wehrhaft machen", description: "Ich lehre die Schwachen, für sich selbst einzustehen.", hooks: ["glaube","handwerk"] },
        ]
      },
      {
        text: "Diener der Göttin", hooks: ["glaube","magie"],
        powerTags: [
          { text: "kennt jedes Gebet", hooks: ["glaube"] },
          { text: "Ritualgesang", hooks: ["glaube","magie"] },
          { text: "hält ein heiliges Symbol", hooks: ["glaube","magie"] },
          { text: "Zeichen gegen das Böse", hooks: ["glaube","magie"] },
        ],
        weaknessTags: [
          { text: "blind durch Hingabe", hooks: ["glaube"] },
          { text: "die Pflicht verschlingt die Zeit", hooks: ["glaube"] },
        ],
        quests: [
          { title: "das Licht aufrechthalten", description: "Die Finsternis drückt von allen Seiten, doch ich weiche nicht zurück.", hooks: ["glaube"] },
          { title: "einen Nachfolger finden", description: "Mein Dienst ist größer als ich und darf nicht mit mir enden.", hooks: ["glaube","schicksal"] },
        ]
      },
      {
        text: "Pflegerin der Kranken", hooks: ["glaube","handwerk"],
        powerTags: [
          { text: "kennt heilende Kräuter", hooks: ["handwerk","natur"] },
          { text: "einfache Heilkunst", hooks: ["handwerk"] },
          { text: "heilende Hände", hooks: ["handwerk","magie"] },
          { text: "beruhigt die Fiebrigen", hooks: ["glaube","handwerk"] },
        ],
        weaknessTags: [
          { text: "fremder Schmerz wird ihrer", hooks: ["glaube","verlust"] },
          { text: "vergisst sich selbst", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "keinen sterben lassen", description: "Solange Hände heilen können, gebe ich keinen Kranken auf.", hooks: ["glaube","handwerk"] },
          { title: "die Seuche zurückdrängen", description: "Ich suche das Mittel gegen das Leiden, das mein Dorf befällt.", hooks: ["handwerk","wissen"] },
        ]
      },
      {
        text: "Liebe meines Lebens", hooks: ["glaube","verlust"],
        powerTags: [
          { text: "erinnert sich an einen Schwur", hooks: ["glaube"] },
          { text: "gibt ihr Letztes", hooks: ["glaube"] },
          { text: "nimmt Wunden für andere", hooks: ["glaube","verlust"] },
          { text: "unverbrüchliche Treue", hooks: ["glaube","verlust"] },
        ],
        weaknessTags: [
          { text: "kann nicht loslassen", hooks: ["glaube","verlust"] },
          { text: "alles für den einen Menschen", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "den Menschen retten", description: "Ohne ihn wäre ich nicht, was ich bin, und nun ist es an mir.", hooks: ["glaube","verlust"] },
          { title: "das Versprechen einlösen", description: "Ich tue, was ich ihm einst geschworen habe, koste es, was es wolle.", hooks: ["glaube"] },
        ]
      },
      {
        text: "Hüterin des Tempels", hooks: ["glaube","geheimnis"],
        powerTags: [
          { text: "kennt die alten heiligen Orte", hooks: ["glaube","geheimnis"] },
          { text: "spricht für die Stille", hooks: ["glaube"] },
          { text: "bewahrt heilige Riten", hooks: ["glaube","geheimnis"] },
          { text: "liest verborgene Zeichen", hooks: ["glaube","wissen"] },
        ],
        weaknessTags: [
          { text: "an den Ort gebunden", hooks: ["glaube","verlust"] },
          { text: "ihr Glaube wird ausgenutzt", hooks: ["glaube","außenseiter"] },
        ],
        quests: [
          { title: "das Heiligtum zurückbringen", description: "Ohne diesen Ort ist mein Volk gebrochen, und ich hole ihn zurück.", hooks: ["glaube","geheimnis"] },
          { title: "das Geheimnis bewahren", description: "Was mir anvertraut ist, soll niemals in falsche Hände fallen.", hooks: ["glaube","geheimnis"] },
        ]
      },
      {
        text: "Schwester des Ordens", hooks: ["glaube","magie"],
        powerTags: [
          { text: "erinnert sich an einen Schwur", hooks: ["glaube"] },
          { text: "loyale Ordensbrüder", hooks: ["glaube"] },
          { text: "kennt die Regel des Ordens", hooks: ["glaube","wissen"] },
          { text: "Segen sprechen", hooks: ["glaube","magie"] },
        ],
        weaknessTags: [
          { text: "an Gehorsam gebunden", hooks: ["glaube","macht"] },
          { text: "die Pflicht verschlingt die Zeit", hooks: ["glaube"] },
        ],
        quests: [
          { title: "dem Orden treu bleiben", description: "Was ich gelobte, halte ich, auch wenn der Orden selbst zweifelt.", hooks: ["glaube"] },
          { title: "die wahre Lehre bewahren", description: "Ich sorge dafür, dass die alte Regel nicht verfälscht wird.", hooks: ["glaube","wissen"] },
        ]
      },
      {
        text: "letzter Wächter", hooks: ["glaube","kampf"],
        powerTags: [
          { text: "hält durch bis zuletzt", hooks: ["glaube","kampf"] },
          { text: "hält die Stellung allein", hooks: ["glaube","kampf"] },
          { text: "schmerzhaft ehrlich", hooks: ["glaube"] },
          { text: "weicht keinen Schritt", hooks: ["glaube","kampf"] },
        ],
        weaknessTags: [
          { text: "darf nicht fliehen", hooks: ["glaube","kampf"] },
          { text: "trägt die Last allein", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "die Wacht nicht verlassen", description: "Solange einer steht, fällt der Posten nicht, und dieser eine bin ich.", hooks: ["glaube","kampf"] },
          { title: "einen Nachfolger einweisen", description: "Das, was ich hüte, kann nicht mit mir enden.", hooks: ["glaube","schicksal"] },
        ]
      },
      {
        text: "Wächterin am Tor", hooks: ["glaube","kampf"],
        powerTags: [
          { text: "durchschaut jeden Eindringling", hooks: ["glaube","wissen"] },
          { text: "steht fest im Durchgang", hooks: ["glaube","kampf"] },
          { text: "kennt jede Losung", hooks: ["kampf","stadt"] },
          { text: "wachsam bei jedem Geräusch", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "darf den Posten nicht räumen", hooks: ["glaube","kampf"] },
          { text: "misstraut jedem Fremden", hooks: ["glaube","außenseiter"] },
        ],
        quests: [
          { title: "das Tor halten", description: "Was hereinwill, kommt nur an mir vorbei oder gar nicht.", hooks: ["glaube","kampf"] },
          { title: "den Verräter im Inneren finden", description: "Jemand öffnet heimlich von innen, und ich werde wissen, wer.", hooks: ["glaube","geheimnis"] },
        ]
      },
      {
        text: "Verbündete der Ausgestoßenen", hooks: ["glaube","außenseiter"],
        powerTags: [
          { text: "erkennt verborgene Verzweiflung", hooks: ["glaube"] },
          { text: "sammelt Almosen für andere", hooks: ["glaube"] },
          { text: "tröstet die Verzagten", hooks: ["glaube"] },
          { text: "findet überall Verbündete", hooks: ["glaube","außenseiter"] },
        ],
        weaknessTags: [
          { text: "kann nicht Nein sagen", hooks: ["glaube"] },
          { text: "selbst gemieden", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "den Übersehenen helfen", description: "Die Welt rauscht an den Schwachen vorbei, ich aber nicht.", hooks: ["glaube","außenseiter"] },
          { title: "ihnen einen Platz schaffen", description: "Ich suche einen Ort, an dem die Verstoßenen sicher leben können.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "Heilerin ohne Lohn", hooks: ["glaube","handwerk"],
        powerTags: [
          { text: "kennt heilende Kräuter", hooks: ["handwerk","natur"] },
          { text: "heilende Hände", hooks: ["handwerk","magie"] },
          { text: "beruhigt Sterbende", hooks: ["glaube","verlust"] },
          { text: "gibt ihr Letztes", hooks: ["glaube"] },
        ],
        weaknessTags: [
          { text: "kaum genug zum Leben", hooks: ["glaube","verlust"] },
          { text: "kann keine Bitte abschlagen", hooks: ["glaube"] },
        ],
        quests: [
          { title: "heilen ohne zu fragen", description: "Wer Hilfe braucht, bekommt sie von mir, ob arm oder reich.", hooks: ["glaube","handwerk"] },
          { title: "das verlorene Rezept wiederfinden", description: "Ich suche die alte Kunst, die einst viele Leben rettete.", hooks: ["handwerk","wissen"] },
        ]
      },
    ]
  },
  "Past": {
    type: "Origin",
    titles: [
      {
        text: "verflucht", hooks: ["magie","schicksal"],
        powerTags: [
          { text: "spürt einen fluch", hooks: ["magie","schicksal"] },
          { text: "zeichen gegen unheil", hooks: ["magie","glaube"] },
          { text: "warnende erinnerungen", hooks: ["schicksal","verlust"] },
          { text: "trotzt dem schlimmsten", hooks: ["schicksal","verlust"] },
        ],
        weaknessTags: [
          { text: "das mal des fluches", hooks: ["magie","verlust"] },
          { text: "wehrlos an bestimmten orten", hooks: ["schicksal","verlust"] },
          { text: "wiederkehrende albträume", hooks: ["verlust","schicksal"] },
        ],
        quests: [
          { title: "den fluch brechen", description: "Etwas hängt an mir wie ein Schatten und ich werde nicht ruhen, bis ich es abschüttle.", hooks: ["magie","schicksal"] },
          { title: "den ursprung finden", description: "Ich folge der Spur des Fluches zurück bis zu der Hand, die ihn wirkte.", hooks: ["schicksal","geheimnis"] },
        ]
      },
      {
        text: "im krieg geschmiedet", hooks: ["kampf","verlust"],
        powerTags: [
          { text: "narbiger schwertarm", hooks: ["kampf","verlust"] },
          { text: "kennt das schlachtfeld", hooks: ["kampf"] },
          { text: "wittert eine falle", hooks: ["kampf","wissen"] },
          { text: "blick fürs schlimmste", hooks: ["kampf","verlust"] },
          { text: "abgehärtet vom schlimmsten", hooks: ["verlust","kampf"] },
        ],
        weaknessTags: [
          { text: "verfolgt von alten feinden", hooks: ["kampf","verlust"] },
          { text: "schmerzende erinnerung", hooks: ["verlust"] },
        ],
        quests: [
          { title: "den krieg hinter sich lassen", description: "Ich suche einen Frieden, den die Schlacht mir nie gegeben hat.", hooks: ["kampf","verlust"] },
          { title: "alte waffenbrüder finden", description: "Ich spüre die wenigen auf, die das Gemetzel mit mir überlebt haben.", hooks: ["kampf","verlust"] },
        ]
      },
      {
        text: "letzter meines volkes", hooks: ["verlust","natur"],
        powerTags: [
          { text: "spricht eine vergessene zunge", hooks: ["wissen","verlust"] },
          { text: "kennt die namen der toten", hooks: ["verlust","geheimnis"] },
          { text: "sprache der verlorenen", hooks: ["verlust","wissen"] },
          { text: "einst gelernte liturgie", hooks: ["glaube","verlust"] },
        ],
        weaknessTags: [
          { text: "lebt in der vergangenheit", hooks: ["verlust","schicksal"] },
          { text: "traut nur vertrauten von einst", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "das erbe bewahren", description: "Solange ich lebe, soll das Wissen meines Volkes nicht ganz verlöschen.", hooks: ["verlust","natur"] },
          { title: "das werk vollenden", description: "Ich beende, was mein Volk nicht mehr enden konnte.", hooks: ["verlust","natur"] },
        ]
      },
      {
        text: "mystischer pilger", hooks: ["magie","fahrend"],
        powerTags: [
          { text: "findet immer orientierung", hooks: ["fahrend","natur"] },
          { text: "reist mit leichtem gepäck", hooks: ["fahrend","verlust"] },
          { text: "kennt heilige wege", hooks: ["glaube","fahrend"] },
          { text: "liest die zeichen", hooks: ["magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "nirgends lange zu hause", hooks: ["fahrend","außenseiter"] },
          { text: "als fremder beäugt", hooks: ["außenseiter","fahrend"] },
        ],
        quests: [
          { title: "die pilgerfahrt vollenden", description: "Der Weg selbst ist meine Prüfung und erst am Ziel weiß ich, wer ich bin.", hooks: ["glaube","fahrend"] },
          { title: "das verborgene heiligtum finden", description: "Ein Ort wartet auf mich, den niemand sonst zu suchen wagt.", hooks: ["magie","fahrend"] },
        ]
      },
      {
        text: "aus den trümmern", hooks: ["verlust","fahrend"],
        powerTags: [
          { text: "hat die ruinen gesehen", hooks: ["verlust","natur"] },
          { text: "durchgemacht und überlebt", hooks: ["verlust"] },
          { text: "lernt aus jedem fehler", hooks: ["wissen","handwerk"] },
          { text: "überlebt jede not", hooks: ["verlust","außenseiter"] },
        ],
        weaknessTags: [
          { text: "bleibende schuld", hooks: ["verlust","schicksal"] },
          { text: "kann nicht loslassen", hooks: ["verlust"] },
        ],
        quests: [
          { title: "neu aufbauen", description: "Aus den Trümmern lässt sich etwas machen, denn ich bin selbst aus Trümmern.", hooks: ["verlust","handwerk"] },
          { title: "retten was bleibt", description: "Solange irgendwo ein Funken glimmt, gebe ich nicht auf.", hooks: ["verlust","natur"] },
        ]
      },
      {
        text: "der heimkehrer", hooks: ["fahrend","verlust"],
        powerTags: [
          { text: "kennt den weg zurück", hooks: ["fahrend","verlust"] },
          { text: "getragene reisetracht", hooks: ["fahrend","verlust"] },
          { text: "altes andenken", hooks: ["verlust"] },
          { text: "findet alte verbündete", hooks: ["fahrend","glaube"] },
        ],
        weaknessTags: [
          { text: "daheim hat sich alles verändert", hooks: ["verlust","schicksal"] },
          { text: "wird von alten bekannten erkannt", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "nach hause finden", description: "Ich kehre an den Ort zurück, den ich einst verlassen musste.", hooks: ["fahrend","verlust"] },
          { title: "das alte unrecht klären", description: "Was vor meiner Abreise geschah, lässt mir keine Ruhe.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "feuerüberlebende", hooks: ["verlust","schicksal"],
        powerTags: [
          { text: "andenken eines toten", hooks: ["verlust"] },
          { text: "eiserner wille", hooks: ["verlust"] },
          { text: "eine lektion aus leid", hooks: ["verlust","wissen"] },
          { text: "wacht beim leisesten geräusch", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "schmerzende erinnerung", hooks: ["verlust"] },
          { text: "wehrlos vor flammen", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "das vergangene zur ruhe bringen", description: "Die Geister der Brandnacht sollen endlich schweigen.", hooks: ["verlust","schicksal"] },
          { title: "den brandstifter finden", description: "Ich will wissen, wessen Hand das Feuer legte.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "entflohener gefangener", hooks: ["außenseiter","verlust"],
        powerTags: [
          { text: "kennt den preis des aufgebens", hooks: ["verlust","wissen"] },
          { text: "geht in der menge unter", hooks: ["außenseiter","geheimnis"] },
          { text: "sieht durch lügen", hooks: ["geheimnis"] },
          { text: "überlebt jede not", hooks: ["verlust","außenseiter"] },
        ],
        weaknessTags: [
          { text: "verfolgt von alten feinden", hooks: ["kampf","verlust"] },
          { text: "traut niemandem ganz", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "sich von den ketten befreien", description: "Solange ein Schatten an mir hängt, gehört mein Leben mir nicht ganz.", hooks: ["verlust","außenseiter"] },
          { title: "mit den wärtern abrechnen", description: "Die, die mich gefangen hielten, sollen nicht ungestraft bleiben.", hooks: ["außenseiter","kampf"] },
        ]
      },
      {
        text: "kriegskind", hooks: ["kampf","verlust"],
        powerTags: [
          { text: "abgehärtet vom schlimmsten", hooks: ["verlust"] },
          { text: "blick fürs schlimmste", hooks: ["kampf","verlust"] },
          { text: "trägt narben mit würde", hooks: ["verlust","kampf"] },
          { text: "wittert eine falle", hooks: ["kampf","wissen"] },
        ],
        weaknessTags: [
          { text: "wiederkehrende albträume", hooks: ["verlust"] },
          { text: "kennt nur den krieg", hooks: ["kampf","außenseiter"] },
        ],
        quests: [
          { title: "einen ruhigen platz suchen", description: "Ich will einmal leben, ohne dass alles ein Schlachtfeld ist.", hooks: ["kampf","verlust"] },
          { title: "die eltern wiederfinden", description: "Ich suche die Familie, die der Krieg mir nahm.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "einzige mitwisserin", hooks: ["geheimnis","wissen"],
        powerTags: [
          { text: "sieht durch lügen", hooks: ["geheimnis"] },
          { text: "kennt die namen der toten", hooks: ["verlust","geheimnis"] },
          { text: "eine lektion aus leid", hooks: ["verlust","wissen"] },
          { text: "hört wo andere schweigen", hooks: ["geheimnis","wissen"] },
        ],
        weaknessTags: [
          { text: "wird gejagt um ihr wissen", hooks: ["geheimnis","verlust"] },
          { text: "traut nur vertrauten von einst", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "die wahrheit ans licht bringen", description: "Die Geschichte hat Risse, und ich kenne, was dahinter liegt.", hooks: ["geheimnis","wissen"] },
          { title: "den verräter entlarven", description: "Jemand aus meinem Kreis hat mich verraten und ich will den Namen.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "getriebene ohne heimat", hooks: ["fahrend","verlust"],
        powerTags: [
          { text: "reist mit leichtem gepäck", hooks: ["fahrend","verlust"] },
          { text: "findet immer orientierung", hooks: ["fahrend","natur"] },
          { text: "findet überall unterschlupf", hooks: ["fahrend","außenseiter"] },
          { text: "abgehärtet vom schlimmsten", hooks: ["verlust"] },
        ],
        weaknessTags: [
          { text: "nirgends willkommen", hooks: ["außenseiter","fahrend"] },
          { text: "kann nicht loslassen", hooks: ["verlust"] },
        ],
        quests: [
          { title: "einen ort zum bleiben finden", description: "Irgendwo muss ein Platz sein, an dem ich endlich atmen darf.", hooks: ["fahrend","verlust"] },
          { title: "dem getriebensein entkommen", description: "Ich will herausfinden, was mich rastlos durch die Lande treibt.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "wer alles zurückließ", hooks: ["verlust","außenseiter"],
        powerTags: [
          { text: "lebt vom wenigen", hooks: ["außenseiter","verlust"] },
          { text: "kennt den preis des aufgebens", hooks: ["verlust","wissen"] },
          { text: "altes andenken", hooks: ["verlust"] },
          { text: "durchgemacht und überlebt", hooks: ["verlust"] },
        ],
        weaknessTags: [
          { text: "bleibende schuld", hooks: ["verlust","schicksal"] },
          { text: "lebt in der vergangenheit", hooks: ["verlust","schicksal"] },
        ],
        quests: [
          { title: "dem zurückgelassenen vergeben", description: "Nicht weil sie es verdienen, sondern damit ich ohne die Last weiterkomme.", hooks: ["verlust","glaube"] },
          { title: "das eine zurückholen", description: "Von allem, was ich aufgab, gibt es eines, das ich nicht verlieren will.", hooks: ["verlust","schicksal"] },
        ]
      },
    ]
  },
  "People": {
    type: "Origin",
    titles: [
      {
        text: "sylvenelf", hooks: ["natur","schicksal"],
        powerTags: [
          { text: "kennt die sitten meines volkes", hooks: ["natur"] },
          { text: "die sprache der ahnen", hooks: ["wissen","natur"] },
          { text: "leiser schritt", hooks: ["natur"] },
          { text: "sieht im dunkeln", hooks: ["natur","schicksal"] },
        ],
        weaknessTags: [
          { text: "misstrauisch gegen fremde", hooks: ["außenseiter","natur"] },
          { text: "fremde sitten überfordern sie", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "ich erfülle eine prophezeiung meiner sippe", description: "Die Alten sahen mich in dem voraus, was kommen wird, und ich kann mich dem nicht entziehen.", hooks: ["schicksal","natur"] },
          { title: "ich finde meinesgleichen", description: "Irgendwo dort draußen müssen andere sein, die wie ich sind.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "highlanderin", hooks: ["natur","kampf"],
        powerTags: [
          { text: "unerwartete stärke", hooks: ["kampf"] },
          { text: "schwert meines volkes", hooks: ["kampf","natur"] },
          { text: "heimischer boden gibt kraft", hooks: ["natur"] },
          { text: "wettergegerbte haut", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "gemieden in dieser gegend", hooks: ["außenseiter"] },
          { text: "loyaler als vernünftig", hooks: ["glaube"] },
        ],
        quests: [
          { title: "ich erhebe mein volk wieder zu würde", description: "Wir sind mehr als die Geschichten, die andere über uns erzählen.", hooks: ["natur","macht"] },
          { title: "ich bringe frieden mit den alten feinden", description: "Der Krieg ist alt und keiner weiß mehr, warum er begann.", hooks: ["natur","kampf"] },
        ]
      },
      {
        text: "battlerider", hooks: ["kampf"],
        powerTags: [
          { text: "bogen meines volkes", hooks: ["kampf","natur"] },
          { text: "angeborene schnelligkeit", hooks: ["natur"] },
          { text: "affinität zu tieren", hooks: ["natur"] },
          { text: "sitzt fest im sattel", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "aus dem element gerissen", hooks: ["fahrend","außenseiter"] },
          { text: "loyaler als vernünftig", hooks: ["glaube"] },
        ],
        quests: [
          { title: "ich beweise den wert meiner reiter", description: "Man hält uns für rohe Krieger, doch ich zeige, was wir wirklich sind.", hooks: ["außenseiter","kampf"] },
          { title: "ich finde mein verlorenes ross wieder", description: "Ohne mein Tier bin ich nur ein halber Krieger.", hooks: ["kampf","natur"] },
        ]
      },
      {
        text: "hexenblut", hooks: ["magie","schicksal"],
        powerTags: [
          { text: "wittert unrecht sofort", hooks: ["glaube","schicksal"] },
          { text: "kennt verborgene heilpflanzen", hooks: ["natur","wissen"] },
          { text: "altertümliches lied", hooks: ["natur","wissen"] },
          { text: "trägt das wissen der alten", hooks: ["wissen","natur"] },
        ],
        weaknessTags: [
          { text: "auffälliges merkmal", hooks: ["außenseiter","schicksal"] },
          { text: "gemieden in dieser gegend", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "ich erforsche das erbe meines blutes", description: "Etwas Altes liegt in meinen Adern und ich muss wissen, woher es kommt.", hooks: ["magie","schicksal"] },
          { title: "ich beweise dass mein volk mehr ist als sein ruf", description: "Die anderen erzählen alte und falsche Geschichten über uns.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "karawanenvolk", hooks: ["fahrend"],
        powerTags: [
          { text: "tanz mit tiefer bedeutung", hooks: ["natur","glaube"] },
          { text: "körpersprache nur für eingeweihte", hooks: ["geheimnis","außenseiter"] },
          { text: "findet immer orientierung", hooks: ["fahrend","natur"] },
          { text: "entfacht feuer überall", hooks: ["natur","handwerk"] },
        ],
        weaknessTags: [
          { text: "gemieden in dieser gegend", hooks: ["außenseiter"] },
          { text: "spricht mit fremdem akzent", hooks: ["außenseiter","fahrend"] },
        ],
        quests: [
          { title: "ich bewahre die lieder meines volkes", description: "Wer keine Lieder mehr hat, hat kein Volk.", hooks: ["natur","wissen"] },
          { title: "ich finde das verlorene herz meiner kultur", description: "Etwas wurde uns genommen, ein Ort, ein Ritual, ein Name.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "bibervolk", hooks: ["natur"],
        powerTags: [
          { text: "werkzeug aus der heimat", hooks: ["handwerk","natur"] },
          { text: "taucht und schwimmt mühelos", hooks: ["natur"] },
          { text: "baut dämme und unterschlüpfe", hooks: ["handwerk","natur"] },
          { text: "kennt die zeichen des wetters", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "auffälliges merkmal", hooks: ["außenseiter","schicksal"] },
          { text: "misstrauisch gegen fremde", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "ich schütze die wasser meiner heimat", description: "Flüsse und Teiche sind unser Leben und etwas bedroht sie.", hooks: ["natur"] },
          { title: "ich finde meinesgleichen", description: "Irgendwo dort draußen müssen andere sein, die wie ich sind.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "fjordgeborene", hooks: ["natur"],
        powerTags: [
          { text: "überlebt in unwirtlichen gebieten", hooks: ["natur","außenseiter"] },
          { text: "wettergegerbte haut", hooks: ["natur"] },
          { text: "kennt die zeichen des wetters", hooks: ["natur"] },
          { text: "seefest und sicher zu schiff", hooks: ["natur","fahrend"] },
        ],
        weaknessTags: [
          { text: "aus dem element gerissen", hooks: ["fahrend","außenseiter"] },
          { text: "blind für fremde bräuche", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "ich kehre an die küste meiner ahnen zurück", description: "Das Salz im Wind ruft mich heim, koste es, was es wolle.", hooks: ["natur","verlust"] },
          { title: "ich erhebe mein volk wieder zu würde", description: "Wir sind mehr als die Geschichten, die andere über uns erzählen.", hooks: ["natur","macht"] },
        ]
      },
      {
        text: "tochter der wanderer", hooks: ["fahrend"],
        powerTags: [
          { text: "findet immer orientierung", hooks: ["fahrend","natur"] },
          { text: "seelenbewegender gesang", hooks: ["natur","schicksal"] },
          { text: "erkennt gast und eindringling", hooks: ["natur","geheimnis"] },
          { text: "findet überall unterschlupf", hooks: ["fahrend","stadt"] },
        ],
        weaknessTags: [
          { text: "spricht mit fremdem akzent", hooks: ["außenseiter","fahrend"] },
          { text: "gemieden in dieser gegend", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "ich überbrücke die welten in denen ich lebe", description: "Ich bin weder ganz von hier noch ganz von dort.", hooks: ["außenseiter","schicksal"] },
          { title: "ich bewahre die lieder meines volkes", description: "Wer keine Lieder mehr hat, hat kein Volk.", hooks: ["fahrend","wissen"] },
        ]
      },
      {
        text: "küstenkind", hooks: ["natur"],
        powerTags: [
          { text: "taucht und schwimmt mühelos", hooks: ["natur"] },
          { text: "kennt die zeichen des wetters", hooks: ["natur"] },
          { text: "angeborener sinn für spuren", hooks: ["natur"] },
          { text: "liest die gezeiten", hooks: ["natur","wissen"] },
        ],
        weaknessTags: [
          { text: "aus dem element gerissen", hooks: ["fahrend","außenseiter"] },
          { text: "fremde sitten überfordern sie", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "ich finde das verlorene herz meiner kultur", description: "Etwas wurde uns genommen, ein Ort, ein Ritual, ein Name.", hooks: ["natur","verlust"] },
          { title: "ich schütze die küste vor dem was aus der see kommt", description: "Das Meer gibt und es nimmt, und ich stehe an seiner Schwelle.", hooks: ["natur"] },
        ]
      },
      {
        text: "sumpfbewohner", hooks: ["natur"],
        powerTags: [
          { text: "überlebt in unwirtlichen gebieten", hooks: ["natur","außenseiter"] },
          { text: "kennt verborgene heilpflanzen", hooks: ["natur","wissen"] },
          { text: "angeborener sinn für spuren", hooks: ["natur"] },
          { text: "leiser schritt", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "gemieden in dieser gegend", hooks: ["außenseiter"] },
          { text: "misstrauisch gegen fremde", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "ich bewahre die geheimnisse des moors", description: "Der Sumpf birgt altes Wissen, das nur wir noch kennen.", hooks: ["natur","geheimnis"] },
          { title: "ich beweise dass mein volk mehr ist als sein ruf", description: "Die anderen erzählen alte und falsche Geschichten über uns.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "halbblut zwischen zwei welten", hooks: ["außenseiter","schicksal"],
        powerTags: [
          { text: "kennt die sitten zweier völker", hooks: ["natur","außenseiter"] },
          { text: "erkennt gast und eindringling", hooks: ["natur","geheimnis"] },
          { text: "die sprache der ahnen", hooks: ["wissen","natur"] },
          { text: "vermittelt zwischen fremden", hooks: ["stadt","außenseiter"] },
        ],
        weaknessTags: [
          { text: "gemieden in dieser gegend", hooks: ["außenseiter"] },
          { text: "auffälliges merkmal", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "ich überbrücke die welten in denen ich lebe", description: "Ich bin weder ganz von hier noch ganz von dort.", hooks: ["außenseiter","schicksal"] },
          { title: "ich finde meinesgleichen", description: "Irgendwo müssen andere sein, die zwischen den Welten stehen wie ich.", hooks: ["außenseiter","schicksal"] },
        ]
      },
      {
        text: "aus dem fernen osten", hooks: ["fahrend","geheimnis"],
        powerTags: [
          { text: "trägt das wissen der alten", hooks: ["wissen","natur"] },
          { text: "körpersprache nur für eingeweihte", hooks: ["geheimnis","außenseiter"] },
          { text: "altertümliches lied", hooks: ["natur","wissen"] },
          { text: "kennt ferne sitten und wege", hooks: ["fahrend","wissen"] },
        ],
        weaknessTags: [
          { text: "spricht mit fremdem akzent", hooks: ["außenseiter","fahrend"] },
          { text: "fremde sitten überfordern sie", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "ich finde den weg in die heimat zurück", description: "Ein langer Pfad liegt zwischen mir und dem Land, das mich kennt.", hooks: ["fahrend","verlust"] },
          { title: "ich bringe das wissen meiner heimat in diese welt", description: "Was hier niemand kennt, könnte vieles verändern.", hooks: ["wissen","geheimnis"] },
        ]
      },
    ]
  },
  "Personality": {
    type: "Origin",
    titles: [
      {
        text: "Herz aus Gold", hooks: ["glaube"],
        powerTags: [
          { text: "gibt sein Letztes", hooks: ["glaube","verlust"] },
          { text: "erkennt verborgene Not", hooks: ["glaube","wissen"] },
          { text: "trägt keinen Groll", hooks: ["glaube"] },
          { text: "macht Mut zum Aufstehen", hooks: ["glaube","natur"] },
        ],
        weaknessTags: [
          { text: "ausnutzbar", hooks: ["außenseiter"] },
          { text: "nimmt sich alles zu Herzen", hooks: ["verlust","natur"] },
        ],
        quests: [
          { title: "ein offenes ohr für die übersehenen", description: "Ich helfe denen, die sonst niemand sieht.", hooks: ["glaube","außenseiter"] },
          { title: "güte zurückgeben", description: "Ich gebe das Gute, das mir getan wurde, weiter.", hooks: ["glaube","verlust"] },
        ]
      },
      {
        text: "das goldene Lächeln", hooks: ["stadt"],
        powerTags: [
          { text: "einnehmendes Lächeln", hooks: ["stadt"] },
          { text: "plaudert sich aus jeder Lage", hooks: ["stadt"] },
          { text: "bringt jeden zum Reden", hooks: ["stadt"] },
          { text: "liest Räume sofort", hooks: ["stadt","wissen"] },
        ],
        weaknessTags: [
          { text: "erwartet Anerkennung", hooks: ["macht"] },
          { text: "spricht zu viel", hooks: ["stadt"] },
        ],
        quests: [
          { title: "menschen für eine sache gewinnen", description: "Ich ändere etwas in dieser Welt durch Worte, nicht durch Schwerter.", hooks: ["stadt","macht"] },
          { title: "wahre freunde hinter den masken", description: "Ich finde die, die mir wirklich vertrauen.", hooks: ["glaube","stadt"] },
        ]
      },
      {
        text: "mürrisch wie Stein", hooks: ["außenseiter"],
        powerTags: [
          { text: "Sturheit als Tugend", hooks: ["natur"] },
          { text: "einschüchterndes Auftreten", hooks: ["natur"] },
          { text: "kalter Blick", hooks: ["macht"] },
          { text: "gibt nie vorzeitig auf", hooks: ["glaube","schicksal"] },
        ],
        weaknessTags: [
          { text: "leicht zu provozieren", hooks: ["kampf"] },
          { text: "verschreckt mit der schroffen art", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "mir selbst nicht im weg stehen", description: "Ich lerne, auch für mich selbst da zu sein.", hooks: ["natur","verlust"] },
          { title: "treu bleiben um jeden preis", description: "Ich bleibe mir treu, koste es, was es wolle.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "geübte Lügnerin", hooks: ["stadt","geheimnis"],
        powerTags: [
          { text: "durchschaut eine Lüge", hooks: ["stadt","geheimnis"] },
          { text: "plaudert sich aus jeder Lage", hooks: ["stadt"] },
          { text: "trägt jede maske glaubhaft", hooks: ["stadt","geheimnis"] },
          { text: "behält die Ruhe", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "misstraut der eigenen Geschichte", hooks: ["geheimnis","verlust"] },
          { text: "wird beim wort genommen", hooks: ["stadt","geheimnis"] },
        ],
        quests: [
          { title: "das gesicht unter den masken", description: "Ich verstehe endlich, wer ich wirklich bin.", hooks: ["geheimnis","schicksal"] },
          { title: "menschen finden die das echte sehen", description: "Ich finde die, die mir wirklich vertrauen.", hooks: ["glaube","stadt"] },
        ]
      },
      {
        text: "unstillbar neugierig", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "kennt die richtige Frage", hooks: ["wissen"] },
          { text: "fragt im richtigen Moment", hooks: ["wissen","stadt"] },
          { text: "keine Gerüchte entgehen mir", hooks: ["stadt","geheimnis"] },
          { text: "merkt sich jede einzelheit", hooks: ["wissen"] },
        ],
        weaknessTags: [
          { text: "verliert sich in Details", hooks: ["wissen","geheimnis"] },
          { text: "steckt die nase in fremdes", hooks: ["geheimnis","außenseiter"] },
        ],
        quests: [
          { title: "der wahrheit auf den grund gehen", description: "Ich lasse keine Frage offen, bis ich die Antwort selbst gesehen habe.", hooks: ["wissen","geheimnis"] },
          { title: "ein rätsel das mich nicht loslässt", description: "Ich folge einem Geheimnis, das niemand sonst lösen will.", hooks: ["geheimnis","schicksal"] },
        ]
      },
      {
        text: "tröstet die Welt", hooks: ["glaube"],
        powerTags: [
          { text: "einfühlsame Stille", hooks: ["glaube"] },
          { text: "gibt anderen Hoffnung", hooks: ["glaube","natur"] },
          { text: "gibt guten Rat", hooks: ["glaube","natur"] },
          { text: "verbreitet Zuversicht", hooks: ["glaube"] },
        ],
        weaknessTags: [
          { text: "leidet unter Misstimmung", hooks: ["natur","glaube"] },
          { text: "vergisst die eigenen sorgen", hooks: ["verlust","glaube"] },
        ],
        quests: [
          { title: "licht in dunkle räume bringen", description: "Ich bringe Licht in dunkle Räume.", hooks: ["glaube","macht"] },
          { title: "auch für mich selbst da sein", description: "Ich lerne, auch für mich selbst da zu sein.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "gefährlich gutgläubig", hooks: ["außenseiter","schicksal"],
        powerTags: [
          { text: "sieht das gute im menschen", hooks: ["glaube"] },
          { text: "macht Mut zum Aufstehen", hooks: ["glaube","natur"] },
          { text: "trägt keinen Groll", hooks: ["glaube"] },
          { text: "gewinnt schnell vertrauen", hooks: ["glaube","stadt"] },
        ],
        weaknessTags: [
          { text: "ausnutzbar", hooks: ["außenseiter"] },
          { text: "läuft in offene fallen", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "vertrauen ohne reue lernen", description: "Ich finde heraus, wem ich trauen darf, ohne misstrauisch zu werden.", hooks: ["außenseiter","schicksal"] },
          { title: "an die güte glauben", description: "Ich beweise, dass mein Vertrauen die Welt besser macht.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "das ruhige Auge im Sturm", hooks: ["natur","macht"],
        powerTags: [
          { text: "behält die Ruhe", hooks: ["natur"] },
          { text: "stellt sich dem Konflikt", hooks: ["kampf","glaube"] },
          { text: "ordnet das chaos", hooks: ["natur","macht"] },
          { text: "gibt anderen halt", hooks: ["glaube","natur"] },
        ],
        weaknessTags: [
          { text: "staut alles in sich auf", hooks: ["verlust","natur"] },
          { text: "wirkt unnahbar kühl", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "frieden stiften wo streit tobt", description: "Ich werde der ruhige Punkt, an dem sich die Aufgebrachten sammeln.", hooks: ["natur","macht"] },
          { title: "den eigenen sturm beruhigen", description: "Ich lerne, auch für mich selbst da zu sein.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "kein Blatt vor dem Mund", hooks: ["außenseiter"],
        powerTags: [
          { text: "sucht nach der Wahrheit", hooks: ["außenseiter"] },
          { text: "spricht aus was alle denken", hooks: ["außenseiter","stadt"] },
          { text: "lässt sich nicht einschüchtern", hooks: ["außenseiter","macht"] },
          { text: "durchschaut eine Lüge", hooks: ["stadt","geheimnis"] },
        ],
        weaknessTags: [
          { text: "zu ehrlich", hooks: ["glaube"] },
          { text: "macht sich feinde mit worten", hooks: ["außenseiter","kampf"] },
        ],
        quests: [
          { title: "wahrheit gegen mächtige aussprechen", description: "Ich sage das Unbequeme dort, wo es weh tut.", hooks: ["außenseiter","macht"] },
          { title: "treu bleiben koste es was es wolle", description: "Ich bleibe mir treu, koste es, was es wolle.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "lacht zuletzt", hooks: ["stadt"],
        powerTags: [
          { text: "Lacher in dunkler Stunde", hooks: ["natur"] },
          { text: "frohe Geschichte", hooks: ["natur"] },
          { text: "findet überall Komik", hooks: ["außenseiter","schicksal"] },
          { text: "spielt den Narren", hooks: ["glaube"] },
        ],
        weaknessTags: [
          { text: "macht alles ins lächerliche", hooks: ["außenseiter","stadt"] },
          { text: "sentimental im falschen Moment", hooks: ["verlust"] },
        ],
        quests: [
          { title: "mit einem scherz die stimmung wenden", description: "Ich bringe Licht in dunkle Räume.", hooks: ["glaube","macht"] },
          { title: "ernst genommen werden", description: "Ich beweise, dass hinter dem Lachen mehr steckt.", hooks: ["stadt","außenseiter"] },
        ]
      },
      {
        text: "hält Geheimnisse wie Atemluft", hooks: ["geheimnis"],
        powerTags: [
          { text: "verrät niemals ein wort", hooks: ["geheimnis","glaube"] },
          { text: "keine Gerüchte entgehen mir", hooks: ["stadt","geheimnis"] },
          { text: "behält die Ruhe", hooks: ["natur"] },
          { text: "liest Räume sofort", hooks: ["stadt","wissen"] },
        ],
        weaknessTags: [
          { text: "trägt zu viele lasten allein", hooks: ["geheimnis","verlust"] },
          { text: "erpressbar durch das gewusste", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "ein anvertrautes geheimnis schützen", description: "Ich bewahre, was mir jemand im Vertrauen gab, gegen jeden Druck.", hooks: ["geheimnis","glaube"] },
          { title: "jemandem das ganze geheimnis sein", description: "Ich finde die, die mir wirklich vertrauen.", hooks: ["glaube","stadt"] },
        ]
      },
      {
        text: "verhängnisvoll neugierig", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "kennt die richtige Frage", hooks: ["wissen"] },
          { text: "spürt dem verborgenen nach", hooks: ["geheimnis","wissen"] },
          { text: "fragt im richtigen Moment", hooks: ["wissen","stadt"] },
          { text: "gibt nie vorzeitig auf", hooks: ["glaube","schicksal"] },
        ],
        weaknessTags: [
          { text: "weckt schlafende hunde", hooks: ["geheimnis","schicksal"] },
          { text: "verliert sich in Details", hooks: ["wissen","geheimnis"] },
        ],
        quests: [
          { title: "ein gefährliches geheimnis lüften", description: "Ich grabe an etwas, das besser begraben bliebe, bis ich die Wahrheit kenne.", hooks: ["geheimnis","schicksal"] },
          { title: "die folgen meiner fragen tragen", description: "Ich stehe für das gerade, was meine Neugier ans Licht gebracht hat.", hooks: ["wissen","verlust"] },
        ]
      },
    ]
  },
  "Skill or Trade": {
    type: "Origin",
    titles: [
      {
        text: "Hinterland-Spurenleser", hooks: ["natur","handwerk"],
        powerTags: [
          { text: "kennt jede Spur im Wald", hooks: ["natur"] },
          { text: "liest die Karte", hooks: ["natur","wissen"] },
          { text: "wittert eine Falle", hooks: ["natur","handwerk"] },
          { text: "findet immer Orientierung", hooks: ["natur","fahrend"] },
        ],
        weaknessTags: [
          { text: "kennt nur die Wildnis", hooks: ["natur","außenseiter"] },
          { text: "misstrauisch beobachtet", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "Ich finde Anwendung für meine Kunst", description: "Irgendwo wartet eine Fährte, die meinem Können einen Sinn gibt.", hooks: ["natur","handwerk"] },
          { title: "Ich folge der ältesten Spur", description: "Eine Fährte führt tiefer ins Land, als je ein Mensch ging.", hooks: ["natur","geheimnis"] },
        ]
      },
      {
        text: "Schmied der Berge", hooks: ["handwerk","natur"],
        powerTags: [
          { text: "meisterhaft an der Esse", hooks: ["handwerk"] },
          { text: "Stahl bis zur Klinge", hooks: ["handwerk"] },
          { text: "kennt jedes Material", hooks: ["handwerk","natur"] },
          { text: "fester Griff", hooks: ["handwerk"] },
          { text: "erkennt gute Arbeit", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "reagiert gereizt auf Pfusch", hooks: ["handwerk"] },
          { text: "überfordert ohne Werkzeug", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Ich werde der Beste in meinem Fach", description: "Andere sollen meinen Namen nennen wenn sie an Schmiedekunst denken.", hooks: ["handwerk"] },
          { title: "Ich baue etwas das die Zeit besteht", description: "Ich will eine Klinge schmieden die noch steht wenn ich längst weg bin.", hooks: ["handwerk"] },
        ]
      },
      {
        text: "taschendiebischer Wandersmann", hooks: ["außenseiter","fahrend","stadt"],
        powerTags: [
          { text: "flinke Finger", hooks: ["handwerk","stadt"] },
          { text: "leise Schritte", hooks: ["stadt","außenseiter"] },
          { text: "umgeht jede Wache", hooks: ["stadt","außenseiter"] },
          { text: "geht in der Menge unter", hooks: ["stadt","geheimnis"] },
        ],
        weaknessTags: [
          { text: "misstrauisch beobachtet", hooks: ["außenseiter"] },
          { text: "das Recht schützt ihn nie", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "Ich baue mir einen ehrlichen Platz", description: "Nur das was ich ohne fremde Taschen schaffe soll mir gehören.", hooks: ["außenseiter","fahrend"] },
          { title: "Ich begleiche jede alte Schuld", description: "Was ich einst stahl will ich auf meine Weise zurückgeben.", hooks: ["verlust","stadt"] },
        ]
      },
      {
        text: "Heilkundige", hooks: ["handwerk","wissen"],
        powerTags: [
          { text: "kennt heilende Kräuter", hooks: ["handwerk","natur"] },
          { text: "einfache Heilkunst", hooks: ["handwerk"] },
          { text: "fachkundiger Blick", hooks: ["handwerk","wissen"] },
          { text: "ruhige Hände", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "kann nicht Nein sagen", hooks: ["glaube"] },
          { text: "überfordert ohne Werkzeug", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Ich rette mit meinem Handwerk ein Leben", description: "Es geht darum dass meine Hände heute das Richtige tun.", hooks: ["handwerk","wissen"] },
          { title: "Ich gebe mein Wissen weiter", description: "Was ich über Wunden lernte soll nicht mit mir sterben.", hooks: ["handwerk","wissen"] },
        ]
      },
      {
        text: "Steuermann", hooks: ["handwerk","fahrend"],
        powerTags: [
          { text: "liest die Karte", hooks: ["fahrend","wissen"] },
          { text: "kennt jeden Knoten", hooks: ["handwerk","fahrend"] },
          { text: "ruhig in der Krise", hooks: ["handwerk","fahrend"] },
          { text: "kennt die Zeichen des Wetters", hooks: ["natur","fahrend"] },
        ],
        weaknessTags: [
          { text: "verloren ohne sein Schiff", hooks: ["fahrend","verlust"] },
          { text: "kennt nur eine Welt", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Ich finde den sichersten Kurs", description: "Durch jedes Wetter bringe ich mein Schiff und seine Leute heim.", hooks: ["fahrend","handwerk"] },
          { title: "Ich segle ein Gewässer das keiner kennt", description: "Hinter dem letzten Riff liegt ein Weg den noch niemand fuhr.", hooks: ["fahrend","geheimnis"] },
        ]
      },
      {
        text: "Bogenbauer", hooks: ["handwerk"],
        powerTags: [
          { text: "Pfeil und Bogen geübt", hooks: ["handwerk","kampf"] },
          { text: "gut gemachte Werkzeuge", hooks: ["handwerk"] },
          { text: "kennt jedes Holz", hooks: ["handwerk","natur"] },
          { text: "arbeitet schnell ohne Fehler", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "verliert sich in der Arbeit", hooks: ["handwerk"] },
          { text: "reagiert gereizt auf Pfusch", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Ich baue den vollkommenen Bogen", description: "Weil ich wissen muss ob ich kann was kein anderer kann.", hooks: ["handwerk"] },
          { title: "Ich bewahre mein Handwerk vor dem Vergessen", description: "Solange ich Bögen baue und lehre bleibt die Kunst lebendig.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "Gerber am Fluss", hooks: ["handwerk","natur"],
        powerTags: [
          { text: "verlässliche Routine", hooks: ["handwerk"] },
          { text: "kennt jedes Material", hooks: ["handwerk","natur"] },
          { text: "schätzt Maß und Gewicht", hooks: ["handwerk","wissen"] },
          { text: "kennt den Preis jedes Rohstoffs", hooks: ["handwerk","stadt"] },
        ],
        weaknessTags: [
          { text: "wirkt einseitig", hooks: ["handwerk"] },
          { text: "schlechte Verhandlungskünste", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Ich mache mein Gewerbe geachtet", description: "Niemand soll die Nase rümpfen über das was ich am Fluss schaffe.", hooks: ["handwerk","stadt"] },
          { title: "Ich finde Sinn in meiner Arbeit", description: "Mein Leder soll mehr tragen als nur den nächsten Gewinn.", hooks: ["handwerk"] },
        ]
      },
      {
        text: "Brauerin der alten Rezepte", hooks: ["handwerk"],
        powerTags: [
          { text: "gut sortierte Vorratskammer", hooks: ["handwerk"] },
          { text: "erkennt gute Arbeit", hooks: ["handwerk"] },
          { text: "kennt jedes Rezept", hooks: ["handwerk","wissen"] },
          { text: "verlässliche Routine", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "verliert sich in der Arbeit", hooks: ["handwerk"] },
          { text: "kennt nur eine Welt", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Ich bewahre die alten Rezepte", description: "Was meine Vorfahren brauten soll nicht mit mir verschwinden.", hooks: ["handwerk","verlust"] },
          { title: "Ich braue ein einziges Meisterstück", description: "Einmal will ich ein Gebräu schaffen von dem man noch lange spricht.", hooks: ["handwerk"] },
        ]
      },
      {
        text: "Kräutersammlerin", hooks: ["natur","handwerk"],
        powerTags: [
          { text: "kennt verborgene Heilpflanzen", hooks: ["natur","wissen"] },
          { text: "kennt jede Spur im Wald", hooks: ["natur"] },
          { text: "trägt das Wissen der Alten", hooks: ["natur","wissen"] },
          { text: "findet überall Nahrung", hooks: ["natur","handwerk"] },
        ],
        weaknessTags: [
          { text: "misstrauisch gegen Fremde", hooks: ["außenseiter","natur"] },
          { text: "kennt nur die Wildnis", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "Ich finde die seltenste Pflanze", description: "Irgendwo wächst ein Kraut das mein Wissen vollständig macht.", hooks: ["natur","geheimnis"] },
          { title: "Ich gebe mein Pflanzenwissen weiter", description: "Was ich über die Kräuter lernte soll andere Hände heilen lehren.", hooks: ["natur","wissen"] },
        ]
      },
      {
        text: "Bote der schnellen Füße", hooks: ["fahrend","handwerk"],
        powerTags: [
          { text: "findet immer Orientierung", hooks: ["fahrend","natur"] },
          { text: "kennt jeden Schleichweg", hooks: ["fahrend","stadt"] },
          { text: "reist mit leichtem Gepäck", hooks: ["fahrend"] },
          { text: "ruhig in der Krise", hooks: ["fahrend","handwerk"] },
        ],
        weaknessTags: [
          { text: "nie lange am selben Ort", hooks: ["fahrend","verlust"] },
          { text: "gehetzt vom nächsten Auftrag", hooks: ["fahrend"] },
        ],
        quests: [
          { title: "Ich überbringe die wichtigste Botschaft", description: "Eine Nachricht muss ankommen koste es was es wolle.", hooks: ["fahrend","handwerk"] },
          { title: "Ich finde einen Ort zum Bleiben", description: "Irgendwo da draußen muss ein Platz sein an dem mein Lauf endet.", hooks: ["fahrend","verlust"] },
        ]
      },
      {
        text: "Tischler der feinen Art", hooks: ["handwerk"],
        powerTags: [
          { text: "Werkzeug meines Handwerks", hooks: ["handwerk"] },
          { text: "baut auch im Dunkeln", hooks: ["handwerk"] },
          { text: "repariert Unbrauchbares", hooks: ["handwerk"] },
          { text: "ungewöhnlich präzise", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "reagiert gereizt auf Pfusch", hooks: ["handwerk"] },
          { text: "Berufsehre macht kompromisslos", hooks: ["handwerk","glaube"] },
        ],
        quests: [
          { title: "Ich baue das schwierigste Stück", description: "Nicht für Lob sondern weil ich wissen muss ob ich es kann.", hooks: ["handwerk"] },
          { title: "Ich schaffe ein Werk für die Ewigkeit", description: "Ich will einmal etwas tischlern das noch steht wenn ich weg bin.", hooks: ["handwerk"] },
        ]
      },
      {
        text: "Seiltänzerin auf Jahrmärkten", hooks: ["handwerk","fahrend"],
        powerTags: [
          { text: "eingespielte Schrittfolge", hooks: ["handwerk"] },
          { text: "sicheres Gleichgewicht", hooks: ["handwerk"] },
          { text: "einnehmender Auftritt", hooks: ["fahrend","stadt"] },
          { text: "flink und gelenkig", hooks: ["handwerk","natur"] },
        ],
        weaknessTags: [
          { text: "ein Sturz beendet alles", hooks: ["handwerk","verlust"] },
          { text: "nie lange am selben Ort", hooks: ["fahrend","außenseiter"] },
        ],
        quests: [
          { title: "Ich wage den unmöglichen Tanz", description: "Einmal will ich gehen wo noch niemand das Seil gespannt hat.", hooks: ["handwerk","fahrend"] },
          { title: "Ich finde Beifall der wirklich zählt", description: "Hinter dem Jubel der Menge suche ich Augen die mich wirklich sehen.", hooks: ["fahrend","verlust"] },
        ]
      },
    ]
  },
  "Trait": {
    type: "Origin",
    titles: [
      {
        text: "stark wie ein ochse", hooks: ["kampf","natur"],
        powerTags: [
          { text: "unbändige kraft", hooks: ["kampf","schicksal"] },
          { text: "fester griff", hooks: ["kampf","natur"] },
          { text: "trägt schwere lasten", hooks: ["natur","handwerk"] },
          { text: "bricht durch hindernisse", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "auffällig für feinde", hooks: ["schicksal","kampf"] },
          { text: "schwer und langsam", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "ich beweise meine stärke", description: "Niemand soll glauben, dass rohe Kraft alles sei, was ich bin.", hooks: ["kampf","schicksal"] },
          { title: "ich schütze die schwachen", description: "Meine Kraft ist mir gegeben, um sie für andere einzusetzen.", hooks: ["glaube","kampf"] },
        ]
      },
      {
        text: "akrobatische beweglichkeit", hooks: ["handwerk","natur"],
        powerTags: [
          { text: "klettert wie eine katze", hooks: ["natur","handwerk"] },
          { text: "springt höher als andere", hooks: ["schicksal","natur"] },
          { text: "leichter schritt", hooks: ["handwerk","geheimnis"] },
          { text: "fällt nie", hooks: ["handwerk","natur"] },
        ],
        weaknessTags: [
          { text: "erschöpft sich rasch", hooks: ["schicksal","verlust"] },
          { text: "tollkühn ohne maß", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "ich meistere das unmögliche", description: "Es gibt einen Sprung, einen Weg, den noch niemand gewagt hat.", hooks: ["schicksal","handwerk"] },
          { title: "ich finde den höchsten gipfel", description: "Was andere für unerreichbar halten, will ich erklimmen.", hooks: ["natur","fahrend"] },
        ]
      },
      {
        text: "unheimlich schön", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "betörende schönheit", hooks: ["schicksal","geheimnis"] },
          { text: "zieht blicke an", hooks: ["schicksal","adel"] },
          { text: "unvergesslicher anblick", hooks: ["schicksal","stadt"] },
          { text: "gewinnt sympathie sofort", hooks: ["stadt","schicksal"] },
        ],
        weaknessTags: [
          { text: "wird beneidet", hooks: ["schicksal","stadt"] },
          { text: "zieht unliebsame neugier an", hooks: ["schicksal","geheimnis"] },
        ],
        quests: [
          { title: "ich werde nicht nur für mein gesicht gesehen", description: "Hinter der Schönheit steckt mehr, und das soll man erkennen.", hooks: ["schicksal","außenseiter"] },
          { title: "ich enthülle das geheimnis meiner herkunft", description: "Etwas Fremdartiges liegt in meiner Schönheit, und ich will wissen warum.", hooks: ["geheimnis","schicksal"] },
        ]
      },
      {
        text: "wache beobachtungsgabe", hooks: ["schicksal","magie"],
        powerTags: [
          { text: "vorausschauend", hooks: ["schicksal","magie"] },
          { text: "spürt nahende gefahr", hooks: ["magie","schicksal"] },
          { text: "liest räume sofort", hooks: ["schicksal","stadt"] },
          { text: "übersieht kein detail", hooks: ["wissen","schicksal"] },
        ],
        weaknessTags: [
          { text: "verliert sich in details", hooks: ["wissen","geheimnis"] },
          { text: "sieht zu viel", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "ich deute die zeichen richtig", description: "Was ich sehe, will ich endlich auch verstehen, bevor es zu spät ist.", hooks: ["schicksal","wissen"] },
          { title: "ich warne vor dem kommenden unheil", description: "Ich erkenne die Gefahr, die andere nicht sehen wollen.", hooks: ["magie","schicksal"] },
        ]
      },
      {
        text: "ausdauernder schwimmer", hooks: ["natur","schicksal"],
        powerTags: [
          { text: "taucht tief und lange", hooks: ["natur","schicksal"] },
          { text: "trotzt jeder strömung", hooks: ["natur","kampf"] },
          { text: "fühlt sich im wasser zuhause", hooks: ["natur","schicksal"] },
          { text: "unermüdliche beine", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "ruhelos an land", hooks: ["natur","außenseiter"] },
          { text: "trotzt der gefahr zu lange", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "ich durchquere die tiefen gewässer", description: "Jenseits des sicheren Ufers wartet etwas, das nur ich erreichen kann.", hooks: ["natur","fahrend"] },
          { title: "ich berge was im wasser verloren ging", description: "Auf dem Grund der Tiefe liegt, wonach ich tauchen muss.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "unerschütterlich", hooks: ["glaube","schicksal"],
        powerTags: [
          { text: "unermüdlich", hooks: ["schicksal","glaube"] },
          { text: "unerschütterliche konzentration", hooks: ["handwerk","glaube"] },
          { text: "behält die ruhe", hooks: ["natur","glaube"] },
          { text: "unerschütterlich heiter", hooks: ["schicksal","kampf"] },
        ],
        weaknessTags: [
          { text: "kennt ihre grenzen nicht", hooks: ["schicksal","verlust"] },
          { text: "starr im urteil", hooks: ["glaube","außenseiter"] },
        ],
        quests: [
          { title: "ich halte stand wenn alle weichen", description: "Wenn alles zerbricht, will ich der sein, der bleibt.", hooks: ["glaube","kampf"] },
          { title: "ich bewahre die ruhe im sturm", description: "Mitten im Chaos finde ich den festen Punkt, der andere trägt.", hooks: ["glaube","natur"] },
        ]
      },
      {
        text: "leicht zu übersehen", hooks: ["geheimnis","schicksal"],
        powerTags: [
          { text: "geht in der menge unter", hooks: ["außenseiter","geheimnis"] },
          { text: "leise schritte", hooks: ["geheimnis","stadt"] },
          { text: "unbemerkt zuhören", hooks: ["geheimnis","stadt"] },
          { text: "unauffällig", hooks: ["außenseiter","geheimnis"] },
        ],
        weaknessTags: [
          { text: "wird leicht vergessen", hooks: ["schicksal","verlust"] },
          { text: "selten ernst genommen", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "ich erfahre was niemand sagen will", description: "Im Verborgenen höre ich, was vor anderen verschwiegen bleibt.", hooks: ["geheimnis","stadt"] },
          { title: "ich werde endlich gesehen", description: "Einmal will ich nicht übersehen werden, sondern wirklich zählen.", hooks: ["außenseiter","schicksal"] },
        ]
      },
      {
        text: "feines gehör", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "hört den leisesten laut", hooks: ["schicksal","natur"] },
          { text: "lauscht durch wände", hooks: ["geheimnis","stadt"] },
          { text: "erwacht beim leisesten geräusch", hooks: ["kampf","natur"] },
          { text: "scharfe sinne", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "geplagt von lärm", hooks: ["schicksal","verlust"] },
          { text: "abgelenkt durch geräusche", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "ich erlausche das verborgene wort", description: "Ein Geheimnis wird nur geflüstert, und ich will es hören.", hooks: ["geheimnis","schicksal"] },
          { title: "ich folge dem klang in die ferne", description: "Ein Ruf, den nur ich vernehme, weist mir den Weg.", hooks: ["natur","fahrend"] },
        ]
      },
      {
        text: "guter menschenkenner", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "durchschaut eine lüge", hooks: ["stadt","geheimnis"] },
          { text: "hört falschheit heraus", hooks: ["schicksal","stadt"] },
          { text: "spürt stimmungen in räumen", hooks: ["schicksal","stadt"] },
          { text: "erkennt verborgene not", hooks: ["glaube","wissen"] },
        ],
        weaknessTags: [
          { text: "vertraut dem Urteil zu sehr", hooks: ["schicksal","verlust"] },
          { text: "durchschaut auch freunde", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "ich entlarve den verräter", description: "Jemand in unserer Mitte lügt, und ich erkenne es an seinem Blick.", hooks: ["geheimnis","schicksal"] },
          { title: "ich finde den wahren freund", description: "Unter all den Masken suche ich den einen, der ehrlich ist.", hooks: ["glaube","stadt"] },
        ]
      },
      {
        text: "augen wie ein falke", hooks: ["natur","schicksal"],
        powerTags: [
          { text: "sieht im halbdunkel", hooks: ["natur","geheimnis"] },
          { text: "erkennt das ferne", hooks: ["natur","schicksal"] },
          { text: "scharfer blick fürs detail", hooks: ["wissen","handwerk"] },
          { text: "erspäht jede bewegung", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "geblendet von hellem licht", hooks: ["schicksal","verlust"] },
          { text: "vertraut nur dem auge", hooks: ["schicksal","außenseiter"] },
        ],
        quests: [
          { title: "ich erspähe was verborgen bleibt", description: "Was sich vor anderen versteckt, kann sich vor mir nicht verbergen.", hooks: ["geheimnis","natur"] },
          { title: "ich finde den fernen weg", description: "Vom höchsten Punkt aus erkenne ich den Pfad, den keiner kennt.", hooks: ["natur","fahrend"] },
        ]
      },
      {
        text: "zäh wie leder", hooks: ["schicksal","kampf"],
        powerTags: [
          { text: "trotzt hitze und kälte", hooks: ["natur","schicksal"] },
          { text: "heilt schnell", hooks: ["schicksal","magie"] },
          { text: "steckt schläge weg", hooks: ["kampf","schicksal"] },
          { text: "übersteht jede strapaze", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "ignoriert eigene wunden", hooks: ["schicksal","verlust"] },
          { text: "mutet sich zu viel zu", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "ich überstehe die unwirtliche wildnis", description: "Wo andere zugrunde gehen, will ich beweisen, dass ich durchhalte.", hooks: ["natur","schicksal"] },
          { title: "ich halte durch bis zuletzt", description: "Solange ich noch atme, gebe ich nicht auf.", hooks: ["kampf","glaube"] },
        ]
      },
      {
        text: "durchdringende stimme", hooks: ["schicksal","macht"],
        powerTags: [
          { text: "übertönt jeden lärm", hooks: ["schicksal","macht"] },
          { text: "bringt menschen zum schweigen", hooks: ["macht","stadt"] },
          { text: "befehlston wirkt sofort", hooks: ["macht","kampf"] },
          { text: "ergreifender gesang", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "kann sich nicht verstecken", hooks: ["schicksal","geheimnis"] },
          { text: "redet sich in Gefahr", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "ich gebe den stummen eine stimme", description: "Wer nicht gehört wird, soll durch mich gehört werden.", hooks: ["macht","glaube"] },
          { title: "ich wende die menge mit worten", description: "Mit meiner Stimme allein will ich den Lauf der Dinge ändern.", hooks: ["macht","stadt"] },
        ]
      },
    ]
  },
  "Duty": {
    type: "Adventure",
    titles: [
      {
        text: "licht gegen die finsternis", hooks: ["glaube","schicksal"],
        powerTags: [
          { text: "leuchtende rüstung", hooks: ["kampf","glaube"] },
          { text: "gefürchteter gegner des bösen", hooks: ["kampf","schicksal"] },
          { text: "zeichen gegen das böse", hooks: ["glaube","magie"] },
          { text: "unbeirrbar im zweck", hooks: ["glaube"] },
          { text: "spürt nahende finsternis", hooks: ["magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "auftrag über vernunft", hooks: ["glaube","schicksal"] },
          { text: "verhasst bei dienern der nacht", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "ich treibe die finsternis zurück", description: "Wo sie sich breitmacht, stelle ich mich ihr und weiche keinen Schritt.", hooks: ["glaube","kampf"] },
          { title: "ich finde die quelle des bösen", description: "Erst wenn ich den Ursprung der Finsternis kenne, kann ich sie wirklich bezwingen.", hooks: ["schicksal","geheimnis"] },
        ]
      },
      {
        text: "söldner auf vertrag", hooks: ["glaube","handwerk"],
        powerTags: [
          { text: "vertrag in der hand", hooks: ["handwerk","macht"] },
          { text: "hält jede abmachung", hooks: ["handwerk","glaube"] },
          { text: "unbestechlich durch gold", hooks: ["glaube","macht"] },
          { text: "erfahrener klingenkämpfer", hooks: ["kampf","handwerk"] },
          { text: "kennt den preis jeder klinge", hooks: ["handwerk","stadt"] },
        ],
        weaknessTags: [
          { text: "dem höchsten gebot verpflichtet", hooks: ["macht","verlust"] },
          { text: "kein freund ohne sold", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "ich erfülle den vertrag bis zum letzten wort", description: "Was ich unterschrieben habe, führe ich aus, egal wie der Wind sich dreht.", hooks: ["handwerk","glaube"] },
          { title: "ich finde einen herrn der mich verdient", description: "Ich suche nach einem Auftrag, für den meine Klinge mehr ist als bloßes Werkzeug.", hooks: ["glaube","kampf"] },
        ]
      },
      {
        text: "schwur dem lehnsherrn", hooks: ["glaube","adel"],
        powerTags: [
          { text: "banner meines lehnsherrn", hooks: ["adel","kampf"] },
          { text: "mein eid macht mich stark", hooks: ["glaube"] },
          { text: "trägt die autorität ihres hauses", hooks: ["adel","macht"] },
          { text: "kann legitimität einfordern", hooks: ["macht","adel"] },
          { text: "kraftvoller schwur", hooks: ["glaube","macht"] },
        ],
        weaknessTags: [
          { text: "an befehle gebunden", hooks: ["glaube","macht"] },
          { text: "kann befehlen nicht widersprechen", hooks: ["glaube","macht"] },
        ],
        quests: [
          { title: "ich erfülle meinen schwur koste es was es wolle", description: "Was ich meinem Herrn versprochen habe, ist die Achse, um die mein Leben sich dreht.", hooks: ["glaube","schicksal"] },
          { title: "ich prüfe ob mein herr meiner treue würdig ist", description: "Lange diente ich blind; jetzt will ich wissen, wem ich meinen Eid geschworen habe.", hooks: ["glaube","adel"] },
        ]
      },
      {
        text: "hüterin des landes", hooks: ["natur","glaube"],
        powerTags: [
          { text: "kennt das ganze reich", hooks: ["wissen","fahrend"] },
          { text: "handelt richtig ohne befehl", hooks: ["glaube","kampf"] },
          { text: "kennt jeden pfad des landes", hooks: ["natur","wissen"] },
          { text: "wacht über die schwachen", hooks: ["glaube","natur"] },
          { text: "liest die zeichen des landes", hooks: ["natur","schicksal"] },
        ],
        weaknessTags: [
          { text: "kann das land nicht verlassen", hooks: ["natur","schicksal"] },
          { text: "fühlt schuld bei jeder verwüstung", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "ich beschütze das land dem ich diene", description: "Diese Erde und ihre Menschen sind mein Auftrag und mein Anker.", hooks: ["natur","glaube"] },
          { title: "ich heile die wunden meines landes", description: "Wo Krieg und Raub Narben hinterließen, will ich das Land wieder ganz machen.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "rachezwang", hooks: ["verlust","kampf"],
        powerTags: [
          { text: "unbeirrbar bis zur vergeltung", hooks: ["kampf","schicksal"] },
          { text: "vergisst kein gesicht", hooks: ["verlust","wissen"] },
          { text: "narbiger schwertarm", hooks: ["kampf","verlust"] },
          { text: "kalter blick auf den feind", hooks: ["kampf","macht"] },
          { text: "wittert eine falle", hooks: ["kampf","wissen"] },
        ],
        weaknessTags: [
          { text: "die rache frisst alles andere", hooks: ["verlust","schicksal"] },
          { text: "verhasst bei der gejagten sippe", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "ich räche das unrecht das mir geschah", description: "Erst wenn die Schuld beglichen ist, finde ich wieder Schlaf.", hooks: ["verlust","kampf"] },
          { title: "ich entscheide ob die rache mich lohnt", description: "Wenn der letzte Feind fällt, muss ich wissen, ob noch etwas von mir übrig ist.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "bote des königs", hooks: ["fahrend","macht"],
        powerTags: [
          { text: "recht auf freien durchgang", hooks: ["fahrend","macht"] },
          { text: "recht auf kost und quartier", hooks: ["macht","fahrend"] },
          { text: "kennt jede losung jeder wache", hooks: ["stadt","kampf"] },
          { text: "findet immer den schnellsten weg", hooks: ["fahrend","wissen"] },
          { text: "siegel des königs", hooks: ["adel","macht"] },
        ],
        weaknessTags: [
          { text: "ziel für feinde der krone", hooks: ["macht","kampf"] },
          { text: "die botschaft duldet keinen aufschub", hooks: ["fahrend","schicksal"] },
        ],
        quests: [
          { title: "ich bringe die botschaft ans ziel", description: "Was mir die Krone anvertraut hat, gelangt durch jede Gefahr an seinen Ort.", hooks: ["fahrend","macht"] },
          { title: "ich erfahre was ich wirklich trage", description: "Die versiegelte Botschaft wiegt schwer; ich will wissen, wofür ich mein Leben riskiere.", hooks: ["geheimnis","macht"] },
        ]
      },
      {
        text: "schwertarm des ordens", hooks: ["kampf","glaube"],
        powerTags: [
          { text: "hält die stellung allein", hooks: ["kampf","glaube"] },
          { text: "betet vor dem kampf", hooks: ["glaube","kampf"] },
          { text: "anweisungen ausführen", hooks: ["glaube","kampf"] },
          { text: "geweihte klinge des ordens", hooks: ["kampf","magie"] },
          { text: "brüder im glauben zur seite", hooks: ["glaube","kampf"] },
        ],
        weaknessTags: [
          { text: "der Orden vor dem Leben", hooks: ["glaube","schicksal"] },
          { text: "fühlt schuld bei versagen", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "ich diene dem orden mit klinge und glauben", description: "Mein Schwert und mein Eid gehören der heiligen Sache, der ich mich verschrieb.", hooks: ["kampf","glaube"] },
          { title: "ich reinige den orden von innen", description: "Etwas ist faul in unseren Reihen; ich werde es ausmerzen, bevor es uns alle verdirbt.", hooks: ["glaube","geheimnis"] },
        ]
      },
      {
        text: "wächterin der grenzmark", hooks: ["kampf","natur"],
        powerTags: [
          { text: "kennt die wilde grenze", hooks: ["natur","wissen"] },
          { text: "wacht beim leisesten geräusch", hooks: ["kampf","natur"] },
          { text: "hält die stellung allein", hooks: ["kampf","glaube"] },
          { text: "kennt die verbündeten der sache", hooks: ["stadt","kampf"] },
          { text: "späht den feind frühzeitig", hooks: ["natur","kampf"] },
        ],
        weaknessTags: [
          { text: "darf den posten nie verlassen", hooks: ["glaube","kampf"] },
          { text: "fern von jeder hilfe", hooks: ["natur","verlust"] },
        ],
        quests: [
          { title: "ich halte die grenze gegen alles", description: "Was hinter der Mark lauert, kommt nicht an mir vorbei, solange ich stehe.", hooks: ["kampf","natur"] },
          { title: "ich ergründe was jenseits der mark erwacht", description: "Etwas regt sich an der Grenze; ich muss wissen, was kommt, bevor es uns überrennt.", hooks: ["natur","geheimnis"] },
        ]
      },
      {
        text: "letzter zeuge eines vertrags", hooks: ["geheimnis","glaube"],
        powerTags: [
          { text: "kennt jede klausel auswendig", hooks: ["wissen","geheimnis"] },
          { text: "kennt die grenzen ihres auftrags", hooks: ["wissen","glaube"] },
          { text: "sieht durch lügen", hooks: ["geheimnis"] },
          { text: "kennt den preis jeder stille", hooks: ["geheimnis"] },
          { text: "bewahrt das versiegelte wort", hooks: ["geheimnis","glaube"] },
        ],
        weaknessTags: [
          { text: "gejagt um des wissens willen", hooks: ["geheimnis","kampf"] },
          { text: "kann das geheimnis nicht teilen", hooks: ["geheimnis","glaube"] },
        ],
        quests: [
          { title: "ich finde heraus ob der vertrag gerecht war", description: "Lange schwieg ich; nun trage ich die Antwort wie einen Stein und will sie kennen.", hooks: ["glaube","geheimnis"] },
          { title: "ich bezeuge die wahrheit ehe sie mit mir stirbt", description: "Als Letzter weiß ich, was geschah, und das Wissen darf nicht verloren gehen.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "schuldenbegleicherin", hooks: ["stadt","verlust"],
        powerTags: [
          { text: "kennt jedermanns schulden", hooks: ["geheimnis","macht"] },
          { text: "gefälligkeiten einfordern", hooks: ["macht","stadt"] },
          { text: "spürt jeden schuldner auf", hooks: ["stadt","wissen"] },
          { text: "unnachgiebig im eintreiben", hooks: ["macht","kampf"] },
          { text: "führt buch über jede gefälligkeit", hooks: ["handwerk","stadt"] },
        ],
        weaknessTags: [
          { text: "verhasst bei den schuldnern", hooks: ["stadt","verlust"] },
          { text: "eigene schulden holen sie ein", hooks: ["verlust","macht"] },
        ],
        quests: [
          { title: "ich treibe jede schuld ein", description: "Keine offene Rechnung bleibt ungesühnt, solange ich das Buch führe.", hooks: ["stadt","macht"] },
          { title: "ich begleiche meine eigene letzte schuld", description: "Bevor ich über andere richte, muss ich frei sein von dem, was ich selbst schulde.", hooks: ["verlust","glaube"] },
        ]
      },
      {
        text: "bezahlter verteidiger", hooks: ["kampf","handwerk"],
        powerTags: [
          { text: "schutzschild für den auftraggeber", hooks: ["kampf","glaube"] },
          { text: "instinktive reaktion auf gefahr", hooks: ["kampf","schicksal"] },
          { text: "vertrag in der hand", hooks: ["handwerk","macht"] },
          { text: "deckt jede schwachstelle ab", hooks: ["kampf","wissen"] },
          { text: "nimmt wunden für andere", hooks: ["kampf","verlust"] },
        ],
        weaknessTags: [
          { text: "haftet für jedes versagen", hooks: ["handwerk","verlust"] },
          { text: "treu nur für Sold", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "ich halte meinen schützling am leben", description: "Wofür man mich bezahlt, das tue ich ganz: Niemand rührt den, den ich beschütze.", hooks: ["kampf","handwerk"] },
          { title: "ich schütze einen den ich nicht aufgeben kann", description: "Aus Pflicht wurde mehr; jetzt verteidige ich ihn, auch wenn der Sold längst aus ist.", hooks: ["kampf","glaube"] },
        ]
      },
      {
        text: "vollstreckerin des alten gesetzes", hooks: ["macht","glaube"],
        powerTags: [
          { text: "kennt regeln und ausnahmen", hooks: ["wissen","macht"] },
          { text: "setzt befehle ohne feinde durch", hooks: ["macht","stadt"] },
          { text: "unbestechlich durch gold", hooks: ["glaube","macht"] },
          { text: "autorität des alten gesetzes", hooks: ["macht","adel"] },
          { text: "kennt jeden präzedenzfall", hooks: ["wissen","macht"] },
        ],
        weaknessTags: [
          { text: "das gesetz über die gnade", hooks: ["glaube","macht"] },
          { text: "kann keinen auftrag aufgeben", hooks: ["glaube","schicksal"] },
        ],
        quests: [
          { title: "ich vollstrecke das gesetz ohne ansehen der person", description: "Vor dem alten Recht sind alle gleich, ob Bettler oder Fürst.", hooks: ["macht","glaube"] },
          { title: "ich prüfe ob das alte gesetz noch gerecht ist", description: "Ich diente dem Buchstaben lange; nun frage ich, ob er noch dem Recht dient.", hooks: ["glaube","geheimnis"] },
        ]
      },
    ]
  },
  "Influence": {
    type: "Adventure",
    titles: [
      {
        text: "Dockmeisterin", hooks: ["stadt","macht"],
        powerTags: [
          { text: "kennt jeden Kai", hooks: ["stadt","macht"] },
          { text: "kontrolliert die Ladung", hooks: ["macht","handwerk"] },
          { text: "Boten in jede Richtung", hooks: ["stadt","fahrend"] },
          { text: "Spitzel an jeder Mole", hooks: ["stadt","geheimnis"] },
        ],
        weaknessTags: [
          { text: "Konkurrenz um den Hafen", hooks: ["macht","stadt"] },
          { text: "Schmugglerschulden im Nacken", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Ich beherrsche den ganzen Hafen", description: "Kein Schiff legt an, ohne dass ich es will.", hooks: ["macht","stadt"] },
          { title: "Ich verteidige meinen Kai", description: "Was ich aufgebaut habe an den Docks gebe ich an niemanden ab.", hooks: ["macht","stadt"] },
        ]
      },
      {
        text: "graue Eminenz", hooks: ["macht","geheimnis"],
        powerTags: [
          { text: "zieht Fäden im Verborgenen", hooks: ["macht","geheimnis"] },
          { text: "kennt das Geheimnis aller", hooks: ["geheimnis","macht"] },
          { text: "Beobachter überall", hooks: ["geheimnis","stadt"] },
          { text: "eine Geste genügt", hooks: ["macht","geheimnis"] },
        ],
        weaknessTags: [
          { text: "unsichtbare Feinde", hooks: ["geheimnis","macht"] },
          { text: "erpressbar durch Geheimnisse", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "Ich entlarve die wahren Strippenzieher", description: "Hinter allem Offenen bewegen sich verborgene Hände die ich finden werde.", hooks: ["geheimnis","macht"] },
          { title: "Ich finde heraus wer mich kontrolliert", description: "Ich dachte ich zöge die Fäden doch inzwischen zweifle ich daran.", hooks: ["geheimnis","macht"] },
        ]
      },
      {
        text: "Stadtrat", hooks: ["stadt","macht"],
        powerTags: [
          { text: "spricht mit Befehlsgewalt", hooks: ["macht"] },
          { text: "Stimme im Ratssaal", hooks: ["stadt","macht"] },
          { text: "kennt Regeln und Ausnahmen", hooks: ["wissen","macht"] },
          { text: "setzt Beschlüsse durch", hooks: ["macht","stadt"] },
        ],
        weaknessTags: [
          { text: "Macht macht zur Zielscheibe", hooks: ["macht","stadt"] },
          { text: "zu viele Verpflichtungen", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Ich wende die Stadt zum Guten", description: "Meine Stimme im Rat soll etwas hinterlassen das bleibt.", hooks: ["macht","stadt"] },
          { title: "Ich verteidige mein Amt", description: "Wer mir den Sitz im Rat nehmen will lernt seinen Preis kennen.", hooks: ["macht","stadt"] },
        ]
      },
      {
        text: "Gildenführer", hooks: ["handwerk","macht"],
        powerTags: [
          { text: "Gildensiegel", hooks: ["handwerk","macht"] },
          { text: "kann Verbündete mobilisieren", hooks: ["macht"] },
          { text: "kennt jedermanns Schulden", hooks: ["geheimnis","macht"] },
          { text: "macht und bricht Rufe", hooks: ["macht","stadt"] },
        ],
        weaknessTags: [
          { text: "Konkurrenz um die Führung", hooks: ["macht","stadt"] },
          { text: "jedes Bündnis hat seinen Preis", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Ich eine die zerstrittenen Gilden", description: "Geschlossen sind wir mächtiger als jeder Lehnsherr.", hooks: ["handwerk","macht"] },
          { title: "Ich räche die Ehre meiner Gilde", description: "Wer meinen Stand beschmutzt hat wird das nicht ungestraft bleiben.", hooks: ["handwerk","macht"] },
        ]
      },
      {
        text: "Anführerin der Schmuggler", hooks: ["außenseiter","stadt"],
        powerTags: [
          { text: "Zugang zu verschlossenen Orten", hooks: ["geheimnis","macht"] },
          { text: "kennt jeden Schleichweg", hooks: ["stadt","geheimnis"] },
          { text: "loyale Schmugglerbande", hooks: ["außenseiter","macht"] },
          { text: "Gold öffnet Türen", hooks: ["macht","stadt"] },
        ],
        weaknessTags: [
          { text: "vom Gesetz gejagt", hooks: ["außenseiter","macht"] },
          { text: "alte Intrigen holen sie ein", hooks: ["stadt","verlust"] },
        ],
        quests: [
          { title: "Ich beherrsche den Schwarzmarkt", description: "Keine verbotene Ware wechselt den Besitzer ohne meinen Anteil.", hooks: ["außenseiter","macht"] },
          { title: "Ich schütze meine Bande", description: "Wer mir folgt durch die dunklen Gassen den lasse ich nicht fallen.", hooks: ["außenseiter","stadt"] },
        ]
      },
      {
        text: "Diplomatin", hooks: ["stadt","adel"],
        powerTags: [
          { text: "Recht auf Audienz", hooks: ["adel","macht"] },
          { text: "Vertrauen der Mächtigen", hooks: ["macht","adel"] },
          { text: "lenkt durch geschickte Fragen", hooks: ["stadt","macht"] },
          { text: "beschwichtigt jeden Streit", hooks: ["stadt","adel"] },
        ],
        weaknessTags: [
          { text: "der Hof ist ein Schlangennest", hooks: ["adel","stadt"] },
          { text: "jedes Bündnis hat seinen Preis", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Ich stifte Frieden zwischen den Häusern", description: "Wo andere zum Schwert greifen lege ich Worte auf die Waage.", hooks: ["adel","stadt"] },
          { title: "Ich wahre mein Wort am Hof", description: "Ein gebrochenes Versprechen wäre der Anfang meines Endes.", hooks: ["adel","glaube"] },
        ]
      },
      {
        text: "Händlerin mit dem Netz", hooks: ["stadt","geheimnis"],
        powerTags: [
          { text: "eine Karte mit allen Namen", hooks: ["wissen","macht"] },
          { text: "Boten in jede Richtung", hooks: ["stadt","fahrend"] },
          { text: "Gefälligkeiten einfordern", hooks: ["macht","stadt"] },
          { text: "kennt den Preis jeder Ware", hooks: ["handwerk","stadt"] },
        ],
        weaknessTags: [
          { text: "zu viele Verpflichtungen", hooks: ["macht","verlust"] },
          { text: "jedes Bündnis hat seinen Preis", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Ich spanne mein Netz übers ganze Reich", description: "Von jeder Stadt soll ein Faden in meine Hand laufen.", hooks: ["stadt","macht"] },
          { title: "Ich löse meine Abhängigkeiten", description: "Ich will nicht länger der letzte in einer Kette von Schulden sein.", hooks: ["macht","verlust"] },
        ]
      },
      {
        text: "Beraterin im Verborgenen", hooks: ["geheimnis","stadt"],
        powerTags: [
          { text: "Briefe öffnen Tore", hooks: ["macht","geheimnis"] },
          { text: "hält Informationen zurück", hooks: ["geheimnis","stadt"] },
          { text: "kennt jedes Schweigen", hooks: ["geheimnis","macht"] },
          { text: "flüstert ins rechte Ohr", hooks: ["geheimnis","macht"] },
        ],
        weaknessTags: [
          { text: "erpressbar durch Geheimnisse", hooks: ["geheimnis","macht"] },
          { text: "unsichtbare Feinde", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "Ich lenke den Herrscher klug", description: "Meine Ratschläge sollen das Reich vor dem Abgrund bewahren.", hooks: ["geheimnis","macht"] },
          { title: "Ich bleibe im Schatten unentbehrlich", description: "Wer mich übersieht soll nie begreifen wie sehr er mich braucht.", hooks: ["geheimnis","stadt"] },
        ]
      },
      {
        text: "Mäzenin der Armen", hooks: ["stadt","macht"],
        powerTags: [
          { text: "Schatzkammer im Hintergrund", hooks: ["macht"] },
          { text: "loyale Leute in den Gassen", hooks: ["glaube","stadt"] },
          { text: "spricht für die Schwachen", hooks: ["glaube","macht"] },
          { text: "Gold öffnet Türen", hooks: ["macht","stadt"] },
        ],
        weaknessTags: [
          { text: "Macht macht zur Zielscheibe", hooks: ["macht","stadt"] },
          { text: "kann nicht Nein sagen", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Ich hebe die Vergessenen empor", description: "Mein Reichtum gehört denen die niemand sonst sieht.", hooks: ["stadt","glaube"] },
          { title: "Ich mache Unrecht wieder gut", description: "Mit demselben Gold das mich korrumpierte begrenze ich nun den Schaden.", hooks: ["macht","verlust"] },
        ]
      },
      {
        text: "Schiedsrichterin der Straßen", hooks: ["stadt","macht"],
        powerTags: [
          { text: "kennt jede Losung jeder Wache", hooks: ["stadt","kampf"] },
          { text: "schlichtet jeden Bandenkrieg", hooks: ["stadt","macht"] },
          { text: "Vollstrecker auf Zuruf", hooks: ["macht","kampf"] },
          { text: "hört die Gerüchte zuerst", hooks: ["stadt","geheimnis"] },
        ],
        weaknessTags: [
          { text: "Konkurrenz um die Gasse", hooks: ["macht","stadt"] },
          { text: "verhasst bei den Verurteilten", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "Ich halte Frieden im Viertel", description: "Solange ich richte fließt in meinen Gassen kein unnötiges Blut.", hooks: ["stadt","macht"] },
          { title: "Ich beweise dass mein Wort Gesetz ist", description: "Wer mein Urteil missachtet soll erfahren wie weit mein Arm reicht.", hooks: ["macht","stadt"] },
        ]
      },
      {
        text: "Königsmacherin", hooks: ["macht","adel"],
        powerTags: [
          { text: "Vertrauen der Mächtigen", hooks: ["macht","adel"] },
          { text: "macht und bricht Rufe", hooks: ["macht","stadt"] },
          { text: "zieht Fäden im Verborgenen", hooks: ["macht","geheimnis"] },
          { text: "setzt Throne ein und ab", hooks: ["macht","adel"] },
        ],
        weaknessTags: [
          { text: "der Hof ist ein Schlangennest", hooks: ["adel","stadt"] },
          { text: "alte Intrigen holen sie ein", hooks: ["adel","verlust"] },
        ],
        quests: [
          { title: "Ich setze meinen Kandidaten auf den Thron", description: "Wer herrscht entscheide ich auch wenn niemand meinen Namen kennt.", hooks: ["macht","adel"] },
          { title: "Ich bleibe die Hand hinter der Krone", description: "Die wahre Macht trägt keine Krone sondern lenkt den der sie trägt.", hooks: ["macht","geheimnis"] },
        ]
      },
      {
        text: "Stimme des Rates", hooks: ["macht","stadt"],
        powerTags: [
          { text: "kann Legitimität einfordern", hooks: ["macht","adel"] },
          { text: "spricht mit Befehlsgewalt", hooks: ["macht"] },
          { text: "kennt die wahren Mächte", hooks: ["stadt","macht"] },
          { text: "bewegt die Menge mit Worten", hooks: ["macht","stadt"] },
        ],
        weaknessTags: [
          { text: "an Beschlüsse gebunden", hooks: ["macht","stadt"] },
          { text: "Konkurrenz um das Wort", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Ich gebe den Stummen eine Stimme", description: "Im Rat soll erklingen was sonst niemand auszusprechen wagt.", hooks: ["macht","stadt"] },
          { title: "Ich baue eine Ordnung die mich überdauert", description: "Was ich verkünde soll noch gelten wenn meine Stimme längst verstummt ist.", hooks: ["macht","stadt"] },
        ]
      },
    ]
  },
  "Knowledge": {
    type: "Adventure",
    titles: [
      {
        text: "Sterndeuter", hooks: ["wissen","magie"],
        powerTags: [
          { text: "liest in den Sternen", hooks: ["wissen","magie"] },
          { text: "deutet die Zeichen", hooks: ["wissen","schicksal"] },
          { text: "errechnet himmlische Bahnen", hooks: ["wissen","magie"] },
          { text: "liest kommendes Unheil", hooks: ["schicksal","magie"] },
        ],
        weaknessTags: [
          { text: "gefangen in Vorzeichen", hooks: ["schicksal","wissen"] },
          { text: "blind fürs Irdische", hooks: ["wissen","außenseiter"] },
        ],
        quests: [
          { title: "die verheißene Konjunktion", description: "Eine seltene Sternstellung naht und ich muss erfahren was sie wirklich ankündigt.", hooks: ["wissen","schicksal","magie"] },
          { title: "das gefälschte Horoskop", description: "Jemand verbreitet falsche Sterndeutungen und ich decke den Betrug auf.", hooks: ["wissen","macht"] },
        ]
      },
      {
        text: "Bewohner des Verborgenen", hooks: ["geheimnis","wissen"],
        powerTags: [
          { text: "kennt den Weg zur Wahrheit", hooks: ["wissen","geheimnis"] },
          { text: "führt geheime Forschung", hooks: ["wissen","geheimnis"] },
          { text: "sieht verborgene Zusammenhänge", hooks: ["wissen","geheimnis"] },
          { text: "bewegt sich ungesehen", hooks: ["geheimnis","außenseiter"] },
        ],
        weaknessTags: [
          { text: "verfolgt von neugierigen Mächten", hooks: ["macht","geheimnis"] },
          { text: "traut keinem Licht", hooks: ["geheimnis","außenseiter"] },
        ],
        quests: [
          { title: "die verschlossene Kammer", description: "Hinter einer letzten Tür liegt das Geheimnis dem ich mein ganzes Leben gewidmet habe.", hooks: ["geheimnis","wissen"] },
          { title: "der enttarnte Mitwisser", description: "Jemand kennt mein Versteck und ich muss herausfinden wer mich verraten hat.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "Weitgereister Landeskenner", hooks: ["wissen","fahrend"],
        powerTags: [
          { text: "kennt jedes Land", hooks: ["wissen","fahrend"] },
          { text: "kennt unverzeichnete Routen", hooks: ["wissen","fahrend"] },
          { text: "liest fremde Sitten", hooks: ["wissen","fahrend"] },
          { text: "findet überall Orientierung", hooks: ["fahrend","natur"] },
        ],
        weaknessTags: [
          { text: "nirgends wirklich daheim", hooks: ["fahrend","außenseiter"] },
          { text: "fremd in jeder Heimat", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "die letzte weiße Stelle", description: "Auf keiner Karte verzeichnet liegt ein Land das ich als Erster betreten will.", hooks: ["wissen","fahrend"] },
          { title: "der verschollene Pass", description: "Ein uralter Handelsweg ist vergessen und ich will ihn wieder begehbar machen.", hooks: ["fahrend","wissen"] },
        ]
      },
      {
        text: "Bibliothekar des Verbotenen", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "kennt verbotene Riten", hooks: ["magie","geheimnis"] },
          { text: "erinnert sich an jedes Buch", hooks: ["wissen"] },
          { text: "birgt gefährliche Bände", hooks: ["wissen","geheimnis"] },
          { text: "erkennt jeden Falschdruck", hooks: ["wissen","handwerk"] },
        ],
        weaknessTags: [
          { text: "gefährliches Wissen lockt Feinde", hooks: ["wissen","geheimnis"] },
          { text: "Wahrheit vor dem Wohl anderer", hooks: ["wissen","geheimnis"] },
        ],
        quests: [
          { title: "das verbotene Folio", description: "Ein Band den niemand lesen darf ist gestohlen und ich muss ihn zurückholen.", hooks: ["wissen","geheimnis"] },
          { title: "die Brandstifter der Wahrheit", description: "Mächtige wollen meine Sammlung vernichten und ich rette was zu retten ist.", hooks: ["wissen","macht","verlust"] },
        ]
      },
      {
        text: "Gelehrter der alten Reiche", hooks: ["wissen","adel"],
        powerTags: [
          { text: "kennt den historischen Kontext", hooks: ["wissen"] },
          { text: "kennt jedes Provinzwappen", hooks: ["wissen","adel"] },
          { text: "rekonstruiert aus Fragmenten", hooks: ["wissen"] },
          { text: "entlarvt geschönte Chroniken", hooks: ["wissen","stadt"] },
        ],
        weaknessTags: [
          { text: "weltfremder Bücherwurm", hooks: ["wissen","außenseiter"] },
          { text: "lebt in vergangenen Zeiten", hooks: ["wissen","verlust"] },
        ],
        quests: [
          { title: "die getilgte Dynastie", description: "Ein Herrschergeschlecht wurde aus der Geschichte gelöscht und ich stelle die Wahrheit wieder her.", hooks: ["wissen","adel","geheimnis"] },
          { title: "das Erbe der Ruinen", description: "In den Trümmern eines alten Reichs suche ich den Schlüssel zu seinem Untergang.", hooks: ["wissen","verlust"] },
        ]
      },
      {
        text: "Sprachgelehrter", hooks: ["wissen"],
        powerTags: [
          { text: "kennt die alten Sprachen", hooks: ["wissen"] },
          { text: "übersetzt jede Schrift", hooks: ["wissen"] },
          { text: "spricht die Sprache der Toten", hooks: ["magie","geheimnis"] },
          { text: "hört jeden Dialekt heraus", hooks: ["wissen","fahrend"] },
        ],
        weaknessTags: [
          { text: "verliert sich in Worten", hooks: ["wissen","außenseiter"] },
          { text: "nimmt jedes Wort wörtlich", hooks: ["wissen"] },
        ],
        quests: [
          { title: "die unentzifferte Zunge", description: "Eine Sprache die keiner mehr versteht hält ein Versprechen und ich will sie entschlüsseln.", hooks: ["wissen","geheimnis"] },
          { title: "das missverstandene Wort", description: "Ein Übersetzungsfehler droht einen Krieg auszulösen und nur ich kann ihn richtigstellen.", hooks: ["wissen","macht"] },
        ]
      },
      {
        text: "Kartografin vergessener Wege", hooks: ["wissen","fahrend"],
        powerTags: [
          { text: "zeichnet getreue Karten", hooks: ["wissen","handwerk"] },
          { text: "kennt unverzeichnete Routen", hooks: ["wissen","fahrend"] },
          { text: "liest jedes Gelände", hooks: ["natur","fahrend"] },
          { text: "merkt sich jeden Weg", hooks: ["wissen","fahrend"] },
        ],
        weaknessTags: [
          { text: "besessen vom nächsten Horizont", hooks: ["fahrend","schicksal"] },
          { text: "hilflos ohne ihre Karten", hooks: ["wissen","handwerk"] },
        ],
        quests: [
          { title: "die Karte zum verlorenen Ort", description: "Fragmente einer alten Karte führen zu einem Ort den ich endlich vollständig verzeichnen will.", hooks: ["wissen","fahrend","geheimnis"] },
          { title: "das fehlerhafte Reich", description: "Eine falsche Karte schickt Reisende in den Tod und ich muss sie berichtigen.", hooks: ["fahrend","verlust"] },
        ]
      },
      {
        text: "Entschlüsslerin alter Schriften", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "erkennt jedes Symbol", hooks: ["wissen"] },
          { text: "rekonstruiert aus Fragmenten", hooks: ["wissen"] },
          { text: "knackt jeden Code", hooks: ["wissen","geheimnis"] },
          { text: "sieht das Muster im Chaos", hooks: ["wissen","schicksal"] },
        ],
        weaknessTags: [
          { text: "besessen von ungelösten Rätseln", hooks: ["wissen","geheimnis"] },
          { text: "Studium zehrt am Körper", hooks: ["wissen","verlust"] },
        ],
        quests: [
          { title: "die versiegelte Botschaft", description: "Eine verschlüsselte Schrift birgt eine Warnung und ich muss sie entziffern bevor es zu spät ist.", hooks: ["wissen","geheimnis"] },
          { title: "der Schlüssel im Stein", description: "In uralten Gravuren liegt ein Code verborgen den vor mir niemand brechen konnte.", hooks: ["wissen","geheimnis","schicksal"] },
        ]
      },
      {
        text: "Schülerin verbotenen Wissens", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "kennt verbotene Riten", hooks: ["magie","geheimnis"] },
          { text: "führt geheime Forschung", hooks: ["wissen","geheimnis"] },
          { text: "Wissen als Hebel", hooks: ["wissen","macht"] },
          { text: "wagt was andere meiden", hooks: ["geheimnis","außenseiter"] },
        ],
        weaknessTags: [
          { text: "blind für reale Gefahr", hooks: ["wissen"] },
          { text: "gefährliches Wissen lockt Feinde", hooks: ["wissen","geheimnis"] },
        ],
        quests: [
          { title: "das letzte Kapitel", description: "Mir fehlt der verbotene Schlussteil einer Lehre und ich riskiere alles um ihn zu finden.", hooks: ["wissen","geheimnis","magie"] },
          { title: "der gefallene Meister", description: "Mein Lehrer verschwand an verbotenem Wissen und ich folge seiner Spur trotz der Gefahr.", hooks: ["wissen","verlust","geheimnis"] },
        ]
      },
      {
        text: "Hüterin der verborgenen Archive", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "ein Lexikon an Lore", hooks: ["wissen"] },
          { text: "erinnert sich an jedes Buch", hooks: ["wissen"] },
          { text: "hält die Archive geheim", hooks: ["geheimnis","glaube"] },
          { text: "findet jede Quelle wieder", hooks: ["wissen","handwerk"] },
        ],
        weaknessTags: [
          { text: "an die Archive gebunden", hooks: ["glaube","verlust"] },
          { text: "wird für ihr Wissen benutzt", hooks: ["wissen","macht"] },
        ],
        quests: [
          { title: "die geplünderte Sammlung", description: "Diebe haben aus meinem Archiv gestohlen und ich hole das Verlorene zurück.", hooks: ["wissen","geheimnis","verlust"] },
          { title: "der würdige Erbe", description: "Ich darf nicht ewig wachen und suche jemanden der die Archive nach mir hütet.", hooks: ["wissen","glaube","schicksal"] },
        ]
      },
      {
        text: "Kennerin der Naturgesetze", hooks: ["wissen","natur"],
        powerTags: [
          { text: "analysiert eine Substanz", hooks: ["wissen","handwerk"] },
          { text: "kennt Bestienkunde", hooks: ["wissen","natur"] },
          { text: "kennt die Schwäche jedes Wesens", hooks: ["wissen","kampf"] },
          { text: "erklärt jedes Phänomen", hooks: ["wissen","natur"] },
        ],
        weaknessTags: [
          { text: "körperlich nicht stark", hooks: ["kampf"] },
          { text: "glaubt nur was sie beweist", hooks: ["wissen","außenseiter"] },
        ],
        quests: [
          { title: "das ungeklärte Phänomen", description: "Ein Vorgang widerspricht allem was ich weiß und ich muss seine Ursache ergründen.", hooks: ["wissen","natur","geheimnis"] },
          { title: "die unbekannte Bestie", description: "Ein Wesen das in keinem Buch steht bedroht das Land und ich erforsche seine Schwäche.", hooks: ["wissen","natur","kampf"] },
        ]
      },
      {
        text: "Forscherin der alten Kulte", hooks: ["wissen","magie","geheimnis"],
        powerTags: [
          { text: "kennt verbotene Riten", hooks: ["magie","geheimnis"] },
          { text: "sieht die Zeichen", hooks: ["wissen","schicksal"] },
          { text: "durchschaut jeden Glauben", hooks: ["wissen","glaube"] },
          { text: "spürt das Wirken der Kulte", hooks: ["geheimnis","magie"] },
        ],
        weaknessTags: [
          { text: "verfolgt von neugierigen Mächten", hooks: ["macht","geheimnis"] },
          { text: "zu tief in den Riten", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "der wiedererwachte Kult", description: "Ein totgeglaubter Kult regt sich neu und ich muss seine Absichten entschlüsseln.", hooks: ["wissen","magie","geheimnis"] },
          { title: "die wahre Gottheit", description: "Hinter den alten Riten liegt eine verborgene Wahrheit und ich enthülle wem sie wirklich galten.", hooks: ["wissen","glaube","geheimnis"] },
        ]
      },
    ]
  },
  "Prodigious Ability": {
    type: "Adventure",
    titles: [
      {
        text: "fesselnder Geschichtenerzähler", hooks: ["fahrend","handwerk"],
        powerTags: [
          { text: "verzaubert mit Worten", hooks: ["handwerk","fahrend"] },
          { text: "liest das Publikum", hooks: ["handwerk","fahrend"] },
          { text: "erfindet im Augenblick", hooks: ["handwerk"] },
          { text: "kennt tausend Sagen", hooks: ["wissen","fahrend"] },
          { text: "fesselt jeden Saal", hooks: ["handwerk","stadt"] },
        ],
        weaknessTags: [
          { text: "schmückt die Wahrheit aus", hooks: ["geheimnis","handwerk"] },
          { text: "braucht stets ein Publikum", hooks: ["verlust","außenseiter"] },
        ],
        quests: [
          { title: "die verschollene Sage", description: "Ich finde die eine Geschichte, die niemand mehr zu erzählen wagt.", hooks: ["fahrend","geheimnis"] },
          { title: "ein Lied das überdauert", description: "Ich erschaffe eine Erzählung, die mich um Generationen überlebt.", hooks: ["handwerk","schicksal"] },
        ]
      },
      {
        text: "meisterhafter Koch", hooks: ["handwerk"],
        powerTags: [
          { text: "wundersames Werk", hooks: ["handwerk"] },
          { text: "improvisiert das Unmögliche", hooks: ["handwerk"] },
          { text: "erkennt jede Zutat", hooks: ["handwerk","natur"] },
          { text: "verfeinert jedes Mahl", hooks: ["handwerk"] },
          { text: "öffnet Herzen am Tisch", hooks: ["handwerk","glaube"] },
        ],
        weaknessTags: [
          { text: "reagiert gereizt auf Pfusch", hooks: ["handwerk"] },
          { text: "wählerisch bis zur Plage", hooks: ["handwerk","verlust"] },
        ],
        quests: [
          { title: "das vollkommene Mahl", description: "Ich bereite das eine Festmahl zu, das alles enthält was ich kann.", hooks: ["handwerk"] },
          { title: "die verlorene Rezeptur", description: "Ich spüre ein vergessenes Rezept der alten Meister auf.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "gefürchteter Klingenmeister", hooks: ["kampf","handwerk"],
        powerTags: [
          { text: "staunenswerte Schwertkunst", hooks: ["kampf","handwerk"] },
          { text: "eigene Signaturtechnik", hooks: ["handwerk"] },
          { text: "erkennt den schwachen Punkt", hooks: ["kampf","handwerk"] },
          { text: "unlesbare Technik", hooks: ["handwerk","geheimnis"] },
          { text: "unerschütterlich unter Druck", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "wird ständig herausgefordert", hooks: ["kampf","handwerk"] },
          { text: "verträgt keine Niederlage", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "der ebenbürtige Gegner", description: "Ich finde den einen Fechter, der mich endlich fordert.", hooks: ["handwerk","fahrend"] },
          { title: "die verbotene Form", description: "Ich meistere die eine Technik, die alle anderen mieden.", hooks: ["kampf","geheimnis"] },
        ]
      },
      {
        text: "wundersamer Heiler", hooks: ["handwerk","magie"],
        powerTags: [
          { text: "einmalige Heiltechnik", hooks: ["handwerk","magie"] },
          { text: "erkennt jedes Leiden", hooks: ["handwerk","wissen"] },
          { text: "ruhige Hände im Notfall", hooks: ["handwerk"] },
          { text: "kennt seltene Heilmittel", hooks: ["handwerk","natur"] },
          { text: "holt Verlorene zurück", hooks: ["handwerk","schicksal"] },
        ],
        weaknessTags: [
          { text: "leidet an jedem Versagen", hooks: ["glaube","verlust"] },
          { text: "wird für Unmögliches eingespannt", hooks: ["handwerk","macht"] },
        ],
        quests: [
          { title: "die unheilbare Seuche", description: "Ich finde das Mittel gegen eine Krankheit die niemand bezwang.", hooks: ["handwerk","verlust"] },
          { title: "ein Leben das zählt", description: "Ich rette den einen Menschen an dem heute Nacht alles hängt.", hooks: ["handwerk","glaube"] },
        ]
      },
      {
        text: "untrüglicher Bogenschütze", hooks: ["kampf","handwerk"],
        powerTags: [
          { text: "unfehlbarer Pfeil", hooks: ["kampf","handwerk"] },
          { text: "trifft jedes Ziel", hooks: ["kampf","handwerk"] },
          { text: "ruhiger Atem im Anschlag", hooks: ["handwerk"] },
          { text: "schießt schneller als der Blick", hooks: ["handwerk","kampf"] },
          { text: "kennt jeden Bogen", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "wird ständig herausgefordert", hooks: ["kampf","handwerk"] },
          { text: "hilflos im Nahkampf", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "der unmögliche Schuss", description: "Ich treffe das eine Ziel das keiner für treffbar hält.", hooks: ["handwerk","schicksal"] },
          { title: "der Wettstreit der Meister", description: "Ich bestehe den Bogenwettkampf gegen die Besten des Landes.", hooks: ["handwerk","kampf"] },
        ]
      },
      {
        text: "Meister des Spiels", hooks: ["handwerk","stadt"],
        powerTags: [
          { text: "blitzschnelle Auffassung", hooks: ["handwerk","kampf"] },
          { text: "durchschaut jede Strategie", hooks: ["handwerk","wissen"] },
          { text: "denkt zehn Züge voraus", hooks: ["handwerk","wissen"] },
          { text: "unvorhersehbarer Weg zum Ziel", hooks: ["handwerk","geheimnis"] },
          { text: "bleibt eiskalt am Brett", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "kann nicht verlieren", hooks: ["handwerk","macht"] },
          { text: "sieht überall nur Spiele", hooks: ["handwerk","außenseiter"] },
        ],
        quests: [
          { title: "der ungeschlagene Großmeister", description: "Ich besiege den Spieler der seit Jahren nie verlor.", hooks: ["handwerk","macht"] },
          { title: "die tödliche Partie", description: "Ich gewinne das eine Spiel bei dem es um mehr als Steine geht.", hooks: ["handwerk","schicksal"] },
        ]
      },
      {
        text: "Tänzerin ohne Gleichen", hooks: ["handwerk"],
        powerTags: [
          { text: "unbestreitbare Eleganz", hooks: ["handwerk"] },
          { text: "staunenswerter Sprung", hooks: ["handwerk"] },
          { text: "fesselt jeden Blick", hooks: ["handwerk","schicksal"] },
          { text: "bewegt sich wie Wasser", hooks: ["handwerk","natur"] },
          { text: "spricht ohne Worte", hooks: ["handwerk","geheimnis"] },
        ],
        weaknessTags: [
          { text: "wird beneidet", hooks: ["handwerk","stadt"] },
          { text: "erschöpft im Alltag", hooks: ["verlust"] },
        ],
        quests: [
          { title: "der Tanz der niemals war", description: "Ich erschaffe einen Tanz den die Welt noch nie gesehen hat.", hooks: ["handwerk","schicksal"] },
          { title: "die große Bühne", description: "Ich tanze einmal vor dem Hof der über Ruhm entscheidet.", hooks: ["handwerk","adel"] },
        ]
      },
      {
        text: "Diebin des Unmöglichen", hooks: ["handwerk","stadt"],
        powerTags: [
          { text: "erstaunliche Geschwindigkeit", hooks: ["handwerk"] },
          { text: "öffnet jedes Schloss", hooks: ["handwerk","geheimnis"] },
          { text: "lautlos wie ein Schatten", hooks: ["handwerk","außenseiter"] },
          { text: "improvisiert das Unmögliche", hooks: ["handwerk"] },
          { text: "findet jeden Schwachpunkt", hooks: ["handwerk","wissen"] },
        ],
        weaknessTags: [
          { text: "misstrauisch beobachtet", hooks: ["geheimnis"] },
          { text: "kann nicht widerstehen", hooks: ["handwerk","verlust"] },
        ],
        quests: [
          { title: "der undurchdringliche Hort", description: "Ich stehle aus dem einen Tresor den keiner je knackte.", hooks: ["handwerk","geheimnis"] },
          { title: "ein letzter Coup", description: "Ich vollbringe den Diebstahl der mich frei machen würde.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "Bardin der Legenden", hooks: ["fahrend","handwerk"],
        powerTags: [
          { text: "reißt jede Menge mit", hooks: ["handwerk","fahrend"] },
          { text: "verzaubert mit Worten", hooks: ["handwerk","fahrend"] },
          { text: "spornt andere an", hooks: ["handwerk","macht"] },
          { text: "kennt jedes Lied", hooks: ["handwerk","wissen"] },
          { text: "stimmt jeden Saal um", hooks: ["handwerk","stadt"] },
        ],
        weaknessTags: [
          { text: "die Gabe macht einsam", hooks: ["verlust","außenseiter"] },
          { text: "verschuldet durch Großzügigkeit", hooks: ["fahrend","verlust"] },
        ],
        quests: [
          { title: "das Lied der Helden", description: "Ich besinge eine Tat so dass sie zur Legende wird.", hooks: ["handwerk","schicksal"] },
          { title: "das Ohr des Königs", description: "Ich spiele einmal am Hof der Lieder zu Geschichte macht.", hooks: ["handwerk","adel"] },
        ]
      },
      {
        text: "unfehlbare Reiterin", hooks: ["handwerk","natur"],
        powerTags: [
          { text: "verschmilzt mit dem Pferd", hooks: ["handwerk","natur"] },
          { text: "reitet wo keiner reitet", hooks: ["handwerk","natur"] },
          { text: "bändigt jedes Tier", hooks: ["handwerk","natur"] },
          { text: "erstaunliche Geschwindigkeit", hooks: ["handwerk"] },
          { text: "unerschütterlich im Sattel", hooks: ["handwerk","kampf"] },
        ],
        weaknessTags: [
          { text: "halb verloren ohne Ross", hooks: ["handwerk","verlust"] },
          { text: "tollkühn im Ritt", hooks: ["handwerk","natur"] },
        ],
        quests: [
          { title: "das ungezähmte Ross", description: "Ich zähme das Pferd das noch keiner reiten konnte.", hooks: ["handwerk","natur"] },
          { title: "das große Wettrennen", description: "Ich gewinne den Ritt den niemand für gewinnbar hält.", hooks: ["handwerk","schicksal"] },
        ]
      },
      {
        text: "Rednerin der Massen", hooks: ["macht","stadt"],
        powerTags: [
          { text: "reißt jede Menge mit", hooks: ["handwerk","fahrend"] },
          { text: "findet stets das rechte Wort", hooks: ["handwerk","macht"] },
          { text: "entfacht die Menge", hooks: ["handwerk","macht"] },
          { text: "liest das Publikum", hooks: ["handwerk","fahrend"] },
          { text: "unerschütterlich unter Druck", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "arrogant gegenüber Schwächeren", hooks: ["macht"] },
          { text: "glaubt der eigenen Rede", hooks: ["macht","schicksal"] },
        ],
        quests: [
          { title: "die Stadt in Aufruhr", description: "Ich bewege mit einer einzigen Rede eine ganze Stadt.", hooks: ["handwerk","macht"] },
          { title: "Worte gegen Schwerter", description: "Ich wende eine Schlacht allein durch das was ich sage.", hooks: ["handwerk","kampf"] },
        ]
      },
      {
        text: "unbesiegte Spielerin", hooks: ["handwerk","stadt"],
        powerTags: [
          { text: "durchschaut jeden Bluff", hooks: ["handwerk","geheimnis"] },
          { text: "unbewegte Miene", hooks: ["handwerk"] },
          { text: "gilt als die Beste", hooks: ["handwerk","schicksal"] },
          { text: "rechnet jede Chance", hooks: ["handwerk","wissen"] },
          { text: "behält die Nerven", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "verträgt keine Niederlage", hooks: ["handwerk"] },
          { text: "wird der Falschheit verdächtigt", hooks: ["geheimnis","stadt"] },
        ],
        quests: [
          { title: "das Spiel um alles", description: "Ich setze alles auf eine Partie gegen den besten Spieler.", hooks: ["handwerk","macht"] },
          { title: "die Schuld vom Tisch", description: "Ich gewinne das eine Spiel das eine alte Schuld tilgt.", hooks: ["handwerk","verlust"] },
        ]
      },
    ]
  },
  "Relic": {
    type: "Adventure",
    titles: [
      {
        text: "die Riesenfaust", hooks: ["magie","kampf"],
        powerTags: [
          { text: "donnernder Faustschlag", hooks: ["kampf","magie"] },
          { text: "zerschmettert Tore", hooks: ["kampf","handwerk"] },
          { text: "unmenschliche Wucht", hooks: ["kampf","magie"] },
          { text: "hält Feinde fern", hooks: ["kampf","schicksal"] },
        ],
        weaknessTags: [
          { text: "Magie fordert ihren Preis", hooks: ["magie","verlust"] },
          { text: "zu schwer für Feinheit", hooks: ["kampf","handwerk"] },
        ],
        quests: [
          { title: "den wahren Gegner finden", description: "Ich suche den einen Feind, der diese Faust wirklich verdient.", hooks: ["kampf","schicksal"] },
          { title: "die Wut bändigen", description: "Ich lerne zu schlagen, ohne dass die Faust mich beherrscht.", hooks: ["kampf","magie"] },
        ]
      },
      {
        text: "Beutel mit Zauberstaub", hooks: ["magie","handwerk"],
        powerTags: [
          { text: "beschwört nützliche Dinge", hooks: ["magie","handwerk"] },
          { text: "eine Prise für jede Not", hooks: ["magie","handwerk"] },
          { text: "verstärkt eigene Fähigkeiten", hooks: ["magie","handwerk"] },
          { text: "entfacht Funken aus dem Nichts", hooks: ["magie","natur"] },
        ],
        weaknessTags: [
          { text: "der Vorrat geht zur Neige", hooks: ["verlust","handwerk"] },
          { text: "Magie fordert ihren Preis", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "das letzte Rezept finden", description: "Ich suche die verschollene Mischung für den seltensten Staub.", hooks: ["wissen","handwerk"] },
          { title: "den Beutel niemals leeren", description: "Ich lerne, mit jeder Prise hauszuhalten als wäre es die letzte.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "Kessel der Beschwörung", hooks: ["magie","geheimnis"],
        powerTags: [
          { text: "lauscht den Geistern", hooks: ["magie","geheimnis"] },
          { text: "ruft Verbündete aus dem Jenseits", hooks: ["magie","geheimnis"] },
          { text: "braut wirksame Sude", hooks: ["magie","handwerk"] },
          { text: "bannt Wesen in den Kreis", hooks: ["magie","macht"] },
        ],
        weaknessTags: [
          { text: "was gerufen wird bleibt", hooks: ["magie","schicksal"] },
          { text: "andere wollen es", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "einen Geist bannen", description: "Ich suche das Mittel gegen den Geist der nicht weichen will.", hooks: ["magie","geheimnis"] },
          { title: "den Kreis schließen", description: "Ich lerne jede Beschwörung sicher zu Ende zu führen.", hooks: ["magie","wissen"] },
        ]
      },
      {
        text: "verfluchte Klinge", hooks: ["magie","schicksal","kampf"],
        powerTags: [
          { text: "schneidet durch alles", hooks: ["magie","kampf"] },
          { text: "dürstet nach Blut", hooks: ["kampf","schicksal"] },
          { text: "bindet feindliche Magie", hooks: ["magie","kampf"] },
          { text: "kennt den tödlichen Streich", hooks: ["kampf","schicksal"] },
        ],
        weaknessTags: [
          { text: "hat einen eigenen Willen", hooks: ["magie","schicksal"] },
          { text: "verändert mich subtil", hooks: ["magie","schicksal","verlust"] },
        ],
        quests: [
          { title: "den Fluch der Klinge brechen", description: "Ich suche einen Weg die Klinge zu führen ohne ihr zu verfallen.", hooks: ["magie","schicksal"] },
          { title: "das erste Opfer rächen", description: "Ich finde heraus wen diese Klinge zuerst verriet.", hooks: ["verlust","kampf"] },
        ]
      },
      {
        text: "Stab der alten Zeiten", hooks: ["magie","wissen"],
        powerTags: [
          { text: "Kraft des Artefakts", hooks: ["magie","schicksal"] },
          { text: "weckt vergessene Zauber", hooks: ["magie","wissen"] },
          { text: "verstärkt eigene Fähigkeiten", hooks: ["magie","handwerk"] },
          { text: "trägt Wissen alter Mager", hooks: ["wissen","magie"] },
        ],
        weaknessTags: [
          { text: "Macht stellt Forderungen", hooks: ["magie","macht"] },
          { text: "alte Zauber entgleiten", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "die alte Sprache lernen", description: "Ich entziffere die Runen die den Stab beherrschen.", hooks: ["wissen","magie"] },
          { title: "den letzten Träger finden", description: "Ich suche den, der den Stab vor Zeitaltern führte.", hooks: ["wissen","geheimnis"] },
        ]
      },
      {
        text: "Krone der Vergessenen", hooks: ["adel","verlust","geheimnis"],
        powerTags: [
          { text: "trägt Autorität der Toten", hooks: ["adel","macht"] },
          { text: "gebietet über Schatten", hooks: ["magie","macht"] },
          { text: "erinnert vergessene Eide", hooks: ["wissen","verlust"] },
          { text: "verbirgt vor dem Bösen", hooks: ["magie","geheimnis"] },
        ],
        weaknessTags: [
          { text: "wer trägt hier wen", hooks: ["schicksal","geheimnis"] },
          { text: "andere wollen es", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "das verlorene Reich erinnern", description: "Ich decke auf welches Volk diese Krone einst trug.", hooks: ["adel","verlust"] },
          { title: "die rechtmäßige Erbin suchen", description: "Ich finde heraus wem die Krone wirklich gehört.", hooks: ["adel","geheimnis"] },
        ]
      },
      {
        text: "Spiegel der Wahrheit", hooks: ["magie","wissen","geheimnis"],
        powerTags: [
          { text: "enthüllt verborgene Wahrheiten", hooks: ["geheimnis","wissen","magie"] },
          { text: "durchschaut jede Lüge", hooks: ["geheimnis","wissen"] },
          { text: "zeigt die Schwäche des Gegners", hooks: ["magie","wissen"] },
          { text: "entlarvt falsche Gestalt", hooks: ["magie","geheimnis"] },
        ],
        weaknessTags: [
          { text: "zeigt auch eigene Schuld", hooks: ["geheimnis","verlust"] },
          { text: "andere wollen es", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "eine Lüge entlarven", description: "Ich nutze den Spiegel um einen mächtigen Betrug aufzudecken.", hooks: ["geheimnis","macht"] },
          { title: "der eigenen Wahrheit standhalten", description: "Ich lerne zu ertragen was der Spiegel mir selbst zeigt.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "selbstschreibendes Buch", hooks: ["magie","wissen","schicksal"],
        powerTags: [
          { text: "verzeichnet kommende Dinge", hooks: ["magie","schicksal"] },
          { text: "Artefakt mit eigener Geschichte", hooks: ["geheimnis","wissen","schicksal"] },
          { text: "beantwortet jede Frage", hooks: ["wissen","magie"] },
          { text: "warnt vor Gefahr", hooks: ["magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "schreibt auch böse Omen", hooks: ["schicksal","verlust"] },
          { text: "hat einen eigenen Willen", hooks: ["magie","schicksal"] },
        ],
        quests: [
          { title: "die letzte Seite verhindern", description: "Ich suche einen Weg das vorhergesagte Ende abzuwenden.", hooks: ["schicksal","magie"] },
          { title: "wissen wer das Buch schreibt", description: "Ich finde heraus welche Hand die Worte wirklich führt.", hooks: ["geheimnis","wissen"] },
        ]
      },
      {
        text: "Stein der alten Festung", hooks: ["natur","verlust","macht"],
        powerTags: [
          { text: "unerschütterlicher Schutz", hooks: ["magie","schicksal"] },
          { text: "hält jeden Sturm aus", hooks: ["natur","kampf"] },
          { text: "birgt die Kraft der Mauern", hooks: ["natur","macht"] },
          { text: "weckt den Mut der Verteidiger", hooks: ["glaube","kampf"] },
        ],
        weaknessTags: [
          { text: "wurzelt nur an einem Ort", hooks: ["natur","verlust"] },
          { text: "Macht stellt Forderungen", hooks: ["macht","schicksal"] },
        ],
        quests: [
          { title: "die gefallene Festung erinnern", description: "Ich enthülle warum die alte Festung wirklich fiel.", hooks: ["verlust","macht"] },
          { title: "einen neuen Wall errichten", description: "Ich nutze den Stein um einen letzten Schutzort zu bauen.", hooks: ["natur","handwerk"] },
        ]
      },
      {
        text: "Kette des letzten Königs", hooks: ["adel","verlust","macht"],
        powerTags: [
          { text: "trägt königliche Autorität", hooks: ["adel","macht"] },
          { text: "gebietet alten Gehorsam", hooks: ["adel","macht"] },
          { text: "erinnert gebrochene Schwüre", hooks: ["adel","verlust"] },
          { text: "unerklärlicher Schutz", hooks: ["magie","schicksal","geheimnis"] },
        ],
        weaknessTags: [
          { text: "andere wollen es", hooks: ["geheimnis","macht"] },
          { text: "Last eines toten Throns", hooks: ["adel","verlust"] },
        ],
        quests: [
          { title: "die letzte Linie finden", description: "Ich suche den letzten Erben des verschwundenen Königs.", hooks: ["adel","geheimnis"] },
          { title: "das gebrochene Reich kitten", description: "Ich nutze die Kette um zerfallene Treue neu zu binden.", hooks: ["adel","macht"] },
        ]
      },
      {
        text: "Schlüssel ohne Schloss", hooks: ["geheimnis","schicksal"],
        powerTags: [
          { text: "öffnet verschlossene Türen", hooks: ["magie","geheimnis"] },
          { text: "weist den Weg", hooks: ["magie","schicksal"] },
          { text: "verbirgt vor dem Bösen", hooks: ["magie","geheimnis"] },
          { text: "spürt verborgene Schwellen", hooks: ["geheimnis","wissen"] },
        ],
        weaknessTags: [
          { text: "leicht zu verlieren", hooks: ["verlust","geheimnis"] },
          { text: "von Dieben begehrt", hooks: ["stadt","geheimnis"] },
        ],
        quests: [
          { title: "das passende Schloss finden", description: "Ich suche die eine Tür für die dieser Schlüssel gemacht wurde.", hooks: ["geheimnis","schicksal"] },
          { title: "hinter die letzte Tür sehen", description: "Ich öffne was niemand vor mir öffnen durfte.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "Kapsel verlorener Stimmen", hooks: ["geheimnis","verlust","magie"],
        powerTags: [
          { text: "spricht in Träumen", hooks: ["magie","schicksal"] },
          { text: "bewahrt Worte der Toten", hooks: ["geheimnis","verlust"] },
          { text: "flüsternder Rat aus alter Zeit", hooks: ["geheimnis","magie"] },
          { text: "enthüllt verborgene Wahrheiten", hooks: ["geheimnis","wissen","magie"] },
        ],
        weaknessTags: [
          { text: "die Stimmen verstummen nie", hooks: ["magie","verlust"] },
          { text: "verändert mich subtil", hooks: ["magie","schicksal","verlust"] },
        ],
        quests: [
          { title: "eine verlorene Stimme freilassen", description: "Ich suche den Weg eine gefangene Seele gehen zu lassen.", hooks: ["verlust","magie"] },
          { title: "das letzte Wort hören", description: "Ich finde heraus wessen Stimme zuletzt eingeschlossen wurde.", hooks: ["geheimnis","verlust"] },
        ]
      },
    ]
  },
  "Uncanny Being": {
    type: "Adventure",
    titles: [
      {
        text: "körperloser Geist", hooks: ["schicksal","magie","verlust"],
        powerTags: [
          { text: "fließt durch Spalten", hooks: ["schicksal","geheimnis"] },
          { text: "unverletzlich durch Stahl", hooks: ["schicksal","kampf"] },
          { text: "bewegt Dinge ohne Berührung", hooks: ["magie","schicksal"] },
          { text: "spricht mit Toten", hooks: ["magie","verlust"] },
          { text: "durchdringt jede Wand", hooks: ["magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "gebannt durch Salz und Eisen", hooks: ["magie","schicksal"] },
          { text: "gemieden von Mensch und Tier", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "ich finde meinen letzten Atem", description: "Etwas hält mich an diese Welt, und ich werde herausfinden, was meinen Tod verhindert.", hooks: ["verlust","geheimnis"] },
          { title: "ich finde Ruhe im Jenseits", description: "Ich gehöre nicht mehr hierher und suche den Weg, der mich endlich gehen lässt.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "Höllenkind", hooks: ["schicksal","magie","verlust"],
        powerTags: [
          { text: "übersteht Feuer", hooks: ["schicksal","magie"] },
          { text: "Krallen oder Reißzähne", hooks: ["schicksal","kampf"] },
          { text: "spürt böse Magie", hooks: ["magie","schicksal"] },
          { text: "flüstert Gedanken in andere", hooks: ["magie","geheimnis"] },
          { text: "furchteinflößende Präsenz", hooks: ["macht","schicksal"] },
        ],
        weaknessTags: [
          { text: "angreifbar durch heiliges Symbol", hooks: ["glaube","schicksal"] },
          { text: "gehasst von beiden Welten", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "ich entkomme meinem Erbe", description: "Das höllische Blut in mir fordert seinen Tribut, und ich kämpfe darum, ihm nicht zu verfallen.", hooks: ["schicksal","magie"] },
          { title: "ich finde die, die mich erschufen", description: "Etwas Dunkles hat mich in die Welt gerufen, und ich werde ihm gegenübertreten.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "Kleiner Hob", hooks: ["schicksal","natur","geheimnis"],
        powerTags: [
          { text: "bleibt unbemerkt nach Belieben", hooks: ["geheimnis","außenseiter"] },
          { text: "findet jeden verborgenen Winkel", hooks: ["natur","geheimnis"] },
          { text: "schließt Pakt für eine Gabe", hooks: ["schicksal","handwerk"] },
          { text: "spielt listige Streiche", hooks: ["außenseiter","geheimnis"] },
          { text: "kennt die kleinen Geister", hooks: ["natur","magie"] },
        ],
        weaknessTags: [
          { text: "an ein Versprechen gebunden", hooks: ["schicksal","glaube"] },
          { text: "leicht beleidigt und nachtragend", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "ich bewahre meinen Winkel", description: "Ein verborgener Ort gehört mir allein, und ich verteidige ihn gegen jeden Eindringling.", hooks: ["natur","geheimnis"] },
          { title: "ich löse den alten Handel ein", description: "Vor langer Zeit schloss ich einen Pakt, und nun ist die Stunde gekommen, ihn zu erfüllen.", hooks: ["schicksal","glaube"] },
        ]
      },
      {
        text: "Wechselgestalt", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "kann sich verwandeln", hooks: ["schicksal","geheimnis"] },
          { text: "trägt jedes fremde Gesicht", hooks: ["geheimnis","stadt"] },
          { text: "ahmt fremde Stimmen nach", hooks: ["geheimnis","handwerk"] },
          { text: "schlüpft in jede Rolle", hooks: ["geheimnis","außenseiter"] },
          { text: "entkommt durch neue Haut", hooks: ["schicksal","geheimnis"] },
        ],
        weaknessTags: [
          { text: "vergisst das eigene Gesicht", hooks: ["verlust","schicksal"] },
          { text: "ein Makel verrät die Gestalt", hooks: ["geheimnis","schicksal"] },
        ],
        quests: [
          { title: "ich finde mein wahres Gesicht", description: "Unter all den Masken weiß ich nicht mehr, wer ich bin, und ich suche danach.", hooks: ["verlust","geheimnis"] },
          { title: "ich entlarve einen Betrüger", description: "Niemand erkennt eine Täuschung so schnell wie ich, und ich jage den, der falsches Spiel treibt.", hooks: ["geheimnis","schicksal"] },
        ]
      },
      {
        text: "Mondgeborene", hooks: ["schicksal","magie"],
        powerTags: [
          { text: "Kraft im Mondlicht", hooks: ["schicksal","magie"] },
          { text: "sieht das Unsichtbare", hooks: ["schicksal","geheimnis"] },
          { text: "liest die Zeichen am Himmel", hooks: ["wissen","magie"] },
          { text: "spürt die Gezeiten des Mondes", hooks: ["natur","schicksal"] },
          { text: "wandelt sicher bei Nacht", hooks: ["natur","geheimnis"] },
        ],
        weaknessTags: [
          { text: "verliert Kontrolle bei Vollmond", hooks: ["magie","schicksal"] },
          { text: "kraftlos bei Neumond", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "ich zähme das Mondblut", description: "Der volle Mond entfesselt etwas in mir, und ich ringe darum, es zu beherrschen.", hooks: ["magie","schicksal"] },
          { title: "ich ergründe meine Sterndeutung", description: "Der Himmel spricht zu mir in Zeichen, und ich will verstehen, was er mir kündet.", hooks: ["wissen","schicksal"] },
        ]
      },
      {
        text: "Schattenwandler", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "verschwindet in den Schatten", hooks: ["geheimnis","schicksal"] },
          { text: "erscheint und verschwindet", hooks: ["schicksal","geheimnis"] },
          { text: "liebt Dunkelheit", hooks: ["schicksal","natur"] },
          { text: "weilt in ungesehenen Räumen", hooks: ["geheimnis","schicksal"] },
          { text: "schleicht ohne Geräusch", hooks: ["geheimnis","außenseiter"] },
        ],
        weaknessTags: [
          { text: "ihre Nähe verstört Menschen", hooks: ["schicksal","außenseiter"] },
          { text: "geschwächt im hellen Licht", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "ich erkunde das Schattenreich", description: "Hinter den Schatten liegt eine andere Welt, und ich will ihre Tiefen kennen.", hooks: ["geheimnis","schicksal"] },
          { title: "ich verberge eine dunkle Wahrheit", description: "Ein Geheimnis darf niemals ans Licht, und ich nutze die Schatten, um es zu hüten.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "halbwaches Traumkind", hooks: ["schicksal","geheimnis","magie"],
        powerTags: [
          { text: "wandelt durch Träume", hooks: ["magie","schicksal"] },
          { text: "hört Ungesagtes", hooks: ["geheimnis","schicksal"] },
          { text: "flüstert Gedanken in andere", hooks: ["magie","geheimnis"] },
          { text: "sieht kommende Dinge im Schlaf", hooks: ["schicksal","magie"] },
          { text: "braucht keinen Schlaf", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "verwechselt Traum und Wachsein", hooks: ["verlust","schicksal"] },
          { text: "verirrt sich in fremden Träumen", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "ich deute meine Visionen", description: "Im Halbschlaf sehe ich, was kommen wird, und ich will lernen, die Bilder zu verstehen.", hooks: ["schicksal","geheimnis"] },
          { title: "ich finde den Weg zurück", description: "Ich habe mich zwischen Traum und Wachen verloren und suche den Pfad ins eigene Leben.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "Aschenwanderin", hooks: ["schicksal","fahrend","verlust"],
        powerTags: [
          { text: "übersteht Feuer", hooks: ["schicksal","magie"] },
          { text: "findet den Weg zwischen Welten", hooks: ["schicksal","fahrend"] },
          { text: "liest die Spuren im Staub", hooks: ["natur","fahrend"] },
          { text: "trägt nur Asche und Erinnerung", hooks: ["verlust","fahrend"] },
          { text: "rastet wo kein anderer ruht", hooks: ["fahrend","außenseiter"] },
        ],
        weaknessTags: [
          { text: "nirgends willkommen", hooks: ["außenseiter","fahrend"] },
          { text: "hinterlässt verbrannte Spuren", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "ich suche die verlorene Heimat", description: "Feuer nahm mir alles, und ich wandere, bis ich einen Ort finde, der bleibt.", hooks: ["verlust","fahrend"] },
          { title: "ich finde die Glut der Schuldigen", description: "Jemand legte das Feuer, das mein Leben verzehrte, und ich folge der Spur bis ans Ende.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "Wassergeborene", hooks: ["schicksal","natur","magie"],
        powerTags: [
          { text: "taucht endlos und tief", hooks: ["natur","schicksal"] },
          { text: "spürt die Strömungen", hooks: ["natur","magie"] },
          { text: "ruft das Wasser herbei", hooks: ["magie","natur"] },
          { text: "atmet unter der Oberfläche", hooks: ["schicksal","natur"] },
          { text: "spricht mit Wesen der Tiefe", hooks: ["natur","magie"] },
        ],
        weaknessTags: [
          { text: "vertrocknet fern vom Wasser", hooks: ["schicksal","verlust"] },
          { text: "ruhelos auf festem Land", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "ich kehre in die Tiefe heim", description: "Das Land hält mich gefangen, und ich sehne mich nach den Wassern, aus denen ich kam.", hooks: ["natur","schicksal"] },
          { title: "ich befriede die zornigen Gewässer", description: "Etwas Altes regt sich in den Tiefen, und ich allein kann es besänftigen.", hooks: ["natur","magie"] },
        ]
      },
      {
        text: "Kind des Zwielichts", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "sieht durch Glamour und Täuschung", hooks: ["schicksal","geheimnis"] },
          { text: "spürt lebende Seelen", hooks: ["schicksal","magie"] },
          { text: "wandelt zwischen Tag und Nacht", hooks: ["schicksal","geheimnis"] },
          { text: "beeinflusst Stimmungen durch Präsenz", hooks: ["magie","schicksal"] },
          { text: "geht ungesehen durch Dämmerung", hooks: ["geheimnis","natur"] },
        ],
        weaknessTags: [
          { text: "gehört weder Tag noch Nacht", hooks: ["außenseiter","schicksal"] },
          { text: "schwindet im hellen Mittag", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "ich finde meinen Platz dazwischen", description: "Ich gehöre weder ins Licht noch in die Finsternis und suche eine Schwelle, auf der ich stehen kann.", hooks: ["außenseiter","schicksal"] },
          { title: "ich hüte die Schwelle", description: "Im Zwielicht öffnen sich Wege, die niemand betreten sollte, und ich wache über sie.", hooks: ["geheimnis","schicksal"] },
        ]
      },
      {
        text: "Riss zwischen den Welten", hooks: ["schicksal","magie","geheimnis"],
        powerTags: [
          { text: "findet den Weg zwischen Welten", hooks: ["schicksal","fahrend"] },
          { text: "Sprache der anderen Seite", hooks: ["magie","geheimnis"] },
          { text: "verlässt kurz den Körper", hooks: ["schicksal","magie"] },
          { text: "öffnet verborgene Pforten", hooks: ["magie","schicksal"] },
          { text: "spürt dünne Stellen der Welt", hooks: ["magie","geheimnis"] },
        ],
        weaknessTags: [
          { text: "vergisst in der anderen Welt", hooks: ["verlust","magie"] },
          { text: "zieht Wesen von drüben an", hooks: ["schicksal","magie"] },
        ],
        quests: [
          { title: "ich schließe den offenen Riss", description: "Durch mich kam etwas in die Welt, das nicht hierher gehört, und ich muss die Pforte versiegeln.", hooks: ["magie","schicksal"] },
          { title: "ich ergründe die andere Seite", description: "Jenseits des Risses liegt ein Reich, dessen Geheimnisse mich rufen.", hooks: ["geheimnis","magie"] },
        ]
      },
      {
        text: "Gezeichnete des Mondes", hooks: ["schicksal","magie","natur"],
        powerTags: [
          { text: "verwandelt sich im Mondlicht", hooks: ["schicksal","natur"] },
          { text: "Krallen oder Reißzähne", hooks: ["schicksal","kampf"] },
          { text: "wittert Beute über weite Wege", hooks: ["natur","kampf"] },
          { text: "heilt im Schein des Mondes", hooks: ["schicksal","magie"] },
          { text: "ungezähmte Wildheit", hooks: ["natur","kampf"] },
        ],
        weaknessTags: [
          { text: "verliert Kontrolle bei Vollmond", hooks: ["magie","schicksal"] },
          { text: "das Mal verrät ihr Wesen", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "ich bändige die Bestie in mir", description: "Wenn der Mond voll steht, droht das Tier mich zu verschlingen, und ich kämpfe um die Herrschaft.", hooks: ["schicksal","kampf"] },
          { title: "ich finde das Rudel meiner Art", description: "Irgendwo leben andere, die dasselbe Mal tragen, und ich suche nach ihnen.", hooks: ["natur","außenseiter"] },
        ]
      },
    ]
  },
  "Destiny": {
    type: "Greatness",
    titles: [
      {
        text: "erbin des throns", hooks: ["adel","macht","schicksal"],
        powerTags: [
          { text: "blutrecht der krone", hooks: ["adel","macht","schicksal"] },
          { text: "die welt hört auf mich", hooks: ["schicksal","macht"] },
          { text: "treue eines ganzen reiches", hooks: ["adel","macht"] },
          { text: "ihr wort trägt gewicht", hooks: ["schicksal","macht"] },
          { text: "geborene herrscherin", hooks: ["adel","macht","schicksal"] },
        ],
        weaknessTags: [
          { text: "rivalen wollen den thron", hooks: ["adel","macht","kampf"] },
          { text: "andere fordern meinen tod", hooks: ["schicksal","kampf"] },
          { text: "last der krone", hooks: ["adel","verlust"] },
        ],
        quests: [
          { title: "ich erringe den thron, der mir gebührt", description: "Das Reich ist meines von Geburt an und ich werde es einfordern.", hooks: ["adel","macht","schicksal"] },
          { title: "ich beweise mich als würdige herrscherin", description: "Eine Krone macht noch keine Königin und das werde ich der Welt zeigen.", hooks: ["adel","macht"] },
        ]
      },
      {
        text: "untergang der welt", hooks: ["schicksal","verlust"],
        powerTags: [
          { text: "vorbote des endes", hooks: ["schicksal","verlust"] },
          { text: "überlebt das unmögliche", hooks: ["schicksal"] },
          { text: "sieht das nahende unheil", hooks: ["schicksal","geheimnis"] },
          { text: "unerschütterlicher mut", hooks: ["kampf","schicksal"] },
          { text: "steht immer wieder auf", hooks: ["schicksal","kampf"] },
        ],
        weaknessTags: [
          { text: "die bestimmung fordert opfer", hooks: ["schicksal","verlust"] },
          { text: "feinde wollen mich verhindern", hooks: ["schicksal","kampf"] },
          { text: "vom ende gezeichnet", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "ich rette die welt vor dem ende", description: "Andere wollen das Unheil nicht sehen doch ich stehe in seinem Weg.", hooks: ["schicksal","kampf"] },
          { title: "ich verhindere den vorhergesagten untergang", description: "Das Schicksal läuft auf eine Katastrophe zu und ich werde es brechen.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "sucher des erzählers", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "findet zeichen im zufall", hooks: ["schicksal","geheimnis"] },
          { text: "zeichen weisen den weg", hooks: ["schicksal","geheimnis"] },
          { text: "liest den faden der geschichte", hooks: ["schicksal","wissen"] },
          { text: "verbotene türen öffnen sich", hooks: ["schicksal","geheimnis"] },
          { text: "spürt verborgene wahrheit", hooks: ["geheimnis","wissen"] },
        ],
        weaknessTags: [
          { text: "besessen von der suche", hooks: ["schicksal","geheimnis"] },
          { text: "der pfad ist eng", hooks: ["schicksal"] },
          { text: "zweifelt an der prophezeiung", hooks: ["schicksal","geheimnis"] },
        ],
        quests: [
          { title: "ich entdecke wer mich auserwählt hat", description: "Hinter meiner Bestimmung steht jemand und ich werde ihn finden.", hooks: ["schicksal","geheimnis"] },
          { title: "ich finde den erzähler hinter allem", description: "Eine Hand lenkt die Geschichte und ich will ihr ins Angesicht sehen.", hooks: ["schicksal","geheimnis"] },
        ]
      },
      {
        text: "auserwählter der götter", hooks: ["schicksal","glaube"],
        powerTags: [
          { text: "segen der götter", hooks: ["glaube","schicksal","magie"] },
          { text: "wundersame rettung", hooks: ["schicksal","magie"] },
          { text: "schicksal beschützt mich", hooks: ["schicksal"] },
          { text: "verbündete erscheinen", hooks: ["schicksal"] },
          { text: "trägt göttliche autorität", hooks: ["glaube","macht","schicksal"] },
        ],
        weaknessTags: [
          { text: "die götter fordern gehorsam", hooks: ["glaube","schicksal"] },
          { text: "hochmut verfolgt mich", hooks: ["schicksal","verlust"] },
          { text: "ketzer fordern meinen tod", hooks: ["glaube","kampf"] },
        ],
        quests: [
          { title: "ich erfülle den willen der götter", description: "Eine höhere Macht hat mich gewählt und ich folge ihrem Ruf.", hooks: ["schicksal","glaube"] },
          { title: "ich entscheide ob ich das schicksal annehme", description: "Vielleicht bin ich die Auserwählte und vielleicht eine Lüge doch ich werde es wissen.", hooks: ["schicksal","glaube"] },
        ]
      },
      {
        text: "das letzte licht", hooks: ["schicksal","glaube"],
        powerTags: [
          { text: "leuchtet in der finsternis", hooks: ["glaube","schicksal","magie"] },
          { text: "zieht die richtigen an", hooks: ["schicksal"] },
          { text: "gibt allen hoffnung", hooks: ["glaube","schicksal"] },
          { text: "verbündete erscheinen", hooks: ["schicksal"] },
          { text: "hält die dunkelheit zurück", hooks: ["glaube","kampf","magie"] },
        ],
        weaknessTags: [
          { text: "die finsternis jagt mich", hooks: ["schicksal","verlust","kampf"] },
          { text: "darf niemals erlöschen", hooks: ["glaube","schicksal"] },
          { text: "trägt aller hoffnung last", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "ich halte das licht aufrecht", description: "Die Finsternis drückt von allen Seiten doch ich weiche nicht zurück.", hooks: ["glaube","schicksal"] },
          { title: "ich vertreibe die kommende dunkelheit", description: "Ein Schatten verschlingt die Welt und ich bin das letzte Licht gegen ihn.", hooks: ["glaube","kampf"] },
        ]
      },
      {
        text: "das kind der sterne", hooks: ["schicksal","magie"],
        powerTags: [
          { text: "die sterne stehen günstig", hooks: ["schicksal","magie"] },
          { text: "glück folgt meinen schritten", hooks: ["schicksal"] },
          { text: "vorhersehung leitet mich", hooks: ["schicksal","geheimnis"] },
          { text: "die welt richtet sich aus", hooks: ["schicksal","magie"] },
          { text: "liest den himmel", hooks: ["wissen","magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "an den sternenlauf gebunden", hooks: ["schicksal","magie"] },
          { text: "keine freie wahl mehr", hooks: ["schicksal","verlust"] },
          { text: "fremd unter menschen", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "ich erfülle wozu ich geboren wurde", description: "Es ist alles in mir angelegt und ich höre auf mich zu wehren.", hooks: ["schicksal","magie"] },
          { title: "ich beweise dass ich frei bin", description: "Sie sagen mein Pfad sei in den Sternen geschrieben doch ich setze jeden Schritt anders.", hooks: ["schicksal","außenseiter"] },
        ]
      },
      {
        text: "trägerin des alten zeichens", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "das mal weist mich aus", hooks: ["schicksal","geheimnis","magie"] },
          { text: "verbotene türen öffnen sich", hooks: ["schicksal","geheimnis"] },
          { text: "die alten erkennen mich", hooks: ["schicksal","wissen"] },
          { text: "zeichen pulsiert bei gefahr", hooks: ["schicksal","magie"] },
          { text: "schwer zu widerstehen", hooks: ["schicksal","macht"] },
        ],
        weaknessTags: [
          { text: "das mal zieht jäger an", hooks: ["schicksal","kampf","geheimnis"] },
          { text: "kennt die Last nicht", hooks: ["schicksal","geheimnis"] },
          { text: "gezeichnet für immer", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "ich enträtsle das alte zeichen", description: "Das Mal auf mir trägt eine Bedeutung und ich muss sie kennen.", hooks: ["schicksal","geheimnis"] },
          { title: "ich trage die bürde des zeichens", description: "Das Mal verlangt seinen Preis und ich finde einen Weg damit zu leben.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "schließerin des risses", hooks: ["schicksal","magie"],
        powerTags: [
          { text: "bannt das eindringende", hooks: ["magie","kampf","schicksal"] },
          { text: "wege öffnen sich", hooks: ["schicksal"] },
          { text: "spürt den Riss der Welt", hooks: ["magie","geheimnis","schicksal"] },
          { text: "die welt richtet sich aus", hooks: ["schicksal","magie"] },
          { text: "hält die schwelle", hooks: ["magie","kampf"] },
        ],
        weaknessTags: [
          { text: "der riss zehrt an mir", hooks: ["magie","verlust","schicksal"] },
          { text: "die bestimmung fordert opfer", hooks: ["schicksal","verlust"] },
          { text: "kreaturen jenseits jagen mich", hooks: ["magie","kampf"] },
        ],
        quests: [
          { title: "ich schließe den riss endgültig", description: "Aus dem Spalt dringt Verderben und nur ich kann ihn versiegeln.", hooks: ["schicksal","magie"] },
          { title: "ich finde wer den riss öffnete", description: "Der Spalt entstand nicht von selbst und ich werde die Hand dahinter aufspüren.", hooks: ["geheimnis","magie"] },
        ]
      },
      {
        text: "prophezeite der tiefe", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "träume offenbaren geheimnisse", hooks: ["schicksal","geheimnis"] },
          { text: "Stimmen der Tiefe leiten mich", hooks: ["geheimnis","magie","schicksal"] },
          { text: "verborgene helfer", hooks: ["schicksal","geheimnis"] },
          { text: "kennt die alten weissagungen", hooks: ["wissen","geheimnis","schicksal"] },
          { text: "übersteht das verborgene grauen", hooks: ["schicksal","kampf"] },
        ],
        weaknessTags: [
          { text: "die tiefe ruft nach mir", hooks: ["schicksal","geheimnis","verlust"] },
          { text: "zweifelt an der prophezeiung", hooks: ["schicksal","geheimnis"] },
          { text: "albträume rauben den schlaf", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "ich ergründe die prophezeiung der tiefe", description: "Die Stimmen aus der Tiefe verkünden mein Schicksal und ich muss sie verstehen.", hooks: ["schicksal","geheimnis"] },
          { title: "ich widerstehe dem ruf der tiefe", description: "Etwas Uraltes will mich für sich und ich werde ihm nicht gehören.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "kind zweier zeitalter", hooks: ["schicksal","verlust"],
        powerTags: [
          { text: "wissen zweier welten", hooks: ["wissen","schicksal"] },
          { text: "brücke zwischen alt und neu", hooks: ["schicksal","geheimnis"] },
          { text: "bestimmung pulsiert in mir", hooks: ["schicksal"] },
          { text: "übersteht den wandel der zeit", hooks: ["schicksal","verlust"] },
          { text: "erinnert das vergangene zeitalter", hooks: ["wissen","verlust"] },
        ],
        weaknessTags: [
          { text: "in keiner zeit zu hause", hooks: ["außenseiter","verlust","schicksal"] },
          { text: "zerrissen zwischen den welten", hooks: ["schicksal","verlust"] },
          { text: "von beiden seiten misstraut", hooks: ["außenseiter","geheimnis"] },
        ],
        quests: [
          { title: "ich überbrücke die zwei zeitalter", description: "Ich gehöre weder ganz dem Alten noch dem Neuen und genau das wird gebraucht.", hooks: ["schicksal","verlust"] },
          { title: "ich leite den wandel der zeitalter", description: "Eine Welt endet und eine beginnt und ich stehe an der Schwelle.", hooks: ["schicksal","macht"] },
        ]
      },
      {
        text: "erfüllerin des vergessenen wortes", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "spricht das vergessene wort", hooks: ["geheimnis","magie","schicksal"] },
          { text: "verbotene türen öffnen sich", hooks: ["schicksal","geheimnis"] },
          { text: "kennt die verlorene weissagung", hooks: ["wissen","geheimnis"] },
          { text: "die welt richtet sich aus", hooks: ["schicksal","magie"] },
          { text: "ihr wort trägt gewicht", hooks: ["schicksal","macht"] },
        ],
        weaknessTags: [
          { text: "das wort verlangt seinen preis", hooks: ["schicksal","magie","verlust"] },
          { text: "viele begehren das Wort", hooks: ["geheimnis","macht","kampf"] },
          { text: "darf das wort nie missbrauchen", hooks: ["schicksal","glaube"] },
        ],
        quests: [
          { title: "ich finde das fehlende wort", description: "Was ich kenne ist nur ein Fragment und das Ganze verändert alles.", hooks: ["schicksal","geheimnis"] },
          { title: "ich vollende das vergessene wort", description: "Eine uralte Verheißung wartet auf ihre Erfüllung durch meine Stimme.", hooks: ["schicksal","magie"] },
        ]
      },
      {
        text: "schlusspunkt der geschichte", hooks: ["schicksal"],
        powerTags: [
          { text: "bestimmung pulsiert in mir", hooks: ["schicksal"] },
          { text: "mein antlitz erkennt jeder", hooks: ["schicksal","macht"] },
          { text: "handelt instinktiv richtig", hooks: ["schicksal"] },
          { text: "alle wege enden bei mir", hooks: ["schicksal","macht"] },
          { text: "überlebt das unmögliche", hooks: ["schicksal"] },
        ],
        weaknessTags: [
          { text: "das ende lastet auf mir", hooks: ["schicksal","verlust"] },
          { text: "keine freie wahl mehr", hooks: ["schicksal","verlust"] },
          { text: "zieht ungesuchte feinde an", hooks: ["schicksal","kampf"] },
        ],
        quests: [
          { title: "ich bringe die geschichte zum abschluss", description: "Alles läuft auf mich zu und in mir findet es sein Ende.", hooks: ["schicksal"] },
          { title: "ich bereite vor was nach mir kommt", description: "Wenn es vollbracht ist wird die Welt anders sein und jemand muss bereit sein.", hooks: ["schicksal","glaube"] },
        ]
      },
    ]
  },
  "Dominion": {
    type: "Greatness",
    titles: [
      {
        text: "herrin der mark", hooks: ["macht","natur","adel"],
        powerTags: [
          { text: "tribute aus dem land", hooks: ["macht","natur"] },
          { text: "kennt jede grenze des reiches", hooks: ["macht","natur"] },
          { text: "soldaten der mark", hooks: ["kampf","macht"] },
          { text: "ein ergebenes volk", hooks: ["macht","glaube"] },
          { text: "banner und wappen", hooks: ["adel","macht"] },
        ],
        weaknessTags: [
          { text: "zahlt persönlich fürs reich", hooks: ["macht","verlust"] },
          { text: "jede schwäche wird ausgenutzt", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "ich vergrößere mein reich", description: "Was ich habe, ist nicht genug, mein Schatten soll länger werden.", hooks: ["macht","kampf"] },
          { title: "ich beschütze mein land", description: "Diese Erde gehört zu mir, und wer sie bedroht, bedroht alles.", hooks: ["macht","natur","glaube"] },
        ]
      },
      {
        text: "anführerin der gilde", hooks: ["macht","handwerk","stadt"],
        powerTags: [
          { text: "gildensiegel", hooks: ["handwerk","macht"] },
          { text: "eingespielte verwaltung", hooks: ["macht","handwerk"] },
          { text: "steuereinnahmen", hooks: ["macht","stadt"] },
          { text: "macht und bricht rufe", hooks: ["macht","stadt"] },
          { text: "kennt jedermanns schulden", hooks: ["geheimnis","macht"] },
        ],
        weaknessTags: [
          { text: "konkurrenz um die spitze", hooks: ["macht","stadt"] },
          { text: "jedes bündnis hat seinen preis", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "ich beherrsche den gesamten handel", description: "Keine Ware soll diese Stadt verlassen ohne mein Wissen.", hooks: ["macht","handwerk","stadt"] },
          { title: "ich baue ein netzwerk das mich überdauert", description: "Was ich aufbaute, soll nicht mit mir enden.", hooks: ["macht","stadt"] },
        ]
      },
      {
        text: "lehnsherr von stein", hooks: ["adel","macht"],
        powerTags: [
          { text: "burg auf dem berg", hooks: ["adel","macht"] },
          { text: "recht zu richten", hooks: ["macht","glaube"] },
          { text: "räte und berater", hooks: ["macht","wissen"] },
          { text: "kennt die adligen", hooks: ["adel","stadt"] },
          { text: "ihr wort verurteilt", hooks: ["macht"] },
        ],
        weaknessTags: [
          { text: "der thron wird begehrt", hooks: ["macht","adel"] },
          { text: "schulden gegenüber mächtigen", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "ich setze recht durch das mich selbst trifft", description: "Das Gesetz gilt für alle, oder für niemanden.", hooks: ["macht","glaube"] },
          { title: "ich bin der gerechte herrscher", description: "Vor mir gab es Tyrannen, ich werde anders sein.", hooks: ["macht","glaube"] },
        ]
      },
      {
        text: "königin des tales", hooks: ["macht","natur"],
        powerTags: [
          { text: "ein ergebenes volk", hooks: ["macht","glaube"] },
          { text: "spricht für ein volk", hooks: ["macht","glaube"] },
          { text: "tribute aus dem land", hooks: ["macht","natur"] },
          { text: "wendet krisen ab", hooks: ["macht","schicksal"] },
          { text: "kennt jede grenze ihres reiches", hooks: ["macht","natur"] },
        ],
        weaknessTags: [
          { text: "einsam an der spitze", hooks: ["macht","verlust"] },
          { text: "zahlt persönlich für ihr reich", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "ich schütze mein tal vor allen feinden", description: "Diese Erde gehört zu mir, und ich zu ihr.", hooks: ["macht","natur","glaube"] },
          { title: "ich beende einen krieg um mein land", description: "Es muss enden, und jemand muss die Last des Friedens tragen.", hooks: ["kampf","macht"] },
        ]
      },
      {
        text: "befehlshaber der wache", hooks: ["kampf","macht","stadt"],
        powerTags: [
          { text: "regiert durch stärke", hooks: ["macht","kampf"] },
          { text: "bewegt heere in tagen", hooks: ["kampf","macht"] },
          { text: "recht auf krieg", hooks: ["macht","kampf"] },
          { text: "kennt jede losung jeder wache", hooks: ["stadt","kampf"] },
          { text: "soldaten meines reiches", hooks: ["kampf","macht"] },
        ],
        weaknessTags: [
          { text: "aufstand gärt", hooks: ["macht","außenseiter"] },
          { text: "entscheidungen ohne gewissen", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "ich halte die ordnung mit eiserner hand", description: "Niemand bricht das Gesetz dieser Stadt ungestraft.", hooks: ["macht","kampf","stadt"] },
          { title: "ich beende einen krieg der das land zerstört", description: "Die Toten liegen auf beiden Seiten, es muss enden.", hooks: ["kampf","macht"] },
        ]
      },
      {
        text: "herrscherin des zwielichtreiches", hooks: ["macht","schicksal","geheimnis"],
        powerTags: [
          { text: "beste spione weit und breit", hooks: ["geheimnis","stadt"] },
          { text: "verborgene reserven", hooks: ["macht","geheimnis"] },
          { text: "wendet krisen ab", hooks: ["macht","schicksal"] },
          { text: "kennt jedes schweigen", hooks: ["geheimnis","macht"] },
          { text: "zieht fäden im verborgenen", hooks: ["macht","geheimnis"] },
        ],
        weaknessTags: [
          { text: "verräter im inneren kreis", hooks: ["geheimnis","stadt"] },
          { text: "unsichtbare feinde", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "ich beherrsche die welt aus dem schatten", description: "Mein Wille geschieht, ohne dass ein Name ihn trägt.", hooks: ["macht","geheimnis"] },
          { title: "ich finde heraus wer mich verraten hat", description: "Es war jemand, dem ich vertraute, und der Name muss ans Licht.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "erbin einer festung ohne land", hooks: ["adel","verlust","macht"],
        powerTags: [
          { text: "banner und wappen", hooks: ["adel","macht"] },
          { text: "kann andere legitimieren", hooks: ["adel","macht"] },
          { text: "eine handvoll treuer soldaten", hooks: ["kampf","macht"] },
          { text: "uralte ansprüche", hooks: ["adel","verlust"] },
          { text: "burg auf dem berg", hooks: ["adel","macht"] },
        ],
        weaknessTags: [
          { text: "ein Reich nur auf Papier", hooks: ["macht","verlust"] },
          { text: "schulden gegenüber mächtigen", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "ich erobere mein erbe zurück", description: "Der Titel ist mein, jetzt muss es auch das Land sein.", hooks: ["adel","macht","verlust"] },
          { title: "ich baue das reich neu auf", description: "Aus einer leeren Festung mache ich wieder eine Macht.", hooks: ["macht","schicksal"] },
        ]
      },
      {
        text: "anführerin des widerstands", hooks: ["außenseiter","kampf","macht"],
        powerTags: [
          { text: "kann verbündete mobilisieren", hooks: ["macht"] },
          { text: "spricht für ein unterdrücktes volk", hooks: ["macht","glaube"] },
          { text: "boten in jede richtung", hooks: ["macht","fahrend"] },
          { text: "regiert durch überzeugung", hooks: ["macht","glaube"] },
          { text: "verborgene reserven", hooks: ["macht","geheimnis"] },
        ],
        weaknessTags: [
          { text: "gejagt von der herrschenden macht", hooks: ["macht","außenseiter"] },
          { text: "verräter im inneren kreis", hooks: ["geheimnis","stadt"] },
        ],
        quests: [
          { title: "ich stürze den tyrannen", description: "Solange er herrscht, ist niemand frei.", hooks: ["macht","kampf","außenseiter"] },
          { title: "ich gebe dem volk seine stimme zurück", description: "Was man ihnen nahm, hole ich für sie zurück.", hooks: ["macht","glaube"] },
        ]
      },
      {
        text: "regentin für ein kind", hooks: ["macht","adel","glaube"],
        powerTags: [
          { text: "räte und berater", hooks: ["macht","wissen"] },
          { text: "kann andere legitimieren", hooks: ["adel","macht"] },
          { text: "vertrauen der mächtigen", hooks: ["macht","adel"] },
          { text: "beherrscht das gleichgewicht der mächte", hooks: ["macht","stadt"] },
          { text: "ihr wort gilt am hof", hooks: ["macht","adel"] },
        ],
        weaknessTags: [
          { text: "macht nur geliehen", hooks: ["macht","verlust"] },
          { text: "der thron wird begehrt", hooks: ["macht","adel"] },
        ],
        quests: [
          { title: "ich wahre den thron für das kind", description: "Bis es alt genug ist, halte ich die Wölfe fern.", hooks: ["macht","adel","glaube"] },
          { title: "ich gebe die macht ab wenn es zeit ist", description: "Sie ist nicht meine, und ich werde sie zurückgeben.", hooks: ["macht","adel"] },
        ]
      },
      {
        text: "herrscherin durch geburt und last", hooks: ["adel","schicksal","macht"],
        powerTags: [
          { text: "ererbtes recht", hooks: ["adel","macht"] },
          { text: "ein ergebenes volk", hooks: ["macht","glaube"] },
          { text: "wendet krisen ab", hooks: ["macht","schicksal"] },
          { text: "banner und wappen", hooks: ["adel","macht"] },
          { text: "räte und berater", hooks: ["macht","wissen"] },
        ],
        weaknessTags: [
          { text: "einsam an der spitze", hooks: ["macht","verlust"] },
          { text: "kann die krone nicht ablegen", hooks: ["macht","schicksal"] },
        ],
        quests: [
          { title: "ich trage die bürde der krone", description: "Niemand fragte mich, doch das Reich ruht auf mir.", hooks: ["macht","schicksal","adel"] },
          { title: "ich baue ein reich das mich überdauert", description: "Ich lege Grundsteine für die Herrschaft nach mir.", hooks: ["macht","schicksal"] },
        ]
      },
      {
        text: "herrin der verbotenen stadt", hooks: ["macht","stadt","geheimnis"],
        powerTags: [
          { text: "zugang zu verschlossenen orten", hooks: ["geheimnis","macht"] },
          { text: "beste spione weit und breit", hooks: ["geheimnis","stadt"] },
          { text: "kennt das geheimnis aller", hooks: ["geheimnis","macht"] },
          { text: "ihr wort verurteilt", hooks: ["macht"] },
          { text: "verborgene reserven", hooks: ["macht","geheimnis"] },
        ],
        weaknessTags: [
          { text: "jede schwäche wird ausgenutzt", hooks: ["macht","stadt"] },
          { text: "alte intrigen holen sie ein", hooks: ["stadt","verlust"] },
        ],
        quests: [
          { title: "ich halte das tor der stadt verschlossen", description: "Was hier liegt, darf die Welt niemals erreichen.", hooks: ["macht","stadt","geheimnis"] },
          { title: "ich entlarve die wahren strippenzieher", description: "Hinter allem bewegen sich verborgene Hände, ich finde sie.", hooks: ["geheimnis","macht"] },
        ]
      },
      {
        text: "gebieterin über leben und tod", hooks: ["macht","glaube","schicksal"],
        powerTags: [
          { text: "recht zu richten", hooks: ["macht","glaube"] },
          { text: "ihr wort verurteilt", hooks: ["macht"] },
          { text: "ein ergebenes volk", hooks: ["macht","glaube"] },
          { text: "regiert durch furcht und gnade", hooks: ["macht","schicksal"] },
          { text: "räte und berater", hooks: ["macht","wissen"] },
        ],
        weaknessTags: [
          { text: "entscheidungen ohne gewissen", hooks: ["macht","verlust"] },
          { text: "einsam an der spitze", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "ich spreche das letzte urteil", description: "Über Leben und Tod entscheide allein ich.", hooks: ["macht","glaube","schicksal"] },
          { title: "ich gebe die macht ab bevor sie mich verdirbt", description: "Es ist Zeit, sie loszulassen, wenn es nicht schon zu spät ist.", hooks: ["macht","verlust"] },
        ]
      },
    ]
  },
  "Mastery": {
    type: "Greatness",
    titles: [
      {
        text: "legendärer Schmied", hooks: ["handwerk","schicksal"],
        powerTags: [
          { text: "Werkzeuge eines Meisters", hooks: ["handwerk"] },
          { text: "kennt die Seele des Materials", hooks: ["handwerk"] },
          { text: "Klingen für Helden", hooks: ["handwerk","kampf"] },
          { text: "Werke überdauern Jahrhunderte", hooks: ["handwerk","schicksal"] },
          { text: "Feuer gehorcht ihm", hooks: ["handwerk","natur"] },
        ],
        weaknessTags: [
          { text: "gefährdet durch Neid", hooks: ["stadt"] },
          { text: "alle wollen seine Waffen", hooks: ["handwerk","macht"] },
          { text: "Ruhm zieht Feinde an", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "das Meisterwerk meines Lebens", description: "Eine einzige Klinge soll mich überdauern und meinen Namen für immer tragen.", hooks: ["handwerk","schicksal"] },
          { title: "die letzte Schmiedetechnik", description: "Irgendwo wartet ein Verfahren, das ich noch nicht beherrsche, und ich werde es finden.", hooks: ["handwerk","wissen"] },
        ]
      },
      {
        text: "Meister der Klinge", hooks: ["handwerk","kampf"],
        powerTags: [
          { text: "unschlagbar im Wettkampf", hooks: ["handwerk","kampf"] },
          { text: "Technik ohne Namen", hooks: ["handwerk","schicksal"] },
          { text: "liest jeden Gegner sofort", hooks: ["kampf","wissen"] },
          { text: "meisterhafte Kontrolle", hooks: ["handwerk"] },
          { text: "gilt als Legende", hooks: ["handwerk","schicksal"] },
        ],
        weaknessTags: [
          { text: "Herausforderer ohne Ende", hooks: ["kampf","macht"] },
          { text: "Ruhm zieht Feinde an", hooks: ["macht","verlust"] },
          { text: "erträgt keine Niederlage", hooks: ["handwerk","kampf"] },
        ],
        quests: [
          { title: "jemanden der mich übertrifft", description: "An der Spitze ist es einsam und erst ein ebenbürtiger Gegner macht mich wieder lebendig.", hooks: ["handwerk","kampf"] },
          { title: "Kunst ohne Krieg", description: "Ich will beweisen, dass meine Klinge nicht zum Töten geschaffen wurde.", hooks: ["handwerk","glaube"] },
        ]
      },
      {
        text: "Erbauer der Welten", hooks: ["handwerk","schicksal"],
        powerTags: [
          { text: "vollbringt das Unmögliche", hooks: ["handwerk","schicksal"] },
          { text: "geht über alles Dagewesene hinaus", hooks: ["handwerk"] },
          { text: "sieht Jahre im Werkstück", hooks: ["handwerk","wissen"] },
          { text: "Werke überdauern Jahrhunderte", hooks: ["handwerk","schicksal"] },
          { text: "Bauwerke trotzen der Zeit", hooks: ["handwerk","macht"] },
        ],
        weaknessTags: [
          { text: "Geisel der eigenen Größe", hooks: ["macht","verlust"] },
          { text: "unzumutbare Selbstansprüche", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "die Welt mit meiner Kunst verändern", description: "Mein Werk soll etwas öffnen, das zuvor verschlossen war.", hooks: ["handwerk","macht"] },
          { title: "ein Erbe das mich überdauert", description: "Ich errichte etwas, das noch steht, wenn niemand mehr meinen Namen kennt.", hooks: ["handwerk","schicksal"] },
        ]
      },
      {
        text: "Königin der Stimme", hooks: ["handwerk"],
        powerTags: [
          { text: "unverwechselbarer Stil", hooks: ["handwerk"] },
          { text: "bewegt jedes Herz", hooks: ["handwerk","macht"] },
          { text: "ihr Ruf öffnet Türen", hooks: ["handwerk","macht"] },
          { text: "meisterhafte Kontrolle", hooks: ["handwerk"] },
          { text: "gilt als Legende", hooks: ["handwerk","schicksal"] },
        ],
        weaknessTags: [
          { text: "gefährdet durch Neid", hooks: ["stadt"] },
          { text: "Ruhm zieht Feinde an", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "ein Lied das nie verstummt", description: "Ich will eine Weise schaffen, die noch Generationen nach mir gesungen wird.", hooks: ["handwerk","schicksal"] },
          { title: "die Mächtigen mit Worten wenden", description: "Ich beweise, dass meine Stimme mehr bewegt als jedes Heer.", hooks: ["handwerk","macht"] },
        ]
      },
      {
        text: "unangefochtene Heilerin", hooks: ["handwerk","glaube"],
        powerTags: [
          { text: "kennt jede Variante", hooks: ["handwerk","wissen"] },
          { text: "andere Meister suchen Rat", hooks: ["handwerk","wissen"] },
          { text: "erkennt ungeahnte Fehler", hooks: ["handwerk","wissen"] },
          { text: "vollbringt das Unmögliche", hooks: ["handwerk","schicksal"] },
          { text: "Heilung gegen jedes Leiden", hooks: ["handwerk","glaube"] },
        ],
        weaknessTags: [
          { text: "alle wollen von mir lernen", hooks: ["handwerk"] },
          { text: "erwartet zu hohe Standards", hooks: ["handwerk"] },
          { text: "kein Verlust verziehen", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Kunst ohne Krieg", description: "Ich zeige, dass mein Wissen Leben rettet und nicht zum Schaden gedacht ist.", hooks: ["handwerk","glaube"] },
          { title: "ein Leiden für immer besiegen", description: "Ich will die Krankheit auslöschen, an der zu viele gestorben sind.", hooks: ["handwerk","macht"] },
        ]
      },
      {
        text: "Weber des Lebens", hooks: ["handwerk","magie"],
        powerTags: [
          { text: "geheime Techniken", hooks: ["handwerk","geheimnis"] },
          { text: "vollbringt das Unmögliche", hooks: ["handwerk","schicksal"] },
          { text: "kennt die Seele des Materials", hooks: ["handwerk","magie"] },
          { text: "Technik für jede Umgebung", hooks: ["handwerk","natur"] },
          { text: "formt was lebendig ist", hooks: ["handwerk","magie"] },
        ],
        weaknessTags: [
          { text: "Geisel der eigenen Größe", hooks: ["macht","verlust"] },
          { text: "gefürchtet wie gerühmt", hooks: ["magie","außenseiter"] },
        ],
        quests: [
          { title: "die Welt mit meiner Kunst verändern", description: "Mein Werk soll etwas öffnen, das zuvor unmöglich schien.", hooks: ["handwerk","magie"] },
          { title: "die Grenze des Erschaffbaren", description: "Ich will herausfinden, wo das Weben des Lebens an seine Schranke stößt.", hooks: ["handwerk","geheimnis"] },
        ]
      },
      {
        text: "letzte ihrer Schule", hooks: ["handwerk","verlust"],
        powerTags: [
          { text: "Technik ohne Namen", hooks: ["handwerk","schicksal"] },
          { text: "kennt die Geschichte des Fachs", hooks: ["handwerk","wissen"] },
          { text: "geheime Techniken", hooks: ["handwerk","geheimnis"] },
          { text: "meisterhafte Kontrolle", hooks: ["handwerk"] },
          { text: "trägt ein verlorenes Erbe", hooks: ["handwerk","verlust"] },
        ],
        weaknessTags: [
          { text: "niemand auf ihrer Ebene", hooks: ["verlust"] },
          { text: "letzte Hüterin des Wissens", hooks: ["verlust","geheimnis"] },
        ],
        quests: [
          { title: "retten was von meiner Schule bleibt", description: "Ich bin die Letzte, die es noch weiß, und ich gebe es nicht dem Vergessen preis.", hooks: ["handwerk","verlust"] },
          { title: "das Werk meines Lehrers vollenden", description: "Er starb mit halbfertiger Hand und ich bringe es zu Ende, als wären es seine.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "Meisterin der verbotenen Kunst", hooks: ["handwerk","geheimnis"],
        powerTags: [
          { text: "geheime Techniken", hooks: ["handwerk","geheimnis"] },
          { text: "Technik ohne Namen", hooks: ["handwerk","schicksal"] },
          { text: "vollbringt das Unmögliche", hooks: ["handwerk","schicksal"] },
          { text: "kennt jede Variante", hooks: ["handwerk","wissen"] },
          { text: "wirkt was andere fürchten", hooks: ["handwerk","magie"] },
        ],
        weaknessTags: [
          { text: "von Hütern gejagt", hooks: ["geheimnis","macht"] },
          { text: "gefürchtet wie gerühmt", hooks: ["geheimnis","außenseiter"] },
          { text: "Ruhm zieht Feinde an", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "die letzte verbotene Technik", description: "Es gibt eine, die mir noch fehlt, und ich spüre, wo sie verborgen liegt.", hooks: ["handwerk","geheimnis"] },
          { title: "Kunst ohne Krieg", description: "Ich beweise, dass selbst die gefürchtete Kunst dem Guten dienen kann.", hooks: ["handwerk","glaube"] },
        ]
      },
      {
        text: "Lehrmeisterin ohne Schüler", hooks: ["handwerk","wissen"],
        powerTags: [
          { text: "lehrt mit einem Blick", hooks: ["handwerk","wissen"] },
          { text: "andere Meister suchen Rat", hooks: ["handwerk","wissen"] },
          { text: "kennt die Geschichte des Fachs", hooks: ["handwerk","wissen"] },
          { text: "erkennt ungeahnte Fehler", hooks: ["handwerk","wissen"] },
          { text: "veredelt fremdes Werk", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "niemand auf ihrer Ebene", hooks: ["verlust"] },
          { text: "erträgt kein Mittelmaß", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "meine Kunst weitergeben", description: "Was ich kann, ist zu kostbar, um mit mir zu sterben, und ich finde den Würdigen.", hooks: ["handwerk","wissen"] },
          { title: "einen würdigen Erben finden", description: "Ich suche den einen Schüler, der das Erbe wirklich tragen kann.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "Legende zu Lebzeiten", hooks: ["handwerk","schicksal"],
        powerTags: [
          { text: "gilt als Legende", hooks: ["handwerk","schicksal"] },
          { text: "ihr Ruf öffnet Türen", hooks: ["handwerk","macht"] },
          { text: "Werkstatt mit eigenem Namen", hooks: ["handwerk","macht"] },
          { text: "vollbringt das Unmögliche", hooks: ["handwerk","schicksal"] },
          { text: "Schüler aus aller Welt", hooks: ["handwerk","wissen"] },
        ],
        weaknessTags: [
          { text: "Geisel der eigenen Größe", hooks: ["macht","verlust"] },
          { text: "gefährdet durch Neid", hooks: ["stadt"] },
          { text: "Ruhm zieht Feinde an", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "dem Mythos gerecht werden", description: "Die Geschichten über mich sind groß und ich muss beweisen, dass ich sie verdiene.", hooks: ["handwerk","schicksal"] },
          { title: "die Welt mit meiner Kunst verändern", description: "Mein Ruf soll mehr bewirken als Bewunderung, er soll etwas verschieben.", hooks: ["handwerk","macht"] },
        ]
      },
      {
        text: "vollendete Navigatorin", hooks: ["handwerk","fahrend"],
        powerTags: [
          { text: "Technik für jede Umgebung", hooks: ["handwerk","natur"] },
          { text: "kennt jede Variante", hooks: ["handwerk","wissen"] },
          { text: "meisterhafte Kontrolle", hooks: ["handwerk"] },
          { text: "findet jeden Weg", hooks: ["handwerk","fahrend"] },
          { text: "liest Himmel und Strömung", hooks: ["handwerk","natur"] },
        ],
        weaknessTags: [
          { text: "erwartet zu hohe Standards", hooks: ["handwerk"] },
          { text: "niemand auf ihrer Ebene", hooks: ["verlust"] },
        ],
        quests: [
          { title: "die letzte unkartierte Route", description: "Es gibt einen Weg, den noch keiner befuhr, und ich werde der Erste sein.", hooks: ["handwerk","fahrend"] },
          { title: "meine Kunst weitergeben", description: "Ich will mein Wissen vom Kurs an die nächste Generation übergeben.", hooks: ["handwerk","wissen"] },
        ]
      },
      {
        text: "Großmeisterin der Gilde", hooks: ["handwerk","macht"],
        powerTags: [
          { text: "Werkstatt mit eigenem Namen", hooks: ["handwerk","macht"] },
          { text: "ihr Ruf öffnet Türen", hooks: ["handwerk","macht"] },
          { text: "Schüler aus aller Welt", hooks: ["handwerk","wissen"] },
          { text: "beherrscht verwandte Disziplinen", hooks: ["handwerk"] },
          { text: "setzt den Maßstab des Fachs", hooks: ["handwerk","macht"] },
        ],
        weaknessTags: [
          { text: "gefährdet durch Neid", hooks: ["stadt"] },
          { text: "Geisel der eigenen Größe", hooks: ["macht","verlust"] },
          { text: "Rivalen um den Vorsitz", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "die Gilde vereinen", description: "Ich will alle Meister meines Fachs unter einem Banner zusammenführen.", hooks: ["handwerk","macht"] },
          { title: "meine Kunst weitergeben", description: "Ich öffne die Gilde für Würdige und gebe mein Wissen ungeschmälert weiter.", hooks: ["handwerk","wissen"] },
        ]
      },
    ]
  },
  "Monstrosity": {
    type: "Greatness",
    titles: [
      {
        text: "Drachenwurm", hooks: ["schicksal","natur","macht"],
        powerTags: [
          { text: "Atem aus Feuer und Eis", hooks: ["kampf","magie"] },
          { text: "unverletzbare Schuppenhaut", hooks: ["kampf","schicksal"] },
          { text: "Flügelschlag wie Sturm", hooks: ["natur","macht"] },
          { text: "gehüteter Goldhort", hooks: ["macht","geheimnis"] },
        ],
        weaknessTags: [
          { text: "eine verwundbare Stelle", hooks: ["kampf","geheimnis"] },
          { text: "begehrte Jagdtrophäe", hooks: ["kampf","außenseiter"] },
        ],
        quests: [
          { title: "der letzte Drachentöter", description: "Ich finde den, der meinesgleichen ausrottet, bevor er mich findet.", hooks: ["kampf","verlust"] },
          { title: "Hort über alles", description: "Ich verteidige meinen Schatz gegen jeden Dieb und jede Armee.", hooks: ["macht","natur"] },
        ]
      },
      {
        text: "Sturmtitan", hooks: ["schicksal","natur","macht"],
        powerTags: [
          { text: "rufe Stürme", hooks: ["magie","natur"] },
          { text: "verändert das Wetter", hooks: ["natur","schicksal"] },
          { text: "erschütternder Donnerschrei", hooks: ["macht","kampf"] },
          { text: "gigantische Schritte", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "zu groß für die Menschenwelt", hooks: ["außenseiter","natur"] },
          { text: "löst überall Panik aus", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "Zorn am Himmel", description: "Ich entfessle ein Unwetter über jenen, die mein Reich entweiht haben.", hooks: ["natur","macht"] },
          { title: "Ruhe finden", description: "Ich lerne, meine tobenden Kräfte zu zügeln, bevor sie alles fortreißen.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "Nebelhydra", hooks: ["schicksal","natur","geheimnis"],
        powerTags: [
          { text: "viele wachsame Köpfe", hooks: ["kampf","natur"] },
          { text: "nachwachsende Glieder", hooks: ["schicksal","kampf"] },
          { text: "verschleiernder Nebel", hooks: ["geheimnis","magie"] },
          { text: "tödliches Gift", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "eine verwundbare Stelle", hooks: ["kampf","geheimnis"] },
          { text: "an Sumpf und Wasser gebunden", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "Herr des Sumpfes", description: "Ich treibe jeden Eindringling aus meinem nebligen Revier.", hooks: ["natur","kampf"] },
          { title: "niemals enthauptet", description: "Ich finde heraus, wie man meinen letzten Kopf wirklich tötet, bevor sie es tun.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "das Größenwesen aus dem See", hooks: ["natur","schicksal","geheimnis"],
        powerTags: [
          { text: "enorme Größe", hooks: ["natur","macht"] },
          { text: "lautlos unter Wasser", hooks: ["geheimnis","natur"] },
          { text: "reißende Strudel", hooks: ["natur","kampf"] },
          { text: "uralter Seegrund als Versteck", hooks: ["geheimnis","schicksal"] },
        ],
        weaknessTags: [
          { text: "an die Tiefe gebunden", hooks: ["natur","außenseiter"] },
          { text: "begehrte Jagdtrophäe", hooks: ["kampf","außenseiter"] },
        ],
        quests: [
          { title: "Legende bleiben", description: "Ich bleibe ein Gerücht und zeige mich nie ganz dem Tageslicht.", hooks: ["geheimnis","natur"] },
          { title: "der trockengelegte See", description: "Ich verhindere, dass Menschen mein Gewässer zerstören und mich entblößen.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "der Wandelnde Wald", hooks: ["natur","schicksal","magie"],
        powerTags: [
          { text: "Sprache der Erde", hooks: ["magie","natur","geheimnis"] },
          { text: "Tiere dienen ihm", hooks: ["natur","macht"] },
          { text: "wuchernde Wurzeln und Ranken", hooks: ["natur","kampf"] },
          { text: "verschluckt von Dickicht", hooks: ["natur","geheimnis"] },
        ],
        weaknessTags: [
          { text: "langsam und schwerfällig", hooks: ["natur","verlust"] },
          { text: "verwundbar durch Feuer", hooks: ["kampf","natur"] },
        ],
        quests: [
          { title: "Hüter des alten Hains", description: "Ich bewahre den letzten Urwald vor Axt und Brand.", hooks: ["natur","glaube"] },
          { title: "wachsen ohne Ende", description: "Ich breite mein lebendiges Reich über das verödete Land aus.", hooks: ["natur","macht"] },
        ]
      },
      {
        text: "Urblut aus dem Gebirge", hooks: ["natur","schicksal","macht"],
        powerTags: [
          { text: "übermächtige Stärke", hooks: ["kampf","macht"] },
          { text: "Haut aus Fels und Erz", hooks: ["natur","kampf"] },
          { text: "baumfällender Schwanz", hooks: ["natur","kampf"] },
          { text: "Herr des eigenen Reviers", hooks: ["natur","macht"] },
        ],
        weaknessTags: [
          { text: "fern der Berge geschwächt", hooks: ["natur","verlust"] },
          { text: "zu groß für die Menschenwelt", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "die geschändeten Gipfel", description: "Ich vertreibe die Bergleute, die mein uraltes Gestein aufbrechen.", hooks: ["natur","kampf"] },
          { title: "ältestes Blut", description: "Ich suche nach Spuren der Urwesen, von denen ich abstamme.", hooks: ["schicksal","geheimnis"] },
        ]
      },
      {
        text: "das letzte seiner Art", hooks: ["außenseiter","verlust","schicksal"],
        powerTags: [
          { text: "altert nicht", hooks: ["schicksal","wissen"] },
          { text: "Wissen vergangener Zeitalter", hooks: ["wissen","verlust"] },
          { text: "unergründlicher Blick", hooks: ["geheimnis","schicksal"] },
          { text: "übersteht jede Wunde", hooks: ["schicksal","kampf"] },
        ],
        weaknessTags: [
          { text: "endlose Einsamkeit", hooks: ["außenseiter","verlust"] },
          { text: "begehrte Jagdtrophäe", hooks: ["kampf","außenseiter"] },
        ],
        quests: [
          { title: "ich finde meinesgleichen", description: "Ich suche, ob irgendwo noch ein anderer meiner Art überlebt hat.", hooks: ["außenseiter","verlust"] },
          { title: "letztes Erbe", description: "Ich finde jemanden, dem ich das Vermächtnis meiner Art anvertrauen kann.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "sterblicher Rest eines Gottes", hooks: ["glaube","schicksal","verlust"],
        powerTags: [
          { text: "Aura der Furcht", hooks: ["magie","macht"] },
          { text: "Blut jenseits aller Magie", hooks: ["magie","geheimnis"] },
          { text: "Gläubige beten mich an", hooks: ["glaube","macht"] },
          { text: "Funke göttlicher Macht", hooks: ["magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "verblassende Göttlichkeit", hooks: ["verlust","schicksal"] },
          { text: "an den alten Namen gebunden", hooks: ["magie","geheimnis"] },
        ],
        quests: [
          { title: "verlorene Göttlichkeit", description: "Ich suche einen Weg, meine schwindende göttliche Macht zurückzugewinnen.", hooks: ["glaube","verlust"] },
          { title: "letzte Anbeter", description: "Ich bewahre meinen letzten Kult vor dem Vergessen.", hooks: ["glaube","schicksal"] },
        ]
      },
      {
        text: "das Schlafende unter dem Eis", hooks: ["geheimnis","schicksal","verlust"],
        powerTags: [
          { text: "sein Schlaf formt die Welt", hooks: ["schicksal","magie"] },
          { text: "Träume reichen in die Ferne", hooks: ["magie","geheimnis"] },
          { text: "eisige Kälte umgibt mich", hooks: ["natur","magie"] },
          { text: "erwacht mit unermesslicher Kraft", hooks: ["macht","kampf"] },
        ],
        weaknessTags: [
          { text: "fällt in unkontrollierbaren Schlaf", hooks: ["schicksal","verlust"] },
          { text: "verwundbar im Erwachen", hooks: ["kampf","geheimnis"] },
        ],
        quests: [
          { title: "nicht geweckt werden", description: "Ich verhindere, dass Narren mich vor der Zeit aus dem Eis brechen.", hooks: ["geheimnis","schicksal"] },
          { title: "die Stunde des Erwachens", description: "Ich erfahre, welches Zeichen mein endgültiges Erwachen verkündet.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "Titan des Vergessenen Zeitalters", hooks: ["verlust","schicksal","wissen"],
        powerTags: [
          { text: "übermächtige Stärke", hooks: ["kampf","macht"] },
          { text: "der Zeit entrückt", hooks: ["schicksal","magie"] },
          { text: "Wissen einer toten Welt", hooks: ["wissen","verlust"] },
          { text: "erschütternder Schrei", hooks: ["macht","kampf"] },
        ],
        weaknessTags: [
          { text: "fremd in dieser Zeit", hooks: ["außenseiter","verlust"] },
          { text: "gebunden an alte Riten", hooks: ["glaube","schicksal"] },
        ],
        quests: [
          { title: "untergegangene Welt", description: "Ich suche nach dem, was von meinem Zeitalter noch übrig ist.", hooks: ["verlust","wissen"] },
          { title: "ich überdauere", description: "Ich harre aus, bis die Welt Wesen wie mich wieder braucht.", hooks: ["schicksal","glaube"] },
        ]
      },
      {
        text: "Wächter der Schwelle", hooks: ["glaube","geheimnis","schicksal"],
        powerTags: [
          { text: "Schreckenskreis um mich", hooks: ["macht","kampf"] },
          { text: "spürt den Tod auf Meilen", hooks: ["schicksal","geheimnis"] },
          { text: "lässt niemanden vorbei", hooks: ["kampf","glaube"] },
          { text: "kennt das Rätsel der Pforte", hooks: ["geheimnis","wissen"] },
        ],
        weaknessTags: [
          { text: "an die Schwelle gebunden", hooks: ["glaube","verlust"] },
          { text: "muss jedem Pakt gehorchen", hooks: ["magie","schicksal"] },
        ],
        quests: [
          { title: "ewige Wache", description: "Ich halte das Tor verschlossen, was auch immer hindurch will.", hooks: ["glaube","kampf"] },
          { title: "von der Pflicht erlöst", description: "Ich suche einen Nachfolger, der meine endlose Wacht übernimmt.", hooks: ["glaube","verlust"] },
        ]
      },
      {
        text: "der Verschlinger aus der Tiefe", hooks: ["natur","schicksal","macht"],
        powerTags: [
          { text: "unstillbarer Hunger", hooks: ["schicksal","natur"] },
          { text: "zermalmende Schlünde", hooks: ["kampf","natur"] },
          { text: "Diener gehorchen mir", hooks: ["macht"] },
          { text: "schrumpft auf Menschengröße", hooks: ["geheimnis","magie"] },
        ],
        weaknessTags: [
          { text: "der Hunger übermannt mich", hooks: ["natur","verlust"] },
          { text: "löst überall Panik aus", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "den Hunger zähmen", description: "Ich finde einen Weg, meinen alles fressenden Trieb zu beherrschen.", hooks: ["natur","verlust"] },
          { title: "unter Menschen wandeln", description: "Ich lebe verkleinert unter Sterblichen, ohne mein wahres Wesen zu verraten.", hooks: ["geheimnis","außenseiter"] },
        ]
      },
    ]
  },
  "Companion": {
    type: "Variable Might",
    titles: [
      {
        text: "Schwertbande", hooks: ["kampf","fahrend"],
        powerTags: [
          { text: "Bande Schwertkämpfer", hooks: ["kampf"] },
          { text: "Schulter an Schulter", hooks: ["kampf","glaube"] },
          { text: "gehorcht jedem Befehl", hooks: ["glaube","macht"] },
          { text: "hält die Klingenlinie", hooks: ["kampf"] },
          { text: "reist als Trupp", hooks: ["fahrend","kampf"] },
        ],
        weaknessTags: [
          { text: "lärmig und unbeherrscht", hooks: ["kampf","außenseiter"] },
          { text: "verlangt Sold", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Auftrag zu zweit gemeistert", description: "Was wir uns vorgenommen haben, schaffen wir nur als Trupp gemeinsam.", hooks: ["glaube","fahrend"] },
          { title: "die Bande zusammenhalten", description: "Ich sorge dafür, dass meine Schwertbande nicht auseinanderbricht.", hooks: ["kampf","verlust"] },
        ]
      },
      {
        text: "imposanter Wolfshund", hooks: ["natur","kampf"],
        powerTags: [
          { text: "treuer Wolfshund", hooks: ["natur","kampf"] },
          { text: "unfehlbare Spürnase", hooks: ["natur"] },
          { text: "rettet mich im Notfall", hooks: ["glaube","kampf"] },
          { text: "schlafloser Wächter", hooks: ["glaube","kampf"] },
        ],
        weaknessTags: [
          { text: "gerät leicht in Gefahr", hooks: ["natur","verlust"] },
          { text: "beschützt nur mich", hooks: ["glaube","natur"] },
        ],
        quests: [
          { title: "meinen Hund beschützen", description: "Ohne diesen Gefährten an meiner Seite geht es für mich nicht weiter.", hooks: ["glaube","kampf"] },
          { title: "die Witterung verfolgen", description: "Ich folge der Spur, die nur seine Nase aufnehmen kann.", hooks: ["natur","fahrend"] },
        ]
      },
      {
        text: "Schutzgeist", hooks: ["magie","schicksal"],
        powerTags: [
          { text: "unsichtbarer Schutzgeist", hooks: ["magie","geheimnis"] },
          { text: "spürt feindliche Absichten", hooks: ["geheimnis","schicksal"] },
          { text: "flüstert Warnungen", hooks: ["geheimnis","magie"] },
          { text: "wendet das Unglück ab", hooks: ["magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "an mein Schicksal gebunden", hooks: ["schicksal","magie"] },
          { text: "schweigt im falschen Moment", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "den Geist verstehen", description: "Ich will begreifen, warum dieser Geist über mich wacht.", hooks: ["geheimnis","schicksal"] },
          { title: "seinen letzten Willen erfüllen", description: "Der Geist bleibt nur, bis eine alte Sache geklärt ist.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "frecher Pixie", hooks: ["magie","natur"],
        powerTags: [
          { text: "Ablenkung mit Verve", hooks: ["stadt","natur"] },
          { text: "zerstreut die Wache", hooks: ["stadt"] },
          { text: "versteckt sich und beobachtet", hooks: ["geheimnis","natur"] },
          { text: "kleiner Zauberstreich", hooks: ["magie","natur"] },
        ],
        weaknessTags: [
          { text: "handelt ungefragt falsch", hooks: ["natur","kampf"] },
          { text: "stiftet ständig Unfug", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "den Pixie zähmen", description: "Ich lerne, seine Streiche in nützliche Bahnen zu lenken.", hooks: ["magie","natur"] },
          { title: "sein Versprechen einlösen", description: "Der Pixie schuldet mir einen Gefallen aus der Feenwelt.", hooks: ["magie","geheimnis"] },
        ]
      },
      {
        text: "Falke meiner Mutter", hooks: ["natur","verlust"],
        powerTags: [
          { text: "späht aus der Höhe", hooks: ["natur"] },
          { text: "bringt das Gesuchte", hooks: ["natur","glaube"] },
          { text: "findet den Weg zurück", hooks: ["natur","fahrend"] },
          { text: "Erbe meiner Mutter", hooks: ["verlust","glaube"] },
        ],
        weaknessTags: [
          { text: "letztes Andenken", hooks: ["verlust","natur"] },
          { text: "scheu vor Fremden", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "das Vermächtnis ehren", description: "Mit dem Falken halte ich die Erinnerung an meine Mutter wach.", hooks: ["verlust","glaube"] },
          { title: "den Falken heimbringen", description: "Ich bringe ihn dorthin zurück, wo meine Mutter ihn einst hielt.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "beschworener Geist", hooks: ["magie","geheimnis"],
        powerTags: [
          { text: "erscheint auf Ruf", hooks: ["magie","geheimnis"] },
          { text: "kennt verborgenes Wissen", hooks: ["wissen","geheimnis"] },
          { text: "durchschreitet Wände", hooks: ["magie","geheimnis"] },
          { text: "dient dem Pakt", hooks: ["magie","macht"] },
        ],
        weaknessTags: [
          { text: "fordert seinen Preis", hooks: ["magie","verlust"] },
          { text: "deutet den Pakt eigenwillig", hooks: ["geheimnis","schicksal"] },
        ],
        quests: [
          { title: "den Pakt erfüllen", description: "Der Geist dient nur, solange ich meinen Teil der Abmachung halte.", hooks: ["magie","macht"] },
          { title: "den wahren Namen finden", description: "Wer den Namen des Geistes kennt, gebietet wirklich über ihn.", hooks: ["geheimnis","wissen"] },
        ]
      },
      {
        text: "treuer alter Strolch", hooks: ["außenseiter","fahrend"],
        powerTags: [
          { text: "kennt jede Gasse", hooks: ["stadt","außenseiter"] },
          { text: "schmuggelt Botschaften", hooks: ["geheimnis","stadt"] },
          { text: "findet überall Unterschlupf", hooks: ["fahrend","außenseiter"] },
          { text: "steht treu zu mir", hooks: ["glaube","außenseiter"] },
        ],
        weaknessTags: [
          { text: "überall verrufen", hooks: ["außenseiter","verlust"] },
          { text: "alte Knochen", hooks: ["verlust","außenseiter"] },
        ],
        quests: [
          { title: "den alten Freund würdigen", description: "Dieser zerlumpte Gefährte hat mehr Treue als jeder Edelmann.", hooks: ["außenseiter","glaube"] },
          { title: "ein letztes Abenteuer", description: "Wir beide ziehen noch einmal hinaus, ehe seine Tage enden.", hooks: ["fahrend","verlust"] },
        ]
      },
      {
        text: "stummer Wächter", hooks: ["glaube","geheimnis"],
        powerTags: [
          { text: "versteht meine Zeichen", hooks: ["glaube","geheimnis"] },
          { text: "hält stets Wache", hooks: ["glaube","kampf"] },
          { text: "unverbrüchliche Treue", hooks: ["glaube"] },
          { text: "verrät kein Wort", hooks: ["geheimnis","glaube"] },
        ],
        weaknessTags: [
          { text: "kann nicht sprechen", hooks: ["geheimnis","verlust"] },
          { text: "missverstanden von anderen", hooks: ["außenseiter","geheimnis"] },
        ],
        quests: [
          { title: "sein Schweigen ehren", description: "Der Wächter bewahrt ein Geheimnis, das nie über seine Lippen kommt.", hooks: ["geheimnis","glaube"] },
          { title: "ihm eine Stimme geben", description: "Ich finde heraus, warum mein Wächter verstummt ist.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "Geist des Hauses", hooks: ["geheimnis","magie"],
        powerTags: [
          { text: "kennt jeden Winkel", hooks: ["geheimnis","wissen"] },
          { text: "hütet alte Mauern", hooks: ["magie","geheimnis"] },
          { text: "verbirgt mich im Gemäuer", hooks: ["geheimnis","magie"] },
          { text: "weckt mich vor Eindringlingen", hooks: ["geheimnis","glaube"] },
        ],
        weaknessTags: [
          { text: "an das Haus gebunden", hooks: ["geheimnis","verlust"] },
          { text: "erträgt keine Fremden", hooks: ["außenseiter","magie"] },
        ],
        quests: [
          { title: "das Haus bewahren", description: "Solange das Gemäuer steht, hat der Geist eine Heimat.", hooks: ["geheimnis","magie"] },
          { title: "den Hausgeist erlösen", description: "Ich finde heraus, was ihn an diese Mauern fesselt.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "wilde Katze mit Verstand", hooks: ["natur","schicksal"],
        powerTags: [
          { text: "handelt eigenständig", hooks: ["schicksal","natur"] },
          { text: "läuft schneller als mein Pferd", hooks: ["natur","fahrend"] },
          { text: "schleicht lautlos", hooks: ["natur","geheimnis"] },
          { text: "durchschaut die Lage", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "folgt eigenem Willen", hooks: ["natur","schicksal"] },
          { text: "verschwindet nach Lust", hooks: ["natur","verlust"] },
        ],
        quests: [
          { title: "ihr Vertrauen verdienen", description: "Diese Katze bleibt nur, solange sie es selbst will.", hooks: ["natur","schicksal"] },
          { title: "ihrem Instinkt folgen", description: "Wohin sie mich führt, dort liegt oft die Antwort.", hooks: ["schicksal","natur"] },
        ]
      },
      {
        text: "Veteranenbande ohne Hauptmann", hooks: ["kampf","verlust"],
        powerTags: [
          { text: "erprobte Kämpfer", hooks: ["kampf"] },
          { text: "kennt jede Schlachtordnung", hooks: ["kampf","wissen"] },
          { text: "hält die Stellung", hooks: ["kampf","glaube"] },
          { text: "alte Waffenbrüder", hooks: ["kampf","verlust"] },
        ],
        weaknessTags: [
          { text: "führerlos und zerstritten", hooks: ["kampf","verlust"] },
          { text: "von alten Wunden gezeichnet", hooks: ["verlust","kampf"] },
        ],
        quests: [
          { title: "die Bande anführen", description: "Diese Veteranen suchen einen Hauptmann, und ich will es werden.", hooks: ["kampf","macht"] },
          { title: "einen letzten Feldzug beenden", description: "Der Krieg ließ ihren Auftrag unvollendet, und wir vollenden ihn.", hooks: ["kampf","verlust"] },
        ]
      },
      {
        text: "Elementargeist auf Probe", hooks: ["magie","schicksal"],
        powerTags: [
          { text: "entfacht Feuer", hooks: ["magie","natur"] },
          { text: "bändigt Wind und Welle", hooks: ["magie","natur"] },
          { text: "roher Urgewalt", hooks: ["magie","macht"] },
          { text: "prüft meinen Willen", hooks: ["schicksal","magie"] },
        ],
        weaknessTags: [
          { text: "noch nicht gebunden", hooks: ["magie","schicksal"] },
          { text: "entgleitet bei Schwäche", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "die Probe bestehen", description: "Der Elementargeist bleibt nur, wenn ich seiner würdig bin.", hooks: ["magie","schicksal"] },
          { title: "den Pakt besiegeln", description: "Ich will den Geist dauerhaft an mich binden.", hooks: ["magie","macht"] },
        ]
      },
    ]
  },
  "Magic": {
    type: "Variable Might",
    titles: [
      {
        text: "Hexe der Wälder", hooks: ["magie","natur"],
        powerTags: [
          { text: "der Wald antwortet ihr", hooks: ["magie","natur"] },
          { text: "Heilkräuter und Salben", hooks: ["magie","natur"] },
          { text: "verwandelt sich in Tier", hooks: ["magie","natur"] },
          { text: "spricht mit Geistern", hooks: ["magie","geheimnis","natur"] },
        ],
        weaknessTags: [
          { text: "gehasst und gehetzt", hooks: ["außenseiter","magie"] },
          { text: "verlangt einen Preis", hooks: ["magie","schicksal"] },
        ],
        quests: [
          { title: "Hüterin des alten Hains", description: "Ich beschütze den Wald, der mir meine Kraft gab, vor jeder Axt und jedem Feuer.", hooks: ["natur","magie"] },
          { title: "kein Fluch sondern Gabe", description: "Ich beweise den Dörflern, dass meine Waldmagie sie nicht verflucht sondern bewahrt.", hooks: ["magie","außenseiter"] },
        ]
      },
      {
        text: "Sturmrufer", hooks: ["magie","natur"],
        powerTags: [
          { text: "lenkt die Winde", hooks: ["magie","natur"] },
          { text: "ruft den Donner", hooks: ["magie","natur"] },
          { text: "liest die Wolken", hooks: ["magie","wissen","natur"] },
          { text: "verflucht den Feind", hooks: ["magie","kampf"] },
        ],
        weaknessTags: [
          { text: "der Sturm gehorcht selten ganz", hooks: ["magie","schicksal"] },
          { text: "erschöpft durch Magie", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "den Sturm bändigen", description: "Ich lerne, das Unwetter zu lenken, bevor es mir entgleitet und Unschuldige trifft.", hooks: ["magie","natur"] },
          { title: "Rache des Himmels", description: "Ich rufe das Wetter gegen jene herab, die mein Land verwüstet haben.", hooks: ["natur","kampf","verlust"] },
        ]
      },
      {
        text: "Heiler der Götter", hooks: ["magie","glaube"],
        powerTags: [
          { text: "heilende Hände", hooks: ["magie","glaube"] },
          { text: "segnet die Verbündeten", hooks: ["magie","glaube"] },
          { text: "tröstendes Licht", hooks: ["magie","glaube"] },
          { text: "uralte Schutzzauber", hooks: ["magie","glaube"] },
        ],
        weaknessTags: [
          { text: "der Körper zahlt den Preis", hooks: ["magie","verlust"] },
          { text: "kann keinen Leidenden abweisen", hooks: ["glaube","magie"] },
        ],
        quests: [
          { title: "würdige Hände", description: "Ich nutze die mir geschenkte Heilkraft nur für jene, die ihrer wirklich würdig sind.", hooks: ["magie","glaube"] },
          { title: "Gunst der Götter halten", description: "Ich bleibe der Gottheit treu, deren Segen mir das Heilen erst möglich macht.", hooks: ["glaube","magie"] },
        ]
      },
      {
        text: "Bannerin der Geister", hooks: ["magie","geheimnis"],
        powerTags: [
          { text: "spricht mit Geistern", hooks: ["magie","geheimnis"] },
          { text: "Bannkreis ziehen", hooks: ["magie","geheimnis"] },
          { text: "beschwört kleine Wesen", hooks: ["magie","geheimnis"] },
          { text: "sieht durch Schleier", hooks: ["magie","geheimnis"] },
        ],
        weaknessTags: [
          { text: "zieht gefährliche Aufmerksamkeit", hooks: ["magie","schicksal"] },
          { text: "die Toten verlangen Antwort", hooks: ["magie","geheimnis","verlust"] },
        ],
        quests: [
          { title: "ruhelose Seelen erlösen", description: "Ich helfe den gefangenen Geistern, endlich Frieden und ihren Weg zu finden.", hooks: ["geheimnis","magie","verlust"] },
          { title: "den Schleier wahren", description: "Ich sorge dafür, dass die Grenze zwischen Lebenden und Toten geschlossen bleibt.", hooks: ["magie","geheimnis"] },
        ]
      },
      {
        text: "rituelle Zauberin", hooks: ["magie","handwerk"],
        powerTags: [
          { text: "kleines Zauberwerk", hooks: ["magie","handwerk"] },
          { text: "hext Dinge in Bewegung", hooks: ["magie","handwerk"] },
          { text: "kennt die Regeln der Magie", hooks: ["magie","wissen"] },
          { text: "spricht alte Worte", hooks: ["magie","wissen"] },
        ],
        weaknessTags: [
          { text: "ein Ritual braucht Zeit", hooks: ["magie","handwerk"] },
          { text: "unkontrollierbare Nebenwirkungen", hooks: ["magie","geheimnis"] },
        ],
        quests: [
          { title: "das vollkommene Ritual", description: "Ich vollende den Zauber, an dem schon meine Lehrmeister gescheitert sind.", hooks: ["magie","handwerk"] },
          { title: "Wissen weitergeben", description: "Ich finde eine Schülerin, der ich meine Ritualkunst anvertrauen kann.", hooks: ["magie","wissen","handwerk"] },
        ]
      },
      {
        text: "Alchemistin", hooks: ["magie","handwerk","wissen"],
        powerTags: [
          { text: "braut starke Tränke", hooks: ["magie","handwerk"] },
          { text: "Heilkräuter und Salben", hooks: ["magie","natur"] },
          { text: "Magieeisen erkennen", hooks: ["magie","wissen"] },
          { text: "kennt verborgene Wirkstoffe", hooks: ["magie","wissen","handwerk"] },
        ],
        weaknessTags: [
          { text: "ohne Werkstatt hilflos", hooks: ["handwerk","magie"] },
          { text: "der Körper zahlt den Preis", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "die wandelnde Formel", description: "Ich suche das Rezept, das gewöhnliche Stoffe in etwas Wunderbares verwandelt.", hooks: ["magie","wissen","handwerk"] },
          { title: "Gegengift für die Pest", description: "Ich braue das Mittel, das eine Krankheit stillen kann, die ganze Dörfer auslöscht.", hooks: ["magie","handwerk","natur"] },
        ]
      },
      {
        text: "Runenschreiberin", hooks: ["magie","wissen"],
        powerTags: [
          { text: "schreibt mächtige Runen", hooks: ["magie","wissen"] },
          { text: "liest Magie aus Objekten", hooks: ["magie","wissen"] },
          { text: "uralte Schutzzauber", hooks: ["magie","glaube"] },
          { text: "spricht alte Worte", hooks: ["magie","wissen"] },
        ],
        weaknessTags: [
          { text: "für andere unlesbar", hooks: ["magie","geheimnis"] },
          { text: "eine falsche Rune zerstört alles", hooks: ["magie","wissen"] },
        ],
        quests: [
          { title: "die verlorene Rune", description: "Ich suche das eine Zeichen, dessen Macht seit Generationen vergessen ist.", hooks: ["magie","wissen","geheimnis"] },
          { title: "unzerstörbarer Bann", description: "Ich ritze die Runen, die einen Ort für immer vor dem Bösen schützen.", hooks: ["magie","glaube"] },
        ]
      },
      {
        text: "Beschwörerin des Wassers", hooks: ["magie","natur"],
        powerTags: [
          { text: "ruft die Flut", hooks: ["magie","natur"] },
          { text: "spricht mit den Tiefen", hooks: ["magie","natur","geheimnis"] },
          { text: "Grenze von Magie und Natur", hooks: ["magie","natur"] },
          { text: "heilende Quellen finden", hooks: ["magie","natur"] },
        ],
        weaknessTags: [
          { text: "machtlos fern vom Wasser", hooks: ["magie","natur"] },
          { text: "verlangt einen Preis", hooks: ["magie","schicksal"] },
        ],
        quests: [
          { title: "die versiegte Quelle", description: "Ich bringe das Wasser dorthin zurück, wo das Land verdorrt ist.", hooks: ["natur","magie"] },
          { title: "Pakt mit den Tiefen", description: "Ich erfülle das Versprechen, das ich den Wesen unter den Wellen gab.", hooks: ["magie","geheimnis","schicksal"] },
        ]
      },
      {
        text: "Traumwirkerin", hooks: ["magie","schicksal"],
        powerTags: [
          { text: "flüstert in die Träume", hooks: ["magie","geheimnis"] },
          { text: "biegt den Zufall", hooks: ["magie","schicksal"] },
          { text: "sieht durch Schleier", hooks: ["magie","geheimnis"] },
          { text: "deutet Vorzeichen", hooks: ["magie","schicksal","wissen"] },
        ],
        weaknessTags: [
          { text: "verliert sich im Schlaf", hooks: ["magie","schicksal"] },
          { text: "zieht gefährliche Aufmerksamkeit", hooks: ["magie","schicksal"] },
        ],
        quests: [
          { title: "der Traum hinter dem Traum", description: "Ich folge der Vision, die mich seit Jahren in jeder Nacht heimsucht.", hooks: ["magie","schicksal","geheimnis"] },
          { title: "den Albträumen ein Ende", description: "Ich befreie einen Schläfer von dem Schrecken, der seine Nächte vergiftet.", hooks: ["magie","geheimnis"] },
        ]
      },
      {
        text: "Zauberin des Übergangs", hooks: ["magie","geheimnis"],
        powerTags: [
          { text: "öffnet verschlossene Wege", hooks: ["magie","geheimnis"] },
          { text: "schreitet durch Schwellen", hooks: ["magie","fahrend"] },
          { text: "sieht verborgene Verbindungen", hooks: ["magie","geheimnis"] },
          { text: "hebt Flüche", hooks: ["magie","geheimnis"] },
        ],
        weaknessTags: [
          { text: "etwas folgt durch die Tür", hooks: ["magie","geheimnis","schicksal"] },
          { text: "verlangt einen Preis", hooks: ["magie","schicksal"] },
        ],
        quests: [
          { title: "das versiegelte Tor", description: "Ich verschließe für immer den Übergang, den ich unbedacht geöffnet habe.", hooks: ["magie","geheimnis"] },
          { title: "Weg zwischen den Welten", description: "Ich finde den Pfad, der in das Reich jenseits unseres führt.", hooks: ["magie","fahrend","geheimnis"] },
        ]
      },
      {
        text: "Hüterin des Gleichgewichts", hooks: ["magie","natur"],
        powerTags: [
          { text: "hebt Flüche", hooks: ["magie","geheimnis"] },
          { text: "Grenze von Magie und Natur", hooks: ["magie","natur"] },
          { text: "spürt gestörte Ordnung", hooks: ["magie","natur","wissen"] },
          { text: "uralte Schutzzauber", hooks: ["magie","glaube"] },
        ],
        weaknessTags: [
          { text: "darf keine Seite ergreifen", hooks: ["magie","glaube"] },
          { text: "erschöpft durch Magie", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "die gestörte Ordnung", description: "Ich finde die Wurzel des Ungleichgewichts, das die Welt aus dem Lot bringt.", hooks: ["magie","natur","schicksal"] },
          { title: "weder Licht noch Schatten", description: "Ich wahre das Gleichgewicht, auch wenn beide Seiten mich dafür hassen.", hooks: ["magie","glaube","natur"] },
        ]
      },
      {
        text: "Sprecherin der vergessenen Sprache", hooks: ["magie","wissen"],
        powerTags: [
          { text: "spricht alte Worte", hooks: ["magie","wissen"] },
          { text: "liest fremde Magie", hooks: ["magie","wissen"] },
          { text: "kennt die Regeln der Magie", hooks: ["magie","wissen"] },
          { text: "Worte mit roher Macht", hooks: ["magie","macht"] },
        ],
        weaknessTags: [
          { text: "vergisst Zauber nach dem Wirken", hooks: ["magie","wissen"] },
          { text: "ein Wort zu viel", hooks: ["magie","schicksal"] },
        ],
        quests: [
          { title: "die letzte verlorene Silbe", description: "Ich suche das fehlende Wort, das die uralte Sprache wieder vollständig macht.", hooks: ["magie","wissen","verlust"] },
          { title: "zu gefährlich zu bewahren", description: "Ich tilge das Wissen, dessen Worte die Welt zerreißen könnten.", hooks: ["magie","wissen","geheimnis"] },
        ]
      },
    ]
  },
  "Possessions": {
    type: "Variable Might",
    titles: [
      {
        text: "handgefertigte Panflöte", hooks: ["handwerk","fahrend"],
        powerTags: [
          { text: "seelenbewegende Weise", hooks: ["fahrend","handwerk"] },
          { text: "selbst geschnitztes Rohr", hooks: ["handwerk","natur"] },
          { text: "lockt Lauscher an", hooks: ["fahrend","stadt"] },
          { text: "stets griffbereit am Gürtel", hooks: ["handwerk","fahrend"] },
        ],
        weaknessTags: [
          { text: "zerbrechliches Holz", hooks: ["handwerk","verlust"] },
          { text: "verrät meine Anwesenheit", hooks: ["geheimnis","fahrend"] },
        ],
        quests: [
          { title: "Ich spiele die verlorene Melodie wieder", description: "Eine Weise meiner Kindheit ist mir entfallen und ich werde nicht ruhen bis ich sie zurückgewinne.", hooks: ["fahrend","verlust"] },
          { title: "Ich vollende mein Meisterstück", description: "Ich verbessere die Flöte bis ihr Klang vollkommen rein ist.", hooks: ["handwerk"] },
        ]
      },
      {
        text: "verborgene Dolche", hooks: ["geheimnis","kampf"],
        powerTags: [
          { text: "stets eine versteckte Waffe", hooks: ["geheimnis","kampf"] },
          { text: "blitzschnell gezogen", hooks: ["kampf","handwerk"] },
          { text: "unter dem Mantel getragen", hooks: ["geheimnis","kampf"] },
          { text: "trifft im Dunkeln", hooks: ["kampf","geheimnis"] },
        ],
        weaknessTags: [
          { text: "verdächtig bei Leibesvisitation", hooks: ["geheimnis","stadt"] },
          { text: "taugt nur aus der Nähe", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "Ich bewahre meine Klingen geheim", description: "Niemand soll wissen wie viele Dolche ich wirklich trage.", hooks: ["geheimnis","kampf"] },
          { title: "Ich räche mit verborgenem Stahl", description: "Eine alte Schuld werde ich mit der Klinge begleichen die niemand kommen sieht.", hooks: ["kampf","verlust"] },
        ]
      },
      {
        text: "Pferd und Rüstung", hooks: ["kampf","fahrend"],
        powerTags: [
          { text: "gehorsames Pferd", hooks: ["fahrend","natur"] },
          { text: "gut gewartete Rüstung", hooks: ["kampf","handwerk"] },
          { text: "sturmreife Reiterattacke", hooks: ["kampf","fahrend"] },
          { text: "unermüdlich im Sattel", hooks: ["fahrend","kampf"] },
        ],
        weaknessTags: [
          { text: "schwerfällig zu Fuß", hooks: ["kampf","verlust"] },
          { text: "das Pferd braucht Pflege", hooks: ["natur","handwerk"] },
        ],
        quests: [
          { title: "Ich beschütze mein treues Ross", description: "Mein Pferd trug mich durch jede Schlacht und ich lasse es niemals zurück.", hooks: ["fahrend","glaube"] },
          { title: "Ich erringe Ruhm zu Pferde", description: "Im offenen Feld will ich beweisen was ein Reiter vermag.", hooks: ["kampf","macht"] },
        ]
      },
      {
        text: "Brief des Fürsten", hooks: ["adel","geheimnis"],
        powerTags: [
          { text: "Brief mit Siegel", hooks: ["adel","macht"] },
          { text: "öffnet verschlossene Tore", hooks: ["adel","macht"] },
          { text: "Recht auf Audienz", hooks: ["adel","macht"] },
          { text: "hochfürstliche Gunst", hooks: ["adel","geheimnis"] },
        ],
        weaknessTags: [
          { text: "begehrt von Spionen", hooks: ["geheimnis","stadt"] },
          { text: "bindet an fremde Befehle", hooks: ["adel","macht"] },
        ],
        quests: [
          { title: "Ich überbringe den Brief sicher", description: "Was im Siegel ruht muss seinen Empfänger erreichen koste es was es wolle.", hooks: ["adel","fahrend"] },
          { title: "Ich lese die wahre Botschaft", description: "Hinter den höflichen Worten verbirgt sich ein Geheimnis das ich entschlüsseln will.", hooks: ["geheimnis","adel"] },
        ]
      },
      {
        text: "Kette aus Gold", hooks: ["adel","macht"],
        powerTags: [
          { text: "wertvoller Schmuck", hooks: ["adel"] },
          { text: "Gold öffnet Türen", hooks: ["macht","stadt"] },
          { text: "verleiht edles Ansehen", hooks: ["adel","macht"] },
          { text: "jederzeit zu Geld gemacht", hooks: ["stadt","macht"] },
        ],
        weaknessTags: [
          { text: "auffällig im Wert", hooks: ["adel","stadt"] },
          { text: "verletzlich gegen Diebe", hooks: ["stadt"] },
        ],
        quests: [
          { title: "Ich kaufe mir einen Platz im Adel", description: "Mit diesem Gold erkaufe ich mir die Stellung die mir die Geburt verwehrte.", hooks: ["adel","macht"] },
          { title: "Ich gebe das Gold gerecht aus", description: "Was mir zufiel gehört nicht mir allein und ich teile es mit den Bedürftigen.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "mein Werkzeugkasten", hooks: ["handwerk"],
        powerTags: [
          { text: "Werkzeug für jeden Fall", hooks: ["handwerk"] },
          { text: "repariert Unbrauchbares", hooks: ["handwerk"] },
          { text: "hat immer ein Ersatzteil", hooks: ["handwerk","fahrend"] },
          { text: "stets einsatzbereit", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "hilflos ohne den Besitz", hooks: ["handwerk","verlust"] },
          { text: "schwer zu schleppen", hooks: ["handwerk","fahrend"] },
        ],
        quests: [
          { title: "Ich verbessere mein Werkzeug stetig", description: "Was ich besitze ist Teil von mir und soll werden was es sein kann.", hooks: ["handwerk"] },
          { title: "Ich repariere das Unmögliche", description: "Man sagt es sei nicht zu retten doch meine Hände beweisen das Gegenteil.", hooks: ["handwerk","schicksal"] },
        ]
      },
      {
        text: "Truhe mit fremden Münzen", hooks: ["fahrend","geheimnis"],
        powerTags: [
          { text: "Truhe mit Wertsachen", hooks: ["macht"] },
          { text: "kennt jeden Wert genau", hooks: ["stadt","handwerk"] },
          { text: "handelt mit Gewinn", hooks: ["stadt"] },
          { text: "Münzen aus fernen Reichen", hooks: ["fahrend","geheimnis"] },
        ],
        weaknessTags: [
          { text: "begehrt von anderen", hooks: ["geheimnis","stadt"] },
          { text: "verschwenderisch im Überfluss", hooks: ["stadt"] },
        ],
        quests: [
          { title: "Ich enträtsle die Herkunft der Münzen", description: "Die fremden Prägungen erzählen eine Geschichte die ich verstehen will.", hooks: ["geheimnis","fahrend"] },
          { title: "Ich mehre den Schatz durch Handel", description: "Was in der Truhe liegt soll wachsen durch geschickten Tausch.", hooks: ["stadt","macht"] },
        ]
      },
      {
        text: "geerbt und zu groß", hooks: ["adel","verlust"],
        powerTags: [
          { text: "verziertes Wams", hooks: ["adel"] },
          { text: "trägt einen ehrwürdigen Namen", hooks: ["adel","verlust"] },
          { text: "alte Pracht beeindruckt noch", hooks: ["adel","macht"] },
          { text: "Erbe längst vergangener Größe", hooks: ["adel","verlust"] },
        ],
        weaknessTags: [
          { text: "unbequem und schlecht sitzend", hooks: ["adel","verlust"] },
          { text: "erinnert an Verlust", hooks: ["verlust"] },
        ],
        quests: [
          { title: "Ich werde dem Erbe würdig", description: "Was mir hinterlassen wurde ist mir zu groß und ich will hineinwachsen.", hooks: ["adel","verlust"] },
          { title: "Ich behalte das Erbstück um jeden Preis", description: "Es ist alles was mir von denen vor mir blieb und ich gebe es nicht her.", hooks: ["adel","glaube"] },
        ]
      },
      {
        text: "Ausrüstung der toten Kompanie", hooks: ["kampf","verlust"],
        powerTags: [
          { text: "gut gewartete Kampfausrüstung", hooks: ["kampf","handwerk"] },
          { text: "Banner der gefallenen Truppe", hooks: ["kampf","verlust"] },
          { text: "kennt jeden Kniff der Veteranen", hooks: ["kampf","wissen"] },
          { text: "Stahl mit Schlachtenehre", hooks: ["kampf","glaube"] },
        ],
        weaknessTags: [
          { text: "verfolgt von ihren Feinden", hooks: ["kampf","verlust"] },
          { text: "lastet schwer auf der Seele", hooks: ["verlust","glaube"] },
        ],
        quests: [
          { title: "Ich ehre die gefallenen Gefährten", description: "Ihre Waffen tragen heißt ihr Andenken weiterzutragen.", hooks: ["kampf","verlust"] },
          { title: "Ich vollende ihren letzten Auftrag", description: "Was die Kompanie nicht zu Ende brachte führe ich für sie zum Schluss.", hooks: ["kampf","glaube"] },
        ]
      },
      {
        text: "Karte mit Geheimnissen", hooks: ["fahrend","geheimnis"],
        powerTags: [
          { text: "Reisekarten", hooks: ["fahrend"] },
          { text: "zeigt verborgene Wege", hooks: ["fahrend","geheimnis"] },
          { text: "markierte Schätze", hooks: ["geheimnis","macht"] },
          { text: "führt durch jedes Land", hooks: ["fahrend","wissen"] },
        ],
        weaknessTags: [
          { text: "begehrt von anderen", hooks: ["geheimnis","stadt"] },
          { text: "unvollständig und verschlüsselt", hooks: ["geheimnis","wissen"] },
        ],
        quests: [
          { title: "Ich finde was die Karte verbirgt", description: "Die markierten Zeichen führen zu etwas und ich werde es aufspüren.", hooks: ["fahrend","geheimnis"] },
          { title: "Ich entschlüssele die letzten Zeichen", description: "Teile der Karte bleiben rätselhaft und ich will sie endlich deuten.", hooks: ["geheimnis","wissen"] },
        ]
      },
      {
        text: "letztes Stück Heimat", hooks: ["verlust","fahrend"],
        powerTags: [
          { text: "erinnert an bessere Tage", hooks: ["verlust","fahrend"] },
          { text: "spendet Trost in der Fremde", hooks: ["verlust","glaube"] },
          { text: "verbindet mit den Meinen", hooks: ["fahrend","glaube"] },
          { text: "weckt vertraute Kraft", hooks: ["verlust","natur"] },
        ],
        weaknessTags: [
          { text: "Bindung an einen Ort", hooks: ["natur","verlust"] },
          { text: "unersetzlich wenn verloren", hooks: ["verlust","handwerk"] },
        ],
        quests: [
          { title: "Ich kehre einst nach Hause zurück", description: "Dieses kleine Stück hält die Erinnerung wach bis ich den Weg zurück finde.", hooks: ["fahrend","verlust"] },
          { title: "Ich bewahre die Heimat in der Fremde", description: "Solange ich es bei mir trage bin ich nie ganz fort von daheim.", hooks: ["verlust","glaube"] },
        ]
      },
      {
        text: "Nachlass eines Verschollenen", hooks: ["fahrend","verlust","geheimnis"],
        powerTags: [
          { text: "Aufzeichnungen des Vermissten", hooks: ["geheimnis","wissen"] },
          { text: "getarnter Reisemantel", hooks: ["geheimnis","fahrend"] },
          { text: "unerwartete Hinterlassenschaft", hooks: ["fahrend","verlust"] },
          { text: "Spuren einer letzten Reise", hooks: ["fahrend","geheimnis"] },
        ],
        weaknessTags: [
          { text: "weckt fremde Feinde", hooks: ["geheimnis","verlust"] },
          { text: "rätselhaft und unvollständig", hooks: ["geheimnis","wissen"] },
        ],
        quests: [
          { title: "Ich kläre das Schicksal des Verschollenen", description: "Was mit ihm geschah liegt im Dunkeln und ich werde die Wahrheit ans Licht bringen.", hooks: ["geheimnis","verlust"] },
          { title: "Ich vollende seine letzte Reise", description: "Wohin er nicht mehr gelangte will ich an seiner statt gelangen.", hooks: ["fahrend","verlust"] },
        ]
      },
    ]
  },
};

const TYPE_TO_THEMEBOOKS = {
  'Origin': ['Circumstance', 'Devotion', 'Past', 'People', 'Personality', 'Skill or Trade', 'Trait'],
  'Adventure': ['Duty', 'Influence', 'Knowledge', 'Prodigious Ability', 'Relic', 'Uncanny Being'],
  'Greatness': ['Destiny', 'Dominion', 'Mastery', 'Monstrosity'],
  'Variable Might': ['Companion', 'Magic', 'Possessions']
};

const PHASES = [
  {
    id: 1, title: 'Stimmung & Welt', eyebrow: 'Phase 1 von 4',
    cards: [
      { title: 'Ein Hof am Waldrand bei Nebel', text: 'Stille zwischen den Bäumen, Rauch über dem Dach.', affinities: { 'Skill or Trade': 2, 'People': 1, 'Past': 1, 'Companion': 1 }, hooks: ['ländlich','wildnis','ruhig'] },
      { title: 'Eine zerstörte Burg, in der noch jemand wohnt', text: 'Die Mauern sind alt, aber der Rauch ist frisch.', affinities: { 'Past': 2, 'Circumstance': 2, 'Relic': 1, 'Dominion': 1 }, hooks: ['düster','vergangenheit','geheimnis'] },
      { title: 'Marktplatz, Geschrei, Diebesfinger', text: 'Das Leben drängt, der Geldbeutel ist leichter geworden.', affinities: { 'Skill or Trade': 2, 'Personality': 2, 'Influence': 1, 'Circumstance': 1 }, hooks: ['stadt','gewitzt','sozial'] },
      { title: 'Ein Buch, das niemand lesen sollte', text: 'Tinte, die sich noch bewegt. Die Seiten sind warm.', affinities: { 'Knowledge': 3, 'Magic': 1, 'Relic': 1, 'Past': 1 }, hooks: ['verboten','wissen','magisch'] },
      { title: 'Ein Schwur am Sterbebett', text: 'Hand auf dem fiebrigen Brustkorb, Worte, die binden.', affinities: { 'Devotion': 3, 'Duty': 2, 'Past': 1 }, hooks: ['eid','pflicht','schmerz'] },
      { title: 'Die offene Straße im Morgenlicht', text: 'Hinter mir die Heimat, vor mir das Unbekannte.', affinities: { 'Past': 2, 'Knowledge': 1, 'Personality': 1, 'Circumstance': 1 }, hooks: ['wanderer','frei','aufbruch'] },
      { title: 'Eine alte Schmiede mit Funkenflug', text: 'Jeder Hammerschlag hallt durch das Tal.', affinities: { 'Skill or Trade': 3, 'Mastery': 1, 'Possessions': 1 }, hooks: ['handwerk','feuer'] },
      { title: 'Ein Saal voll mit Adligen', text: 'Worte werden hier gewogen wie Gold und sind oft tödlicher.', affinities: { 'Circumstance': 2, 'Influence': 2, 'Personality': 1, 'Dominion': 1 }, hooks: ['hof','intrige','sozial'] },
      { title: 'Ein Kreis aus Kerzen, mitten in der Nacht', text: 'Die Schatten zucken im Takt einer fremden Sprache.', affinities: { 'Magic': 3, 'Knowledge': 1, 'Devotion': 1, 'Relic': 1 }, hooks: ['ritual','magisch','geheim'] }
    ]
  },
  {
    id: 2, title: 'Herkunft & Hintergrund', eyebrow: 'Phase 2 von 4',
    cards: [
      { title: 'Aus einer alten Familie mit Geheimnissen', text: 'Mein Name öffnet Türen und schließt andere für immer.', affinities: { 'People': 2, 'Past': 2, 'Circumstance': 1 }, hooks: ['adel','erbe','geheimnis'] },
      { title: 'Aufgewachsen unter Fremden', text: 'Niemand wusste, wer ich wirklich war. Vielleicht ich auch nicht.', affinities: { 'Past': 3, 'Circumstance': 1, 'Personality': 1 }, hooks: ['außenseiter','geheimnis'] },
      { title: 'Im Krieg verloren, im Frieden nicht heimisch', text: 'Ich kenne die Schlachtfelder besser als die Marktplätze.', affinities: { 'Past': 3, 'Duty': 1, 'Circumstance': 1 }, hooks: ['veteran','trauma','soldat'] },
      { title: 'Der einzige Überlebende meines Dorfes', text: 'Ich trage die Asche der Meinen mit mir. Niemand sonst tut es.', affinities: { 'Past': 3, 'People': 1, 'Devotion': 1 }, hooks: ['verlust','erinnerung'] },
      { title: 'Geboren in Reichtum, alles verloren', text: 'Heute kenne ich den Preis von Brot. Damals nicht.', affinities: { 'Circumstance': 3, 'Past': 1, 'Personality': 1 }, hooks: ['gefallen','adel'] },
      { title: 'Meine Familie übte ein Handwerk seit Generationen', text: 'Ich kannte den Geruch der Werkstatt, bevor ich laufen konnte.', affinities: { 'Skill or Trade': 3, 'People': 1, 'Possessions': 1 }, hooks: ['handwerk','tradition'] },
      { title: 'Adelige Erziehung, eigene Wege', text: 'Sie haben mir alles beigebracht, außer wer ich sein will.', affinities: { 'Circumstance': 2, 'Personality': 2, 'Knowledge': 1, 'Influence': 1 }, hooks: ['adel','rebellion'] },
      { title: 'Aufgewachsen mit ungewöhnlichen Lehrern', text: 'Was sie mir beibrachten, lernt man nicht in den Städten.', affinities: { 'Knowledge': 2, 'People': 1, 'Magic': 2 }, hooks: ['gelehrt','ungewöhnlich'] },
      { title: 'Ein Versprechen, das alles veränderte', text: 'Ein einziges Wort, gesagt zur falschen Zeit. Oder zur richtigen.', affinities: { 'Devotion': 3, 'Duty': 2 }, hooks: ['eid','wendepunkt'] },
      { title: 'Ich war nie wie die anderen', text: 'Schon als Kind wusste ich es. Andere wussten es auch.', affinities: { 'Trait': 3, 'Personality': 1, 'Uncanny Being': 1 }, hooks: ['anders','besonders'] }
    ]
  },
  {
    id: 3, title: 'Können & Wesen', eyebrow: 'Phase 3 von 4',
    cards: [
      { title: 'Ein altes Schwert, das nur ich führen kann', text: 'Es kennt meine Hand. Niemand sonst kann es heben.', affinities: { 'Relic': 3, 'Possessions': 1, 'Past': 1 }, hooks: ['relikt','waffe','erbe'] },
      { title: 'Ich verstehe, was Tiere sagen', text: 'Sie haben Geschichten. Manche sind Warnungen.', affinities: { 'Magic': 2, 'Trait': 1, 'Companion': 2, 'Uncanny Being': 1 }, hooks: ['tiere','magie','trait'] },
      { title: 'Ich lüge so gut, dass es manchmal wahr wird', text: 'Worte sind weicher als Stahl und schneiden tiefer.', affinities: { 'Skill or Trade': 2, 'Personality': 2, 'Influence': 1 }, hooks: ['list','sozial'] },
      { title: 'Ich kann Wunden flicken, die andere für tödlich halten', text: 'Hände, die wissen, wo der Faden hin muss.', affinities: { 'Skill or Trade': 2, 'Knowledge': 2, 'Magic': 1, 'Devotion': 1 }, hooks: ['heilung','handwerk'] },
      { title: 'Ich bin schneller, als jemand wie ich sein dürfte', text: 'Niemand sieht den Schritt kommen, der mich rettet.', affinities: { 'Trait': 3, 'Prodigious Ability': 2 }, hooks: ['gabe','gewandt'] },
      { title: 'Eine Magie, die ich nicht ganz beherrsche', text: 'Manchmal hilft sie. Manchmal lässt sie mich allein.', affinities: { 'Magic': 3, 'Uncanny Being': 1, 'Past': 1 }, hooks: ['magie','wild'] },
      { title: 'Ein Wesen, das mir folgt und mir gehört', text: 'Ich bin nicht allein, auch wenn es niemand sieht.', affinities: { 'Companion': 3, 'Magic': 1, 'Uncanny Being': 1 }, hooks: ['begleiter','geist'] },
      { title: 'Wissen über Dinge, die andere fürchten', text: 'Ich weiß, was im Schatten lauert. Sie wissen es nicht.', affinities: { 'Knowledge': 3, 'Past': 1, 'Magic': 1 }, hooks: ['gelehrt','dunkel'] },
      { title: 'Eine Bestimmung, die mir vorausgesagt wurde', text: 'Eine alte Frau sah es. Ich habe es lange nicht geglaubt.', affinities: { 'Destiny': 3, 'Past': 1 }, hooks: ['schicksal','prophezeiung'] },
      { title: 'Ich bin etwas anderes als ein Mensch', text: 'Mein Blut weiß es. Mein Spiegelbild auch.', affinities: { 'Uncanny Being': 3, 'Trait': 1, 'Monstrosity': 1 }, hooks: ['nicht-mensch','magisch'] }
    ]
  },
  {
    id: 4, title: 'Antrieb & Verwundbarkeit', eyebrow: 'Phase 4 von 4',
    cards: [
      { title: 'Ich suche jemanden, den ich verloren habe', text: 'Sein/ihr Name ist mein erstes Wort beim Aufwachen.', affinities: { 'Devotion': 2, 'Past': 2, 'Duty': 1 }, hooks: ['quest:suchen','liebe','vermisst'] },
      { title: 'Ich will herausfinden, was ich wirklich bin', text: 'Es gibt eine Antwort. Ich hoffe, ich kann mit ihr leben.', affinities: { 'Past': 2, 'Uncanny Being': 1, 'Trait': 1, 'Destiny': 1 }, hooks: ['quest:identität'] },
      { title: 'Ich vertraue niemandem mehr', text: 'Einmal war einmal zu oft.', affinities: { 'Personality': 2, 'Past': 2 }, hooks: ['weakness:misstrauen'] },
      { title: 'Mein Stolz ist mein größtes Problem', text: 'Ich weiß es. Und tue trotzdem nichts dagegen.', affinities: { 'Personality': 2, 'Mastery': 1, 'Circumstance': 1 }, hooks: ['weakness:stolz'] },
      { title: 'Ich habe einen Schwur zu erfüllen', text: 'Worte, die ich nicht zurücknehmen kann. Ich will es auch nicht.', affinities: { 'Devotion': 2, 'Duty': 3 }, hooks: ['quest:eid'] },
      { title: 'Ich will gegen ein Unrecht kämpfen', text: 'Solange es steht, schlafe ich nicht ruhig.', affinities: { 'Duty': 2, 'Devotion': 2, 'Influence': 1 }, hooks: ['quest:gerechtigkeit'] },
      { title: 'Ich habe eine Schuld zu begleichen', text: 'Sie steht in mir wie ein Stein. Eines Tages werfe ich ihn.', affinities: { 'Past': 3, 'Duty': 1 }, hooks: ['quest:schuld'] },
      { title: 'Ich will herausfinden, was hinter dem Nebel liegt', text: 'Andere drehen um. Ich gehe weiter.', affinities: { 'Knowledge': 2, 'Past': 1, 'Destiny': 1, 'Personality': 1 }, hooks: ['quest:erkenntnis'] }
    ]
  }
];
