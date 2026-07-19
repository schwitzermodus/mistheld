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

export const THEMEBOOKS = {
  "Circumstance": {
    type: "Origin",
    titles: [
      {
        text: "gefallener Adel", hooks: ["adel","verlust"],
        powerTags: [
          { text: "standesgemäße Kleidung", hooks: ["adel"] },
          { text: "Hofmanieren", hooks: ["adel"] },
          { text: "Standesvorrecht", hooks: ["adel","macht"] },
          { text: "gebildet", hooks: ["wissen","adel"] },
          { text: "gefälschtes Siegel", hooks: ["adel","geheimnis"] },
        ],
        weaknessTags: [
          { text: "alter Hochmut", hooks: ["adel"] },
          { text: "verfluchter Name", hooks: ["adel","verlust"] },
          { text: "drückende Schulden", hooks: ["verlust","stadt"] },
        ],
        quests: [
          { title: "Ich werde meinen alten Namen wiederherstellen.", description: "Einst trug er ein Wappen, das Türen öffnete und Köpfe neigte; nun liegt es im Schmutz, beschwert von einem verfluchten Namen und drückenden Schulden. Hofmanieren und standesgemäße Kleidung sind ihm geblieben, doch sie genügen nicht. Erst wenn der Name wieder glänzt, findet er Frieden mit dem, was er war.", hooks: ["adel","verlust"] },
          { title: "Ich finde heraus, wer mich verriet.", description: "Drei kannten das Geheimnis, das ihn zu Fall brachte, und zwei davon schwören, geschwiegen zu haben. Auf dem Schuldbrief, der alles besiegelte, prangt ein Wappen, das es nicht geben dürfte. Wer immer es führte, kannte ihn gut genug, um zu wissen, wo es am meisten schmerzt.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "flüchtiger Außenseiter", hooks: ["außenseiter","fahrend"],
        powerTags: [
          { text: "unauffällig", hooks: ["außenseiter","geheimnis"] },
          { text: "findet Unterschlupf", hooks: ["fahrend","stadt"] },
          { text: "kennt Schleichwege", hooks: ["stadt"] },
          { text: "falsche Namen", hooks: ["außenseiter","geheimnis"] },
        ],
        weaknessTags: [
          { text: "gejagt", hooks: ["macht","verlust"] },
          { text: "bekanntes Gesicht", hooks: ["geheimnis","verlust"] },
          { text: "mancherorts verboten", hooks: ["außenseiter","geheimnis"] },
        ],
        quests: [
          { title: "Ich finde einen Ort der Freiheit.", description: "Es heißt, hinter den Grenzsteinen des Nordens fragt niemand nach Namen. Vielleicht ist das nur ein Märchen für Gehetzte. Aber irgendjemand hat es ihm zugeflüstert, als er es am nötigsten brauchte, und seither folgt er diesem Flüstern.", hooks: ["außenseiter","fahrend"] },
          { title: "Ich entkomme meinen Verfolgern endgültig.", description: "Wer ihn jagt, gibt nicht auf: dieselbe Silhouette taucht in jeder Stadt wieder auf, immer einen Tag zu spät oder einen zu früh. Laufen allein wird nicht reichen. Irgendwann muss er sich umdrehen und die Jagd beenden, auf seine Weise und an einem Ort seiner Wahl.", hooks: ["außenseiter","verlust"] },
        ]
      },
      {
        text: "Raufbold", hooks: ["stadt","kampf"],
        powerTags: [
          { text: "scharfe Zunge", hooks: ["stadt"] },
          { text: "Sprache der Straße", hooks: ["stadt","außenseiter"] },
          { text: "ruhig in der Krise", hooks: ["stadt"] },
          { text: "fester Schlag", hooks: ["kampf","stadt"] },
          { text: "loyale Leute", hooks: ["glaube","stadt"] },
        ],
        weaknessTags: [
          { text: "jähzornig", hooks: ["kampf"] },
          { text: "rechtlos", hooks: ["außenseiter","macht"] },
          { text: "drückende Schulden", hooks: ["verlust","stadt"] },
        ],
        quests: [
          { title: "Ich zeige ihnen, dass ich mehr bin als meine Fäuste.", description: "Im Viertel erzählt man sich, wie tief er einmal gefallen ist, und keiner glaubt, dass einer wie er wieder aufsteht. Er kennt die Blicke, das Getuschel, die vorschnellen Urteile. Eines Tages werden genau diese Leute seinen Namen mit Respekt aussprechen, und darauf arbeitet er hin.", hooks: ["außenseiter","verlust"] },
          { title: "Ich schütze die Meinen mit der Faust.", description: "Wo er herkommt, klopft keine Wache an, wenn nachts geschrien wird. Es gibt eine Handvoll Menschen, für die er ohne Zögern durch jede Tür geht. Wehe dem, der einem von ihnen ein Haar krümmt, und einer hat es kürzlich versucht.", hooks: ["kampf","stadt"] },
        ]
      },
      {
        text: "einsamer Schänkengast", hooks: ["außenseiter","stadt"],
        powerTags: [
          { text: "hört Gerüchte zuerst", hooks: ["stadt","geheimnis"] },
          { text: "stiller Beobachter", hooks: ["geheimnis"] },
          { text: "kennt jeden im Ort", hooks: ["stadt"] },
          { text: "durchschaut Masken", hooks: ["stadt","wissen"] },
          { text: "vergisst kein Gesicht", hooks: ["wissen","stadt"] },
        ],
        weaknessTags: [
          { text: "Außenseiter", hooks: ["außenseiter"] },
          { text: "misstrauisch", hooks: ["außenseiter","verlust"] },
          { text: "drückende Schulden", hooks: ["verlust","stadt"] },
        ],
        quests: [
          { title: "Ich lasse nicht zu, dass sie mich vergessen.", description: "Er hat halbe Leben an diesem Ecktisch verbracht, und doch würde morgen niemand seinen Stuhl vermissen. Aber er weiß Dinge über dieses Dorf, die nicht einmal der Vogt ahnt. Eines Abends wird er aufstehen und sie alle daran erinnern, dass der Mann am Rand die Mitte längst durchschaut hat.", hooks: ["macht","verlust"] },
          { title: "Ich finde Anschluss, ohne mich zu verlieren.", description: "Einmal hat er jemanden an seinen Tisch gelassen, und es hat ihn Jahre gekostet. Trotzdem wandert sein Blick jeden Abend zu den vollen Tischen, wo gelacht wird. Vielleicht gibt es einen Weg zurück unter Menschen, der nicht damit endet, dass man ihn wieder ausnimmt.", hooks: ["außenseiter","stadt"] },
        ]
      },
      {
        text: "verlorenes Erbe", hooks: ["adel","verlust"],
        powerTags: [
          { text: "gefälschtes Siegel", hooks: ["adel","geheimnis"] },
          { text: "kennt dunkle Geheimnisse", hooks: ["geheimnis","stadt"] },
          { text: "alte Urkunden", hooks: ["adel","wissen"] },
          { text: "Hofmanieren", hooks: ["adel"] },
        ],
        weaknessTags: [
          { text: "verfluchter Name", hooks: ["adel","verlust"] },
          { text: "bekanntes Gesicht", hooks: ["geheimnis","verlust"] },
          { text: "alter Hochmut", hooks: ["adel"] },
        ],
        quests: [
          { title: "Ich fordere mein Erbe zurück.", description: "Auf dem Gut, das ihm gehörte, brennt abends Licht, und ein Fremder nennt sich bei seinem Namen. Die Urkunde, die alles beweisen könnte, wurde dreigeteilt, und ein Teil liegt angeblich bei einem Toten. Er wird alle drei finden, und dann steht er wieder vor seiner eigenen Tür.", hooks: ["adel","verlust"] },
          { title: "Ich finde heraus, wer mich verriet.", description: "Der Raub war zu sauber für Fremde: Wer immer ihn beging, kannte das Versteck der Papiere und den Wochentag, an dem niemand im Haus war. Die Liste derer, die beides wussten, ist kurz, und jeder Name darauf tut weh.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "Stimme des Volkes", hooks: ["macht","stadt"],
        powerTags: [
          { text: "Fürsprecher der Schwachen", hooks: ["glaube","macht"] },
          { text: "mitreißende Worte", hooks: ["macht","stadt"] },
          { text: "beruhigende Stimme", hooks: ["stadt"] },
          { text: "loyale Leute", hooks: ["glaube","stadt"] },
        ],
        weaknessTags: [
          { text: "Zielscheibe der Obrigkeit", hooks: ["macht","verlust"] },
          { text: "kann nicht nein sagen", hooks: ["glaube"] },
          { text: "rechtlos", hooks: ["außenseiter","macht"] },
        ],
        quests: [
          { title: "Ich helfe denen, die niemand hört.", description: "Als das Hochwasser kam, entschied ein Federstrich im Amtshaus, wessen Felder geflutet wurden, und niemand fragte die, die dort lebten. Solche Federstriche geschehen jeden Tag. Er hat sich geschworen, dass keiner mehr fällt, ohne dass wenigstens eine Stimme laut dagegen spricht.", hooks: ["macht","stadt"] },
          { title: "Ich lasse nicht zu, dass sie uns vergessen.", description: "In der Hauptstadt existiert sein Landstrich nur als Zahl in einem Steuerbuch. Er will, dass die feinen Herren die Namen kennen, die hinter der Zahl stehen. Notfalls trägt er jeden einzelnen persönlich bis vor die höchsten Tore.", hooks: ["macht","verlust"] },
        ]
      },
      {
        text: "verbannter Ritter", hooks: ["adel","außenseiter"],
        powerTags: [
          { text: "geübtes Schwert", hooks: ["kampf","adel"] },
          { text: "alte Rüstung", hooks: ["kampf","adel"] },
          { text: "eiserne Disziplin", hooks: ["kampf","glaube"] },
          { text: "Hofmanieren", hooks: ["adel"] },
        ],
        weaknessTags: [
          { text: "verfluchter Name", hooks: ["adel","verlust"] },
          { text: "alter Hochmut", hooks: ["adel"] },
          { text: "geächtet", hooks: ["außenseiter","macht"] },
        ],
        quests: [
          { title: "Ich beweise meine Unschuld.", description: "Der einzige Zeuge jener Nacht verschwand, bevor er sprechen konnte, und mit ihm ein Brief mit doppeltem Siegel. Irgendwo lebt jemand, der die Wahrheit kennt und schweigt, aus Angst oder für Gold. Er wird ihn finden, und sei es am anderen Ende des Reichs.", hooks: ["adel","verlust"] },
          { title: "Ich verdiene meine Ehre zurück.", description: "Das Urteil kann nur widerrufen, wer es sprach, und der alte Fürst empfängt keine Verbannten. Aber es gibt Taten, an denen selbst ein Fürst nicht vorbeisehen kann. Er sucht auf jeder Straße nach der einen Gelegenheit, die schwerer wiegt als sein Bann.", hooks: ["adel","kampf"] },
        ]
      },
      {
        text: "Tochter des Schmieds", hooks: ["handwerk"],
        powerTags: [
          { text: "schmiedekundig", hooks: ["handwerk"] },
          { text: "kennt guten Stahl", hooks: ["handwerk","wissen"] },
          { text: "starke Arme", hooks: ["handwerk","kampf"] },
          { text: "kennt jeden im Ort", hooks: ["stadt"] },
        ],
        weaknessTags: [
          { text: "geschundene Hände", hooks: ["verlust","handwerk"] },
          { text: "drückende Schulden", hooks: ["verlust","stadt"] },
          { text: "kennt nur die Werkstatt", hooks: ["handwerk","außenseiter"] },
        ],
        quests: [
          { title: "Ich schmiede mir meinen eigenen Namen.", description: "Solange sie denken kann, sagt man „die Tochter vom Schmied“, als wäre sie ein Anhängsel des Ambosses. Ihr Meisterstück soll eines Tages ein Zeichen tragen, das nur ihr gehört. Bis dahin nimmt sie jede Arbeit an, die sie dem eigenen Zeichen näherbringt.", hooks: ["handwerk","außenseiter"] },
          { title: "Ich führe das Werk meines Vaters fort.", description: "Sein Hammer liegt jetzt in ihrem Bündel. Wo immer sie ein Feuer und einen Amboss findet, schlägt sie Stücke, wie er sie sie gelehrt hat, und nennt seinen Namen dazu. Solange irgendwo ihr Hammer klingt, ist sein Werk nicht zu Ende.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "fahrende Händlerin", hooks: ["fahrend","stadt"],
        powerTags: [
          { text: "geschickte Feilscherin", hooks: ["stadt","fahrend"] },
          { text: "hört Gerüchte zuerst", hooks: ["stadt","geheimnis"] },
          { text: "kennt Schleichwege", hooks: ["stadt"] },
          { text: "durchschaut Masken", hooks: ["stadt","wissen"] },
          { text: "findet Unterschlupf", hooks: ["fahrend","stadt"] },
        ],
        weaknessTags: [
          { text: "drückende Schulden", hooks: ["verlust","stadt"] },
          { text: "überall fremd", hooks: ["fahrend","außenseiter"] },
          { text: "mancherorts verboten", hooks: ["außenseiter","geheimnis"] },
        ],
        quests: [
          { title: "Ich zahle jede Schuld zurück.", description: "Die Liste ihrer Gläubiger ist kurz, aber ein Name darauf wiegt schwerer als alle Münzen: der, der ihr half, als niemand sonst es tat, und der nie gemahnt hat. Gerade deshalb lässt seine Schuld ihr keine Ruhe. Jede Fuhre bringt sie dem Tag näher, an dem sie vor ihm steht und quitt ist.", hooks: ["verlust","stadt"] },
          { title: "Ich fahre, bis der Karren ein Laden ist.", description: "Sie kennt jeden Markt zwischen den Flüssen, und keiner davon gehört ihr. Nachts rechnet sie beim Kerzenstumpf aus, wie viele Fuhren noch fehlen. Es werden weniger, langsam, aber es werden weniger.", hooks: ["fahrend","stadt"] },
        ]
      },
      {
        text: "Außenseiter mit Weitblick", hooks: ["außenseiter","natur"],
        powerTags: [
          { text: "stiller Beobachter", hooks: ["geheimnis"] },
          { text: "geheimer Zufluchtsort", hooks: ["außenseiter","natur"] },
          { text: "durchschaut Masken", hooks: ["stadt","wissen"] },
          { text: "überlebt jede Not", hooks: ["verlust","außenseiter"] },
          { text: "kennt Schleichwege", hooks: ["stadt"] },
        ],
        weaknessTags: [
          { text: "belächelt", hooks: ["außenseiter","stadt"] },
          { text: "misstrauisch", hooks: ["außenseiter","verlust"] },
          { text: "ungehört", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "Man wird noch auf mich hören.", description: "Dreimal hat er das Dorf gewarnt, dreimal hat man gelacht, und zweimal kam es, wie er sagte. Beim dritten Mal, das spürt er, wird Lachen nicht reichen. Er sammelt Zeichen wie andere Feuerholz, für den Tag, an dem man ihn endlich fragt.", hooks: ["außenseiter","verlust"] },
          { title: "Ich öffne ihnen die Augen.", description: "Es sind Kleinigkeiten, die nicht stimmen: Vögel, die zu früh ziehen, Fremde, die zu freundlich fragen, Spuren, die niemand hinterlassen haben will. Einzeln bedeuten sie nichts, zusammen ergeben sie ein Bild, das ihm den Schlaf raubt. Er braucht einen Beweis, den selbst der Sturste nicht wegwischen kann.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "Wanderprediger ohne Gemeinde", hooks: ["glaube","fahrend"],
        powerTags: [
          { text: "tröstende Worte", hooks: ["glaube"] },
          { text: "vertrauenerweckend", hooks: ["glaube"] },
          { text: "Fürsprecher der Schwachen", hooks: ["glaube","macht"] },
          { text: "genügsam", hooks: ["außenseiter","verlust"] },
        ],
        weaknessTags: [
          { text: "überall nur Gast", hooks: ["außenseiter"] },
          { text: "mancherorts verboten", hooks: ["außenseiter","geheimnis"] },
          { text: "zweifelt im Stillen", hooks: ["glaube","geheimnis"] },
        ],
        quests: [
          { title: "Ich finde eine Gemeinde, die mich braucht.", description: "In jedem Dorf bleibt er drei Tage: eines wird er angehört, eines geduldet, eines weitergeschickt. Er glaubt, dass irgendwo Menschen auf genau seine Worte warten, sie wissen es nur noch nicht. Manchmal fürchtet er, er könnte an ihnen vorbeigelaufen sein, und kehrt an Weggabelungen zweimal um.", hooks: ["glaube","fahrend"] },
          { title: "Ich trage den Glauben hinaus.", description: "Die großen Tempel predigen für die, die ohnehin kommen. Er geht dorthin, wo seit Jahren kein Segen mehr gesprochen wurde: zu den Fährleuten, den Köhlern, den Grenzhöfen. Wenn seine Botschaft dort nicht trägt, so sagt er sich, taugt sie nirgends.", hooks: ["glaube","fahrend"] },
        ]
      },
      {
        text: "freie Leibeigene", hooks: ["außenseiter","verlust"],
        powerTags: [
          { text: "harte Arbeit gewohnt", hooks: ["handwerk"] },
          { text: "überlebt jede Not", hooks: ["verlust","außenseiter"] },
          { text: "ruhig in der Krise", hooks: ["stadt"] },
          { text: "stille Helfer", hooks: ["glaube","stadt"] },
          { text: "wachsamer Schlaf", hooks: ["kampf"] },
        ],
        weaknessTags: [
          { text: "rechtlos", hooks: ["außenseiter","macht"] },
          { text: "gebrandmarkt", hooks: ["geheimnis","verlust"] },
          { text: "vom alten Herrn gejagt", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Ich finde einen Ort der Freiheit.", description: "Ihr Freibrief ist echt, doch das Pergament schützt nur, wo man lesen kann und lesen will. Es heißt, es gebe Städte, deren Luft nach einem Jahr und einem Tag frei macht. Sie zählt die Tage nicht mehr, sie geht einfach, bis niemand mehr nach ihrem Herrn fragt.", hooks: ["außenseiter","verlust"] },
          { title: "Niemand besitzt mich je wieder.", description: "Sie kennt beide Leben: das mit gesenktem Blick und das mit erhobenem. Manchmal, wenn eine Stimme zu scharf befiehlt, will der alte Gehorsam von selbst in die Knie. Genau dann richtet sie sich auf, jedes einzelne Mal, denn ihr Rücken gehört jetzt ihr.", hooks: ["außenseiter","verlust"] },
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
          { text: "Kampfgebet", hooks: ["glaube","kampf"] },
          { text: "hält Wort", hooks: ["glaube"] },
          { text: "unerschütterlich", hooks: ["glaube","kampf"] },
          { text: "Schwerthand", hooks: ["kampf"] },
        ],
        weaknessTags: [
          { text: "darf nicht fliehen", hooks: ["glaube","kampf"] },
          { text: "Schwur über Vernunft", hooks: ["glaube","schicksal"] },
        ],
        quests: [
          { title: "Ich halte den Schwur, den niemand kennt.", description: "Was er schwor und wem, behält er für sich; nur die Narbe an seiner Schwurhand erzählt, dass es kein leichter Eid war. Manche Nächte spricht er die Worte lautlos nach, damit sie sich nicht abnutzen. Der Tag der Einlösung rückt näher, und er wird bereit sein.", hooks: ["glaube"] },
          { title: "Mein Wort wiegt schwerer als Stahl.", description: "Sein Vater brach einst ein Versprechen, und ein Dorf bezahlte dafür; diesen Makel trägt der Name bis heute. Er hat sich geschworen, die Rechnung zu begleichen: mit einem Leben, in dem kein gegebenes Wort je wieder fällt. Jeder gehaltene Eid wäscht ein Stück der alten Schuld ab.", hooks: ["glaube","macht"] },
        ]
      },
      {
        text: "werdender Ritter", hooks: ["adel","kampf"],
        powerTags: [
          { text: "beherzt", hooks: ["glaube","kampf"] },
          { text: "Schild der Schwachen", hooks: ["glaube","kampf"] },
          { text: "ausdauernd", hooks: ["glaube","kampf"] },
          { text: "sattelfest", hooks: ["adel","kampf"] },
        ],
        weaknessTags: [
          { text: "blind durch Ehre", hooks: ["glaube","adel"] },
          { text: "verzeiht sich nichts", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Die Ritterprobe bestehen", description: "Drei Prüfungen verlangt der alte Brauch: eine vor Zeugen, eine im Verborgenen und eine, von der niemand sagen kann, worin sie besteht. Die ersten beiden fürchtet er nicht. Aber die Alten lächeln seltsam, wenn er nach der dritten fragt.", hooks: ["adel","kampf"] },
          { title: "Einen würdigen Herrn finden", description: "Er hat Bannern gedient, die im ersten Sturm rissen, und Herren, deren Ehre nur bis zur Kasse reichte. Sein Schwur liegt bereit wie eine ungetragene Klinge. Irgendwo gibt es jemanden, vor dem man knien kann, ohne sich zu verbiegen, und er wird ihn erkennen, wenn er ihn trifft.", hooks: ["adel","glaube"] },
        ]
      },
      {
        text: "Verteidiger des Dorfes", hooks: ["glaube","kampf"],
        powerTags: [
          { text: "wirft sich dazwischen", hooks: ["glaube","kampf"] },
          { text: "wachsames Auge", hooks: ["kampf","glaube"] },
          { text: "braucht wenig Schlaf", hooks: ["kampf"] },
          { text: "Anführer in der Not", hooks: ["glaube","stadt"] },
        ],
        weaknessTags: [
          { text: "mit dem Herzen daheim", hooks: ["glaube","verlust"] },
          { text: "trägt alles allein", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Ich halte das Unheil von ihnen fern.", description: "Was sein Dorf bedroht, sitzt nicht vor der Palisade, sondern irgendwo da draußen: in einem Namen, den die Händler nur flüsternd nennen, in Rauchsäulen, die jedes Jahr näher rücken. Er ist losgezogen, um die Gefahr zu treffen, bevor sie seine Leute trifft. Jede Meile, die er sie aufhält, ist eine Meile zwischen ihr und den Seinen.", hooks: ["glaube","kampf"] },
          { title: "Das Dorf wehrhaft machen", description: "Palisaden aus grünem Holz und Mut allein halten keinen zweiten Winter. Draußen gibt es Leute, die wissen, wie man Mauern setzt, Bögen baut, Wachen schult, und er wird lernen oder mitbringen, was sein Dorf braucht. Er sammelt unterwegs, was daheim einmal Leben retten wird.", hooks: ["glaube","handwerk"] },
        ]
      },
      {
        text: "Diener der Göttin", hooks: ["glaube","magie"],
        powerTags: [
          { text: "kennt jedes Gebet", hooks: ["glaube"] },
          { text: "Ritualgesang", hooks: ["glaube","magie"] },
          { text: "heiliges Symbol", hooks: ["glaube","magie"] },
          { text: "Schutzzeichen", hooks: ["glaube","magie"] },
        ],
        weaknessTags: [
          { text: "blind durch Hingabe", hooks: ["glaube"] },
          { text: "nie dienstfrei", hooks: ["glaube"] },
        ],
        quests: [
          { title: "Das Licht aufrechthalten", description: "In seinem Traum erlosch eine Kerze nach der anderen, bis nur noch eine brannte, und die stand in seiner Hand. Die Priester nennen es Einbildung, doch seither begegnen ihm überall kleine Finsternisse: erloschene Herdfeuer, verstummte Glocken, Schreine voller Staub. Er entzündet wieder, was er findet, und zählt nicht mehr, wie oft.", hooks: ["glaube"] },
          { title: "Einen Nachfolger finden", description: "Das Gebet, das er hütet, wurde ihm von sterbenden Lippen übergeben, so wie es seit jeher weitergegeben wird: von Mund zu Ohr, niemals durch Schrift. Er hat länger gewartet, als klug war. Nun prüft er jeden jungen Menschen am Weg mit derselben stillen Frage: Kannst du tragen, was ich trage?", hooks: ["glaube","schicksal"] },
        ]
      },
      {
        text: "Pflegerin der Kranken", hooks: ["glaube","handwerk"],
        powerTags: [
          { text: "Heilkräuter", hooks: ["handwerk","natur"] },
          { text: "heilende Hände", hooks: ["handwerk","magie"] },
          { text: "beruhigende Gegenwart", hooks: ["glaube","handwerk"] },
          { text: "unermüdlich", hooks: ["glaube"] },
        ],
        weaknessTags: [
          { text: "leidet mit", hooks: ["glaube","verlust"] },
          { text: "vergisst sich selbst", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Keinen sterben lassen", description: "Sie führt keine Liste ihrer Geretteten, wohl aber eine der Verlorenen: sieben Namen, jeden kann sie aufsagen wie ein Gebet. Die Alten sagen, wer den Tod zu oft betrügt, macht ihn neugierig. Soll er neugierig werden; sie hat nicht vor, die Liste wachsen zu lassen.", hooks: ["glaube","handwerk"] },
          { title: "Die Seuche zurückdrängen", description: "Das Fieber wandert die Handelsstraße entlang, Dorf um Dorf, immer eine Woche voraus. Eine alte Frau hat ihr im Sterben von einer Quelle im Moor erzählt, deren Wasser das Leiden einst stillte. Vielleicht Fieberwahn, vielleicht Rettung; sie folgt der Straße und sucht das Moor.", hooks: ["handwerk","wissen"] },
        ]
      },
      {
        text: "Liebe meines Lebens", hooks: ["glaube","verlust"],
        powerTags: [
          { text: "gibt das Letzte", hooks: ["glaube"] },
          { text: "nimmt Wunden auf sich", hooks: ["glaube","verlust"] },
          { text: "treu bis zuletzt", hooks: ["glaube","verlust"] },
          { text: "unbeirrbar", hooks: ["glaube"] },
        ],
        weaknessTags: [
          { text: "kann nicht loslassen", hooks: ["glaube","verlust"] },
          { text: "erpressbar durch Liebe", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Den geliebten Menschen zurückholen", description: "Eines Morgens war die Tür offen, der Herd noch warm, und auf dem Tisch lag ein fremdes Zeichen aus geflochtenem Gras. Niemand im Dorf will es kennen, doch die Älteste wurde blass, als sie es sah. Er folgt dem Zeichen, so weit es ihn führt.", hooks: ["glaube","verlust"] },
          { title: "Das Versprechen einlösen", description: "In einer Sommernacht vor vielen Jahren haben sie einander etwas versprochen, halb im Scherz, halb im Ernst, wie junge Menschen das tun. Nur einer von beiden hat es nie vergessen. Nun ist die Zeit gekommen, in der aus dem alten Wort eine Tat werden muss, und er gedenkt, sie zu vollbringen.", hooks: ["glaube"] },
        ]
      },
      {
        text: "Hüterin des Tempels", hooks: ["glaube","geheimnis"],
        powerTags: [
          { text: "kennt heilige Orte", hooks: ["glaube","geheimnis"] },
          { text: "kennt alte Riten", hooks: ["glaube","geheimnis"] },
          { text: "liest verborgene Zeichen", hooks: ["glaube","wissen"] },
          { text: "ehrfurchtgebietend", hooks: ["glaube","macht"] },
        ],
        weaknessTags: [
          { text: "weltfremd", hooks: ["glaube","verlust"] },
          { text: "arglos", hooks: ["glaube","außenseiter"] },
        ],
        quests: [
          { title: "Das Heiligtum zurückbringen", description: "In der Nacht des Raubs verstummten die Glocken von selbst, und seither schweigt der Tempel wie ein Mund ohne Zunge. Die Diebe verkauften das Heiligtum weiter, und jede Spur führt zu einem neuen Besitzer. Sie folgt der Kette von Hand zu Hand, und mit jedem Schritt wird ihr klarer: Der letzte Name auf der Liste wird kein Händler sein.", hooks: ["glaube","geheimnis"] },
          { title: "Das Geheimnis bewahren", description: "Was ihr anvertraut wurde, passt in drei Sätze und wiegt doch schwerer als der Tempel selbst. Es gibt Fragen, die Fremde ihr zu beiläufig stellen, und Münzen, die zu leicht angeboten werden. Sie lächelt, schweigt und merkt sich jedes Gesicht, das zu neugierig war.", hooks: ["glaube","geheimnis"] },
        ]
      },
      {
        text: "Schwester des Ordens", hooks: ["glaube","magie"],
        powerTags: [
          { text: "Ordensgeschwister überall", hooks: ["glaube"] },
          { text: "kennt die Ordensregel", hooks: ["glaube","wissen"] },
          { text: "Segensworte", hooks: ["glaube","magie"] },
          { text: "schriftkundig", hooks: ["wissen"] },
        ],
        weaknessTags: [
          { text: "an Gehorsam gebunden", hooks: ["glaube","macht"] },
          { text: "nie dienstfrei", hooks: ["glaube"] },
        ],
        quests: [
          { title: "Dem Orden treu bleiben", description: "Es gehen Briefe um, die nicht vom Mutterhaus stammen, aber dessen Siegel tragen, und die Anweisungen darin werden von Mal zu Mal seltsamer. Irgendjemand spricht im Namen des Ordens, dem sie ihr Leben gab. Gehorchen und schweigen, wie die Regel es will, oder fragen, wie ihr Gewissen es drängt: Noch trägt die Regel. Noch.", hooks: ["glaube"] },
          { title: "Die wahre Lehre bewahren", description: "Die junge Generation kürzt die Gebete, und die alte vergisst sie. Im Skriptorium ihres Heimatklosters fehlen Seiten, die vor zehn Jahren noch da waren, das weiß sie genau. Sie schreibt ab, was sie findet, lernt auswendig, was man ihr zeigt, und trägt die Lehre dorthin, wo Motten und Zensoren sie nicht erreichen.", hooks: ["glaube","wissen"] },
        ]
      },
      {
        text: "letzter Wächter", hooks: ["glaube","kampf"],
        powerTags: [
          { text: "weicht keinen Schritt", hooks: ["glaube","kampf"] },
          { text: "schmerzhaft ehrlich", hooks: ["glaube"] },
          { text: "hat alles schon gesehen", hooks: ["wissen"] },
          { text: "eiserne Routine", hooks: ["kampf"] },
        ],
        weaknessTags: [
          { text: "darf nicht fliehen", hooks: ["glaube","kampf"] },
          { text: "trägt alles allein", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Meine Wacht endet nie.", description: "Alle, die den Eid mit ihm sprachen, liegen unter Steinen, und mit jedem Grab ging ein Teil des Wissens, was eigentlich bewacht wird. Er weiß nur noch: Es darf nicht ans Licht, und es wandert, wenn man es nicht hütet. Also wandert er mit, der Letzte einer Reihe, deren Anfang niemand mehr kennt.", hooks: ["glaube","kampf"] },
          { title: "Die Reihe darf nicht mit mir enden.", description: "Er hat drei Anwärter geprüft: Der Erste war zu neugierig, der Zweite zu furchtsam, der Dritte verschwand nach der ersten Nacht und redet seither wirr. Vielleicht sucht er falsch, vielleicht sucht das Amt selbst. Die alten Verse sagen, der Nachfolger trage ein Zeichen; sie sagen nicht, welches.", hooks: ["glaube","schicksal"] },
        ]
      },
      {
        text: "Wächterin der Schwelle", hooks: ["glaube","kampf"],
        powerTags: [
          { text: "wittert Eindringlinge", hooks: ["glaube","wissen"] },
          { text: "weicht keinen Schritt", hooks: ["glaube","kampf"] },
          { text: "kennt jede Losung", hooks: ["kampf","stadt"] },
          { text: "hellhörig", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "kann nie ruhen", hooks: ["glaube","kampf"] },
          { text: "misstraut jedem Fremden", hooks: ["glaube","außenseiter"] },
        ],
        quests: [
          { title: "Keine Schwelle fällt unter meiner Wacht.", description: "Einmal, ein einziges Mal, hat sie eine Tür unbewacht gelassen, und was in jener Nacht hereinkam, hat sie nie jemandem beschrieben. Seither gibt es für sie keine fremden Türen mehr, nur unbewachte. Wo sie nächtigt, schläft man sicherer, und das ist kein Zufall, sondern ihr stiller Schwur.", hooks: ["glaube","kampf"] },
          { title: "Den Verräter im Inneren finden", description: "Der Riegel war vorgelegt, die Losung nicht verraten, und trotzdem stand die Tür im Morgengrauen offen. Es gibt nur eine Erklärung, und sie schmerzt: Jemand von innen hat aufgemacht. Seither prüft sie jedes vertraute Gesicht mit demselben Blick wie jeden Fremden, bis die Hand gefunden ist, die den Riegel hob.", hooks: ["glaube","geheimnis"] },
        ]
      },
      {
        text: "Verbündete der Ausgestoßenen", hooks: ["glaube","außenseiter"],
        powerTags: [
          { text: "erkennt stille Not", hooks: ["glaube"] },
          { text: "sammelt Almosen", hooks: ["glaube"] },
          { text: "teilt das Wenige", hooks: ["glaube"] },
          { text: "daheim in den Gassen", hooks: ["stadt","außenseiter"] },
        ],
        weaknessTags: [
          { text: "kann nicht nein sagen", hooks: ["glaube"] },
          { text: "selbst gemieden", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "Den Übersehenen helfen", description: "Als Kind stand sie selbst einmal im Regen vor verschlossenen Türen, und eine einzige Fremde hielt an. Den Namen der Frau kennt sie bis heute nicht. Also zahlt sie die Schuld an alle zurück, die im Regen stehen, eine Tür nach der anderen.", hooks: ["glaube","außenseiter"] },
          { title: "Ihnen einen Platz schaffen", description: "Sie hat von einem Tal gehört, in dem niemand nach Herkunft fragt, und von einer Bruderschaft, die Verstoßene aufnimmt; beides klang zu schön, beides will geprüft sein. Ihre Schützlinge können nicht ewig von Almosen und Glück leben. Irgendwo muss Platz sein für Menschen ohne Platz, und wenn nicht, dann wird sie welchen machen.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "Heilerin ohne Lohn", hooks: ["glaube","handwerk"],
        powerTags: [
          { text: "Heilkräuter", hooks: ["handwerk","natur"] },
          { text: "heilende Hände", hooks: ["handwerk","magie"] },
          { text: "Beistand der Sterbenden", hooks: ["glaube","verlust"] },
          { text: "gibt das Letzte", hooks: ["glaube"] },
        ],
        weaknessTags: [
          { text: "bettelarm", hooks: ["glaube","verlust"] },
          { text: "kann nicht nein sagen", hooks: ["glaube"] },
        ],
        quests: [
          { title: "Ich heile, wer vor mir liegt.", description: "Man hat ihr schon Mörder gebracht und Gehenkte, die noch zuckten, und einmal einen Mann, den das halbe Dorf lieber sterben sah. Ihre Hände fragen nicht nach Schuld, das haben sie nie gelernt. Sie weiß, dass dieser Grundsatz sie eines Tages teuer zu stehen kommt, und hält trotzdem daran fest.", hooks: ["glaube","handwerk"] },
          { title: "Das verlorene Rezept wiederfinden", description: "Ihre Lehrmeisterin starb zu früh und hinterließ ein halbes Wissen: den Namen einer Arznei, drei ihrer sieben Zutaten und die Warnung, sie nie bei Vollmond zu brauen. Der Rest liegt verstreut in den Köpfen alter Weiber und auf Rändern vergilbter Seiten. Sie sammelt Stück für Stück, denn irgendwo hustet immer jemand, dem nur dieses Mittel helfen kann.", hooks: ["handwerk","wissen"] },
        ]
      },
    ]
  },
  "Past": {
    type: "Origin",
    titles: [
      {
        text: "Verfluchter", hooks: ["magie","schicksal"],
        powerTags: [
          { text: "spürt Flüche", hooks: ["magie","schicksal"] },
          { text: "Bannzeichen", hooks: ["magie","glaube"] },
          { text: "dunkle Ahnungen", hooks: ["schicksal","verlust"] },
          { text: "kennt alte Riten", hooks: ["wissen","magie"] },
        ],
        weaknessTags: [
          { text: "das Fluchmal", hooks: ["magie","verlust"] },
          { text: "wehrlos auf geweihtem Boden", hooks: ["schicksal","verlust"] },
          { text: "Albträume", hooks: ["verlust","schicksal"] },
        ],
        quests: [
          { title: "Den Fluch brechen", description: "Eine Wahrsagerin nannte ihm drei Bedingungen, unter denen das Mal vergeht, und starb, ehe sie die dritte aussprach. Zwei hat er erfüllt, nichts geschah. Also sucht er die dritte, von der niemand weiß, ob es sie gibt.", hooks: ["magie","schicksal"] },
          { title: "Wessen Fluch ich trage", description: "In seinen Träumen kehrt dasselbe halb abgewandte Gesicht wieder, an einer Hand ein Ring, den er wachend schon gesehen haben muss, nur wo? Er folgt dem Ring, denn wer den Fluch wirkte, trägt ihn vielleicht noch.", hooks: ["schicksal","geheimnis"] },
        ]
      },
      {
        text: "im Krieg geschmiedet", hooks: ["kampf","verlust"],
        powerTags: [
          { text: "narbiger Schwertarm", hooks: ["kampf","verlust"] },
          { text: "kennt das Schlachtfeld", hooks: ["kampf"] },
          { text: "wittert Fallen", hooks: ["kampf","wissen"] },
          { text: "abgehärtet", hooks: ["verlust","kampf"] },
        ],
        weaknessTags: [
          { text: "von alten Feinden gejagt", hooks: ["kampf","verlust"] },
          { text: "verroht vom Töten", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "Den Krieg hinter sich lassen", description: "Er hat mehr Schlachtfelder gesehen als Geburtstage und weiß nicht mehr, wofür der erste Krieg geführt wurde. Nachts zählt er nicht Schafe, sondern Namen. Er sucht einen Ort, an dem eine Hand auch etwas anderes tun darf als eine Klinge halten.", hooks: ["kampf","verlust"] },
          { title: "Alte Waffenbrüder finden", description: "Sieben zogen sie aus, Rücken an Rücken, und schworen, sich wiederzufinden, falls sie überlebten. Er hält den Schwur als Letzter, der noch sucht. Von zweien gehen Gerüchte, einer führe ein Wirtshaus, einer sitze im Kerker; den Rest verschweigt die Zeit.", hooks: ["kampf","verlust"] },
        ]
      },
      {
        text: "letzter meines Volkes", hooks: ["verlust","natur"],
        powerTags: [
          { text: "spricht die alte Zunge", hooks: ["wissen","verlust"] },
          { text: "kennt die Ahnen", hooks: ["verlust","geheimnis"] },
          { text: "alte Riten", hooks: ["glaube","verlust"] },
          { text: "alte Heilkunst", hooks: ["wissen","natur"] },
        ],
        weaknessTags: [
          { text: "gefangen im Gestern", hooks: ["verlust","schicksal"] },
          { text: "zerbricht an der Einsamkeit", hooks: ["verlust","außenseiter"] },
        ],
        quests: [
          { title: "Das Erbe weitertragen", description: "Alles, was von seinem Volk blieb, passt in seinen Kopf und ein Bündel abgegriffener Zeichen. Stirbt er ungehört, stirbt es zweimal. Also sucht er Ohren, die zuhören, und Hände, die weiterschreiben, ehe die letzten Wörter mit ihm verstummen.", hooks: ["verlust","natur"] },
          { title: "Das unvollendete Werk vollenden", description: "Die Alten begannen etwas, das sie nicht mehr beenden konnten, ein Lied ohne letzte Strophe, ein Weg ohne letztes Zeichen, er ist sich selbst nicht sicher, was. Nur dass es offen blieb, spürt er wie einen unfertigen Kreis, und zieht los, das fehlende Stück zu finden.", hooks: ["verlust","natur"] },
        ]
      },
      {
        text: "mystischer Pilger", hooks: ["magie","fahrend"],
        powerTags: [
          { text: "Orientierungssinn", hooks: ["fahrend","natur"] },
          { text: "reist leicht", hooks: ["fahrend","verlust"] },
          { text: "kennt heilige Wege", hooks: ["glaube","fahrend"] },
          { text: "deutet Zeichen", hooks: ["magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "überall ein Fremder", hooks: ["außenseiter","fahrend"] },
          { text: "weltfremd", hooks: ["außenseiter","glaube"] },
        ],
        quests: [
          { title: "Die Pilgerfahrt vollenden", description: "Ein Traum in drei Nächten schickte ihn los, und seither misst er sein Leben in Schwellen, nicht in Meilen. Wohin der Weg führt, weiß er nicht, nur dass er es erkennen wird, wenn er ankommt. Bis dahin ist jeder Schritt Gebet.", hooks: ["glaube","fahrend"] },
          { title: "Das verborgene Heiligtum finden", description: "Am Rand einer alten Karte, dort wo die Zeichner nur noch Nebel malen, soll ein Ort liegen, den kein Lebender betrat. Drei Menschen wussten davon, zwei schwiegen, einer lachte zu laut. Etwas dort ruft ihn, und er kann nicht anders als folgen.", hooks: ["magie","fahrend"] },
        ]
      },
      {
        text: "aus den Trümmern", hooks: ["verlust","fahrend"],
        powerTags: [
          { text: "findet Brauchbares", hooks: ["handwerk","verlust"] },
          { text: "improvisiert", hooks: ["handwerk","wissen"] },
          { text: "lernt aus Fehlern", hooks: ["wissen","handwerk"] },
          { text: "überlebt jede Not", hooks: ["verlust","außenseiter"] },
        ],
        weaknessTags: [
          { text: "Schuld des Überlebens", hooks: ["verlust","schicksal"] },
          { text: "kann nicht loslassen", hooks: ["verlust"] },
        ],
        quests: [
          { title: "Etwas Bleibendes errichten", description: "Er hat gesehen, wie schnell ein Leben zu Schutt wird, und ertrug es, weil er sich vornahm, aus dem Schutt etwas zu machen. Nicht dasselbe wieder, sondern etwas, das dem nächsten Sturm standhält. Er sucht Ort und Menschen, mit denen der Vorsatz gelingt.", hooks: ["verlust","handwerk"] },
          { title: "Bewahren, was übrig ist", description: "Von allem, was verloren ging, existiert noch ein einziges Stück, und nur er weiß, wo. Ein Kästchen, ein Name, ein Grab, mehr braucht es nicht, um zu beweisen, dass es das alles gab. Ehe auch dieser Rest verweht, bringt er ihn in Sicherheit.", hooks: ["verlust","natur"] },
        ]
      },
      {
        text: "der Heimkehrer", hooks: ["fahrend","verlust"],
        powerTags: [
          { text: "kennt den Heimweg", hooks: ["fahrend","verlust"] },
          { text: "straßenerprobt", hooks: ["fahrend","verlust"] },
          { text: "altes Andenken", hooks: ["verlust"] },
          { text: "findet alte Verbündete", hooks: ["fahrend","glaube"] },
        ],
        weaknessTags: [
          { text: "daheim alles fremd", hooks: ["verlust","schicksal"] },
          { text: "bekanntes Gesicht", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Nach Hause finden", description: "Zwölf Jahre und drei Kriege liegen zwischen ihm und dem Dorf, das er Heimat nannte. Er trägt etwas bei sich, das er dort zurückgeben oder zurücklassen muss, er weiß noch nicht, welches. Je näher er kommt, desto weniger sicher ist er, ob man ihn noch kennt.", hooks: ["fahrend","verlust"] },
          { title: "Die alte Rechnung begleichen", description: "In der Nacht, bevor er ging, fiel ein Wort, das nie zurückgenommen wurde, und ein Mensch, der es hätte richtigstellen können, schweigt bis heute. Lange glaubte er, die Zeit heile das. Sie tat es nicht. Er kehrt zurück, um auszusprechen, was ungesagt blieb.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "Feuerüberlebende", hooks: ["verlust","schicksal"],
        powerTags: [
          { text: "Andenken eines Toten", hooks: ["verlust"] },
          { text: "eiserner Wille", hooks: ["verlust"] },
          { text: "riecht Rauch zuerst", hooks: ["natur","verlust"] },
          { text: "leichter Schlaf", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "Brandnarben", hooks: ["verlust"] },
          { text: "erstarrt vor Feuer", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Die Toten ruhen lassen", description: "Aus dem Feuer trug sie nur eines, ein Ding, das einem gehörte, den sie nicht retten konnte. Solange sie es bei sich hat, ist die Nacht nicht vorbei. Sie sucht den Ort, an den es gehört, ein Grab, ein Fluss, eine Hand, um es endlich weggeben zu können.", hooks: ["verlust","schicksal"] },
          { title: "Den Brandstifter finden", description: "Das Feuer brach an drei Stellen zugleich aus, so etwas tut kein Funke von allein. Einer hat es gelegt und lebt, während andere starben. Sie kennt nur ein Detail, den Geruch eines seltenen Öls in jener Nacht, und dem folgt sie von Markt zu Markt.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "entflohener Gefangener", hooks: ["außenseiter","verlust"],
        powerTags: [
          { text: "kennt Schloss und Riegel", hooks: ["handwerk","geheimnis"] },
          { text: "unauffällig", hooks: ["außenseiter","geheimnis"] },
          { text: "durchschaut Lügen", hooks: ["geheimnis"] },
          { text: "überlebt jede Not", hooks: ["verlust","außenseiter"] },
        ],
        weaknessTags: [
          { text: "steckbrieflich gesucht", hooks: ["kampf","verlust"] },
          { text: "traut niemandem", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "Endgültig frei werden", description: "Die Zelle hat er hinter sich, aber nicht das Gefühl, dass jede offene Tür eine Falle sein könnte. Ein Steckbrief mit seinem Gesicht hängt in Städten, die er nie betrat. Er will den Tag, an dem kein Aushang mehr seinen Namen trägt, und muss dafür zur Wurzel dessen, was ihn einbrachte.", hooks: ["verlust","außenseiter"] },
          { title: "Mit den Wärtern abrechnen", description: "Vier Schließer teilten sich die Nachtwache, jeder mit seiner eigenen Grausamkeit. Drei Namen kennt er, den vierten nur an einer Stimme, die er im Schlaf noch hört. Er sucht sie, nicht aus Wut allein, sondern weil er wissen will, wer die Befehle gab.", hooks: ["außenseiter","kampf"] },
        ]
      },
      {
        text: "Kriegskind", hooks: ["kampf","verlust"],
        powerTags: [
          { text: "früh erwachsen", hooks: ["verlust"] },
          { text: "kennt jedes Versteck", hooks: ["geheimnis","kampf"] },
          { text: "wittert Gefahr", hooks: ["kampf","wissen"] },
          { text: "findet immer Nahrung", hooks: ["natur","verlust"] },
        ],
        weaknessTags: [
          { text: "ruhelose Nächte", hooks: ["verlust"] },
          { text: "kennt nur den Krieg", hooks: ["kampf","außenseiter"] },
        ],
        quests: [
          { title: "Einen Ort ohne Krieg finden", description: "Er erinnert sich an keinen Tag, an dem irgendwo nicht geschossen, geflohen oder begraben wurde. Frieden kennt er nur als Wort, das Erwachsene sagen, ehe sie seufzen. Er sucht einen Ort, an dem das Wort etwas bedeutet, und ist nicht sicher, ob er ihn erkennen würde.", hooks: ["kampf","verlust"] },
          { title: "Die Eltern wiederfinden", description: "Von seiner Mutter blieb ein Lied, von seinem Vater ein Wort in einer Sprache, die hier keiner spricht. Ob sie leben, weiß er nicht; er weiß nur, dass er ihre Gesichter vergisst, Zug um Zug. Er sucht sie, ehe auch der Rest verblasst.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "einzige Mitwisserin", hooks: ["geheimnis","wissen"],
        powerTags: [
          { text: "durchschaut Lügen", hooks: ["geheimnis"] },
          { text: "vergisst nichts", hooks: ["wissen","geheimnis"] },
          { text: "geht unter falschem Namen", hooks: ["geheimnis","außenseiter"] },
          { text: "findet Unterschlupf", hooks: ["fahrend","außenseiter"] },
        ],
        weaknessTags: [
          { text: "gejagt um ihr Wissen", hooks: ["geheimnis","verlust"] },
          { text: "sieht überall Späher", hooks: ["geheimnis","außenseiter"] },
        ],
        quests: [
          { title: "Die Wahrheit ans Licht bringen", description: "Sie hat gesehen, was geschah, und trägt es wie einen Stein im Mund: Sprechen bedeutet Gefahr, Schweigen bedeutet Mitschuld. Es gibt einen Beweis, den sie versteckte, ehe man sie fand. Sie will ihn dorthin bringen, wo man ihn nicht mehr vertuschen kann.", hooks: ["geheimnis","wissen"] },
          { title: "Den Verräter entlarven", description: "Nur einer wusste, wo sie sich verbarg, und am Morgen standen die Häscher vor der Tür. Es war jemand, dem sie ihr Leben anvertraut hätte, und das macht es unerträglich. Sie sammelt die kleinen Widersprüche, bis das freundliche Gesicht keine Ausrede mehr hat.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "getriebene ohne Heimat", hooks: ["fahrend","verlust"],
        powerTags: [
          { text: "findet Unterschlupf", hooks: ["fahrend","außenseiter"] },
          { text: "liest fremde Sitten", hooks: ["wissen","fahrend"] },
          { text: "reist leicht", hooks: ["fahrend","verlust"] },
          { text: "Orientierungssinn", hooks: ["fahrend","natur"] },
        ],
        weaknessTags: [
          { text: "nirgends willkommen", hooks: ["außenseiter","fahrend"] },
          { text: "vom Drang getrieben", hooks: ["schicksal","fahrend"] },
        ],
        quests: [
          { title: "Einen Ort zum Bleiben finden", description: "Sie hat aufgehört zu zählen, wie viele Betten sie kannte und wie wenige warm blieben. Etwas lässt sie nie länger als einen Mond an einem Fleck. Sie sucht den einen Ort, an dem der Drang schweigt, und beginnt zu fürchten, dass es ihn nicht gibt.", hooks: ["fahrend","verlust"] },
          { title: "Herausfinden, was mich treibt", description: "Immer wenn sie bleiben will, wird sie unruhig, als zöge eine Schnur hinter ihrer Brust. Eine alte Frau sagte einmal, so etwas werde einem in die Wiege gelegt, und verstummte dann. Sie will wissen, wer die Schnur gespannt hat, ehe sie sie zu Tode zieht.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "wer alles zurückließ", hooks: ["verlust","außenseiter"],
        powerTags: [
          { text: "reist ohne Ballast", hooks: ["fahrend","verlust"] },
          { text: "altes Andenken", hooks: ["verlust"] },
          { text: "überlebt jede Not", hooks: ["verlust","außenseiter"] },
          { text: "knüpft neu an", hooks: ["fahrend","außenseiter"] },
        ],
        weaknessTags: [
          { text: "von Reue zerfressen", hooks: ["verlust","schicksal"] },
          { text: "lebt in der Vergangenheit", hooks: ["verlust","schicksal"] },
        ],
        quests: [
          { title: "Vergeben, was zurückblieb", description: "Er ging, weil Bleiben ihn zerstört hätte, und trägt seither die Gesichter derer mit sich, die er ohne Abschied ließ. Vergeben will er nicht, weil sie es verdienen, sondern weil die Last ihn sonst in die Knie zwingt. Er weiß nur nicht, ob Vergeben heißt zurückzugehen oder endlich nicht mehr.", hooks: ["verlust","glaube"] },
          { title: "Das eine zurückholen", description: "Von allem, was er zurückließ, gibt es eines, dessen Verlust er sich nicht verzeiht, klein genug zum Vergessen, groß genug, um ihn nachts zu wecken. Er weiß, wo es zuletzt war, nicht, ob es noch dort ist. Er kehrt um, dieses eine zu holen, und lässt den Rest, wo er hingehört.", hooks: ["verlust","schicksal"] },
        ]
      },
    ]
  },
  "People": {
    type: "Origin",
    titles: [
      {
        text: "Sylvenelf", hooks: ["natur","schicksal"],
        powerTags: [
          { text: "Sitten der Sippe", hooks: ["natur"] },
          { text: "Ahnensprache", hooks: ["wissen","natur"] },
          { text: "leiser Schritt", hooks: ["natur"] },
          { text: "sieht im Dunkeln", hooks: ["natur","schicksal"] },
        ],
        weaknessTags: [
          { text: "misstraut Fremden", hooks: ["außenseiter","natur"] },
          { text: "verloren unter Menschen", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "Die Weissagung erfüllen", description: "Bei seiner Geburt lasen die Alten ein Zeichen, das nur einmal in vielen Generationen erscheint, und schwiegen erschrocken. Erst als er auszog, gaben sie ihm drei Worte mit, deren Sinn sich unterwegs zeigen soll. Zwei versteht er inzwischen. Das dritte fürchtet er.", hooks: ["schicksal","natur"] },
          { title: "Andere meiner Sippe finden", description: "Sein Wald ist still geworden, die Rauchzeichen blieben aus, mit denen die Sippen einander einst grüßten. Vielleicht sind sie nur weitergezogen, vielleicht mehr. Er sucht die Zeichen an Rinde und Stein, die nur seinesgleichen lesen, und folgt ihnen, solange sie nicht abreißen.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "Hochländerin", hooks: ["natur","kampf"],
        powerTags: [
          { text: "unerwartet stark", hooks: ["kampf"] },
          { text: "Hochlandklinge", hooks: ["kampf","natur"] },
          { text: "trittsicher", hooks: ["natur"] },
          { text: "wetterhart", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "als wild verschrien", hooks: ["außenseiter"] },
          { text: "loyaler als vernünftig", hooks: ["glaube"] },
        ],
        quests: [
          { title: "Meinem Volk die Ehre zurückgeben", description: "Fern der Berge kennt man die Seinen nur aus Spottliedern, in denen sie Vieh stehlen und Rohes essen. Sie hat diese Lieder gehört und die Fäuste in den Taschen geballt. Sie will, dass man eines Tages ein anderes Lied singt, und weiß, dass Fäuste dafür nicht reichen.", hooks: ["natur","macht"] },
          { title: "Die uralte Fehde begraben", description: "Die Fehde ist älter als die Ältesten, und niemand kann mehr sagen, welches Blut zuerst floss. Beide Seiten hüten einen Stein mit eingeritzten Namen, und solange sie getrennt bleiben, geht das Töten weiter. Sie glaubt, dass die Steine zusammengehören, und sucht den anderen.", hooks: ["natur","kampf"] },
        ]
      },
      {
        text: "Steppenreiter", hooks: ["kampf"],
        powerTags: [
          { text: "Reiterbogen", hooks: ["kampf","natur"] },
          { text: "reitet wie der Wind", hooks: ["natur"] },
          { text: "versteht Tiere", hooks: ["natur"] },
          { text: "sattelfest", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "zu Fuß verloren", hooks: ["fahrend","außenseiter"] },
          { text: "fremd unter Sesshaften", hooks: ["außenseiter","fahrend"] },
        ],
        quests: [
          { title: "Den Wert meiner Reiter beweisen", description: "Die Sesshaften sehen in seinen Leuten nur Räuber, die kommen, plündern und im Staub verschwinden. Er kennt die Regeln hinter dem Galopp, die Ehre, die kein Sesshafter je gelernt hat. Er sucht die eine Tat, nach der niemand mehr Räuber sagt, wenn er einen Reiter sieht.", hooks: ["außenseiter","kampf"] },
          { title: "Mein verlorenes Ross wiederfinden", description: "Sie wuchsen zusammen auf, das Tier und er, und verstanden einander ohne Zügel. In einer Nacht voller Rauch riss man sie auseinander, und seither reitet ein Fremder, was ihm gehört. Er kennt die Brandmarke, kennt den weißen Fleck über dem Huf, und folgt ihm, so weit die Spur reicht.", hooks: ["kampf","natur"] },
        ]
      },
      {
        text: "Hexenblut", hooks: ["magie","schicksal"],
        powerTags: [
          { text: "wittert Unrecht", hooks: ["glaube","schicksal"] },
          { text: "kennt Heilpflanzen", hooks: ["natur","wissen"] },
          { text: "kennt Segenssprüche", hooks: ["magie","glaube"] },
          { text: "altes Wissen", hooks: ["wissen","natur"] },
        ],
        weaknessTags: [
          { text: "auffälliges Mal", hooks: ["außenseiter","schicksal"] },
          { text: "als Hexe gefürchtet", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "Dem Erbe meines Blutes nachgehen", description: "Das Mal auf seiner Haut gleicht keiner Krankheit, die ein Bader kennt, und in Vollmondnächten wird es warm. Seine Mutter schwieg dazu bis zuletzt und nannte im Fieber einen Namen und einen Ort. Beide sucht er, denn er will wissen, was in ihm erwacht.", hooks: ["magie","schicksal"] },
          { title: "Die Furcht vor meinesgleichen widerlegen", description: "Wo er hinkommt, ist der Ruf schon da: Kindesräuber, Milchverderber, Wetterhexen. Er hat gelernt, dass ein geheiltes Fieber mehr wiegt als hundert Beteuerungen. Also heilt er, Dorf um Dorf, und lässt die Taten sprechen, bis die Geschichten leiser werden.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "Karawanenvolk", hooks: ["fahrend"],
        powerTags: [
          { text: "ritueller Tanz", hooks: ["natur","glaube"] },
          { text: "geheime Zeichen", hooks: ["geheimnis","außenseiter"] },
          { text: "Orientierungssinn", hooks: ["fahrend","natur"] },
          { text: "entfacht jedes Feuer", hooks: ["natur","handwerk"] },
        ],
        weaknessTags: [
          { text: "als Gauner verschrien", hooks: ["außenseiter"] },
          { text: "fremder Akzent", hooks: ["außenseiter","fahrend"] },
        ],
        quests: [
          { title: "Die Weisen der Karawane retten", description: "Jedes Lager weniger, das aufbricht, nimmt Lieder mit, die niemand aufschrieb, weil man sie nie aufschreiben durfte. Die alte Sängerin, die sie alle kannte, ist letzten Winter gestorben. Er sammelt, was in den Köpfen der Übriggebliebenen noch klingt, ehe auch das verstummt.", hooks: ["natur","wissen"] },
          { title: "Das genommene Herz meines Volkes suchen", description: "Einst besaß die Karawane ein Zeichen, um das sich jedes Lager scharte, und ohne das die Wege sich verloren. Vor drei Generationen ging es fort, geraubt oder verspielt, darüber schweigt man. Er glaubt, ohne dieses Herz zerfällt sein Volk in Staub, und zieht aus, es zu finden.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "Bibervolk", hooks: ["natur"],
        powerTags: [
          { text: "starke Nagezähne", hooks: ["natur","handwerk"] },
          { text: "wassergängig", hooks: ["natur"] },
          { text: "baut Dämme", hooks: ["handwerk","natur"] },
          { text: "wetterkundig", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "tierhaftes Äußeres", hooks: ["außenseiter","schicksal"] },
          { text: "scheu unter Menschen", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "Die Flüsse vor dem Gift schützen", description: "Flussabwärts kommt etwas Fauliges, das die Fische auf den Bauch dreht und das Schilf schwarz färbt, und es wandert stromauf, Wehr um Wehr. Seine Sippe an der Quelle ahnt nichts. Er zieht der Fäulnis entgegen, um zu finden, woher sie quillt, ehe sie das klare Wasser erreicht.", hooks: ["natur"] },
          { title: "Andere vom Bibervolk finden", description: "Die Dämme, an denen er als Junges spielte, sind verlassen, das Holz längst grau. Wohin seine Sippe zog, weiß niemand, nur dass sie flussaufwärts verschwand. Er liest die alten Fraßspuren an den Ufern wie eine Schrift und folgt ihnen, bis wieder frisch genagtes Holz am Wasser liegt.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "Fjordgeborene", hooks: ["natur"],
        powerTags: [
          { text: "kälteerprobt", hooks: ["natur"] },
          { text: "liest die See", hooks: ["natur"] },
          { text: "seefest", hooks: ["natur","fahrend"] },
          { text: "sichere Harpune", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "fern der See rastlos", hooks: ["fahrend","außenseiter"] },
          { text: "eckt bei Fremden an", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "Zur Küste der Ahnen zurückkehren", description: "Das Salz im Wind riecht hier falsch, süßlich, nach fremdem Meer, und nachts hört er die eigene Brandung nicht. Ein Versprechen hält ihn: Er schwor, die Asche seines Vaters dorthin zu tragen, wo die Fjorde beginnen. Solange sie in seinem Beutel liegt, ist er nicht angekommen.", hooks: ["natur","verlust"] },
          { title: "Dem Hohn über mein Volk ein Ende setzen", description: "In den Wirtshäusern des Binnenlands sind die Seinen der Stoff für Gruselgeschichten, Plünderer aus dem Nebel, die Kinder holen. Er hat zu oft still dagesessen, während man lachte. Er will beweisen, dass hinter dem Schrecken Menschen stehen, mit Liedern, Trauer und Gastrecht, und sammelt Zeugen dafür.", hooks: ["natur","macht"] },
        ]
      },
      {
        text: "Tochter der Wanderer", hooks: ["fahrend"],
        powerTags: [
          { text: "ergreifender Gesang", hooks: ["natur","schicksal"] },
          { text: "durchschaut Absichten", hooks: ["natur","geheimnis"] },
          { text: "findet Unterschlupf", hooks: ["fahrend","stadt"] },
          { text: "Orientierungssinn", hooks: ["fahrend","natur"] },
        ],
        weaknessTags: [
          { text: "fremder Akzent", hooks: ["außenseiter","fahrend"] },
          { text: "überall nur geduldet", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "Einen Ort finden, der uns bleibt", description: "Ihr Volk zieht weiter, seit sie denken kann, immer einen Schritt vor den misstrauischen Blicken der Sesshaften. Sie hat von einem Tal gehört, in dem Wanderer über den Winter bleiben dürfen, ohne dass man die Hunde losbindet. Ob es das Tal gibt oder nur das Lied davon, will sie sehen.", hooks: ["fahrend","außenseiter"] },
          { title: "Die Lieder der Wanderer bewahren", description: "Die Alten sterben schneller, als die Jungen lernen wollen, und mit jedem Grab verstummt eine Strophe. Sie trägt die Lieder wie andere ihr Erspartes. Ein Lied fehlt ihr noch, das letzte ihrer Großmutter, von dem nur der Anfang blieb, und sie sucht, wer das Ende kennt.", hooks: ["fahrend","wissen"] },
        ]
      },
      {
        text: "Küstenkind", hooks: ["natur"],
        powerTags: [
          { text: "taucht tief", hooks: ["natur"] },
          { text: "riecht den Sturm", hooks: ["natur"] },
          { text: "kennt jede Bucht", hooks: ["natur","wissen"] },
          { text: "gezeitenkundig", hooks: ["natur","wissen"] },
        ],
        weaknessTags: [
          { text: "landeinwärts verloren", hooks: ["fahrend","außenseiter"] },
          { text: "arglos", hooks: ["glaube","natur"] },
        ],
        quests: [
          { title: "Finden, was die Flut nahm", description: "Eine Sturmflut verschlang das Dorf seiner Kindheit in einer Nacht, Häuser, Netze, Namen. Man sagt, bei tiefster Ebbe sehe man noch die Dachfirste unter Wasser. Er sucht die Stelle, um zu bergen, was die See freigibt, und um zu begreifen, warum ausgerechnet er verschont blieb.", hooks: ["natur","verlust"] },
          { title: "Abwehren, was aus der Tiefe steigt", description: "Die alten Fischer kennen ein Zeichen: Wenn die Möwen landeinwärts fliehen und das Wasser nach Eisen riecht, kommt etwas aus der Tiefe. Diesmal flohen die Möwen und kamen nicht zurück. Er allein scheint es zu bemerken und folgt der Küste dorthin, wo das Meer am stillsten ist.", hooks: ["natur"] },
        ]
      },
      {
        text: "Sumpfbewohner", hooks: ["natur"],
        powerTags: [
          { text: "kennt sichere Pfade", hooks: ["natur","wissen"] },
          { text: "kennt Sumpfkräuter", hooks: ["natur","wissen"] },
          { text: "wittert jede Spur", hooks: ["natur"] },
          { text: "lautlos im Schilf", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "riecht nach Moor", hooks: ["außenseiter","natur"] },
          { text: "menschenscheu", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "Ergründen, was im Moor versank", description: "Das Moor gibt nichts zurück, heißt es, doch es zeigt manches: einen Balken, eine Hand, ein Gesicht im Torf, das aussieht wie lebendig. Er hat als Kind eines gesehen und nie vergessen. Er will wissen, wer die Toten im Moor sind und warum sie nicht verwesen, ehe das Wissen mit den Alten stirbt.", hooks: ["natur","geheimnis"] },
          { title: "Den Ruf des Moorvolks widerlegen", description: "Trockenwohner erzählen ihren Kindern, das Moorvolk stehle Seelen und tausche Säuglinge. Er hat diese Märchen sein Leben lang gehört und die Türen sich schließen sehen. Mit dem Heilwissen des Moors, das schon manches Fieber brach, will er beweisen, dass aus dem Sumpf auch Rettung kommt.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "Halbblut", hooks: ["außenseiter","schicksal"],
        powerTags: [
          { text: "kennt beide Welten", hooks: ["natur","außenseiter"] },
          { text: "spricht zwei Zungen", hooks: ["wissen","natur"] },
          { text: "geborener Mittler", hooks: ["stadt","außenseiter"] },
          { text: "passt sich überall an", hooks: ["außenseiter","fahrend"] },
        ],
        weaknessTags: [
          { text: "von beiden Seiten beäugt", hooks: ["außenseiter"] },
          { text: "unverkennbar gemischt", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "Die zwei Welten versöhnen", description: "In ihm treffen zwei Völker aufeinander, die sich seit Menschengedenken misstrauen, und in seinem Gesicht sehen beide den Feind. Er hat begriffen, dass er die einzige Brücke zwischen ihnen ist. Es gibt einen alten Vertrag, halb vergessen, den beide Seiten einst brachen, und er sucht die zweite Hälfte der Urkunde.", hooks: ["außenseiter","schicksal"] },
          { title: "Andere finden, die dazwischenstehen", description: "Zwischen den Völkern, so heißt es, gibt es mehr wie ihn, geboren aus Nächten, über die man nicht spricht, und überall gemieden. Er hat nie einen getroffen und zweifelt, ob er der Einzige ist. Ein Zeichen, an dem solche wie er sich erkennen, soll es geben, und er sucht das erste Gesicht, das es erwidert.", hooks: ["außenseiter","schicksal"] },
        ]
      },
      {
        text: "aus dem fernen Osten", hooks: ["fahrend","geheimnis"],
        powerTags: [
          { text: "Wissen aus der Ferne", hooks: ["wissen","natur"] },
          { text: "fremde Kampfkunst", hooks: ["kampf","wissen"] },
          { text: "Lieder der Heimat", hooks: ["natur","wissen"] },
          { text: "kennt ferne Länder", hooks: ["fahrend","wissen"] },
        ],
        weaknessTags: [
          { text: "kaum der Sprache mächtig", hooks: ["außenseiter","fahrend"] },
          { text: "fremd in dieser Welt", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "Den langen Weg heim finden", description: "Zwischen ihm und dem Land seiner Geburt liegen Meere, Wüsten und Namen, die er nicht aussprechen kann. Er kam nicht freiwillig hierher, so viel weiß er, den Rest verschluckte ein Fieber auf der Überfahrt. Er sammelt jeden Hinweis auf eine Route nach Osten, denn irgendwo beginnt der Weg zurück.", hooks: ["fahrend","verlust"] },
          { title: "Das Wissen der Heimat hier fruchten lassen", description: "Er trägt Künste in sich, die hier niemand kennt, eine Heilung, die kein Bader glaubt, eine Rechenkunst, über die die Gelehrten lachen, bis sie stimmt. Anfangs wollte er nur überleben. Nun will er, dass etwas von seiner Heimat bleibt, auch wenn er selbst einmal geht, und sucht die Ersten, die lernen wollen.", hooks: ["wissen","geheimnis"] },
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
          { text: "erkennt stille Not", hooks: ["glaube","wissen"] },
          { text: "macht Mut", hooks: ["glaube","natur"] },
          { text: "kann verzeihen", hooks: ["glaube"] },
        ],
        weaknessTags: [
          { text: "leicht ausnutzbar", hooks: ["außenseiter"] },
          { text: "nimmt alles zu Herzen", hooks: ["verlust","natur"] },
        ],
        quests: [
          { title: "Keinen im Stich lassen", description: "Als Kind sah er zu, wie ein Bettler vor dem Wirtshaus erfror, während drinnen gelacht wurde, und schwor sich, nie zu den Lachenden zu gehören. Seither zählt für ihn jeder, den die anderen übersehen. Er sucht die Vergessenen, weil er weiß, wie sich Vergessenwerden anfühlt.", hooks: ["glaube","außenseiter"] },
          { title: "Güte zurückgeben", description: "Einmal, als er ganz unten war, hielt eine Fremde an, teilte ihr Brot und ging weiter, ohne einen Namen zu nennen. Diese Schuld kann er ihr nie zurückzahlen, also zahlt er sie an alle anderen. Er sucht die Gelegenheit, jemandem so beizustehen, wie man einst ihm beistand.", hooks: ["glaube","verlust"] },
        ]
      },
      {
        text: "das goldene Lächeln", hooks: ["stadt"],
        powerTags: [
          { text: "einnehmendes Lächeln", hooks: ["stadt"] },
          { text: "geschliffene Zunge", hooks: ["stadt"] },
          { text: "bringt jeden zum Reden", hooks: ["stadt"] },
          { text: "liest den Raum", hooks: ["stadt","wissen"] },
        ],
        weaknessTags: [
          { text: "braucht Applaus", hooks: ["macht"] },
          { text: "redet zu viel", hooks: ["stadt"] },
        ],
        quests: [
          { title: "Menschen für eine Sache gewinnen", description: "Er hat gesehen, was Schwerter anrichten, und glaubt seither, dass man mit dem richtigen Wort mehr bewegt als mit jeder Klinge. Eine Sache brennt in ihm, größer als er selbst. Er sucht die Menschen, die er dafür gewinnen kann, einen Handschlag, ein Lächeln nach dem anderen.", hooks: ["stadt","macht"] },
          { title: "Erkennen, wer wirklich bleibt", description: "So viele lächeln zurück, dass er nicht mehr weiß, wer ihn meint und wer nur den Glanz. Einmal, als es ihm schlecht ging, blieb der Saal leer. Er will herausfinden, wer dann noch kommt, und hört auf, sich mit Applaus zu begnügen.", hooks: ["glaube","stadt"] },
        ]
      },
      {
        text: "mürrisch wie Stein", hooks: ["außenseiter"],
        powerTags: [
          { text: "sturer Dickkopf", hooks: ["natur"] },
          { text: "einschüchternd", hooks: ["natur"] },
          { text: "kalter Blick", hooks: ["macht"] },
          { text: "gibt nie auf", hooks: ["glaube","schicksal"] },
        ],
        weaknessTags: [
          { text: "leicht zu reizen", hooks: ["kampf"] },
          { text: "schroff und abweisend", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "Mir selbst nicht im Weg stehen", description: "Für andere bricht er Berge ab, für sich selbst rührt er keinen Finger, als hätte er es nicht verdient. Ein alter Freund hat ihm das einmal ins Gesicht gesagt, kurz bevor er starb. Der Satz sitzt wie ein Splitter, und er sucht mühsam den Weg, ihn sich herauszuziehen.", hooks: ["natur","verlust"] },
          { title: "Treu bleiben um jeden Preis", description: "Er hat sich entschieden, zu wem er gehört, ein für alle Mal, und diese Wahl steht fester als Granit. Man hat versucht, sie ihm abzukaufen, abzupressen, auszureden. Er wird beweisen, dass sein Wort hält, auch wenn ihn das Festhalten am Ende alles kostet.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "geübte Lügnerin", hooks: ["stadt","geheimnis"],
        powerTags: [
          { text: "durchschaut Lügen", hooks: ["stadt","geheimnis"] },
          { text: "trägt jede Maske", hooks: ["stadt","geheimnis"] },
          { text: "lügt mit ruhigem Puls", hooks: ["natur"] },
          { text: "redet sich heraus", hooks: ["stadt"] },
        ],
        weaknessTags: [
          { text: "glaubt sich selbst nicht mehr", hooks: ["geheimnis","verlust"] },
          { text: "wird beim Wort genommen", hooks: ["stadt","geheimnis"] },
        ],
        quests: [
          { title: "Mein eigenes Gesicht wiederfinden", description: "So viele Rollen hat sie gespielt, dass sie nachts nicht mehr weiß, welche Stimme die ihre ist. In einem alten Spiegel hat sie neulich kurz jemanden gesehen, den sie nicht erkannte. Sie will herausfinden, wer unter all den Masken übrig geblieben ist, ehe gar nichts mehr da ist.", hooks: ["geheimnis","schicksal"] },
          { title: "Jemanden finden, der mich durchschaut", description: "Niemand durchschaut sie, und was Stolz sein sollte, fühlt sich an wie eine Zelle. Einmal hat einer sie beim Lügen ertappt und trotzdem geblieben; sie hat ihn fortgeschickt und bereut es bis heute. Sie sucht den Blick, der hinter die Maske sieht und nicht wegschaut.", hooks: ["glaube","stadt"] },
        ]
      },
      {
        text: "unstillbar neugierig", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "stellt die richtige Frage", hooks: ["wissen"] },
          { text: "hört jedes Gerücht", hooks: ["stadt","geheimnis"] },
          { text: "vergisst nichts", hooks: ["wissen"] },
          { text: "kombiniert schnell", hooks: ["wissen"] },
        ],
        weaknessTags: [
          { text: "verliert sich in Details", hooks: ["wissen","geheimnis"] },
          { text: "muss alles wissen", hooks: ["wissen","geheimnis"] },
        ],
        quests: [
          { title: "Der Wahrheit auf den Grund gehen", description: "Sie erträgt kein „das war schon immer so“; jede glatte Erklärung juckt sie wie ein loser Faden, an dem sie ziehen muss. Gerade jetzt beschäftigt sie eine Frage, der alle auszuweichen scheinen. Sie wird nicht ruhen, bis sie mit eigenen Augen gesehen hat, was dahintersteckt.", hooks: ["wissen","geheimnis"] },
          { title: "Das Rätsel lösen, das keiner lösen will", description: "Ein altes Rätsel hat sich in ihr festgebissen, eines, bei dem die Alten abwinken und die Klugen blass werden. Genau das macht es unwiderstehlich. Sie folgt jedem Hinweis, sammelt jede Halbwahrheit, bis das Bild sich fügt, egal wohin es sie führt.", hooks: ["geheimnis","schicksal"] },
        ]
      },
      {
        text: "tröstet die Welt", hooks: ["glaube"],
        powerTags: [
          { text: "einfühlsame Stille", hooks: ["glaube"] },
          { text: "findet die rechten Worte", hooks: ["glaube"] },
          { text: "schenkt Hoffnung", hooks: ["glaube","natur"] },
          { text: "guter Rat", hooks: ["glaube","natur"] },
        ],
        weaknessTags: [
          { text: "leidet an fremdem Kummer", hooks: ["natur","glaube"] },
          { text: "vergisst sich selbst", hooks: ["verlust","glaube"] },
        ],
        quests: [
          { title: "Licht in dunkle Räume bringen", description: "Wo andere die Verzagten meiden wie eine Krankheit, setzt sie sich dazu. Sie hat einmal jemanden zu spät getröstet und trägt das seither mit sich. Sie sucht die Stillen mit den leeren Blicken, weil sie glaubt, dass ein einziges gutes Wort einen Menschen halten kann.", hooks: ["glaube","macht"] },
          { title: "Auch für mich selbst da sein", description: "Für jeden fremden Kummer hat sie ein offenes Ohr, den eigenen schluckt sie hinunter, bis er sie von innen aushöhlt. Eine Freundin fragte neulich, wer eigentlich sie tröste, und sie wusste keine Antwort. Sie lernt langsam, dass auch ihr Herz Pflege braucht.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "gefährlich gutgläubig", hooks: ["außenseiter","schicksal"],
        powerTags: [
          { text: "sieht das Gute", hooks: ["glaube"] },
          { text: "gewinnt schnell Vertrauen", hooks: ["glaube","stadt"] },
          { text: "gibt zweite Chancen", hooks: ["glaube"] },
          { text: "unbeirrbar freundlich", hooks: ["glaube","natur"] },
        ],
        weaknessTags: [
          { text: "läuft in offene Fallen", hooks: ["außenseiter","schicksal"] },
          { text: "glaubt jede Ausrede", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "Vertrauen ohne Reue lernen", description: "Dreimal hat ihn sein Vertrauen teuer zu stehen gebracht, und dreimal hat er trotzdem wieder die Hand gereicht. Er will kein misstrauischer, harter Mensch werden, aber auch kein Narr bleiben. Er sucht den schmalen Grat, auf dem man offen bleibt, ohne blind zu sein.", hooks: ["außenseiter","schicksal"] },
          { title: "An die Güte glauben", description: "Man nennt seine Gutgläubigkeit Schwäche und lacht, wenn er wieder hereinfällt. Er weigert sich, deshalb am Menschen zu verzweifeln. Mit jedem, dem er zu Recht vertraut hat, will er beweisen, dass gelebtes Vertrauen mehr aufbaut, als es je zerstört.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "das ruhige Auge im Sturm", hooks: ["natur","macht"],
        powerTags: [
          { text: "unerschütterlich ruhig", hooks: ["natur"] },
          { text: "ordnet das Chaos", hooks: ["natur","macht"] },
          { text: "schlichtet Streit", hooks: ["kampf","glaube"] },
          { text: "gibt Halt", hooks: ["glaube","natur"] },
        ],
        weaknessTags: [
          { text: "staut alles in sich auf", hooks: ["verlust","natur"] },
          { text: "wirkt kühl und fern", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "Frieden stiften wo Streit tobt", description: "Er hat als Kind zu viele Türen knallen hören und früh gelernt, in der Mitte des Sturms still zu werden. Wo andere schreien, wird er leise, und die Lautesten verstummen. Er sucht die Konflikte, die sonst niemand entwirren will, weil er glaubt, dass fast jeder Streit einen ruhigen Punkt braucht.", hooks: ["natur","macht"] },
          { title: "Den eigenen Sturm beruhigen", description: "Nach außen ist er der Fels, an dem sich alle festhalten; innen tobt, was er für die anderen glättet, unbemerkt weiter. Neulich zitterte ihm zum ersten Mal die Hand, und niemand sah es. Er beginnt zu ahnen, dass auch ein Fels Risse bekommt, und sucht seinen eigenen ruhigen Punkt.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "kein Blatt vor dem Mund", hooks: ["außenseiter"],
        powerTags: [
          { text: "spricht Klartext", hooks: ["außenseiter","stadt"] },
          { text: "unerschrocken", hooks: ["außenseiter","macht"] },
          { text: "durchschaut Lügen", hooks: ["stadt","geheimnis"] },
          { text: "unbestechlich", hooks: ["glaube","macht"] },
        ],
        weaknessTags: [
          { text: "zu ehrlich", hooks: ["glaube"] },
          { text: "macht sich Feinde", hooks: ["außenseiter","kampf"] },
        ],
        quests: [
          { title: "Wahrheit gegen Mächtige aussprechen", description: "Er hat einmal geschwiegen, als ein Mächtiger log, und ein Unschuldiger bezahlte dafür; dieses Schweigen verzeiht er sich nicht. Seither redet er, wo andere kuschen. Es gibt eine Lüge, groß und gut geschützt, die er vor allen aussprechen will, ganz gleich, wer dahintersteht.", hooks: ["außenseiter","macht"] },
          { title: "Mir selbst nicht untreu werden", description: "Man hat ihm Posten geboten, Gold, ein ruhiges Leben, alles gegen ein bisschen Schweigen. Jedes Mal spürt er, wie leicht es wäre und wie viel er dabei verlöre. Er will beweisen, dass ein Mensch sich nicht kaufen lässt, auch wenn ihn die Ehrlichkeit einsam und arm macht.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "lacht zuletzt", hooks: ["stadt"],
        powerTags: [
          { text: "Witz in dunkler Stunde", hooks: ["natur"] },
          { text: "findet überall Komik", hooks: ["außenseiter","schicksal"] },
          { text: "spielt den Narren", hooks: ["glaube"] },
          { text: "entwaffnender Humor", hooks: ["stadt"] },
        ],
        weaknessTags: [
          { text: "macht alles ins Lächerliche", hooks: ["außenseiter","stadt"] },
          { text: "im falschen Moment rührselig", hooks: ["verlust"] },
        ],
        quests: [
          { title: "Mit einem Scherz die Stimmung wenden", description: "Er hat gelernt, dass ein Lachen in der richtigen Sekunde eine Faust wieder öffnet und einen Streit entwaffnet. Als sein Dorf einst verzweifelte, war er der Einzige, der noch einen Witz fand, und es half. Er sucht die Momente, in denen ein Scherz mehr ausrichtet als jedes ernste Wort.", hooks: ["glaube","macht"] },
          { title: "Ernst genommen werden", description: "Weil er alles ins Lächerliche zieht, hält man ihn für einen Narren und übersieht, dass er mehr sieht als die meisten. Einmal warnte er im Scherz vor einer Gefahr, und niemand hörte hin, bis es zu spät war. Er will, dass man erkennt, dass unter dem Lachen ein wacher Kopf sitzt.", hooks: ["stadt","außenseiter"] },
        ]
      },
      {
        text: "verschwiegen wie ein Grab", hooks: ["geheimnis"],
        powerTags: [
          { text: "verrät kein Wort", hooks: ["geheimnis","glaube"] },
          { text: "hört jedes Gerücht", hooks: ["stadt","geheimnis"] },
          { text: "unbewegte Miene", hooks: ["natur"] },
          { text: "liest den Raum", hooks: ["stadt","wissen"] },
        ],
        weaknessTags: [
          { text: "trägt zu viele Geheimnisse", hooks: ["geheimnis","verlust"] },
          { text: "erpressbar durch Wissen", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "Ein anvertrautes Geheimnis schützen", description: "Jemand hat ihm im Sterben etwas anvertraut, das mächtige Leute lieber begraben sähen, und ihn zum einzigen Träger gemacht. Seither prüft er jedes zu freundliche Gesicht. Er will das Geheimnis dorthin bringen, wo es sicher ist, oder es hüten, bis der Richtige danach fragt.", hooks: ["geheimnis","glaube"] },
          { title: "Jemandem das ganze Geheimnis sein", description: "Er trägt die Geheimnisse halber Städte, und die Last macht ihn einsam und angreifbar zugleich. Einmal alles aussprechen zu dürfen, ohne Furcht vor Verrat, kommt ihm vor wie ein unerreichbarer Luxus. Er sucht den einen Menschen, dem er sich ganz offenbaren kann.", hooks: ["glaube","stadt"] },
        ]
      },
      {
        text: "verhängnisvoll neugierig", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "spürt Verborgenem nach", hooks: ["geheimnis","wissen"] },
          { text: "findet verborgene Türen", hooks: ["geheimnis"] },
          { text: "entziffert alte Schriften", hooks: ["wissen","geheimnis"] },
          { text: "lässt nicht locker", hooks: ["glaube","schicksal"] },
        ],
        weaknessTags: [
          { text: "weckt schlafende Hunde", hooks: ["geheimnis","schicksal"] },
          { text: "verliert sich in Details", hooks: ["wissen","geheimnis"] },
        ],
        quests: [
          { title: "Ein gefährliches Geheimnis lüften", description: "Es gibt eine Tür, die alle für zugemauert halten, und ein Wort, das man im Dorf nur mit gesenkter Stimme sagt. Genau dorthin zieht es sie. Sie weiß, dass manche Wahrheiten beißen, und kann trotzdem nicht anders, als das Verborgene ans Licht zu zerren.", hooks: ["geheimnis","schicksal"] },
          { title: "Die Folgen meiner Fragen tragen", description: "Ihre Fragerei hat etwas geweckt, das nun nicht mehr schläft, und andere sind dadurch in Gefahr geraten. Weglaufen wäre leicht. Sie bleibt und stellt sich dem, was ihre Neugier heraufbeschwor, denn wer eine Tür öffnet, hat sie auch wieder zu schließen.", hooks: ["wissen","verlust"] },
        ]
      },
    ]
  },
  "Skill or Trade": {
    type: "Origin",
    titles: [
      {
        text: "Fährtenleser", hooks: ["natur","handwerk"],
        powerTags: [
          { text: "kennt den Wald", hooks: ["natur"] },
          { text: "kartenkundig", hooks: ["natur","wissen"] },
          { text: "wittert Fallen", hooks: ["natur","handwerk"] },
          { text: "Orientierungssinn", hooks: ["natur","fahrend"] },
        ],
        weaknessTags: [
          { text: "fremd in der Stadt", hooks: ["natur","außenseiter"] },
          { text: "Sonderling", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "Ich suche die Fährte, die zählt.", description: "Im Dorf zählt, wer säen und schmieden kann; für einen wie ihn hat man höchstens ein Schulterzucken übrig. Dabei weiß er, dass sein Blick Leben retten könnte, wenn man ihn nur ließe. Er sucht die eine Aufgabe, nach der niemand mehr fragt, wozu einer wie er gut sein soll.", hooks: ["natur","handwerk"] },
          { title: "Der ältesten Fährte folgen", description: "Im tiefsten Wald kreuzt manchmal eine Spur seinen Weg, die keinem Tier gehört, das er kennt, und die älter wirkt als der Wald selbst. Zweimal hat er sie verloren, ehe er Mut fasste. Diesmal will er ihr folgen, bis er weiß, was sie hinterließ.", hooks: ["natur","geheimnis"] },
        ]
      },
      {
        text: "Schmied der Berge", hooks: ["handwerk","natur"],
        powerTags: [
          { text: "Meister an der Esse", hooks: ["handwerk"] },
          { text: "kennt jedes Metall", hooks: ["handwerk","natur"] },
          { text: "fester Griff", hooks: ["handwerk"] },
          { text: "erkennt gute Arbeit", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "erträgt keinen Pfusch", hooks: ["handwerk"] },
          { text: "hilflos ohne Werkzeug", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Der Beste meines Fachs werden", description: "An der Esse ist er lebendig, überall sonst nur halb. Er hat einen Meister gekannt, dessen Klingen man am Klang erkannte, und schwor sich, eines Tages so genannt zu werden. Er sucht die Aufträge und Lehrmeister, die ihn diesem Ruf näherbringen.", hooks: ["handwerk"] },
          { title: "Etwas schmieden, das die Zeit übersteht", description: "Alles, was er fertigt, wird stumpf, zerbricht oder rostet, und das nagt an ihm. Einmal will er eine Klinge schaffen, die noch schneidet, wenn sein Name vergessen ist. Er sucht den seltenen Stahl und das Feuer, heiß genug, um sie zu vollenden.", hooks: ["handwerk"] },
        ]
      },
      {
        text: "fahrender Beutelschneider", hooks: ["außenseiter","fahrend","stadt"],
        powerTags: [
          { text: "flinke Finger", hooks: ["handwerk","stadt"] },
          { text: "lautlose Schritte", hooks: ["stadt","außenseiter"] },
          { text: "umgeht jede Wache", hooks: ["stadt","außenseiter"] },
          { text: "unauffällig", hooks: ["stadt","geheimnis"] },
        ],
        weaknessTags: [
          { text: "überall beobachtet", hooks: ["außenseiter"] },
          { text: "vogelfrei", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "Mir einen ehrlichen Platz aufbauen", description: "Sein Leben lang lebte er aus fremden Taschen, und noch nie gehörte ihm etwas, das er behalten durfte. Er ist müde, bei jedem Blick zusammenzuzucken. Er sucht den Ort und die Arbeit, mit denen er sich etwas Eigenes verdient, das ihm keiner nehmen kann.", hooks: ["außenseiter","fahrend"] },
          { title: "Jede alte Schuld begleichen", description: "Hinter ihm liegt eine Spur bestohlener Menschen, und manche Gesichter kehren nachts wieder. Er führt inzwischen selbst Buch darüber. Was er nahm, will er zurückgeben, heimlich in eine Tasche gesteckt oder offen in die Hand, bis die Liste leer ist.", hooks: ["verlust","stadt"] },
        ]
      },
      {
        text: "Heilkundige", hooks: ["handwerk","wissen"],
        powerTags: [
          { text: "Heilkräuter", hooks: ["handwerk","natur"] },
          { text: "einfache Heilkunst", hooks: ["handwerk"] },
          { text: "fachkundiger Blick", hooks: ["handwerk","wissen"] },
          { text: "ruhige Hände", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "kann nicht nein sagen", hooks: ["glaube"] },
          { text: "hilflos ohne Werkzeug", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Mit meinem Handwerk ein Leben retten", description: "Sie hat viele durchgebracht und einige verloren, und die Verlorenen wiegen schwerer. Jetzt liegt ihr ein Fall vor, den andere aufgegeben haben. Sie will beweisen, ihren Zweiflern und sich selbst, dass ihre Hände auch dann noch das Richtige tun, wenn alle sagen, es sei zu spät.", hooks: ["handwerk","wissen"] },
          { title: "Mein Wissen weitergeben", description: "Kein Heiler rührt ewig die Hände, das weiß sie, und ihr Wissen steht in keinem Buch. Sie fürchtet, dass es mit ihr verschwindet wie ein ausgeblasenes Licht. Sie sucht die Hände, die lernen wollen, ehe die ihren zu müde werden.", hooks: ["handwerk","wissen"] },
        ]
      },
      {
        text: "Steuermann", hooks: ["handwerk","fahrend"],
        powerTags: [
          { text: "liest jede Karte", hooks: ["fahrend","wissen"] },
          { text: "kennt jeden Knoten", hooks: ["handwerk","fahrend"] },
          { text: "ruhig im Sturm", hooks: ["handwerk","fahrend"] },
          { text: "wetterkundig", hooks: ["natur","fahrend"] },
        ],
        weaknessTags: [
          { text: "verloren ohne sein Schiff", hooks: ["fahrend","verlust"] },
          { text: "kennt nur das Deck", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Den sichersten Kurs finden", description: "Er trägt Verantwortung für jede Seele an Bord, und ein einziger Fehler ertränkt sie alle. Eine Fahrt steht bevor, gefährlicher als alles, was er kennt. Er sucht den Kurs, der Schiff und Mannschaft durch das schlimmste Wasser heil hindurchbringt.", hooks: ["fahrend","handwerk"] },
          { title: "Ein Gewässer befahren, das keiner kennt", description: "Die vertrauten Routen langweilen ihn längst, und hinter dem letzten kartierten Riff ahnt er einen Weg, den noch kein Kiel zog. Alte Seeleute sprechen von einer Strömung, die nirgendwo hinführt oder überallhin. Er will es mit eigenen Augen sehen.", hooks: ["fahrend","geheimnis"] },
        ]
      },
      {
        text: "Bogenbauer", hooks: ["handwerk"],
        powerTags: [
          { text: "kennt jedes Holz", hooks: ["handwerk","natur"] },
          { text: "fehlerfreie Arbeit", hooks: ["handwerk"] },
          { text: "treffsicher", hooks: ["handwerk","kampf"] },
          { text: "gutes Werkzeug", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "verliert sich in der Arbeit", hooks: ["handwerk"] },
          { text: "erträgt keinen Pfusch", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Den vollkommenen Bogen bauen", description: "Ein Gedanke lässt ihn nicht schlafen: ob seine Hände einen Bogen schaffen können, wie es keinen zweiten gibt. Nicht für Lob, nur um es zu wissen. Er sucht das eine gewachsene Holz, von dem die Alten erzählen, das singt, wenn man es spannt.", hooks: ["handwerk"] },
          { title: "Mein Handwerk vor dem Vergessen bewahren", description: "Ringsum verstummt das alte Wissen, und immer weniger verstehen noch, wie ein guter Bogen entsteht. Das schmerzt ihn mehr als jeder Pfusch. Er sucht Hände, die lernen wollen, und trägt die Kunst dorthin, wo sie sonst erlischt.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "Gerber am Fluss", hooks: ["handwerk","natur"],
        powerTags: [
          { text: "sichere Routine", hooks: ["handwerk"] },
          { text: "kennt jedes Leder", hooks: ["handwerk","natur"] },
          { text: "schätzt Maß und Wert", hooks: ["handwerk","wissen"] },
          { text: "zäh und geduldig", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "wirkt stumpf und einsilbig", hooks: ["handwerk"] },
          { text: "schlechter Händler", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Mein Gewerbe geachtet machen", description: "Man rümpft die Nase, wenn er vorbeigeht, denn sein Handwerk stinkt und gilt als niedrig. Dabei trägt halb das Dorf, was seine Hände gerbten. Er will beweisen, dass ehrbar ist, was nützlich ist, und dass niemand auf ihn herabsehen sollte.", hooks: ["handwerk","stadt"] },
          { title: "Einen tieferen Sinn in meiner Arbeit finden", description: "Häute werden zu Leder, Leder zu Münzen, und die Münzen zerrinnen; allmählich fragt er sich, ob das alles ist. Er möchte, dass sein Leder etwas trägt, das zählt, einen Sattel für einen Boten, Riemen für eine gute Sache. Er sucht den Zweck, der seiner Mühe Gewicht gibt.", hooks: ["handwerk"] },
        ]
      },
      {
        text: "Brauerin der alten Rezepte", hooks: ["handwerk"],
        powerTags: [
          { text: "volle Vorratskammer", hooks: ["handwerk"] },
          { text: "kennt jedes Rezept", hooks: ["handwerk","wissen"] },
          { text: "feine Zunge", hooks: ["handwerk"] },
          { text: "sichere Routine", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "verliert sich im Sudkessel", hooks: ["handwerk"] },
          { text: "weltfremd", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Die alten Rezepte bewahren", description: "In ihrem Kopf leben Gebräue, die schon ihre Urgroßmutter ansetzte und die sonst niemand mehr kennt. Sie fürchtet, dass sie mit ihr verschwinden wie Schaum. Sie sucht die letzten, die noch davon wissen, und schreibt zusammen, was nie aufgeschrieben wurde.", hooks: ["handwerk","verlust"] },
          { title: "Ein einziges Meisterstück brauen", description: "Einmal will sie ein Gebräu schaffen, von dem man noch in Generationen erzählt, so wie sie heute von den Alten erzählt. Ihr fehlt eine Zutat, die nur an einem Ort wächst, von dem niemand mehr genau weiß, wo. Sie zieht aus, ihn zu finden.", hooks: ["handwerk"] },
        ]
      },
      {
        text: "Kräutersammlerin", hooks: ["natur","handwerk"],
        powerTags: [
          { text: "kennt jede Heilpflanze", hooks: ["natur","wissen"] },
          { text: "findet essbares Grün", hooks: ["natur","handwerk"] },
          { text: "kennt den Wald", hooks: ["natur"] },
          { text: "Wissen der Alten", hooks: ["natur","wissen"] },
        ],
        weaknessTags: [
          { text: "misstraut Fremden", hooks: ["außenseiter","natur"] },
          { text: "fremd in der Stadt", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "Die seltenste Pflanze finden", description: "Ein Kraut fehlt ihr, von dem nur ein einziges vergilbtes Blatt in ihrem Buch zeugt, gezeichnet von einer Hand, die längst tot ist. Es soll nur einmal im Menschenleben blühen. Sie sucht den Hang, an dem es wächst, und den Mond, unter dem es sich zeigt.", hooks: ["natur","geheimnis"] },
          { title: "Mein Pflanzenwissen weitergeben", description: "Was sie über Kräuter weiß, könnte Fieber brechen und Wunden schließen, und doch trägt sie es allein durch die Wälder. Sie beginnt zu fürchten, dass es mit ihr verwildert. Sie sucht die Hände, die es lernen wollen, auch wenn ihr Misstrauen bei jedem Fremden aufsteht.", hooks: ["natur","wissen"] },
        ]
      },
      {
        text: "Bote der schnellen Füße", hooks: ["fahrend","handwerk"],
        powerTags: [
          { text: "Orientierungssinn", hooks: ["fahrend","natur"] },
          { text: "kennt jeden Schleichweg", hooks: ["fahrend","stadt"] },
          { text: "reist leicht", hooks: ["fahrend"] },
          { text: "ausdauernde Beine", hooks: ["fahrend"] },
        ],
        weaknessTags: [
          { text: "nie lange am selben Ort", hooks: ["fahrend","verlust"] },
          { text: "gehetzt vom nächsten Auftrag", hooks: ["fahrend"] },
        ],
        quests: [
          { title: "Die wichtigste Botschaft überbringen", description: "Er hat schon Nachrichten durch Sturm und Hinterhalt getragen, doch diese wiegt schwerer als alle. Wovon sie kündet, weiß er nicht, nur dass Menschen sterben, wenn sie zu spät kommt. Sie ans Ziel zu bringen ist der einzige Gedanke, der ihn vorantreibt.", hooks: ["fahrend","handwerk"] },
          { title: "Einen Ort zum Bleiben finden", description: "Seine Füße haben ihn weiter getragen als die meisten je kommen, und doch nie nach Hause. Nachts, in fremden Scheunen, denkt er an einen Platz, an dem sein Laufen endet. Er sucht ihn, obwohl er fürchtet, das Stillhalten nicht mehr zu ertragen.", hooks: ["fahrend","verlust"] },
        ]
      },
      {
        text: "feiner Tischler", hooks: ["handwerk"],
        powerTags: [
          { text: "ungewöhnlich präzise", hooks: ["handwerk"] },
          { text: "baut auch im Dunkeln", hooks: ["handwerk"] },
          { text: "flickt Unbrauchbares", hooks: ["handwerk"] },
          { text: "gutes Werkzeug", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "erträgt keinen Pfusch", hooks: ["handwerk"] },
          { text: "kompromisslose Berufsehre", hooks: ["handwerk","glaube"] },
        ],
        quests: [
          { title: "Das schwierigste Stück bauen", description: "Ihn reizt das eine Werkstück, an dem sich Meister die Zähne ausbeißen, nicht des Lobes wegen, sondern weil er wissen muss, ob seine Hände ihm gewachsen sind. Er hat Zeichnungen davon gesehen, in einem Buch, das ein Fremder nur widerwillig zeigte. Er sucht das Buch und das Holz.", hooks: ["handwerk"] },
          { title: "Ein Werk für die Ewigkeit schaffen", description: "Alles, was er tischlert, verschleißt und wird ersetzt, und das nagt an ihm. Einmal will er etwas fügen, das noch steht, wenn seine Enkel Enkel haben. Er sucht die Aufgabe, die eines solchen Werks würdig ist, und die Zeit, es zu vollenden.", hooks: ["handwerk"] },
        ]
      },
      {
        text: "Seiltänzerin", hooks: ["handwerk","fahrend"],
        powerTags: [
          { text: "sicheres Gleichgewicht", hooks: ["handwerk"] },
          { text: "einnehmender Auftritt", hooks: ["fahrend","stadt"] },
          { text: "flink und gelenkig", hooks: ["handwerk","natur"] },
          { text: "schwindelfrei", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "ein Sturz beendet alles", hooks: ["handwerk","verlust"] },
          { text: "nie lange am selben Ort", hooks: ["fahrend","außenseiter"] },
        ],
        quests: [
          { title: "Den unmöglichen Tanz wagen", description: "Sie will das Seil dort spannen, wo es noch niemand wagte, über einer Schlucht, zwischen zwei Türmen, vor einem Publikum, das den Atem anhält. Ein alter Artist hat ihr davon erzählt, kurz bevor er stürzte. Sie sucht den Ort, der ihres Tanzes würdig ist.", hooks: ["handwerk","fahrend"] },
          { title: "Beifall finden, der wirklich zählt", description: "Der Jubel der Menge verklingt schnell und lässt sie leer zurück, von Markt zu Markt derselbe Lärm. Hinter all den Blicken sucht sie den einen, der nicht die Vorführung sieht, sondern sie. Diesen wahren Beifall zu finden, treibt sie weiter, Seil um Seil.", hooks: ["fahrend","verlust"] },
        ]
      },
    ]
  },
  "Trait": {
    type: "Origin",
    titles: [
      {
        text: "stark wie ein Ochse", hooks: ["kampf","natur"],
        powerTags: [
          { text: "unbändige Kraft", hooks: ["kampf","schicksal"] },
          { text: "fester Griff", hooks: ["kampf","natur"] },
          { text: "schleppt mühelos", hooks: ["natur","handwerk"] },
          { text: "bricht durch", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "unübersehbar groß", hooks: ["schicksal","kampf"] },
          { text: "schwer und langsam", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "Mehr sein als bloße Kraft", description: "Alle rufen ihn, wenn ein Karren im Dreck steckt, und vergessen ihn, wenn geredet wird, als säße sein Verstand in den Armen. Das wurmt ihn mehr, als er zeigt. Er sucht die eine Gelegenheit, bei der nicht seine Kraft zählt, sondern sein Kopf, und will sie nutzen.", hooks: ["kampf","schicksal"] },
          { title: "Mich vor die Wehrlosen stellen", description: "Als er einmal nicht eingriff, weil es ihn nichts anging, trug ein Kind die Folgen; das Bild wird er nicht los. Seine Kraft, hat er beschlossen, gehört nicht ihm allein. Wo eine Faust auf einen Schwächeren zielt, will er die Faust sein, die dazwischenfährt.", hooks: ["glaube","kampf"] },
        ]
      },
      {
        text: "gelenkig wie eine Katze", hooks: ["handwerk","natur"],
        powerTags: [
          { text: "klettert überall hoch", hooks: ["natur","handwerk"] },
          { text: "weiter Sprung", hooks: ["schicksal","natur"] },
          { text: "sicherer Tritt", hooks: ["natur","handwerk"] },
          { text: "fällt weich", hooks: ["handwerk","natur"] },
        ],
        weaknessTags: [
          { text: "schnell erschöpft", hooks: ["schicksal","verlust"] },
          { text: "tollkühn", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Den Sprung wagen, den keiner wagt", description: "Es heißt, über der Schlucht der Verzweiflung habe noch nie ein Mensch die andere Seite erreicht, und die wenigen, die es versuchten, kamen nicht zurück. Genau deshalb kann sie an nichts anderes mehr denken. Sie sucht den Sprung, der sie unsterblich macht oder eben nicht.", hooks: ["schicksal","handwerk"] },
          { title: "Den höchsten Gipfel finden", description: "Als Kind stand sie auf jedem Dach des Dorfes und fühlte sich der Welt näher. Nun gibt es einen Gipfel, von dem die Alten sagen, oben stehe man zwischen den Sternen. Ob das stimmt, will sie mit eigenen Händen erklettern, denn Erzählungen genügen ihr nicht.", hooks: ["natur","fahrend"] },
        ]
      },
      {
        text: "unheimlich schön", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "betörender Anblick", hooks: ["schicksal","geheimnis"] },
          { text: "zieht alle Blicke an", hooks: ["schicksal","adel"] },
          { text: "unvergesslich", hooks: ["schicksal","stadt"] },
          { text: "gewinnt Sympathie", hooks: ["stadt","schicksal"] },
        ],
        weaknessTags: [
          { text: "heftig beneidet", hooks: ["schicksal","stadt"] },
          { text: "zieht unliebsame Blicke an", hooks: ["schicksal","geheimnis"] },
        ],
        quests: [
          { title: "Nicht nur fürs Gesicht gesehen werden", description: "Sein ganzes Leben lang haben Menschen ihn angestarrt und dabei nie gesehen. Man lobt sein Gesicht wie ein Gemälde und fragt nie, was er denkt. Er sucht den einen Ort oder Menschen, wo sein Mut oder sein Wort mehr zählt als sein Antlitz.", hooks: ["schicksal","außenseiter"] },
          { title: "Das Geheimnis meiner Herkunft enthüllen", description: "In seiner Schönheit liegt etwas, das nicht von hier zu sein scheint, und manche bekreuzigen sich heimlich, wenn er vorübergeht. Seine Eltern schwiegen über seine Geburt bis zuletzt. Er will wissen, woher dieser fremde Glanz stammt, ehe andere die Antwort vor ihm finden.", hooks: ["geheimnis","schicksal"] },
        ]
      },
      {
        text: "wacher Beobachter", hooks: ["schicksal","magie"],
        powerTags: [
          { text: "vorausschauend", hooks: ["schicksal","magie"] },
          { text: "wittert Gefahr", hooks: ["magie","schicksal"] },
          { text: "liest den Raum", hooks: ["schicksal","stadt"] },
          { text: "übersieht nichts", hooks: ["wissen","schicksal"] },
        ],
        weaknessTags: [
          { text: "verliert sich in Details", hooks: ["wissen","geheimnis"] },
          { text: "sieht überall Gefahren", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Die Zeichen richtig deuten", description: "Er sieht die Vorzeichen, ehe andere sie bemerken, doch Sehen und Verstehen sind zweierlei, und schon zweimal hat er falsch gedeutet. Einmal zu viel gewarnt, einmal zu wenig. Er will lernen, die Zeichen richtig zu lesen, ehe sein Zögern jemanden das Leben kostet.", hooks: ["schicksal","wissen"] },
          { title: "Vor dem kommenden Unheil warnen", description: "Er hat etwas kommen sehen, das die anderen nicht wahrhaben wollen, ein Muster in Kleinigkeiten, das sich zu einer Katastrophe fügt. Man nennt ihn einen Schwarzseher und wendet sich ab. Er nimmt die Undankbarkeit in Kauf und reist voraus, um zu warnen, wo man noch warnen kann.", hooks: ["magie","schicksal"] },
        ]
      },
      {
        text: "ausdauernder Schwimmer", hooks: ["natur","schicksal"],
        powerTags: [
          { text: "langer Atem", hooks: ["natur","schicksal"] },
          { text: "trotzt jeder Strömung", hooks: ["natur","kampf"] },
          { text: "wasserfest", hooks: ["natur","schicksal"] },
          { text: "unermüdliche Beine", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "ruhelos an Land", hooks: ["natur","außenseiter"] },
          { text: "bleibt zu lange in Gefahr", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Die tiefen Gewässer durchqueren", description: "Jenseits der Meerenge, die noch kein Schwimmer bezwang, soll ein Ufer liegen, das man nur ohne Boot erreicht. Er hat sein Leben im Wasser verbracht und spürt, dass diese Strecke die ist, für die er gemacht wurde. Der Sog der Tiefe lässt ihn nicht los.", hooks: ["natur","fahrend"] },
          { title: "Bergen, was im Wasser verloren ging", description: "Auf dem Grund, wo das Licht nicht mehr hinreicht, liegt etwas, nach dem außer ihm niemand zu tauchen wagt, ein Schatz, ein Mensch, eine Wahrheit, er weiß es selbst nicht genau. Nur, dass es ihn ruft. Erst wenn er es heraufgeholt hat, wird seine Ruhelosigkeit schweigen.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "unerschütterlich", hooks: ["glaube","schicksal"],
        powerTags: [
          { text: "eiserne Konzentration", hooks: ["handwerk","glaube"] },
          { text: "unermüdlich", hooks: ["schicksal","glaube"] },
          { text: "heiter unter Druck", hooks: ["schicksal","kampf"] },
          { text: "lässt sich nicht hetzen", hooks: ["natur","glaube"] },
        ],
        weaknessTags: [
          { text: "kennt keine Grenzen", hooks: ["schicksal","verlust"] },
          { text: "starr im Urteil", hooks: ["glaube","außenseiter"] },
        ],
        quests: [
          { title: "Standhalten, wenn alle weichen", description: "Als das halbe Dorf floh, blieb er am Deich und hielt, was zu halten war; seither nennt man ihn den Sturkopf, und er trägt es wie einen Orden. Irgendwo wartet der Posten, den kein anderer halten will. Dort will er stehen, wenn alle weichen.", hooks: ["glaube","kampf"] },
          { title: "Der feste Punkt für andere sein", description: "Wo Panik ausbricht, wird er ruhig, und die Aufgewühlten sammeln sich um ihn wie um einen Pfahl im Strom. Er hat gemerkt, dass seine Ruhe andere trägt, und beginnt, sie bewusst dorthin zu tragen, wo sie gebraucht wird, auch wenn ihn manche für kalt halten.", hooks: ["glaube","natur"] },
        ]
      },
      {
        text: "leicht zu übersehen", hooks: ["geheimnis","schicksal"],
        powerTags: [
          { text: "verschwindet in der Menge", hooks: ["außenseiter","geheimnis"] },
          { text: "lautlose Schritte", hooks: ["geheimnis","stadt"] },
          { text: "lauscht unbemerkt", hooks: ["geheimnis","stadt"] },
          { text: "vergessenes Gesicht", hooks: ["außenseiter","geheimnis"] },
        ],
        weaknessTags: [
          { text: "wird leicht vergessen", hooks: ["schicksal","verlust"] },
          { text: "selten ernst genommen", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "Erfahren, was niemand sagen will", description: "Niemand senkt die Stimme, wenn er im Raum ist, weil niemand ihn bemerkt, und so hat er gehört, was Mächtige einander nur im Flüsterton sagen. Etwas davon dürfte er nicht wissen. Genau dem geht er nach, ungesehen, Tür um Tür.", hooks: ["geheimnis","stadt"] },
          { title: "Endlich gesehen werden", description: "Ein Leben lang ist er durch Räume gegangen, ohne eine Spur zu hinterlassen, übersehen, vergessen, überhört. In ihm wächst der Wunsch, ein einziges Mal wirklich zu zählen. Er sucht den Augenblick, in dem ein Blick auf ihm ruht und erkennt, dass auch er ein Gewicht hat.", hooks: ["außenseiter","schicksal"] },
        ]
      },
      {
        text: "feines Gehör", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "hört den leisesten Laut", hooks: ["schicksal","natur"] },
          { text: "lauscht durch Wände", hooks: ["geheimnis","stadt"] },
          { text: "leiser Schläfer", hooks: ["kampf","natur"] },
          { text: "scharfe Sinne", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "von Lärm gepeinigt", hooks: ["schicksal","verlust"] },
          { text: "durch Geräusche ablenkbar", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Das verborgene Wort erlauschen", description: "In einem Haus, das er nie betrat, wird ein Satz nur einmal im Jahr geflüstert, ein Satz, für den Menschen töten würden. Sein Ohr reicht weiter als die Vorsicht der anderen. Er sucht die Wand, hinter der dieses Wort fällt, und den Tag, an dem es fällt.", hooks: ["geheimnis","schicksal"] },
          { title: "Dem Klang in die Ferne folgen", description: "Seit Wochen dringt ein Klang zu ihm, den außer ihm niemand hört, mal ein Läuten, mal eine Stimme, immer aus derselben Richtung. Die anderen tippen sich an die Stirn. Er ist sicher, dass ihn etwas ruft, und folgt dem Ton, wohin er auch führt.", hooks: ["natur","fahrend"] },
        ]
      },
      {
        text: "guter Menschenkenner", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "durchschaut Lügen", hooks: ["stadt","geheimnis"] },
          { text: "hört Falschheit heraus", hooks: ["schicksal","stadt"] },
          { text: "liest Stimmungen", hooks: ["schicksal","stadt"] },
          { text: "erkennt verborgene Not", hooks: ["glaube","wissen"] },
        ],
        weaknessTags: [
          { text: "vertraut dem Urteil zu sehr", hooks: ["schicksal","verlust"] },
          { text: "durchschaut auch Freunde", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Den Verräter entlarven", description: "Etwas an einem aus der eigenen Runde stimmt nicht, ein Zucken zu viel, ein Lachen zu spät; er spürt es, kann es aber nicht beweisen. Ein doppeltes Spiel wird gespielt, und er ist der Einzige, der es ahnt. Er wird die Maske herunterreißen, ehe Schaden geschieht.", hooks: ["geheimnis","schicksal"] },
          { title: "Den wahren Freund finden", description: "Weil er hinter jede Maske sieht, misstraut er selbst denen, die es ehrlich meinen, und bleibt darüber allein. Einmal möchte er jemandem glauben, ohne im Gesicht nach der Lüge zu suchen. Er sucht den einen, dessen Freundschaft seiner Prüfung standhält.", hooks: ["glaube","stadt"] },
        ]
      },
      {
        text: "Augen wie ein Falke", hooks: ["natur","schicksal"],
        powerTags: [
          { text: "sieht im Halbdunkel", hooks: ["natur","geheimnis"] },
          { text: "erkennt das Ferne", hooks: ["natur","schicksal"] },
          { text: "scharfer Detailblick", hooks: ["wissen","handwerk"] },
          { text: "erspäht jede Regung", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "von grellem Licht geblendet", hooks: ["schicksal","verlust"] },
          { text: "traut nur dem Auge", hooks: ["schicksal","außenseiter"] },
        ],
        quests: [
          { title: "Erspähen, was verborgen bleibt", description: "Aus einer Meile Entfernung liest er, was anderen erst aus einem Schritt auffällt, und sieht in Schatten, die für die übrigen schwarz sind. Irgendwo verbirgt sich etwas, das nur ein Blick wie seiner findet. Er weiß noch nicht, was, nur dass es sich lohnt, danach zu suchen.", hooks: ["geheimnis","natur"] },
          { title: "Den fernen Weg finden", description: "Vom höchsten Grat aus zeichnet sich für ihn ein Pfad ab, wo alle anderen nur Wildnis sehen, ein Weg zu einem Ort, den keine Karte kennt. Er hat ihn nur einmal erspäht, im Abendlicht, und nie wieder gefunden. Er sucht ihn erneut, denn er weiß, dass er dort ist.", hooks: ["natur","fahrend"] },
        ]
      },
      {
        text: "zäh wie Leder", hooks: ["schicksal","kampf"],
        powerTags: [
          { text: "trotzt Hitze und Kälte", hooks: ["natur","schicksal"] },
          { text: "heilt schnell", hooks: ["schicksal","magie"] },
          { text: "steckt Schläge weg", hooks: ["kampf","schicksal"] },
          { text: "unverwüstlich", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "übersieht eigene Wunden", hooks: ["schicksal","verlust"] },
          { text: "mutet sich zu viel zu", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Die unwirtliche Wildnis überstehen", description: "Es gibt eine Ödnis, aus der niemand zurückkehrt, nicht wegen Bestien, sondern weil das Land selbst den Menschen aufzehrt. Man erzählt sich von etwas am anderen Ende, das die Durchquerung lohnt. Er glaubt, sein Körper hält aus, woran andere zerbrachen, und will es beweisen.", hooks: ["natur","schicksal"] },
          { title: "Nicht der Erste sein, der aufgibt", description: "Aufgeben hat er nie gelernt; sein Körper vergisst Schläge, die andere zu Boden werfen. Doch er ahnt, dass Durchhalten allein noch kein Ziel ist. Er sucht die eine Sache, die es wert ist, bis zum Umfallen dafür zu stehen, damit seine Zähigkeit nicht ins Leere läuft.", hooks: ["kampf","glaube"] },
        ]
      },
      {
        text: "durchdringende Stimme", hooks: ["schicksal","macht"],
        powerTags: [
          { text: "übertönt jeden Lärm", hooks: ["schicksal","macht"] },
          { text: "gebietet Schweigen", hooks: ["macht","stadt"] },
          { text: "Befehlston wirkt", hooks: ["macht","kampf"] },
          { text: "ergreifender Gesang", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "kann sich nicht leise machen", hooks: ["schicksal","geheimnis"] },
          { text: "redet sich in Gefahr", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Den Stummen eine Stimme geben", description: "Wo er herkommt, entscheiden die Lauten, und die Leisen verhungern im Recht. Er hat eine Stimme, die ganze Plätze füllt, und beschlossen, sie nicht für sich zu brauchen. Er sucht die, denen man das Wort nimmt, und leiht ihnen die seine, bis man sie hört.", hooks: ["macht","glaube"] },
          { title: "Die Menge mit Worten wenden", description: "Einmal hat er mit ein paar Sätzen einen Aufruhr besänftigt und gespürt, welche Macht darin liegt und welche Gefahr. Er will lernen, eine aufgebrachte Menge zum Guten zu wenden, ohne sie je zu missbrauchen. Die Gelegenheit, das zu beweisen, sucht er, auch wenn ihn seine Lautstärke nie verbergen lässt.", hooks: ["macht","stadt"] },
        ]
      },
    ]
  },
  "Duty": {
    type: "Adventure",
    titles: [
      {
        text: "Licht gegen die Finsternis", hooks: ["glaube","schicksal"],
        powerTags: [
          { text: "leuchtende Rüstung", hooks: ["kampf","glaube"] },
          { text: "Bannzeichen gegen das Böse", hooks: ["glaube","magie"] },
          { text: "spürt nahende Finsternis", hooks: ["magie","schicksal"] },
          { text: "unbeirrbar", hooks: ["glaube"] },
        ],
        weaknessTags: [
          { text: "Auftrag über Vernunft", hooks: ["glaube","schicksal"] },
          { text: "verhasst bei Dienern der Nacht", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "Die Finsternis zurücktreiben", description: "Wo der Schatten sich breitmacht, zieht er hin, und die Diener der Nacht kennen seinen Namen. Doch für jeden zurückgeschlagenen Schatten steht ein neuer auf. Er sucht die Orte, an denen das Dunkel am dichtesten fällt, denn dort wird man ihn am dringendsten brauchen.", hooks: ["glaube","kampf"] },
          { title: "Die Quelle des Bösen finden", description: "Er hat begriffen, dass er ewig Schatten schlägt, solange er nur die Ausläufer trifft. Irgendwo pulsiert ein Ursprung, aus dem die Finsternis quillt. Sein Gespür zieht ihn dorthin, und er folgt ihm bis zur Wurzel, ganz gleich, wie tief sie liegt.", hooks: ["schicksal","geheimnis"] },
        ]
      },
      {
        text: "Söldner auf Vertrag", hooks: ["glaube","handwerk"],
        powerTags: [
          { text: "hält jede Abmachung", hooks: ["handwerk","glaube"] },
          { text: "erprobter Klingenkämpfer", hooks: ["kampf","handwerk"] },
          { text: "unbestechlich", hooks: ["glaube","macht"] },
          { text: "kennt den Sold der Klinge", hooks: ["handwerk","stadt"] },
        ],
        weaknessTags: [
          { text: "dem höchsten Gebot verpflichtet", hooks: ["macht","verlust"] },
          { text: "kein Freund ohne Sold", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "Den Vertrag bis zum letzten Wort erfüllen", description: "Er hat unterschrieben, und ein Söldner, der sein Wort bricht, ist bald ein toter Söldner. Der aktuelle Vertrag führt ihn in ein Nest, aus dem selten einer heil zurückkehrt. Trotzdem wird er ihn erfüllen, Zeile für Zeile, denn ohne sein Wort ist seine Klinge nichts wert.", hooks: ["handwerk","glaube"] },
          { title: "Einen Herrn finden, der mich verdient", description: "Das Gold wärmt ihn längst nicht mehr, und zu oft diente seine Klinge Sachen, für die er sich schämt. Er sucht einen Auftrag, bei dem Treue mehr zählt als der Preis, und einen Herrn, den zu verraten ihm schwerfiele. Ob es so etwas gibt, weiß er nicht, aber er sucht.", hooks: ["glaube","kampf"] },
        ]
      },
      {
        text: "Schwur dem Lehnsherrn", hooks: ["glaube","adel"],
        powerTags: [
          { text: "Banner des Hauses", hooks: ["adel","kampf"] },
          { text: "Eid gibt Kraft", hooks: ["glaube"] },
          { text: "fordert Gehorsam ein", hooks: ["macht","adel"] },
          { text: "Autorität des Hauses", hooks: ["adel","macht"] },
        ],
        weaknessTags: [
          { text: "an Befehle gebunden", hooks: ["glaube","macht"] },
          { text: "kann nicht widersprechen", hooks: ["glaube","macht"] },
        ],
        quests: [
          { title: "Meinen Schwur halten, koste es was es wolle", description: "Was er seinem Herrn schwor, ist die Achse seines Lebens, und nun verlangt der Eid etwas, das ihn alles kosten könnte. Andere würden sich davonstehlen. Er nicht. Er zieht aus, das Versprechen einzulösen, ganz gleich, wohin es ihn führt.", hooks: ["glaube","schicksal"] },
          { title: "Prüfen, ob mein Herr meiner Treue würdig ist", description: "Ein Zweifel hat sich eingeschlichen, leise und beharrlich: Dient er einem gerechten Haus oder nur einem mächtigen? Ehe er noch einen Eid in dessen Namen erfüllt, will er die Wahrheit über seinen Herrn wissen, auch wenn sie seinen Schwur zerbrechen könnte.", hooks: ["glaube","adel"] },
        ]
      },
      {
        text: "Hüterin des Landes", hooks: ["natur","glaube"],
        powerTags: [
          { text: "kennt jeden Pfad", hooks: ["natur","wissen"] },
          { text: "liest die Zeichen des Landes", hooks: ["natur","schicksal"] },
          { text: "wacht über die Schwachen", hooks: ["glaube","natur"] },
          { text: "handelt ohne Befehl", hooks: ["glaube","kampf"] },
        ],
        weaknessTags: [
          { text: "mit dem Land verwachsen", hooks: ["natur","schicksal"] },
          { text: "trägt jede Verwüstung als Schuld", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Das Land beschützen, dem ich diene", description: "Diese Erde und ihre Menschen sind ihr Auftrag, nicht auf Befehl, sondern aus einer Bindung, die sie sich nicht erklären kann. Etwas zieht durchs Reich, das Felder verdorren und Vieh verstummen lässt. Sie folgt den kranken Stellen im Land, um zu finden, was es befällt.", hooks: ["natur","glaube"] },
          { title: "Die Wunden meines Landes heilen", description: "Krieg und Raub haben Narben hinterlassen, in Feldern wie in Herzen, und jede fühlt sie wie eine eigene. Sie kennt jeden Ort, an dem das Land blutet. Sie zieht von Wunde zu Wunde, um zu schließen, was aufgerissen wurde, Acker um Acker, Dorf um Dorf.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "Rachezwang", hooks: ["verlust","kampf"],
        powerTags: [
          { text: "vergisst kein Gesicht", hooks: ["verlust","wissen"] },
          { text: "narbiger Schwertarm", hooks: ["kampf","verlust"] },
          { text: "kalt gegen den Feind", hooks: ["kampf","macht"] },
          { text: "wittert Fallen", hooks: ["kampf","wissen"] },
        ],
        weaknessTags: [
          { text: "die Rache frisst alles", hooks: ["verlust","schicksal"] },
          { text: "gejagt von der verfolgten Sippe", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "Das Unrecht rächen, das mir geschah", description: "Ein Gesicht hat sich ihm eingebrannt, und die Narbe an seinem Arm erinnert ihn jeden Morgen daran. Er folgt der Spur der Schuldigen, einen nach dem anderen, wachsam für jede Falle, die man ihm stellt. Erst wenn die Rechnung beglichen ist, glaubt er, findet er Schlaf.", hooks: ["verlust","kampf"] },
          { title: "Entscheiden, ob die Rache mich noch lohnt", description: "Die Vergeltung hat ihn ausgehöhlt und alles verdrängt, was ihm einmal lieb war. Nur ein Feind bleibt. In einer stillen Stunde fragt er sich, was von ihm übrig ist, wenn auch dieser fällt, und ob er den letzten Schritt wirklich gehen will.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "Bote des Königs", hooks: ["fahrend","macht"],
        powerTags: [
          { text: "Siegel des Königs", hooks: ["adel","macht"] },
          { text: "freies Geleit", hooks: ["fahrend","macht"] },
          { text: "kennt jede Losung", hooks: ["stadt","kampf"] },
          { text: "findet den schnellsten Weg", hooks: ["fahrend","wissen"] },
        ],
        weaknessTags: [
          { text: "Ziel für Feinde der Krone", hooks: ["macht","kampf"] },
          { text: "die Botschaft duldet keinen Aufschub", hooks: ["fahrend","schicksal"] },
        ],
        quests: [
          { title: "Die Botschaft ans Ziel bringen", description: "Das Siegel öffnet ihm Tore und macht ihn zugleich zur Zielscheibe für alle, die der Krone übelwollen. Diese Nachricht duldet keinen Aufschub, und der Weg wimmelt von Leuten, die sie abfangen wollen. Ans Ziel zu kommen, ehe es zu spät ist, ist sein einziger Gedanke.", hooks: ["fahrend","macht"] },
          { title: "Erfahren, was ich wirklich trage", description: "Die versiegelte Botschaft wiegt schwerer, als Wachs und Papier es sollten, und man hat ihn zu oft dafür gejagt. Ehe er erneut sein Leben aufs Spiel setzt, will er wissen, was da wirklich in seiner Tasche liegt und in wessen Spiel die Krone ihn geschickt hat.", hooks: ["geheimnis","macht"] },
        ]
      },
      {
        text: "Schwertarm des Ordens", hooks: ["kampf","glaube"],
        powerTags: [
          { text: "geweihte Klinge", hooks: ["kampf","magie"] },
          { text: "Kampfgebet", hooks: ["glaube","kampf"] },
          { text: "Glaubensbrüder zur Seite", hooks: ["glaube","kampf"] },
          { text: "hält die Stellung", hooks: ["kampf","glaube"] },
        ],
        weaknessTags: [
          { text: "der Orden vor dem Leben", hooks: ["glaube","schicksal"] },
          { text: "Schuld bei jedem Versagen", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Dem Orden mit Klinge und Glauben dienen", description: "Sein Schwert und sein Eid gehören der heiligen Sache, und im Dienst findet er den Sinn, den ihm sonst nichts gibt. Nun ruft der Orden ihn zu einer Aufgabe, an der schon andere zerbrachen. Er nimmt sie an, ohne zu zögern, denn Zweifel wäre Verrat.", hooks: ["kampf","glaube"] },
          { title: "Den Orden von innen reinigen", description: "Etwas ist faul geworden in den Reihen, denen er dient, und der Verdacht raubt ihm den Schlaf mehr als jede Schlacht. Hier wiegt Schweigen schwerer als Versagen. Ehe die Fäulnis den ganzen Orden verdirbt, wird er sie aufspüren, so sehr die Wahrheit auch schmerzt.", hooks: ["glaube","geheimnis"] },
        ]
      },
      {
        text: "Wächterin der Grenzmark", hooks: ["kampf","natur"],
        powerTags: [
          { text: "kennt die wilde Grenze", hooks: ["natur","wissen"] },
          { text: "späht den Feind früh", hooks: ["natur","kampf"] },
          { text: "wacht bei jedem Geräusch", hooks: ["kampf","natur"] },
          { text: "hält die Stellung", hooks: ["kampf","glaube"] },
        ],
        weaknessTags: [
          { text: "lässt die Grenze nie unbewacht", hooks: ["glaube","kampf"] },
          { text: "fern von jeder Hilfe", hooks: ["natur","verlust"] },
        ],
        quests: [
          { title: "Die Grenze gegen alles halten", description: "Was hinter der Mark lauert, drängt nach innen, und sie ist oft die Einzige, die es kommen sieht. Von einem Posten ist sie längst zu einer wandernden Wacht geworden, die den ganzen Saum der Wildnis abschreitet. Wo die Grenze dünn wird, will sie stehen.", hooks: ["kampf","natur"] },
          { title: "Ergründen, was jenseits der Mark erwacht", description: "Seit Wochen spürt sie ein Erwachen jenseits der Grenze, das sich nicht benennen lässt und ihr den Schlaf raubt. Ehe das Unbekannte hervorbricht, muss sie wissen, was sich dort regt. Sie überschreitet die Mark, allein, um das Land warnen zu können, bevor es zu spät ist.", hooks: ["natur","geheimnis"] },
        ]
      },
      {
        text: "letzter Zeuge eines Vertrags", hooks: ["geheimnis","glaube"],
        powerTags: [
          { text: "kennt jede Klausel", hooks: ["wissen","geheimnis"] },
          { text: "durchschaut Lügen", hooks: ["geheimnis"] },
          { text: "bewahrt das versiegelte Wort", hooks: ["geheimnis","glaube"] },
          { text: "weiß wann Schweigen zählt", hooks: ["geheimnis"] },
        ],
        weaknessTags: [
          { text: "gejagt um seines Wissens willen", hooks: ["geheimnis","kampf"] },
          { text: "kann das Geheimnis nicht teilen", hooks: ["geheimnis","glaube"] },
        ],
        quests: [
          { title: "Herausfinden, ob der Vertrag gerecht war", description: "Er kennt jede Klausel jenes Vertrags auswendig, dessen versiegeltes Wort er als Letzter bewahrt, und trägt die Antwort wie einen Stein in der Brust. Lange schwieg er, wie es sein Auftrag verlangte. Ehe das Geheimnis ihn erdrückt, will er selbst wissen, ob das, was er hütet, je recht war.", hooks: ["glaube","geheimnis"] },
          { title: "Die Wahrheit bezeugen, ehe sie mit mir stirbt", description: "Als einziger Lebender weiß er, was damals geschah, und genau das macht ihn zur Beute derer, die es begraben wollen. Teilen kann er es bislang nicht. Doch er spürt, die Wahrheit darf nicht mit ihm sterben, und sucht den Ort und die Ohren, vor denen er endlich Zeugnis ablegen kann.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "Schuldenbegleicherin", hooks: ["stadt","verlust"],
        powerTags: [
          { text: "kennt jedermanns Schulden", hooks: ["geheimnis","macht"] },
          { text: "spürt jeden Schuldner auf", hooks: ["stadt","wissen"] },
          { text: "fordert Gefälligkeiten ein", hooks: ["macht","stadt"] },
          { text: "unnachgiebig", hooks: ["macht","kampf"] },
        ],
        weaknessTags: [
          { text: "verhasst bei den Schuldnern", hooks: ["stadt","verlust"] },
          { text: "eigene Schulden holen sie ein", hooks: ["verlust","macht"] },
        ],
        quests: [
          { title: "Jede offene Schuld eintreiben", description: "Sie führt Buch über die Schulden halber Landstriche, und keine bleibt ihr entgehen. Eine besonders alte, besonders große steht noch aus, und der Schuldner gilt als unerreichbar. Genau den spürt sie auf, denn eine Schuld ist eine Schuld, bis zur letzten Münze.", hooks: ["stadt","macht"] },
          { title: "Meine eigene letzte Schuld begleichen", description: "So genau sie über fremde Schulden wacht, so sehr holen die eigenen sie ein, die sie zu lange verdrängt hat. Wie kann sie eintreiben, solange sie selbst tief in der Kreide steht? Ehe sie weitermacht, will sie frei werden von dem, was sie schuldet.", hooks: ["verlust","glaube"] },
        ]
      },
      {
        text: "bezahlter Verteidiger", hooks: ["kampf","handwerk"],
        powerTags: [
          { text: "Schutzschild des Auftraggebers", hooks: ["kampf","glaube"] },
          { text: "reagiert blitzschnell", hooks: ["kampf","schicksal"] },
          { text: "deckt jede Blöße", hooks: ["kampf","wissen"] },
          { text: "nimmt Wunden für andere", hooks: ["kampf","verlust"] },
        ],
        weaknessTags: [
          { text: "haftet für jedes Versagen", hooks: ["handwerk","verlust"] },
          { text: "treu nur für Sold", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Meinen Schützling am Leben halten", description: "Man bezahlt ihn dafür, zwischen einem Menschen und dem Tod zu stehen, und das tut er ganz. Diesmal ist die Gefahr größer als der Sold, und die Feinde kommen aus einer Richtung, die er nicht kennt. Trotzdem weicht er nicht von der Seite dessen, den er schützen soll.", hooks: ["kampf","handwerk"] },
          { title: "Einen schützen, den ich nicht aufgeben kann", description: "Aus Pflicht ist längst etwas anderes geworden, auch wenn er nur für Gold treu sein sollte. Der Sold ist verbraucht, der Vertrag erfüllt, und dennoch bleibt er. Diesen einen Menschen kann er nicht im Stich lassen, was immer es ihn kostet, und das verwirrt ihn selbst am meisten.", hooks: ["kampf","glaube"] },
        ]
      },
      {
        text: "Vollstreckerin des alten Gesetzes", hooks: ["macht","glaube"],
        powerTags: [
          { text: "kennt jede Regel und Ausnahme", hooks: ["wissen","macht"] },
          { text: "Autorität des Gesetzes", hooks: ["macht","adel"] },
          { text: "unbestechlich", hooks: ["glaube","macht"] },
          { text: "kennt jeden Präzedenzfall", hooks: ["wissen","macht"] },
        ],
        weaknessTags: [
          { text: "das Gesetz über die Gnade", hooks: ["glaube","macht"] },
          { text: "kann keinen Auftrag aufgeben", hooks: ["glaube","schicksal"] },
        ],
        quests: [
          { title: "Das Gesetz ohne Ansehen der Person vollstrecken", description: "Vor dem alten Recht sind Bettler und Fürst gleich, und kein Gold beugt ihr Urteil. Nun führt ihr Auftrag sie zu einem Mächtigen, den noch nie jemand zur Rechenschaft zog. Sie wird das Gesetz auch an ihm vollstrecken, ganz gleich, wer sie davon abzuhalten sucht.", hooks: ["macht","glaube"] },
          { title: "Prüfen, ob das alte Gesetz noch gerecht ist", description: "Lange diente sie dem Buchstaben, unbestechlich und hart, das Recht über jede Gnade stellend. Doch sie hat gesehen, wie die starre Regel Unrecht tat. Nun fragt sie sich, ob der Paragraph noch dem Recht dient, dem sie folgen wollte, und was sie tun muss, um gerecht zu bleiben.", hooks: ["glaube","geheimnis"] },
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
          { title: "Meinen Griff auf jeden Hafen ausweiten", description: "Einen Hafen hält sie fest in der Hand, doch die großen Waren fließen durch Häfen, die anderen gehören. Solange ein fremder Kai über ihren Kopf hinweg entscheidet, ist sie nur eine unter vielen. Sie reist die Küste ab, Hafen um Hafen, bis alle Fäden bei ihr zusammenlaufen.", hooks: ["macht","stadt"] },
          { title: "Aufspüren, was meinen Kai bedroht", description: "Jemand untergräbt still ihre Stellung, kauft ihre Spitzel, schneidet ihre Boten ab, und die Fäden führen aus der Stadt hinaus. Abzuwarten hieße verlieren. Sie folgt der Spur des Widersachers dorthin, wo er sitzt, ehe er ihr den Boden unter den Füßen wegzieht.", hooks: ["macht","stadt"] },
        ]
      },
      {
        text: "graue Eminenz", hooks: ["macht","geheimnis"],
        powerTags: [
          { text: "zieht Fäden im Verborgenen", hooks: ["macht","geheimnis"] },
          { text: "kennt jedes Geheimnis", hooks: ["geheimnis","macht"] },
          { text: "Beobachter überall", hooks: ["geheimnis","stadt"] },
          { text: "eine Geste genügt", hooks: ["macht","geheimnis"] },
        ],
        weaknessTags: [
          { text: "unsichtbare Feinde", hooks: ["geheimnis","macht"] },
          { text: "erpressbar durch Geheimnisse", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "Die wahren Strippenzieher entlarven", description: "Er dachte, er stehe an der Spitze des Spiels, bis er Fäden bemerkte, die über seine hinausreichen, gezogen von Händen ohne Namen. Wer im Schatten wirkt, fürchtet nichts mehr als einen zweiten Schatten. Er folgt den Fäden nach oben, bis er die Hände sieht.", hooks: ["geheimnis","macht"] },
          { title: "Herausfinden, wer mich lenkt", description: "Je mehr Geheimnisse er sammelt, desto klarer spürt er, dass eines davon ihn selbst betrifft und in fremder Hand liegt. Jemand kennt seinen wunden Punkt. Ehe man ihn wie eine Marionette führt, muss er wissen, wer die Schnur hält, und sie durchtrennen.", hooks: ["geheimnis","macht"] },
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
          { title: "Eine Ordnung durchsetzen, die zählt", description: "Er hat Einfluss erlangt, von dem andere träumen, doch Beschlüsse verpuffen, wenn sie nur die eigene Stadt betreffen. Er will etwas anstoßen, das über die Mauern hinausreicht. Dafür verhandelt er dort, wo die wirklichen Entscheidungen fallen, und reist den Mächtigen nach.", hooks: ["macht","stadt"] },
          { title: "Beweisen, dass man mich nicht stürzt", description: "Ein Rivale sammelt heimlich Belege, um ihn zu Fall zu bringen, und die Zeugen sind über das halbe Land verstreut. Sitzenbleiben und hoffen ist keine Option. Er reist ihnen nach, kauft ihr Schweigen oder ihre Wahrheit, ehe der Schlag gegen ihn geführt wird.", hooks: ["macht","stadt"] },
        ]
      },
      {
        text: "Gildenführer", hooks: ["handwerk","macht"],
        powerTags: [
          { text: "Gildensiegel", hooks: ["handwerk","macht"] },
          { text: "mobilisiert Verbündete", hooks: ["macht"] },
          { text: "kennt jedermanns Schulden", hooks: ["geheimnis","macht"] },
          { text: "macht und bricht Rufe", hooks: ["macht","stadt"] },
        ],
        weaknessTags: [
          { text: "Konkurrenz um die Führung", hooks: ["macht","stadt"] },
          { text: "jedes Bündnis hat seinen Preis", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Die zerstrittenen Gilden einen", description: "Getrennt sind die Gilden ein Spielball jedes Lehnsherrn, geeint wären sie mächtiger als eine Krone. Doch jede sitzt in einer anderen Stadt und misstraut den übrigen. Er reist von Halle zu Halle, um die Alten an einen Tisch zu bringen, ehe man sie einzeln bricht.", hooks: ["handwerk","macht"] },
          { title: "Die Ehre meiner Gilde rächen", description: "Jemand hat den Ruf seiner Gilde in den Schmutz gezogen, und das Gerücht wandert schneller als er. Er kennt die Schulden derer, die es verbreiten. Er folgt der Verleumdung bis zu ihrem Urheber und stellt richtig, was verdreht wurde, mit welchem Mittel auch immer.", hooks: ["handwerk","macht"] },
        ]
      },
      {
        text: "Anführerin der Schmuggler", hooks: ["außenseiter","stadt"],
        powerTags: [
          { text: "Zugang zu verschlossenen Orten", hooks: ["geheimnis","macht"] },
          { text: "kennt jeden Schleichweg", hooks: ["stadt","geheimnis"] },
          { text: "loyale Bande", hooks: ["außenseiter","macht"] },
          { text: "Gold öffnet Türen", hooks: ["macht","stadt"] },
        ],
        weaknessTags: [
          { text: "vom Gesetz gejagt", hooks: ["außenseiter","macht"] },
          { text: "alte Intrigen holen sie ein", hooks: ["stadt","verlust"] },
        ],
        quests: [
          { title: "Den Schwarzmarkt beherrschen", description: "Ihre Ware fließt durch ein Dutzend Städte, doch in dreien schneidet ihr ein Rivale die Wege ab. Sie will, dass keine verbotene Fracht den Besitzer wechselt, ohne dass ihr Anteil fließt. Sie reist die Schmuggelrouten ab und übernimmt sie, eine nach der anderen.", hooks: ["außenseiter","macht"] },
          { title: "Meine Bande schützen", description: "Alte Intrigen holen sie ein, und einer ihrer Leute ist ins Netz des Gesetzes geraten, weit weg, in einer Stadt, die sie meidet. Wer ihr treu folgt, den lässt sie nicht fallen. Sie bricht auf, ihn herauszuholen, auch wenn es sie mitten in die Falle führt.", hooks: ["außenseiter","stadt"] },
        ]
      },
      {
        text: "Diplomatin", hooks: ["stadt","adel"],
        powerTags: [
          { text: "Recht auf Audienz", hooks: ["adel","macht"] },
          { text: "Vertrauen der Mächtigen", hooks: ["macht","adel"] },
          { text: "lenkt mit klugen Fragen", hooks: ["stadt","macht"] },
          { text: "beschwichtigt jeden Streit", hooks: ["stadt","adel"] },
        ],
        weaknessTags: [
          { text: "der Hof ist ein Schlangennest", hooks: ["adel","stadt"] },
          { text: "jedes Bündnis hat seinen Preis", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Frieden zwischen den Häusern stiften", description: "Zwei mächtige Häuser treiben auf einen Krieg zu, der Tausende kosten wird, und beide hören noch auf sie, gerade eben. Wo andere zum Schwert greifen, legt sie Worte auf die Waage. Sie reist zwischen den Höfen hin und her, ehe der erste Funke fällt.", hooks: ["adel","stadt"] },
          { title: "Mein Wort am Hof halten", description: "Ihr einziges Kapital ist ihr gegebenes Wort, und man hat sie in eine Zusage gedrängt, die kaum zu halten ist. Ein gebrochenes Versprechen wäre ihr Ende. Sie tut das Unmögliche, um einzulösen, was sie versprach, denn ihre Verlässlichkeit ist der Boden all ihres Einflusses.", hooks: ["adel","glaube"] },
        ]
      },
      {
        text: "Händlerin mit dem Netz", hooks: ["stadt","geheimnis"],
        powerTags: [
          { text: "Karte aller Namen", hooks: ["wissen","macht"] },
          { text: "Boten in jede Richtung", hooks: ["stadt","fahrend"] },
          { text: "fordert Gefälligkeiten ein", hooks: ["macht","stadt"] },
          { text: "kennt jeden Warenpreis", hooks: ["handwerk","stadt"] },
        ],
        weaknessTags: [
          { text: "zu viele Verpflichtungen", hooks: ["macht","verlust"] },
          { text: "jedes Bündnis hat seinen Preis", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Mein Netz übers ganze Reich spannen", description: "Ihr Netz ist dicht, aber lückenhaft, und die Lücken kosten sie Gold und Wissen. Von jeder Stadt soll ein Faden in ihre Hand laufen. Sie reist die weißen Flecken ab und knüpft an, wo bisher niemand für sie sprach.", hooks: ["stadt","macht"] },
          { title: "Meine Abhängigkeiten lösen", description: "So viele schulden ihr, doch ebenso vielen schuldet sie selbst, und die Ketten werden enger. Sie will nicht das letzte Glied in fremden Rechnungen sein. Sie sucht ihre Gläubiger auf, einen nach dem anderen, um frei zu werden und auf eigene Rechnung zu handeln.", hooks: ["macht","verlust"] },
        ]
      },
      {
        text: "Beraterin im Verborgenen", hooks: ["geheimnis","stadt"],
        powerTags: [
          { text: "Briefe öffnen Tore", hooks: ["macht","geheimnis"] },
          { text: "hält Wissen zurück", hooks: ["geheimnis","stadt"] },
          { text: "kennt jedes Schweigen", hooks: ["geheimnis","macht"] },
          { text: "flüstert ins rechte Ohr", hooks: ["geheimnis","macht"] },
        ],
        weaknessTags: [
          { text: "erpressbar durch Geheimnisse", hooks: ["geheimnis","macht"] },
          { text: "unsichtbare Feinde", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "Den Herrscher klug lenken", description: "Das Reich taumelt, weil der Herrscher einem Einflüsterer glaubt, der ihn ins Verderben rät. Gegen bloße Worte kommt sie nicht an; sie braucht einen Beweis, und der liegt weit außerhalb der Hauptstadt. Sie bricht auf, ihn zu holen, ehe der falsche Rat zur Tat wird.", hooks: ["geheimnis","macht"] },
          { title: "Im Schatten unentbehrlich bleiben", description: "Unsichtbare Feinde arbeiten daran, sie überflüssig zu machen, und ihre Geheimnisse taugen nur, solange niemand sie kennt. Wer sie übersieht, soll nie begreifen, wie sehr er sie braucht. Sie sichert ihre stillen Quellen, quer durchs Land, ehe ein anderer sie kappt.", hooks: ["geheimnis","stadt"] },
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
          { text: "kann nicht nein sagen", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Die Vergessenen emporheben", description: "Ihr Gold soll nicht ihr allein dienen, sondern denen, die sonst niemand sieht. In einer fernen Provinz treibt eine Hungersnot die Menschen in die Knechtschaft. Sie reist mit vollen Truhen dorthin, wo die Not am größten ist, ehe die Verzweiflung sie ausliefert.", hooks: ["stadt","glaube"] },
          { title: "Altes Unrecht wiedergutmachen", description: "Dasselbe Gold, das ihr Türen öffnet, hat sie einst mit Schuld beladen, und die Menschen, die dafür bezahlten, sind verstreut. Sie kann nicht nein sagen, wenn ihre Not vor ihr steht. Sie sucht die Geschädigten von einst auf, um so viel zu heilen, wie sich noch heilen lässt.", hooks: ["macht","verlust"] },
        ]
      },
      {
        text: "Schiedsrichterin der Straßen", hooks: ["stadt","macht"],
        powerTags: [
          { text: "kennt jede Wachlosung", hooks: ["stadt","kampf"] },
          { text: "schlichtet Bandenkriege", hooks: ["stadt","macht"] },
          { text: "Vollstrecker auf Zuruf", hooks: ["macht","kampf"] },
          { text: "hört Gerüchte zuerst", hooks: ["stadt","geheimnis"] },
        ],
        weaknessTags: [
          { text: "Konkurrenz um die Gasse", hooks: ["macht","stadt"] },
          { text: "verhasst bei den Verurteilten", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "Den Frieden der Straße ausbreiten", description: "In ihrem Viertel fließt kein unnötiges Blut, solange sie richtet, doch die Nachbarviertel versinken in Bandenkriegen, die zu ihr überschwappen. Sie will ihren brüchigen Frieden weitertragen. Sie geht von Gasse zu Gasse, wo man sie ruft, und schlichtet, wo sonst nur Klingen sprechen.", hooks: ["stadt","macht"] },
          { title: "Beweisen, dass mein Wort Gesetz ist", description: "Ein Verurteilter hat ihr Urteil missachtet und ist geflohen, quer durch die Unterstadt, und andere warten, ob sie es dabei belässt. Ließe sie es durchgehen, wäre ihr Wort wertlos. Sie nimmt die Verfolgung auf, damit alle sehen, wie weit ihr Arm reicht.", hooks: ["macht","stadt"] },
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
          { title: "Meinen Kandidaten auf den Thron heben", description: "Der Thron wackelt, und mehrere Anwärter buhlen um ihn, doch nur einer taugt in ihren Augen. Wer herrscht, entscheidet sie, auch wenn niemand ihren Namen nennt. Sie reist zu den Zünglein an der Waage, kauft, überzeugt, erpresst, bis ihr Mann sitzt.", hooks: ["macht","adel"] },
          { title: "Die Hand hinter der Krone bleiben", description: "Die wahre Macht trägt kein Diadem, sondern lenkt den, der es trägt, und genau das will man ihr streitig machen. Alte Intrigen holen sie ein, geschmiedet an Orten, die sie lange mied. Sie reist ihnen entgegen und erstickt sie, ehe sie die Hand entlarven, die alles bewegt.", hooks: ["macht","geheimnis"] },
        ]
      },
      {
        text: "Stimme des Rates", hooks: ["macht","stadt"],
        powerTags: [
          { text: "fordert Legitimität ein", hooks: ["macht","adel"] },
          { text: "spricht mit Befehlsgewalt", hooks: ["macht"] },
          { text: "kennt die wahren Mächte", hooks: ["stadt","macht"] },
          { text: "bewegt die Menge", hooks: ["macht","stadt"] },
        ],
        weaknessTags: [
          { text: "an Beschlüsse gebunden", hooks: ["macht","stadt"] },
          { text: "Konkurrenz um das Wort", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Den Stummen eine Stimme geben", description: "Im Rat wird über die entschieden, die selbst nie hineindürfen, und er ist der Einzige, der für sie das Wort ergreift. Doch die Betroffenen sind über das Land verstreut, ihre Klagen ungehört. Er reist zu ihnen, sammelt ihre Stimmen und trägt sie dorthin, wo entschieden wird.", hooks: ["macht","stadt"] },
          { title: "Eine Ordnung schaffen, die mich überdauert", description: "An die Beschlüsse gebunden, ringt er doch um mehr als den Tag; was er anstößt, soll noch gelten, wenn seine Stimme verstummt ist. Dafür braucht er Verbündete jenseits des Ratssaals. Er reist, um sie zu gewinnen, denn ein Vermächtnis baut man nicht allein.", hooks: ["macht","stadt"] },
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
          { title: "Die verheißene Konjunktion", description: "Nächtelang hat der Held die himmlischen Bahnen errechnet, und nun naht eine Sternstellung, wie sie in Generationen nur einmal erscheint. In ihrem Licht meint er ein kommendes Unheil zu lesen, doch die Zeichen bleiben mehrdeutig. Er muss erfahren, was die Konjunktion wirklich ankündigt, ehe die Stunde verstreicht und niemand gewarnt ist.", hooks: ["wissen","schicksal","magie"] },
          { title: "Das gefälschte Horoskop", description: "Wer in den Sternen liest, weiß, wie schwer ihre Wahrheit wiegt, und gerade darum schmerzt es den Helden, dass ein anderer falsche Deutungen verbreitet. Lügen im Namen des Himmels lenken Mächtige in die Irre und beschmutzen seine Kunst. Er folgt den verdrehten Vorzeichen bis zu ihrer Quelle und deckt den Betrug auf, ehe Schaden geschieht.", hooks: ["wissen","macht"] },
        ]
      },
      {
        text: "Bewohner des Verborgenen", hooks: ["geheimnis","wissen"],
        powerTags: [
          { text: "geheime Forschung", hooks: ["wissen","geheimnis"] },
          { text: "sieht verborgene Zusammenhänge", hooks: ["wissen","geheimnis"] },
          { text: "bewegt sich ungesehen", hooks: ["geheimnis","außenseiter"] },
          { text: "kennt den Weg zur Wahrheit", hooks: ["wissen","geheimnis"] },
        ],
        weaknessTags: [
          { text: "verfolgt von neugierigen Mächten", hooks: ["macht","geheimnis"] },
          { text: "traut keinem Licht", hooks: ["geheimnis","außenseiter"] },
        ],
        quests: [
          { title: "Die verschlossene Kammer", description: "Ein Leben lang hat er einer Wahrheit nachgeforscht, die andere lieber begraben ließen, und nur eine letzte Tür trennt ihn noch von ihr. Hinter ihr liegt, wofür er alles gab. Ungesehen muss er sie erreichen, denn was dort ruht, erklärt alles oder stürzt alles um, was er zu wissen glaubte.", hooks: ["geheimnis","wissen"] },
          { title: "Der enttarnte Mitwisser", description: "Sein Schutz war stets das Verborgene, doch nun kennt jemand sein Versteck, und er spürt fremde Augen im Rücken. Verrat kann ihn alles kosten. Er muss herausfinden, wer ihn verriet, ehe die Mächte des Lichts die Tür eintreten, hinter der er arbeitet.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "weitgereister Landeskenner", hooks: ["wissen","fahrend"],
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
          { title: "Die letzte weiße Stelle", description: "Fast jedes Land hat er bereist, doch ein leerer Fleck auf allen Karten lässt ihn nicht los, ein Landstrich, den kein Reisender je betrat. Genau das ruft ihn. Als Erster will er ihn erkunden und verzeichnen, denn nur jenseits des Bekannten findet ein Heimatloser, wonach er sucht.", hooks: ["wissen","fahrend"] },
          { title: "Der verschollene Pass", description: "In alten Erzählungen lebt ein Handelsweg fort, den niemand mehr zu finden weiß, doch er liest die vergessenen Spuren in Sitten und Landschaft. Ein wiedereröffneter Pass könnte getrennte Völker verbinden. Er nimmt sich vor, die verschollene Route wieder begehbar zu machen.", hooks: ["fahrend","wissen"] },
        ]
      },
      {
        text: "Bibliothekar des Verbotenen", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "erinnert sich an jedes Buch", hooks: ["wissen"] },
          { text: "kennt verbotene Riten", hooks: ["magie","geheimnis"] },
          { text: "hütet gefährliche Bände", hooks: ["wissen","geheimnis"] },
          { text: "erkennt jede Fälschung", hooks: ["wissen","handwerk"] },
        ],
        weaknessTags: [
          { text: "gefährliches Wissen lockt Feinde", hooks: ["wissen","geheimnis"] },
          { text: "Wahrheit vor dem Wohl anderer", hooks: ["wissen","geheimnis"] },
        ],
        quests: [
          { title: "Das verbotene Folio", description: "Ausgerechnet der gefährlichste Band seiner Sammlung ist gestohlen, und in falschen Händen wird er zur Waffe. Er kennt jede Zeile darin und die Gefahr, die darin schlummert. Er nimmt die Spur des Diebs auf, ehe das verbotene Wissen entfesselt wird, auch wenn die Suche alte Feinde weckt.", hooks: ["wissen","geheimnis"] },
          { title: "Die Brandstifter der Wahrheit", description: "Mächtige fürchten, was in seinen Regalen steht, und wollen die Sammlung in Flammen sehen. Für ihn wiegt die Wahrheit schwerer als ihr Wohlgefallen. Während die Brandstifter näher rücken, bringt er in Sicherheit, was zu retten ist, denn jedes verlorene Buch ist eine Erinnerung weniger.", hooks: ["wissen","macht","verlust"] },
        ]
      },
      {
        text: "Gelehrter der alten Reiche", hooks: ["wissen","adel"],
        powerTags: [
          { text: "kennt jede Chronik", hooks: ["wissen"] },
          { text: "kennt jedes Wappen", hooks: ["wissen","adel"] },
          { text: "rekonstruiert aus Fragmenten", hooks: ["wissen"] },
          { text: "entlarvt Fälschungen", hooks: ["wissen","stadt"] },
        ],
        weaknessTags: [
          { text: "weltfremder Bücherwurm", hooks: ["wissen","außenseiter"] },
          { text: "lebt in vergangenen Zeiten", hooks: ["wissen","verlust"] },
        ],
        quests: [
          { title: "Die getilgte Dynastie", description: "Ein Herrschergeschlecht wurde mit Absicht aus aller Erinnerung gelöscht, und wer so etwas tut, hat etwas zu verbergen. Aus Fragmenten und geschönten Aufzeichnungen setzt er die verschwiegene Wahrheit zusammen. Er reist den letzten Spuren nach, ehe auch sie getilgt werden.", hooks: ["wissen","adel","geheimnis"] },
          { title: "Das Erbe der Ruinen", description: "Die Trümmer eines alten Reichs ziehen ihn unwiderstehlich an, denn zwischen geborstenen Säulen ahnt er den Schlüssel zu einem rätselhaften Untergang. Geduldig fügt er die Bruchstücke. Wer versteht, wie ein Reich fiel, versteht vielleicht, was die Gegenwart noch retten kann.", hooks: ["wissen","verlust"] },
        ]
      },
      {
        text: "Sprachgelehrter", hooks: ["wissen"],
        powerTags: [
          { text: "kennt die alten Sprachen", hooks: ["wissen"] },
          { text: "übersetzt jede Schrift", hooks: ["wissen"] },
          { text: "spricht die Sprache der Toten", hooks: ["magie","geheimnis"] },
          { text: "hört jeden Dialekt", hooks: ["wissen","fahrend"] },
        ],
        weaknessTags: [
          { text: "verliert sich in Worten", hooks: ["wissen","außenseiter"] },
          { text: "nimmt alles wörtlich", hooks: ["wissen"] },
        ],
        quests: [
          { title: "Die unentzifferte Zunge", description: "Jede Schrift übersetzt er, doch eine Zunge widersteht ihm, und in ihren Zeichen ruht ein Versprechen, das seit Ewigkeiten ungehört verhallt. Er gibt sich der Aufgabe ganz hin und reist zu den letzten Steinen, die sie tragen, um zu entschlüsseln, was seit Jahrhunderten niemand mehr sprach.", hooks: ["wissen","geheimnis"] },
          { title: "Das missverstandene Wort", description: "Ein einziger Übersetzungsfehler hat sich in einen Vertrag geschlichen, und nur er hört das falsche Wort heraus. Aus dem Missverständnis droht ein Krieg zu wachsen. Er eilt dorthin, wo verhandelt wird, um die wahre Bedeutung richtigzustellen, ehe aus einem verkehrten Satz Blut wird.", hooks: ["wissen","macht"] },
        ]
      },
      {
        text: "Kartografin vergessener Wege", hooks: ["wissen","fahrend"],
        powerTags: [
          { text: "zeichnet getreue Karten", hooks: ["wissen","handwerk"] },
          { text: "liest jedes Gelände", hooks: ["natur","fahrend"] },
          { text: "merkt sich jeden Weg", hooks: ["wissen","fahrend"] },
          { text: "findet unverzeichnete Routen", hooks: ["wissen","fahrend"] },
        ],
        weaknessTags: [
          { text: "besessen vom nächsten Horizont", hooks: ["fahrend","schicksal"] },
          { text: "hilflos ohne ihre Karten", hooks: ["wissen","handwerk"] },
        ],
        quests: [
          { title: "Die Karte zum verlorenen Ort", description: "Ein Ort entzieht sich ihr, verstreut über Fragmente alter Karten, die einander widersprechen. Der nächste Horizont lässt sie nicht los. Sie folgt den Bruchstücken, bis sie zusammenpassen, und will dem leeren Fleck auf ihrem Pergament endlich ein wahres Bild geben.", hooks: ["wissen","fahrend","geheimnis"] },
          { title: "Das fehlerhafte Reich", description: "Eine falsch gezeichnete Karte führt Reisende in Sümpfe und Abgründe, und sie, die jedes Gelände liest, erträgt den Fehler nicht. Er kostet Leben. Sie zieht los, das fehlerhafte Land neu zu vermessen, damit kein Wanderer mehr dem falschen Strich vertraut.", hooks: ["fahrend","verlust"] },
        ]
      },
      {
        text: "Entschlüsslerin alter Schriften", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "erkennt jedes Symbol", hooks: ["wissen"] },
          { text: "knackt jeden Code", hooks: ["wissen","geheimnis"] },
          { text: "sieht das Muster im Chaos", hooks: ["wissen","schicksal"] },
          { text: "liest zwischen den Zeilen", hooks: ["wissen","geheimnis"] },
        ],
        weaknessTags: [
          { text: "besessen von ungelösten Rätseln", hooks: ["wissen","geheimnis"] },
          { text: "das Studium zehrt am Körper", hooks: ["wissen","verlust"] },
        ],
        quests: [
          { title: "Die versiegelte Botschaft", description: "Eine verschlüsselte Schrift liegt vor ihr, die eine Warnung birgt, und die Zeit drängt, denn ungelesen nützt selbst die dringendste Botschaft nichts. Besessen beugt sie sich über die Zeichen und muss sie brechen, ehe das angekündigte Unheil geschieht.", hooks: ["wissen","geheimnis"] },
          { title: "Der Schlüssel im Stein", description: "In uralten Gravuren ahnt sie einen Code, an dem vor ihr jeder scheiterte, und das ungelöste Rätsel zehrt an ihren Kräften. Nacht um Nacht studiert sie die verwitterten Linien. Sie will als Erste brechen, was der Stein so lange verbirgt, koste es sie auch die Gesundheit.", hooks: ["wissen","geheimnis","schicksal"] },
        ]
      },
      {
        text: "Schülerin verbotenen Wissens", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "wagt was andere meiden", hooks: ["geheimnis","außenseiter"] },
          { text: "Wissen als Hebel", hooks: ["wissen","macht"] },
          { text: "kennt verbotene Riten", hooks: ["magie","geheimnis"] },
          { text: "lernt unheimlich schnell", hooks: ["wissen","magie"] },
        ],
        weaknessTags: [
          { text: "blind für reale Gefahr", hooks: ["wissen"] },
          { text: "gefährliches Wissen lockt Feinde", hooks: ["wissen","geheimnis"] },
        ],
        quests: [
          { title: "Das letzte Kapitel", description: "Ihrer Lehre fehlt der verbotene Schlussteil, und ohne ihn bleibt all ihr Wissen Stückwerk. Blind für die Gefahr, die solches Wissen anzieht, riskiert sie alles, um das letzte Kapitel zu finden, denn erst damit wird vollständig, wofür sie schon so viel aufs Spiel setzte.", hooks: ["wissen","geheimnis","magie"] },
          { title: "Der gefallene Meister", description: "Ihr Lehrer verschwand auf der Jagd nach verbotenem Wissen, und der Gedanke lässt sie nicht los. Wissen ist ihr Hebel, und seine Spur ruft sie. Trotz aller Gefahr folgt sie den Pfaden des Verschollenen, um zu erfahren, was ihn verschlang, und ob am Ende Rettung wartet oder dasselbe Verderben.", hooks: ["wissen","verlust","geheimnis"] },
        ]
      },
      {
        text: "Hüterin der verborgenen Archive", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "ein Lexikon an Lore", hooks: ["wissen"] },
          { text: "erinnert sich an jedes Buch", hooks: ["wissen"] },
          { text: "findet jede Quelle wieder", hooks: ["wissen","handwerk"] },
          { text: "kennt jedes Gerücht der Gelehrten", hooks: ["wissen","stadt"] },
        ],
        weaknessTags: [
          { text: "trägt zu viel Wissen allein", hooks: ["wissen","außenseiter"] },
          { text: "wird für ihr Wissen benutzt", hooks: ["wissen","macht"] },
        ],
        quests: [
          { title: "Die geplünderte Sammlung", description: "Diebe sind in die geheimen Gewölbe eingebrochen, und jeder entwendete Band reißt eine Lücke in das ihr anvertraute Wissen. Sie findet jede Quelle wieder. Sie nimmt die Spur der Räuber auf, quer durchs Land, um das Verlorene zurückzuholen, ehe es missbraucht wird.", hooks: ["wissen","geheimnis","verlust"] },
          { title: "Der würdige Erbe", description: "Sie trägt ein Lexikon an Lore in sich, doch sie kann nicht ewig wachen, und stirbt der Hüter ohne Nachfolger, stirbt das Wissen mit ihm. Sie sucht jemanden, der würdig genug ist, das Erbe der Archive zu hüten, und reist dorthin, wo solche Menschen noch geboren werden.", hooks: ["wissen","glaube","schicksal"] },
        ]
      },
      {
        text: "Kennerin der Naturgesetze", hooks: ["wissen","natur"],
        powerTags: [
          { text: "analysiert jede Substanz", hooks: ["wissen","handwerk"] },
          { text: "kennt Bestienkunde", hooks: ["wissen","natur"] },
          { text: "kennt die Schwäche jedes Wesens", hooks: ["wissen","kampf"] },
          { text: "erklärt jedes Phänomen", hooks: ["wissen","natur"] },
        ],
        weaknessTags: [
          { text: "körperlich schwach", hooks: ["kampf"] },
          { text: "glaubt nur was sie beweist", hooks: ["wissen","außenseiter"] },
        ],
        quests: [
          { title: "Das ungeklärte Phänomen", description: "Ihr begegnet ein Vorgang, der allem widerspricht, was sie weiß, und das erschüttert die Gewissheit, auf der ihr ganzes Denken ruht. Mit kühlem Verstand muss sie die Ursache ergründen, denn solange sie sie nicht versteht, hat die Welt aufgehört, ihren Gesetzen zu folgen.", hooks: ["wissen","natur","geheimnis"] },
          { title: "Die unbekannte Bestie", description: "Ein Geschöpf steht in keinem ihrer Bücher und bedroht nun das Land, und ihren Klauen ist sie kaum gewachsen; ihr einziger Schutz ist ihr Wissen. Geduldig beobachtet sie das fremde Wesen, um seine verwundbare Stelle zu finden, ehe es weitere Opfer fordert.", hooks: ["wissen","natur","kampf"] },
        ]
      },
      {
        text: "Forscherin der alten Kulte", hooks: ["wissen","magie","geheimnis"],
        powerTags: [
          { text: "spürt das Wirken der Kulte", hooks: ["geheimnis","magie"] },
          { text: "durchschaut jeden Glauben", hooks: ["wissen","glaube"] },
          { text: "kennt geheime Riten", hooks: ["magie","geheimnis"] },
          { text: "deutet die Zeichen", hooks: ["wissen","schicksal"] },
        ],
        weaknessTags: [
          { text: "verfolgt von neugierigen Mächten", hooks: ["macht","geheimnis"] },
          { text: "zu tief in den Riten", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "Der wiedererwachte Kult", description: "Ein totgeglaubter Kult regt sich aufs Neue, und hinter mächtigen Gönnern verborgen sammeln seine Anhänger heimlich Kraft. Sie muss ihre Absichten entschlüsseln, ehe sie ihr Werk vollenden, auch wenn die Suche sie tiefer in die Riten zieht, als ihr geheuer ist.", hooks: ["wissen","magie","geheimnis"] },
          { title: "Die wahre Gottheit", description: "Unter der frommen Oberfläche alter Gebete ahnt sie eine verborgene Wahrheit: Wem galten sie wirklich, all die Jahrhunderte? Getrieben von der Frage gräbt sie tiefer und will enthüllen, welche Macht sich hinter den vertrauten Ritualen verbirgt, selbst wenn die Antwort erschüttert, woran alle glaubten.", hooks: ["wissen","glaube","geheimnis"] },
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
        ],
        weaknessTags: [
          { text: "schmückt die Wahrheit aus", hooks: ["geheimnis","handwerk"] },
          { text: "braucht stets Publikum", hooks: ["verlust","außenseiter"] },
        ],
        quests: [
          { title: "Die verschollene Sage", description: "Tausend Geschichten kann er aus dem Stegreif entfachen, doch eine fehlt, so dunkel, dass keine Zunge sie mehr zu formen wagt. Die Lücke lässt ihn nicht ruhen. Er folgt halb verwehten Bruchstücken, von Wirtshaus zu Wirtshaus, bis die verschollene Sage wieder in seiner Stimme lebt.", hooks: ["fahrend","geheimnis"] },
          { title: "Ein Lied, das mich überdauert", description: "Jeder Saal verstummt, wenn er beginnt, doch Beifall verklingt mit dem letzten Wort, und was nützt eine Gabe, die nur im Augenblick lebt. Er sucht die eine Erzählung, fest genug gewoben, um ihn um Generationen zu überleben und seinen Namen nicht sterben zu lassen.", hooks: ["handwerk","schicksal"] },
        ]
      },
      {
        text: "meisterhafter Koch", hooks: ["handwerk"],
        powerTags: [
          { text: "erkennt jede Zutat", hooks: ["handwerk","natur"] },
          { text: "verfeinert jedes Mahl", hooks: ["handwerk"] },
          { text: "improvisiert am Herd", hooks: ["handwerk"] },
          { text: "öffnet Herzen am Tisch", hooks: ["handwerk","glaube"] },
        ],
        weaknessTags: [
          { text: "erträgt keinen Pfusch", hooks: ["handwerk"] },
          { text: "wählerisch bis zur Plage", hooks: ["handwerk","verlust"] },
        ],
        quests: [
          { title: "Das vollkommene Mahl", description: "Er verfeinert jedes Gericht, bis es Herzen öffnet, und zweifelt doch, ob er sein Können je ganz ausschöpfte. Ein einziges Festmahl schwebt ihm vor, in das alle Kunst seiner Hände fließt. Er sucht den Anlass, die Gäste und die Zutaten, um es endlich zu bereiten.", hooks: ["handwerk"] },
          { title: "Die verlorene Rezeptur", description: "Die alten Meister kannten Speisen, von denen heute nur Gerüchte flüstern, und seine Zunge erkennt jede Zutat. Eine vergessene Rezeptur lockt ihn wie ein Rätsel. Über vergilbte Notizen und ferne Küchen folgt er ihrer Spur, bis das verlorene Werk auf seinem Herd neu erwacht.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "gefürchteter Klingenmeister", hooks: ["kampf","handwerk"],
        powerTags: [
          { text: "staunenswerte Schwertkunst", hooks: ["kampf","handwerk"] },
          { text: "eigene Signaturtechnik", hooks: ["handwerk"] },
          { text: "erkennt den schwachen Punkt", hooks: ["kampf","handwerk"] },
          { text: "kühl unter Druck", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "ständig herausgefordert", hooks: ["kampf","handwerk"] },
          { text: "verträgt keine Niederlage", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Der ebenbürtige Gegner", description: "Jeden Fechter hat er bezwungen, und leichte Siege schmecken schal, die ewigen Herausforderer langweilen ihn nur. Was er sucht, ist der eine Gegner, der ihn an die Grenze treibt. Gerüchte künden von einem Meister im fernen Osten, und er reist ihm entgegen.", hooks: ["handwerk","fahrend"] },
          { title: "Die verbotene Form", description: "Eine Technik haben selbst die größten Meister stets gemieden, zu gefährlich, zu vermessen für sterbliche Hände. Gerade das reizt ihn, der keine Niederlage erträgt. Er sucht den letzten, der sie kannte, und wird nicht ruhen, bis er die verbotene Form gezähmt hat.", hooks: ["kampf","geheimnis"] },
        ]
      },
      {
        text: "wundersamer Heiler", hooks: ["handwerk","magie"],
        powerTags: [
          { text: "einmalige Heiltechnik", hooks: ["handwerk","magie"] },
          { text: "erkennt jedes Leiden", hooks: ["handwerk","wissen"] },
          { text: "ruhige Hände im Notfall", hooks: ["handwerk"] },
          { text: "holt Verlorene zurück", hooks: ["handwerk","schicksal"] },
        ],
        weaknessTags: [
          { text: "leidet an jedem Versagen", hooks: ["glaube","verlust"] },
          { text: "wird für Unmögliches eingespannt", hooks: ["handwerk","macht"] },
        ],
        quests: [
          { title: "Die unheilbare Seuche", description: "Er hat Verlorene zurückgeholt, an denen andere verzweifelten, doch nun wütet ein Leiden, das noch niemand bezwang, und jeder Tote fühlt sich an wie sein Versagen. Er kann nicht zusehen. Er folgt der Seuche zu ihrem Ursprung, um das Mittel zu finden, das es noch nicht gibt.", hooks: ["handwerk","verlust"] },
          { title: "Ein Leben, das zählt", description: "Keine Gabe schützt vor dem Schmerz des Scheiterns, und in dieser Nacht hängt ein einziges Leben an einem seidenen Faden. Nur seine Kunst kann es halten. Für ihn zählt jetzt nichts als dieser eine Mensch, den er dem Tod entreißen will, ganz gleich, was es ihn kostet.", hooks: ["handwerk","glaube"] },
        ]
      },
      {
        text: "untrüglicher Bogenschütze", hooks: ["kampf","handwerk"],
        powerTags: [
          { text: "trifft jedes Ziel", hooks: ["kampf","handwerk"] },
          { text: "ruhiger Atem im Anschlag", hooks: ["handwerk"] },
          { text: "schneller als der Blick", hooks: ["handwerk","kampf"] },
          { text: "kennt jeden Bogen", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "ständig herausgefordert", hooks: ["kampf","handwerk"] },
          { text: "hilflos im Nahkampf", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "Der unmögliche Schuss", description: "Kein Ziel ist ihm zu fern, und gerade darum reizt ihn das, was alle für unmöglich halten. Irgendwo wartet ein Schuss, von dem man sagt, er sei nicht zu machen, ein Pfeil durch drei Ringe, ein Turmfenster im Sturm. Er sucht ihn, um seinen Atem auch dort ruhig zu halten.", hooks: ["handwerk","schicksal"] },
          { title: "Der Wettstreit der Meister", description: "Sein Reich ist die Distanz, sein Stolz die Treffsicherheit, im Nahkampf wäre er verloren. Wenn die besten Schützen des Landes zum großen Wettkampf zusammenkommen, will er unter ihnen stehen. Er reist zum Turnier, um zu beweisen, dass keine Hand seine Pfeile übertrifft.", hooks: ["handwerk","kampf"] },
        ]
      },
      {
        text: "Meister des Spiels", hooks: ["handwerk","stadt"],
        powerTags: [
          { text: "durchschaut jede Strategie", hooks: ["handwerk","wissen"] },
          { text: "denkt zehn Züge voraus", hooks: ["handwerk","wissen"] },
          { text: "blitzschnelle Auffassung", hooks: ["handwerk","kampf"] },
          { text: "eiskalt am Brett", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "kann nicht verlieren", hooks: ["handwerk","macht"] },
          { text: "sieht überall nur Spiele", hooks: ["handwerk","außenseiter"] },
        ],
        quests: [
          { title: "Der ungeschlagene Großmeister", description: "Er durchschaut jede Strategie, ehe der Gegner sie zu Ende denkt, doch ein Großmeister soll seit Jahren keine Partie verloren haben. Dieser Ruf lässt ihn nicht ruhen. Er reist zu dessen Turnier, um den Unbesiegten in der einen Partie zu stürzen, die zählt.", hooks: ["handwerk","macht"] },
          { title: "Die tödliche Partie", description: "Für ihn ist alles ein Spiel, doch diesmal liegen keine Steine auf dem Brett, sondern Leben und Tod. Mit gewohnter kühler Berechnung tritt er an. Ein Fehler kostet hier weit mehr als den nächsten Zug, und genau das reizt und erschreckt ihn zugleich.", hooks: ["handwerk","schicksal"] },
        ]
      },
      {
        text: "Tänzerin ohne Gleichen", hooks: ["handwerk"],
        powerTags: [
          { text: "bewegt sich wie Wasser", hooks: ["handwerk","natur"] },
          { text: "staunenswerter Sprung", hooks: ["handwerk"] },
          { text: "fesselt jeden Blick", hooks: ["handwerk","schicksal"] },
          { text: "spricht ohne Worte", hooks: ["handwerk","geheimnis"] },
        ],
        weaknessTags: [
          { text: "heftig beneidet", hooks: ["handwerk","stadt"] },
          { text: "im Alltag erschöpft", hooks: ["verlust"] },
        ],
        quests: [
          { title: "Der Tanz, den es nie gab", description: "Ihre Bewegungen fließen wie Wasser und sprechen, wo Worte versagen, doch die alten Tänze genügen ihr nicht mehr. In ihr reift die Sehnsucht nach Schritten, die keine Welt gesehen hat. Sie tanzt und verwirft, Nacht um Nacht, bis aus der Vision ein Tanz wird, den niemand vor ihr kannte.", hooks: ["handwerk","schicksal"] },
          { title: "Die große Bühne", description: "Kleine Bühnen sind ihrer Gabe nicht würdig, auch wenn der Alltag ihre Kräfte zehrt. Einmal will sie vor dem Hof tanzen, der über Ruhm und Vergessen entscheidet. Sie reist zur Residenz, um dort zu beweisen, dass ihre Kunst auf die größte aller Bühnen gehört.", hooks: ["handwerk","adel"] },
        ]
      },
      {
        text: "Diebin des Unmöglichen", hooks: ["handwerk","stadt"],
        powerTags: [
          { text: "öffnet jedes Schloss", hooks: ["handwerk","geheimnis"] },
          { text: "lautlos wie ein Schatten", hooks: ["handwerk","außenseiter"] },
          { text: "findet jeden Schwachpunkt", hooks: ["handwerk","wissen"] },
          { text: "flink wie kein Zweiter", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "überall beobachtet", hooks: ["geheimnis"] },
          { text: "kann nicht widerstehen", hooks: ["handwerk","verlust"] },
        ],
        quests: [
          { title: "Der undurchdringliche Hort", description: "Sie öffnet jedes Schloss und gleitet lautlos an jeder Wache vorbei, doch ein Tresor gilt als unknackbar, und das kann sie nicht auf sich beruhen lassen. Was kein Dieb je bezwang, reizt sie unwiderstehlich. Sie reist zu dem Hort, um zu beweisen, dass auch er sich öffnen lässt.", hooks: ["handwerk","geheimnis"] },
          { title: "Ein letzter Coup", description: "Misstrauische Blicke folgen ihr überall, und sie träumt von dem einen Streich, der sie freikauft von Jagd und Verdacht. Er müsste größer sein als alles zuvor. Sie plant ihn bis ins Letzte, auch wenn ihre Gier nach dem Verbotenen ihr selbst im Weg steht.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "Bardin der Legenden", hooks: ["fahrend","handwerk"],
        powerTags: [
          { text: "reißt jede Menge mit", hooks: ["handwerk","fahrend"] },
          { text: "spornt andere an", hooks: ["handwerk","macht"] },
          { text: "kennt jedes Lied", hooks: ["handwerk","wissen"] },
          { text: "stimmt jeden Saal um", hooks: ["handwerk","stadt"] },
        ],
        weaknessTags: [
          { text: "die Gabe macht einsam", hooks: ["verlust","außenseiter"] },
          { text: "verschuldet durch Großzügigkeit", hooks: ["fahrend","verlust"] },
        ],
        quests: [
          { title: "Das Lied der Helden", description: "Worte können mehr als unterhalten, sie können Taten zu Legenden erheben, doch ihre Gabe hat sie einsam gemacht. Sie will eine Heldentat besingen, so machtvoll und wahr, dass ihr Lied sie unsterblich macht. Sie reist der Tat nach, um sie mit eigenen Augen zu sehen, ehe sie sie besingt.", hooks: ["handwerk","schicksal"] },
          { title: "Das Ohr des Königs", description: "Am Hof werden Lieder zu Geschichte, auch wenn ihre Großzügigkeit sie in Schulden treibt. Einmal will sie vor dem König spielen und mit ihrer Kunst dort etwas bewegen, wo Melodien über das Schicksal von Reichen entscheiden. Sie sucht den Weg an den Hof, Empfehlung um Empfehlung.", hooks: ["handwerk","adel"] },
        ]
      },
      {
        text: "unfehlbare Reiterin", hooks: ["handwerk","natur"],
        powerTags: [
          { text: "verschmilzt mit dem Pferd", hooks: ["handwerk","natur"] },
          { text: "bändigt jedes Tier", hooks: ["handwerk","natur"] },
          { text: "reitet wo keiner reitet", hooks: ["handwerk","natur"] },
          { text: "unerschütterlich im Sattel", hooks: ["handwerk","kampf"] },
        ],
        weaknessTags: [
          { text: "halb verloren ohne Ross", hooks: ["handwerk","verlust"] },
          { text: "tollkühn im Ritt", hooks: ["handwerk","natur"] },
        ],
        quests: [
          { title: "Das ungezähmte Ross", description: "Sie bändigt selbst die wildesten Tiere, doch nun gibt es einen Hengst, den keine Hand je brach, störrisch und ungebrochen. Gerade dieser Stolz weckt ihren Ehrgeiz. Sie reist dorthin, wo er läuft, und bringt Geduld und Mut auf, bis auch dieses Ross sie trägt.", hooks: ["handwerk","natur"] },
          { title: "Das große Wettrennen", description: "Ein großes Rennen steht bevor, das alle für längst entschieden halten, doch sie glaubt an ihr Tier und ihre Kunst. Ohne ihr Ross wäre sie nur halb, im Sattel ist sie unbesiegbar. Sie meldet sich zum Ritt, um zu gewinnen, was ihr niemand zutraut.", hooks: ["handwerk","schicksal"] },
        ]
      },
      {
        text: "Rednerin der Massen", hooks: ["macht","stadt"],
        powerTags: [
          { text: "findet das rechte Wort", hooks: ["handwerk","macht"] },
          { text: "entfacht die Menge", hooks: ["handwerk","macht"] },
          { text: "liest das Publikum", hooks: ["handwerk","fahrend"] },
          { text: "unerschütterlich unter Druck", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "herablassend zu Schwächeren", hooks: ["macht"] },
          { text: "glaubt der eigenen Rede", hooks: ["macht","schicksal"] },
        ],
        quests: [
          { title: "Die Stadt in Aufruhr", description: "Manchmal genügt eine Rede, um den Lauf der Dinge zu wenden, und in einer Stadt vergiftet Unrecht die Gassen. Sie will ihre Stimme erheben und die Menge bewegen. Sie reist dorthin, wo es gärt, auch wenn der Glaube an die eigenen Worte sie zuweilen blendet.", hooks: ["handwerk","macht"] },
          { title: "Worte gegen Schwerter", description: "Wo andere im Lärm der Schlacht verstummen, reißt sie noch jede Menge mit, denn sie weiß, ein Wort schneidet schärfer als eine Klinge. Wenn zwei Heere gegeneinanderstehen, will sie allein durch ihre Rede das Blatt wenden und beweisen, dass Worte mächtiger sein können als Schwerter.", hooks: ["handwerk","kampf"] },
        ]
      },
      {
        text: "unbesiegte Spielerin", hooks: ["handwerk","stadt"],
        powerTags: [
          { text: "durchschaut jeden Bluff", hooks: ["handwerk","geheimnis"] },
          { text: "unbewegte Miene", hooks: ["handwerk"] },
          { text: "rechnet jede Chance", hooks: ["handwerk","wissen"] },
          { text: "behält die Nerven", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "verträgt keine Niederlage", hooks: ["handwerk"] },
          { text: "der Falschheit verdächtigt", hooks: ["geheimnis","stadt"] },
        ],
        quests: [
          { title: "Das Spiel um alles", description: "Sie gilt als die Beste am Tisch, doch eine Niederlage könnte sie kaum ertragen. Nun lockt eine Partie gegen den besten Spieler weit und breit, bei der alles auf dem Spiel steht. Mit kühlem Kopf reist sie hin, um zu beweisen, wer wirklich die Beste ist.", hooks: ["handwerk","macht"] },
          { title: "Die Schuld vom Tisch", description: "Man sagt ihr hinter vorgehaltener Hand Falschheit nach, und eine alte Schuld lastet schwer und droht sie zu erdrücken. Nur ein einziges Spiel kann sie tilgen. Sie setzt sich an den Tisch, entschlossen, mit ihrer Gabe die Last für immer von den Schultern zu spielen.", hooks: ["handwerk","verlust"] },
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
          { text: "die Kraft fordert Tribut", hooks: ["magie","verlust"] },
          { text: "zu schwer für Feinheit", hooks: ["kampf","handwerk"] },
        ],
        quests: [
          { title: "Ich finde den wahren Gegner hinter meinem Zorn.", description: "Die steinerne Faust zerschmettert Tore und schleudert Wegelagerer wie Laub, doch solche Wucht an Strauchdieben zu vergeuden fühlt sich falsch an. Irgendwo wartet ein Gegner, der dieser Macht würdig ist. Erst vor ihm, ahnt er, wird sich zeigen, wofür die Faust ihm gegeben wurde.", hooks: ["kampf","schicksal"] },
          { title: "Ich bändige die Wut, die mich treibt.", description: "Wenn die Kraft erwacht, ist es, als schlüge die Faust von selbst, und jedes Mal fordert sie ihren Tribut. Er spürt, wie der Zorn ihn zu verschlingen droht. Er sucht den kühlen Punkt in sich, um zu treffen, wann er will, und stillzuhalten, wann es nötig ist.", hooks: ["kampf","magie"] },
        ]
      },
      {
        text: "Beutel mit Zauberstaub", hooks: ["magie","handwerk"],
        powerTags: [
          { text: "eine Prise für jede Not", hooks: ["magie","handwerk"] },
          { text: "beschwört nützliche Dinge", hooks: ["magie","handwerk"] },
          { text: "Funken aus dem Nichts", hooks: ["magie","natur"] },
          { text: "verstärkt die eigene Kraft", hooks: ["magie","handwerk"] },
        ],
        weaknessTags: [
          { text: "der Vorrat geht zur Neige", hooks: ["verlust","handwerk"] },
          { text: "jede Prise fordert ihren Preis", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "Ich finde das letzte Rezept, ehe es verlorengeht.", description: "Eine Prise beschwört, was die Not verlangt, doch ein Pulver fehlt ihm, das seltenste, dessen Mischung längst verschollen ist. Er folgt verblassten Aufzeichnungen und Gerüchten alter Mischer, bis das letzte Rezept wieder in seinen Händen liegt, ehe der Letzte stirbt, der es kannte.", hooks: ["wissen","handwerk"] },
          { title: "Ich halte den Beutel niemals leer.", description: "Mit jeder Prise wächst die Sorge, denn der Vorrat schwindet und kein Markt verkauft diesen Staub. Er lernt hauszuhalten, jede Beschwörung abzuwägen. Er sucht die Quellen der Zutaten selbst auf, um nie wieder zu erleben, wie sich ein leerer Beutel im schlimmsten Moment anfühlt.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "Kessel der Beschwörung", hooks: ["magie","geheimnis"],
        powerTags: [
          { text: "lauscht den Geistern", hooks: ["magie","geheimnis"] },
          { text: "ruft Verbündete aus dem Jenseits", hooks: ["magie","geheimnis"] },
          { text: "bannt Wesen in den Kreis", hooks: ["magie","macht"] },
          { text: "braut wirksame Sude", hooks: ["magie","handwerk"] },
        ],
        weaknessTags: [
          { text: "was gerufen wird bleibt", hooks: ["magie","schicksal"] },
          { text: "andere begehren ihn", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "Ich banne den Geist, der an meinen Kessel gebunden ist.", description: "Aus dem Kessel steigen Stimmen, doch einer weicht nicht, ein Schatten, der sich an die Lebenden klammert. Er sucht den rechten Sud und die rechten Worte, um das Wesen zur Ruhe zu zwingen, und reist zu dem Ort, an dem es einst starb, denn nur dort lässt es sich lösen.", hooks: ["magie","geheimnis"] },
          { title: "Ich vollende das Ritual, das ich einst verpfuschte.", description: "Was der Kessel ruft, das bleibt, wenn die Beschwörung misslingt, und er hat gesehen, was halb gerufene Wesen anrichten. Diese Last will er nie wieder tragen. Er sucht den Meister, der die Anrufung ganz beherrscht, um zu lernen, sie fehlerfrei zu Ende zu bringen.", hooks: ["magie","wissen"] },
        ]
      },
      {
        text: "verfluchte Klinge", hooks: ["magie","schicksal","kampf"],
        powerTags: [
          { text: "schneidet durch alles", hooks: ["magie","kampf"] },
          { text: "bindet feindliche Magie", hooks: ["magie","kampf"] },
          { text: "kennt den tödlichen Streich", hooks: ["kampf","schicksal"] },
          { text: "dürstet nach Blut", hooks: ["kampf","schicksal"] },
        ],
        weaknessTags: [
          { text: "hat einen eigenen Willen", hooks: ["magie","schicksal"] },
          { text: "verändert mich langsam", hooks: ["magie","schicksal","verlust"] },
        ],
        quests: [
          { title: "Ich lerne die Klinge zu führen, ohne ihr zu verfallen.", description: "Die Klinge schneidet durch alles, doch sie hat einen eigenen Willen und verändert ihn mit jedem Streich ein wenig. Er fürchtet den Tag, an dem nichts von ihm bleibt. Er sucht einen Weg, ihre Macht zu lenken, statt von ihr gelenkt zu werden, koste es ihn, was es wolle.", hooks: ["magie","schicksal"] },
          { title: "Ich räche das erste Opfer der Klinge.", description: "In stillen Stunden flüstert sie ihm von einem Verrat aus alter Zeit. Wer fiel zuerst durch ihren Schnitt, und welche Schuld klebt am Stahl? Er folgt der blutigen Spur in die Vergangenheit, um das erste Opfer zu rächen und vielleicht den Ursprung des Fluches zu verstehen.", hooks: ["verlust","kampf"] },
        ]
      },
      {
        text: "Stab der alten Zeiten", hooks: ["magie","wissen"],
        powerTags: [
          { text: "entfesselt rohe Arkanmacht", hooks: ["magie","schicksal"] },
          { text: "weckt vergessene Zauber", hooks: ["magie","wissen"] },
          { text: "trägt das Wissen alter Magier", hooks: ["wissen","magie"] },
          { text: "verstärkt jeden Bann", hooks: ["magie","macht"] },
        ],
        weaknessTags: [
          { text: "die Macht stellt Forderungen", hooks: ["magie","macht"] },
          { text: "alte Zauber entgleiten", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "Ich erlerne die alte Sprache des Stabs.", description: "Der Stab birgt die Kraft eines Artefakts, doch die alten Zauber entgleiten ihm, wenn die Worte fehlen. Nacht um Nacht beugt er sich über die Runen. Er sucht die letzten, die diese Sprache noch lesen, denn erst wenn er sie entziffert, wird der Stab ihm wahrhaft gehorchen.", hooks: ["wissen","magie"] },
          { title: "Ich finde den letzten, der den Stab trug.", description: "Macht stellt ihre Forderungen, und er ahnt, dass er nicht der Erste ist, der diesen Stab führte. Was geschah mit jenem vor ihm? Er sucht die Spuren des letzten Trägers, um aus dessen Schicksal zu lernen, ehe ihn dieselbe Bürde verschlingt.", hooks: ["wissen","geheimnis"] },
        ]
      },
      {
        text: "Krone der Vergessenen", hooks: ["adel","verlust","geheimnis"],
        powerTags: [
          { text: "Autorität der Toten", hooks: ["adel","macht"] },
          { text: "gebietet über Schatten", hooks: ["magie","macht"] },
          { text: "erinnert vergessene Eide", hooks: ["wissen","verlust"] },
          { text: "verbirgt vor dem Bösen", hooks: ["magie","geheimnis"] },
        ],
        weaknessTags: [
          { text: "wer trägt hier wen", hooks: ["schicksal","geheimnis"] },
          { text: "andere begehren sie", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "Ich bewahre die Erinnerung an das verlorene Reich.", description: "Die Krone gebietet über Schatten, doch niemand weiß mehr, welches Volk sie einst krönte, und er fühlt die vergessenen Eide in ihr nachhallen. Er gräbt in Ruinen und alten Liedern, um das untergegangene Reich ans Licht zu holen, ehe auch sein Name für immer verlischt.", hooks: ["adel","verlust"] },
          { title: "Ich finde die rechtmäßige Erbin des Reiches.", description: "Andere wollen die Krone, und er spürt, dass sie nicht ihm gehört, sondern fragt, wer hier wen trägt. Irgendwo lebt vielleicht das letzte Blut der Vergessenen. Er macht sich auf, die rechtmäßige Erbin zu finden, um ihr zurückzugeben, was die Toten so lange bewahrten.", hooks: ["adel","geheimnis"] },
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
          { text: "zeigt auch die eigene Schuld", hooks: ["geheimnis","verlust"] },
          { text: "andere begehren ihn", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "Ich entlarve eine Lüge mit dem Spiegel.", description: "Der Spiegel durchschaut jede Lüge und entlarvt die falscheste Gestalt, und er weiß von einem Betrug, der Unschuldige ins Verderben stürzt. Mit dem Glas in der Hand reist er dem Lügner nach, bis dessen wahres Gesicht für alle sichtbar wird und der Trug zerbricht.", hooks: ["geheimnis","macht"] },
          { title: "Ich halte meiner eigenen Wahrheit stand.", description: "Was der Spiegel zeigt, verschont niemanden, denn er offenbart auch die eigene Schuld, und jeder Blick hinein ist eine Prüfung. Er lernt, dem standzuhalten, was ihm das Glas über sich selbst entgegenwirft, denn nur wer die eigene Wahrheit erträgt, darf sie über andere richten.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "selbstschreibendes Buch", hooks: ["magie","wissen","schicksal"],
        powerTags: [
          { text: "verzeichnet kommende Dinge", hooks: ["magie","schicksal"] },
          { text: "beantwortet jede Frage", hooks: ["wissen","magie"] },
          { text: "warnt vor Gefahr", hooks: ["magie","schicksal"] },
          { text: "deutet verborgene Zeichen", hooks: ["geheimnis","wissen","schicksal"] },
        ],
        weaknessTags: [
          { text: "schreibt auch böse Omen", hooks: ["schicksal","verlust"] },
          { text: "hat einen eigenen Willen", hooks: ["magie","schicksal"] },
        ],
        quests: [
          { title: "Ich verhindere, dass das Buch die letzte Seite schreibt.", description: "Das Buch warnt vor Gefahr, doch es schreibt auch böse Omen, und auf der letzten Seite steht ein Ende, das er nicht hinnehmen will. Mit jedem Blatt rückt es näher. Er sucht fieberhaft den Weg, das Vorhergesagte zu durchbrechen, ehe die Tinte sein Schicksal besiegelt.", hooks: ["schicksal","magie"] },
          { title: "Ich erfahre, wessen Hand das Buch führt.", description: "Das Artefakt trägt einen eigenen Willen, und er fragt sich, wessen Hand die Worte wirklich schreibt. Beantwortet es jede Frage, nur um ihn zu lenken? Er folgt den Zeilen bis zu ihrer Quelle, um zu erfahren, wer hinter der unaufhörlich schreibenden Feder steht.", hooks: ["geheimnis","wissen"] },
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
          { text: "stark nur hinter Mauern", hooks: ["natur","verlust"] },
          { text: "die Macht stellt Forderungen", hooks: ["macht","schicksal"] },
        ],
        quests: [
          { title: "Ich decke auf, warum die Festung wirklich fiel.", description: "Der Stein trägt die Erinnerung an eine Festung, die einst fiel, und hält doch jeden Sturm aus. Er will wissen, warum sie wirklich brach, wo sie doch uneinnehmbar schien. In den Trümmern ihrer Geschichte sucht er die Wahrheit, die unter dem Schutt begraben liegt.", hooks: ["verlust","macht"] },
          { title: "Ich errichte einen neuen Wall aus dem alten Stein.", description: "Unerschütterlicher Schutz schläft im Stein, doch seine Macht stellt Forderungen, und er sieht Wehrlose, die einen sicheren Ort brauchen. Mit der Kraft, die den Mut der Verteidiger weckt, will er dort einen letzten Wall errichten, wo die Schwachen sonst schutzlos wären.", hooks: ["natur","handwerk"] },
        ]
      },
      {
        text: "Kette des letzten Königs", hooks: ["adel","verlust","macht"],
        powerTags: [
          { text: "königliche Autorität", hooks: ["adel","macht"] },
          { text: "gebietet alten Gehorsam", hooks: ["adel","macht"] },
          { text: "erinnert gebrochene Schwüre", hooks: ["adel","verlust"] },
          { text: "unerklärlicher Schutz", hooks: ["magie","schicksal","geheimnis"] },
        ],
        weaknessTags: [
          { text: "andere begehren sie", hooks: ["geheimnis","macht"] },
          { text: "Last eines toten Throns", hooks: ["adel","verlust"] },
        ],
        quests: [
          { title: "Ich finde die letzte Erblinie des Königs.", description: "Die Kette gebietet alten Gehorsam, doch sie ist auch die Last eines toten Throns, und andere wollen sie an sich reißen. Er weiß, ihr Gewicht ist nicht ihm bestimmt. Er sucht den letzten Erben des verschwundenen Königs, ehe Gierige die Macht für sich beanspruchen.", hooks: ["adel","geheimnis"] },
          { title: "Ich kitte das zerbrochene Reich zusammen.", description: "In den Gliedern hallen gebrochene Schwüre nach, und er spürt, wie ein Reich in Zwietracht zerfällt. Mit dem Gehorsam, den die Kette gebietet, will er zerrissene Treue neu binden. Ehe andere sie zu Krieg missbrauchen, soll sie das Zerbrochene wieder zusammenfügen.", hooks: ["adel","macht"] },
        ]
      },
      {
        text: "Schlüssel ohne Schloss", hooks: ["geheimnis","schicksal"],
        powerTags: [
          { text: "öffnet verschlossene Türen", hooks: ["magie","geheimnis"] },
          { text: "weist den Weg", hooks: ["magie","schicksal"] },
          { text: "spürt verborgene Schwellen", hooks: ["geheimnis","wissen"] },
          { text: "verbirgt vor dem Bösen", hooks: ["magie","geheimnis"] },
        ],
        weaknessTags: [
          { text: "leicht zu verlieren", hooks: ["verlust","geheimnis"] },
          { text: "von Dieben begehrt", hooks: ["stadt","geheimnis"] },
        ],
        quests: [
          { title: "Ich finde das Schloss, für das der Schlüssel gemacht ist.", description: "Der Schlüssel öffnet verschlossene Türen, doch zu keinem Schloss gehört er recht, und er fühlt, dass es eine einzige Tür gibt, für die er geschmiedet wurde. Er folgt dem ziehenden Drang des Schlüssels über Land und Meer, bis er das Schloss findet, das auf ihn gewartet hat.", hooks: ["geheimnis","schicksal"] },
          { title: "Ich sehe hinter die letzte Tür, ehe sie sich schließt.", description: "Der Schlüssel weist ihn auf eine Schwelle, die noch keiner überschritt, und die Neugier ist stärker als die Furcht. Was verbirgt sich dahinter? Von Dieben gejagt, eilt er dorthin, um zu öffnen, was niemand vor ihm öffnen durfte, ehe sich die Tür für immer schließt.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "Kapsel verlorener Stimmen", hooks: ["geheimnis","verlust","magie"],
        powerTags: [
          { text: "bewahrt die Worte der Toten", hooks: ["geheimnis","verlust"] },
          { text: "flüsternder Rat aus alter Zeit", hooks: ["geheimnis","magie"] },
          { text: "spricht in Träumen", hooks: ["magie","schicksal"] },
          { text: "enthüllt verborgene Wahrheiten", hooks: ["geheimnis","wissen","magie"] },
        ],
        weaknessTags: [
          { text: "die Stimmen verstummen nie", hooks: ["magie","verlust"] },
          { text: "verändert mich langsam", hooks: ["magie","schicksal","verlust"] },
        ],
        quests: [
          { title: "Ich lasse eine gefangene Stimme endlich frei.", description: "Die Kapsel bewahrt die Worte der Toten, doch die Stimmen verstummen nie und verändern ihn Tag um Tag. Eine darunter fleht um Erlösung. Er sucht den Weg, diese gefangene Seele gehen zu lassen, und reist dorthin, wo sie einst lebte, ehe das ewige Flüstern ihn selbst verschlingt.", hooks: ["verlust","magie"] },
          { title: "Ich höre das letzte Wort einer vergessenen Seele.", description: "In Träumen sprechen die verlorenen Stimmen, und eine enthüllt Wahrheiten, die niemand sonst kennt. Wessen Stimme wurde als letzte eingeschlossen, und warum? Er lauscht durch den Lärm der Toten, bis er jenes eine letzte Wort vernimmt, das alles erklären könnte.", hooks: ["geheimnis","verlust"] },
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
          { text: "durchdringt jede Wand", hooks: ["magie","schicksal"] },
          { text: "bewegt Dinge ohne Berührung", hooks: ["magie","schicksal"] },
          { text: "spricht mit Toten", hooks: ["magie","verlust"] },
          { text: "unverletzlich durch Stahl", hooks: ["schicksal","kampf"] },
        ],
        weaknessTags: [
          { text: "gebannt durch Salz und Eisen", hooks: ["magie","schicksal"] },
          { text: "gemieden von Mensch und Tier", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "Meinen letzten Atem finden", description: "Durch Mauern und Stahl gleitet er ungesehen, doch zwischen den Lebenden findet er keinen Frieden. Etwas Unerledigtes hält ihn hier, ein Faden, der reißen müsste und es nicht tut. Er sucht die Ursache, ehe der Faden ihn für immer bindet.", hooks: ["verlust","geheimnis"] },
          { title: "Die letzte Schwelle finden", description: "Er weiß, dass er hierher nicht mehr gehört, und dieses Wissen wiegt schwerer als Salz und Eisen. Gemieden von Mensch und Tier, treibt er durch eine Welt, die ihn längst verloren glaubt. Irgendwo wartet ein Übergang, und den sucht er, um endlich zu gehen.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "Höllenkind", hooks: ["schicksal","magie","verlust"],
        powerTags: [
          { text: "übersteht Feuer", hooks: ["schicksal","magie"] },
          { text: "Krallen und Reißzähne", hooks: ["schicksal","kampf"] },
          { text: "wittert dunkle Magie", hooks: ["magie","schicksal"] },
          { text: "flüstert Gedanken in andere", hooks: ["magie","geheimnis"] },
        ],
        weaknessTags: [
          { text: "schwach gegen Geweihtes", hooks: ["glaube","schicksal"] },
          { text: "von beiden Welten gehasst", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "Meinem Erbe entkommen", description: "Höllisches Blut brennt in seinen Adern und fordert Tribut mit jedem Atemzug. Krallen und ein Flüstern in fremden Köpfen verraten, wessen Kind er ist, und beide Welten hassen ihn dafür. Er kämpft jeden Tag, dem dunklen Erbe nicht zu verfallen.", hooks: ["schicksal","magie"] },
          { title: "Die finden, die mich erschufen", description: "Etwas Dunkles rief ihn in diese Welt, und er hat nie erfahren, wessen Hand ihn formte. Sein Gespür für dunkle Magie weist ihm den Weg zurück zur Quelle. Verhasst bei Himmel wie Hölle, hat er nichts zu verlieren außer der Antwort.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "Hauskobold", hooks: ["schicksal","natur","geheimnis"],
        powerTags: [
          { text: "bleibt unbemerkt nach Belieben", hooks: ["geheimnis","außenseiter"] },
          { text: "findet jeden verborgenen Winkel", hooks: ["natur","geheimnis"] },
          { text: "schließt Pakt für eine Gabe", hooks: ["schicksal","handwerk"] },
          { text: "spielt listige Streiche", hooks: ["außenseiter","geheimnis"] },
        ],
        weaknessTags: [
          { text: "an ein Versprechen gebunden", hooks: ["schicksal","glaube"] },
          { text: "nachtragend bei Kleinigkeiten", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "Meinen Winkel bewahren", description: "Er hütet einen verborgenen Ort, der ihm allein gehört, mehr als Unterschlupf, das Einzige, das ihn in dieser großen Welt hält. Wer ihn betritt, weckt seinen nachtragenden Zorn. Gegen jeden Eindringling verteidigt er diesen Winkel.", hooks: ["natur","geheimnis"] },
          { title: "Den alten Handel einlösen", description: "Ein Pakt bindet ihn, geschlossen vor langer Zeit, als ein listiger Streich noch alles war. Sein Wort ist ihm heilig, denn die kleinen Geister vergessen keine Schuld. Die Stunde naht, in der er die alte Abmachung einlösen muss.", hooks: ["schicksal","glaube"] },
        ]
      },
      {
        text: "Wechselgestalt", hooks: ["schicksal","geheimnis"],
        powerTags: [
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
          { title: "Mein wahres Gesicht finden", description: "Jedes Gesicht trägt sie mühelos, doch unter all den Masken hat sie vergessen, wie ihr eigenes aussieht. Die Verwandlung, die sie rettet, droht sie auch auszulöschen. Ehe sie ganz verschwindet, sucht sie den Ort, an dem sie zuletzt sie selbst war.", hooks: ["verlust","geheimnis"] },
          { title: "Einen Betrüger entlarven", description: "Niemand durchschaut eine Täuschung so rasch wie sie, denn sie kennt jeden Kniff von innen. Irgendwo treibt ein Betrüger sein Unwesen hinter einer geborgten Gestalt, die einer Unschuldigen schadet. Diesen Schwindler wird sie aufspüren, an seinem einen verräterischen Makel.", hooks: ["geheimnis","schicksal"] },
        ]
      },
      {
        text: "Mondgeborene", hooks: ["schicksal","magie"],
        powerTags: [
          { text: "Kraft im Mondlicht", hooks: ["schicksal","magie"] },
          { text: "sieht das Unsichtbare", hooks: ["schicksal","geheimnis"] },
          { text: "liest die Zeichen am Himmel", hooks: ["wissen","magie"] },
          { text: "wandelt sicher bei Nacht", hooks: ["natur","geheimnis"] },
        ],
        weaknessTags: [
          { text: "Visionen überwältigen bei Vollmond", hooks: ["magie","schicksal"] },
          { text: "kraftlos bei Neumond", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Das Mondblut zähmen", description: "Im Mondlicht erwacht ihre Kraft, doch bei Vollmond überwältigen sie die Visionen, bis sie kaum noch weiß, was Vorahnung und was Gegenwart ist. Bei Neumond verebbt alles zu kraftlosem Schweigen. Diese Gezeiten in sich zu beherrschen, ehe sie sie fortreißen, ist ihr Ziel.", hooks: ["magie","schicksal"] },
          { title: "Meine Sterndeutung ergründen", description: "Der Himmel spricht zu ihr in Zeichen, die nur sie am nächtlichen Firmament liest, doch noch fügen sich die Bilder nicht zu einem klaren Sinn. Jede Konstellation scheint einen Wink zu tragen. Sie sucht den Ort und die Nacht, in der sich das Muster endlich zusammenfügt.", hooks: ["wissen","schicksal"] },
        ]
      },
      {
        text: "Schattenwandler", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "verschwindet in den Schatten", hooks: ["geheimnis","schicksal"] },
          { text: "erscheint andernorts", hooks: ["schicksal","geheimnis"] },
          { text: "sieht vollständig im Dunkeln", hooks: ["schicksal","natur"] },
          { text: "schleicht ohne Geräusch", hooks: ["geheimnis","außenseiter"] },
        ],
        weaknessTags: [
          { text: "seine Nähe verstört Menschen", hooks: ["schicksal","außenseiter"] },
          { text: "geschwächt im hellen Licht", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Das Schattenreich erkunden", description: "In den Schatten verschwindet er lautlos und taucht andernorts wieder auf, als gäbe es keine Entfernung. Hinter den Schatten ahnt er eine andere Welt, weit und ungesehen. Diese Tiefen will er erkunden, wohin ihm kein Lebender folgt.", hooks: ["geheimnis","schicksal"] },
          { title: "Eine dunkle Wahrheit hüten", description: "Ein Geheimnis lastet auf ihm, das niemals ans Licht treten darf, und im Dunkeln fühlt er sich diesem Wissen am sichersten. Doch jemand ist ihm auf der Spur, jemand, der genau wissen will, was er verbirgt. Er weicht ihm aus, Schatten für Schatten, um die Wahrheit zu bewahren.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "Traumwandler", hooks: ["schicksal","geheimnis","magie"],
        powerTags: [
          { text: "wandelt durch Träume", hooks: ["magie","schicksal"] },
          { text: "hört Ungesagtes", hooks: ["geheimnis","schicksal"] },
          { text: "sieht kommende Dinge im Schlaf", hooks: ["schicksal","magie"] },
          { text: "wacht wenn andere träumen", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "verwechselt Traum und Wachsein", hooks: ["verlust","schicksal"] },
          { text: "verirrt sich in fremden Träumen", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "Meine Visionen deuten", description: "Im Halbschlaf sieht sie Bilder dessen, was kommen wird, doch die Visionen sprechen in Rätseln, und oft verschwimmt, was Vorahnung ist und was bloßer Wahn. Eine Vision kehrt immer wieder, dieselbe Tür, derselbe Name. Sie sucht die Deutung, ehe die Bilder sie in die Irre führen.", hooks: ["schicksal","geheimnis"] },
          { title: "Den Weg zurück finden", description: "Zwischen Traum und Wachen hat sie die Grenze verloren, und in fremden Träumen verirrt sie sich, bis das eigene Leben fern und verschwommen scheint. Jemand ruft sie von draußen, eine Stimme, die sie kennt. Ihr folgt sie, um den Pfad zurück ins eigene Dasein zu finden.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "Aschenwanderin", hooks: ["schicksal","fahrend","verlust"],
        powerTags: [
          { text: "übersteht Feuer", hooks: ["schicksal","magie"] },
          { text: "findet den Weg zwischen Welten", hooks: ["schicksal","fahrend"] },
          { text: "liest die Spuren im Staub", hooks: ["natur","fahrend"] },
          { text: "schläft sicher in Ruinen", hooks: ["fahrend","außenseiter"] },
        ],
        weaknessTags: [
          { text: "nirgends willkommen", hooks: ["außenseiter","fahrend"] },
          { text: "hinterlässt verbrannte Spuren", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Die verlorene Heimat suchen", description: "Feuer nahm ihr alles und ließ nur Asche und Erinnerung zurück, die sie mit sich trägt. Nirgends willkommen, hinterlässt sie verbrannte Spuren, wo sie rastet, und zieht weiter, ehe man sie verjagt. Tief in ihr glimmt die Sehnsucht nach einem Ort, der bleibt, und den sucht sie.", hooks: ["verlust","fahrend"] },
          { title: "Der Glut der Schuldigen folgen", description: "Das Feuer, das ihr Leben verzehrte, brach nicht von selbst aus, das weiß sie gewiss. Eine Hand legte die Glut, und in Staub und Trümmern liest sie noch die Spuren jener Nacht. Das Feuer überstand sie, doch die Schuld eines anderen brennt weiter, und der folgt sie bis ans Ende.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "Wassergeborene", hooks: ["schicksal","natur","magie"],
        powerTags: [
          { text: "taucht endlos und tief", hooks: ["natur","schicksal"] },
          { text: "spürt die Strömungen", hooks: ["natur","magie"] },
          { text: "atmet unter der Oberfläche", hooks: ["schicksal","natur"] },
          { text: "spricht mit Wesen der Tiefe", hooks: ["natur","magie"] },
        ],
        weaknessTags: [
          { text: "vertrocknet fern vom Wasser", hooks: ["schicksal","verlust"] },
          { text: "ruhelos auf festem Land", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "In die Tiefe heimkehren", description: "Unter der Oberfläche taucht sie in Tiefen, die kein Mensch erreicht, denn aus dem Wasser kam sie einst. An Land aber vertrocknet sie fern von den Fluten, die sie nährten, und jeder Tag auf festem Boden fühlt sich an wie Gefangenschaft. In die Tiefe, aus der sie stammt, sehnt sie sich heimzukehren.", hooks: ["natur","schicksal"] },
          { title: "Die zornigen Gewässer befrieden", description: "Sie spricht mit den Wesen der Tiefe, und nun regt sich dort unten etwas Altes und Zorniges, dessen Beben sich bis an die Küsten trägt. Sie allein versteht seine Sprache und vermag den Groll zu lindern. Die zornigen Gewässer will sie wieder befrieden, ehe sie an Land übergreifen.", hooks: ["natur","magie"] },
        ]
      },
      {
        text: "Kind des Zwielichts", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "sieht durch Glamour und Täuschung", hooks: ["schicksal","geheimnis"] },
          { text: "wandelt zwischen Tag und Nacht", hooks: ["schicksal","geheimnis"] },
          { text: "beeinflusst Stimmungen durch Präsenz", hooks: ["magie","schicksal"] },
          { text: "geht ungesehen durch Dämmerung", hooks: ["geheimnis","natur"] },
        ],
        weaknessTags: [
          { text: "gehört weder Tag noch Nacht", hooks: ["außenseiter","schicksal"] },
          { text: "schwindet im hellen Mittag", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Meinen Platz dazwischen finden", description: "Weder dem Tag noch der Nacht gehört sie, die ungesehen durch die Dämmerung geht. Im hellen Mittag schwindet sie fast dahin, doch in der Stunde dazwischen ist sie ganz bei sich. Eine Schwelle sucht sie, auf der sie endlich stehen darf, ohne zwischen den Welten zu zerreißen.", hooks: ["außenseiter","schicksal"] },
          { title: "Die Schwelle hüten", description: "Im Zwielicht, wo sie lebende Seelen spürt, dünnt die Welt aus, und durch die Risse könnte kriechen, was draußen lauert. Sie kennt diese verborgenen Pfade und ihre Gefahr besser als jeder andere. Über die Schwelle zwischen Tag und Nacht wird sie wachen, wo immer sie sich öffnet.", hooks: ["geheimnis","schicksal"] },
        ]
      },
      {
        text: "Riss zwischen den Welten", hooks: ["schicksal","magie","geheimnis"],
        powerTags: [
          { text: "findet den Weg zwischen Welten", hooks: ["schicksal","fahrend"] },
          { text: "Sprache der anderen Seite", hooks: ["magie","geheimnis"] },
          { text: "verlässt kurz den Körper", hooks: ["schicksal","magie"] },
          { text: "spürt dünne Stellen der Welt", hooks: ["magie","geheimnis"] },
        ],
        weaknessTags: [
          { text: "vergisst in der anderen Welt", hooks: ["verlust","magie"] },
          { text: "zieht Wesen von drüben an", hooks: ["schicksal","magie"] },
        ],
        quests: [
          { title: "Den offenen Riss schließen", description: "Durch ihn kam etwas herüber, das nicht hierher gehört, und die Schuld lastet schwer. Er versteht die Sprache der anderen Seite, doch drüben vergisst er fast, wer er ist. Nun zieht der offene Riss weitere Wesen nach, und er will den klaffenden Spalt versiegeln, ehe Schlimmeres folgt.", hooks: ["magie","schicksal"] },
          { title: "Die andere Seite ergründen", description: "Jenseits des Risses liegt ein Reich, das ihn ruft, seit er erstmals den Weg zwischen den Welten beschritt. Kurz verlässt er den Körper und lauscht der Sprache der anderen Seite, die ihn lockt und verstört. Die Geheimnisse jener Schwelle lassen ihn nicht mehr los, auch wenn er sich dort zu verlieren droht.", hooks: ["geheimnis","magie"] },
        ]
      },
      {
        text: "Gezeichnete des Mondes", hooks: ["schicksal","magie","natur"],
        powerTags: [
          { text: "verwandelt sich unweigerlich bei Vollmond", hooks: ["schicksal","natur"] },
          { text: "Krallen und Reißzähne", hooks: ["schicksal","kampf"] },
          { text: "wittert Beute über weite Wege", hooks: ["natur","kampf"] },
          { text: "bricht Fesseln durch rohe Kraft", hooks: ["natur","kampf"] },
        ],
        weaknessTags: [
          { text: "heilt nur im Mondschein", hooks: ["schicksal","magie"] },
          { text: "das Mal verrät ihr Wesen", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "Die Bestie in mir bändigen", description: "Wenn der volle Mond aufsteigt, verwandelt sie sich, und Krallen und ungezähmte Wildheit drohen sie zu verschlingen. Das Mal an ihrem Leib verrät ihr wahres Wesen, so sehr sie es auch zu verbergen sucht. Um die Herrschaft über die Bestie ringt sie Nacht für Nacht.", hooks: ["schicksal","kampf"] },
          { title: "Das Rudel meiner Art finden", description: "Irgendwo da draußen leben andere, die dasselbe Mal tragen wie sie. Allein unter den Menschen, gezeichnet und gefürchtet, sehnt sie sich nach Wesen ihrer Art. Vielleicht würde unter Seinesgleichen die ungezähmte Wildheit endlich einen Sinn ergeben, und danach sucht sie.", hooks: ["natur","außenseiter"] },
        ]
      },
    ]
  },
  "Destiny": {
    type: "Greatness",
    titles: [
      {
        text: "Erbin des Throns", hooks: ["adel","macht","schicksal"],
        powerTags: [
          { text: "Blutrecht der Krone", hooks: ["adel","macht","schicksal"] },
          { text: "die Welt hört auf mich", hooks: ["schicksal","macht"] },
          { text: "Treue eines ganzen Reiches", hooks: ["adel","macht"] },
          { text: "geborene Herrscherin", hooks: ["adel","macht","schicksal"] },
        ],
        weaknessTags: [
          { text: "Rivalen wollen den Thron", hooks: ["adel","macht","kampf"] },
          { text: "andere fordern meinen Tod", hooks: ["schicksal","kampf"] },
          { text: "die Last der Krone", hooks: ["adel","verlust"] },
        ],
        quests: [
          { title: "Den Thron erringen, der mir gebührt", description: "Ein ganzes Reich wartet auf seinen rechtmäßigen Herrscher, und das Blut der Krone fließt in ihren Adern. Doch drei Rivalen umkreisen den leeren Thron, jeder mit eigenem Heer und eigenem Anspruch. Sie zieht aus, einzufordern, was ihr von Geburt an gehört.", hooks: ["adel","macht","schicksal"] },
          { title: "Mich als würdige Herrscherin beweisen", description: "Eine Krone allein macht noch keine Herrscherin, und die Last der Verantwortung drückt mit jedem Schritt schwerer, während andere an ihrem Recht zweifeln. Ein Aufstand in einer entlegenen Provinz stellt sie auf die Probe. Durch Taten statt durch Blut will sie beweisen, dass sie der Würde des Throns gewachsen ist.", hooks: ["adel","macht"] },
        ]
      },
      {
        text: "Untergang der Welt", hooks: ["schicksal","verlust"],
        powerTags: [
          { text: "erkennt das Ende in allem", hooks: ["schicksal","verlust"] },
          { text: "überlebt das Unmögliche", hooks: ["schicksal"] },
          { text: "sieht das nahende Unheil", hooks: ["schicksal","geheimnis"] },
          { text: "steht immer wieder auf", hooks: ["schicksal","kampf"] },
        ],
        weaknessTags: [
          { text: "die Bestimmung fordert Opfer", hooks: ["schicksal","verlust"] },
          { text: "Feinde wollen mich verhindern", hooks: ["schicksal","kampf"] },
          { text: "vom Ende gezeichnet", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Die Welt vor dem Ende retten", description: "Er sieht das nahende Unheil, wo andere nur Frieden wähnen, denn er ist gezeichnet vom Ende der Dinge. Ein Zeichen am Himmel, das nur er richtig deutet, kündigt den Beginn an. Wenn sonst niemand sich der Katastrophe entgegenstellt, tut er es, und weicht nicht.", hooks: ["schicksal","kampf"] },
          { title: "Den vorhergesagten Untergang verhindern", description: "Eine düstere Bestimmung läuft auf die Vernichtung zu, und ihr Schatten liegt schwer auf ihm. Die Prophezeiung fordert Opfer, und Feinde, die von seinem Untergang profitieren, wollen ihn an seinem Werk hindern. Er glaubt nicht an ein unausweichliches Schicksal und wird die vorhergesagte Stunde mit eigener Hand zerbrechen.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "Sucher des Erzählers", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "findet Zeichen im Zufall", hooks: ["schicksal","geheimnis"] },
          { text: "liest den Faden der Geschichte", hooks: ["schicksal","wissen"] },
          { text: "verbotene Türen öffnen sich", hooks: ["schicksal","geheimnis"] },
          { text: "spürt verborgene Wahrheit", hooks: ["geheimnis","wissen"] },
        ],
        weaknessTags: [
          { text: "besessen von der Suche", hooks: ["schicksal","geheimnis"] },
          { text: "der Pfad ist eng", hooks: ["schicksal"] },
          { text: "zweifelt an der Prophezeiung", hooks: ["schicksal","geheimnis"] },
        ],
        quests: [
          { title: "Entdecken, wer mich auserwählt hat", description: "Überall liest sie Zeichen im Zufall und folgt dem verborgenen Faden, der sich um ihr Leben spinnt. Etwas oder jemand hat sie zu einer Bestimmung erkoren, doch der schmale Pfad lässt sie an allem zweifeln. Besessen von der Suche wird sie nicht ruhen, bis sie der Hand begegnet, die sie auserwählte.", hooks: ["schicksal","geheimnis"] },
          { title: "Den Erzähler hinter allem finden", description: "Verbotene Türen öffnen sich vor ihr, als wollten sie sie tiefer in ein Geheimnis locken. Sie spürt, dass eine unsichtbare Hand die Geschichte lenkt, in der sie selbst nur eine Figur zu sein scheint. Getrieben von dieser Wahrheit sucht sie den Erzähler hinter allem, um ihm von Angesicht zu Angesicht gegenüberzustehen.", hooks: ["schicksal","geheimnis"] },
        ]
      },
      {
        text: "Auserwählter der Götter", hooks: ["schicksal","glaube"],
        powerTags: [
          { text: "Segen der Götter", hooks: ["glaube","schicksal","magie"] },
          { text: "wundersame Rettung", hooks: ["schicksal","magie"] },
          { text: "Verbündete erscheinen", hooks: ["schicksal"] },
          { text: "trägt göttliche Autorität", hooks: ["glaube","macht","schicksal"] },
        ],
        weaknessTags: [
          { text: "die Götter fordern Gehorsam", hooks: ["glaube","schicksal"] },
          { text: "Hochmut verfolgt mich", hooks: ["schicksal","verlust"] },
          { text: "Ketzer fordern meinen Tod", hooks: ["glaube","kampf"] },
        ],
        quests: [
          { title: "Den Willen der Götter erfüllen", description: "Der Segen der Götter ruht auf ihm, und wundersame Rettung begleitet seine Schritte, wo andere längst gefallen wären. Eine höhere Macht hat ihn gewählt und fordert nun Gehorsam. Mit göttlicher Autorität im Rücken folgt er diesem Ruf, auch wenn Ketzer nach seinem Leben trachten.", hooks: ["schicksal","glaube"] },
          { title: "Entscheiden, ob ich das Schicksal annehme", description: "Verbündete erscheinen wie aus dem Nichts, und das Schicksal scheint ihn zu beschützen, doch ein Zweifel nagt an ihm: Ist er wahrhaft der Auserwählte, oder nur eine Lüge der Götter? Ehe er sich ihrem Willen ganz ergibt, will er die Wahrheit ergründen und selbst entscheiden.", hooks: ["schicksal","glaube"] },
        ]
      },
      {
        text: "das letzte Licht", hooks: ["schicksal","glaube"],
        powerTags: [
          { text: "leuchtet in der Finsternis", hooks: ["glaube","schicksal","magie"] },
          { text: "zieht die Richtigen an", hooks: ["schicksal"] },
          { text: "gibt allen Hoffnung", hooks: ["glaube","schicksal"] },
          { text: "hält die Dunkelheit zurück", hooks: ["glaube","kampf","magie"] },
        ],
        weaknessTags: [
          { text: "die Finsternis jagt mich", hooks: ["schicksal","verlust","kampf"] },
          { text: "darf niemals erlöschen", hooks: ["glaube","schicksal"] },
          { text: "trägt aller Hoffnung Last", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Das Licht aufrecht halten", description: "Wo sie steht, leuchtet ein Licht in der Finsternis, das die Richtigen anzieht und allen Hoffnung gibt. Die Dunkelheit drückt von allen Seiten und jagt sie, denn sie weiß, was dieser Schein bedeutet. Auf ihren Schultern liegt die Last aller Hoffnung, und so weicht sie keinen Schritt zurück.", hooks: ["glaube","schicksal"] },
          { title: "Die kommende Dunkelheit vertreiben", description: "Ein Schatten wächst heran und droht die Welt zu verschlingen, während sie als letztes Licht gegen ihn steht. Statt nur die Stellung zu halten, sammelt sie ihre Verbündeten und zieht aus, um die kommende Dunkelheit ein für alle Mal zu vertreiben, ehe ihr eigener Schein erlischt.", hooks: ["glaube","kampf"] },
        ]
      },
      {
        text: "das Kind der Sterne", hooks: ["schicksal","magie"],
        powerTags: [
          { text: "die Sterne stehen günstig", hooks: ["schicksal","magie"] },
          { text: "Glück folgt meinen Schritten", hooks: ["schicksal"] },
          { text: "Vorhersehung leitet mich", hooks: ["schicksal","geheimnis"] },
          { text: "liest den Himmel", hooks: ["wissen","magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "an den Sternenlauf gebunden", hooks: ["schicksal","magie"] },
          { text: "keine freie Wahl mehr", hooks: ["schicksal","verlust"] },
          { text: "fremd unter Menschen", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "Erfüllen, wozu ich geboren wurde", description: "Das Glück folgt seinen Schritten, als richte sich die Welt nach ihm aus, und lange hat er sich gegen die Vorhersehung gewehrt, die ihn leitet. Nun hört er auf zu kämpfen und nimmt an, dass alles in ihm angelegt ist, um zu erfüllen, wozu er geboren wurde.", hooks: ["schicksal","magie"] },
          { title: "Beweisen, dass ich frei bin", description: "Man sagt ihm, sein Pfad stehe längst in den Sternen geschrieben, und er habe keine freie Wahl mehr. Fremd unter den Menschen und an den Sternenlauf gebunden, lehnt er sich gegen diese Gewissheit auf. Mit jedem Schritt, den er bewusst anders setzt, will er beweisen, dass sein Schicksal ihm allein gehört.", hooks: ["schicksal","außenseiter"] },
        ]
      },
      {
        text: "Trägerin des alten Zeichens", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "das Mal weist mich aus", hooks: ["schicksal","geheimnis","magie"] },
          { text: "verbotene Türen öffnen sich", hooks: ["schicksal","geheimnis"] },
          { text: "die Alten erkennen mich", hooks: ["schicksal","wissen"] },
          { text: "das Zeichen pulsiert bei Gefahr", hooks: ["schicksal","magie"] },
        ],
        weaknessTags: [
          { text: "das Mal zieht Jäger an", hooks: ["schicksal","kampf","geheimnis"] },
          { text: "kennt die Last nicht", hooks: ["schicksal","geheimnis"] },
          { text: "gezeichnet für immer", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Das alte Zeichen enträtseln", description: "Ein altes Mal weist sie aus, lässt verbotene Türen sich öffnen und die Alten sie erkennen, doch sie kennt die wahre Last nicht, die es ihr auferlegt. Jäger folgen ihrer Spur. Getrieben von der Ungewissheit wird sie der Bedeutung des Mals auf den Grund gehen, das sie für immer gezeichnet hat.", hooks: ["schicksal","geheimnis"] },
          { title: "Die Bürde des Zeichens tragen", description: "Das alte Zeichen pulsiert bei jeder Gefahr und verlangt seinen Preis, und fliehen kann sie vor ihm nicht. Es lockt Jäger an und macht sie zur Beute. Statt an der Bürde zu zerbrechen, sucht sie einen Weg, mit dem Mal zu leben und seine Macht in ihrem Sinne zu wenden.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "Schließerin des Risses", hooks: ["schicksal","magie"],
        powerTags: [
          { text: "bannt das Eindringende", hooks: ["magie","kampf","schicksal"] },
          { text: "Wege öffnen sich", hooks: ["schicksal"] },
          { text: "spürt den Riss der Welt", hooks: ["magie","geheimnis","schicksal"] },
          { text: "hält die Schwelle", hooks: ["magie","kampf"] },
        ],
        weaknessTags: [
          { text: "der Riss zehrt an mir", hooks: ["magie","verlust","schicksal"] },
          { text: "die Bestimmung fordert Opfer", hooks: ["schicksal","verlust"] },
          { text: "Kreaturen jenseits jagen mich", hooks: ["magie","kampf"] },
        ],
        quests: [
          { title: "Den Riss endgültig schließen", description: "Sie spürt den Riss der Welt, aus dessen Spalt Verderben in die Wirklichkeit dringt, und sie allein vermag das Eindringende zu bannen. Auch wenn der Riss an ihren Kräften zehrt und Kreaturen von jenseits sie jagen, wird sie den Spalt endgültig versiegeln.", hooks: ["schicksal","magie"] },
          { title: "Herausfinden, wer den Riss öffnete", description: "Der Spalt entstand nicht von selbst, das weiß sie, die seine zerstörerische Kraft am eigenen Leib fühlt. Die Bestimmung fordert Opfer, und Wesen von jenseits trachten ihr nach dem Leben. Sie gibt sich nicht mit dem bloßen Schließen zufrieden und wird die Hand aufspüren, die den Riss öffnete.", hooks: ["geheimnis","magie"] },
        ]
      },
      {
        text: "Prophezeite der Tiefe", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "Träume offenbaren Geheimnisse", hooks: ["schicksal","geheimnis"] },
          { text: "Stimmen der Tiefe leiten mich", hooks: ["geheimnis","magie","schicksal"] },
          { text: "kennt die alten Weissagungen", hooks: ["wissen","geheimnis","schicksal"] },
          { text: "übersteht das verborgene Grauen", hooks: ["schicksal","kampf"] },
        ],
        weaknessTags: [
          { text: "die Tiefe ruft nach mir", hooks: ["schicksal","geheimnis","verlust"] },
          { text: "zweifelt an der Prophezeiung", hooks: ["schicksal","geheimnis"] },
          { text: "Albträume rauben den Schlaf", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Die Prophezeiung der Tiefe ergründen", description: "In ihren Träumen offenbaren sich Geheimnisse, und Stimmen aus der Tiefe leiten ihre Schritte hin zu einem Schicksal, das sie noch nicht versteht, während Albträume ihr den Schlaf rauben. Trotz aller Zweifel folgt sie den alten Weissagungen, um zu ergründen, was die Tiefe ihr bestimmt hat.", hooks: ["schicksal","geheimnis"] },
          { title: "Dem Ruf der Tiefe widerstehen", description: "Etwas Uraltes ruft nach ihr aus der Tiefe und will sie ganz für sich gewinnen, und die Stimmen dringen tiefer in ihre Träume, je länger sie zögert. Sie hat das verborgene Grauen schon einmal überstanden und schwört sich, dem lockenden Ruf niemals zu gehören.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "Kind zweier Zeitalter", hooks: ["schicksal","verlust"],
        powerTags: [
          { text: "Wissen zweier Welten", hooks: ["wissen","schicksal"] },
          { text: "Brücke zwischen alt und neu", hooks: ["schicksal","geheimnis"] },
          { text: "die Bestimmung pulsiert in mir", hooks: ["schicksal"] },
          { text: "erinnert das vergangene Zeitalter", hooks: ["wissen","verlust"] },
        ],
        weaknessTags: [
          { text: "in keiner Zeit zu Hause", hooks: ["außenseiter","verlust","schicksal"] },
          { text: "zerrissen zwischen den Welten", hooks: ["schicksal","verlust"] },
          { text: "von beiden Seiten misstraut", hooks: ["außenseiter","geheimnis"] },
        ],
        quests: [
          { title: "Die zwei Zeitalter überbrücken", description: "Er trägt das Wissen zweier Welten in sich und erinnert das vergangene Zeitalter, während er im neuen steht, doch in keiner Zeit ist er ganz zu Hause, und beide Seiten begegnen ihm mit Misstrauen. Gerade diese Zerrissenheit macht ihn zur einzigen möglichen Brücke zwischen Altem und Neuem.", hooks: ["schicksal","verlust"] },
          { title: "Den Wandel der Zeitalter lenken", description: "Eine Welt geht zu Ende und eine andere beginnt, und er steht an der Schwelle zwischen beiden. Die Bestimmung pulsiert in ihm, doch zerrissen zwischen den Welten findet er nirgends Halt. Statt sich vom Wandel forttragen zu lassen, will er das Erbe zweier Zeitalter aufnehmen und den Übergang mit eigener Hand lenken.", hooks: ["schicksal","macht"] },
        ]
      },
      {
        text: "Erfüllerin des vergessenen Wortes", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "spricht das vergessene Wort", hooks: ["geheimnis","magie","schicksal"] },
          { text: "verbotene Türen öffnen sich", hooks: ["schicksal","geheimnis"] },
          { text: "kennt die verlorene Weissagung", hooks: ["wissen","geheimnis"] },
          { text: "ihr Wort trägt Gewicht", hooks: ["schicksal","macht"] },
        ],
        weaknessTags: [
          { text: "das Wort verlangt seinen Preis", hooks: ["schicksal","magie","verlust"] },
          { text: "viele begehren das Wort", hooks: ["geheimnis","macht","kampf"] },
          { text: "darf das Wort nie missbrauchen", hooks: ["schicksal","glaube"] },
        ],
        quests: [
          { title: "Das fehlende Wort finden", description: "Sie kennt nur ein Bruchstück des vergessenen Wortes, doch das Ganze verändert alles, und viele begehren die Macht, die darin schlummert. Im Wissen, dass sie es niemals missbrauchen darf, sucht sie das fehlende Stück der verlorenen Weissagung, nach der die Welt sich auszurichten beginnt.", hooks: ["schicksal","geheimnis"] },
          { title: "Das vergessene Wort vollenden", description: "Eine uralte Verheißung wartet darauf, durch ihre Stimme ihre Erfüllung zu finden, doch das Wort verlangt einen Preis, und viele wollen es für sich. Gebunden an das Gebot, es nie zu missbrauchen, nimmt sie die Last auf sich und wird das vergessene Wort vollenden.", hooks: ["schicksal","magie"] },
        ]
      },
      {
        text: "Schlusspunkt der Geschichte", hooks: ["schicksal"],
        powerTags: [
          { text: "die Bestimmung pulsiert in mir", hooks: ["schicksal"] },
          { text: "mein Antlitz erkennt jeder", hooks: ["schicksal","macht"] },
          { text: "alle Wege enden bei mir", hooks: ["schicksal","macht"] },
          { text: "überlebt das Unmögliche", hooks: ["schicksal"] },
        ],
        weaknessTags: [
          { text: "das Ende lastet auf mir", hooks: ["schicksal","verlust"] },
          { text: "keine freie Wahl mehr", hooks: ["schicksal","verlust"] },
          { text: "zieht ungesuchte Feinde an", hooks: ["schicksal","kampf"] },
        ],
        quests: [
          { title: "Die Geschichte zum Abschluss bringen", description: "Alle Wege enden bei ihm, dessen Antlitz jeder erkennt, und in dem die Bestimmung pulsiert. Schon einmal überlebte er das Unmögliche, und nun läuft alles auf ihn zu. Auch wenn das nahende Ende schwer auf ihm lastet und ungesuchte Feinde ihn umkreisen, wird er die Geschichte zu ihrem Abschluss bringen.", hooks: ["schicksal"] },
          { title: "Vorbereiten, was nach mir kommt", description: "Er weiß, dass er der Schlusspunkt einer großen Geschichte ist, und ihm bleibt keine freie Wahl mehr. Wenn sein Werk vollbracht ist, wird die Welt eine andere sein. Statt nur das Ende zu erwarten, sorgt er dafür, dass jemand bereitsteht für das, was nach ihm kommt.", hooks: ["schicksal","glaube"] },
        ]
      },
    ]
  },
  "Dominion": {
    type: "Greatness",
    titles: [
      {
        text: "Herrin der Mark", hooks: ["macht","natur","adel"],
        powerTags: [
          { text: "Tribute aus dem Land", hooks: ["macht","natur"] },
          { text: "kennt jede Grenze", hooks: ["macht","natur"] },
          { text: "Soldaten der Mark", hooks: ["kampf","macht"] },
          { text: "ein ergebenes Volk", hooks: ["macht","glaube"] },
        ],
        weaknessTags: [
          { text: "zahlt persönlich fürs Reich", hooks: ["macht","verlust"] },
          { text: "jede Schwäche wird ausgenutzt", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Mein Reich vergrößern", description: "Ihre Mark trägt ihr Banner und nährt sie mit Tributen, doch was sie hält, sättigt ihren Ehrgeiz nicht. Ein schwacher Nachbar zögert, sein Land zu verteidigen. Sie zieht mit ihren Soldaten aus, ehe ein anderer diese Gelegenheit ergreift.", hooks: ["macht","kampf"] },
          { title: "Mein Land beschützen", description: "Ein ergebenes Volk vertraut auf ihren Schutz, und jede Bedrohung an der Grenze ist ein Angriff auf alles, was sie ist. Ein Heer sammelt sich jenseits ihrer Marksteine. Solange ihr Banner weht, weicht sie keinen Schritt und reitet der Gefahr entgegen, ehe sie das Dorf erreicht.", hooks: ["macht","natur","glaube"] },
        ]
      },
      {
        text: "Anführerin der Gilde", hooks: ["macht","handwerk","stadt"],
        powerTags: [
          { text: "Gildensiegel", hooks: ["handwerk","macht"] },
          { text: "eingespielte Verwaltung", hooks: ["macht","handwerk"] },
          { text: "macht und bricht Rufe", hooks: ["macht","stadt"] },
          { text: "kennt jedermanns Schulden", hooks: ["geheimnis","macht"] },
        ],
        weaknessTags: [
          { text: "Konkurrenz um die Spitze", hooks: ["macht","stadt"] },
          { text: "jedes Bündnis hat seinen Preis", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Den gesamten Handel beherrschen", description: "Ihre Verwaltung läuft wie ein Uhrwerk, und doch entgleitet ihr noch zu viel Handel an Konkurrenten in Nachbarstädten. Sie kennt deren Schulden bereits. Sie reist dorthin, um Anteile zu kaufen oder zu erpressen, bis jeder Handel durch ihre Hände führt.", hooks: ["macht","handwerk","stadt"] },
          { title: "Ein Netzwerk aufbauen, das mich überdauert", description: "Rufe macht und bricht sie mit einem Wort, doch Konkurrenz lauert um die Spitze, und jedes Bündnis fordert seinen Preis. Was sie aufbaute, soll nicht mit ihr enden. Sie sucht Nachfolger in jeder Handelsstadt, die ihr Werk aus Treue und Schuld weitertragen.", hooks: ["macht","stadt"] },
        ]
      },
      {
        text: "Lehnsherr von Stein", hooks: ["adel","macht"],
        powerTags: [
          { text: "Burg auf dem Berg", hooks: ["adel","macht"] },
          { text: "Recht zu richten", hooks: ["macht","glaube"] },
          { text: "kennt die Adligen", hooks: ["adel","stadt"] },
          { text: "sein Wort verurteilt", hooks: ["macht"] },
        ],
        weaknessTags: [
          { text: "der Thron wird begehrt", hooks: ["macht","adel"] },
          { text: "Schulden gegenüber Mächtigen", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Recht durchsetzen, das mich selbst trifft", description: "Von seiner Burg spricht er Recht, doch er weiß, dass Macht verdirbt, wenn sie sich selbst ausnimmt, und Mächtige stehen ohnehin in seiner Schuld. Ein Fall verlangt, dass er sich seinem eigenen Urteil unterwirft. Er reist zum Ort des Vergehens, um sich derselben Klinge zu beugen, die er über andere hält.", hooks: ["macht","glaube"] },
          { title: "Der gerechte Herrscher sein", description: "Vor ihm saßen Tyrannen auf diesem Stein und beugten das Recht nach Laune, und er kennt die Adligen, die genauso handeln würden. Er will anders sein. Er zieht durch sein Land, um zu hören, wo seine Richter versagen, und richtet dort selbst.", hooks: ["macht","glaube"] },
        ]
      },
      {
        text: "Königin des Tales", hooks: ["macht","natur"],
        powerTags: [
          { text: "ein ergebenes Volk", hooks: ["macht","glaube"] },
          { text: "spricht für ein Volk", hooks: ["macht","glaube"] },
          { text: "Tribute aus dem Land", hooks: ["macht","natur"] },
          { text: "kennt jede Grenze ihres Reiches", hooks: ["macht","natur"] },
        ],
        weaknessTags: [
          { text: "einsam an der Spitze", hooks: ["macht","verlust"] },
          { text: "zahlt persönlich für ihr Reich", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Mein Tal vor allen Feinden schützen", description: "Sie spricht für ihr Volk und kennt jede Grenze ihres kleinen Reiches, dessen wahre Stärke aus der Verbundenheit mit der Erde selbst kommt. Ein Feind sammelt sich jenseits der Hänge. Sie zieht ihm entgegen, an die Schwelle des Tals, ehe er es erreicht.", hooks: ["macht","natur","glaube"] },
          { title: "Einen Krieg um mein Land beenden", description: "Ein ergebenes Volk blickt zu ihr auf, wenn Krisen hereinbrechen, und die Einsamkeit der Spitze lastet schwer. Der Krieg um ihr Land fordert auf allen Seiten Tote. Sie reist zum Feind, um zu verhandeln, was ihre Heere allein nicht erreichen, und trägt die Bürde des Friedens persönlich.", hooks: ["kampf","macht"] },
        ]
      },
      {
        text: "Befehlshaber der Wache", hooks: ["kampf","macht","stadt"],
        powerTags: [
          { text: "regiert durch Stärke", hooks: ["macht","kampf"] },
          { text: "bewegt Heere in Tagen", hooks: ["kampf","macht"] },
          { text: "Recht auf Krieg", hooks: ["macht","kampf"] },
          { text: "Soldaten meines Reiches", hooks: ["kampf","macht"] },
        ],
        weaknessTags: [
          { text: "Aufstand gärt", hooks: ["macht","außenseiter"] },
          { text: "Entscheidungen ohne Gewissen", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Die Ordnung mit eiserner Hand halten", description: "Seine Soldaten gehorchen jeder Losung, doch unter der Oberfläche gärt ein Aufstand, dessen Anführer er noch nicht kennt. Jede geduldete Schwäche wäre der erste Riss in der Mauer. Er reist verdeckt durch die Viertel, um die Rädelsführer zu finden, ehe sie losschlagen.", hooks: ["macht","kampf","stadt"] },
          { title: "Einen Krieg beenden, der das Land zerstört", description: "Heere bewegt er in wenigen Tagen, und das Recht auf Krieg liegt in seiner Hand, doch er trifft Entscheidungen, die kein Gewissen mehr wägt. Der Krieg zerfrisst, was er verteidigen soll. Er reist zum Feldherrn der Gegenseite, um zu beenden, was beide Seiten nicht mehr aufhalten können.", hooks: ["kampf","macht"] },
        ]
      },
      {
        text: "Herrscherin des Zwielichtreiches", hooks: ["macht","schicksal","geheimnis"],
        powerTags: [
          { text: "beste Spione weit und breit", hooks: ["geheimnis","stadt"] },
          { text: "verborgene Reserven", hooks: ["macht","geheimnis"] },
          { text: "kennt jedes Schweigen", hooks: ["geheimnis","macht"] },
          { text: "zieht Fäden im Verborgenen", hooks: ["macht","geheimnis"] },
        ],
        weaknessTags: [
          { text: "Verräter im inneren Kreis", hooks: ["geheimnis","stadt"] },
          { text: "unsichtbare Feinde", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "Die Welt aus dem Schatten beherrschen", description: "Ihre Spione dienen ihr weit über die eigenen Grenzen hinaus, und sie zieht die Fäden im Verborgenen. Ein Hof, den sie noch nicht durchdrungen hat, entscheidet gerade über etwas, das sie betrifft. Sie reist dorthin, unsichtbar, um auch diesen letzten Faden in die Hand zu bekommen.", hooks: ["macht","geheimnis"] },
          { title: "Herausfinden, wer mich verraten hat", description: "Sie kennt jedes Schweigen und wendet Krisen ab, ehe sie ans Licht treten, doch ein Verräter sitzt in ihrem inneren Kreis. Es war jemand, dem sie vertraute. Sie folgt der Spur des Verrats bis zu dem Ort, an dem er geschmiedet wurde, ehe das ganze Netz zerreißt.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "Erbin einer Festung ohne Land", hooks: ["adel","verlust","macht"],
        powerTags: [
          { text: "Banner und Wappen", hooks: ["adel","macht"] },
          { text: "uralte Ansprüche", hooks: ["adel","verlust"] },
          { text: "eine Handvoll treuer Soldaten", hooks: ["kampf","macht"] },
          { text: "Burg auf dem Berg", hooks: ["adel","macht"] },
        ],
        weaknessTags: [
          { text: "ein Reich nur auf Papier", hooks: ["macht","verlust"] },
          { text: "Schulden gegenüber Mächtigen", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Mein Erbe zurückerobern", description: "Ihr Banner und ihre uralten Ansprüche stützen ihren Namen, doch ihr Reich besteht nur auf Papier, eine Burg ohne Land darunter. Eine Handvoll treuer Soldaten folgt ihr. Sie zieht aus, das Land zurückzuerobern, das einst ihrem Haus gehörte, Dorf um Dorf.", hooks: ["adel","macht","verlust"] },
          { title: "Das Reich neu aufbauen", description: "Uralte Ansprüche allein füllen keine Speicher und stellen keine Heere, und ihre Festung steht leer. Aus den nackten Mauern und einer Handvoll Getreuer will sie wieder eine Macht formen. Sie reist zu möglichen Verbündeten, um Eid um Eid zu sammeln, bis aus dem Reich auf Papier ein Reich aus Fleisch und Erde wird.", hooks: ["macht","schicksal"] },
        ]
      },
      {
        text: "Anführerin des Widerstands", hooks: ["außenseiter","kampf","macht"],
        powerTags: [
          { text: "mobilisiert Verbündete", hooks: ["macht"] },
          { text: "spricht für ein unterdrücktes Volk", hooks: ["macht","glaube"] },
          { text: "Boten in jede Richtung", hooks: ["macht","fahrend"] },
          { text: "verborgene Reserven", hooks: ["macht","geheimnis"] },
        ],
        weaknessTags: [
          { text: "gejagt von der herrschenden Macht", hooks: ["macht","außenseiter"] },
          { text: "Verräter im inneren Kreis", hooks: ["geheimnis","stadt"] },
        ],
        quests: [
          { title: "Den Tyrannen stürzen", description: "Sie kann Verbündete mobilisieren und spricht für ein unterdrücktes Volk, und verborgene Reserven warten auf den richtigen Moment. Doch die herrschende Macht jagt sie, und ein Verräter könnte alles verraten. Sie reist von Zelle zu Zelle des Widerstands, um den Schlag gegen den Thron endlich zu koordinieren.", hooks: ["macht","kampf","außenseiter"] },
          { title: "Dem Volk seine Stimme zurückgeben", description: "Durch Überzeugung führt sie, nicht durch Furcht, und ein unterdrücktes Volk schart sich um ihre Sache. Was man diesen Menschen nahm, ihre Stimme, ihr Recht, will sie zurückholen. Gejagt und verraten aus den eigenen Reihen, hält sie dennoch fest daran, dass ihr Schweigen enden muss.", hooks: ["macht","glaube"] },
        ]
      },
      {
        text: "Regentin für ein Kind", hooks: ["macht","adel","glaube"],
        powerTags: [
          { text: "Räte und Berater", hooks: ["macht","wissen"] },
          { text: "Vertrauen der Mächtigen", hooks: ["macht","adel"] },
          { text: "beherrscht das Gleichgewicht der Mächte", hooks: ["macht","stadt"] },
          { text: "ihr Wort gilt am Hof", hooks: ["macht","adel"] },
        ],
        weaknessTags: [
          { text: "die Macht ist nur geliehen", hooks: ["macht","verlust"] },
          { text: "der Thron wird begehrt", hooks: ["macht","adel"] },
        ],
        quests: [
          { title: "Den Thron für das Kind wahren", description: "Räte umgeben sie, und ihr Wort gilt am Hof, doch die Macht ist ihr nur geliehen. Ein Fürst am Rand des Reiches erkennt das Kind nicht als Erben an. Sie reist zu ihm, um mit Worten oder Waffen zu sichern, was ihr anvertraut wurde, bis das Kind alt genug ist.", hooks: ["macht","adel","glaube"] },
          { title: "Die Macht abgeben, wenn es Zeit ist", description: "Das Vertrauen der Mächtigen ruht auf ihr, doch sie weiß, diese Macht ist nicht die ihre, sondern nur geborgt für eine Frist. Ein Berater drängt sie, die Frist zu verlängern. Sie widersteht und bereitet den Tag vor, an dem sie die Macht zurückgibt, komme, was wolle.", hooks: ["macht","adel"] },
        ]
      },
      {
        text: "Herrscherin durch Geburt und Last", hooks: ["adel","schicksal","macht"],
        powerTags: [
          { text: "ererbtes Recht", hooks: ["adel","macht"] },
          { text: "ein ergebenes Volk", hooks: ["macht","glaube"] },
          { text: "wendet Krisen ab", hooks: ["macht","schicksal"] },
          { text: "Banner und Wappen", hooks: ["adel","macht"] },
        ],
        weaknessTags: [
          { text: "einsam an der Spitze", hooks: ["macht","verlust"] },
          { text: "kann die Krone nicht ablegen", hooks: ["macht","schicksal"] },
        ],
        quests: [
          { title: "Die Bürde der Krone tragen", description: "Ererbtes Recht legte ihr die Krone aufs Haupt, und ein ergebenes Volk blickt zu ihr auf, doch niemand fragte sie, ob sie dies wollte. Eine Krise jenseits ihrer Grenzen verlangt ihr persönliches Eingreifen. Einsam an der Spitze reist sie hin, denn die Krone lässt sich nicht ablegen.", hooks: ["macht","schicksal","adel"] },
          { title: "Ein Reich aufbauen, das mich überdauert", description: "Krisen wendet sie ab, wie es ihr ererbtes Recht verlangt, doch die Last drückt schwer und einsam. Sie legt Grundsteine für die Herrschaft nach ihr, sucht Bündnisse und Erben in fernen Höfen, damit aus erzwungener Pflicht ein Reich erwächst, das sie überdauert.", hooks: ["macht","schicksal"] },
        ]
      },
      {
        text: "Herrin der verbotenen Stadt", hooks: ["macht","stadt","geheimnis"],
        powerTags: [
          { text: "Zugang zu verschlossenen Orten", hooks: ["geheimnis","macht"] },
          { text: "beste Spione weit und breit", hooks: ["geheimnis","stadt"] },
          { text: "kennt das Geheimnis aller", hooks: ["geheimnis","macht"] },
          { text: "ihr Wort verurteilt", hooks: ["macht"] },
        ],
        weaknessTags: [
          { text: "jede Schwäche wird ausgenutzt", hooks: ["macht","stadt"] },
          { text: "alte Intrigen holen sie ein", hooks: ["stadt","verlust"] },
        ],
        quests: [
          { title: "Das Tor der Stadt verschlossen halten", description: "Nur sie hat Zugang zu den verschlossenen Orten, und die besten Spione melden ihr jede Regung von außen. Was hinter den Mauern ruht, darf die Welt niemals erreichen. Sie reist zu den Grenzwachen und Bündnispartnern, um das Tor auch dann zu sichern, wenn sie selbst nicht da ist.", hooks: ["macht","stadt","geheimnis"] },
          { title: "Die wahren Strippenzieher entlarven", description: "Verborgene Reserven und ihr Wissen um die Geheimnisse aller geben ihr Macht, doch alte Intrigen holen sie ein. Hinter dem, was in der verbotenen Stadt geschieht, bewegen sich Hände, deren Ziele sie nicht durchschaut. Sie folgt den Fäden über die Stadtgrenze hinaus, bis sie die Strippenzieher findet.", hooks: ["geheimnis","macht"] },
        ]
      },
      {
        text: "Gebieterin über Leben und Tod", hooks: ["macht","glaube","schicksal"],
        powerTags: [
          { text: "Recht zu richten", hooks: ["macht","glaube"] },
          { text: "ihr Wort verurteilt", hooks: ["macht"] },
          { text: "ein ergebenes Volk", hooks: ["macht","glaube"] },
          { text: "regiert durch Furcht und Gnade", hooks: ["macht","schicksal"] },
        ],
        weaknessTags: [
          { text: "Entscheidungen ohne Gewissen", hooks: ["macht","verlust"] },
          { text: "einsam an der Spitze", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Das letzte Urteil sprechen", description: "Das Recht zu richten liegt bei ihr, gestützt von einem ergebenen Volk, und durch Furcht und Gnade regiert sie. Ein Fall, größer als alle zuvor, verlangt, dass sie selbst vor Ort urteilt, nicht durch Boten. Sie reist dorthin, um über Leben und Tod zu entscheiden, wo niemand sonst die Waage halten darf.", hooks: ["macht","glaube","schicksal"] },
          { title: "Die Macht abgeben, ehe sie mich verdirbt", description: "Ein ergebenes Volk fürchtet und liebt sie, doch die Einsamkeit der Spitze zehrt, und sie spürt, wie die Macht über Leben und Tod ihr Gewissen aushöhlt. Sie sucht eine Nachfolgerin, der sie vertrauen kann. Sie reist zu ihr, um loszulassen, ehe es für ihre Seele zu spät ist.", hooks: ["macht","verlust"] },
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
          { text: "das Feuer gehorcht ihm", hooks: ["handwerk","natur"] },
        ],
        weaknessTags: [
          { text: "gefährdet durch Neid", hooks: ["stadt"] },
          { text: "Ruhm zieht Feinde an", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Das Meisterwerk meines Lebens erschaffen", description: "Seine Klingen tragen Helden in die Schlacht, doch eine Waffe fehlt noch, die alles übertrifft, was seine Hand je formte. Er hat von einem Erz gehört, das nur an einem einzigen Ort der Welt bricht. Er reist dorthin, um es zu bergen und die Waffe zu schmieden, die seinen Namen überdauern soll.", hooks: ["handwerk","schicksal"] },
          { title: "Die letzte Schmiedetechnik erlernen", description: "Er kennt die Seele jedes Materials, doch irgendwo wartet ein Verfahren, das ihm bisher verschlossen blieb, gehütet von einem Meister, der Fremde nicht empfängt. Ohne diese letzte Kunst bleibt selbst der Größte unvollendet. Er sucht diesen Meister auf, komme, was wolle.", hooks: ["handwerk","wissen"] },
        ]
      },
      {
        text: "Meister der Klinge", hooks: ["handwerk","kampf"],
        powerTags: [
          { text: "unschlagbar im Wettkampf", hooks: ["handwerk","kampf"] },
          { text: "Technik ohne Namen", hooks: ["handwerk","schicksal"] },
          { text: "liest jeden Gegner sofort", hooks: ["kampf","wissen"] },
          { text: "gilt als Legende", hooks: ["handwerk","schicksal"] },
        ],
        weaknessTags: [
          { text: "Herausforderer ohne Ende", hooks: ["kampf","macht"] },
          { text: "erträgt keine Niederlage", hooks: ["handwerk","kampf"] },
        ],
        quests: [
          { title: "Jemanden finden, der mich übertrifft", description: "Er liest jeden Gegner, ehe dieser die Klinge hebt, und gilt längst als Legende, doch an der Spitze ist es einsam, und kein Sieg wärmt mehr. Gerüchte erzählen von einer Fechterin im äußersten Norden, die nie verlor. Er reist ihr entgegen, denn nur sie könnte ihn wieder lebendig machen.", hooks: ["handwerk","kampf"] },
          { title: "Beweisen, dass meine Kunst keinen Krieg braucht", description: "Endlose Herausforderer haben ihn gelehrt, dass sein Ruf nur Tod und Blut anzieht, doch seine namenlose Technik ist mehr als ein Werkzeug zum Töten. Er nimmt an einem Turnier ohne Todesfolge teil, um der Welt zu zeigen, dass seine meisterhafte Kontrolle auch Schönheit schaffen kann.", hooks: ["handwerk","glaube"] },
        ]
      },
      {
        text: "Erbauer der Welten", hooks: ["handwerk","schicksal"],
        powerTags: [
          { text: "vollbringt das Unmögliche", hooks: ["handwerk","schicksal"] },
          { text: "sieht Jahre im Werkstück", hooks: ["handwerk","wissen"] },
          { text: "Werke überdauern Jahrhunderte", hooks: ["handwerk","schicksal"] },
          { text: "Bauwerke trotzen der Zeit", hooks: ["handwerk","macht"] },
        ],
        weaknessTags: [
          { text: "Geisel der eigenen Größe", hooks: ["macht","verlust"] },
          { text: "unzumutbare Selbstansprüche", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Die Welt mit meiner Kunst verändern", description: "Er sieht ganze Jahre im rohen Werkstück und vollbringt, was andere für unmöglich halten. Ein zerstörter Ort, den niemand wieder aufzubauen wagt, ruft nach ihm. Er reist dorthin, um etwas zu errichten, das eine verschlossene Tür für immer aufstößt.", hooks: ["handwerk","macht"] },
          { title: "Ein Erbe hinterlassen, das mich überdauert", description: "Die eigene Größe ist ihm Last und Antrieb zugleich, und der Gedanke an Vergänglichkeit treibt ihn an. Er sucht den Ort, an dem sein größtes Bauwerk stehen soll, eines, das der Zeit trotzt und noch steht, wenn sein Name längst verklungen ist.", hooks: ["handwerk","schicksal"] },
        ]
      },
      {
        text: "Königin der Stimme", hooks: ["handwerk"],
        powerTags: [
          { text: "unverwechselbarer Stil", hooks: ["handwerk"] },
          { text: "bewegt jedes Herz", hooks: ["handwerk","macht"] },
          { text: "ihr Ruf öffnet Türen", hooks: ["handwerk","macht"] },
          { text: "gilt als Legende", hooks: ["handwerk","schicksal"] },
        ],
        weaknessTags: [
          { text: "gefährdet durch Neid", hooks: ["stadt"] },
          { text: "Ruhm zieht Feinde an", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Ein Lied erschaffen, das nie verstummt", description: "Mit ihrem Stil bewegt sie jedes Herz, und ihr Ruf öffnet ihr jede Tür, doch Beifall verklingt, und das genügt ihr nicht mehr. Eine wahre Geschichte, die noch niemand besungen hat, wartet darauf, gehört zu werden. Sie reist zu ihrem Ursprung, um eine Weise zu schaffen, die man noch Generationen nach ihr singt.", hooks: ["handwerk","schicksal"] },
          { title: "Die Mächtigen allein durch Worte wenden", description: "Der Neid der anderen und die Feinde, die ihr Ruhm anzieht, haben ihr gezeigt, wie viel Macht in einer Stimme liegt. An einem Hof droht ein Krieg. Sie reist dorthin, um mit meisterhafter Kontrolle zu beweisen, dass ein Lied mehr bewegt als jedes Heer.", hooks: ["handwerk","macht"] },
        ]
      },
      {
        text: "unangefochtene Heilerin", hooks: ["handwerk","glaube"],
        powerTags: [
          { text: "kennt jede Variante", hooks: ["handwerk","wissen"] },
          { text: "andere Meister suchen Rat", hooks: ["handwerk","wissen"] },
          { text: "erkennt ungeahnte Fehler", hooks: ["handwerk","wissen"] },
          { text: "Heilung gegen jedes Leiden", hooks: ["handwerk","glaube"] },
        ],
        weaknessTags: [
          { text: "alle wollen von ihr lernen", hooks: ["handwerk"] },
          { text: "kein Verlust verziehen", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Zeigen, dass Heilung keinen Krieg braucht", description: "Selbst andere Meister suchen bei ihr Rat, denn sie erkennt Fehler, die allen anderen verborgen bleiben, doch manche fürchten, dieselbe Kunst könnte auch schaden. Ein Fürst will ihr Wissen für seine Waffenschmiede. Sie reist zu ihm, um zu zeigen, dass ihre Gabe einzig dem Leben dient.", hooks: ["handwerk","glaube"] },
          { title: "Ein Leiden für immer besiegen", description: "Sie kennt jede Variante der Heilung und vollbringt, was unmöglich scheint, doch ein Leiden hat zu viele dahingerafft, und keinen Verlust verzeiht sie sich leicht. Sie reist zum Ursprung der Krankheit, in ein Sumpfgebiet, das man meidet, um sie nicht nur zu lindern, sondern für immer zu tilgen.", hooks: ["handwerk","macht"] },
        ]
      },
      {
        text: "Weber des Lebens", hooks: ["handwerk","magie"],
        powerTags: [
          { text: "geheime Techniken", hooks: ["handwerk","geheimnis"] },
          { text: "vollbringt das Unmögliche", hooks: ["handwerk","schicksal"] },
          { text: "kennt die Seele des Materials", hooks: ["handwerk","magie"] },
          { text: "formt was lebendig ist", hooks: ["handwerk","magie"] },
        ],
        weaknessTags: [
          { text: "Geisel der eigenen Größe", hooks: ["macht","verlust"] },
          { text: "gefürchtet wie gerühmt", hooks: ["magie","außenseiter"] },
        ],
        quests: [
          { title: "Etwas weben, das die Welt verändert", description: "Mit geheimen Techniken formt er, was lebendig ist, doch seine eigene Größe droht ihn zu verschlingen. Er will sie nutzen, um etwas zu schaffen, das zuvor unmöglich schien, und reist zu den Orten, an denen die seltensten Fäden des Lebens noch zu finden sind.", hooks: ["handwerk","magie"] },
          { title: "Die Grenze des Erschaffbaren überschreiten", description: "Er wird gefürchtet wie gerühmt, denn seine Technik überschreitet, was andere wagen, doch er fragt sich, wo das Weben des Lebens an seine letzte Schranke stößt. Er sucht die, die diese Schranke schon einmal berührt haben, um von ihrem Scheitern zu lernen.", hooks: ["handwerk","geheimnis"] },
        ]
      },
      {
        text: "letzte ihrer Schule", hooks: ["handwerk","verlust"],
        powerTags: [
          { text: "Technik ohne Namen", hooks: ["handwerk","schicksal"] },
          { text: "kennt die Geschichte des Fachs", hooks: ["handwerk","wissen"] },
          { text: "geheime Techniken", hooks: ["handwerk","geheimnis"] },
          { text: "trägt ein verlorenes Erbe", hooks: ["handwerk","verlust"] },
        ],
        weaknessTags: [
          { text: "niemand auf ihrer Ebene", hooks: ["verlust"] },
          { text: "letzte Hüterin des Wissens", hooks: ["verlust","geheimnis"] },
        ],
        quests: [
          { title: "Retten, was von meiner Schule bleibt", description: "Sie trägt ein verlorenes Erbe und beherrscht eine Technik ohne Namen, die sonst niemand mehr kennt. Als Letzte ihrer Schule lastet das ganze Wissen auf ihr. Sie sucht die verstreuten Schriften und letzten Schüler ihrer Vorgänger, ehe auch diese Spuren verwehen.", hooks: ["handwerk","verlust"] },
          { title: "Das Werk meines Lehrers vollenden", description: "Ihr Lehrer starb mit halbfertiger Hand, und sie kennt die Geschichte des Fachs wie keine Zweite. Ein letztes, unvollendetes Werk wartet an dem Ort, den er nie erreichte. Sie reist dorthin, um es zu Ende zu führen, als wären es die Hände des Meisters selbst.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "Meisterin der verbotenen Kunst", hooks: ["handwerk","geheimnis"],
        powerTags: [
          { text: "geheime Techniken", hooks: ["handwerk","geheimnis"] },
          { text: "vollbringt das Unmögliche", hooks: ["handwerk","schicksal"] },
          { text: "kennt jede Variante", hooks: ["handwerk","wissen"] },
          { text: "wirkt was andere fürchten", hooks: ["handwerk","magie"] },
        ],
        weaknessTags: [
          { text: "von Hütern gejagt", hooks: ["geheimnis","macht"] },
          { text: "Ruhm zieht Feinde an", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Die letzte verbotene Technik meistern", description: "Sie wirkt, was andere fürchten, doch eine verbotene Kunst fehlt ihr noch, verborgen an einem Ort, den die Hüter bewachen. Obwohl sie dort gejagt wird, geht sie ihr nach, denn ihr Streben nach Vollendung wiegt schwerer als jede Gefahr.", hooks: ["handwerk","geheimnis"] },
          { title: "Meine Kunst nur nutzen, um Frieden zu wahren", description: "Gefürchtet wie gerühmt zieht sie mit ihrer verbotenen Kunst Feinde an, und viele sehen in ihr nur Bedrohung. Ein Konflikt, den nur ihre Kunst lösen kann, ohne Blutvergießen, ruft nach ihr. Sie reist hin, um zu beweisen, dass auch das Verbotene dem Guten dienen kann.", hooks: ["handwerk","glaube"] },
        ]
      },
      {
        text: "Lehrmeisterin ohne Schüler", hooks: ["handwerk","wissen"],
        powerTags: [
          { text: "lehrt mit einem Blick", hooks: ["handwerk","wissen"] },
          { text: "andere Meister suchen Rat", hooks: ["handwerk","wissen"] },
          { text: "erkennt ungeahnte Fehler", hooks: ["handwerk","wissen"] },
          { text: "veredelt fremdes Werk", hooks: ["handwerk"] },
        ],
        weaknessTags: [
          { text: "niemand auf ihrer Ebene", hooks: ["verlust"] },
          { text: "erträgt kein Mittelmaß", hooks: ["handwerk"] },
        ],
        quests: [
          { title: "Meine Kunst weitergeben, ehe sie verloren geht", description: "Sie lehrt mit einem einzigen Blick, und selbst andere Meister suchen ihren Rat, doch niemand reicht an ihre Ebene heran, und ihr Können droht mit ihr zu sterben. Sie reist von Werkstatt zu Werkstatt, um den einen zu finden, der würdig genug ist, es zu empfangen.", hooks: ["handwerk","wissen"] },
          { title: "Einen würdigen Erben für meine Kunst finden", description: "Sie erkennt ungeahnte Fehler und veredelt fremdes Werk mit leichter Hand, doch sie erträgt kein Mittelmaß. Ihr Wissen verlangt einen Erben, der das Erbe wirklich tragen kann, nicht bloß einen eifrigen Nachahmer. Nach diesem einen hält sie Ausschau, weit über die eigene Stadt hinaus.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "Legende zu Lebzeiten", hooks: ["handwerk","schicksal"],
        powerTags: [
          { text: "ihr Name flößt Ehrfurcht ein", hooks: ["handwerk","schicksal"] },
          { text: "ihr Ruf öffnet Türen", hooks: ["handwerk","macht"] },
          { text: "Schüler aus aller Welt", hooks: ["handwerk","wissen"] },
          { text: "vollbringt das Unmögliche", hooks: ["handwerk","schicksal"] },
        ],
        weaknessTags: [
          { text: "Geisel der eigenen Größe", hooks: ["macht","verlust"] },
          { text: "Ruhm zieht Feinde an", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Dem Mythos gerecht werden, der mich umgibt", description: "Schüler aus aller Welt strömen zu ihr, und sie gilt schon zu Lebzeiten als Legende, doch die Geschichten über sie sind größer geworden als sie selbst. Eine Aufgabe, an der schon andere Legenden scheiterten, stellt sich ihr in den Weg. Sie nimmt sie an, um zu beweisen, dass sie den Mythos verdient.", hooks: ["handwerk","schicksal"] },
          { title: "Die Welt durch meine Kunst verändern", description: "Ihr Ruf öffnet jede Tür, und sie vollbringt, was anderen unmöglich bleibt, doch bloße Bewunderung genügt ihr nicht mehr. Sie sucht die eine Gelegenheit, ihren Ruhm zu nutzen, um etwas in der Welt zu verschieben, das ohne sie für immer feststünde.", hooks: ["handwerk","macht"] },
        ]
      },
      {
        text: "vollendete Navigatorin", hooks: ["handwerk","fahrend"],
        powerTags: [
          { text: "Technik für jede Umgebung", hooks: ["handwerk","natur"] },
          { text: "kennt jede Variante", hooks: ["handwerk","wissen"] },
          { text: "findet jeden Weg", hooks: ["handwerk","fahrend"] },
          { text: "liest Himmel und Strömung", hooks: ["handwerk","natur"] },
        ],
        weaknessTags: [
          { text: "erwartet zu hohe Standards", hooks: ["handwerk"] },
          { text: "niemand auf ihrer Ebene", hooks: ["verlust"] },
        ],
        quests: [
          { title: "Die letzte unbekannte Route kartieren", description: "Sie liest Himmel und Strömung und findet jeden Weg, doch ihre hohen Standards lassen sie mit bekanntem Wasser nicht zufrieden. Irgendwo wartet eine Route, die noch kein Kiel je befuhr. Sie sticht in See, um die Erste zu sein, die sie kartiert.", hooks: ["handwerk","fahrend"] },
          { title: "Mein Navigationswissen weitergeben", description: "Sie kennt jede Variante ihres Fachs, doch niemand erreicht ihre Ebene, und der Gedanke, dass ihr Wissen mit ihr versinkt, lässt sie nicht los. Sie reist zu den besten jungen Steuerleuten des Landes, um es weiterzugeben, ehe der letzte Kurs, den nur sie kennt, verloren geht.", hooks: ["handwerk","wissen"] },
        ]
      },
      {
        text: "Großmeisterin der Gilde", hooks: ["handwerk","macht"],
        powerTags: [
          { text: "Werkstatt mit eigenem Namen", hooks: ["handwerk","macht"] },
          { text: "ihr Ruf öffnet Türen", hooks: ["handwerk","macht"] },
          { text: "Schüler aus aller Welt", hooks: ["handwerk","wissen"] },
          { text: "setzt den Maßstab des Fachs", hooks: ["handwerk","macht"] },
        ],
        weaknessTags: [
          { text: "gefährdet durch Neid", hooks: ["stadt"] },
          { text: "Rivalen um den Vorsitz", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Die Gilde unter einem Banner einen", description: "Sie setzt den Maßstab des Fachs und beherrscht selbst verwandte Disziplinen, doch Rivalen streiten um den Vorsitz, und die Gilde droht zu zerfallen. Sie reist zu den zerstrittenen Meistern in ihren eigenen Werkstätten, um sie unter einem Banner zu einen, ehe der Zwist das Erbe zerreißt.", hooks: ["handwerk","macht"] },
          { title: "Die Gilde öffnen und mein Wissen weitergeben", description: "Ihr Ruf öffnet jede Tür, und Schüler aus aller Welt drängen zu ihr, doch ihre eigene Größe droht sie zur Geisel zu machen, wenn sie das Wissen für sich behält. Sie öffnet die Gilde für alle Würdigen, auch für jene, die sich die Reise zu ihr nie hätten leisten können.", hooks: ["handwerk","wissen"] },
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
          { title: "Der letzte Drachentöter", description: "Die Schuppenhaut des Helden trotzt Klinge und Feuer, doch er weiß um die eine verwundbare Stelle, die ihn verraten könnte. Einer zieht durch die Lande und löscht seinesgleichen aus, eine Trophäe nach der anderen. Bevor dieser Jäger die Schwäche findet, will der Held ihn aufspüren und dem Sterben seiner Art ein Ende setzen.", hooks: ["kampf","verlust"] },
          { title: "Hort über alles", description: "Jahrhundertelang hat der Held sein Gold gehütet, jede Münze ein Stück seiner selbst. Nun wittert er Diebe an den Rändern und Heere am Horizont, alle gierig nach dem, was ihm gehört. Mit Atem aus Feuer und Eis und einem Flügelschlag wie Sturm wird er seinen Schatz gegen jeden verteidigen, der die Hand danach ausstreckt.", hooks: ["macht","natur"] },
        ]
      },
      {
        text: "Sturmtitan", hooks: ["schicksal","natur","macht"],
        powerTags: [
          { text: "ruft Stürme herbei", hooks: ["magie","natur"] },
          { text: "verändert das Wetter", hooks: ["natur","schicksal"] },
          { text: "erschütternder Donnerschrei", hooks: ["macht","kampf"] },
          { text: "gigantische Schritte", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "zu groß für die Menschenwelt", hooks: ["außenseiter","natur"] },
          { text: "löst überall Panik aus", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "Zorn am Himmel", description: "Er ruft Stürme und biegt das Wetter nach seinem Willen, denn in seiner Brust glüht alter Zorn. Sterbliche haben sein Reich entweiht, ohne die Macht zu ahnen, die sie reizten. Nun sammelt er die Wolken über ihren Köpfen, denn sein Donnerschrei soll sie lehren, was es heißt, einen Titan herauszufordern.", hooks: ["natur","macht"] },
          { title: "Ruhe finden", description: "Jeder seiner Schritte erschüttert den Boden, und wo er auftaucht, bricht Panik aus, denn er ist zu groß für die Menschenwelt, und seine Kräfte gehorchen ihm nur halb. Ehe ein einziger Wutausbruch alles um ihn fortreißt, sucht er nach Stille in sich, nach einem Weg, den Sturm zu zügeln.", hooks: ["schicksal","verlust"] },
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
          { text: "gebunden ans Moor", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "Herrin des Sumpfes", description: "Aus verschleierndem Nebel wachen ihre vielen Köpfe über jeden Pfad durchs Moor, das ihr Revier ist, an das sie gebunden bleibt. Jeder Eindringling stört die uralte Ordnung. Mit nachwachsenden Gliedern und tödlichem Gift treibt sie jeden zurück, der es wagt, in ihre trübe Welt einzudringen.", hooks: ["natur","kampf"] },
          { title: "Niemals enthauptet", description: "Schlägt man ihr einen Kopf ab, wachsen zwei nach, doch sie kennt die eine verwundbare Stelle, die sie enden ließe. Jäger lernen dazu, und eines Tages werden auch sie das Geheimnis entdecken. Darum sucht sie selbst nach der Wahrheit über ihren letzten Kopf, ehe ein Fremder sie gegen sie wendet.", hooks: ["geheimnis","verlust"] },
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
          { text: "von Jägern belagert", hooks: ["kampf","außenseiter"] },
        ],
        quests: [
          { title: "Legende bleiben", description: "In den lautlosen Tiefen ist es kaum mehr als ein Schauder, ein Gerücht unter Fischern, doch seine enorme Größe macht es zur begehrten Beute, sobald es sich zeigt. Darum hütet es sein Geheimnis und bleibt ein Flüstern am Lagerfeuer, das sich niemals ganz dem Tageslicht offenbart.", hooks: ["geheimnis","natur"] },
          { title: "Der trockengelegte See", description: "Der uralte Seegrund ist Versteck und Heimat, an die Tiefe gebunden wie an sein eigenes Blut. Doch Menschen graben Kanäle und senken die Fluten, Stück um Stück. Ehe sie sein Gewässer zerstören und es dem gierigen Blick der Jäger preisgeben, muss es ihr Werk vereiteln und die Tiefe bewahren.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "der wandelnde Wald", hooks: ["natur","schicksal","magie"],
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
          { title: "Hüter des alten Hains", description: "Er spricht die Sprache der Erde, und die Tiere des Waldes folgen seinem Wort. Doch jenseits des Dickichts blitzen Äxte, und Rauch kündet von Bränden, die sein Wesen versengen könnten. Langsam, aber unbeirrbar zieht er seine wuchernden Wurzeln zusammen, um den letzten Urwald vor Axt und Flamme zu schützen.", hooks: ["natur","glaube"] },
          { title: "Wachsen ohne Ende", description: "Wo er seine Ranken ausstreckt, erwacht totes Land zu grünem Leben, und ein verödetes Reich ruft nach ihm, nach Wurzeln, Schatten und der alten Ordnung des Hains. Schwerfällig, doch unermüdlich breitet er sein lebendiges Reich aus, bis selbst die kahlsten Ebenen unter seinem Dickicht atmen.", hooks: ["natur","macht"] },
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
          { title: "Die geschändeten Gipfel", description: "Mit übermächtiger Stärke und einer Haut aus Fels und Erz ist er eins mit dem Gebirge, das ihn gebar. Doch Bergleute schlagen Stollen in sein uraltes Gestein und reißen Wunden in seinen Grund. Mit seinem Schwanz vertreibt er die Eindringlinge, denn fern der Berge schwindet seine Kraft, und dieses Revier ist alles, was er hat.", hooks: ["natur","kampf"] },
          { title: "Ältestes Blut", description: "In seinen Adern pocht das Blut der Urwesen, älter als jede Chronik der Menschen. Wer waren sie, und warum blieb nur er zurück? Ehe das Wissen für immer im Stein verschüttet wird, folgt er den verwitterten Spuren durch sein Gebirge, um den Ursprung seines uralten Geschlechts zu ergründen.", hooks: ["schicksal","geheimnis"] },
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
          { text: "von Sammlern gejagt", hooks: ["kampf","außenseiter"] },
        ],
        quests: [
          { title: "Meinesgleichen finden", description: "Es altert nicht und übersteht jede Wunde, doch keine Macht heilt seine endlose Einsamkeit. Aus den Zeitaltern, die es durchwandert hat, ist niemand seiner Art geblieben. Mit unergründlichem Blick durchsucht es die Welt nach einem Zeichen, das ihm verriete, dass irgendwo noch ein anderer überlebt hat.", hooks: ["außenseiter","verlust"] },
          { title: "Letztes Erbe", description: "Es trägt das Wissen vergangener Zeitalter, ein Schatz, der mit ihm zu verlöschen droht, während Sammler in ihm nur ein seltenes Präparat sehen, nicht das Vermächtnis, das es hütet. Ehe seine Art ganz aus der Erinnerung fällt, sucht es einen Würdigen, dem es alles anvertrauen kann, was nur es noch weiß.", hooks: ["verlust","schicksal"] },
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
          { text: "gebunden an den alten Namen", hooks: ["magie","geheimnis"] },
        ],
        quests: [
          { title: "Verlorene Göttlichkeit", description: "Einst war er mehr als sterblich, umgeben von einer Aura der Furcht, doch seine Göttlichkeit verblasst, Funke um Funke, gebunden an einen alten Namen, den kaum noch jemand kennt. Verzweifelt sucht er einen Weg, die schwindende Macht zurückzurufen, ehe von ihm nur ein Schatten bleibt.", hooks: ["glaube","verlust"] },
          { title: "Letzte Anbeter", description: "Noch beten Gläubige zu ihm, und in ihren Gebeten lebt der letzte Funke seiner Göttlichkeit fort, doch der Kult schrumpft, die Altäre verwaisen, und mit jedem vergessenen Namen verblasst auch er. Darum wacht er über seine letzten Anbeter, denn solange einer ihn ruft, ist er noch nicht ganz dahin.", hooks: ["glaube","schicksal"] },
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
          { title: "Nicht geweckt werden", description: "Tief im Eis schläft es, und sein Schlaf formt die Welt in stillen, gewaltigen Strömungen, doch es ist verwundbar im Erwachen, und Narren mit Hacken und Feuer wollen es vor der Zeit befreien. Ehe sie es ungeschützt aus dem Frost brechen, muss es sie aufhalten, damit die rechte Stunde nicht zu früh schlägt.", hooks: ["geheimnis","schicksal"] },
          { title: "Die Stunde des Erwachens", description: "Eisige Kälte umgibt es, während seine Träume bis in ferne Lande reichen. Wenn es endgültig erwacht, wird unermessliche Kraft mit ihm aufsteigen, doch der Zeitpunkt liegt im Dunkeln. In seinen Träumen sucht es das eine Zeichen, das sein Erwachen verkündet, damit es nicht schwach ans Licht tritt.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "Titan des vergessenen Zeitalters", hooks: ["verlust","schicksal","wissen"],
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
          { title: "Untergegangene Welt", description: "Er trägt Stärke und Wissen einer toten Welt, der Zeit entrückt und fremd in dieser Gegenwart, denn alles, was er kannte, ist Staub und Sage geworden. Mit einem Schrei, der die Erde erschüttert, durchstreift er das Land auf der Suche nach den letzten Resten seines versunkenen Zeitalters.", hooks: ["verlust","wissen"] },
          { title: "Ich überdauere", description: "Fremd in dieser Zeit und gebunden an alte Riten findet er keinen Platz unter den neuen Völkern, doch er weiß, dass Welten kommen und gehen, und dass auch diese eines Tages Wesen wie ihn rufen wird. Darum harrt er aus, geduldig wie der Stein, bis die Stunde der Titanen wiederkehrt.", hooks: ["schicksal","glaube"] },
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
          { title: "Ewige Wache", description: "Ein Schreckenskreis umgibt ihn, und er spürt den Tod auf Meilen herannahen. An die Schwelle gebunden, kennt er das Rätsel der Pforte, die er bewacht, und das Grauen dahinter. Was auch immer hindurchdrängt, lässt er nicht vorbei, denn fiele das Tor, fiele mehr als nur ein Wächter.", hooks: ["glaube","kampf"] },
          { title: "Von der Pflicht erlöst", description: "Endlos währt seine Wacht an der Schwelle, gebunden an jeden Pakt, den er einst schwor. Die Jahrhunderte haben ihn ausgehöhlt, doch verlassen darf er den Posten nicht. So sucht er insgeheim einen Würdigen, dem er das Rätsel der Pforte und die ewige Pflicht übertragen kann.", hooks: ["glaube","verlust"] },
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
          { title: "Den Hunger zähmen", description: "Ein unstillbarer Hunger treibt ihn, und seine zermalmenden Schlünde verschlingen alles, was ihm zu nahe kommt, doch dieser Trieb übermannt ihn, reißt ihn fort, bis nichts mehr bleibt. Ehe der Hunger das Letzte in ihm verzehrt, sucht er einen Weg, den uralten Drang zu beherrschen.", hooks: ["natur","verlust"] },
          { title: "Unter Menschen wandeln", description: "Er kann auf Menschengröße schrumpfen, und seine Diener gehorchen ihm aus den Tiefen, doch wo er auftaucht, bricht Panik aus, sobald jemand sein wahres Wesen erahnt. Verkleinert und verborgen will er unter Sterblichen leben, ihre Welt verstehen und seinen Hunger zähmen, ohne dass das Ungeheuer in ihm ans Licht kommt.", hooks: ["geheimnis","außenseiter"] },
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
          { title: "Einen Auftrag meistern, den keiner allein schafft", description: "Allein wäre er nur eine Klinge unter vielen, doch im Trupp findet er seine wahre Stärke. Eine Aufgabe wartet, die kein Einzelner bewältigt, ein befestigtes Lager, das nur eine geschlossene Linie durchbrechen kann. Nur gemeinsam, als verschworener Haufen, lässt sie sich vollbringen.", hooks: ["glaube","fahrend"] },
          { title: "Die Bande zusammenhalten", description: "Eine Schwertbande, die jedem Befehl gehorcht, ist mehr als ihre einzelnen Klingen, doch sie ist auch lärmig, unbeherrscht und verlangt ihren Sold, und ausbleibender Lohn droht sie zu zersprengen. Er kämpft darum, seine Leute beieinanderzuhalten, denn ohne die Bande ist er nichts.", hooks: ["kampf","verlust"] },
        ]
      },
      {
        text: "treuer Wolfshund", hooks: ["natur","kampf"],
        powerTags: [
          { text: "unfehlbare Spürnase", hooks: ["natur"] },
          { text: "rettet mich im Notfall", hooks: ["glaube","kampf"] },
          { text: "schlafloser Wächter", hooks: ["glaube","kampf"] },
          { text: "unermüdlicher Läufer", hooks: ["natur","fahrend"] },
        ],
        weaknessTags: [
          { text: "gerät leicht in Gefahr", hooks: ["natur","verlust"] },
          { text: "beschützt nur mich", hooks: ["glaube","natur"] },
        ],
        quests: [
          { title: "Meinen Hund beschützen", description: "Der treue Wolfshund an seiner Seite ist mehr als ein Tier, eine Spürnase, die noch nie irrte, ein Wächter, der ihn im Notfall schon oft gerettet hat. Doch der Gefährte beschützt nur ihn und gerät dabei leicht selbst in Gefahr. Ohne dieses Tier geht es nicht weiter, und so wacht nun er über den, der über ihn wacht.", hooks: ["glaube","kampf"] },
          { title: "Der Witterung folgen", description: "Was Augen und Ohren entgeht, fängt die Nase seines Wolfshunds mühelos auf. Eine Fährte hat das Tier aufgenommen, eine Spur, die kein Mensch je gefunden hätte. Er vertraut dem Gefährten blind und folgt der Witterung, wohin sie auch führt, denn der Hund irrt sich nie.", hooks: ["natur","fahrend"] },
        ]
      },
      {
        text: "Schutzgeist", hooks: ["magie","schicksal"],
        powerTags: [
          { text: "spürt feindliche Absichten", hooks: ["geheimnis","schicksal"] },
          { text: "flüstert Warnungen", hooks: ["geheimnis","magie"] },
          { text: "wendet Unglück ab", hooks: ["magie","schicksal"] },
          { text: "unsichtbar für andere", hooks: ["magie","geheimnis"] },
        ],
        weaknessTags: [
          { text: "an mein Schicksal gebunden", hooks: ["schicksal","magie"] },
          { text: "schweigt im falschen Moment", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Den Geist verstehen", description: "Ein unsichtbarer Schutzgeist wacht über ihn, flüstert Warnungen und wendet Unglück ab, ehe es ihn trifft, doch warum diese Macht sich gerade an ihn gebunden hat, bleibt ein Rätsel. Er will begreifen, wem er seine Rettungen verdankt, denn ein Beschützer, den man nicht versteht, schweigt vielleicht im falschen Moment.", hooks: ["geheimnis","schicksal"] },
          { title: "Seinen letzten Willen erfüllen", description: "Der Geist ist an sein Schicksal gefesselt, doch dieser Beistand währt nicht ewig, denn eine alte, ungeklärte Sache hält die Seele zurück. Er will herausfinden, was sie bindet, und ihren letzten Willen erfüllen, ehe der Geist für immer schweigt.", hooks: ["schicksal","verlust"] },
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
          { title: "Den Pixie zähmen", description: "Der freche Pixie an seiner Seite ist ein Meister der Ablenkung, zerstreut Wachen und beobachtet aus dem Verborgenen, doch das kleine Wesen stiftet auch ständig Unfug und handelt ungefragt das Falsche. Er lenkt die Streiche des Kobolds in nützliche Bahnen, ehe dessen Übermut sie beide ins Verderben reißt.", hooks: ["magie","natur"] },
          { title: "Sein Versprechen einlösen", description: "Der freche Pixie ist ein launischer, doch wertvoller Gefährte, und aus der Feenwelt schuldet ihm das Wesen noch einen Gefallen, ein Versprechen, das eingelöst werden will. Er drängt darauf, dass der Kobold sein Wort hält, auch wenn der ständige Unfug die Sache nicht leichter macht.", hooks: ["magie","geheimnis"] },
        ]
      },
      {
        text: "Falke meiner Mutter", hooks: ["natur","verlust"],
        powerTags: [
          { text: "späht aus der Höhe", hooks: ["natur"] },
          { text: "bringt das Gesuchte", hooks: ["natur","glaube"] },
          { text: "findet den Weg zurück", hooks: ["natur","fahrend"] },
          { text: "fängt Botschaften aus der Luft", hooks: ["verlust","glaube"] },
        ],
        weaknessTags: [
          { text: "letztes Andenken", hooks: ["verlust","natur"] },
          { text: "scheu vor Fremden", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "Das Vermächtnis ehren", description: "Der Falke, der aus der Höhe späht und stets den Weg zurückfindet, ist das letzte Andenken an seine Mutter, scheu vor Fremden, vertraut nur ihm. Solange der Vogel auf seiner Faust sitzt, hält er die Erinnerung an seine Mutter lebendig.", hooks: ["verlust","glaube"] },
          { title: "Den Falken heimbringen", description: "Der Falke bringt ihm das Gesuchte und kehrt aus jeder Ferne heim, doch ein Ort ruft das Tier stärker als alle anderen, jener, an dem seine Mutter den Vogel einst hielt. Er nimmt die Reise auf sich, um das letzte Andenken an jenen Platz zurückzubringen.", hooks: ["natur","verlust"] },
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
          { title: "Den Pakt erfüllen", description: "Auf seinen Ruf erscheint der Geist, durchschreitet Wände und teilt verborgenes Wissen, doch er dient nur dem Pakt. Fordert die Erscheinung ihren Preis und bleibt er ihn schuldig, endet der Beistand. Darum hält er seinen Teil der Abmachung mit Sorgfalt.", hooks: ["magie","macht"] },
          { title: "Den wahren Namen finden", description: "Der beschworene Geist deutet den Pakt eigenwillig, solange sein wahrer Name verborgen bleibt. Wer diesen Namen kennt, gebietet wirklich über das Wesen, statt nur seinen Launen ausgeliefert zu sein. Er sucht nach dem einen Wort, das die Erscheinung zwingt.", hooks: ["geheimnis","wissen"] },
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
          { title: "Den alten Freund würdigen", description: "Überall verrufen und mit alten Knochen geschlagen, ist der zerlumpte Strolch dennoch der treueste Gefährte, den er hat. Er kennt jede Gasse und steht treu zu ihm. Mehr Treue als jeder Edelmann steckt in diesem alten Halunken, und er will ihm endlich die Ehre erweisen, die er verdient.", hooks: ["außenseiter","glaube"] },
          { title: "Ein letztes Abenteuer", description: "Der treue alte Strolch hat schon manche Botschaft geschmuggelt und manchen Unterschlupf geteilt, doch seine Knochen sind alt geworden. Ehe der Gefährte sich zur Ruhe legt, will er mit ihm noch einmal hinausziehen, eine letzte gemeinsame Gasse, ehe der alte Freund für immer rastet.", hooks: ["fahrend","verlust"] },
        ]
      },
      {
        text: "stummer Wächter", hooks: ["glaube","geheimnis"],
        powerTags: [
          { text: "versteht meine Zeichen", hooks: ["glaube","geheimnis"] },
          { text: "hält stets Wache", hooks: ["glaube","kampf"] },
          { text: "verrät kein Wort", hooks: ["geheimnis","glaube"] },
          { text: "unverbrüchliche Treue", hooks: ["glaube"] },
        ],
        weaknessTags: [
          { text: "kann nicht sprechen", hooks: ["geheimnis","verlust"] },
          { text: "missverstanden von anderen", hooks: ["außenseiter","geheimnis"] },
        ],
        quests: [
          { title: "Sein Schweigen ehren", description: "Der stumme Wächter versteht jedes Zeichen, hält unermüdlich Wache und verrät niemals ein Wort, denn er kann nicht sprechen. Er achtet diese Verschwiegenheit als Tugend und schützt den oft Missverstandenen vor fremdem Urteil.", hooks: ["geheimnis","glaube"] },
          { title: "Ihm eine Stimme geben", description: "Unverbrüchlich treu hält der stumme Wächter die Wacht, doch warum er verstummt ist, weiß niemand. Er will das Schweigen durchdringen und herausfinden, was dem Gefährten einst die Stimme nahm, und ihm vielleicht wiedergeben, was er verlor.", hooks: ["geheimnis","verlust"] },
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
          { title: "Das Haus bewahren", description: "Der Geist des Hauses kennt jeden Winkel, verbirgt ihn im Gemäuer und weckt ihn, sobald Eindringlinge nahen, doch der Hüter ist an das Haus gebunden. Solange das Gemäuer steht, hat der Geist eine Heimat und er einen Beschützer, darum kämpft er darum, die alten Mauern vor Verfall und Feinden zu bewahren.", hooks: ["geheimnis","magie"] },
          { title: "Den Hausgeist erlösen", description: "Treu hütet der Geist die alten Mauern, doch er ist an das Haus gefesselt und kann es niemals verlassen. Er spürt das stille Leid des Hüters und will herausfinden, was ihn an dieses Gemäuer bindet, um ihm vielleicht endlich die Erlösung zu schenken.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "wilde Katze mit Verstand", hooks: ["natur","schicksal"],
        powerTags: [
          { text: "handelt eigenständig", hooks: ["schicksal","natur"] },
          { text: "läuft schneller als mein Pferd", hooks: ["natur","fahrend"] },
          { text: "durchschaut die Lage", hooks: ["schicksal","natur"] },
          { text: "schleicht lautlos", hooks: ["natur","geheimnis"] },
        ],
        weaknessTags: [
          { text: "folgt eigenem Willen", hooks: ["natur","schicksal"] },
          { text: "verschwindet nach Lust", hooks: ["natur","verlust"] },
        ],
        quests: [
          { title: "Ihr Vertrauen verdienen", description: "Lautlos und schneller als jedes Pferd, durchschaut die wilde Katze jede Lage und handelt dabei ganz nach eigenem Willen. Sie bleibt nur, solange sie es selbst will. Er müht sich geduldig darum, das Vertrauen der eigensinnigen Gefährtin Schritt für Schritt zu verdienen.", hooks: ["natur","schicksal"] },
          { title: "Ihrem Instinkt folgen", description: "Die wilde Katze durchschaut Gefahren, die ihm verborgen bleiben, und folgt einem Instinkt, der selten trügt. Wohin das eigensinnige Tier ihn auch führt, dort liegt oft die Antwort, die er sucht, und er lernt, ihrer untrüglichen Witterung zu vertrauen.", hooks: ["schicksal","natur"] },
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
          { title: "Die Bande anführen", description: "Eine Schar erprobter Veteranen steht ihm zur Seite, alte Waffenbrüder, die jede Schlachtordnung kennen, doch ohne Hauptmann sind sie führerlos und zerstritten. Er sieht die Stärke, die in diesen Männern noch schlummert, und will derjenige werden, der sie wieder zu einer Einheit schmiedet.", hooks: ["kampf","macht"] },
          { title: "Einen letzten Feldzug beenden", description: "Die Veteranenbande hat schon manche Schlacht geschlagen, doch der Krieg ließ ihren letzten Auftrag unvollendet, und seither nagt das Unfertige an den zerstrittenen Männern. Gemeinsam mit den alten Waffenbrüdern will er den unterbrochenen Feldzug zu Ende bringen, damit die Bande endlich Frieden findet.", hooks: ["kampf","verlust"] },
        ]
      },
      {
        text: "Elementargeist auf Probe", hooks: ["magie","schicksal"],
        powerTags: [
          { text: "entfacht Feuer", hooks: ["magie","natur"] },
          { text: "bändigt Wind und Welle", hooks: ["magie","natur"] },
          { text: "prüft meinen Willen", hooks: ["schicksal","magie"] },
          { text: "roher Urgewalt", hooks: ["magie","macht"] },
        ],
        weaknessTags: [
          { text: "noch nicht gebunden", hooks: ["magie","schicksal"] },
          { text: "entgleitet bei Schwäche", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "Die Probe bestehen", description: "Roher Urgewalt entsprungen, entfacht der Elementargeist Feuer und bändigt Wind und Welle, doch noch ist er nicht gebunden und prüft unablässig seinen Willen. Bei jeder Schwäche droht die Macht ihm zu entgleiten, und er stellt sich entschlossen jeder Prüfung, die das Wesen ihm auferlegt.", hooks: ["magie","schicksal"] },
          { title: "Den Pakt besiegeln", description: "Noch dient der Elementargeist nur auf Probe und entgleitet ihm, sobald sein Wille wankt. Er will dieser Ungewissheit ein Ende setzen und das Wesen dauerhaft an sich binden. Gelingt es ihm, den Pakt zu besiegeln, so steht ihm die Macht von Feuer, Wind und Welle für immer zur Seite.", hooks: ["magie","macht"] },
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
          { title: "Hüterin des alten Hains", description: "Tief im Wald, wo nur der Held die Bäume flüstern hört und Geister antworten, liegt der Hain, der ihm seine Kraft schenkte. Jede Axt und jedes Feuer am Waldrand fühlt sich an wie ein Schnitt ins eigene Fleisch. Also wacht der Held über diesen letzten heiligen Ort und stellt sich jedem entgegen, der ihn antasten will.", hooks: ["natur","magie"] },
          { title: "Kein Fluch sondern Gabe", description: "Gehasst und gehetzt zieht der Held durch die Dörfer, deren Bewohner in jeder Heilsalbe einen Hexenfluch wittern. Doch was sie für dunkle Magie halten, ist Bewahrung, kein Verderben. Der Held sehnt sich danach, ihnen das zu beweisen, und sei es Heilung für Heilung, bis das Misstrauen endlich der Dankbarkeit weicht.", hooks: ["magie","außenseiter"] },
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
          { title: "Den Sturm bändigen", description: "Die Winde gehorchen ihm, doch der Sturm hört selten ganz auf ihn, und jeder Zauber lässt ihn erschöpft zurück. Schon einmal entglitt ihm das Unwetter und traf, wen es nicht treffen sollte. Diese Schuld treibt ihn an, seine Gabe endlich zu meistern, ehe der nächste Donner Unschuldige verschlingt.", hooks: ["magie","natur"] },
          { title: "Rache des Himmels", description: "Er sah sein Land unter fremden Händen verwüstet, und in ihm braut sich etwas zusammen, das dunkler ist als jede Wolke. Er kann den Donner rufen und den Feind verfluchen. Nun will er das Wetter selbst gegen jene herabrufen, die das Unrecht begingen, auch wenn der Himmel ihm nur widerwillig dient.", hooks: ["natur","kampf","verlust"] },
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
          { title: "Würdige Hände", description: "Die Götter legten ihm heilendes Licht in die Hände, doch sein eigener Körper zahlt für jeden Segen den Preis. Da er keinen Leidenden abweisen kann, droht ihn die Last zu verzehren. Er ringt um die Weisheit, seine geschenkte Kraft nur für jene einzusetzen, die ihrer wahrhaft würdig sind.", hooks: ["magie","glaube"] },
          { title: "Die Gunst der Götter halten", description: "Alles Heilen, alle Schutzzauber fließen aus dem Segen einer Gottheit, deren Gunst so zerbrechlich ist wie kostbar. Ein Fehltritt, ein Bruch des Glaubens, und das tröstende Licht könnte für immer erlöschen. Darum hält er seiner Gottheit treu, denn ohne ihre Gnade sind seine Hände nur noch Hände.", hooks: ["glaube","magie"] },
        ]
      },
      {
        text: "Bannerin der Geister", hooks: ["magie","geheimnis"],
        powerTags: [
          { text: "spricht mit Geistern", hooks: ["magie","geheimnis"] },
          { text: "zieht den Bannkreis", hooks: ["magie","geheimnis"] },
          { text: "beschwört kleine Wesen", hooks: ["magie","geheimnis"] },
          { text: "sieht durch den Schleier", hooks: ["magie","geheimnis"] },
        ],
        weaknessTags: [
          { text: "zieht gefährliche Aufmerksamkeit", hooks: ["magie","schicksal"] },
          { text: "die Toten verlangen Antwort", hooks: ["magie","geheimnis","verlust"] },
        ],
        quests: [
          { title: "Ruhelose Seelen erlösen", description: "Sie sieht durch den Schleier und hört die Toten, die im Bannkreis nach Antwort verlangen. Ihre ruhelose Klage lässt sie nicht schlafen, denn sie allein vermag ihnen zu helfen. So zieht sie aus, gefangene Geister von ihrer Last zu lösen und ihnen endlich den Weg in den Frieden zu weisen.", hooks: ["geheimnis","magie","verlust"] },
          { title: "Den Schleier wahren", description: "Wo sie mit Geistern spricht, wird die Grenze zwischen Lebenden und Toten dünn, und ihre Gabe zieht gefährliche Aufmerksamkeit auf sich. Etwas drängt von der anderen Seite herüber. Darum zieht sie Bannkreis um Bannkreis und wacht darüber, dass der Schleier geschlossen bleibt, ehe er ganz zerreißt.", hooks: ["magie","geheimnis"] },
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
          { title: "Das vollkommene Ritual", description: "Sie kennt die Regeln der Magie und spricht die alten Worte, doch jedes große Ritual fordert Zeit und birgt unberechenbare Nebenwirkungen. Ein Zauber widersteht ihr seit jeher, derselbe, an dem schon ihre Lehrmeister zerbrachen. Ihn endlich zu vollenden ist zur stillen Besessenheit geworden, die sie Nacht für Nacht antreibt.", hooks: ["magie","handwerk"] },
          { title: "Wissen weitergeben", description: "Was nützt ihre Kunst, wenn sie mit ihrem letzten Atemzug verlischt? Ihre Rituale brauchen Zeit, und die Zeit eines Menschen ist kurz. Darum sucht sie eine Schülerin, der sie die alten Worte und die Regeln der Magie anvertrauen kann, damit das Wissen sie überdauert.", hooks: ["magie","wissen","handwerk"] },
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
          { title: "Die wandelnde Formel", description: "In ihrer Werkstatt, ohne die sie hilflos ist, braut sie Tränke und erkennt verborgene Wirkstoffe, die anderen entgehen. Eine Formel aber lockt sie mehr als alle anderen: jenes Rezept, das gewöhnliche Stoffe in etwas Wunderbares verwandelt. Diese Verheißung treibt sie an, auch wenn ihr eigener Körper für jeden Versuch zahlt.", hooks: ["magie","wissen","handwerk"] },
          { title: "Gegengift für die Pest", description: "Sie kennt die Heilkräuter und die verborgenen Wirkstoffe, und doch frisst eine Seuche sich durch die Dörfer, gegen die noch kein Mittel hilft. An ihre Werkstatt gebunden, beugt sie sich über Kessel und Salben. Das eine Gegengift zu finden, das diese Krankheit stillt, ist die Aufgabe, die alles andere überwiegt.", hooks: ["magie","handwerk","natur"] },
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
          { title: "Die verlorene Rune", description: "Sie ritzt mächtige Runen und liest die Magie aus den Dingen, doch ein Zeichen fehlt, dessen Macht seit Generationen vergessen ist. Eine falsche Rune zerstört alles, also wiegt jede Suche schwer. Dennoch lässt sie der Gedanke an das verlorene Zeichen nicht los, denn mit ihm wäre ihre Kunst endlich vollständig.", hooks: ["magie","wissen","geheimnis"] },
          { title: "Unzerstörbarer Bann", description: "Mit alten Worten und uralten Schutzzaubern bannt sie das Böse, doch was sie schreibt, können andere nicht lesen, und ein Fehler zunichtemachen. Nun strebt sie nach dem dauerhaftesten Werk: jene Runen zu ritzen, die einen Ort für immer schützen, ein Bann, der noch steht, wenn sie längst Staub ist.", hooks: ["magie","glaube"] },
        ]
      },
      {
        text: "Beschwörerin des Wassers", hooks: ["magie","natur"],
        powerTags: [
          { text: "ruft die Flut", hooks: ["magie","natur"] },
          { text: "spricht mit den Tiefen", hooks: ["magie","natur","geheimnis"] },
          { text: "wandelt zwischen Magie und Natur", hooks: ["magie","natur"] },
          { text: "findet heilende Quellen", hooks: ["magie","natur"] },
        ],
        weaknessTags: [
          { text: "machtlos fern vom Wasser", hooks: ["magie","natur"] },
          { text: "verlangt einen Preis", hooks: ["magie","schicksal"] },
        ],
        quests: [
          { title: "Die versiegte Quelle", description: "Sie ruft die Flut und spricht mit den Tiefen, doch fern vom Wasser ist sie machtlos, und jeder Zauber verlangt seinen Preis. Nun ist das Land verdorrt und die Quelle versiegt, das Leben weicht aus der Erde. Also macht sie sich auf, das Wasser dorthin zurückzubringen, wo es einst sprudelte.", hooks: ["natur","magie"] },
          { title: "Pakt mit den Tiefen", description: "Einst sprach sie mit den Wesen unter den Wellen und schloss einen Pakt, der ihr ihre Macht über die Flut verlieh. Doch jede Gabe verlangt einen Preis, und das Versprechen wiegt schwer. Nun ist die Zeit gekommen, das Wort einzulösen, das sie den Tiefen gab, ehe sie es einfordern.", hooks: ["magie","geheimnis","schicksal"] },
        ]
      },
      {
        text: "Traumwirkerin", hooks: ["magie","schicksal"],
        powerTags: [
          { text: "flüstert in die Träume", hooks: ["magie","geheimnis"] },
          { text: "biegt den Zufall", hooks: ["magie","schicksal"] },
          { text: "sieht durch den Schleier", hooks: ["magie","geheimnis"] },
          { text: "deutet Vorzeichen", hooks: ["magie","schicksal","wissen"] },
        ],
        weaknessTags: [
          { text: "verliert sich im Schlaf", hooks: ["magie","schicksal"] },
          { text: "zieht gefährliche Aufmerksamkeit", hooks: ["magie","schicksal"] },
        ],
        quests: [
          { title: "Der Traum hinter dem Traum", description: "Sie flüstert in fremde Träume, biegt den Zufall und deutet die Vorzeichen, doch im Schlaf droht sie sich selbst zu verlieren. Eine Vision sucht sie seit Jahren Nacht für Nacht heim und lässt sie nicht los. Dem Traum hinter dem Traum zu folgen, bis sie seinen Sinn versteht, ist ihr heimlicher Antrieb.", hooks: ["magie","schicksal","geheimnis"] },
          { title: "Den Albträumen ein Ende", description: "Sie sieht durch den Schleier und wandelt durch die Träume anderer, doch ihre Gabe zieht gefährliche Aufmerksamkeit auf sich. Irgendwo quält ein Schrecken einen Schläfer und vergiftet jede seiner Nächte. Sie kann es nicht ertragen und will hineingehen in diese Albträume, um den Geplagten von ihrem Griff zu befreien.", hooks: ["magie","geheimnis"] },
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
          { title: "Das versiegelte Tor", description: "Sie öffnet verschlossene Wege und schreitet durch Schwellen, die anderen verborgen bleiben, doch jeder Übergang verlangt seinen Preis, und etwas folgt durch die Tür. Unbedacht hat sie einen Weg aufgetan, der besser geschlossen geblieben wäre. Nun lässt ihr der Gedanke keine Ruhe, dieses Tor für immer zu versiegeln, ehe Schlimmeres hindurchtritt.", hooks: ["magie","geheimnis"] },
          { title: "Weg zwischen den Welten", description: "Sie sieht die verborgenen Verbindungen und schreitet durch Schwellen, die für andere bloß Wände sind. Eine Sehnsucht treibt sie weiter, als jede gewöhnliche Tür reicht: der Pfad in das Reich jenseits des unseren. Ihn zu finden, auch wenn der Übergang einen Preis fordert, lässt sie nicht ruhen.", hooks: ["magie","fahrend","geheimnis"] },
        ]
      },
      {
        text: "Hüterin des Gleichgewichts", hooks: ["magie","natur"],
        powerTags: [
          { text: "hebt Flüche", hooks: ["magie","geheimnis"] },
          { text: "wandelt zwischen Magie und Natur", hooks: ["magie","natur"] },
          { text: "spürt gestörte Ordnung", hooks: ["magie","natur","wissen"] },
          { text: "uralte Schutzzauber", hooks: ["magie","glaube"] },
        ],
        weaknessTags: [
          { text: "darf keine Seite ergreifen", hooks: ["magie","glaube"] },
          { text: "erschöpft durch Magie", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "Die gestörte Ordnung", description: "Sie spürt die gestörte Ordnung wie einen Misston und steht an der Grenze von Magie und Natur, wo das Gleichgewicht ins Wanken gerät. Jeder Bann, jeder Schutzzauber zehrt an ihr. Dennoch muss sie der Wurzel des Ungleichgewichts nachgehen, das die Welt aus dem Lot bringt, ehe alles vollends zerfällt.", hooks: ["magie","natur","schicksal"] },
          { title: "Weder Licht noch Schatten", description: "Sie hebt Flüche und wahrt die Grenze von Magie und Natur, doch ihr Eid verbietet ihr, je eine Seite zu ergreifen, und die Magie erschöpft sie. Beide Lager drängen sie, sich zu erklären. Trotzdem hält sie das Gleichgewicht, auch wenn Licht wie Schatten sie dafür verachten, denn dies ist ihre Bestimmung.", hooks: ["magie","glaube","natur"] },
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
          { title: "Die letzte verlorene Silbe", description: "Sie spricht die alten Worte und liest fremde Magie, doch nach jedem Zauber entgleitet ihr das Wissen wieder. Eine Silbe fehlt, die letzte, die die uralte Sprache wieder ganz machen würde. Sie zu finden ist ihre stille Besessenheit, auch wenn ein einziges Wort zu viel verheerende Folgen heraufbeschwören kann.", hooks: ["magie","wissen","verlust"] },
          { title: "Zu gefährlich zu bewahren", description: "Sie kennt die Regeln der Magie und Worte von roher Macht, doch eben diese Worte könnten die Welt zerreißen, spräche ein Unbedachter sie aus. Da ihr ohnehin jeder Zauber wieder entfällt, weiß sie um die Gefahr. Darum will sie dieses Wissen tilgen, ehe es in falsche Hände gerät und alles verschlingt.", hooks: ["magie","wissen","geheimnis"] },
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
          { text: "lockt Lauscher an", hooks: ["fahrend","stadt"] },
          { text: "stets griffbereit am Gürtel", hooks: ["handwerk","fahrend"] },
          { text: "selbst geschnitztes Rohr", hooks: ["handwerk","natur"] },
        ],
        weaknessTags: [
          { text: "zerbrechliches Holz", hooks: ["handwerk","verlust"] },
          { text: "verrät meine Anwesenheit", hooks: ["geheimnis","fahrend"] },
        ],
        quests: [
          { title: "Die verlorene Melodie wiederfinden", description: "Die selbst geschnitzte Panflöte hängt griffbereit am Gürtel, doch eine Weise aus Kindheitstagen ist ihm entfallen, so sehr er auch sucht. Jede halb erinnerte Note schmerzt wie ein verlorenes Stück seiner selbst. Er wird nicht ruhen, bis die Melodie wieder rein aus dem Rohr klingt und ihn heimholt.", hooks: ["fahrend","verlust"] },
          { title: "Mein Meisterstück vollenden", description: "Mit eigenen Händen schnitzte er das Rohr, und sein Klang lockt jeden Lauscher herbei, doch das Holz ist zerbrechlich, und ein feiner Misston nagt an seinem Ohr. Er feilt und probt unermüdlich weiter, denn erst wenn jeder Ton vollkommen rein erklingt, ist die Flöte wahrhaft sein Werk.", hooks: ["handwerk"] },
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
          { title: "Meine Klingen geheim bewahren", description: "Unter dem Mantel trägt sie stets eine versteckte Waffe, blitzschnell gezogen, wenn die Not es verlangt. Ihr Vorteil lebt allein davon, dass niemand ahnt, wie viele Dolche sie wirklich umgürten. Eine Leibesvisitation könnte alles verraten, darum wahrt sie ihr Geheimnis sorgsam.", hooks: ["geheimnis","kampf"] },
          { title: "Mit verborgenem Stahl Rache üben", description: "Eine alte Schuld lastet auf ihr, ein Unrecht, das nach Vergeltung verlangt. Aus der Nähe trifft ihr verborgener Stahl im Dunkeln, ehe das Opfer den Streich kommen sieht. Geduldig wartet sie auf den einen Augenblick, in dem die Klinge, die niemand erwartet, die Rechnung endgültig begleicht.", hooks: ["kampf","verlust"] },
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
          { title: "Mein treues Ross beschützen", description: "Durch jede Schlacht trug das gehorsame Pferd ihn, unermüdlich im Sattel und treuer als mancher Mensch. Doch das Tier braucht Pflege, und ohne es bliebe nur ein halber Krieger zurück. Was auch komme, er lässt sein Ross niemals im Stich und stellt sich vor jeden, der ihm Leid antun will.", hooks: ["fahrend","glaube"] },
          { title: "Ruhm zu Pferde erringen", description: "Mit gut gewarteter Rüstung und sturmreifer Reiterattacke fühlt er sich nur im offenen Feld ganz lebendig. Zu Fuß ist er schwerfällig, doch hoch zu Ross kennt seine Kühnheit keine Grenzen. Er sucht die große Schlacht, in der eine einzige donnernde Attacke beweist, was ein wahrer Reiter zu vollbringen vermag.", hooks: ["kampf","macht"] },
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
          { title: "Den Brief sicher überbringen", description: "Ein versiegelter Brief liegt schwer in ihrer Tasche und öffnet ihr verschlossene Tore und das Recht auf Audienz. Doch Spione lauern auf die fürstliche Gunst, und falsche Befehle binden sie an fremden Willen. Was im Siegel ruht, muss seinen Empfänger erreichen, koste es, was es wolle.", hooks: ["adel","fahrend"] },
          { title: "Die wahre Botschaft lesen", description: "Höfliche Worte zieren das Schreiben, doch sie spürt, dass die hochfürstliche Gunst einen Preis trägt, den niemand ihr nennt. Hinter den Floskeln verbirgt sich ein Geheimnis, das sie an fremde Befehle ketten könnte. Ehe sie ihr Leben dafür riskiert, will sie entschlüsseln, was dieser Brief in Wahrheit fordert.", hooks: ["geheimnis","adel"] },
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
          { title: "Mir einen Platz im Adel erkaufen", description: "Die goldene Kette an seinem Hals öffnet Türen und verleiht ihm edles Ansehen, wo immer er sie zeigt. Was die Geburt ihm verwehrte, will er sich mit ihrem Wert erkaufen, Stufe um Stufe hinauf. Doch das Gold ist auffällig und lockt Diebe, darum wagt er den Aufstieg, ehe ihn jemand wieder herabstößt.", hooks: ["adel","macht"] },
          { title: "Das Gold gerecht verteilen", description: "Jederzeit ließe sich die wertvolle Kette zu Geld machen, doch er weiß, dass ihm dieser Reichtum nicht allein gehört. Während Diebe nach dem auffälligen Schmuck schielen, denkt er an jene, die nichts haben. Was ihm zufiel, will er gerecht unter den Bedürftigen teilen, statt es eifersüchtig zu horten.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "Werkzeugkasten", hooks: ["handwerk"],
        powerTags: [
          { text: "Werkzeug für jeden Fall", hooks: ["handwerk"] },
          { text: "repariert Unbrauchbares", hooks: ["handwerk"] },
          { text: "stets einsatzbereit", hooks: ["handwerk"] },
          { text: "hat immer ein Ersatzteil", hooks: ["handwerk","fahrend"] },
        ],
        weaknessTags: [
          { text: "hilflos ohne den Besitz", hooks: ["handwerk","verlust"] },
          { text: "schwer zu schleppen", hooks: ["handwerk","fahrend"] },
        ],
        quests: [
          { title: "Mein Werkzeug stetig verbessern", description: "Für jeden Fall trägt er das rechte Werkzeug bei sich, stets einsatzbereit und mit einem Ersatzteil für alle Lagen. Ohne diesen Besitz fühlt er sich hilflos, denn der Kasten ist ein Teil von ihm geworden. Beständig bessert er ihn aus, damit er ganz wird, was er sein kann.", hooks: ["handwerk"] },
          { title: "Das Unmögliche reparieren", description: "Man bringt ihm, was alle längst aufgegeben haben, zerschlagen und scheinbar verloren. Mit dem Werkzeug für jeden Fall und einem Blick für jeden Kniff nimmt er die Herausforderung an. Schwer schleppt er seinen Kasten überallhin, doch seine Hände beweisen am Ende, dass selbst das Unrettbare sich noch retten lässt.", hooks: ["handwerk","schicksal"] },
        ]
      },
      {
        text: "Truhe mit fremden Münzen", hooks: ["fahrend","geheimnis"],
        powerTags: [
          { text: "kennt jeden Wert genau", hooks: ["stadt","handwerk"] },
          { text: "handelt mit Gewinn", hooks: ["stadt"] },
          { text: "Münzen aus fernen Reichen", hooks: ["fahrend","geheimnis"] },
          { text: "Truhe mit Wertsachen", hooks: ["macht"] },
        ],
        weaknessTags: [
          { text: "begehrt von anderen", hooks: ["geheimnis","stadt"] },
          { text: "verschwenderisch im Überfluss", hooks: ["stadt"] },
        ],
        quests: [
          { title: "Die Herkunft der Münzen enträtseln", description: "In ihrer Truhe liegen Münzen aus fernen Reichen, fremde Prägungen, deren Wert sie genau zu deuten weiß, doch jede erzählt eine Geschichte von Wegen und Händen, die sie nie sah. Andere begehren den Schatz, sie aber treibt die Frage, woher diese seltsamen Stücke wirklich stammen.", hooks: ["geheimnis","fahrend"] },
          { title: "Den Schatz durch Handel mehren", description: "Sie kennt jeden Wert genau und handelt mit Gewinn, wo andere übers Ohr gehauen werden. Was in der Truhe ruht, soll nicht müßig liegen, sondern durch geschickten Tausch wachsen. Doch ihr Überfluss verführt sie leicht zur Verschwendung, und andere lauern auf den Hort, den sie zu mehren sucht.", hooks: ["stadt","macht"] },
        ]
      },
      {
        text: "geerbt und zu groß", hooks: ["adel","verlust"],
        powerTags: [
          { text: "verziertes Wams", hooks: ["adel"] },
          { text: "trägt einen ehrwürdigen Namen", hooks: ["adel","verlust"] },
          { text: "alte Pracht beeindruckt noch", hooks: ["adel","macht"] },
          { text: "trägt altes Haussiegel", hooks: ["adel","verlust"] },
        ],
        weaknessTags: [
          { text: "unbequem und schlecht sitzend", hooks: ["adel","verlust"] },
          { text: "erinnert an Verlust", hooks: ["verlust"] },
        ],
        quests: [
          { title: "Dem Erbe würdig werden", description: "Das verzierte Wams trägt einen ehrwürdigen Namen, doch es sitzt schlecht und erinnert ihn an längst vergangene Größe. Noch beeindruckt die alte Pracht, auch wenn sie ihm zu weit geschnitten ist. Er will in dieses Erbe hineinwachsen, bis der Name nicht mehr nur am Stoff hängt, sondern an ihm selbst.", hooks: ["adel","verlust"] },
          { title: "Das Erbstück um jeden Preis behalten", description: "Unbequem und schlecht sitzend ist das geerbte Wams, und es weckt in ihm die Erinnerung an alles, was er verlor. Doch es ist das Letzte, was ihm von denen vor ihm blieb, ein Faden zu vergangener Größe. Mag es noch so drücken, er gibt dieses Erbstück um keinen Preis aus der Hand.", hooks: ["adel","glaube"] },
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
          { title: "Die gefallenen Gefährten ehren", description: "Das Banner der gefallenen Truppe trägt er nun allein, jeden Kniff der Veteranen im Gedächtnis. Ihre Feinde verfolgen ihn noch, und die Ausrüstung lastet schwer auf seiner Seele. Doch ihre Waffen zu führen heißt, ihr Andenken weiterzutragen, und das ist er den toten Gefährten schuldig.", hooks: ["kampf","verlust"] },
          { title: "Ihren letzten Auftrag vollenden", description: "Die Kompanie fiel, ehe ihr Werk getan war, und ihm blieb die gut gewartete Kampfausrüstung als schwere Bürde. Alte Feinde sind ihm auf den Fersen, doch er weicht nicht. Was seine Gefährten nicht mehr zu Ende brachten, führt er an ihrer statt zum Schluss, damit ihr Opfer nicht umsonst war.", hooks: ["kampf","glaube"] },
        ]
      },
      {
        text: "Karte mit Geheimnissen", hooks: ["fahrend","geheimnis"],
        powerTags: [
          { text: "zeigt verborgene Wege", hooks: ["fahrend","geheimnis"] },
          { text: "markierte Schätze", hooks: ["geheimnis","macht"] },
          { text: "führt durch jedes Land", hooks: ["fahrend","wissen"] },
          { text: "Reisekarten", hooks: ["fahrend"] },
        ],
        weaknessTags: [
          { text: "begehrt von anderen", hooks: ["geheimnis","stadt"] },
          { text: "unvollständig und verschlüsselt", hooks: ["geheimnis","wissen"] },
        ],
        quests: [
          { title: "Finden, was die Karte verbirgt", description: "Ihre Reisekarte zeigt verborgene Wege und markierte Schätze, doch sie ist unvollständig und in Teilen verschlüsselt. Andere begehren sie, denn die eingezeichneten Zeichen führen zu etwas Verheißungsvollem. Sie folgt jeder Markierung durch fremdes Land, fest entschlossen, aufzuspüren, was unter den rätselhaften Linien wartet.", hooks: ["fahrend","geheimnis"] },
          { title: "Die letzten Zeichen entschlüsseln", description: "Durch jedes Land führt die Karte sie verlässlich, doch einige ihrer Zeichen bleiben dunkel und verschlüsselt. Solange sie sie nicht deutet, bleibt das Geheimnis unvollständig, und andere strecken die Hand danach aus. Sie beugt sich Nacht für Nacht über die rätselhaften Symbole, bis sie endlich liest, was sie verschweigen.", hooks: ["geheimnis","wissen"] },
        ]
      },
      {
        text: "letztes Stück Heimat", hooks: ["verlust","fahrend"],
        powerTags: [
          { text: "weckt Mut in Hoffnungslosen", hooks: ["verlust","fahrend"] },
          { text: "spendet Trost in der Fremde", hooks: ["verlust","glaube"] },
          { text: "weckt vertraute Kraft", hooks: ["verlust","natur"] },
          { text: "verbindet mit den Meinen", hooks: ["fahrend","glaube"] },
        ],
        weaknessTags: [
          { text: "Bindung an einen Ort", hooks: ["natur","verlust"] },
          { text: "unersetzlich wenn verloren", hooks: ["verlust","handwerk"] },
        ],
        quests: [
          { title: "Einst nach Hause zurückkehren", description: "In der Fremde trägt sie ein letztes Stück Heimat bei sich, das an bessere Tage erinnert und sie mit den Ihren verbindet. Es spendet Trost und weckt vertraute Kraft, doch es bindet sie auch schmerzlich an einen fernen Ort. Dieses kleine Andenken hält die Erinnerung wach, bis sie den Weg heim findet.", hooks: ["fahrend","verlust"] },
          { title: "Die Heimat in der Fremde bewahren", description: "Wäre dieses Stück verloren, bliebe es unersetzlich, denn es ist alles, was ihr von daheim geblieben ist. In dunklen Stunden weckt es vertraute Kraft und tröstet sie unter Fremden. Solange sie es bei sich trägt, ist sie nie ganz fort von den Ihren, und das will sie um jeden Preis bewahren.", hooks: ["verlust","glaube"] },
        ]
      },
      {
        text: "Nachlass eines Verschollenen", hooks: ["fahrend","verlust","geheimnis"],
        powerTags: [
          { text: "Aufzeichnungen des Vermissten", hooks: ["geheimnis","wissen"] },
          { text: "getarnter Reisemantel", hooks: ["geheimnis","fahrend"] },
          { text: "Spuren einer letzten Reise", hooks: ["fahrend","geheimnis"] },
          { text: "birgt verborgene Ressourcen", hooks: ["fahrend","verlust"] },
        ],
        weaknessTags: [
          { text: "weckt fremde Feinde", hooks: ["geheimnis","verlust"] },
          { text: "rätselhaft und unvollständig", hooks: ["geheimnis","wissen"] },
        ],
        quests: [
          { title: "Das Schicksal des Verschollenen klären", description: "Eine unerwartete Hinterlassenschaft fiel ihr zu, Aufzeichnungen eines Vermissten und Spuren seiner letzten Reise. Das Bündel ist rätselhaft und unvollständig, und es weckt fremde Feinde, die nach ihm greifen. Was mit dem Verschollenen geschah, liegt im Dunkeln, doch sie wird die Wahrheit Stück für Stück ans Licht bringen.", hooks: ["geheimnis","verlust"] },
          { title: "Seine letzte Reise vollenden", description: "Den getarnten Reisemantel und die Notizen des Verschollenen trägt sie nun selbst, gezeichnet von einem unvollendeten Weg. Fremde Feinde wittern die Spur und setzen ihr nach. Doch wohin der Vermisste nicht mehr gelangte, will sie an dessen statt gelangen, damit die unterbrochene Reise endlich ihr Ziel erreicht.", hooks: ["fahrend","verlust"] },
        ]
      },
    ]
  },
};

export const TYPE_TO_THEMEBOOKS = {
  'Origin': ['Circumstance', 'Devotion', 'Past', 'People', 'Personality', 'Skill or Trade', 'Trait'],
  'Adventure': ['Duty', 'Influence', 'Knowledge', 'Prodigious Ability', 'Relic', 'Uncanny Being'],
  'Greatness': ['Destiny', 'Dominion', 'Mastery', 'Monstrosity'],
  'Variable Might': ['Companion', 'Magic', 'Possessions']
};
