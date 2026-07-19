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
          { title: "Mein Gelübde halten", description: "Ein Schwur bindet den Helden fester als jede Kette, und was einmal versprochen wurde, das wird getan. Auch wenn die ganze Welt sich dagegenstellt und die Vernunft zur Umkehr rät, weicht er nicht von seinem Eid. Lieber bricht er als sein gegebenes Wort.", hooks: ["glaube"] },
          { title: "Die Treue beweisen", description: "Andere setzen auf rohe Stärke und scharfe Klingen, doch der Held vertraut auf etwas Beständigeres. Mit jeder Tat will er zeigen, dass ein gehaltenes Wort schwerer wiegt als der Stahl. Wo er steht, hält der Eid, und das soll niemand je wieder anzweifeln müssen.", hooks: ["glaube","macht"] },
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
          { title: "Die Ritterprobe bestehen", description: "Noch trägt der Held nicht die Würde, nach der sein Herz verlangt, doch er sammelt den Mut, sich jeder Prüfung zu stellen. Er schreitet ein, wo andere zaudern, und stellt sich vor die Schwachen. Sich selbst und aller Welt will er beweisen, dass er des Schwertes würdig ist.", hooks: ["adel","kampf"] },
          { title: "Einen würdigen Herrn finden", description: "Ein Gelübde ohne ein Ziel, das es verdient, bleibt nur leeres Versprechen, und das spürt der Held mit jedem Tag. Seine Ehre, so unbeugsam sie ist, sucht eine Sache, der sie sich ganz hingeben kann. Er zieht aus, um jemanden zu finden, dessen Banner seine Treue wahrhaft verdient.", hooks: ["adel","glaube"] },
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
          { title: "Sie beschützen bis zuletzt", description: "Der Held kennt jeden, den er behütet, beim Namen und wirft den eigenen Leib vor jede Gefahr. Solange noch Atem in ihm ist, soll seinen Leuten kein Leid geschehen, und sei es, dass er die Wache ganz allein hält. Fortgehen kann er nicht; hier ist sein Posten, hier sein Herz.", hooks: ["glaube","kampf"] },
          { title: "Das Dorf wehrhaft machen", description: "Eine Last allein zu tragen zehrt selbst am Stärksten, und das hat der Held erkannt. Darum will er die Furchtsamen sammeln und die Schwachen lehren, für sich selbst einzustehen. Nicht ewig kann ein Einzelner Schild sein; sein Volk soll lernen, sich auch ohne ihn zu schützen.", hooks: ["glaube","handwerk"] },
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
          { title: "Das Licht aufrechthalten", description: "Die Finsternis drückt von allen Seiten gegen den Helden, doch sein Glaube an die Göttin lässt ihn keinen Schritt weichen. Mit Gebet, Ritual und dem heiligen Zeichen gegen das Böse hält er das Licht hoch, wo andere längst geflohen wären. Seine Hingabe ist sein Schild, auch wenn sie ihn blind für anderes macht.", hooks: ["glaube"] },
          { title: "Einen Nachfolger finden", description: "Der Dienst, dem der Held sein Leben verschrieb, ist größer als ein einzelnes Leben. Die Pflicht verschlingt seine Zeit, doch eine Sorge lässt ihn nicht los: Was wird, wenn er einmal nicht mehr ist? Er sucht eine Seele, der er die Flamme weiterreichen kann, damit das Licht ihn überdauert.", hooks: ["glaube","schicksal"] },
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
          { title: "Keinen sterben lassen", description: "Heilende Hände und das Wissen um die Kräuter sind dem Helden Gabe und Bürde zugleich. Solange ein Atemzug zu retten ist, gibt er keinen Kranken auf und beugt sich über jedes Fieberbett. Dass fremder Schmerz dabei zu seinem eigenen wird, nimmt er still in Kauf.", hooks: ["glaube","handwerk"] },
          { title: "Die Seuche zurückdrängen", description: "Eine Krankheit frisst sich durch das Dorf des Helden, und seine einfache Heilkunst stößt an ihre Grenzen. Doch aufzugeben kommt ihm nicht in den Sinn, auch wenn er sich selbst dabei vergisst. Er sucht das Mittel gegen das Leiden, ehe es noch mehr von denen nimmt, die er beruhigt und pflegt.", hooks: ["handwerk","wissen"] },
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
          { title: "Den Menschen retten", description: "Ein einziger Mensch hat den Helden zu dem gemacht, was er ist, und diese unverbrüchliche Treue trägt er wie einen Schwur im Herzen. Nun, da Gefahr droht, gibt er sein Letztes und nimmt jede Wunde auf sich. Loslassen kann er nicht; für diesen einen tut er, was kein anderer wagen würde.", hooks: ["glaube","verlust"] },
          { title: "Das Versprechen einlösen", description: "Was der Held einst dem geliebten Menschen schwor, lebt in ihm fort wie ein heiliger Eid. Jetzt ist die Stunde gekommen, das Versprechen einzulösen, koste es, was es wolle. Alles würde er für diesen einen geben, denn ohne ihn hat keine andere Last und kein anderes Ziel mehr Gewicht.", hooks: ["glaube"] },
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
          { title: "Das Heiligtum zurückbringen", description: "Der Held wacht über die alten heiligen Orte und kennt ihre verborgenen Zeichen wie kein Zweiter. Doch ohne das Heiligtum ist sein Volk gebrochen und seiner Mitte beraubt. An den Ort gebunden, wie er ist, treibt ihn dennoch nur ein Gedanke: das Verlorene zurückzuholen, ehe der Glaube ganz erlischt.", hooks: ["glaube","geheimnis"] },
          { title: "Das Geheimnis bewahren", description: "Heilige Riten und ein altes Geheimnis sind dem Helden anvertraut, und er spricht für die Stille, die sie umgibt. Was in seine Hut gelegt wurde, soll niemals in falsche Hände fallen. Manche würden seinen Glauben für ihre Zwecke ausnutzen, doch eher schweigt er bis zum letzten Atemzug, als zu verraten.", hooks: ["glaube","geheimnis"] },
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
          { title: "Dem Orden treu bleiben", description: "Der Held erinnert sich an den Schwur, den er ablegte, und kennt die Regel seines Ordens auswendig. Was er gelobte, das hält er, selbst wenn der Orden selbst ins Wanken gerät und zweifelt. An Gehorsam gebunden, sieht er gerade in der Treue seinen festen Stand, wenn alles andere schwankt.", hooks: ["glaube"] },
          { title: "Die wahre Lehre bewahren", description: "Loyale Ordensbrüder stehen dem Helden zur Seite, doch er spürt, dass die alte Lehre zu verblassen droht. Die Pflicht verschlingt seine Zeit, dennoch wacht er darüber, dass die Regel nicht verfälscht wird. Was über Generationen Bestand hatte, soll rein bleiben, solange er den Segen sprechen kann.", hooks: ["glaube","wissen"] },
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
          { title: "Die Wacht nicht verlassen", description: "Solange noch ein Einziger steht, fällt der Posten nicht, und dieser Eine ist der Held. Schmerzhaft ehrlich mit sich selbst, weicht er keinen Schritt und hält die Stellung allein. Fliehen darf er nicht, will er nicht, denn die Last, die er trägt, kennt sonst niemand mehr.", hooks: ["glaube","kampf"] },
          { title: "Einen Nachfolger einweisen", description: "Der Held hält durch bis zuletzt, doch er weiß, dass kein Wächter ewig steht. Was er hütet, kann nicht mit ihm enden, sonst war alles Ausharren umsonst. Darum sucht er einen, dem er sein Wissen und seine Bürde übergeben kann, ehe die Kräfte ihn verlassen.", hooks: ["glaube","schicksal"] },
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
          { title: "Das Tor halten", description: "Am Durchgang steht der Held fest und durchschaut jeden Eindringling, der sich heranschleicht. Was herein will, kommt nur an ihm vorbei oder gar nicht, denn jede Losung ist ihm vertraut. Wachsam bei jedem Geräusch, räumt er den Posten nicht, dem er sich verschrieben hat.", hooks: ["glaube","kampf"] },
          { title: "Den Verräter im Inneren finden", description: "Der Held misstraut jedem Fremden, doch die wahre Gefahr lauert diesmal hinter ihm. Jemand öffnet heimlich von innen, was er von außen so treu verschließt. Mit demselben scharfen Blick, der jeden Eindringling erkennt, wird er den Verräter aufspüren und wissen, wessen Hand das Tor verrät.", hooks: ["glaube","geheimnis"] },
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
          { title: "Den Übersehenen helfen", description: "Der Held erkennt die verborgene Verzweiflung in den Gesichtern, an denen die Welt achtlos vorbeirauscht. Während andere die Schwachen übergehen, tut er es nicht und reicht den Verzagten Trost und Almosen. Auch wenn er selbst gemieden wird, bleibt sein Blick bei denen, die sonst keiner sieht.", hooks: ["glaube","außenseiter"] },
          { title: "Ihnen einen Platz schaffen", description: "Trost allein reicht dem Helden nicht, denn die Ausgestoßenen brauchen mehr als gute Worte. Da er keine Bitte abschlagen kann, wächst sein Anliegen über ihn hinaus. Er sucht einen Ort, an dem die Verstoßenen endlich sicher leben können, fern von Verachtung und Furcht, mit den Verbündeten, die er überall findet.", hooks: ["glaube","außenseiter"] },
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
          { title: "Heilen ohne zu fragen", description: "Heilende Hände und das Wissen um die Kräuter setzt der Held für jeden ein, der vor ihm liegt. Ob arm oder reich, ob Freund oder Fremder, wer Hilfe braucht, bekommt sie, ohne dass er nach Lohn fragt. So gibt er sein Letztes, auch wenn er selbst kaum genug zum Leben hat.", hooks: ["glaube","handwerk"] },
          { title: "Das verlorene Rezept wiederfinden", description: "Der Held kann keine Bitte abschlagen, doch manches Leiden trotzt seiner gewohnten Kunst. Eine alte Arznei, die einst viele Leben rettete, ist verloren gegangen. Er macht sich auf, das vergessene Rezept wiederzufinden, damit seine Hände auch jene heilen können, die er bislang nur sterbend beruhigen kann.", hooks: ["handwerk","wissen"] },
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
          { text: "spürt einen Fluch", hooks: ["magie","schicksal"] },
          { text: "Zeichen gegen Unheil", hooks: ["magie","glaube"] },
          { text: "warnende Erinnerungen", hooks: ["schicksal","verlust"] },
          { text: "trotzt dem Schlimmsten", hooks: ["schicksal","verlust"] },
        ],
        weaknessTags: [
          { text: "das Mal des Fluches", hooks: ["magie","verlust"] },
          { text: "wehrlos an bestimmten Orten", hooks: ["schicksal","verlust"] },
          { text: "wiederkehrende Albträume", hooks: ["verlust","schicksal"] },
        ],
        quests: [
          { title: "Den Fluch brechen", description: "Ein altes Mal liegt auf dem Helden und färbt jeden Tag dunkler. Er spürt den Fluch in den Knochen, hört seine warnenden Erinnerungen und trotzt dem Schlimmsten, doch leben will er so nicht weiter. Was wie ein Schatten an ihm hängt, soll fallen. Bis der Bann gebrochen ist, findet er keine Ruhe.", hooks: ["magie","schicksal"] },
          { title: "Den Ursprung finden", description: "Niemand verflucht ohne Grund, und der Held weigert sich, blind zu leiden. Die wiederkehrenden Albträume und die Zeichen gegen das Unheil weisen ihm einen Weg zurück. Er folgt der Spur des Fluches durch jede Erinnerung bis zu der Hand, die ihn einst wirkte. Erst wer den Ursprung kennt, kann das Übel an der Wurzel packen.", hooks: ["schicksal","geheimnis"] },
        ]
      },
      {
        text: "im Krieg geschmiedet", hooks: ["kampf","verlust"],
        powerTags: [
          { text: "narbiger Schwertarm", hooks: ["kampf","verlust"] },
          { text: "kennt das Schlachtfeld", hooks: ["kampf"] },
          { text: "wittert eine Falle", hooks: ["kampf","wissen"] },
          { text: "Blick fürs Schlimmste", hooks: ["kampf","verlust"] },
          { text: "abgehärtet vom Schlimmsten", hooks: ["verlust","kampf"] },
        ],
        weaknessTags: [
          { text: "verfolgt von alten Feinden", hooks: ["kampf","verlust"] },
          { text: "schmerzende Erinnerung", hooks: ["verlust"] },
        ],
        quests: [
          { title: "Den Krieg hinter sich lassen", description: "Der narbige Schwertarm hat genug Schlachtfelder gesehen, und der Held ist müde des Tötens. Abgehärtet vom Schlimmsten witterte er jede Falle, doch der Friede blieb ihm stets versagt. Nun sucht er die Stille, die ihm die Schlacht nie schenkte. Vielleicht liegt jenseits der alten Feinde endlich ein Ort, an dem er die Waffe ablegen darf.", hooks: ["kampf","verlust"] },
          { title: "Alte Waffenbrüder finden", description: "Von allen, die mit dem Helden in die Schlacht zogen, blieben nur wenige übrig. Sein Blick fürs Schlimmste hat ihn durchgebracht, doch das Überleben allein wiegt schwer. Er spürt die letzten Gefährten auf, die das Gemetzel mit ihm überstanden, ehe auch ihre Spuren verwehen. Wer Seite an Seite stand, gehört wieder zusammen.", hooks: ["kampf","verlust"] },
        ]
      },
      {
        text: "letzter meines Volkes", hooks: ["verlust","natur"],
        powerTags: [
          { text: "spricht eine vergessene Zunge", hooks: ["wissen","verlust"] },
          { text: "kennt die Namen der Toten", hooks: ["verlust","geheimnis"] },
          { text: "Sprache der Verlorenen", hooks: ["verlust","wissen"] },
          { text: "einst gelernte Liturgie", hooks: ["glaube","verlust"] },
        ],
        weaknessTags: [
          { text: "lebt in der Vergangenheit", hooks: ["verlust","schicksal"] },
          { text: "traut nur Vertrauten von einst", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Das Erbe bewahren", description: "Der Held ist der Letzte, der die vergessene Zunge noch spricht und die Namen der Toten kennt. Mit ihm droht das Wissen eines ganzen Volkes für immer zu verlöschen. Solange er atmet, soll wenigstens ein Funke dieser alten Welt weiterglimmen. Er trägt die Liturgie und die Sprache der Verlorenen wie ein Vermächtnis, das niemand sonst mehr hüten kann.", hooks: ["verlust","natur"] },
          { title: "Das Werk vollenden", description: "Sein Volk ließ etwas Unvollendetes zurück, als es unterging, und der Held kennt es als Einziger noch. Er lebt zwar in der Vergangenheit, doch gerade darin liegt seine Aufgabe. Was die Seinen nicht mehr zu Ende bringen konnten, will er für sie beenden. So gibt er ihrem Untergang im Nachhinein einen Sinn.", hooks: ["verlust","natur"] },
        ]
      },
      {
        text: "mystischer Pilger", hooks: ["magie","fahrend"],
        powerTags: [
          { text: "findet immer Orientierung", hooks: ["fahrend","natur"] },
          { text: "reist mit leichtem Gepäck", hooks: ["fahrend","verlust"] },
          { text: "kennt heilige Wege", hooks: ["glaube","fahrend"] },
          { text: "liest die Zeichen", hooks: ["magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "nirgends lange zu Hause", hooks: ["fahrend","außenseiter"] },
          { text: "als Fremder beäugt", hooks: ["außenseiter","fahrend"] },
        ],
        quests: [
          { title: "Die Pilgerfahrt vollenden", description: "Der Held zieht von Schwelle zu Schwelle, liest die Zeichen und findet immer Orientierung, wo andere sich verlieren. Doch nirgends ist er lange zu Hause, und überall beäugt man ihn als Fremden. Der Weg selbst ist seine Prüfung, das hat er begriffen. Erst wenn er am Ziel ankommt, wird er erkennen, wer er wirklich geworden ist.", hooks: ["glaube","fahrend"] },
          { title: "Das verborgene Heiligtum finden", description: "Auf seinen Wanderungen hörte der Held von einem Ort, den niemand sonst zu suchen wagt. Mit leichtem Gepäck und dem Wissen um die heiligen Wege fühlt er sich berufen, dorthin zu gelangen. Etwas an diesem Heiligtum ruft nach ihm, als hätte es auf ihn gewartet. Er folgt dem Ruf, auch wenn ihn der Pfad weit aus jeder bekannten Welt hinausführt.", hooks: ["magie","fahrend"] },
        ]
      },
      {
        text: "aus den Trümmern", hooks: ["verlust","fahrend"],
        powerTags: [
          { text: "hat die Ruinen gesehen", hooks: ["verlust","natur"] },
          { text: "durchgemacht und überlebt", hooks: ["verlust"] },
          { text: "lernt aus jedem Fehler", hooks: ["wissen","handwerk"] },
          { text: "überlebt jede Not", hooks: ["verlust","außenseiter"] },
        ],
        weaknessTags: [
          { text: "bleibende Schuld", hooks: ["verlust","schicksal"] },
          { text: "kann nicht loslassen", hooks: ["verlust"] },
        ],
        quests: [
          { title: "Neu aufbauen", description: "Der Held hat die Ruinen mit eigenen Augen gesehen und überlebt, wo alles andere zerbrach. Aus jedem Fehler hat er gelernt, und gerade das macht ihn zum richtigen Baumeister. Wo andere nur Schutt sehen, erkennt er das Fundament für etwas Neues. Aus Trümmern lässt sich etwas schaffen, glaubt er, denn er ist selbst aus Trümmern wieder aufgestanden.", hooks: ["verlust","handwerk"] },
          { title: "Retten was bleibt", description: "Was der Held einst verlor, lehrte ihn, jeden Rest zu schätzen, der noch zu retten ist. Er kann nicht loslassen, und so verschließt er die Augen nicht vor dem Wenigen, das übrig blieb. Solange irgendwo ein Funke glimmt, bückt er sich danach und schützt ihn mit der Hand. Aufgeben ist für einen, der schon einmal alles verlor, keine Möglichkeit.", hooks: ["verlust","natur"] },
        ]
      },
      {
        text: "der Heimkehrer", hooks: ["fahrend","verlust"],
        powerTags: [
          { text: "kennt den Weg zurück", hooks: ["fahrend","verlust"] },
          { text: "getragene Reisetracht", hooks: ["fahrend","verlust"] },
          { text: "altes Andenken", hooks: ["verlust"] },
          { text: "findet alte Verbündete", hooks: ["fahrend","glaube"] },
        ],
        weaknessTags: [
          { text: "daheim hat sich alles verändert", hooks: ["verlust","schicksal"] },
          { text: "wird von alten Bekannten erkannt", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Nach Hause finden", description: "Der Held kennt den Weg zurück, auch nach all den Jahren in der Fremde. Ein altes Andenken trägt er bei sich, ein Versprechen an den Ort, den er einst verlassen musste. Nun zieht es ihn heim, dorthin, wo seine Wurzeln liegen. Doch er ahnt, dass die Heimat, die er sucht, nicht mehr ganz dieselbe sein wird, die er kannte.", hooks: ["fahrend","verlust"] },
          { title: "Das alte Unrecht klären", description: "Bevor der Held fortging, geschah etwas, das nie ausgesprochen wurde. Daheim hat sich seither alles verändert, und alte Bekannte erkennen ihn mit gemischten Blicken. Das ungeklärte Unrecht von damals lässt ihm keine Ruhe und folgt ihm bis in den Schlaf. Er kehrt zurück, um endlich zu begreifen, was wirklich vorfiel, und es ins Reine zu bringen.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "Feuerüberlebende", hooks: ["verlust","schicksal"],
        powerTags: [
          { text: "Andenken eines Toten", hooks: ["verlust"] },
          { text: "eiserner Wille", hooks: ["verlust"] },
          { text: "eine Lektion aus Leid", hooks: ["verlust","wissen"] },
          { text: "wacht beim leisesten Geräusch", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "schmerzende Erinnerung", hooks: ["verlust"] },
          { text: "wehrlos vor Flammen", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Das Vergangene zur Ruhe bringen", description: "Der Held überlebte die Flammen, doch ein Andenken eines Toten erinnert ihn jede Nacht daran. Sein eiserner Wille trug ihn durch das Leid, das ihm eine bittere Lektion wurde. Noch immer wacht er beim leisesten Geräusch und schreckt vor jedem Funken zurück. Er will, dass die Geister der Brandnacht endlich schweigen und er wieder ruhig atmen kann.", hooks: ["verlust","schicksal"] },
          { title: "Den Brandstifter finden", description: "Das Feuer kam nicht von selbst, das weiß der Held mit jeder schmerzenden Erinnerung. Wehrlos stand er einst vor den Flammen, doch das Leid hat ihn nicht gebrochen, sondern geschärft. Er will wissen, wessen Hand das Feuer legte und warum. Erst wenn er dem Schuldigen ins Gesicht gesehen hat, kann die Asche der Vergangenheit zur Ruhe kommen.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "entflohener Gefangener", hooks: ["außenseiter","verlust"],
        powerTags: [
          { text: "kennt den Preis des Aufgebens", hooks: ["verlust","wissen"] },
          { text: "geht in der Menge unter", hooks: ["außenseiter","geheimnis"] },
          { text: "sieht durch Lügen", hooks: ["geheimnis"] },
          { text: "überlebt jede Not", hooks: ["verlust","außenseiter"] },
        ],
        weaknessTags: [
          { text: "verfolgt von alten Feinden", hooks: ["kampf","verlust"] },
          { text: "traut niemandem ganz", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "Sich von den Ketten befreien", description: "Der Held kennt den Preis des Aufgebens und hat ihn nie gezahlt, selbst hinter Gittern nicht. Er entkam, geht in der Menge unter und überlebt jede Not, doch frei fühlt er sich nicht. Verfolgt von alten Feinden, bleibt ein Schatten an ihm haften. Solange dieser Schatten ihn jagt, gehört sein Leben ihm nicht ganz, und genau das will er ändern.", hooks: ["verlust","außenseiter"] },
          { title: "Mit den Wärtern abrechnen", description: "Wer den Helden gefangen hielt, hat ihm Dinge angetan, die er nicht vergisst. Er durchschaut jede Lüge und traut niemandem ganz, am wenigsten denen, die ihn einst in Ketten legten. Die Wärter sollen nicht ungestraft bleiben für das, was sie taten. Er spürt sie auf, einen nach dem anderen, und fordert die Rechnung ein, die noch offen steht.", hooks: ["außenseiter","kampf"] },
        ]
      },
      {
        text: "Kriegskind", hooks: ["kampf","verlust"],
        powerTags: [
          { text: "abgehärtet vom Schlimmsten", hooks: ["verlust"] },
          { text: "Blick fürs Schlimmste", hooks: ["kampf","verlust"] },
          { text: "trägt Narben mit Würde", hooks: ["verlust","kampf"] },
          { text: "wittert eine Falle", hooks: ["kampf","wissen"] },
        ],
        weaknessTags: [
          { text: "wiederkehrende Albträume", hooks: ["verlust"] },
          { text: "kennt nur den Krieg", hooks: ["kampf","außenseiter"] },
        ],
        quests: [
          { title: "Einen ruhigen Platz suchen", description: "Der Held kennt nichts als den Krieg, in den er hineingeboren wurde, abgehärtet vom Schlimmsten von Kindesbeinen an. Sein Blick fürs Schlimmste hat ihn am Leben gehalten, doch die Albträume kehren jede Nacht wieder. Einmal will er leben, ohne dass jede Straße zum Schlachtfeld wird. Er sucht einen stillen Ort, an dem er endlich lernen darf, was Frieden bedeutet.", hooks: ["kampf","verlust"] },
          { title: "Die Eltern wiederfinden", description: "Der Krieg nahm dem Helden die Familie, ehe er sie richtig kennen konnte. Seine Narben trägt er mit Würde, doch die Lücke, die jene Nacht riss, blieb. Irgendwo, so hofft er, leben seine Eltern noch oder zumindest die Spur ihres Schicksals. Er folgt den wenigen Erinnerungen, die ihm blieben, um die Menschen zu finden, denen er einst gehörte.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "einzige Mitwisserin", hooks: ["geheimnis","wissen"],
        powerTags: [
          { text: "sieht durch Lügen", hooks: ["geheimnis"] },
          { text: "kennt die Namen der Toten", hooks: ["verlust","geheimnis"] },
          { text: "eine Lektion aus Leid", hooks: ["verlust","wissen"] },
          { text: "hört wo andere schweigen", hooks: ["geheimnis","wissen"] },
        ],
        weaknessTags: [
          { text: "wird gejagt um ihr Wissen", hooks: ["geheimnis","verlust"] },
          { text: "traut nur Vertrauten von einst", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Die Wahrheit ans Licht bringen", description: "Der Held sieht durch Lügen und hört, wo andere schweigen, und so kennt er, was hinter den Rissen der Geschichte liegt. Eine bittere Lektion aus Leid hat ihn gelehrt, wie gefährlich dieses Wissen ist. Doch er wird gejagt, gerade weil er die Wahrheit trägt. Lieber spricht er sie aus, als sie mit sich ins Grab zu nehmen, damit endlich ans Licht kommt, was verschwiegen wurde.", hooks: ["geheimnis","wissen"] },
          { title: "Den Verräter entlarven", description: "Jemand aus dem eigenen Kreis hat den Helden verraten und ihn so zur einzigen Mitwisserin werden lassen. Er kennt die Namen der Toten und traut nur noch den Vertrauten von einst. Doch der Verräter verbirgt sich hinter einem freundlichen Gesicht. Der Held wird nicht ruhen, bis er weiß, wessen Hand ihn ans Messer lieferte, und ihn vor allen entlarvt.", hooks: ["verlust","geheimnis"] },
        ]
      },
      {
        text: "getriebene ohne Heimat", hooks: ["fahrend","verlust"],
        powerTags: [
          { text: "reist mit leichtem Gepäck", hooks: ["fahrend","verlust"] },
          { text: "findet immer Orientierung", hooks: ["fahrend","natur"] },
          { text: "findet überall Unterschlupf", hooks: ["fahrend","außenseiter"] },
          { text: "abgehärtet vom Schlimmsten", hooks: ["verlust"] },
        ],
        weaknessTags: [
          { text: "nirgends willkommen", hooks: ["außenseiter","fahrend"] },
          { text: "kann nicht loslassen", hooks: ["verlust"] },
        ],
        quests: [
          { title: "Einen Ort zum Bleiben finden", description: "Der Held reist mit leichtem Gepäck und findet überall Unterschlupf, doch nirgends ist er willkommen. Abgehärtet von einem ruhelosen Leben kennt er jede Straße, aber keine Heimat. Er kann die Vergangenheit nicht loslassen, die ihn immer weitertreibt. Irgendwo, glaubt er, muss ein Platz sein, an dem er bleiben und endlich aufatmen darf.", hooks: ["fahrend","verlust"] },
          { title: "Dem Getriebensein entkommen", description: "Eine unsichtbare Hand treibt den Helden rastlos durch die Lande, und er weiß nicht recht, woher sie kommt. Seine sichere Orientierung führt ihn überallhin, nur nie zur Ruhe. Was ihn nicht stillhalten lässt, will er endlich begreifen. Erst wenn er den Grund seines Getriebenseins kennt, kann er hoffen, sich von ihm zu befreien.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "wer alles zurückließ", hooks: ["verlust","außenseiter"],
        powerTags: [
          { text: "lebt vom Wenigen", hooks: ["außenseiter","verlust"] },
          { text: "kennt den Preis des Aufgebens", hooks: ["verlust","wissen"] },
          { text: "altes Andenken", hooks: ["verlust"] },
          { text: "durchgemacht und überlebt", hooks: ["verlust"] },
        ],
        weaknessTags: [
          { text: "bleibende Schuld", hooks: ["verlust","schicksal"] },
          { text: "lebt in der Vergangenheit", hooks: ["verlust","schicksal"] },
        ],
        quests: [
          { title: "Dem Zurückgelassenen vergeben", description: "Der Held ließ alles hinter sich und lebt seither vom Wenigen, das er bei sich trägt. Ein altes Andenken erinnert ihn an das, was er aufgab, und an die bleibende Schuld, die daran hängt. Er lebt zu sehr in der Vergangenheit, das spürt er selbst. Vergeben will er nicht, weil die anderen es verdienen, sondern damit er die Last endlich ablegen und weitergehen kann.", hooks: ["verlust","glaube"] },
          { title: "Das eine zurückholen", description: "Von allem, was der Held zurückließ, gibt es eines, dessen Verlust er nicht ertragen kann. Er hat durchgemacht und überlebt und kennt den Preis des Aufgebens nur zu gut. Doch dieses eine wiegt schwerer als alles andere, was er hinter sich ließ. Er kehrt um, koste es, was es wolle, um es zurückzuholen, ehe es für immer verloren ist.", hooks: ["verlust","schicksal"] },
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
          { text: "kennt die Sitten meines Volkes", hooks: ["natur"] },
          { text: "die Sprache der Ahnen", hooks: ["wissen","natur"] },
          { text: "leiser Schritt", hooks: ["natur"] },
          { text: "sieht im Dunkeln", hooks: ["natur","schicksal"] },
        ],
        weaknessTags: [
          { text: "misstrauisch gegen Fremde", hooks: ["außenseiter","natur"] },
          { text: "fremde Sitten überfordern sie", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "Ich erfülle eine Prophezeiung meiner Sippe", description: "Aufgewachsen in verschwiegenen Wäldern, kennt der Held die Sitten seines Volkes und die Sprache der Ahnen wie den eigenen Herzschlag. Schon die Alten lasen sein Gesicht in den Zeichen dessen, was kommen wird. So sehr er Fremden auch misstraut, er kann sich diesem Ruf nicht entziehen und folgt dem Pfad, den die Weissagung ihm wies.", hooks: ["schicksal","natur"] },
          { title: "Ich finde meinesgleichen", description: "Mit leisem Schritt und einem Blick, der das Dunkel durchdringt, bewegt sich der Held durch eine Welt, deren Bräuche ihn oft überfordern. Doch unter all den fremden Gesichtern fehlt eines, das dieselbe alte Zunge spricht. Irgendwo dort draußen müssen andere seines Volkes leben, und dieser stille Gedanke treibt ihn fort, bis er nicht mehr allein ist.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "Highlanderin", hooks: ["natur","kampf"],
        powerTags: [
          { text: "unerwartete Stärke", hooks: ["kampf"] },
          { text: "Schwert meines Volkes", hooks: ["kampf","natur"] },
          { text: "heimischer Boden gibt Kraft", hooks: ["natur"] },
          { text: "wettergegerbte Haut", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "gemieden in dieser Gegend", hooks: ["außenseiter"] },
          { text: "loyaler als vernünftig", hooks: ["glaube"] },
        ],
        quests: [
          { title: "Ich erhebe mein Volk wieder zu Würde", description: "Die wettergegerbte Haut und die unerwartete Stärke verraten die Herkunft des Helden: das raue Hochland, dessen heimischer Boden ihm Kraft schenkt. In der Fremde wird sein Volk gemieden und in Geschichten verzerrt, die andere am Feuer erzählen. Loyaler als vernünftig steht er dafür ein, dass die Seinen mehr sind, und will ihnen ihre Würde zurückgeben.", hooks: ["natur","macht"] },
          { title: "Ich bringe Frieden mit den alten Feinden", description: "Mit dem Schwert seines Volkes in der Hand wuchs der Held in einer Fehde auf, deren Ursprung niemand mehr benennen kann. Der Krieg ist alt, und keiner weiß mehr, warum er begann, doch das Blutvergießen reißt nicht ab. Auch wenn manche ihn für treulos halten, sucht er einen Weg, die uralte Feindschaft endlich zu begraben.", hooks: ["natur","kampf"] },
        ]
      },
      {
        text: "Battlerider", hooks: ["kampf"],
        powerTags: [
          { text: "Bogen meines Volkes", hooks: ["kampf","natur"] },
          { text: "angeborene Schnelligkeit", hooks: ["natur"] },
          { text: "Affinität zu Tieren", hooks: ["natur"] },
          { text: "sitzt fest im Sattel", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "aus dem Element gerissen", hooks: ["fahrend","außenseiter"] },
          { text: "loyaler als vernünftig", hooks: ["glaube"] },
        ],
        quests: [
          { title: "Ich beweise den Wert meiner Reiter", description: "Mit dem Bogen seines Volkes und angeborener Schnelligkeit sitzt der Held fest im Sattel, eins mit dem Tier unter sich. Die Sesshaften halten seine Reiter für rohe, ungeschlachte Krieger, doch er kennt die Kunst und Ehre hinter dem Galopp. Fern der vertrauten Steppe will er zeigen, was sein Volk wirklich vermag, und jeden Zweifel zerstreuen.", hooks: ["außenseiter","kampf"] },
          { title: "Ich finde mein verlorenes Ross wieder", description: "Seine tiefe Affinität zu Tieren machte das Ross zu mehr als einem Reittier: zu einem Gefährten, der jeden Ritt mit ihm teilte. Nun ist es fort, und aus dem Element gerissen fühlt der Held sich nur noch halb. Loyaler als vernünftig nimmt er die Spur auf, denn ohne sein Tier ist er kein ganzer Krieger.", hooks: ["kampf","natur"] },
        ]
      },
      {
        text: "Hexenblut", hooks: ["magie","schicksal"],
        powerTags: [
          { text: "wittert Unrecht sofort", hooks: ["glaube","schicksal"] },
          { text: "kennt verborgene Heilpflanzen", hooks: ["natur","wissen"] },
          { text: "altertümliches Lied", hooks: ["natur","wissen"] },
          { text: "trägt das Wissen der Alten", hooks: ["wissen","natur"] },
        ],
        weaknessTags: [
          { text: "auffälliges Merkmal", hooks: ["außenseiter","schicksal"] },
          { text: "gemieden in dieser Gegend", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "Ich erforsche das Erbe meines Blutes", description: "Ein altertümliches Lied auf den Lippen und das Wissen der Alten in sich tragend, wittert der Held jedes Unrecht und kennt verborgene Heilpflanzen. Doch etwas Älteres regt sich in seinen Adern, ein auffälliges Mal, das ihn von allen abhebt. Er muss wissen, woher diese Gabe stammt, und folgt der Spur seines Blutes zurück, gleich wohin.", hooks: ["magie","schicksal"] },
          { title: "Ich beweise dass mein Volk mehr ist als sein Ruf", description: "Wo der Held auch hinkommt, eilt ihm der Ruf seines Blutes voraus, und die Leute weichen seinem Mal scheu aus. Sie erzählen alte und falsche Geschichten über die Seinen, gespeist aus Furcht vor dem Unbekannten. Gemieden in dieser Gegend, will er mit seinem heilenden Wissen beweisen, dass sein Volk mehr ist als die Gerüchte.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "Karawanenvolk", hooks: ["fahrend"],
        powerTags: [
          { text: "Tanz mit tiefer Bedeutung", hooks: ["natur","glaube"] },
          { text: "Körpersprache nur für Eingeweihte", hooks: ["geheimnis","außenseiter"] },
          { text: "findet immer Orientierung", hooks: ["fahrend","natur"] },
          { text: "entfacht Feuer überall", hooks: ["natur","handwerk"] },
        ],
        weaknessTags: [
          { text: "gemieden in dieser Gegend", hooks: ["außenseiter"] },
          { text: "spricht mit fremdem Akzent", hooks: ["außenseiter","fahrend"] },
        ],
        quests: [
          { title: "Ich bewahre die Lieder meines Volkes", description: "Im Schein der Feuer, die der Held überall zu entfachen weiß, lebt die Seele seines fahrenden Volkes: in Tänzen voll tiefer Bedeutung und einer Körpersprache nur für Eingeweihte. Doch unterwegs, gemieden und mit fremdem Akzent verlacht, drohen die alten Weisen zu verklingen. Wer keine Lieder mehr hat, hat kein Volk, und so trägt er sie weiter.", hooks: ["natur","wissen"] },
          { title: "Ich finde das verlorene Herz meiner Kultur", description: "Stets findet der Held Orientierung auf den endlosen Straßen, doch eine Leere reist mit ihm, die kein Wegzeichen füllt. Etwas wurde seinem Volk genommen: ein Ort, ein Ritual, ein Name, an dem einst alles hing. Gemieden und mit fremdem Akzent durch die Lande ziehend, sucht er dieses verlorene Herz seiner Kultur.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "Bibervolk", hooks: ["natur"],
        powerTags: [
          { text: "Werkzeug aus der Heimat", hooks: ["handwerk","natur"] },
          { text: "taucht und schwimmt mühelos", hooks: ["natur"] },
          { text: "baut Dämme und Unterschlüpfe", hooks: ["handwerk","natur"] },
          { text: "kennt die Zeichen des Wetters", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "auffälliges Merkmal", hooks: ["außenseiter","schicksal"] },
          { text: "misstrauisch gegen Fremde", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "Ich schütze die Wasser meiner Heimat", description: "Mit dem Werkzeug aus der Heimat taucht und schwimmt der Held mühelos und baut Dämme und Unterschlüpfe, wie es seinem Volk eigen ist. Flüsse und Teiche sind sein Leben, und sein Auge für die Zeichen des Wetters warnt ihn früh: etwas bedroht sie. Trotz allen Misstrauens gegen Fremde stellt er sich vor das Wasser.", hooks: ["natur"] },
          { title: "Ich finde meinesgleichen", description: "Geschickt errichtet der Held seine Bauten und kennt das Wasser wie kein anderer, doch zwischen den Trockenwohnern bleibt er ein auffälliger Sonderling. Misstrauisch gegen Fremde, vermisst er die Seinen, mit denen er Damm und Bau einst teilte. Irgendwo dort draußen müssen andere seiner Art leben, und das zieht ihn flussaufwärts, bis er sie findet.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "Fjordgeborene", hooks: ["natur"],
        powerTags: [
          { text: "überlebt in unwirtlichen Gebieten", hooks: ["natur","außenseiter"] },
          { text: "wettergegerbte Haut", hooks: ["natur"] },
          { text: "kennt die Zeichen des Wetters", hooks: ["natur"] },
          { text: "seefest und sicher zu Schiff", hooks: ["natur","fahrend"] },
        ],
        weaknessTags: [
          { text: "aus dem Element gerissen", hooks: ["fahrend","außenseiter"] },
          { text: "blind für fremde Bräuche", hooks: ["natur","außenseiter"] },
        ],
        quests: [
          { title: "Ich kehre an die Küste meiner Ahnen zurück", description: "Geboren zwischen steilen Fjorden, überlebt der Held in unwirtlichen Gebieten, liest die Zeichen des Wetters und steht seefest an Deck. Doch fern der See, aus seinem Element gerissen, fühlt er sich verloren und blind für fremde Bräuche. Das Salz im Wind ruft ihn heim, und er folgt diesem Ruf zur Küste seiner Ahnen zurück.", hooks: ["natur","verlust"] },
          { title: "Ich erhebe mein Volk wieder zu Würde", description: "Mit wettergegerbter Haut und dem Wissen, jeder Strapaze zu trotzen, trägt der Held das harte Erbe der Fjorde in sich. Doch in der Fremde, blind für fremde Bräuche und aus dem Element gerissen, hört er nur Hohn über die Seinen. Sie sind mehr als die Geschichten der anderen, und er will ihnen ihre Würde zurückgeben.", hooks: ["natur","macht"] },
        ]
      },
      {
        text: "Tochter der Wanderer", hooks: ["fahrend"],
        powerTags: [
          { text: "findet immer Orientierung", hooks: ["fahrend","natur"] },
          { text: "seelenbewegender Gesang", hooks: ["natur","schicksal"] },
          { text: "erkennt Gast und Eindringling", hooks: ["natur","geheimnis"] },
          { text: "findet überall Unterschlupf", hooks: ["fahrend","stadt"] },
        ],
        weaknessTags: [
          { text: "spricht mit fremdem Akzent", hooks: ["außenseiter","fahrend"] },
          { text: "gemieden in dieser Gegend", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "Ich überbrücke die Welten in denen ich lebe", description: "Mit untrüglichem Orientierungssinn findet der Held überall Unterschlupf und erkennt mit einem Blick, wer Gast und wer Eindringling ist. Doch zwischen den Welten, in denen er lebt, gehört er nirgends ganz dazu: weder ganz von hier noch ganz von dort. Mit fremdem Akzent und gemieden, will er Brücken schlagen, statt sich entscheiden zu müssen.", hooks: ["außenseiter","schicksal"] },
          { title: "Ich bewahre die Lieder meines Volkes", description: "Sein seelenbewegender Gesang ist das Erbe der Wanderer, deren Wege der Held seit Kindesbeinen teilt. Doch unterwegs, gemieden und mit fremdem Akzent belächelt, drohen die alten Weisen mit den Jahren zu verklingen. Wer keine Lieder mehr hat, hat kein Volk, und so singt und sammelt er sie weiter, damit das Erbe niemals verstummt.", hooks: ["fahrend","wissen"] },
        ]
      },
      {
        text: "Küstenkind", hooks: ["natur"],
        powerTags: [
          { text: "taucht und schwimmt mühelos", hooks: ["natur"] },
          { text: "kennt die Zeichen des Wetters", hooks: ["natur"] },
          { text: "angeborener Sinn für Spuren", hooks: ["natur"] },
          { text: "liest die Gezeiten", hooks: ["natur","wissen"] },
        ],
        weaknessTags: [
          { text: "aus dem Element gerissen", hooks: ["fahrend","außenseiter"] },
          { text: "fremde Sitten überfordern sie", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "Ich finde das verlorene Herz meiner Kultur", description: "Am Saum der Brandung aufgewachsen, taucht und schwimmt der Held mühelos, liest die Gezeiten und kennt die Zeichen des Wetters. Doch eine Leere begleitet ihn: Etwas wurde seinem Volk genommen, ein Ort, ein Ritual, ein Name, der einst alles zusammenhielt. Aus dem Element gerissen, sucht er dieses verlorene Herz seiner Kultur, eh die See es verschlingt.", hooks: ["natur","verlust"] },
          { title: "Ich schütze die Küste vor dem was aus der See kommt", description: "Mit angeborenem Sinn für Spuren und einem wachen Auge für jedes Wetterzeichen steht der Held an der Schwelle zwischen Land und Meer. Das Meer gibt, und es nimmt, und er kennt beide Gesichter dieser launischen Macht. Wenn Dunkles aus der Tiefe heraufzieht, sind die Seinen blind dafür, er aber nicht, und stellt sich ihm entgegen.", hooks: ["natur"] },
        ]
      },
      {
        text: "Sumpfbewohner", hooks: ["natur"],
        powerTags: [
          { text: "überlebt in unwirtlichen Gebieten", hooks: ["natur","außenseiter"] },
          { text: "kennt verborgene Heilpflanzen", hooks: ["natur","wissen"] },
          { text: "angeborener Sinn für Spuren", hooks: ["natur"] },
          { text: "leiser Schritt", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "gemieden in dieser Gegend", hooks: ["außenseiter"] },
          { text: "misstrauisch gegen Fremde", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "Ich bewahre die Geheimnisse des Moors", description: "Wo andere im Schlamm versinken, überlebt der Held mit leisem Schritt und angeborenem Sinn für jede Spur in den trügerischen Sümpfen. Er kennt verborgene Heilpflanzen und alte Wege, die nur sein Volk noch zu lesen versteht. Der Sumpf birgt uraltes Wissen, das zu verschwinden droht, und gemieden wie er ist, will er es bewahren.", hooks: ["natur","geheimnis"] },
          { title: "Ich beweise dass mein Volk mehr ist als sein Ruf", description: "Misstrauisch gegen Fremde bewegt sich der Held lautlos durch das Dickicht, das ihm Heimat und Schutz zugleich ist. Die Leute der trockenen Länder erzählen alte und falsche Geschichten über die Sumpfbewohner, gespeist aus Furcht vor dem Moor. Gemieden in dieser Gegend, will er beweisen, dass sein Volk mehr ist als der finstere Ruf.", hooks: ["außenseiter","natur"] },
        ]
      },
      {
        text: "Halbblut zwischen zwei Welten", hooks: ["außenseiter","schicksal"],
        powerTags: [
          { text: "kennt die Sitten zweier Völker", hooks: ["natur","außenseiter"] },
          { text: "erkennt Gast und Eindringling", hooks: ["natur","geheimnis"] },
          { text: "die Sprache der Ahnen", hooks: ["wissen","natur"] },
          { text: "vermittelt zwischen Fremden", hooks: ["stadt","außenseiter"] },
        ],
        weaknessTags: [
          { text: "gemieden in dieser Gegend", hooks: ["außenseiter"] },
          { text: "auffälliges Merkmal", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "Ich überbrücke die Welten in denen ich lebe", description: "In den Adern des Helden fließt das Erbe zweier Völker, deren Sitten er beide kennt und deren Ahnensprache er spricht. Mit dem Blick für Gast und Eindringling vermittelt er zwischen Fremden, doch sein auffälliges Mal macht ihn beiderorts zum Außenseiter. Weder ganz von hier noch von dort, will er diese Welten überbrücken statt sich zerreiben zu lassen.", hooks: ["außenseiter","schicksal"] },
          { title: "Ich finde meinesgleichen", description: "Als Mittler zwischen Fremden kennt der Held die Sitten zweier Völker, und doch gehört er zu keinem von beiden wirklich dazu. Gemieden und durch sein Mal gezeichnet, sehnt er sich nach jemandem, der dieselbe gespaltene Herkunft trägt. Irgendwo müssen andere sein, die zwischen den Welten stehen wie er, und das treibt ihn fort, sie zu finden.", hooks: ["außenseiter","schicksal"] },
        ]
      },
      {
        text: "aus dem fernen Osten", hooks: ["fahrend","geheimnis"],
        powerTags: [
          { text: "trägt das Wissen der Alten", hooks: ["wissen","natur"] },
          { text: "Körpersprache nur für Eingeweihte", hooks: ["geheimnis","außenseiter"] },
          { text: "altertümliches Lied", hooks: ["natur","wissen"] },
          { text: "kennt ferne Sitten und Wege", hooks: ["fahrend","wissen"] },
        ],
        weaknessTags: [
          { text: "spricht mit fremdem Akzent", hooks: ["außenseiter","fahrend"] },
          { text: "fremde Sitten überfordern sie", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "Ich finde den Weg in die Heimat zurück", description: "Aus einem fernen Land im Osten trägt der Held das Wissen der Alten, alte Lieder und eine Körpersprache nur für Eingeweihte. Doch hier spricht er mit fremdem Akzent, und die hiesigen Sitten überfordern ihn auf Schritt und Tritt. Ein langer, ungewisser Pfad liegt zwischen ihm und dem Land, das ihn kennt, und die Sehnsucht heimzukehren wächst.", hooks: ["fahrend","verlust"] },
          { title: "Ich bringe das Wissen meiner Heimat in diese Welt", description: "In der Ferne erlernte der Held Künste und Sitten, die hier kein Mensch je gesehen hat, und trägt das Wissen der Alten mit sich. Auch wenn sein Akzent ihn verrät und die fremden Bräuche ihn ratlos lassen, ahnt er den Wert dessen, was er bewahrt. Was hier niemand kennt, könnte vieles verändern, und das will er hineintragen.", hooks: ["wissen","geheimnis"] },
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
          { title: "Ein offenes Ohr für die Übersehenen", description: "Wo andere wegsehen, erkennt der Held die verborgene Not im Blick der Vergessenen. Er gibt sein Letztes, leiht ein Ohr und macht denen Mut, die längst aufgegeben haben. Niemand soll sich allein fühlen, solange er in der Nähe ist, denn jedes übersehene Leid wiegt für sein weiches Herz schwer.", hooks: ["glaube","außenseiter"] },
          { title: "Güte zurückgeben", description: "Einst stand der Held selbst am Boden, und eine fremde Hand richtete ihn wieder auf. Diese Güte hat sich tief eingeprägt, und nun drängt es ihn, sie weiterzureichen. Was ihm geschenkt wurde, will er vervielfachen, bis die Welt ein wenig wärmer ist, auch wenn man seine Großzügigkeit allzu leicht ausnutzt.", hooks: ["glaube","verlust"] },
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
          { title: "Menschen für eine Sache gewinnen", description: "Der Held weiß, dass ein Lächeln Türen öffnet, wo Schwerter nur Mauern errichten. Mit warmen Worten liest er jeden Raum und bringt selbst Verstockte zum Reden. Statt durch Zwang will er die Herzen der Menschen für eine Sache gewinnen und beweisen, dass sich die Welt durch Überzeugung verändern lässt, nicht durch Gewalt.", hooks: ["stadt","macht"] },
          { title: "Wahre Freunde hinter den Masken", description: "So viele lächeln dem Helden zu, doch er ahnt, dass mancher nur sein Charisma sucht und nicht ihn selbst. Hinter den freundlichen Masken sehnt er sich nach jenen wenigen, die bleiben, wenn der Glanz verblasst. Er will herausfinden, wer ihm wirklich vertraut, statt bloß seine Anerkennung zu spiegeln.", hooks: ["glaube","stadt"] },
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
          { text: "verschreckt mit der schroffen Art", hooks: ["außenseiter"] },
        ],
        quests: [
          { title: "Mir selbst nicht im Weg stehen", description: "Hart wie Fels steht der Held für andere ein und gibt niemals vorzeitig auf. Doch dieselbe Sturheit lässt ihn die eigenen Bedürfnisse übergehen, als zähle er selbst am wenigsten. Nun lernt er mühsam, sich nicht länger im Weg zu stehen und auch für sich jene Härte aufzubringen, die er stets nur für andere zeigte.", hooks: ["natur","verlust"] },
          { title: "Treu bleiben um jeden Preis", description: "Der schroffe Blick und das einschüchternde Auftreten verschrecken viele, doch hinter dem Stein verbirgt sich eine eiserne Treue. Der Held hat sich entschieden, zu wem er gehört, und nichts wird ihn davon abbringen. Mag man ihn leicht provozieren, sein Wort hält wie Granit, koste es, was es wolle.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "geübte Lügnerin", hooks: ["stadt","geheimnis"],
        powerTags: [
          { text: "durchschaut eine Lüge", hooks: ["stadt","geheimnis"] },
          { text: "plaudert sich aus jeder Lage", hooks: ["stadt"] },
          { text: "trägt jede Maske glaubhaft", hooks: ["stadt","geheimnis"] },
          { text: "behält die Ruhe", hooks: ["natur"] },
        ],
        weaknessTags: [
          { text: "misstraut der eigenen Geschichte", hooks: ["geheimnis","verlust"] },
          { text: "wird beim Wort genommen", hooks: ["stadt","geheimnis"] },
        ],
        quests: [
          { title: "Das Gesicht unter den Masken", description: "Jahrelang trug der Held jede Maske glaubhaft, log sich aus jeder Lage und durchschaute zugleich die Lügen anderer. Doch über all den Rollen ist das eigene Gesicht verschwommen. Nun treibt es ihn, das wahre Ich unter den Masken wiederzufinden, ehe er der eigenen Geschichte selbst nicht mehr zu trauen vermag.", hooks: ["geheimnis","schicksal"] },
          { title: "Menschen finden die das Echte sehen", description: "Wer ständig täuscht, wird selten durchschaut, doch der Held zahlt dafür mit Einsamkeit. Er sehnt sich nach Menschen, die das Echte hinter der glatten Fassade erkennen und trotzdem bleiben. Statt beim nächsten Wort ertappt zu werden, will er jene finden, denen er die Wahrheit anvertrauen und wirklich vertrauen kann.", hooks: ["glaube","stadt"] },
        ]
      },
      {
        text: "unstillbar neugierig", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "kennt die richtige Frage", hooks: ["wissen"] },
          { text: "fragt im richtigen Moment", hooks: ["wissen","stadt"] },
          { text: "keine Gerüchte entgehen mir", hooks: ["stadt","geheimnis"] },
          { text: "merkt sich jede Einzelheit", hooks: ["wissen"] },
        ],
        weaknessTags: [
          { text: "verliert sich in Details", hooks: ["wissen","geheimnis"] },
          { text: "steckt die Nase in Fremdes", hooks: ["geheimnis","außenseiter"] },
        ],
        quests: [
          { title: "Der Wahrheit auf den Grund gehen", description: "Keine Frage lässt der Held unbeantwortet, kein Gerücht entgeht ihm, und jede Einzelheit prägt sich ihm ein. Wo andere achtlos vorübergehen, bohrt er weiter, bis die Wahrheit selbst vor ihm liegt. Er will den Dingen auf den Grund gehen und mit eigenen Augen sehen, auch wenn er sich dabei leicht in Details verliert.", hooks: ["wissen","geheimnis"] },
          { title: "Ein Rätsel das mich nicht loslässt", description: "Ein Geheimnis hat sich in den Helden verbissen und lässt ihn nicht mehr los. Alle anderen winken ab oder fürchten die Antwort, doch gerade das schürt seine Neugier nur. Frage um Frage folgt er dem Rätsel, getrieben von dem Drang, jenes eine Geheimnis zu lösen, an das sich sonst niemand heranwagt.", hooks: ["geheimnis","schicksal"] },
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
          { text: "vergisst die eigenen Sorgen", hooks: ["verlust","glaube"] },
        ],
        quests: [
          { title: "Licht in dunkle Räume bringen", description: "In einfühlsamer Stille spürt der Held, wo Mut fehlt, und schenkt mit gutem Rat und ruhiger Zuversicht neue Hoffnung. Er trägt Licht in die dunkelsten Räume und richtet auf, was zu zerbrechen droht. Solange irgendwo ein Funke Trost gebraucht wird, will er ihn entzünden, denn fremde Verzagtheit drückt schwer auf sein Gemüt.", hooks: ["glaube","macht"] },
          { title: "Auch für mich selbst da sein", description: "Stets gibt der Held anderen Halt und vergisst dabei die eigenen Sorgen, bis die fremde Misstimmung ihn selbst auszehrt. Nun erkennt er, dass auch sein Herz Pflege braucht. Mühsam lernt er, ebenso für sich selbst da zu sein, wie er es seit jeher für alle anderen gewesen ist.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "gefährlich gutgläubig", hooks: ["außenseiter","schicksal"],
        powerTags: [
          { text: "sieht das Gute im Menschen", hooks: ["glaube"] },
          { text: "macht Mut zum Aufstehen", hooks: ["glaube","natur"] },
          { text: "trägt keinen Groll", hooks: ["glaube"] },
          { text: "gewinnt schnell Vertrauen", hooks: ["glaube","stadt"] },
        ],
        weaknessTags: [
          { text: "ausnutzbar", hooks: ["außenseiter"] },
          { text: "läuft in offene Fallen", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "Vertrauen ohne Reue lernen", description: "Der Held sieht das Gute in jedem Menschen, trägt keinen Groll und gewinnt rasch Vertrauen, doch genau das führt ihn allzu oft in offene Fallen. Nun will er lernen, sein Vertrauen klüger zu schenken, ohne dabei kalt und misstrauisch zu werden. Er sucht den schmalen Pfad zwischen Offenheit und Vorsicht.", hooks: ["außenseiter","schicksal"] },
          { title: "An die Güte glauben", description: "Mancher hält die Gutgläubigkeit des Helden für Schwäche und nutzt sie schamlos aus. Doch er weigert sich, deshalb am Menschen zu verzweifeln. Mit jeder Seele, der er Mut macht, will er beweisen, dass gelebtes Vertrauen die Welt tatsächlich besser macht, und so seinen Glauben an die Güte gegen alle Enttäuschung verteidigen.", hooks: ["glaube","außenseiter"] },
        ]
      },
      {
        text: "das ruhige Auge im Sturm", hooks: ["natur","macht"],
        powerTags: [
          { text: "behält die Ruhe", hooks: ["natur"] },
          { text: "stellt sich dem Konflikt", hooks: ["kampf","glaube"] },
          { text: "ordnet das Chaos", hooks: ["natur","macht"] },
          { text: "gibt anderen Halt", hooks: ["glaube","natur"] },
        ],
        weaknessTags: [
          { text: "staut alles in sich auf", hooks: ["verlust","natur"] },
          { text: "wirkt unnahbar kühl", hooks: ["außenseiter","natur"] },
        ],
        quests: [
          { title: "Frieden stiften wo Streit tobt", description: "Wenn um den Helden herum alles aufbraust, bleibt er ruhig und ordnet das Chaos mit klarem Kopf. Er stellt sich dem Konflikt, statt ihm auszuweichen, und gibt den Aufgebrachten Halt. Zum ruhigen Punkt will er werden, an dem sich die Streitenden sammeln und endlich wieder Frieden möglich wird.", hooks: ["natur","macht"] },
          { title: "Den eigenen Sturm beruhigen", description: "Nach außen wirkt der Held kühl und gefasst, doch in seinem Inneren staut sich alles auf, was er für andere besänftigt. Der eigene Sturm tobt ungesehen weiter. Nun erkennt er, dass er nicht ewig nur Fels für die anderen sein kann, und lernt, auch für sich selbst da zu sein.", hooks: ["natur","verlust"] },
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
          { text: "macht sich Feinde mit Worten", hooks: ["außenseiter","kampf"] },
        ],
        quests: [
          { title: "Wahrheit gegen Mächtige aussprechen", description: "Der Held sucht die Wahrheit und spricht aus, was alle denken, doch keiner zu sagen wagt. Von keiner Macht lässt er sich einschüchtern, und er durchschaut jede Lüge. Gerade dort, wo es weh tut, will er das Unbequeme aussprechen, auch wenn ihm seine schonungslose Offenheit mächtige Feinde schafft.", hooks: ["außenseiter","macht"] },
          { title: "Treu bleiben koste es was es wolle", description: "Lügen und Schmeicheln liegen dem Helden nicht; lieber macht er sich Feinde, als sich selbst zu verraten. Mag ihn seine Ehrlichkeit teuer zu stehen kommen, er weicht nicht von dem ab, was er für richtig hält. Sich selbst treu zu bleiben ist sein Gelübde, koste es, was es wolle.", hooks: ["glaube","außenseiter"] },
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
          { text: "macht alles ins Lächerliche", hooks: ["außenseiter","stadt"] },
          { text: "sentimental im falschen Moment", hooks: ["verlust"] },
        ],
        quests: [
          { title: "Mit einem Scherz die Stimmung wenden", description: "Selbst in der dunkelsten Stunde findet der Held noch einen Lacher und eine frohe Geschichte. Wo Verzweiflung lähmt, wendet er mit einem Scherz die Stimmung und bringt Licht in finstere Räume. Er weiß, dass ein rechtzeitiges Lachen Mauern niederreißt, die kein ernstes Wort je überwinden könnte.", hooks: ["glaube","macht"] },
          { title: "Ernst genommen werden", description: "Weil der Held alles ins Lächerliche zieht, hält man ihn oft für einen bloßen Narren und nimmt ihn nicht ernst. Doch hinter dem Spott verbirgt sich mehr, als die meisten ahnen. Nun will er beweisen, dass unter dem Lachen ein scharfer Verstand und ein fühlendes Herz wohnen, die Beachtung verdienen.", hooks: ["stadt","außenseiter"] },
        ]
      },
      {
        text: "hält Geheimnisse wie Atemluft", hooks: ["geheimnis"],
        powerTags: [
          { text: "verrät niemals ein Wort", hooks: ["geheimnis","glaube"] },
          { text: "keine Gerüchte entgehen mir", hooks: ["stadt","geheimnis"] },
          { text: "behält die Ruhe", hooks: ["natur"] },
          { text: "liest Räume sofort", hooks: ["stadt","wissen"] },
        ],
        weaknessTags: [
          { text: "trägt zu viele Lasten allein", hooks: ["geheimnis","verlust"] },
          { text: "erpressbar durch das Gewusste", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "Ein anvertrautes Geheimnis schützen", description: "Kein Wort verrät der Held, und doch entgeht ihm kein Gerücht; ruhig liest er jeden Raum und behält für sich, was andere preisgeben. Nun ist ihm ein Geheimnis anvertraut, das schwer auf ihm lastet. Gegen jeden Druck und jede Erpressung will er es schützen, denn ein gegebenes Wort ist ihm heilig.", hooks: ["geheimnis","glaube"] },
          { title: "Jemandem das ganze Geheimnis sein", description: "Der Held trägt so viele fremde Geheimnisse, dass die Last ihn allein zu erdrücken droht und ihn angreifbar macht. Tief sehnt er sich danach, einem einzigen Menschen alles offenbaren zu können, ohne Furcht vor Verrat. Er sucht jenen einen, dem er restlos vertrauen und das ganze Geheimnis sein darf.", hooks: ["glaube","stadt"] },
        ]
      },
      {
        text: "verhängnisvoll neugierig", hooks: ["wissen","geheimnis"],
        powerTags: [
          { text: "kennt die richtige Frage", hooks: ["wissen"] },
          { text: "spürt dem Verborgenen nach", hooks: ["geheimnis","wissen"] },
          { text: "fragt im richtigen Moment", hooks: ["wissen","stadt"] },
          { text: "gibt nie vorzeitig auf", hooks: ["glaube","schicksal"] },
        ],
        weaknessTags: [
          { text: "weckt schlafende Hunde", hooks: ["geheimnis","schicksal"] },
          { text: "verliert sich in Details", hooks: ["wissen","geheimnis"] },
        ],
        quests: [
          { title: "Ein gefährliches Geheimnis lüften", description: "Der Held kennt die richtige Frage und spürt dem Verborgenen nach, auch wenn es besser begraben bliebe. Etwas Dunkles lockt ihn, und sein Drang, niemals vorzeitig aufzugeben, treibt ihn immer tiefer. Er wird graben, bis er die gefährliche Wahrheit mit eigenen Augen erblickt, mag er damit auch schlafende Hunde wecken.", hooks: ["geheimnis","schicksal"] },
          { title: "Die Folgen meiner Fragen tragen", description: "Die Neugier des Helden hat etwas ans Licht gezerrt, das nun nicht mehr ruht und Gefahr über andere bringt. Doch er weigert sich davonzulaufen. Für das, was seine Fragen aufgedeckt haben, will er geradestehen und die Folgen tragen, statt feige zu leugnen, dass er diese Tür geöffnet hat.", hooks: ["wissen","verlust"] },
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
          { title: "Ich finde Anwendung für meine Kunst", description: "Der Held kennt jede Spur im Wald und liest das Land wie andere ein Buch, doch fern der Wildnis fühlt sich dieses Können nutzlos an. Misstrauisch beäugt von jenen, die seine Gabe nicht verstehen, sucht er einen Ort, an dem sein Auge gebraucht wird. Irgendwo wartet eine Fährte, die seinem Talent endlich einen Sinn gibt.", hooks: ["natur","handwerk"] },
          { title: "Ich folge der ältesten Spur", description: "Wo andere nur Erde und Laub sehen, erkennt der Held Zeichen, die niemand mehr zu deuten weiß. Eine uralte Fährte zieht ihn fort, tiefer ins Land, als je ein Mensch gegangen ist. Sein Gespür für Fallen und seine untrügliche Orientierung sind alles, was ihn dort draußen leitet, doch das Rätsel lässt ihm keine Ruhe.", hooks: ["natur","geheimnis"] },
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
          { title: "Ich werde der Beste in meinem Fach", description: "An der Esse fühlt sich der Held lebendig, der Hammer in der Hand und der Geruch von heißem Stahl in der Luft. Er kennt jedes Material und erkennt gute Arbeit auf den ersten Blick, doch das genügt ihm nicht. Wenn die Leute künftig an Schmiedekunst denken, sollen sie zuerst seinen Namen nennen, und für dieses Ziel duldet er keinen Pfusch.", hooks: ["handwerk"] },
          { title: "Ich baue etwas das die Zeit besteht", description: "Mit festem Griff und meisterhafter Hand formt der Held Stahl bis zur vollendeten Klinge. Doch ein Werk soll mehr sein als der nächste Auftrag, der wieder vergeht. Er sehnt sich danach, eine Klinge zu schmieden, die noch aufrecht steht, wenn er selbst längst Asche ist. Etwas Bleibendes zu erschaffen, treibt ihn an die Esse zurück.", hooks: ["handwerk"] },
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
          { title: "Ich baue mir einen ehrlichen Platz", description: "Flinke Finger und leise Schritte haben den Helden bislang durchgebracht, doch das Recht hat ihn dabei nie geschützt, und überall folgen ihm misstrauische Blicke. Müde des Lebens aus fremden Taschen sehnt er sich nach etwas Eigenem. Nur das, was er ohne Diebstahl erwirbt, soll ihm wirklich gehören, und diesen Platz will er sich endlich erkämpfen.", hooks: ["außenseiter","fahrend"] },
          { title: "Ich begleiche jede alte Schuld", description: "Der Held kennt jeden Schleichweg und schlüpft ungesehen an jeder Wache vorbei, doch hinter ihm liegt eine Spur bestohlener Menschen. Das Gewicht dieser alten Taten lässt ihn nicht los. Was er einst nahm, will er auf seine eigene Weise zurückgeben, heimlich oder offen. Erst wenn die Rechnung beglichen ist, kann er wirklich frei atmen.", hooks: ["verlust","stadt"] },
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
          { title: "Ich rette mit meinem Handwerk ein Leben", description: "Mit ruhigen Händen und dem Wissen um heilende Kräuter steht der Held an manchem Krankenlager, das andere längst aufgegeben haben. Er kann keine Bitte abschlagen, auch wenn ihn das oft an seine Grenzen bringt. Heute aber zählt nur eines: dass seine Hände das Richtige tun und ein Mensch durch sie weiterlebt, statt zu vergehen.", hooks: ["handwerk","wissen"] },
          { title: "Ich gebe mein Wissen weiter", description: "Jahre am Krankenbett haben dem Helden einen fachkundigen Blick und einfache, doch verlässliche Heilkunst geschenkt. Er weiß, dass kein Mensch ewig die Hände rührt, und fürchtet, dass mit ihm auch sein Wissen vergeht. Was er über Wunden und Kräuter gelernt hat, soll nicht mit ihm sterben, sondern in jüngeren Händen weiterheilen, lange nach seiner Zeit.", hooks: ["handwerk","wissen"] },
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
          { title: "Ich finde den sichersten Kurs", description: "Der Held liest die Karte und die Zeichen des Wetters, als spräche das Meer zu ihm allein. Ohne sein Schiff fühlt er sich verloren, denn das Deck ist die einzige Welt, die er wirklich kennt. Ruhig auch im wildesten Sturm trägt er die Verantwortung für jede Seele an Bord. Sein einziges Ziel ist es, Schiff und Mannschaft heil heimzubringen.", hooks: ["fahrend","handwerk"] },
          { title: "Ich segle ein Gewässer das keiner kennt", description: "Jeden Knoten und jede Strömung beherrscht der Held, doch die vertrauten Routen langweilen ihn längst. Hinter dem letzten Riff, das die Karten kennen, ahnt er einen Weg, den noch niemand befuhr. Die Ruhe in der Krise und sein Gespür fürs Wetter sollen ihn dorthin tragen, wo das Meer seine letzten Geheimnisse hütet, koste es, was es wolle.", hooks: ["fahrend","geheimnis"] },
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
          { title: "Ich baue den vollkommenen Bogen", description: "Der Held kennt jedes Holz und arbeitet schnell und ohne Fehler, doch über der Werkbank vergisst er manchmal die Welt um sich her. Ein Gedanke lässt ihn nicht los: ob seine Hände schaffen können, was keinem anderen gelingt. Nicht für Lob, sondern aus reinem Drang sucht er den einen, vollkommenen Bogen, der all sein Können in sich vereint.", hooks: ["handwerk"] },
          { title: "Ich bewahre mein Handwerk vor dem Vergessen", description: "Mit geübter Hand fertigt der Held Bögen, wie sie kaum noch jemand zu bauen versteht. Er sieht, wie das alte Wissen ringsum verstummt, und das schmerzt ihn mehr als jeder Pfusch. Solange er Bögen baut und sein Können an andere weitergibt, bleibt die Kunst lebendig. Diese Kette nicht abreißen zu lassen, ist ihm zur stillen Pflicht geworden.", hooks: ["handwerk","verlust"] },
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
          { title: "Ich mache mein Gewerbe geachtet", description: "Tag für Tag steht der Held am Fluss bei der verlässlichen, doch wenig geliebten Arbeit des Gerbens, und mancher rümpft die Nase, wenn er vorübergeht. Er kennt jedes Material und den Preis jedes Rohstoffs, doch Achtung bringt ihm das nicht. Er will beweisen, dass sein Gewerbe ehrbar ist und niemand mehr auf das herabsieht, was seine Hände schaffen.", hooks: ["handwerk","stadt"] },
          { title: "Ich finde Sinn in meiner Arbeit", description: "Mit sicherem Maß und ruhiger Routine verwandelt der Held rohe Häute in festes Leder, doch im Verhandeln war er nie geschickt. Allmählich fragt er sich, ob der bloße Gewinn alles sein kann, was bleibt. Sein Leder soll mehr tragen als die nächste Münze; es soll einem höheren Zweck dienen. Diesen tieferen Sinn in seinem Werk zu finden, treibt ihn um.", hooks: ["handwerk"] },
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
          { title: "Ich bewahre die alten Rezepte", description: "In ihrer gut gefüllten Vorratskammer hütet die Heldin Rezepte, die schon ihre Vorfahren brauten und die sonst niemand mehr kennt. Vertieft in ihre verlässliche Arbeit, vergisst sie oft die Welt jenseits des Sudkessels. Doch der Gedanke, dass dieses Erbe mit ihr verschwinden könnte, lässt sie nicht ruhen. Die alten Rezepte zu bewahren, ist ihr ein heiliges Versprechen geworden.", hooks: ["handwerk","verlust"] },
          { title: "Ich braue ein einziges Meisterstück", description: "Die Heldin kennt jedes Rezept und erkennt gutes Handwerk sofort, doch ein Traum übersteigt die tägliche Routine. Einmal will sie ein Gebräu schaffen, das alle anderen übertrifft und von dem die Leute noch lange erzählen. Versunken in ihre Kunst feilt sie an dieser einen Mischung. Dieses eine Meisterstück zu vollenden, ist das Ziel, dem sie alles unterordnet.", hooks: ["handwerk"] },
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
          { title: "Ich finde die seltenste Pflanze", description: "Die Heldin kennt jede Spur im Wald und trägt das Wissen der Alten über verborgene Heilpflanzen in sich. Fremden begegnet sie mit Misstrauen, denn die Wildnis ist die einzige Welt, der sie wirklich traut. Doch ein Kraut fehlt noch, das ihre Sammlung und ihr Wissen vollkommen machen würde. Diese seltenste aller Pflanzen aufzuspüren, lockt sie tiefer ins Unbekannte.", hooks: ["natur","geheimnis"] },
          { title: "Ich gebe mein Pflanzenwissen weiter", description: "Wo andere verhungern würden, findet die Heldin Nahrung und Heilung, denn die Pflanzen sind ihr vertraut wie alte Freunde. Sie spürt, dass dieses Wissen zu kostbar ist, um mit ihr in der Wildnis zu vergehen. Was sie über Kräuter und ihre Kräfte lernte, soll andere Hände heilen lehren. Ihr Erbe weiterzutragen, überwindet selbst ihr tiefes Misstrauen.", hooks: ["natur","wissen"] },
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
          { title: "Ich überbringe die wichtigste Botschaft", description: "Mit leichtem Gepäck und untrüglichem Orientierungssinn eilt der Held über jeden Schleichweg, getrieben vom nächsten Auftrag. Ruhig auch in Gefahr, hat er schon manche Nachricht durch Sturm und Hinterhalt getragen. Doch diese eine Botschaft wiegt schwerer als alle zuvor: Sie muss ankommen, koste es, was es wolle. Sie sicher ans Ziel zu bringen, ist ihm zum einzigen Gedanken geworden.", hooks: ["fahrend","handwerk"] },
          { title: "Ich finde einen Ort zum Bleiben", description: "Nie lange am selben Ort, hetzt der Held von Auftrag zu Auftrag, immer die nächste Strecke vor Augen. Seine schnellen Füße haben ihn weit getragen, doch ein Heim hat er dabei nie gefunden. Heimlich sehnt er sich nach einem Platz, an dem sein rastloser Lauf endlich endet. Irgendwo da draußen, glaubt er, wartet ein Ort, an dem er bleiben darf.", hooks: ["fahrend","verlust"] },
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
          { title: "Ich baue das schwierigste Stück", description: "Mit dem vertrauten Werkzeug seines Handwerks arbeitet der Held ungewöhnlich präzise und fertigt selbst im Halbdunkel, was anderen misslingt. Seine Berufsehre macht ihn kompromisslos, und Pfusch erträgt er nicht. Nun reizt ihn das schwierigste Stück, das er sich denken kann, nicht des Lobes wegen, sondern weil er wissen muss, ob seine Hände der Aufgabe gewachsen sind.", hooks: ["handwerk"] },
          { title: "Ich schaffe ein Werk für die Ewigkeit", description: "Der Held repariert, was andere längst verworfen haben, und fügt das Holz mit unbeirrbarer Genauigkeit. Doch all die täglichen Arbeiten vergehen, und das nagt an ihm. Einmal will er etwas tischlern, das die Zeit überdauert und noch aufrecht steht, wenn er selbst nicht mehr ist. Ein bleibendes Werk zu hinterlassen, ist der Antrieb, der seine kompromisslose Sorgfalt befeuert.", hooks: ["handwerk"] },
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
          { title: "Ich wage den unmöglichen Tanz", description: "Auf den Jahrmärkten balanciert die Heldin mit eingespielter Schrittfolge und sicherem Gleichgewicht hoch über der staunenden Menge. Doch ein einziger Sturz könnte alles beenden, und das Wandern von Markt zu Markt zehrt an ihr. Einmal will sie das Seil dort spannen, wo es noch niemand wagte. Diesen unmöglichen Tanz zu vollbringen, lockt sie stärker als jede Furcht vor dem Fall.", hooks: ["handwerk","fahrend"] },
          { title: "Ich finde Beifall der wirklich zählt", description: "Flink und gelenkig zieht die Heldin mit einnehmendem Auftritt die Blicke auf sich, und der Jubel der Menge begleitet sie von Ort zu Ort. Doch der Applaus verklingt rasch und lässt sie seltsam leer zurück. Hinter all dem Lärm sucht sie nach Augen, die nicht nur die Vorführung, sondern sie selbst wirklich sehen. Diesen einen wahren Beifall zu finden, treibt sie weiter.", hooks: ["fahrend","verlust"] },
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
          { text: "trägt schwere Lasten", hooks: ["natur","handwerk"] },
          { text: "bricht durch Hindernisse", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "auffällig für Feinde", hooks: ["schicksal","kampf"] },
          { text: "schwer und langsam", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "Ich beweise meine Stärke", description: "Wenn der Held einen Wagen aus dem Schlamm hebt oder ein verklemmtes Tor aufbricht, sehen andere nur die rohe Kraft. Doch er weiß, dass mehr in ihm steckt als bloße Muskeln. Mit jeder Tat will er zeigen, dass hinter dem festen Griff auch ein Kopf und ein Herz wohnen, die zählen.", hooks: ["kampf","schicksal"] },
          { title: "Ich schütze die Schwachen", description: "Die unbändige Kraft, die dem Helden gegeben ist, fühlt sich erst dann richtig an, wenn sie einem anderen dient. Wo ein Schwächerer zu Boden gedrückt wird, stellt er sich dazwischen und bricht durch jedes Hindernis. Seine breiten Schultern sollen ein Schild für jene sein, die sich allein nicht wehren können.", hooks: ["glaube","kampf"] },
        ]
      },
      {
        text: "akrobatische Beweglichkeit", hooks: ["handwerk","natur"],
        powerTags: [
          { text: "klettert wie eine Katze", hooks: ["natur","handwerk"] },
          { text: "springt höher als andere", hooks: ["schicksal","natur"] },
          { text: "leichter Schritt", hooks: ["handwerk","geheimnis"] },
          { text: "fällt nie", hooks: ["handwerk","natur"] },
        ],
        weaknessTags: [
          { text: "erschöpft sich rasch", hooks: ["schicksal","verlust"] },
          { text: "tollkühn ohne Maß", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Ich meistere das Unmögliche", description: "Wände, Klüfte und Abgründe sind für den Helden nur Einladungen, denn er klettert wie eine Katze und springt höher als alle anderen. Irgendwo wartet ein Sprung, den noch niemand zu wagen gewagt hat. Diesen Weg zu gehen treibt ihn an, auch wenn seine tollkühne Art ihn manchmal weiter führt, als klug wäre.", hooks: ["schicksal","handwerk"] },
          { title: "Ich finde den höchsten Gipfel", description: "Was andere für unerreichbar halten, erkennt der Held als seine eigentliche Prüfung. Mit leichtem Schritt und sicherem Griff sucht er den Punkt, an dem die Welt unter ihm liegt und kein Mensch je stand. Erst auf dem höchsten Gipfel, glaubt er, wird er wirklich erfahren, wozu er geboren ist.", hooks: ["natur","fahrend"] },
        ]
      },
      {
        text: "unheimlich schön", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "betörende Schönheit", hooks: ["schicksal","geheimnis"] },
          { text: "zieht Blicke an", hooks: ["schicksal","adel"] },
          { text: "unvergesslicher Anblick", hooks: ["schicksal","stadt"] },
          { text: "gewinnt Sympathie sofort", hooks: ["stadt","schicksal"] },
        ],
        weaknessTags: [
          { text: "wird beneidet", hooks: ["schicksal","stadt"] },
          { text: "zieht unliebsame Neugier an", hooks: ["schicksal","geheimnis"] },
        ],
        quests: [
          { title: "Ich werde nicht nur für mein Gesicht gesehen", description: "Überall ziehen die Blicke dem Helden hinterher, gefangen von einer betörenden Schönheit, die er sich nie ausgesucht hat. Doch er sehnt sich danach, für seinen Mut, seinen Verstand und seine Taten geachtet zu werden. Hinter dem unvergesslichen Anblick steckt ein ganzer Mensch, und genau den will er den anderen endlich zeigen.", hooks: ["schicksal","außenseiter"] },
          { title: "Ich enthülle das Geheimnis meiner Herkunft", description: "In der Schönheit des Helden liegt etwas Fremdartiges, das mehr Neugier weckt, als ihm lieb ist. Manche Blicke verraten Ehrfurcht, andere kaum verhohlenen Neid. Er spürt, dass sein Antlitz eine Geschichte erzählt, die er selbst nicht kennt, und er wird nicht ruhen, bis er weiß, woher dieser seltsame Glanz wirklich stammt.", hooks: ["geheimnis","schicksal"] },
        ]
      },
      {
        text: "wache Beobachtungsgabe", hooks: ["schicksal","magie"],
        powerTags: [
          { text: "vorausschauend", hooks: ["schicksal","magie"] },
          { text: "spürt nahende Gefahr", hooks: ["magie","schicksal"] },
          { text: "liest Räume sofort", hooks: ["schicksal","stadt"] },
          { text: "übersieht kein Detail", hooks: ["wissen","schicksal"] },
        ],
        weaknessTags: [
          { text: "verliert sich in Details", hooks: ["wissen","geheimnis"] },
          { text: "sieht zu viel", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Ich deute die Zeichen richtig", description: "Dem Helden entgeht kein Detail, und schon bevor andere etwas ahnen, spürt er die nahende Gefahr. Doch zu sehen ist nicht dasselbe wie zu verstehen, und manchmal verliert er sich in den vielen kleinen Hinweisen. Er will lernen, die Zeichen richtig zu deuten, ehe es zu spät ist und das Unheil bereits geschehen kann.", hooks: ["schicksal","wissen"] },
          { title: "Ich warne vor dem kommenden Unheil", description: "Während die anderen sorglos in ihren Tag hineinleben, liest der Held die Räume und erkennt die Gefahr, die niemand sehen will. Sein vorausschauender Blick ist Gabe und Last zugleich. Er nimmt es auf sich, die Warnung auszusprechen, auch wenn man ihm nicht glaubt, denn lieber unbequem mahnen als schweigend ins Verderben gehen.", hooks: ["magie","schicksal"] },
        ]
      },
      {
        text: "ausdauernder Schwimmer", hooks: ["natur","schicksal"],
        powerTags: [
          { text: "taucht tief und lange", hooks: ["natur","schicksal"] },
          { text: "trotzt jeder Strömung", hooks: ["natur","kampf"] },
          { text: "fühlt sich im Wasser zuhause", hooks: ["natur","schicksal"] },
          { text: "unermüdliche Beine", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "ruhelos an Land", hooks: ["natur","außenseiter"] },
          { text: "trotzt der Gefahr zu lange", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Ich durchquere die tiefen Gewässer", description: "Im Wasser fühlt sich der Held zuhause, taucht tief und lange und trotzt jeder Strömung, die andere längst fortgerissen hätte. Jenseits des sicheren Ufers liegt etwas, das nur er erreichen kann. Dieser Ruf der Tiefe lässt ihn nicht los, auch wenn er an Land ruhelos bleibt und der Gefahr im Strudel zu lange standhält.", hooks: ["natur","fahrend"] },
          { title: "Ich berge was im Wasser verloren ging", description: "Auf dem Grund der dunklen Tiefe ruht etwas, nach dem der Held tauchen muss, mag es ein verlorener Schatz, ein Mensch oder eine Wahrheit sein. Seine unermüdlichen Beine und der lange Atem tragen ihn dorthin, wo niemand sonst hinabsteigt. Erst wenn er das Verlorene geborgen hat, findet die Ruhelosigkeit in ihm ein Ende.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "unerschütterlich", hooks: ["glaube","schicksal"],
        powerTags: [
          { text: "unermüdlich", hooks: ["schicksal","glaube"] },
          { text: "unerschütterliche Konzentration", hooks: ["handwerk","glaube"] },
          { text: "behält die Ruhe", hooks: ["natur","glaube"] },
          { text: "unerschütterlich heiter", hooks: ["schicksal","kampf"] },
        ],
        weaknessTags: [
          { text: "kennt ihre Grenzen nicht", hooks: ["schicksal","verlust"] },
          { text: "starr im Urteil", hooks: ["glaube","außenseiter"] },
        ],
        quests: [
          { title: "Ich halte stand wenn alle weichen", description: "Wenn andere die Nerven verlieren und davonlaufen, bleibt der Held mit unerschütterlicher Konzentration stehen. Wenn alles um ihn zerbricht, will er der sein, der nicht weicht. Diese unbeugsame Festigkeit ist sein Stolz, auch wenn sie ihn manchmal seine eigenen Grenzen vergessen lässt und ihn dort verharren heißt, wo Klugheit zum Rückzug riete.", hooks: ["glaube","kampf"] },
          { title: "Ich bewahre die Ruhe im Sturm", description: "Mitten im Chaos, wo Panik und Streit toben, sucht der Held den festen Punkt und findet ihn in sich selbst. Seine unerschütterliche Heiterkeit gibt den anderen Halt, wenn ihnen der Boden unter den Füßen schwindet. Er will jener ruhige Anker sein, an dem sich die Aufgewühlten festklammern, selbst wenn ihn das starr und unnachgiebig erscheinen lässt.", hooks: ["glaube","natur"] },
        ]
      },
      {
        text: "leicht zu übersehen", hooks: ["geheimnis","schicksal"],
        powerTags: [
          { text: "geht in der Menge unter", hooks: ["außenseiter","geheimnis"] },
          { text: "leise Schritte", hooks: ["geheimnis","stadt"] },
          { text: "unbemerkt zuhören", hooks: ["geheimnis","stadt"] },
          { text: "unauffällig", hooks: ["außenseiter","geheimnis"] },
        ],
        weaknessTags: [
          { text: "wird leicht vergessen", hooks: ["schicksal","verlust"] },
          { text: "selten ernst genommen", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "Ich erfahre was niemand sagen will", description: "Niemand achtet auf den Helden, denn er geht in der Menge unter und verschwindet hinter leisen Schritten. Doch was für andere eine Kränkung wäre, macht er sich zunutze. Ungesehen lauscht er an Türen und in Winkeln und erfährt im Verborgenen genau das, was vor allen anderen sorgsam verschwiegen bleibt.", hooks: ["geheimnis","stadt"] },
          { title: "Ich werde endlich gesehen", description: "Sein Leben lang wurde der Held übersehen, leicht vergessen und selten ernst genommen, als wäre er kaum vorhanden. Doch tief in ihm wächst der Wunsch, einmal wirklich zu zählen. Er sehnt sich nach dem einen Augenblick, in dem ein Blick auf ihm ruht und erkennt, dass auch der Unauffällige ein eigenes Gewicht besitzt.", hooks: ["außenseiter","schicksal"] },
        ]
      },
      {
        text: "feines Gehör", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "hört den leisesten Laut", hooks: ["schicksal","natur"] },
          { text: "lauscht durch Wände", hooks: ["geheimnis","stadt"] },
          { text: "erwacht beim leisesten Geräusch", hooks: ["kampf","natur"] },
          { text: "scharfe Sinne", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "geplagt von Lärm", hooks: ["schicksal","verlust"] },
          { text: "abgelenkt durch Geräusche", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Ich erlausche das verborgene Wort", description: "Der Held hört den leisesten Laut und lauscht durch Wände, wo andere nur Stille wahrnehmen. Irgendwo wird ein Geheimnis nur im Flüsterton weitergegeben, und genau dieses Wort will er vernehmen. Seine scharfen Sinne führen ihn zu dem, was im Verborgenen gesprochen wird, auch wenn ihn der Lärm der Welt sonst quält.", hooks: ["geheimnis","schicksal"] },
          { title: "Ich folge dem Klang in die Ferne", description: "Ein Ruf dringt zum Helden, den außer ihm niemand zu hören vermag, und er weist ihm den Weg. Mit feinem Gehör erwacht er beim leisesten Geräusch und folgt dem fernen Klang, wohin er auch führt. Etwas oder jemand sucht ihn, davon ist er überzeugt, und er wird der Spur des Klanges bis ans Ende nachgehen.", hooks: ["natur","fahrend"] },
        ]
      },
      {
        text: "guter Menschenkenner", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "durchschaut eine Lüge", hooks: ["stadt","geheimnis"] },
          { text: "hört Falschheit heraus", hooks: ["schicksal","stadt"] },
          { text: "spürt Stimmungen in Räumen", hooks: ["schicksal","stadt"] },
          { text: "erkennt verborgene Not", hooks: ["glaube","wissen"] },
        ],
        weaknessTags: [
          { text: "vertraut dem Urteil zu sehr", hooks: ["schicksal","verlust"] },
          { text: "durchschaut auch Freunde", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Ich entlarve den Verräter", description: "Der Held hört die Falschheit aus jedem Wort heraus und durchschaut jede Lüge an einem Zucken im Blick. Jemand in der eigenen Mitte spielt ein doppeltes Spiel, das spürt er deutlich. Er nimmt es auf sich, den Verräter zu entlarven, ehe dessen Maske weiteren Schaden anrichtet, auch wenn sein scharfes Urteil ihn einsam macht.", hooks: ["geheimnis","schicksal"] },
          { title: "Ich finde den wahren Freund", description: "Weil der Held verborgene Not erkennt und Stimmungen in Räumen erspürt, sieht er hinter die Masken der Menschen. Doch wer alle durchschaut, misstraut leicht auch denen, die es ehrlich meinen. Unter all den Gesichtern sucht er den einen, dessen Freundschaft echt ist, damit sein wachsames Herz endlich jemandem ohne Zweifel vertrauen kann.", hooks: ["glaube","stadt"] },
        ]
      },
      {
        text: "Augen wie ein Falke", hooks: ["natur","schicksal"],
        powerTags: [
          { text: "sieht im Halbdunkel", hooks: ["natur","geheimnis"] },
          { text: "erkennt das Ferne", hooks: ["natur","schicksal"] },
          { text: "scharfer Blick fürs Detail", hooks: ["wissen","handwerk"] },
          { text: "erspäht jede Bewegung", hooks: ["kampf","natur"] },
        ],
        weaknessTags: [
          { text: "geblendet von hellem Licht", hooks: ["schicksal","verlust"] },
          { text: "vertraut nur dem Auge", hooks: ["schicksal","außenseiter"] },
        ],
        quests: [
          { title: "Ich erspähe was verborgen bleibt", description: "Mit Augen wie ein Falke erkennt der Held das Ferne und sieht selbst im Halbdunkel jede kleinste Bewegung. Was sich vor anderen verbirgt, kann sich vor ihm nicht verstecken. Diesen scharfen Blick will er nutzen, um das Verborgene aufzudecken, auch wenn ihn helles Licht blendet und er manchmal nur dem traut, was sein Auge sieht.", hooks: ["geheimnis","natur"] },
          { title: "Ich finde den fernen Weg", description: "Vom höchsten Punkt aus lässt der Held den Blick über das Land schweifen und erkennt den Pfad, den kein anderer ausmacht. Wo sich für die übrigen nur Wildnis erstreckt, zeichnet sich für sein scharfes Auge eine Route ab. Diesen fernen Weg zu finden treibt ihn an, denn er sieht das Ziel, lange bevor andere es ahnen.", hooks: ["natur","fahrend"] },
        ]
      },
      {
        text: "zäh wie Leder", hooks: ["schicksal","kampf"],
        powerTags: [
          { text: "trotzt Hitze und Kälte", hooks: ["natur","schicksal"] },
          { text: "heilt schnell", hooks: ["schicksal","magie"] },
          { text: "steckt Schläge weg", hooks: ["kampf","schicksal"] },
          { text: "übersteht jede Strapaze", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "ignoriert eigene Wunden", hooks: ["schicksal","verlust"] },
          { text: "mutet sich zu viel zu", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Ich überstehe die unwirtliche Wildnis", description: "Zäh wie Leder trotzt der Held Hitze und Kälte und steckt Strapazen weg, an denen andere zerbrechen würden. Dort, wo die Wildnis am erbarmungslosesten ist, will er beweisen, dass er durchhält. Jeder überstandene Tag bestätigt seinen eisernen Willen, auch wenn er dabei zu leicht über die eigenen Wunden hinwegsieht.", hooks: ["natur","schicksal"] },
          { title: "Ich halte durch bis zuletzt", description: "Solange noch ein Funke Atem in ihm ist, gibt der Held nicht auf, denn seine Heilung kommt schnell und sein Körper steckt jeden Schlag weg. Aufzugeben kennt er nicht; lieber mutet er sich zu viel zu, als einen Schritt zurückzuweichen. Bis zuletzt durchzuhalten ist sein stiller Schwur, der ihn aufrecht hält, wenn alles andere wankt.", hooks: ["kampf","glaube"] },
        ]
      },
      {
        text: "durchdringende Stimme", hooks: ["schicksal","macht"],
        powerTags: [
          { text: "übertönt jeden Lärm", hooks: ["schicksal","macht"] },
          { text: "bringt Menschen zum Schweigen", hooks: ["macht","stadt"] },
          { text: "Befehlston wirkt sofort", hooks: ["macht","kampf"] },
          { text: "ergreifender Gesang", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "kann sich nicht verstecken", hooks: ["schicksal","geheimnis"] },
          { text: "redet sich in Gefahr", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Ich gebe den Stummen eine Stimme", description: "Die durchdringende Stimme des Helden übertönt jeden Lärm und bringt selbst eine aufgebrachte Menge zum Schweigen. Wer sonst nicht gehört wird, soll durch ihn vernommen werden. Er leiht seine Kraft denen, die zu leise sind, um sich selbst Gehör zu verschaffen, auch wenn ihn diese Lautstärke nie wirklich verborgen bleiben lässt.", hooks: ["macht","glaube"] },
          { title: "Ich wende die Menge mit Worten", description: "Wenn der Befehlston des Helden erklingt, verstummen die Streitenden und wenden ihm das Ohr zu. Mit seiner Stimme allein, das spürt er, kann er den Lauf der Dinge ändern, ohne je das Schwert zu ziehen. Eine ergriffene Menge in eine neue Richtung zu lenken ist sein Antrieb, selbst wenn ihn das Reden bisweilen in Gefahr bringt.", hooks: ["macht","stadt"] },
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
          { text: "gefürchteter Gegner des Bösen", hooks: ["kampf","schicksal"] },
          { text: "Zeichen gegen das Böse", hooks: ["glaube","magie"] },
          { text: "unbeirrbar im Zweck", hooks: ["glaube"] },
          { text: "spürt nahende Finsternis", hooks: ["magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "Auftrag über Vernunft", hooks: ["glaube","schicksal"] },
          { text: "verhasst bei Dienern der Nacht", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "Ich treibe die Finsternis zurück", description: "In leuchtender Rüstung zieht der Held dorthin, wo der Schatten sich breitmacht und die Diener der Nacht ihn schon fürchten. Wo andere fliehen, stellt er sich der Finsternis entgegen und weicht keinen Schritt. Sein Zweck duldet keinen Zweifel: Solange er steht, gewinnt das Dunkel keinen Fußbreit Land.", hooks: ["glaube","kampf"] },
          { title: "Ich finde die Quelle des Bösen", description: "Der Held spürt das nahende Dunkel, doch jeden zurückgeschlagenen Schatten ersetzt ein neuer. Er ahnt, dass irgendwo ein Ursprung pulsiert, aus dem die Finsternis quillt. Geleitet von seinem Gespür folgt er der Spur bis zur Wurzel, denn erst wenn er die Quelle kennt, lässt sich das Böse wirklich bezwingen, statt nur ewig bekämpft.", hooks: ["schicksal","geheimnis"] },
        ]
      },
      {
        text: "Söldner auf Vertrag", hooks: ["glaube","handwerk"],
        powerTags: [
          { text: "Vertrag in der Hand", hooks: ["handwerk","macht"] },
          { text: "hält jede Abmachung", hooks: ["handwerk","glaube"] },
          { text: "unbestechlich durch Gold", hooks: ["glaube","macht"] },
          { text: "erfahrener Klingenkämpfer", hooks: ["kampf","handwerk"] },
          { text: "kennt den Preis jeder Klinge", hooks: ["handwerk","stadt"] },
        ],
        weaknessTags: [
          { text: "dem höchsten Gebot verpflichtet", hooks: ["macht","verlust"] },
          { text: "kein Freund ohne Sold", hooks: ["außenseiter","verlust"] },
        ],
        quests: [
          { title: "Ich erfülle den Vertrag bis zum letzten Wort", description: "Der Vertrag liegt in der Hand des Helden, und sein Wort ist so unbestechlich wie seine Klinge. Was er unterschrieben hat, das führt er aus, gleich wie der Wind sich dreht oder welcher Preis fällig wird. Eine Abmachung zu brechen käme ihm nie in den Sinn, denn ohne sie wäre seine Klinge nichts als Stahl ohne Sinn.", hooks: ["handwerk","glaube"] },
          { title: "Ich finde einen Herrn der mich verdient", description: "Der Held kennt den Preis jeder Klinge, auch den seiner eigenen, und das Gold allein wärmt ihn längst nicht mehr. Zu oft diente sein Schwert Sachen, die seiner unwürdig waren. Nun sucht er einen Auftrag und einen Herrn, für den seine Treue mehr bedeutet als bloßes Werkzeug, das dem höchsten Gebot gehört.", hooks: ["glaube","kampf"] },
        ]
      },
      {
        text: "Schwur dem Lehnsherrn", hooks: ["glaube","adel"],
        powerTags: [
          { text: "Banner meines Lehnsherrn", hooks: ["adel","kampf"] },
          { text: "mein Eid macht mich stark", hooks: ["glaube"] },
          { text: "trägt die Autorität ihres Hauses", hooks: ["adel","macht"] },
          { text: "kann Legitimität einfordern", hooks: ["macht","adel"] },
          { text: "kraftvoller Schwur", hooks: ["glaube","macht"] },
        ],
        weaknessTags: [
          { text: "an Befehle gebunden", hooks: ["glaube","macht"] },
          { text: "kann Befehlen nicht widersprechen", hooks: ["glaube","macht"] },
        ],
        quests: [
          { title: "Ich erfülle meinen Schwur koste es was es wolle", description: "Unter dem Banner seines Lehnsherrn hat der Held einen kraftvollen Eid geleistet, der ihn stärkt und zugleich bindet. Was er seinem Herrn versprach, ist die Achse, um die sein ganzes Leben sich dreht. Befehlen kann er nicht widersprechen, und das will er auch nicht: Den Schwur zu halten, koste es was es wolle, ist sein höchster Stolz.", hooks: ["glaube","schicksal"] },
          { title: "Ich prüfe ob mein Herr meiner Treue würdig ist", description: "Lange trug der Held die Autorität seines Hauses und gehorchte blind, an jeden Befehl gebunden. Doch ein Zweifel hat sich eingeschlichen, leise und beharrlich. Bevor er noch einen Eid in dessen Namen erfüllt, will er wissen, wem er seine Treue eigentlich geschworen hat, und ob dieser Herr sie überhaupt verdient.", hooks: ["glaube","adel"] },
        ]
      },
      {
        text: "Hüterin des Landes", hooks: ["natur","glaube"],
        powerTags: [
          { text: "kennt das ganze Reich", hooks: ["wissen","fahrend"] },
          { text: "handelt richtig ohne Befehl", hooks: ["glaube","kampf"] },
          { text: "kennt jeden Pfad des Landes", hooks: ["natur","wissen"] },
          { text: "wacht über die Schwachen", hooks: ["glaube","natur"] },
          { text: "liest die Zeichen des Landes", hooks: ["natur","schicksal"] },
        ],
        weaknessTags: [
          { text: "kann das Land nicht verlassen", hooks: ["natur","schicksal"] },
          { text: "fühlt Schuld bei jeder Verwüstung", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Ich beschütze das Land dem ich diene", description: "Der Held kennt jeden Pfad des Reiches und liest die Zeichen des Landes wie andere ein Buch. Diese Erde und ihre Menschen sind sein Auftrag und sein Anker zugleich, und er wacht über die Schwachen, ohne dass jemand es befehlen müsste. Verlassen kann er das Land nicht, denn er ist mit ihm verwachsen wie die Wurzel mit dem Boden.", hooks: ["natur","glaube"] },
          { title: "Ich heile die Wunden meines Landes", description: "Wo Krieg und Raub durch das Reich zogen, blieben Narben in Feldern und Herzen zurück, und der Held fühlt Schuld bei jeder Verwüstung, als wäre es seine eigene. Er kennt das ganze Land und weiß, wo es blutet. Nun zieht er aus, diese Wunden zu schließen und das Land Stück für Stück wieder ganz zu machen.", hooks: ["natur","verlust"] },
        ]
      },
      {
        text: "Rachezwang", hooks: ["verlust","kampf"],
        powerTags: [
          { text: "unbeirrbar bis zur Vergeltung", hooks: ["kampf","schicksal"] },
          { text: "vergisst kein Gesicht", hooks: ["verlust","wissen"] },
          { text: "narbiger Schwertarm", hooks: ["kampf","verlust"] },
          { text: "kalter Blick auf den Feind", hooks: ["kampf","macht"] },
          { text: "wittert eine Falle", hooks: ["kampf","wissen"] },
        ],
        weaknessTags: [
          { text: "die Rache frisst alles andere", hooks: ["verlust","schicksal"] },
          { text: "verhasst bei der gejagten Sippe", hooks: ["kampf","verlust"] },
        ],
        quests: [
          { title: "Ich räche das Unrecht das mir geschah", description: "Der Held vergisst kein Gesicht, und sein Schwertarm trägt die Narben jenes Unrechts, das alles entzündete. Unbeirrbar folgt er der Spur der Vergeltung, mit kaltem Blick auf den Feind und wachsam für jede Falle. Erst wenn die Schuld beglichen ist, so glaubt er, findet er wieder ruhigen Schlaf, auch wenn die Rache alles andere in ihm verzehrt.", hooks: ["verlust","kampf"] },
          { title: "Ich entscheide ob die Rache mich lohnt", description: "Die Vergeltung hat den Helden ausgehöhlt und alles andere aus seinem Leben verdrängt. Verhasst bei der gejagten Sippe, jagt er den letzten Feind. Doch in einer stillen Stunde fragt er sich, was bleibt, wenn dieser fällt. Wenn der letzte Gegner gestürzt ist, muss er wissen, ob unter all dem kalten Hass noch ein Mensch übrig ist.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "Bote des Königs", hooks: ["fahrend","macht"],
        powerTags: [
          { text: "Recht auf freien Durchgang", hooks: ["fahrend","macht"] },
          { text: "Recht auf Kost und Quartier", hooks: ["macht","fahrend"] },
          { text: "kennt jede Losung jeder Wache", hooks: ["stadt","kampf"] },
          { text: "findet immer den schnellsten Weg", hooks: ["fahrend","wissen"] },
          { text: "Siegel des Königs", hooks: ["adel","macht"] },
        ],
        weaknessTags: [
          { text: "Ziel für Feinde der Krone", hooks: ["macht","kampf"] },
          { text: "die Botschaft duldet keinen Aufschub", hooks: ["fahrend","schicksal"] },
        ],
        quests: [
          { title: "Ich bringe die Botschaft ans Ziel", description: "Das Siegel des Königs öffnet dem Helden Tore und sichert ihm Durchgang, Kost und Quartier, doch es macht ihn auch zum Ziel für Feinde der Krone. Die Botschaft duldet keinen Aufschub. Auf dem schnellsten Weg, vorbei an jeder Wache und durch jede Gefahr, trägt er das anvertraute Wort an seinen Ort, ganz gleich, wer ihm dabei nach dem Leben trachtet.", hooks: ["fahrend","macht"] },
          { title: "Ich erfahre was ich wirklich trage", description: "Die versiegelte Botschaft wiegt in der Hand des Helden schwerer, als Wachs und Papier es sollten. Zu oft hat man ihn dafür gejagt, zu teuer der Preis, den sein Lauf schon forderte. Bevor er erneut sein Leben aufs Spiel setzt, will er wissen, was er da wirklich trägt und in wessen Spiel die Krone ihn geschickt hat.", hooks: ["geheimnis","macht"] },
        ]
      },
      {
        text: "Schwertarm des Ordens", hooks: ["kampf","glaube"],
        powerTags: [
          { text: "hält die Stellung allein", hooks: ["kampf","glaube"] },
          { text: "betet vor dem Kampf", hooks: ["glaube","kampf"] },
          { text: "Anweisungen ausführen", hooks: ["glaube","kampf"] },
          { text: "geweihte Klinge des Ordens", hooks: ["kampf","magie"] },
          { text: "Brüder im Glauben zur Seite", hooks: ["glaube","kampf"] },
        ],
        weaknessTags: [
          { text: "der Orden vor dem Leben", hooks: ["glaube","schicksal"] },
          { text: "fühlt Schuld bei Versagen", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Ich diene dem Orden mit Klinge und Glauben", description: "Der Held betet vor dem Kampf und führt die geweihte Klinge des Ordens, an seiner Seite die Brüder im Glauben. Sein Schwert und sein Eid gehören ganz der heiligen Sache, der er sich verschrieb, und die Befehle des Ordens führt er ohne Zögern aus. Der Orden steht ihm vor dem eigenen Leben, denn allein im Dienst findet er seinen Sinn.", hooks: ["kampf","glaube"] },
          { title: "Ich reinige den Orden von innen", description: "Etwas ist faul geworden in den Reihen, denen der Held mit Klinge und Glauben dient, und der Verdacht lässt ihn keine Ruhe finden. Bei jedem Versagen quält ihn die Schuld, doch hier wiegt das Schweigen schwerer als jede Niederlage. Ehe die Fäulnis den ganzen Orden verdirbt, wird er sie aufspüren und ausmerzen, so schmerzhaft die Wahrheit auch sei.", hooks: ["glaube","geheimnis"] },
        ]
      },
      {
        text: "Wächterin der Grenzmark", hooks: ["kampf","natur"],
        powerTags: [
          { text: "kennt die wilde Grenze", hooks: ["natur","wissen"] },
          { text: "wacht beim leisesten Geräusch", hooks: ["kampf","natur"] },
          { text: "hält die Stellung allein", hooks: ["kampf","glaube"] },
          { text: "kennt die Verbündeten der Sache", hooks: ["stadt","kampf"] },
          { text: "späht den Feind frühzeitig", hooks: ["natur","kampf"] },
        ],
        weaknessTags: [
          { text: "darf den Posten nie verlassen", hooks: ["glaube","kampf"] },
          { text: "fern von jeder Hilfe", hooks: ["natur","verlust"] },
        ],
        quests: [
          { title: "Ich halte die Grenze gegen alles", description: "Der Held kennt die wilde Grenze wie kein anderer und erwacht beim leisesten Geräusch in der Nacht. Fern von jeder Hilfe hält er die Stellung allein, denn seinen Posten darf er nie verlassen. Was auch immer hinter der Mark lauert und nach innen drängt, es kommt nicht an ihm vorbei, solange er noch auf seinen Füßen steht.", hooks: ["kampf","natur"] },
          { title: "Ich ergründe was jenseits der Mark erwacht", description: "Späht der Held über die Grenze, spürt er ein Erwachen, das sich nicht benennen lässt und ihm den Schlaf raubt. Allein und fern jeder Hilfe steht er an der Schwelle zur Wildnis. Bevor das Unbekannte hervorbricht und die Mark überrennt, muss er wissen, was sich dort regt, damit das Land gewarnt ist, ehe es zu spät ist.", hooks: ["natur","geheimnis"] },
        ]
      },
      {
        text: "letzter Zeuge eines Vertrags", hooks: ["geheimnis","glaube"],
        powerTags: [
          { text: "kennt jede Klausel auswendig", hooks: ["wissen","geheimnis"] },
          { text: "kennt die Grenzen ihres Auftrags", hooks: ["wissen","glaube"] },
          { text: "sieht durch Lügen", hooks: ["geheimnis"] },
          { text: "kennt den Preis jeder Stille", hooks: ["geheimnis"] },
          { text: "bewahrt das versiegelte Wort", hooks: ["geheimnis","glaube"] },
        ],
        weaknessTags: [
          { text: "gejagt um des Wissens willen", hooks: ["geheimnis","kampf"] },
          { text: "kann das Geheimnis nicht teilen", hooks: ["geheimnis","glaube"] },
        ],
        quests: [
          { title: "Ich finde heraus ob der Vertrag gerecht war", description: "Der Held kennt jede Klausel jenes Vertrags auswendig, dessen versiegeltes Wort er als Letzter bewahrt. Lange schwieg er, wie sein Auftrag es verlangte, und durchschaut doch jede Lüge darüber. Nun trägt er die Antwort wie einen Stein in der Brust. Ehe das Geheimnis ihn ganz erdrückt, will er für sich selbst wissen, ob das, was er hütet, je gerecht war.", hooks: ["glaube","geheimnis"] },
          { title: "Ich bezeuge die Wahrheit ehe sie mit mir stirbt", description: "Als einziger Lebender weiß der Held, was damals wirklich geschah, und genau dieses Wissen macht ihn zur Beute derer, die es begraben wollen. Teilen kann er das Geheimnis bislang nicht. Doch er spürt, dass die Wahrheit nicht mit ihm sterben darf. Bevor man ihn zum Schweigen bringt, wird er Zeugnis ablegen, damit das, was er sah, weiterlebt.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "Schuldenbegleicherin", hooks: ["stadt","verlust"],
        powerTags: [
          { text: "kennt jedermanns Schulden", hooks: ["geheimnis","macht"] },
          { text: "Gefälligkeiten einfordern", hooks: ["macht","stadt"] },
          { text: "spürt jeden Schuldner auf", hooks: ["stadt","wissen"] },
          { text: "unnachgiebig im Eintreiben", hooks: ["macht","kampf"] },
          { text: "führt Buch über jede Gefälligkeit", hooks: ["handwerk","stadt"] },
        ],
        weaknessTags: [
          { text: "verhasst bei den Schuldnern", hooks: ["stadt","verlust"] },
          { text: "eigene Schulden holen sie ein", hooks: ["verlust","macht"] },
        ],
        quests: [
          { title: "Ich treibe jede Schuld ein", description: "Der Held führt Buch über jedermanns Schulden und spürt jeden säumigen Schuldner auf, unnachgiebig im Eintreiben. Keine offene Rechnung bleibt ungesühnt, solange seine Feder das Hauptbuch füllt. Verhasst ist er bei denen, die ihm etwas schulden, doch das ficht ihn nicht an: Eine Schuld ist eine Schuld, und sie will beglichen sein, bis zur letzten Münze.", hooks: ["stadt","macht"] },
          { title: "Ich begleiche meine eigene letzte Schuld", description: "So genau der Held über fremde Schulden Buch führt, so sehr holen ihn die eigenen ein, die er allzu lange verdrängt hat. Wie kann er über andere richten und Gefälligkeiten einfordern, solange er selbst tief in der Kreide steht? Bevor er weiter eintreibt, muss er frei werden von dem, was er schuldet, und reinen Tisch mit sich selbst machen.", hooks: ["verlust","glaube"] },
        ]
      },
      {
        text: "bezahlter Verteidiger", hooks: ["kampf","handwerk"],
        powerTags: [
          { text: "Schutzschild für den Auftraggeber", hooks: ["kampf","glaube"] },
          { text: "instinktive Reaktion auf Gefahr", hooks: ["kampf","schicksal"] },
          { text: "Vertrag in der Hand", hooks: ["handwerk","macht"] },
          { text: "deckt jede Schwachstelle ab", hooks: ["kampf","wissen"] },
          { text: "nimmt Wunden für andere", hooks: ["kampf","verlust"] },
        ],
        weaknessTags: [
          { text: "haftet für jedes Versagen", hooks: ["handwerk","verlust"] },
          { text: "treu nur für Sold", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Ich halte meinen Schützling am Leben", description: "Der Held ist Schutzschild für seinen Auftraggeber, reagiert instinktiv auf jede Gefahr und deckt jede Schwachstelle ab, den Vertrag stets in der Hand. Wofür man ihn bezahlt, das tut er ganz und ohne halbe Sachen. Notfalls nimmt er die Wunde, die einem anderen galt, denn niemand rührt den, dessen Schutz er auf sich genommen hat.", hooks: ["kampf","handwerk"] },
          { title: "Ich schütze einen den ich nicht aufgeben kann", description: "Aus bloßer Pflicht ist beim Helden längst etwas Tieferes geworden, auch wenn er nur für seinen Sold treu sein sollte. Der Sold ist verbraucht, der Vertrag erfüllt, und dennoch weicht er nicht von der Seite jenes Menschen. Er deckt jede Schwachstelle und nimmt jede Wunde, denn diesen einen kann er nicht aufgeben, was auch immer es ihn kostet.", hooks: ["kampf","glaube"] },
        ]
      },
      {
        text: "Vollstreckerin des alten Gesetzes", hooks: ["macht","glaube"],
        powerTags: [
          { text: "kennt Regeln und Ausnahmen", hooks: ["wissen","macht"] },
          { text: "setzt Befehle ohne Feinde durch", hooks: ["macht","stadt"] },
          { text: "unbestechlich durch Gold", hooks: ["glaube","macht"] },
          { text: "Autorität des alten Gesetzes", hooks: ["macht","adel"] },
          { text: "kennt jeden Präzedenzfall", hooks: ["wissen","macht"] },
        ],
        weaknessTags: [
          { text: "das Gesetz über die Gnade", hooks: ["glaube","macht"] },
          { text: "kann keinen Auftrag aufgeben", hooks: ["glaube","schicksal"] },
        ],
        quests: [
          { title: "Ich vollstrecke das Gesetz ohne Ansehen der Person", description: "Mit der Autorität des alten Gesetzes setzt der Held jeden Befehl durch, kennt Regeln, Ausnahmen und jeden Präzedenzfall, und kein Gold beugt sein Urteil. Vor dem alten Recht sind alle gleich, ob Bettler oder Fürst. Einen Auftrag kann er nicht aufgeben, und so vollstreckt er ohne Ansehen der Person, selbst wenn das Gesetz schwerer wiegt als jede Gnade.", hooks: ["macht","glaube"] },
          { title: "Ich prüfe ob das alte Gesetz noch gerecht ist", description: "Lange diente der Held dem Buchstaben des alten Gesetzes, unbestechlich und kompromisslos, das Recht über jede Gnade stellend. Doch er hat gesehen, wie die starre Regel manchem Unrecht tat. Nun, da das Gesetz die Gnade zu oft erstickt, fragt er sich, ob der Paragraph noch dem Recht dient, dem er einst folgte, oder ob er selbst es verraten muss, um gerecht zu bleiben.", hooks: ["glaube","geheimnis"] },
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
          { title: "Ich beherrsche den ganzen Hafen", description: "Der Held kennt jeden Kai, jede Mole und jeden Spitzel, der dort lauert. Kein Schiff legt an, ohne dass er es will, und genau diese Gewissheit treibt ihn an. Solange auch nur ein Steg sich seiner Kontrolle entzieht, ist das Werk nicht vollendet. Der ganze Hafen soll seinem Wink gehorchen.", hooks: ["macht","stadt"] },
          { title: "Ich verteidige meinen Kai", description: "Mühsam hat der Held sich seine Stellung an den Docks erkämpft, Faden um Faden, Bote um Bote. Doch die Konkurrenz lauert, und alte Schmugglerschulden drücken im Nacken. Was er aufgebaut hat, gibt er an niemanden ab, und wer danach greift, wird seine Entschlossenheit zu spüren bekommen.", hooks: ["macht","stadt"] },
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
          { title: "Ich entlarve die wahren Strippenzieher", description: "Der Held zieht selbst die Fäden im Verborgenen und weiß darum, wie tief das Spiel der Macht reicht. Hinter allem Offenen bewegen sich andere verborgene Hände, deren Namen er nicht kennt. Dieser blinde Fleck lässt ihm keine Ruhe, denn wer im Schatten wirkt, fürchtet nichts mehr als einen Schatten neben sich. Er wird sie finden.", hooks: ["geheimnis","macht"] },
          { title: "Ich finde heraus wer mich kontrolliert", description: "Lange glaubte der Held, er allein bewege die Figuren auf dem Brett. Doch je mehr Geheimnisse er sammelt, desto deutlicher spürt er eine fremde Hand, die ihn lenkt. Erpressbar durch das, was er selbst verbirgt, wächst der Zweifel zur Gewissheit. Er muss wissen, wer wirklich die Zügel hält.", hooks: ["geheimnis","macht"] },
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
          { title: "Ich wende die Stadt zum Guten", description: "Mit Befehlsgewalt und einer festen Stimme im Ratssaal hat der Held Einfluss erlangt, von dem andere nur träumen. Doch Macht allein genügt ihm nicht; sie soll etwas hinterlassen, das bleibt. Beschluss um Beschluss will er die Stadt zum Besseren wenden, ehe die vielen Verpflichtungen ihn auffressen. Sein Vermächtnis soll in Stein gemeißelt sein.", hooks: ["macht","stadt"] },
          { title: "Ich verteidige mein Amt", description: "Der Sitz im Rat macht den Helden zur Zielscheibe, denn Macht weckt stets den Neid der anderen. Längst kennt er die Regeln und ihre Ausnahmen besser als jeder Widersacher. Wer ihm das Amt nehmen will, lernt rasch dessen Preis kennen. Was er sich erkämpfte, verteidigt er mit jedem Mittel, das ihm zu Gebote steht.", hooks: ["macht","stadt"] },
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
          { title: "Ich eine die zerstrittenen Gilden", description: "Mit dem Gildensiegel in der Hand kann der Held Verbündete mobilisieren und Rufe machen oder brechen. Doch zersplittert in Eifersucht sind die Gilden ein leichtes Spiel für jeden Lehnsherrn. Geschlossen aber wären sie mächtiger als jede Krone. Diese Einheit zu schmieden, trotz aller Konkurrenz um die Führung, ist sein großes Ziel.", hooks: ["handwerk","macht"] },
          { title: "Ich räche die Ehre meiner Gilde", description: "Der Held kennt jedermanns Schulden und weiß, wie man einen Ruf zu Fall bringt. Doch nun hat jemand seinen Stand beschmutzt, und das schreit nach Antwort. Jedes Bündnis hat seinen Preis, und diese Schmach wird er einfordern. Wer die Ehre seiner Gilde antastet, soll erfahren, dass es nicht ungestraft bleibt.", hooks: ["handwerk","macht"] },
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
          { title: "Ich beherrsche den Schwarzmarkt", description: "Mit Zugang zu verschlossenen Orten und dem Wissen um jeden Schleichweg hat sich der Held zur Macht im Verborgenen aufgeschwungen. Gold öffnet ihm Türen, hinter denen das Gesetz keine Geltung hat. Keine verbotene Ware soll den Besitzer wechseln, ohne dass sein Anteil fließt. Den ganzen Schwarzmarkt unter sich zu wissen, ist sein Antrieb, mag das Gesetz ihn auch jagen.", hooks: ["außenseiter","macht"] },
          { title: "Ich schütze meine Bande", description: "Eine loyale Schmugglerbande folgt dem Helden durch die dunkelsten Gassen und vertraut ihm ihr Leben an. Alte Intrigen holen ihn ein, und das Gesetz sitzt ihm im Nacken. Doch wer ihm treu folgt, den lässt er niemals fallen. Diese Loyalität zu wahren, gegen alle Gefahr, ist ihm mehr wert als jeder Gewinn.", hooks: ["außenseiter","stadt"] },
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
          { title: "Ich stifte Frieden zwischen den Häusern", description: "Mit dem Recht auf Audienz und dem Vertrauen der Mächtigen wandelt der Held durch die Säle der Macht. Wo andere zum Schwert greifen, legt er Worte auf die Waage und beschwichtigt jeden Streit. Die zerstrittenen Häuser zu versöhnen, ist seine wahre Berufung. Ein dauerhafter Friede, geschmiedet durch geschickte Fragen statt durch Klingen, ist sein Ziel.", hooks: ["adel","stadt"] },
          { title: "Ich wahre mein Wort am Hof", description: "Der Hof ist ein Schlangennest, und der Held weiß, dass sein einziges Kapital sein gegebenes Wort ist. Ein gebrochenes Versprechen wäre der Anfang seines Endes, denn jedes Bündnis hat seinen Preis. Darum hält er, was er zusagt, auch wenn es ihn alles kostet. Seine Verlässlichkeit ist der Boden, auf dem all sein Einfluss steht.", hooks: ["adel","glaube"] },
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
          { title: "Ich spanne mein Netz übers ganze Reich", description: "Der Held hält eine Karte mit allen Namen und sendet Boten in jede Richtung des Landes. Doch sein Netz ist noch lückenhaft, und das lässt ihm keine Ruhe. Von jeder Stadt soll ein Faden in seine Hand laufen, jeder Markt ihm Tribut zollen. Erst wenn das ganze Reich von seinen Verbindungen durchzogen ist, ist sein Werk vollbracht.", hooks: ["stadt","macht"] },
          { title: "Ich löse meine Abhängigkeiten", description: "So viele Gefälligkeiten kann der Held einfordern, doch ebenso viele schuldet er selbst. Zu viele Verpflichtungen ketten ihn, und jedes Bündnis hat seinen Preis. Er will nicht länger das letzte Glied in einer Kette von Schulden sein. Sich aus diesen Abhängigkeiten zu befreien und endlich frei zu handeln, treibt ihn voran.", hooks: ["macht","verlust"] },
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
          { title: "Ich lenke den Herrscher klug", description: "Aus dem Verborgenen flüstert der Held ins rechte Ohr und weiß, dass Briefe Tore öffnen können. Seine Ratschläge wiegen schwerer als jedes Schwert im Saal. Klug gelenkt, soll der Herrscher das Reich vor dem Abgrund bewahren, an dessen Rand es taumelt. Diese stille Führung, unsichtbar und doch entscheidend, ist seine Aufgabe.", hooks: ["geheimnis","macht"] },
          { title: "Ich bleibe im Schatten unentbehrlich", description: "Der Held hält Informationen zurück und kennt jedes Schweigen, das ihm Macht verleiht. Doch unsichtbare Feinde lauern, und Geheimnisse machen ihn erpressbar. Wer ihn übersieht, soll niemals begreifen, wie sehr er ihn braucht. Im Schatten unentbehrlich zu bleiben, dort wo niemand seinen Wert ahnt, ist sein stilles Streben.", hooks: ["geheimnis","stadt"] },
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
          { title: "Ich hebe die Vergessenen empor", description: "Mit einer Schatzkammer im Hintergrund und loyalen Leuten in den Gassen verfügt der Held über stille Macht. Doch sein Gold soll nicht ihm allein dienen, sondern denen, die sonst niemand sieht. Für die Schwachen zu sprechen und die Vergessenen emporzuheben, gibt seinem Reichtum erst einen Sinn. Diesen Auftrag verfolgt er, auch wenn Macht ihn zur Zielscheibe macht.", hooks: ["stadt","glaube"] },
          { title: "Ich mache Unrecht wieder gut", description: "Der Held weiß, dass dasselbe Gold, das die Türen öffnet, auch ihn einst korrumpierte. Diese Schuld lastet schwer, und er kann nicht Nein sagen, wenn Not an ihn herantritt. Nun will er mit jenem Reichtum den Schaden begrenzen, den er mit anrichtete. Altes Unrecht wiedergutzumachen, ist die Last, die ihn vorantreibt.", hooks: ["macht","verlust"] },
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
          { title: "Ich halte Frieden im Viertel", description: "Der Held kennt jede Losung jeder Wache und hört die Gerüchte zuerst, ehe sie zur Gewalt werden. Auf seinen Zuruf treten Vollstrecker an, und seine Schlichtung beendet jeden Bandenkrieg. Solange er richtet, fließt in seinen Gassen kein unnötiges Blut. Diesen brüchigen Frieden zu wahren, trotz aller Konkurrenz um die Gasse, ist seine Pflicht.", hooks: ["stadt","macht"] },
          { title: "Ich beweise dass mein Wort Gesetz ist", description: "In den Straßen gilt das Urteil des Helden mehr als jeder Erlass von oben. Doch bei den Verurteilten ist er verhasst, und mancher wagt es, sein Wort zu missachten. Wer das tut, soll erfahren, wie weit sein Arm wirklich reicht. Dass sein Wort Gesetz ist und bleibt, will er unmissverständlich beweisen.", hooks: ["macht","stadt"] },
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
          { title: "Ich setze meinen Kandidaten auf den Thron", description: "Der Held genießt das Vertrauen der Mächtigen und kann Throne einsetzen wie absetzen. Im Verborgenen zieht er die Fäden, während der Hof ein Schlangennest bleibt. Wer herrscht, entscheidet er, auch wenn niemand seinen Namen je nennt. Seinen Kandidaten auf den Thron zu heben, ist das Spiel, dem all sein Sinnen gilt.", hooks: ["macht","adel"] },
          { title: "Ich bleibe die Hand hinter der Krone", description: "Macht und Rufe macht und bricht der Held nach Belieben, doch die Krone selbst begehrt er nicht. Die wahre Gewalt, das hat er gelernt, trägt kein Diadem, sondern lenkt den, der es trägt. Alte Intrigen holen ihn ein, und der Hof intrigiert ohne Unterlass. Die Hand hinter der Krone zu bleiben, unangefochten und unsichtbar, ist sein Ziel.", hooks: ["macht","geheimnis"] },
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
          { title: "Ich gebe den Stummen eine Stimme", description: "Mit Befehlsgewalt spricht der Held und bewegt die Menge mit seinen Worten. Er kennt die wahren Mächte und kann Legitimität einfordern, wo andere verstummen. Im Rat soll erklingen, was sonst niemand auszusprechen wagt. Den Stummen seine Stimme zu leihen, ist die Aufgabe, der er sich verschrieben hat, mag die Konkurrenz um das Wort auch hart sein.", hooks: ["macht","stadt"] },
          { title: "Ich baue eine Ordnung die mich überdauert", description: "An die Beschlüsse des Rates gebunden, ringt der Held doch um mehr als den Tag. Was er verkündet, soll noch gelten, wenn seine Stimme längst verstummt ist. Eine Ordnung zu schaffen, die ihn überdauert, treibt ihn über alle Konkurrenz hinaus. Sein wahres Vermächtnis liegt nicht in Macht, sondern in dem, was nach ihm Bestand hat.", hooks: ["macht","stadt"] },
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
          { title: "Die verschlossene Kammer", description: "Im Verborgenen hat der Held ein Leben lang nach einer Wahrheit geforscht, die andere lieber begraben ließen. Nun trennt ihn nur noch eine letzte Tür von dem Geheimnis, dem er alles geopfert hat. Ungesehen muss er zu ihr vordringen, denn was hinter ihr liegt, könnte alles erklären oder alles in Frage stellen, was er zu wissen glaubte.", hooks: ["geheimnis","wissen"] },
          { title: "Der enttarnte Mitwisser", description: "Sein Schutz war stets das Verborgene, doch nun weiß jemand um sein Versteck, und der Held spürt fremde, neugierige Augen im Rücken. Verrat kann ihn alles kosten, was er so lange im Schatten bewahrt hat. Er muss herausfinden, wer ihn verraten hat, ehe die Mächte des Lichts die Tür eintreten, hinter der er arbeitet.", hooks: ["geheimnis","verlust"] },
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
          { title: "Die letzte weiße Stelle", description: "Der Held hat fast jedes Land bereist und unverzeichnete Routen gegangen, doch eine einzige leere Stelle auf den Karten lässt ihm keine Ruhe. Kein Reisender hat sie je betreten, und genau das ruft ihn. Als Erster will er dieses Land erkunden und verzeichnen, denn nur jenseits des Bekannten findet ein Heimatloser endlich, wonach er wirklich sucht.", hooks: ["wissen","fahrend"] },
          { title: "Der verschollene Pass", description: "In alten Erzählungen lebt ein Handelsweg fort, den niemand mehr zu finden weiß, doch der Held liest die vergessenen Spuren in fremden Sitten und Landschaften. Ein wiedereröffneter Pass könnte entlegene Völker verbinden, die seit Generationen getrennt sind. Er nimmt sich vor, die verschollene Route wieder begehbar zu machen, und schreibt damit ein Stück Welt neu.", hooks: ["fahrend","wissen"] },
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
          { title: "Das verbotene Folio", description: "Der Held hütet Bände, die niemand lesen darf, und kennt die Gefahr, die in jeder ihrer Zeilen schlummert. Nun ist ausgerechnet das gefährlichste Folio gestohlen, und in falschen Händen wird es zur Waffe. Er muss es zurückholen, ehe das verbotene Wissen entfesselt wird, auch wenn die Suche Feinde anlockt, die schon lange auf seine Sammlung lauern.", hooks: ["wissen","geheimnis"] },
          { title: "Die Brandstifter der Wahrheit", description: "Mächtige fürchten, was in den Regalen des Helden geschrieben steht, und wollen seine Sammlung in Flammen aufgehen lassen. Für ihn aber wiegt die Wahrheit schwerer als das Wohlgefallen der Herrschenden. Während die Brandstifter näher rücken, rettet er, was zu retten ist, denn jedes verlorene Buch ist eine Erinnerung weniger, die der Welt für immer fehlt.", hooks: ["wissen","macht","verlust"] },
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
          { title: "Die getilgte Dynastie", description: "Aus Chroniken und Provinzwappen liest der Held die Echos längst gestürzter Reiche, und eines davon wurde mit Absicht aus aller Erinnerung gelöscht. Wer ein Herrschergeschlecht tilgt, hat etwas zu verbergen. Aus Fragmenten und geschönten Aufzeichnungen rekonstruiert er die verschwiegene Wahrheit und stellt wieder her, was Mächtige aus der Geschichte zu reißen versuchten.", hooks: ["wissen","adel","geheimnis"] },
          { title: "Das Erbe der Ruinen", description: "Der Held lebt halb in vergangenen Zeiten, und die Trümmer eines alten Reichs ziehen ihn unwiderstehlich an. Zwischen geborstenen Säulen und verwitterten Inschriften ahnt er den Schlüssel zu einem Untergang, den niemand erklären konnte. Geduldig setzt er die Bruchstücke zusammen, denn wer versteht, wie ein Reich fiel, versteht vielleicht, was die Gegenwart noch retten kann.", hooks: ["wissen","verlust"] },
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
          { title: "Die unentzifferte Zunge", description: "Der Held übersetzt jede Schrift und spricht selbst die Sprache der Toten, doch eine Zunge widersteht ihm bislang. In ihren Zeichen ruht ein Versprechen, das seit Ewigkeiten ungehört verhallt. Er gibt sich der Aufgabe ganz hin und will die verlorene Sprache entschlüsseln, auch wenn er sich dabei zu verlieren droht zwischen Worten, die seit Jahrhunderten niemand mehr sprach.", hooks: ["wissen","geheimnis"] },
          { title: "Das missverstandene Wort", description: "Ein einziger Übersetzungsfehler hat sich in einen Vertrag geschlichen, und der Held hört das falsche Wort heraus, wo alle anderen nur den Wortlaut sehen. Aus diesem Missverständnis droht ein Krieg zu erwachsen, der Tausende kosten könnte. Nur er kann die wahre Bedeutung richtigstellen, ehe aus einem verkehrten Satz Blut und Verderben werden.", hooks: ["wissen","macht"] },
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
          { title: "Die Karte zum verlorenen Ort", description: "Der Held zeichnet getreue Karten und merkt sich jeden Weg, doch ein Ort entzieht sich ihm noch immer, verstreut über Fragmente alter Karten. Der nächste Horizont lässt ihn nicht los. Er folgt den Bruchstücken, bis sie zusammenpassen, denn er will diesen verlorenen Ort endlich vollständig verzeichnen und seinem leeren Fleck auf dem Pergament ein wahres Bild geben.", hooks: ["wissen","fahrend","geheimnis"] },
          { title: "Das fehlerhafte Reich", description: "Eine falsch gezeichnete Karte führt Reisende in Sümpfe und Abgründe in den Tod, und der Held, der jedes Gelände liest, erträgt diesen Fehler nicht. Ohne genaue Karten ist auch er hilflos, doch dieser Irrtum kostet Leben. Er nimmt es auf sich, das fehlerhafte Reich neu zu vermessen und zu berichtigen, damit kein weiterer Wanderer dem falschen Strich vertraut.", hooks: ["fahrend","verlust"] },
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
          { title: "Die versiegelte Botschaft", description: "Der Held erkennt jedes Symbol und sieht das Muster noch im größten Chaos, und nun liegt eine verschlüsselte Schrift vor ihm, die eine Warnung birgt. Die Zeit drängt, denn ungelesen nützt selbst die dringendste Botschaft nichts. Besessen beugt er sich über die Zeichen und muss sie entziffern, ehe es zu spät ist und das angekündigte Unheil bereits geschehen ist.", hooks: ["wissen","geheimnis"] },
          { title: "Der Schlüssel im Stein", description: "In uralten Gravuren ahnt der Held einen Code, an dem vor ihm jeder gescheitert ist, und das ungelöste Rätsel zehrt an seinen Kräften. Nacht für Nacht studiert er die verwitterten Linien, bis ihm die Augen brennen. Doch er gibt nicht auf, denn er will als Erster brechen, was der Stein so lange verbirgt, koste es ihn auch die eigene Gesundheit.", hooks: ["wissen","geheimnis","schicksal"] },
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
          { title: "Das letzte Kapitel", description: "Der Held führt geheime Forschung und wagt, was andere meiden, doch seiner Lehre fehlt der verbotene Schlussteil. Ohne ihn bleibt all sein Wissen Stückwerk. Blind für die reale Gefahr, die solches Wissen anzieht, riskiert er alles, um das letzte Kapitel zu finden, denn erst mit ihm wird vollständig, wofür er bereits so vieles aufs Spiel gesetzt hat.", hooks: ["wissen","geheimnis","magie"] },
          { title: "Der gefallene Meister", description: "Einst lehrte ihn ein Meister, doch der verschwand auf der Jagd nach verbotenem Wissen, und der Held kann den Gedanken nicht abschütteln. Wissen ist sein Hebel, und die Spur des Verschollenen ruft ihn. Trotz aller Gefahr folgt er den Pfaden seines Lehrers, um zu erfahren, was ihn verschlang, und ob am Ende dieses Weges Rettung oder dasselbe Verderben wartet.", hooks: ["wissen","verlust","geheimnis"] },
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
          { title: "Die geplünderte Sammlung", description: "An die verborgenen Archive gebunden, hat der Held jede Quelle behütet wie einen Schatz, bis Diebe in die geheimen Gewölbe einbrachen. Jeder entwendete Band reißt eine Lücke in das Wissen, das seiner Obhut anvertraut ist. Er findet jede Quelle wieder, und so nimmt er die Spur der Räuber auf, um das Verlorene zurückzuholen, ehe es in falschen Händen missbraucht wird.", hooks: ["wissen","geheimnis","verlust"] },
          { title: "Der würdige Erbe", description: "Der Held trägt ein Lexikon an Lore in sich und erinnert sich an jedes Buch, doch er weiß, dass er nicht ewig wachen kann. Stirbt der Hüter ohne Nachfolger, so stirbt auch das Wissen der Archive mit ihm. Darum sucht er jemanden, der nach ihm würdig genug ist, die verborgene Sammlung zu hüten und ihr Vermächtnis in die nächste Zeit zu tragen.", hooks: ["wissen","glaube","schicksal"] },
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
          { title: "Das ungeklärte Phänomen", description: "Der Held glaubt nur, was er beweisen kann, und erklärt sonst jedes Phänomen, doch nun begegnet ihm ein Vorgang, der allem widerspricht, was er weiß. Das Rätsel erschüttert die Gewissheit, auf der sein ganzes Denken ruht. Mit kühlem Verstand muss er die Ursache ergründen, denn solange er sie nicht versteht, hat die Welt aufgehört, den Gesetzen zu folgen, die er ihr zuschrieb.", hooks: ["wissen","natur","geheimnis"] },
          { title: "Die unbekannte Bestie", description: "Der Held kennt Bestienkunde und die Schwäche jedes Wesens, doch ein Geschöpf steht in keinem seiner Bücher und bedroht nun das Land. Körperlich ist er den Klauen kaum gewachsen, sein einziger Schutz ist sein Wissen. Geduldig beobachtet und studiert er die fremde Bestie, um ihre verwundbare Stelle zu erforschen, ehe sie weitere Opfer fordert und niemand sie zu bezwingen weiß.", hooks: ["wissen","natur","kampf"] },
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
          { title: "Der wiedererwachte Kult", description: "Der Held spürt das Wirken der Kulte und kennt ihre verbotenen Riten, und nun regt sich ein totgeglaubter Kult aufs Neue. Hinter neugierigen Mächten verborgen, sammeln seine Anhänger heimlich Kraft. Er muss ihre Absichten entschlüsseln, ehe sie ihr finsteres Werk vollenden, auch wenn ihn die Suche tiefer in die Riten zieht, als ihm selbst noch geheuer ist.", hooks: ["wissen","magie","geheimnis"] },
          { title: "Die wahre Gottheit", description: "Der Held durchschaut jeden Glauben und liest die Zeichen alter Riten, und unter ihrer frommen Oberfläche ahnt er eine verborgene Wahrheit. Wem galten die Gebete wirklich, die seit Jahrhunderten gesprochen werden? Getrieben von der Frage gräbt er immer tiefer und enthüllt, welche Macht sich hinter den vertrauten Ritualen verbirgt, selbst wenn die Antwort alles erschüttert, woran die Menschen glaubten.", hooks: ["wissen","glaube","geheimnis"] },
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
          { title: "Die verschollene Sage", description: "Tausend Sagen kann der Held aus dem Stegreif entfachen, doch eine fehlt ihm noch immer. Es heißt, sie sei so dunkel, dass keine Zunge sie mehr zu formen wagt. Den Helden lässt diese Lücke nicht ruhen, und er folgt halb verwehten Spuren, bis die verschollene Geschichte endlich wieder in seiner Stimme lebt.", hooks: ["fahrend","geheimnis"] },
          { title: "Ein Lied das überdauert", description: "Jeder Saal verstummt, wenn der Held zu erzählen beginnt, doch Beifall verklingt mit dem letzten Wort. Was nützt eine Gabe, die nur im Augenblick lebt, wenn der Held selbst vergessen wird. Darum sucht er die eine Erzählung, die fest genug gewoben ist, um ihn um Generationen zu überleben und seinen Namen unvergänglich zu machen.", hooks: ["handwerk","schicksal"] },
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
          { title: "Das vollkommene Mahl", description: "Der Held verfeinert jedes Gericht, bis es Herzen am Tisch öffnet, und doch nagt der Zweifel, ob er sein Können je ganz ausgeschöpft hat. Ein einziges Festmahl schwebt ihm vor, in das alle Kunst seiner Hände fließt. Erst wenn dieser Gang vollendet vor ihm steht, weiß der Held endlich, wozu seine Gabe wirklich fähig ist.", hooks: ["handwerk"] },
          { title: "Die verlorene Rezeptur", description: "Die alten Meister kannten Speisen, von denen heute nur noch Gerüchte flüstern, und den Helden erkennt jede Zutat auf der Zunge. Eine vergessene Rezeptur lockt ihn wie ein Rätsel, das nur sein Gaumen lösen kann. Über vergilbte Notizen und ferne Küchen folgt er ihrer Spur, bis das verlorene Werk auf seinem Herd neu erwacht.", hooks: ["handwerk","verlust"] },
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
          { title: "Der ebenbürtige Gegner", description: "Mit staunenswerter Schwertkunst und einer ganz eigenen Technik hat der Held jeden Fechter bezwungen, der ihm gegenübertrat. Doch leichte Siege schmecken schal, und die ewigen Herausforderer langweilen ihn nur. Was der Held wirklich sucht, ist der eine Gegner, der ihn an seine Grenze treibt und ihn endlich spüren lässt, was es heißt, gefordert zu werden.", hooks: ["handwerk","fahrend"] },
          { title: "Die verbotene Form", description: "Der Held erkennt jeden schwachen Punkt und liest jede Klinge, doch eine Technik haben selbst die größten Meister stets gemieden. Zu gefährlich, hieß es, zu vermessen für sterbliche Hände. Gerade das reizt den Helden, der keine Niederlage erträgt, und er wird nicht ruhen, bis er die verbotene Form gezähmt und sich zu eigen gemacht hat.", hooks: ["kampf","geheimnis"] },
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
          { title: "Die unheilbare Seuche", description: "Mit seiner einmaligen Heiltechnik hat der Held Verlorene zurückgeholt, an denen andere längst verzweifelten. Doch nun wütet ein Leiden, das noch niemand bezwang, und jeder Tote fühlt sich an wie sein eigenes Versagen. Der Held kann nicht tatenlos zusehen und sucht das Mittel gegen diese Seuche, koste ihn die Suche auch den letzten Funken Hoffnung.", hooks: ["handwerk","verlust"] },
          { title: "Ein Leben das zählt", description: "Der Held erkennt jedes Leiden und behält ruhige Hände, wo andere zittern, doch keine Gabe schützt vor dem Schmerz des Scheiterns. In dieser Nacht hängt ein einziges Leben an einem seidenen Faden, und nur seine Kunst kann es halten. Für den Helden zählt jetzt nichts als dieser eine Mensch, den er um jeden Preis dem Tod entreißen will.", hooks: ["handwerk","glaube"] },
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
          { title: "Der unmögliche Schuss", description: "Kein Ziel ist dem Helden zu fern, sein Pfeil fliegt unfehlbar und schneller, als das Auge folgen kann. Doch gerade darum reizt ihn das, was alle für unmöglich halten. Irgendwo wartet ein Schuss, den niemand sonst zu wagen träumt, und der Held wird seinen Atem so lange ruhig halten, bis auch dieses Ziel seiner Sehne nicht mehr entgeht.", hooks: ["handwerk","schicksal"] },
          { title: "Der Wettstreit der Meister", description: "Der Held kennt jeden Bogen und trifft, worauf er auch zielt, doch im Nahkampf wäre er verloren. Sein Reich ist die Distanz, sein Stolz die Treffsicherheit. Wenn die besten Schützen des Landes zum großen Wettkampf zusammenkommen, will der Held unter ihnen stehen und mit ruhigem Atem beweisen, dass keine Hand seine Pfeile übertrifft.", hooks: ["handwerk","kampf"] },
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
          { title: "Der ungeschlagene Großmeister", description: "Der Held denkt zehn Züge voraus und durchschaut jede Strategie, ehe der Gegner sie zu Ende denkt. Doch es heißt, ein Großmeister habe seit Jahren keine Partie verloren, und dieser Ruf lässt dem Helden keine Ruhe. Eiskalt am Brett und blitzschnell im Geist sucht er die eine Partie, in der er den Unbesiegten endlich stürzt.", hooks: ["handwerk","macht"] },
          { title: "Die tödliche Partie", description: "Für den Helden ist alles ein Spiel, und auf unvorhersehbaren Wegen führt er jede Strategie zum Sieg. Doch diesmal liegen keine Steine auf dem Brett, sondern Leben und Tod. Mit der gewohnten kühlen Berechnung tritt der Held an, fest entschlossen, die eine Partie zu gewinnen, bei der ein Fehler weit mehr kostet als bloß den nächsten Zug.", hooks: ["handwerk","schicksal"] },
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
          { title: "Der Tanz der niemals war", description: "Die Bewegungen des Helden fließen wie Wasser und sprechen, wo Worte versagen, sodass jeder Blick im Saal an ihm haftet. Doch die alten Tänze genügen ihm längst nicht mehr. In ihm reift die Sehnsucht nach Schritten, die noch keine Welt gesehen hat, und der Held wird tanzen und schaffen, bis aus dieser Vision ein Tanz wird, den niemand vor ihm kannte.", hooks: ["handwerk","schicksal"] },
          { title: "Die große Bühne", description: "Mit staunenswerten Sprüngen und unbestreitbarer Eleganz fesselt der Held jeden, der ihn sieht, auch wenn der Alltag seine Kräfte zehrt. Doch kleine Bühnen sind seiner Gabe nicht würdig. Einmal will der Held vor dem Hof tanzen, der über Ruhm und Vergessen entscheidet, und dort beweisen, dass seine Kunst auf die größte aller Bühnen gehört.", hooks: ["handwerk","adel"] },
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
          { title: "Der undurchdringliche Hort", description: "Der Held öffnet jedes Schloss und gleitet lautlos wie ein Schatten an jeder Wache vorbei, und seinem Auge entgeht kein Schwachpunkt. Doch ein Tresor gilt als unknackbar, und genau das kann der Held nicht auf sich beruhen lassen. Was kein Dieb je bezwang, reizt ihn unwiderstehlich, und er wird nicht rasten, bis auch dieser Hort sich ihm öffnet.", hooks: ["handwerk","geheimnis"] },
          { title: "Ein letzter Coup", description: "Mit erstaunlicher Geschwindigkeit und dem Geschick, das Unmögliche zu improvisieren, hat der Held schon manchen Schatz erbeutet, doch misstrauische Blicke folgen ihm überall. Ein einziger Coup könnte ihn endlich freikaufen von Jagd und Verdacht. Der Held plant den großen Streich, der ihn aus dem Schatten holt, auch wenn seine Gier nach dem Verbotenen ihm im Weg steht.", hooks: ["handwerk","verlust"] },
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
          { title: "Das Lied der Helden", description: "Der Held reißt jede Menge mit und verzaubert mit Worten, doch seine Gabe hat ihn auch einsam gemacht. Worte können mehr als unterhalten, sie können Taten zu Legenden erheben. Darum will der Held eine Heldentat besingen, so machtvoll und wahr, dass sein Lied sie unsterblich macht und niemand je wieder vergisst, was geschah.", hooks: ["handwerk","schicksal"] },
          { title: "Das Ohr des Königs", description: "Jeden Saal stimmt der Held nach seinem Willen um, und er kennt jedes Lied, das je gesungen wurde, auch wenn ihn die Großzügigkeit in Schulden treibt. Am Hof aber werden Lieder zu Geschichte. Einmal will der Held vor dem König spielen und mit seiner Kunst dort etwas bewegen, wo Melodien über das Schicksal von Reichen entscheiden.", hooks: ["handwerk","adel"] },
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
          { title: "Das ungezähmte Ross", description: "Der Held verschmilzt mit jedem Pferd und bändigt selbst die wildesten Tiere, doch ohne sein Ross fühlt er sich nur halb. Nun gibt es einen Hengst, den noch keine Hand zähmen konnte, störrisch und ungebrochen. Gerade dieser Stolz weckt den Ehrgeiz des Helden, und er wird so lange Geduld und Mut aufbringen, bis auch dieses ungezähmte Ross ihn trägt.", hooks: ["handwerk","natur"] },
          { title: "Das große Wettrennen", description: "Mit atemberaubender Geschwindigkeit reitet der Held, wo sich kein anderer hinwagt, unerschütterlich im Sattel und oft tollkühn dazu. Ein großes Rennen steht bevor, das alle für längst entschieden halten. Doch der Held glaubt an sein Tier und seine Kunst und wird sich in den Sattel schwingen, um den Ritt zu gewinnen, den niemand ihm zutraut.", hooks: ["handwerk","schicksal"] },
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
          { title: "Die Stadt in Aufruhr", description: "Der Held findet stets das rechte Wort und liest jedes Publikum, sodass er eine Menge entfacht, wann immer er will. Manchmal genügt eine einzige Rede, um den Lauf der Dinge zu wenden. Wenn Unrecht die Gassen vergiftet, will der Held seine Stimme erheben und eine ganze Stadt bewegen, auch wenn ihn der Glaube an die eigenen Worte zuweilen blendet.", hooks: ["handwerk","macht"] },
          { title: "Worte gegen Schwerter", description: "Unerschütterlich unter Druck reißt der Held jede Menge mit, wo andere im Lärm der Schlacht verstummen. Er weiß, dass ein gut gewähltes Wort schärfer schneidet als jede Klinge. Wenn die Heere bereits gegeneinander stehen, will der Held allein durch seine Rede das Blatt wenden und beweisen, dass Worte mächtiger sein können als Schwerter.", hooks: ["handwerk","kampf"] },
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
          { title: "Das Spiel um alles", description: "Der Held durchschaut jeden Bluff hinter unbewegter Miene und gilt als die Beste am Tisch, doch eine Niederlage könnte er kaum ertragen. Nun lockt eine Partie gegen den besten Spieler weit und breit, bei der alles auf dem Spiel steht. Mit kühlem Kopf und ruhigem Herzschlag setzt der Held alles auf diese eine Begegnung, um zu beweisen, wer wirklich die Beste ist.", hooks: ["handwerk","macht"] },
          { title: "Die Schuld vom Tisch", description: "Mit eiserner Nervenstärke rechnet der Held jede Chance aus, auch wenn man ihm hinter vorgehaltener Hand Falschheit nachsagt. Eine alte Schuld lastet schwer und droht ihn zu erdrücken. Nur ein einziges Spiel kann sie tilgen, und der Held setzt sich an den Tisch, fest entschlossen, mit seiner Gabe die Last für immer von seinen Schultern zu spielen.", hooks: ["handwerk","verlust"] },
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
          { title: "Ich finde den wahren Gegner hinter meinem Zorn.", description: "Die steinerne Faust am Arm des Helden zerschmettert Tore und schleudert Feinde wie Laub davon, doch solche Wucht an Wegelagerern zu vergeuden fühlt sich falsch an. Irgendwo wartet ein Gegner, der dieser Macht würdig ist. Erst wenn der Held ihm gegenübersteht, wird sich zeigen, wofür die Faust ihm gegeben wurde.", hooks: ["kampf","schicksal"] },
          { title: "Ich bändige die Wut, die mich treibt.", description: "Wenn die unmenschliche Kraft erwacht, ist es, als schlüge die Faust von selbst, und die Magie fordert jedes Mal ihren Preis. Der Held spürt, wie der Zorn ihn zu verschlingen droht. Er sucht den kühlen Punkt in sich, um zu treffen, wann er es will, und stillzuhalten, wann es nötig ist.", hooks: ["kampf","magie"] },
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
          { title: "Ich finde das letzte Rezept, bevor es verloren geht.", description: "Eine Prise aus dem Beutel beschwört, was die Not gerade verlangt, und entfacht Funken aus dem Nichts. Doch ein Pulver fehlt dem Helden noch, das seltenste von allen, dessen Mischung längst verschollen ist. Er folgt verblassten Aufzeichnungen und Gerüchten alter Mischer, bis das letzte Rezept wieder in seinen Händen liegt.", hooks: ["wissen","handwerk"] },
          { title: "Ich bewahre den Beutel und halte ihn niemals leer.", description: "Mit jeder Prise wächst die Sorge, denn der Vorrat geht zur Neige und Magie fordert ihren Preis. Der Held weiß, dass kein Markt diesen Staub verkauft. Also lernt er hauszuhalten, jede Beschwörung genau abzuwägen und so zu wirtschaften, als wäre jede Prise die allerletzte, die ihm bleibt.", hooks: ["handwerk","verlust"] },
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
          { title: "Ich banne den Geist, der an meinen Kessel gebunden ist.", description: "Aus dem Kessel steigen Stimmen, und der Held lauscht den Geistern, die er in den Kreis zu bannen vermag. Doch einer weicht nicht, ein Schatten, der sich an die Lebenden klammert und nicht weichen will. Der Held sucht den rechten Sud und die rechten Worte, um das Wesen endlich zur Ruhe zu zwingen.", hooks: ["magie","geheimnis"] },
          { title: "Ich schließe den Kreis und vollende das Beschwörungsritual.", description: "Was der Kessel ruft, das bleibt, wenn die Beschwörung misslingt, und der Held hat gesehen, was halb gerufene Wesen anrichten. Diese Last will er nie wieder tragen. Darum übt er jede Anrufung bis zur Vollendung, damit kein Geist je wieder ungebunden zwischen den Welten zurückbleibt.", hooks: ["magie","wissen"] },
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
          { title: "Ich breche den Fluch, der die Klinge verdirbt.", description: "Die Klinge schneidet durch alles und dürstet nach Blut, doch sie hat einen eigenen Willen und verändert den Helden mit jedem Streich ein wenig. Er fürchtet den Tag, an dem nichts mehr von ihm bleibt. Also sucht er einen Weg, ihre Macht zu führen, ohne ihr selbst zu verfallen.", hooks: ["magie","schicksal"] },
          { title: "Ich räche das erste Opfer der verfluchten Klinge.", description: "In ruhigen Stunden flüstert die Klinge dem Helden von einem Verrat aus alter Zeit. Wer fiel zuerst durch ihren Schnitt, und welche Schuld klebt an ihrem Stahl? Der Held folgt der blutigen Spur in die Vergangenheit, um das erste Opfer zu rächen und vielleicht den Ursprung des Fluches zu verstehen.", hooks: ["verlust","kampf"] },
        ]
      },
      {
        text: "Stab der alten Zeiten", hooks: ["magie","wissen"],
        powerTags: [
          { text: "entfesselt rohe Arkanmacht", hooks: ["magie","schicksal"] },
          { text: "weckt vergessene Zauber", hooks: ["magie","wissen"] },
          { text: "verstärkt eigene Fähigkeiten", hooks: ["magie","handwerk"] },
          { text: "trägt Wissen alter Mager", hooks: ["wissen","magie"] },
        ],
        weaknessTags: [
          { text: "Macht stellt Forderungen", hooks: ["magie","macht"] },
          { text: "alte Zauber entgleiten", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "Ich erlerne die alte Sprache des Stabs.", description: "Der Stab birgt die Kraft eines Artefakts und das Wissen längst toter Mager, doch die alten Zauber entgleiten dem Helden, wenn ihm die Worte fehlen. Über den Runen, die seine Macht beherrschen, beugt er sich Nacht um Nacht. Erst wenn er die vergessene Sprache entziffert, wird der Stab ihm wahrhaft gehorchen.", hooks: ["wissen","magie"] },
          { title: "Ich finde den letzten Träger des alten Stabs.", description: "Macht stellt ihre Forderungen, und der Held ahnt, dass er nicht der Erste ist, der diesen Stab führte. Was geschah mit jenem, der ihn vor Zeitaltern trug? Der Held sucht nach Spuren des letzten Trägers, um aus dessen Schicksal zu lernen, ehe ihn dieselbe Bürde verschlingt.", hooks: ["wissen","geheimnis"] },
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
          { title: "Ich bewahre die Erinnerung an das verlorene Reich.", description: "Die Krone trägt die Autorität der Toten und gebietet über Schatten, doch niemand weiß mehr, welches Volk sie einst krönte. Der Held fühlt die vergessenen Eide in ihr nachhallen. Er gräbt in Ruinen und alten Liedern, um das untergegangene Reich ans Licht zu holen, ehe auch sein Name für immer verlischt.", hooks: ["adel","verlust"] },
          { title: "Ich suche die rechtmäßige Erbin des vergessenen Reiches.", description: "Andere wollen die Krone, und der Held spürt, dass sie nicht ihm gehört, sondern fragt, wer hier eigentlich wen trägt. Irgendwo lebt vielleicht das letzte Blut der Vergessenen. Er macht sich auf, die rechtmäßige Erbin zu finden, um ihr zurückzugeben, was die Toten so lange bewahrt haben.", hooks: ["adel","geheimnis"] },
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
          { title: "Ich entlarve eine Lüge mit dem Spiegel der Wahrheit.", description: "Der Spiegel enthüllt verborgene Wahrheiten, durchschaut jede Lüge und entlarvt selbst die falscheste Gestalt. Der Held weiß von einem Betrug, der Unschuldige ins Verderben stürzt. Mit dem Glas in der Hand stellt er den Lügner, bis dessen wahres Gesicht für alle sichtbar wird und der Trug zerbricht.", hooks: ["geheimnis","macht"] },
          { title: "Ich halte meiner eigenen Wahrheit stand.", description: "Was der Spiegel zeigt, verschont niemanden, denn er offenbart auch die eigene Schuld des Helden. Jeder Blick hinein ist eine Prüfung. Der Held lernt, dem standzuhalten, was ihm das Glas über sich selbst entgegenwirft, denn nur wer die eigene Wahrheit erträgt, darf sie über andere richten.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "selbstschreibendes Buch", hooks: ["magie","wissen","schicksal"],
        powerTags: [
          { text: "verzeichnet kommende Dinge", hooks: ["magie","schicksal"] },
          { text: "deutet verborgene Zeichen", hooks: ["geheimnis","wissen","schicksal"] },
          { text: "beantwortet jede Frage", hooks: ["wissen","magie"] },
          { text: "warnt vor Gefahr", hooks: ["magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "schreibt auch böse Omen", hooks: ["schicksal","verlust"] },
          { text: "hat einen eigenen Willen", hooks: ["magie","schicksal"] },
        ],
        quests: [
          { title: "Ich verhindere, dass das Buch die letzte Seite schreibt.", description: "Das Buch verzeichnet kommende Dinge und warnt vor Gefahr, doch es schreibt auch böse Omen, und auf der letzten Seite steht ein Ende, das der Held nicht hinnehmen will. Mit jedem Blatt rückt es näher. Er sucht fieberhaft einen Weg, das Vorhergesagte zu durchbrechen, ehe die Tinte sein Schicksal besiegelt.", hooks: ["schicksal","magie"] },
          { title: "Ich erfahre, wer das selbstschreibende Buch lenkt.", description: "Das Artefakt trägt eine eigene Geschichte und einen eigenen Willen, und der Held fragt sich, wessen Hand die Worte wirklich führt. Beantwortet es jede Frage, nur um ihn zu lenken? Er folgt den Zeilen bis zu ihrer Quelle, um zu erfahren, wer hinter der unaufhörlich schreibenden Feder steht.", hooks: ["geheimnis","wissen"] },
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
          { title: "Ich bewahre das Erbe der gefallenen Festung.", description: "Der Stein birgt die Kraft alter Mauern und hält jeden Sturm aus, doch er wurzelt nur an einem Ort und trägt die Erinnerung an eine Festung, die einst fiel. Der Held will wissen, warum sie wirklich brach. In den Trümmern ihrer Geschichte sucht er die Wahrheit, die unter dem Schutt begraben liegt.", hooks: ["verlust","macht"] },
          { title: "Ich errichte einen neuen Wall aus dem alten Stein.", description: "Unerschütterlicher Schutz schläft in dem Stein, doch seine Macht stellt Forderungen. Der Held sieht Wehrlose, die einen sicheren Ort brauchen. Mit der Kraft, die den Mut der Verteidiger weckt, will er einen letzten Wall errichten, hinter dem die Schwachen Zuflucht finden, wenn die Welt um sie her zerbricht.", hooks: ["natur","handwerk"] },
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
          { title: "Ich finde die letzte Erblinie des alten Königs.", description: "Die Kette trägt königliche Autorität und gebietet alten Gehorsam, doch sie ist auch die Last eines toten Throns, und andere wollen sie an sich reißen. Der Held weiß, dass ihr Gewicht nicht ihm bestimmt ist. Er sucht den letzten Erben des verschwundenen Königs, ehe Gierige die Macht für sich beanspruchen.", hooks: ["adel","geheimnis"] },
          { title: "Ich kitte das gebrochene Reich wieder zusammen.", description: "In den Gliedern der Kette hallen gebrochene Schwüre nach, und der Held spürt, wie ein Reich in Zwietracht zerfällt. Mit dem alten Gehorsam, den sie gebietet, will er zerrissene Treue neu binden. Bevor andere die Kette zu Krieg und Eroberung missbrauchen, soll sie das Zerbrochene wieder zusammenfügen.", hooks: ["adel","macht"] },
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
          { title: "Ich finde das passende Schloss für den rätselhaften Schlüssel.", description: "Der Schlüssel öffnet verschlossene Türen, weist den Weg und spürt verborgene Schwellen auf, doch zu keinem Schloss gehört er recht. Der Held fühlt, dass es eine einzige Tür gibt, für die er geschmiedet wurde. Er folgt dem ziehenden Drang des Schlüssels, bis er das Schloss findet, das auf ihn gewartet hat.", hooks: ["geheimnis","schicksal"] },
          { title: "Ich sehe hinter die letzte Tür, bevor sie sich schließt.", description: "Leicht zu verlieren und von Dieben begehrt, weist der Schlüssel den Helden auf eine Schwelle, die noch keiner überschritt. Was verbirgt sich hinter der letzten Tür, die er verschließt? Getrieben von einer Neugier, die stärker ist als die Furcht, will der Held öffnen, was niemand vor ihm öffnen durfte.", hooks: ["geheimnis","verlust"] },
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
          { title: "Ich lasse eine verlorene Stimme aus der Kapsel frei.", description: "Die Kapsel bewahrt die Worte der Toten und flüstert dem Helden Rat aus alter Zeit, doch die Stimmen verstummen nie und verändern ihn mit jedem Tag. Eine darunter fleht um Erlösung. Der Held sucht den Weg, diese gefangene Seele endlich gehen zu lassen, ehe das ewige Flüstern ihn selbst verschlingt.", hooks: ["verlust","magie"] },
          { title: "Ich höre das letzte Wort einer vergessenen Seele.", description: "In Träumen sprechen die verlorenen Stimmen, und eine enthüllt verborgene Wahrheiten, die niemand sonst kennt. Wessen Stimme wurde als letzte in die Kapsel eingeschlossen, und warum? Der Held lauscht durch den Lärm der Toten, bis er jenes eine letzte Wort vernimmt, das alles erklären könnte.", hooks: ["geheimnis","verlust"] },
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
          { title: "Ich finde meinen letzten Atem", description: "Ungesehen gleitet der Held durch Mauern und Stahl, doch zwischen den Lebenden findet er keinen Frieden. Etwas Unerledigtes kettet ihn an diese Welt, ein Faden, der reißen müsste und es nicht tut. Solange dieses Band besteht, bleibt jeder Ort nur ein Durchgang. Der Held wird der Ursache nachspüren, bis er weiß, was seinen Tod verhindert.", hooks: ["verlust","geheimnis"] },
          { title: "Ich finde Ruhe im Jenseits", description: "Der Held weiß, dass er nicht mehr hierher gehört, und das Wissen wiegt schwerer als jede Kette aus Salz und Eisen. Gemieden von Mensch und Tier, treibt er durch eine Welt, die ihn längst verloren glaubt. Irgendwo wartet eine Schwelle, ein letzter Übergang. Diesen Weg sucht der Held, damit er endlich gehen kann.", hooks: ["schicksal","verlust"] },
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
          { title: "Ich entkomme meinem Erbe", description: "Höllisches Blut brennt in den Adern des Helden und fordert seinen Tribut mit jedem Atemzug. Krallen, Feuer und ein Flüstern in fremden Köpfen verraten, wessen Kind er ist, und beide Welten hassen ihn dafür. Doch der Held will nicht sein, was man in ihm sieht. Er kämpft jeden Tag darum, dem dunklen Erbe nicht zu verfallen.", hooks: ["schicksal","magie"] },
          { title: "Ich finde die, die mich erschufen", description: "Etwas Dunkles rief den Helden in diese Welt, und er hat nie erfahren, wessen Hand ihn formte. Die Gabe, böse Magie zu wittern, weist ihm nun den Weg zurück zur Quelle. Verhasst bei Himmel wie Hölle, hat er nichts zu verlieren außer Antworten. Dem, der ihn erschuf, will der Held endlich ins Angesicht sehen.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "kleiner Hob", hooks: ["schicksal","natur","geheimnis"],
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
          { title: "Ich bewahre meinen Winkel", description: "Ungesehen, wenn er es will, kennt der Held jeden verborgenen Winkel und hütet einen, der ihm allein gehört. Dieser stille Ort ist mehr als Unterschlupf, er ist das Einzige, das ihn in dieser großen Welt festhält. Wer ihn betritt, weckt den nachtragenden Zorn eines kleinen Geistes. Gegen jeden Eindringling wird der Held seinen Winkel verteidigen.", hooks: ["natur","geheimnis"] },
          { title: "Ich löse den alten Handel ein", description: "Ein Pakt bindet den Helden, geschlossen vor langer Zeit, als ein listiger Streich noch alles war. Sein Wort ist ihm heilig, denn die kleinen Geister vergessen keine Schuld. Nun läutet die Stunde, in der die alte Abmachung eingelöst werden muss. Was immer es koste, der Held wird den Handel von einst erfüllen.", hooks: ["schicksal","glaube"] },
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
          { title: "Ich finde mein wahres Gesicht", description: "Jedes Gesicht trägt der Held mühelos, jede Stimme ahmt er nach, in jede Rolle schlüpft er wie in neue Haut. Doch unter all den Masken hat er vergessen, wie sein eigenes Antlitz aussieht. Die Verwandlung, die ihn rettet, droht ihn auch auszulöschen. Bevor er ganz verschwindet, will der Held herausfinden, wer er wirklich ist.", hooks: ["verlust","geheimnis"] },
          { title: "Ich entlarve einen Betrüger", description: "Niemand durchschaut eine Täuschung so rasch wie der Held, denn er kennt jeden Kniff des falschen Spiels von innen. Ein einziger Makel hat schon manche Verkleidung verraten, seine eigene wie die anderer. Jetzt treibt irgendwo ein Betrüger sein Unwesen hinter einer geborgten Gestalt. Diesen Schwindler wird der Held aufspüren und entlarven.", hooks: ["geheimnis","schicksal"] },
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
          { title: "Ich zähme das Mondblut", description: "Im Mondlicht erwacht die Kraft des Helden, doch bei Vollmond entfesselt sie etwas, das ihm nicht mehr gehorcht. Was bei Neumond zu kraftlosem Schweigen verebbt, tobt in heller Nacht wie eine Flut. Der Held spürt die Gezeiten des Mondes in seinem eigenen Blut wogen. Diese wilde Strömung will er beherrschen lernen, ehe sie ihn fortreißt.", hooks: ["magie","schicksal"] },
          { title: "Ich ergründe meine Sterndeutung", description: "Der Himmel spricht zum Helden in Zeichen, die nur er am nächtlichen Firmament zu lesen vermag. Jeder Stern scheint eine Botschaft zu tragen, jede Konstellation einen Wink auf das, was kommt. Doch noch fügen sich die Bilder nicht zu einem klaren Sinn. Der Held will ergründen, was der Sternenhimmel ihm seit jeher kündet.", hooks: ["wissen","schicksal"] },
        ]
      },
      {
        text: "Schattenwandler", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "verschwindet in den Schatten", hooks: ["geheimnis","schicksal"] },
          { text: "erscheint und verschwindet", hooks: ["schicksal","geheimnis"] },
          { text: "sieht vollständig im Dunkeln", hooks: ["schicksal","natur"] },
          { text: "weilt in ungesehenen Räumen", hooks: ["geheimnis","schicksal"] },
          { text: "schleicht ohne Geräusch", hooks: ["geheimnis","außenseiter"] },
        ],
        weaknessTags: [
          { text: "ihre Nähe verstört Menschen", hooks: ["schicksal","außenseiter"] },
          { text: "geschwächt im hellen Licht", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Ich erkunde das Schattenreich", description: "In den Schatten verschwindet der Held lautlos und taucht andernorts wieder auf, als gäbe es keine Entfernung. Seine Nähe verstört die Menschen, das helle Licht aber raubt ihm die Kraft, und so liebt er die Dunkelheit. Hinter den Schatten ahnt er eine andere Welt, weit und ungesehen. Ihre Tiefen will der Held erkunden, wohin ihm kein Lebender folgt.", hooks: ["geheimnis","schicksal"] },
          { title: "Ich verberge eine dunkle Wahrheit", description: "Ein Geheimnis lastet auf dem Helden, das niemals ans Tageslicht treten darf. In ungesehenen Räumen, dort wo das Licht versagt, fühlt er sich diesem Wissen am nächsten und am sichersten. Die Dunkelheit, die andere fürchten, ist ihm Verbündete und Versteck zugleich. Mit den Schatten als Schleier wird der Held diese dunkle Wahrheit hüten.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "halbwaches Traumkind", hooks: ["schicksal","geheimnis","magie"],
        powerTags: [
          { text: "wandelt durch Träume", hooks: ["magie","schicksal"] },
          { text: "hört Ungesagtes", hooks: ["geheimnis","schicksal"] },
          { text: "flüstert Gedanken in andere", hooks: ["magie","geheimnis"] },
          { text: "sieht kommende Dinge im Schlaf", hooks: ["schicksal","magie"] },
          { text: "wacht wenn andere träumen", hooks: ["schicksal","natur"] },
        ],
        weaknessTags: [
          { text: "verwechselt Traum und Wachsein", hooks: ["verlust","schicksal"] },
          { text: "verirrt sich in fremden Träumen", hooks: ["magie","verlust"] },
        ],
        quests: [
          { title: "Ich deute meine Visionen", description: "Im Halbschlaf wandelt der Held durch Träume und sieht Bilder dessen, was kommen wird. Doch die Visionen sprechen in Rätseln, und oft verschwimmt, was Vorahnung ist und was bloßer Wahn. Ungesagtes hört er und flüstert Gedanken in fremde Köpfe, und doch bleibt sein eigenes Schauen unklar. Der Held will lernen, die Bilder zu deuten, ehe sie ihn in die Irre führen.", hooks: ["schicksal","geheimnis"] },
          { title: "Ich finde den Weg zurück", description: "Zwischen Traum und Wachen hat der Held die Grenze verloren und weiß nicht mehr, welche Welt die wahre ist. In fremden Träumen verirrt er sich, bis das eigene Leben fern und verschwommen scheint. Der Schlaf, den er nicht braucht, ist ihm zum Labyrinth geworden. Den Pfad zurück ins eigene Dasein sucht der Held, ehe er sich ganz verliert.", hooks: ["verlust","schicksal"] },
        ]
      },
      {
        text: "Aschenwanderin", hooks: ["schicksal","fahrend","verlust"],
        powerTags: [
          { text: "übersteht Feuer", hooks: ["schicksal","magie"] },
          { text: "findet den Weg zwischen Welten", hooks: ["schicksal","fahrend"] },
          { text: "liest die Spuren im Staub", hooks: ["natur","fahrend"] },
          { text: "beschwört Asche als Schleier", hooks: ["verlust","fahrend"] },
          { text: "schläft sicher in Ruinen", hooks: ["fahrend","außenseiter"] },
        ],
        weaknessTags: [
          { text: "nirgends willkommen", hooks: ["außenseiter","fahrend"] },
          { text: "hinterlässt verbrannte Spuren", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Ich suche die verlorene Heimat", description: "Feuer nahm dem Helden alles und ließ nur Asche und Erinnerung zurück, die er mit sich trägt. Nirgends willkommen, hinterlässt er verbrannte Spuren, wo er rastet, und zieht weiter, ehe man ihn verjagt. Doch tief in ihm glimmt die Sehnsucht nach einem Ort, der bleibt. Eine verlorene Heimat sucht der Held, und er wandert, bis er sie findet.", hooks: ["verlust","fahrend"] },
          { title: "Ich finde die Glut der Schuldigen", description: "Das Feuer, das des Helden Leben verzehrte, brach nicht von selbst aus, das weiß er gewiss. Eine Hand legte die Glut, und in Staub und Trümmern liest er noch die Spuren jener Nacht. Das Feuer überstand er, doch die Schuld eines anderen brennt weiter in ihm. Der Glut der Schuldigen folgt der Held, bis ans bittere Ende.", hooks: ["verlust","schicksal"] },
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
          { title: "Ich kehre in die Tiefe heim", description: "Unter der Oberfläche atmet der Held und taucht in Tiefen, die kein Mensch erreicht, denn aus dem Wasser kam er einst. An Land aber bleibt er ruhelos und vertrocknet fern von den Fluten, die ihn nährten. Jeder Tag auf festem Boden fühlt sich an wie Gefangenschaft. In die Tiefe, aus der er stammt, sehnt sich der Held heimzukehren.", hooks: ["natur","schicksal"] },
          { title: "Ich befriede die zornigen Gewässer", description: "Der Held spürt die Strömungen und spricht mit den Wesen der Tiefe, und nun regt sich dort unten etwas Altes und Zorniges. Die Gewässer, die ihm Heimat sind, werden unruhig, und das Beben trägt sich bis an die Küsten. Er allein versteht ihre Sprache und vermag ihren Groll zu lindern. Die zornigen Gewässer will der Held wieder befrieden.", hooks: ["natur","magie"] },
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
          { title: "Ich finde meinen Platz dazwischen", description: "Weder dem Tag noch der Nacht gehört der Held, der ungesehen durch die Dämmerung geht und durch jeden Glamour blickt. Im hellen Mittag schwindet er fast dahin, doch in der Stunde dazwischen ist er ganz bei sich. Diese Heimatlosigkeit zwischen den Welten lastet auf ihm wie ein leiser Fluch. Eine Schwelle sucht der Held, eine Schwelle, auf der er endlich stehen darf.", hooks: ["außenseiter","schicksal"] },
          { title: "Ich hüte die Schwelle", description: "Im Zwielicht, wo der Held lebende Seelen spürt und Stimmungen mit bloßer Gegenwart wendet, öffnen sich Wege, die niemand betreten sollte. In der Dämmerung dünnt die Welt aus, und durch die Risse könnte kriechen, was draußen lauert. Der Held kennt diese verborgenen Pfade und ihre Gefahr. Über die Schwelle zwischen Tag und Nacht wird er wachen.", hooks: ["geheimnis","schicksal"] },
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
          { title: "Ich schließe den offenen Riss", description: "Durch den Helden, der dünne Stellen der Welt erspürt und verborgene Pforten öffnet, kam etwas herüber, das nicht hierher gehört. Die Sprache der anderen Seite versteht er, doch drüben vergisst er fast, wer er ist. Nun zieht der offene Riss weitere Wesen nach, und die Schuld lastet schwer. Den klaffenden Spalt will der Held wieder versiegeln, ehe Schlimmeres folgt.", hooks: ["magie","schicksal"] },
          { title: "Ich ergründe die andere Seite", description: "Jenseits des Risses liegt ein Reich, das den Helden ruft, seit er erstmals den Weg zwischen den Welten beschritt. Kurz verlässt er den Körper und lauscht der Sprache der anderen Seite, die ihn lockt und verstört. Die Geheimnisse jener Schwelle lassen ihn nicht mehr los. Die andere Seite will der Held ergründen, auch wenn er sich dort zu verlieren droht.", hooks: ["geheimnis","magie"] },
        ]
      },
      {
        text: "Gezeichnete des Mondes", hooks: ["schicksal","magie","natur"],
        powerTags: [
          { text: "verwandelt sich im Mondlicht", hooks: ["schicksal","natur"] },
          { text: "Krallen oder Reißzähne", hooks: ["schicksal","kampf"] },
          { text: "wittert Beute über weite Wege", hooks: ["natur","kampf"] },
          { text: "heilt im Schein des Mondes", hooks: ["schicksal","magie"] },
          { text: "bricht Fesseln durch rohe Kraft", hooks: ["natur","kampf"] },
        ],
        weaknessTags: [
          { text: "verliert Kontrolle bei Vollmond", hooks: ["magie","schicksal"] },
          { text: "das Mal verrät ihr Wesen", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "Ich bändige die Bestie in mir", description: "Wenn der volle Mond aufsteigt, verwandelt sich der Held, und Krallen, Reißzähne und ungezähmte Wildheit drohen ihn zu verschlingen. Das Mal an seinem Leib verrät sein wahres Wesen, sosehr er es auch zu verbergen sucht. Im Mondschein heilt er, doch der Preis ist der Verlust seiner selbst. Um die Herrschaft über die Bestie in ihm ringt der Held Nacht für Nacht.", hooks: ["schicksal","kampf"] },
          { title: "Ich finde das Rudel meiner Art", description: "Irgendwo da draußen leben andere, die dasselbe Mal tragen wie der Held, der Beute über weite Wege wittert. Allein unter den Menschen, gezeichnet und gefürchtet, sehnt er sich nach Wesen seiner Art. Vielleicht würde unter Seinesgleichen die ungezähmte Wildheit endlich einen Sinn ergeben. Nach dem Rudel seiner Art sucht der Held, das ihn versteht.", hooks: ["natur","außenseiter"] },
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
          { text: "ihr Wort trägt Gewicht", hooks: ["schicksal","macht"] },
          { text: "geborene Herrscherin", hooks: ["adel","macht","schicksal"] },
        ],
        weaknessTags: [
          { text: "Rivalen wollen den Thron", hooks: ["adel","macht","kampf"] },
          { text: "andere fordern meinen Tod", hooks: ["schicksal","kampf"] },
          { text: "Last der Krone", hooks: ["adel","verlust"] },
        ],
        quests: [
          { title: "Ich erringe den Thron, der mir gebührt", description: "Das Blut der Krone fließt in den Adern des Helden, und ein ganzes Reich wartet auf seinen rechtmäßigen Herrscher. Doch Rivalen umkreisen den leeren Thron und schmieden Ränke gegen sein Erbe. Geboren, um zu gebieten, folgt der Held diesem Ruf und wird einfordern, was ihm von Geburt an gehört.", hooks: ["adel","macht","schicksal"] },
          { title: "Ich beweise mich als würdige Herrscherin", description: "Eine Krone allein macht noch keinen Herrscher, und das spürt der Held mit jedem Schritt schwerer. Die Last der Verantwortung drückt, während andere an seinem Recht zweifeln und nach seinem Sturz trachten. So zieht der Held aus, um durch Taten statt durch Blut zu beweisen, dass er der Würde des Throns gewachsen ist.", hooks: ["adel","macht"] },
        ]
      },
      {
        text: "Untergang der Welt", hooks: ["schicksal","verlust"],
        powerTags: [
          { text: "erkennt das Ende in allem", hooks: ["schicksal","verlust"] },
          { text: "überlebt das Unmögliche", hooks: ["schicksal"] },
          { text: "sieht das nahende Unheil", hooks: ["schicksal","geheimnis"] },
          { text: "unerschütterlicher Mut", hooks: ["kampf","schicksal"] },
          { text: "steht immer wieder auf", hooks: ["schicksal","kampf"] },
        ],
        weaknessTags: [
          { text: "die Bestimmung fordert Opfer", hooks: ["schicksal","verlust"] },
          { text: "Feinde wollen mich verhindern", hooks: ["schicksal","kampf"] },
          { text: "vom Ende gezeichnet", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Ich rette die Welt vor dem Ende", description: "Der Held sieht das nahende Unheil, wo andere nur Frieden wähnen, denn er ist gezeichnet vom Ende der Dinge. Schon einmal überlebte er das Unmögliche, und dieser unerschütterliche Mut treibt ihn weiter. Wenn sonst niemand sich der drohenden Katastrophe stellen will, dann stellt der Held sich ihr in den Weg und weicht nicht.", hooks: ["schicksal","kampf"] },
          { title: "Ich verhindere den vorhergesagten Untergang", description: "Eine düstere Bestimmung läuft auf die Vernichtung zu, und ihr Schatten liegt schwer auf dem Helden, der vom Ende gezeichnet ist. Die Prophezeiung fordert Opfer und Feinde wollen ihn an seinem Werk hindern. Doch der Held glaubt nicht an ein unausweichliches Schicksal und wird die vorhergesagte Stunde des Untergangs mit eigener Hand zerbrechen.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "Sucher des Erzählers", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "findet Zeichen im Zufall", hooks: ["schicksal","geheimnis"] },
          { text: "Zeichen weisen den Weg", hooks: ["schicksal","geheimnis"] },
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
          { title: "Ich entdecke wer mich auserwählt hat", description: "Überall liest der Held Zeichen im Zufall und folgt dem verborgenen Faden der Geschichte, der sich um sein Leben spinnt. Etwas oder jemand hat ihn zu einer Bestimmung erkoren, doch der schmale Pfad lässt ihn an allem zweifeln. Besessen von der Suche wird der Held nicht ruhen, bis er der Hand begegnet, die ihn auserwählte.", hooks: ["schicksal","geheimnis"] },
          { title: "Ich finde den Erzähler hinter allem", description: "Verbotene Türen öffnen sich vor dem Helden, als wollten sie ihn tiefer in ein Geheimnis locken. Er spürt, dass eine unsichtbare Hand die Geschichte lenkt, in der er selbst nur eine Figur zu sein scheint. Getrieben von dieser Wahrheit sucht der Held den Erzähler hinter allem, um ihm endlich von Angesicht zu Angesicht gegenüberzustehen.", hooks: ["schicksal","geheimnis"] },
        ]
      },
      {
        text: "Auserwählter der Götter", hooks: ["schicksal","glaube"],
        powerTags: [
          { text: "Segen der Götter", hooks: ["glaube","schicksal","magie"] },
          { text: "wundersame Rettung", hooks: ["schicksal","magie"] },
          { text: "Schicksal beschützt mich", hooks: ["schicksal"] },
          { text: "Verbündete erscheinen", hooks: ["schicksal"] },
          { text: "trägt göttliche Autorität", hooks: ["glaube","macht","schicksal"] },
        ],
        weaknessTags: [
          { text: "die Götter fordern Gehorsam", hooks: ["glaube","schicksal"] },
          { text: "Hochmut verfolgt mich", hooks: ["schicksal","verlust"] },
          { text: "Ketzer fordern meinen Tod", hooks: ["glaube","kampf"] },
        ],
        quests: [
          { title: "Ich erfülle den Willen der Götter", description: "Der Segen der Götter ruht auf dem Helden, und wundersame Rettung begleitet seine Schritte, wo andere längst gefallen wären. Eine höhere Macht hat ihn gewählt und fordert nun Gehorsam von ihm. Mit göttlicher Autorität im Rücken folgt der Held diesem Ruf, auch wenn Hochmut ihn verfolgt und Ketzer nach seinem Leben trachten.", hooks: ["schicksal","glaube"] },
          { title: "Ich entscheide ob ich das Schicksal annehme", description: "Verbündete erscheinen wie aus dem Nichts, und das Schicksal scheint den Helden zu beschützen, doch ein Zweifel nagt an ihm. Vielleicht ist er wahrhaft der Auserwählte, vielleicht aber auch nur eine Lüge der Götter. Bevor er sich ihrem Willen ganz ergibt, will der Held die Wahrheit ergründen und selbst entscheiden, ob er dieses Schicksal annimmt.", hooks: ["schicksal","glaube"] },
        ]
      },
      {
        text: "das letzte Licht", hooks: ["schicksal","glaube"],
        powerTags: [
          { text: "leuchtet in der Finsternis", hooks: ["glaube","schicksal","magie"] },
          { text: "zieht die Richtigen an", hooks: ["schicksal"] },
          { text: "gibt allen Hoffnung", hooks: ["glaube","schicksal"] },
          { text: "Verbündete erscheinen", hooks: ["schicksal"] },
          { text: "hält die Dunkelheit zurück", hooks: ["glaube","kampf","magie"] },
        ],
        weaknessTags: [
          { text: "die Finsternis jagt mich", hooks: ["schicksal","verlust","kampf"] },
          { text: "darf niemals erlöschen", hooks: ["glaube","schicksal"] },
          { text: "trägt aller Hoffnung Last", hooks: ["glaube","verlust"] },
        ],
        quests: [
          { title: "Ich halte das Licht aufrecht", description: "Wo der Held steht, leuchtet ein Licht in der Finsternis, das die Richtigen anzieht und allen Hoffnung gibt. Doch die Dunkelheit drückt von allen Seiten und jagt ihn, denn sie weiß, was sein Schein bedeutet. Auf seinen Schultern liegt die Last aller Hoffnung, und so weicht der Held keinen Schritt zurück und hält das Licht am Brennen.", hooks: ["glaube","schicksal"] },
          { title: "Ich vertreibe die kommende Dunkelheit", description: "Ein Schatten wächst heran und droht die Welt zu verschlingen, während der Held als letztes Licht gegen ihn steht. Die Finsternis jagt ihn unablässig, denn sein Schein darf niemals erlöschen. Statt nur die Stellung zu halten, sammelt der Held seine Verbündeten und zieht aus, um die kommende Dunkelheit ein für alle Mal zu vertreiben.", hooks: ["glaube","kampf"] },
        ]
      },
      {
        text: "das Kind der Sterne", hooks: ["schicksal","magie"],
        powerTags: [
          { text: "die Sterne stehen günstig", hooks: ["schicksal","magie"] },
          { text: "Glück folgt meinen Schritten", hooks: ["schicksal"] },
          { text: "Vorhersehung leitet mich", hooks: ["schicksal","geheimnis"] },
          { text: "die Welt richtet sich aus", hooks: ["schicksal","magie"] },
          { text: "liest den Himmel", hooks: ["wissen","magie","schicksal"] },
        ],
        weaknessTags: [
          { text: "an den Sternenlauf gebunden", hooks: ["schicksal","magie"] },
          { text: "keine freie Wahl mehr", hooks: ["schicksal","verlust"] },
          { text: "fremd unter Menschen", hooks: ["außenseiter","schicksal"] },
        ],
        quests: [
          { title: "Ich erfülle wozu ich geboren wurde", description: "Die Sterne stehen günstig für den Helden, und das Glück folgt seinen Schritten, als richte sich die ganze Welt nach ihm aus. Lange hat er sich gegen die Vorhersehung gewehrt, die ihn leitet. Doch nun hört der Held auf zu kämpfen und nimmt an, dass alles in ihm angelegt ist, um zu erfüllen, wozu er geboren wurde.", hooks: ["schicksal","magie"] },
          { title: "Ich beweise dass ich frei bin", description: "Man sagt dem Helden, sein Pfad stehe längst in den Sternen geschrieben und er habe keine freie Wahl mehr. Doch fremd unter den Menschen und an den Sternenlauf gebunden, lehnt er sich gegen diese Gewissheit auf. Mit jedem Schritt, den der Held bewusst anders setzt, will er beweisen, dass sein Schicksal ihm allein gehört.", hooks: ["schicksal","außenseiter"] },
        ]
      },
      {
        text: "Trägerin des alten Zeichens", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "das Mal weist mich aus", hooks: ["schicksal","geheimnis","magie"] },
          { text: "verbotene Türen öffnen sich", hooks: ["schicksal","geheimnis"] },
          { text: "die Alten erkennen mich", hooks: ["schicksal","wissen"] },
          { text: "Zeichen pulsiert bei Gefahr", hooks: ["schicksal","magie"] },
          { text: "schwer zu widerstehen", hooks: ["schicksal","macht"] },
        ],
        weaknessTags: [
          { text: "das Mal zieht Jäger an", hooks: ["schicksal","kampf","geheimnis"] },
          { text: "kennt die Last nicht", hooks: ["schicksal","geheimnis"] },
          { text: "gezeichnet für immer", hooks: ["schicksal","verlust"] },
        ],
        quests: [
          { title: "Ich enträtsle das alte Zeichen", description: "Ein altes Mal weist den Helden aus, lässt verbotene Türen sich öffnen und die Alten ihn erkennen. Doch er kennt die wahre Last nicht, die das Zeichen ihm auferlegt, und Jäger folgen seiner Spur. Getrieben von der Ungewissheit wird der Held der Bedeutung des Mals auf den Grund gehen, das ihn für immer gezeichnet hat.", hooks: ["schicksal","geheimnis"] },
          { title: "Ich trage die Bürde des Zeichens", description: "Das alte Zeichen pulsiert bei jeder Gefahr und verlangt seinen Preis vom Helden, der es für immer trägt. Es lockt Jäger an und macht ihn zur Beute, doch fliehen kann er vor ihm nicht. Statt an der Bürde zu zerbrechen, sucht der Held einen Weg, mit dem Mal zu leben und seine Macht in seinem Sinne zu wenden.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "Schließerin des Risses", hooks: ["schicksal","magie"],
        powerTags: [
          { text: "bannt das Eindringende", hooks: ["magie","kampf","schicksal"] },
          { text: "Wege öffnen sich", hooks: ["schicksal"] },
          { text: "spürt den Riss der Welt", hooks: ["magie","geheimnis","schicksal"] },
          { text: "die Welt richtet sich aus", hooks: ["schicksal","magie"] },
          { text: "hält die Schwelle", hooks: ["magie","kampf"] },
        ],
        weaknessTags: [
          { text: "der Riss zehrt an mir", hooks: ["magie","verlust","schicksal"] },
          { text: "die Bestimmung fordert Opfer", hooks: ["schicksal","verlust"] },
          { text: "Kreaturen jenseits jagen mich", hooks: ["magie","kampf"] },
        ],
        quests: [
          { title: "Ich schließe den Riss endgültig", description: "Der Held spürt den Riss der Welt, aus dessen Spalt Verderben in die Wirklichkeit dringt. Wege öffnen sich ihm, und er allein vermag das Eindringende zu bannen und die Schwelle zu halten. Auch wenn der Riss an seinen Kräften zehrt und Kreaturen von jenseits ihn jagen, wird der Held den Spalt endgültig versiegeln.", hooks: ["schicksal","magie"] },
          { title: "Ich finde wer den Riss öffnete", description: "Der Spalt in der Welt entstand nicht von selbst, das weiß der Held, der seine zerstörerische Kraft am eigenen Leib fühlt. Die Bestimmung fordert Opfer, und Wesen von jenseits trachten ihm nach dem Leben. Doch der Held gibt sich nicht mit dem bloßen Schließen zufrieden und wird die Hand aufspüren, die den Riss öffnete.", hooks: ["geheimnis","magie"] },
        ]
      },
      {
        text: "Prophezeite der Tiefe", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "Träume offenbaren Geheimnisse", hooks: ["schicksal","geheimnis"] },
          { text: "Stimmen der Tiefe leiten mich", hooks: ["geheimnis","magie","schicksal"] },
          { text: "verborgene Helfer", hooks: ["schicksal","geheimnis"] },
          { text: "kennt die alten Weissagungen", hooks: ["wissen","geheimnis","schicksal"] },
          { text: "übersteht das verborgene Grauen", hooks: ["schicksal","kampf"] },
        ],
        weaknessTags: [
          { text: "die Tiefe ruft nach mir", hooks: ["schicksal","geheimnis","verlust"] },
          { text: "zweifelt an der Prophezeiung", hooks: ["schicksal","geheimnis"] },
          { text: "Albträume rauben den Schlaf", hooks: ["geheimnis","verlust"] },
        ],
        quests: [
          { title: "Ich ergründe die Prophezeiung der Tiefe", description: "In seinen Träumen offenbaren sich dem Helden Geheimnisse, und Stimmen aus der Tiefe leiten seine Schritte. Sie verkünden ein Schicksal, das er noch nicht versteht, während Albträume ihm den Schlaf rauben. Trotz aller Zweifel an der Prophezeiung folgt der Held den verborgenen Helfern und alten Weissagungen, um zu ergründen, was die Tiefe ihm bestimmt hat.", hooks: ["schicksal","geheimnis"] },
          { title: "Ich widerstehe dem Ruf der Tiefe", description: "Etwas Uraltes ruft nach dem Helden aus der Tiefe und will ihn ganz für sich gewinnen. Die Stimmen dringen in seine Träume, und der Schlaf wird ihm zur Qual, während der Zweifel an seiner Bestimmung wächst. Doch der Held hat das verborgene Grauen überstanden und schwört sich, dem lockenden Ruf der Tiefe niemals zu gehören.", hooks: ["schicksal","verlust"] },
        ]
      },
      {
        text: "Kind zweier Zeitalter", hooks: ["schicksal","verlust"],
        powerTags: [
          { text: "Wissen zweier Welten", hooks: ["wissen","schicksal"] },
          { text: "Brücke zwischen alt und neu", hooks: ["schicksal","geheimnis"] },
          { text: "Bestimmung pulsiert in mir", hooks: ["schicksal"] },
          { text: "übersteht den Wandel der Zeit", hooks: ["schicksal","verlust"] },
          { text: "erinnert das vergangene Zeitalter", hooks: ["wissen","verlust"] },
        ],
        weaknessTags: [
          { text: "in keiner Zeit zu Hause", hooks: ["außenseiter","verlust","schicksal"] },
          { text: "zerrissen zwischen den Welten", hooks: ["schicksal","verlust"] },
          { text: "von beiden Seiten misstraut", hooks: ["außenseiter","geheimnis"] },
        ],
        quests: [
          { title: "Ich überbrücke die zwei Zeitalter", description: "Der Held trägt das Wissen zweier Welten in sich und erinnert das vergangene Zeitalter, während er im neuen steht. Doch in keiner Zeit ist er ganz zu Hause, und beide Seiten begegnen ihm mit Misstrauen. Gerade diese Zerrissenheit aber wird gebraucht, und so wird der Held zur lebendigen Brücke zwischen dem Alten und dem Neuen.", hooks: ["schicksal","verlust"] },
          { title: "Ich leite den Wandel der Zeitalter", description: "Eine Welt geht zu Ende und eine andere beginnt, und der Held steht an der Schwelle zwischen beiden. Die Bestimmung pulsiert in ihm, doch zerrissen zwischen den Welten findet er nirgends Halt. Statt sich vom Wandel forttragen zu lassen, nimmt der Held das Erbe zweier Zeitalter auf und will den Übergang mit eigener Hand lenken.", hooks: ["schicksal","macht"] },
        ]
      },
      {
        text: "Erfüllerin des vergessenen Wortes", hooks: ["schicksal","geheimnis"],
        powerTags: [
          { text: "spricht das vergessene Wort", hooks: ["geheimnis","magie","schicksal"] },
          { text: "verbotene Türen öffnen sich", hooks: ["schicksal","geheimnis"] },
          { text: "kennt die verlorene Weissagung", hooks: ["wissen","geheimnis"] },
          { text: "die Welt richtet sich aus", hooks: ["schicksal","magie"] },
          { text: "ihr Wort trägt Gewicht", hooks: ["schicksal","macht"] },
        ],
        weaknessTags: [
          { text: "das Wort verlangt seinen Preis", hooks: ["schicksal","magie","verlust"] },
          { text: "viele begehren das Wort", hooks: ["geheimnis","macht","kampf"] },
          { text: "darf das Wort nie missbrauchen", hooks: ["schicksal","glaube"] },
        ],
        quests: [
          { title: "Ich finde das fehlende Wort", description: "Der Held kennt nur ein Bruchstück des vergessenen Wortes, dessen verbotene Türen sich ihm öffnen. Doch das Ganze verändert alles, und viele begehren die Macht, die in ihm schlummert. Im Wissen, dass er das Wort niemals missbrauchen darf, sucht der Held das fehlende Stück der verlorenen Weissagung, nach der die Welt sich auszurichten beginnt.", hooks: ["schicksal","geheimnis"] },
          { title: "Ich vollende das vergessene Wort", description: "Eine uralte Verheißung wartet darauf, durch die Stimme des Helden ihre Erfüllung zu finden. Das Wort, das er spricht, trägt Gewicht, doch es verlangt einen Preis, und viele wollen es für sich. Gebunden an das Gebot, es nie zu missbrauchen, nimmt der Held die Last auf sich und wird das vergessene Wort vollenden.", hooks: ["schicksal","magie"] },
        ]
      },
      {
        text: "Schlusspunkt der Geschichte", hooks: ["schicksal"],
        powerTags: [
          { text: "Bestimmung pulsiert in mir", hooks: ["schicksal"] },
          { text: "mein Antlitz erkennt jeder", hooks: ["schicksal","macht"] },
          { text: "handelt instinktiv richtig", hooks: ["schicksal"] },
          { text: "alle Wege enden bei mir", hooks: ["schicksal","macht"] },
          { text: "überlebt das Unmögliche", hooks: ["schicksal"] },
        ],
        weaknessTags: [
          { text: "das Ende lastet auf mir", hooks: ["schicksal","verlust"] },
          { text: "keine freie Wahl mehr", hooks: ["schicksal","verlust"] },
          { text: "zieht ungesuchte Feinde an", hooks: ["schicksal","kampf"] },
        ],
        quests: [
          { title: "Ich bringe die Geschichte zum Abschluss", description: "Alle Wege enden beim Helden, dessen Antlitz ein jeder erkennt und in dem die Bestimmung pulsiert. Schon einmal überlebte er das Unmögliche, und nun läuft alles auf ihn zu. Auch wenn das nahende Ende schwer auf ihm lastet und ungesuchte Feinde ihn umkreisen, wird der Held die Geschichte in sich zu ihrem Abschluss bringen.", hooks: ["schicksal"] },
          { title: "Ich bereite vor was nach mir kommt", description: "Der Held weiß, dass er der Schlusspunkt einer großen Geschichte ist und ihm keine freie Wahl mehr bleibt. Wenn sein Werk vollbracht ist, wird die Welt eine andere sein. Statt nur das Ende zu erwarten, handelt der Held instinktiv richtig und sorgt dafür, dass jemand bereitsteht für das, was nach ihm kommt.", hooks: ["schicksal","glaube"] },
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
          { text: "kennt jede Grenze des Reiches", hooks: ["macht","natur"] },
          { text: "Soldaten der Mark", hooks: ["kampf","macht"] },
          { text: "ein ergebenes Volk", hooks: ["macht","glaube"] },
          { text: "Banner und Wappen", hooks: ["adel","macht"] },
        ],
        weaknessTags: [
          { text: "zahlt persönlich fürs Reich", hooks: ["macht","verlust"] },
          { text: "jede Schwäche wird ausgenutzt", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Ich vergrößere mein Reich", description: "Die Mark, die der Held verwaltet, trägt sein Banner und nährt ihn mit Tributen, doch was er hält, sättigt seinen Ehrgeiz nicht. Jede Grenze des Reiches kennt er auswendig, und genau deshalb sieht er, wo sie weiter hinausgeschoben werden könnte. Sein Schatten soll länger werden, bis kein Nachbar mehr neben ihm aufrecht steht.", hooks: ["macht","kampf"] },
          { title: "Ich beschütze mein Land", description: "Soldaten der Mark stehen bereit und ein ergebenes Volk vertraut auf seinen Schutz. Diese Erde gehört zum Helden, wie er zu ihr gehört, und jede Bedrohung an der Grenze ist ein Angriff auf alles, was er ist. Solange sein Wappen weht, weicht er keinen Schritt, denn wer das Land bedroht, bedroht ihn selbst.", hooks: ["macht","natur","glaube"] },
        ]
      },
      {
        text: "Anführerin der Gilde", hooks: ["macht","handwerk","stadt"],
        powerTags: [
          { text: "Gildensiegel", hooks: ["handwerk","macht"] },
          { text: "eingespielte Verwaltung", hooks: ["macht","handwerk"] },
          { text: "Steuereinnahmen", hooks: ["macht","stadt"] },
          { text: "macht und bricht Rufe", hooks: ["macht","stadt"] },
          { text: "kennt jedermanns Schulden", hooks: ["geheimnis","macht"] },
        ],
        weaknessTags: [
          { text: "Konkurrenz um die Spitze", hooks: ["macht","stadt"] },
          { text: "jedes Bündnis hat seinen Preis", hooks: ["macht","stadt"] },
        ],
        quests: [
          { title: "Ich beherrsche den gesamten Handel", description: "Mit Gildensiegel und eingespielter Verwaltung lenkt der Held die Ströme der Stadt, und doch entgleitet ihm noch zu viel. Er kennt jedermanns Schulden und weiß, wie sehr Macht aus Wissen erwächst. Keine Ware soll diese Stadt verlassen, ohne dass er davon weiß, bis jeder Handel durch seine Hände führt.", hooks: ["macht","handwerk","stadt"] },
          { title: "Ich baue ein Netzwerk das mich überdauert", description: "Rufe macht und bricht der Held mit einem Wort, und seine Verwaltung läuft wie ein Uhrwerk. Doch Konkurrenz lauert um die Spitze, und jedes Bündnis fordert seinen Preis. Was er mühsam aufbaute, soll nicht mit ihm enden, sondern als Geflecht aus Treue und Schuld weiterwirken, lange nachdem er gegangen ist.", hooks: ["macht","stadt"] },
        ]
      },
      {
        text: "Lehnsherr von Stein", hooks: ["adel","macht"],
        powerTags: [
          { text: "Burg auf dem Berg", hooks: ["adel","macht"] },
          { text: "Recht zu richten", hooks: ["macht","glaube"] },
          { text: "Räte und Berater", hooks: ["macht","wissen"] },
          { text: "kennt die Adligen", hooks: ["adel","stadt"] },
          { text: "ihr Wort verurteilt", hooks: ["macht"] },
        ],
        weaknessTags: [
          { text: "der Thron wird begehrt", hooks: ["macht","adel"] },
          { text: "Schulden gegenüber Mächtigen", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Ich setze Recht durch das mich selbst trifft", description: "Von der Burg auf dem Berg spricht der Held Recht, und sein Wort verurteilt. Doch er weiß, dass Macht verdirbt, wenn sie sich selbst ausnimmt, und Mächtige stehen ohnehin in seiner Schuld. Das Gesetz gilt für alle oder für niemanden, und so beugt er sich derselben Klinge, die er über andere hält.", hooks: ["macht","glaube"] },
          { title: "Ich bin der gerechte Herrscher", description: "Räte und Berater flüstern dem Helden zu, und er kennt die Adligen, deren Gunst der Thron begehrt. Vor ihm saßen Tyrannen auf diesem Stein und beugten das Recht nach ihrer Laune. Er aber will anders sein, ein Herrscher, dessen Urteil das Volk nicht fürchtet, sondern dem es vertraut.", hooks: ["macht","glaube"] },
        ]
      },
      {
        text: "Königin des Tales", hooks: ["macht","natur"],
        powerTags: [
          { text: "ein ergebenes Volk", hooks: ["macht","glaube"] },
          { text: "spricht für ein Volk", hooks: ["macht","glaube"] },
          { text: "Tribute aus dem Land", hooks: ["macht","natur"] },
          { text: "wendet Krisen ab", hooks: ["macht","schicksal"] },
          { text: "kennt jede Grenze ihres Reiches", hooks: ["macht","natur"] },
        ],
        weaknessTags: [
          { text: "einsam an der Spitze", hooks: ["macht","verlust"] },
          { text: "zahlt persönlich für ihr Reich", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Ich schütze mein Tal vor allen Feinden", description: "Der Held spricht für sein Volk und kennt jede Grenze seines kleinen Reiches im Tal. Tribute nähren ihn, doch wahre Stärke schöpft er aus der Verbundenheit mit dieser Erde. Sie gehört zu ihm, wie er zu ihr gehört, und gegen jeden Feind, der über die Hänge kommt, stellt er sich an ihre Schwelle.", hooks: ["macht","natur","glaube"] },
          { title: "Ich beende einen Krieg um mein Land", description: "Ein ergebenes Volk blickt auf den Helden, wenn Krisen über das Tal hereinbrechen, und die Einsamkeit der Spitze lastet schwer. Der Krieg um sein Land fordert auf allen Seiten Tote und droht alles zu verzehren. Es muss enden, und jemand muss die Bürde des Friedens tragen, auch wenn er persönlich dafür bezahlt.", hooks: ["kampf","macht"] },
        ]
      },
      {
        text: "Befehlshaber der Wache", hooks: ["kampf","macht","stadt"],
        powerTags: [
          { text: "regiert durch Stärke", hooks: ["macht","kampf"] },
          { text: "bewegt Heere in Tagen", hooks: ["kampf","macht"] },
          { text: "Recht auf Krieg", hooks: ["macht","kampf"] },
          { text: "kennt jede Losung jeder Wache", hooks: ["stadt","kampf"] },
          { text: "Soldaten meines Reiches", hooks: ["kampf","macht"] },
        ],
        weaknessTags: [
          { text: "Aufstand gärt", hooks: ["macht","außenseiter"] },
          { text: "Entscheidungen ohne Gewissen", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Ich halte die Ordnung mit eiserner Hand", description: "Der Held regiert durch Stärke, und die Soldaten seines Reiches gehorchen jeder Losung. Doch unter der Oberfläche gärt ein Aufstand, und Ordnung hält nur, wer sie unnachgiebig durchsetzt. Niemand bricht das Gesetz dieser Stadt ungestraft, denn jede geduldete Schwäche wäre der erste Riss in der Mauer, die er aufrechterhält.", hooks: ["macht","kampf","stadt"] },
          { title: "Ich beende einen Krieg der das Land zerstört", description: "Heere bewegt der Held in wenigen Tagen, und das Recht auf Krieg liegt in seiner Hand. Doch er trifft Entscheidungen, die kein Gewissen mehr wägt, und die Toten liegen auf beiden Seiten. Der Krieg zerfrisst das Land, das er verteidigen soll, und so beschließt er, dass er enden muss, koste es, was es wolle.", hooks: ["kampf","macht"] },
        ]
      },
      {
        text: "Herrscherin des Zwielichtreiches", hooks: ["macht","schicksal","geheimnis"],
        powerTags: [
          { text: "beste Spione weit und breit", hooks: ["geheimnis","stadt"] },
          { text: "verborgene Reserven", hooks: ["macht","geheimnis"] },
          { text: "wendet Krisen ab", hooks: ["macht","schicksal"] },
          { text: "kennt jedes Schweigen", hooks: ["geheimnis","macht"] },
          { text: "zieht Fäden im Verborgenen", hooks: ["macht","geheimnis"] },
        ],
        weaknessTags: [
          { text: "Verräter im inneren Kreis", hooks: ["geheimnis","stadt"] },
          { text: "unsichtbare Feinde", hooks: ["geheimnis","macht"] },
        ],
        quests: [
          { title: "Ich beherrsche die Welt aus dem Schatten", description: "Die besten Spione weit und breit dienen dem Helden, und er zieht die Fäden im Verborgenen. Verborgene Reserven und ein Gespür für jedes Schweigen machen ihn zur unsichtbaren Macht. Sein Wille geschieht, ohne dass ein Name ihn trägt, und während andere um Throne ringen, lenkt er die Welt, ohne je gesehen zu werden.", hooks: ["macht","geheimnis"] },
          { title: "Ich finde heraus wer mich verraten hat", description: "Der Held kennt jedes Schweigen und wendet Krisen ab, ehe sie ans Licht treten. Doch ein Verräter sitzt in seinem inneren Kreis, und unsichtbare Feinde nutzen jede Lücke. Es war jemand, dem er vertraute, der die Fäden gegen ihn spann, und dieser Name muss ans Licht, ehe das ganze Netz zerreißt.", hooks: ["geheimnis","verlust"] },
        ]
      },
      {
        text: "Erbin einer Festung ohne Land", hooks: ["adel","verlust","macht"],
        powerTags: [
          { text: "Banner und Wappen", hooks: ["adel","macht"] },
          { text: "kann andere legitimieren", hooks: ["adel","macht"] },
          { text: "eine Handvoll treuer Soldaten", hooks: ["kampf","macht"] },
          { text: "uralte Ansprüche", hooks: ["adel","verlust"] },
          { text: "Burg auf dem Berg", hooks: ["adel","macht"] },
        ],
        weaknessTags: [
          { text: "ein Reich nur auf Papier", hooks: ["macht","verlust"] },
          { text: "Schulden gegenüber Mächtigen", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Ich erobere mein Erbe zurück", description: "Banner und Wappen führt der Held mit Stolz, und uralte Ansprüche stützen seinen Namen. Doch sein Reich besteht nur auf dem Papier, eine Burg auf dem Berg ohne Land darunter. Eine Handvoll treuer Soldaten folgt ihm, während Schulden gegenüber Mächtigen drücken. Der Titel ist sein, nun muss es auch die Erde sein.", hooks: ["adel","macht","verlust"] },
          { title: "Ich baue das Reich neu auf", description: "Andere kann der Held legitimieren, doch seine eigene Festung steht leer und verlassen. Uralte Ansprüche allein füllen keine Speicher und stellen keine Heere. Aus den nackten Mauern und einer Handvoll Getreuer will er wieder eine Macht formen, Stein um Stein, Eid um Eid, bis aus dem Reich auf Papier ein Reich aus Fleisch und Erde wird.", hooks: ["macht","schicksal"] },
        ]
      },
      {
        text: "Anführerin des Widerstands", hooks: ["außenseiter","kampf","macht"],
        powerTags: [
          { text: "kann Verbündete mobilisieren", hooks: ["macht"] },
          { text: "spricht für ein unterdrücktes Volk", hooks: ["macht","glaube"] },
          { text: "Boten in jede Richtung", hooks: ["macht","fahrend"] },
          { text: "regiert durch Überzeugung", hooks: ["macht","glaube"] },
          { text: "verborgene Reserven", hooks: ["macht","geheimnis"] },
        ],
        weaknessTags: [
          { text: "gejagt von der herrschenden Macht", hooks: ["macht","außenseiter"] },
          { text: "Verräter im inneren Kreis", hooks: ["geheimnis","stadt"] },
        ],
        quests: [
          { title: "Ich stürze den Tyrannen", description: "Der Held kann Verbündete mobilisieren und spricht für ein unterdrücktes Volk. Boten tragen seine Worte in jede Richtung, und verborgene Reserven warten auf den richtigen Moment. Doch die herrschende Macht jagt ihn, und ein Verräter könnte alles verraten. Solange der Tyrann herrscht, ist niemand frei, und so stellt er sich gegen den Thron selbst.", hooks: ["macht","kampf","außenseiter"] },
          { title: "Ich gebe dem Volk seine Stimme zurück", description: "Durch Überzeugung regiert der Held, nicht durch Furcht, und ein unterdrücktes Volk schart sich um seine Sache. Was man diesen Menschen nahm, ihre Stimme, ihr Recht, ihre Würde, will er für sie zurückholen. Gejagt von der Macht und verraten aus den eigenen Reihen, hält er dennoch daran fest, dass ihr Schweigen ein Ende haben muss.", hooks: ["macht","glaube"] },
        ]
      },
      {
        text: "Regentin für ein Kind", hooks: ["macht","adel","glaube"],
        powerTags: [
          { text: "Räte und Berater", hooks: ["macht","wissen"] },
          { text: "kann andere legitimieren", hooks: ["adel","macht"] },
          { text: "Vertrauen der Mächtigen", hooks: ["macht","adel"] },
          { text: "beherrscht das Gleichgewicht der Mächte", hooks: ["macht","stadt"] },
          { text: "ihr Wort gilt am Hof", hooks: ["macht","adel"] },
        ],
        weaknessTags: [
          { text: "Macht nur geliehen", hooks: ["macht","verlust"] },
          { text: "der Thron wird begehrt", hooks: ["macht","adel"] },
        ],
        quests: [
          { title: "Ich wahre den Thron für das Kind", description: "Räte und Berater umgeben den Helden, und sein Wort gilt am Hof, doch die Macht ist ihm nur geliehen. Er beherrscht das Gleichgewicht der Mächte und kann andere legitimieren, während der Thron von vielen begehrt wird. Bis das Kind alt genug ist, hält er die Wölfe fern, die nur auf einen Augenblick der Schwäche warten.", hooks: ["macht","adel","glaube"] },
          { title: "Ich gebe die Macht ab wenn es Zeit ist", description: "Das Vertrauen der Mächtigen ruht auf dem Helden, und am Hof verneigt man sich vor seinem Wort. Doch er weiß, dass diese Macht nicht die seine ist, sondern nur geborgt für eine kurze Frist. Wenn die Zeit kommt, wird er sie zurückgeben, auch wenn der Thron verlockt und mancher ihm einflüstert, sie zu behalten.", hooks: ["macht","adel"] },
        ]
      },
      {
        text: "Herrscherin durch Geburt und Last", hooks: ["adel","schicksal","macht"],
        powerTags: [
          { text: "ererbtes Recht", hooks: ["adel","macht"] },
          { text: "ein ergebenes Volk", hooks: ["macht","glaube"] },
          { text: "wendet Krisen ab", hooks: ["macht","schicksal"] },
          { text: "Banner und Wappen", hooks: ["adel","macht"] },
          { text: "Räte und Berater", hooks: ["macht","wissen"] },
        ],
        weaknessTags: [
          { text: "einsam an der Spitze", hooks: ["macht","verlust"] },
          { text: "kann die Krone nicht ablegen", hooks: ["macht","schicksal"] },
        ],
        quests: [
          { title: "Ich trage die Bürde der Krone", description: "Ererbtes Recht legte dem Helden die Krone aufs Haupt, und ein ergebenes Volk blickt zu ihm auf. Banner und Wappen künden von seinem Hause, und Räte stützen seine Herrschaft. Doch niemand fragte ihn, ob er dies wollte, und einsam an der Spitze kann er die Krone nicht ablegen. Das Reich ruht auf ihm, und er trägt es.", hooks: ["macht","schicksal","adel"] },
          { title: "Ich baue ein Reich das mich überdauert", description: "Krisen wendet der Held ab, wie es sein ererbtes Recht von ihm verlangt, doch die Last drückt schwer und einsam. Die Krone lässt sich nicht ablegen, also gibt er ihr einen Sinn, der größer ist als er selbst. Er legt Grundsteine für die Herrschaft nach ihm, damit aus erzwungener Pflicht ein Reich erwächst, das ihn überdauert.", hooks: ["macht","schicksal"] },
        ]
      },
      {
        text: "Herrin der verbotenen Stadt", hooks: ["macht","stadt","geheimnis"],
        powerTags: [
          { text: "Zugang zu verschlossenen Orten", hooks: ["geheimnis","macht"] },
          { text: "beste Spione weit und breit", hooks: ["geheimnis","stadt"] },
          { text: "kennt das Geheimnis aller", hooks: ["geheimnis","macht"] },
          { text: "ihr Wort verurteilt", hooks: ["macht"] },
          { text: "verborgene Reserven", hooks: ["macht","geheimnis"] },
        ],
        weaknessTags: [
          { text: "jede Schwäche wird ausgenutzt", hooks: ["macht","stadt"] },
          { text: "alte Intrigen holen sie ein", hooks: ["stadt","verlust"] },
        ],
        quests: [
          { title: "Ich halte das Tor der Stadt verschlossen", description: "Zugang zu verschlossenen Orten hat allein der Held, und die besten Spione melden ihm jede Regung. Er kennt das Geheimnis aller, und sein Wort verurteilt, doch jede Schwäche wird sogleich ausgenutzt. Was hinter den Mauern dieser Stadt ruht, darf die Welt niemals erreichen, und so wacht er über das Tor, das verschlossen bleiben muss.", hooks: ["macht","stadt","geheimnis"] },
          { title: "Ich entlarve die wahren Strippenzieher", description: "Verborgene Reserven und ein Wissen um die Geheimnisse aller geben dem Helden Macht, doch alte Intrigen holen ihn ein. Hinter allem, was in der verbotenen Stadt geschieht, bewegen sich verborgene Hände, deren Ziele er nicht durchschaut. Er folgt den Fäden zurück, bis er die wahren Strippenzieher ans Licht zerrt, ehe sie ihn zu Fall bringen.", hooks: ["geheimnis","macht"] },
        ]
      },
      {
        text: "Gebieterin über Leben und Tod", hooks: ["macht","glaube","schicksal"],
        powerTags: [
          { text: "Recht zu richten", hooks: ["macht","glaube"] },
          { text: "ihr Wort verurteilt", hooks: ["macht"] },
          { text: "ein ergebenes Volk", hooks: ["macht","glaube"] },
          { text: "regiert durch Furcht und Gnade", hooks: ["macht","schicksal"] },
          { text: "Räte und Berater", hooks: ["macht","wissen"] },
        ],
        weaknessTags: [
          { text: "Entscheidungen ohne Gewissen", hooks: ["macht","verlust"] },
          { text: "einsam an der Spitze", hooks: ["macht","verlust"] },
        ],
        quests: [
          { title: "Ich spreche das letzte Urteil", description: "Das Recht zu richten liegt beim Helden, und sein Wort verurteilt, gestützt von Räten und einem ergebenen Volk. Durch Furcht und Gnade regiert er, doch jede Entscheidung trifft er ohne ein Gewissen, das ihn mahnt. Über Leben und Tod entscheidet allein er, und niemand sonst darf die Waage halten, die er in Händen trägt.", hooks: ["macht","glaube","schicksal"] },
          { title: "Ich gebe die Macht ab bevor sie mich verdirbt", description: "Ein ergebenes Volk fürchtet und liebt den Helden, der durch Furcht und Gnade gebietet. Doch die Einsamkeit der Spitze zehrt, und er spürt, wie die Macht über Leben und Tod sein Gewissen aushöhlt. Es ist Zeit, sie loszulassen, ehe sie ihn ganz verdirbt, wenn es nicht für seine Seele schon zu spät ist.", hooks: ["macht","verlust"] },
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
          { title: "Ich erschaffe das Meisterwerk meines Lebens.", description: "Das Feuer gehorcht dem Helden, und seine Klingen tragen Helden in die Schlacht, doch eines fehlt noch. Eine einzige Waffe soll alles übertreffen, was seine Hand je formte, und Jahrhunderte überdauern. Sie wird seinen Namen weitertragen, lange nachdem die Esse erkaltet ist.", hooks: ["handwerk","schicksal"] },
          { title: "Ich erlerne die letzte Schmiedetechnik.", description: "Der Held kennt die Seele jedes Materials, und doch ahnt er, dass irgendwo ein Verfahren wartet, das ihm bisher verschlossen blieb. Diese letzte Kunst lässt ihm keine Ruhe, denn ohne sie bleibt selbst der Größte unvollendet. Er wird sie aufspüren, koste es, was es wolle.", hooks: ["handwerk","wissen"] },
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
          { title: "Ich finde jemanden, der mich übertrifft.", description: "Der Held liest jeden Gegner, ehe dieser die Klinge hebt, und gilt längst als Legende. Doch an der Spitze ist es einsam, und kein Sieg wärmt mehr. Erst ein ebenbürtiger Gegner würde ihn wieder lebendig machen, und nach diesem einen Menschen sucht er, der ihn endlich zwingt, alles zu geben.", hooks: ["handwerk","kampf"] },
          { title: "Ich beweise, dass meine Kunst keinen Krieg braucht.", description: "Endlose Herausforderer haben den Helden gelehrt, dass sein Ruf nur Tod und Blut anzieht. Doch seine Technik ohne Namen ist mehr als ein Werkzeug zum Töten. Er will der Welt beweisen, dass seine meisterhafte Kontrolle auch Schönheit schaffen kann, nicht nur Gräber.", hooks: ["handwerk","glaube"] },
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
          { title: "Ich verändere die Welt mit meiner Kunst.", description: "Der Held sieht ganze Jahre im rohen Werkstück und vollbringt, was andere für unmöglich halten. Sein Ehrgeiz reicht über bloßes Bauen hinaus, denn er will etwas erschaffen, das eine verschlossene Tür für immer aufstößt. Sein Werk soll der Welt einen Weg öffnen, den vor ihm niemand sah.", hooks: ["handwerk","macht"] },
          { title: "Ich hinterlasse ein Erbe, das mich überdauert.", description: "Die eigene Größe ist dem Helden Last und Antrieb zugleich, und der Gedanke an Vergänglichkeit treibt ihn an. Er errichtet ein Bauwerk, das der Zeit trotzt und noch steht, wenn sein Name längst verklungen ist. Stein soll bezeugen, dass er einst hier war, auch ohne dass jemand sich erinnert.", hooks: ["handwerk","schicksal"] },
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
          { title: "Ich erschaffe ein Lied, das nie verstummt.", description: "Mit unverwechselbarem Stil bewegt der Held jedes Herz, und sein Ruf öffnet ihm jede Tür. Doch Beifall verklingt, und das genügt ihm nicht mehr. Er will eine Weise schaffen, die so tief trifft, dass man sie noch Generationen nach ihm singt, lange nachdem die Stimme selbst verstummt ist.", hooks: ["handwerk","schicksal"] },
          { title: "Ich wende die Mächtigen allein durch meine Worte.", description: "Der Neid der anderen und die Feinde, die sein Ruhm anzieht, haben dem Helden gezeigt, wie viel Macht in einer Stimme liegt. Mit meisterhafter Kontrolle will er beweisen, dass ein Lied mehr bewegt als jedes Heer. Wo Schwerter scheitern, sollen seine Worte die Mächtigen wenden.", hooks: ["handwerk","macht"] },
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
          { title: "Ich zeige, dass Heilung keinen Krieg braucht.", description: "Selbst andere Meister suchen beim Helden Rat, denn er erkennt Fehler, die allen anderen verborgen bleiben. Doch dieselbe Kunst, die heilt, könnte auch schaden, und manche fürchten genau das. Er will allen zeigen, dass sein Wissen einzig dem Leben dient und niemals zur Waffe wird.", hooks: ["handwerk","glaube"] },
          { title: "Ich besiege ein Leiden für immer.", description: "Der Held kennt jede Variante der Heilung und vollbringt, was unmöglich scheint, und doch hat ein Leiden zu viele dahingerafft. Kein Verlust verzeiht er sich leicht, und diese eine Krankheit lässt ihm keinen Frieden. Er will sie nicht nur lindern, sondern für immer von der Welt tilgen.", hooks: ["handwerk","macht"] },
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
          { title: "Ich webe etwas, das die Welt verändert.", description: "Mit geheimen Techniken formt der Held, was lebendig ist, und kennt die Seele jedes Materials. Seine eigene Größe droht ihn zu verschlingen, doch er will sie nutzen, um etwas zu schaffen, das zuvor unmöglich schien. Sein Werk soll eine Tür aufstoßen, hinter der ein neues Verständnis vom Leben selbst wartet.", hooks: ["handwerk","magie"] },
          { title: "Ich überschreite die Grenze des Erschaffbaren.", description: "Der Held wird gefürchtet wie gerühmt, denn seine Technik passt sich jeder Umgebung an und überschreitet, was andere wagen. Doch er fragt sich, wo das Weben des Lebens an seine letzte Schranke stößt. Diese Grenze will er finden und ausloten, selbst wenn er dabei riskiert, sie zu überschreiten.", hooks: ["handwerk","geheimnis"] },
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
          { title: "Ich rette, was von meiner Schule bleibt.", description: "Der Held trägt ein verlorenes Erbe und beherrscht eine Technik ohne Namen, die sonst niemand mehr kennt. Als Letzter seiner Schule lastet das ganze Wissen auf seinen Schultern. Er gibt es nicht dem Vergessen preis, sondern bewahrt jede Lektion und jeden Griff, damit die Kunst seinen Tod überlebt.", hooks: ["handwerk","verlust"] },
          { title: "Ich vollende das Werk meines Lehrers.", description: "Sein Lehrer starb mit halbfertiger Hand, und der Held kennt die Geschichte des Fachs wie kein Zweiter. Mit meisterhafter Kontrolle nimmt er auf, was unvollendet blieb. Er führt das Werk zu Ende, als wären es die Hände des Meisters selbst, und ehrt so, was ihm anvertraut wurde.", hooks: ["handwerk","verlust"] },
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
          { title: "Ich meistere die letzte verbotene Technik.", description: "Der Held wirkt, was andere fürchten, und vollbringt mit geheimen Techniken das Unmögliche. Doch eine verbotene Kunst fehlt ihm noch, und er spürt, wo sie verborgen liegt. Obwohl die Hüter ihn dafür jagen, wird er ihr nachgehen, denn sein Streben nach Vollendung wiegt schwerer als jede Gefahr.", hooks: ["handwerk","geheimnis"] },
          { title: "Ich nutze meine Kunst nur, um Frieden zu wahren.", description: "Gefürchtet wie gerühmt zieht der Held mit seiner verbotenen Kunst Feinde an, und viele sehen in ihm nur Bedrohung. Doch er kennt jede Variante seines Fachs und weiß, dass selbst das Verbotene heilen kann. Er will beweisen, dass auch die gefürchtete Kunst dem Guten zu dienen vermag.", hooks: ["handwerk","glaube"] },
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
          { title: "Ich gebe meine Kunst weiter, bevor sie verloren geht.", description: "Der Held lehrt mit einem einzigen Blick, und selbst andere Meister suchen seinen Rat. Doch niemand reicht an seine Ebene heran, und so droht sein Können mit ihm zu sterben. Das ist ihm zu kostbar, und er sucht jenen einen, der würdig genug ist, sein Wissen zu empfangen.", hooks: ["handwerk","wissen"] },
          { title: "Ich finde einen würdigen Erben für meine Kunst.", description: "Der Held erkennt ungeahnte Fehler und veredelt fremdes Werk mit leichter Hand, doch er erträgt kein Mittelmaß. Sein Wissen verlangt einen Erben, der das Erbe wirklich tragen kann, nicht bloß einen eifrigen Nachahmer. Nach diesem einen Schüler hält er Ausschau, der seiner Kunst gewachsen ist.", hooks: ["handwerk","verlust"] },
        ]
      },
      {
        text: "Legende zu Lebzeiten", hooks: ["handwerk","schicksal"],
        powerTags: [
          { text: "ihr Name flößt Ehrfurcht ein", hooks: ["handwerk","schicksal"] },
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
          { title: "Ich werde dem Mythos gerecht, der mich umgibt.", description: "Schüler aus aller Welt strömen herbei, und der Held gilt schon zu Lebzeiten als Legende. Doch die Geschichten über ihn sind größer geworden als er selbst, und ihre Last droht ihn zu erdrücken. Er muss beweisen, dass er den Mythos verdient, ehe der Neid der anderen ihn zu Fall bringt.", hooks: ["handwerk","schicksal"] },
          { title: "Ich verändere die Welt durch meine Kunst.", description: "Der Ruf des Helden öffnet jede Tür, und er vollbringt, was anderen unmöglich bleibt. Doch bloße Bewunderung genügt ihm nicht, denn ein Name wie seiner sollte mehr bewirken. Er will seinen Ruhm nutzen, um etwas in der Welt zu verschieben, das ohne ihn für immer feststünde.", hooks: ["handwerk","macht"] },
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
          { title: "Ich kartiere die letzte unbekannte Route.", description: "Der Held liest Himmel und Strömung und findet jeden Weg, in jeder Umgebung. Doch er hält zu hohe Standards, um sich mit bekanntem Wasser zu begnügen. Irgendwo wartet eine Route, die noch kein Kiel je befuhr, und er wird der Erste sein, der sie kartiert.", hooks: ["handwerk","fahrend"] },
          { title: "Ich gebe mein Navigationswissen weiter.", description: "Mit meisterhafter Kontrolle kennt der Held jede Variante seines Fachs, doch niemand erreicht seine Ebene. Der Gedanke, dass sein Wissen vom Kurs mit ihm versinkt, lässt ihn nicht los. Er will es der nächsten Generation übergeben, damit andere die Wege finden, die er einst allein beschritt.", hooks: ["handwerk","wissen"] },
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
          { title: "Ich einige die Gilde unter einem gemeinsamen Banner.", description: "Der Held führt eine Werkstatt mit eigenem Namen, setzt den Maßstab des Fachs und beherrscht selbst verwandte Disziplinen. Doch Rivalen streiten um den Vorsitz, und die Gilde droht zu zerfallen. Er will alle Meister seines Fachs unter einem Banner einen, ehe der Zwist das Erbe zerreißt.", hooks: ["handwerk","macht"] },
          { title: "Ich öffne die Gilde und gebe mein Wissen weiter.", description: "Sein Ruf öffnet dem Helden jede Tür, und Schüler aus aller Welt drängen zu ihm. Doch seine eigene Größe droht ihn zur Geisel zu machen, wenn er das Wissen für sich behält. Er öffnet die Gilde für alle Würdigen und gibt sein Können ungeschmälert weiter, statt es zu horten.", hooks: ["handwerk","wissen"] },
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
          { title: "Zorn am Himmel", description: "Der Held ruft Stürme und biegt das Wetter nach seinem Willen, doch in seiner Brust glüht alter Zorn. Sterbliche haben sein Reich entweiht, ohne die Macht zu ahnen, die sie reizten. Nun sammelt er die Wolken über ihren Köpfen, denn sein erschütternder Donnerschrei soll sie lehren, was es heißt, einen Titan herauszufordern.", hooks: ["natur","macht"] },
          { title: "Ruhe finden", description: "Jeder seiner gigantischen Schritte erschüttert den Boden, und wo der Held auftaucht, bricht Panik aus. Er ist zu groß für die Menschenwelt, und seine tobenden Kräfte gehorchen ihm nur halb. Bevor ein einziger Wutausbruch alles um ihn herum fortreißt, sucht er nach Stille in sich, nach einem Weg, den Sturm zu zügeln.", hooks: ["schicksal","verlust"] },
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
          { title: "Herr des Sumpfes", description: "Aus verschleierndem Nebel wachen die vielen Köpfe des Helden über jeden Pfad durch das Moor. Dies ist sein Revier, an Sumpf und Wasser gebunden, und jeder Eindringling stört die uralte Ordnung. Mit nachwachsenden Gliedern und tödlichem Gift treibt er jeden zurück, der es wagt, in seine trübe Welt einzudringen.", hooks: ["natur","kampf"] },
          { title: "Niemals enthauptet", description: "Schlägt man dem Helden einen Kopf ab, wachsen zwei nach, doch er kennt die eine verwundbare Stelle, die ihn enden ließe. Jäger lernen dazu, und eines Tages werden auch sie das Geheimnis entdecken. Darum sucht er selbst nach der Wahrheit über seinen letzten Kopf, ehe ein Fremder sie gegen ihn wendet.", hooks: ["geheimnis","verlust"] },
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
          { title: "Legende bleiben", description: "In den lautlosen Tiefen des Sees ist der Held kaum mehr als ein Schauder, ein Gerücht unter Fischern. Seine enorme Größe macht ihn zur begehrten Trophäe, sobald er sich zeigt. Darum hütet er sein Geheimnis und bleibt ein Flüstern am Lagerfeuer, das sich niemals ganz dem Tageslicht offenbart.", hooks: ["geheimnis","natur"] },
          { title: "Der trockengelegte See", description: "Der uralte Seegrund ist Versteck und Heimat des Helden, an die Tiefe gebunden wie an sein eigenes Blut. Doch Menschen graben Kanäle und senken die Fluten, Stück um Stück. Bevor sie sein Gewässer zerstören und ihn dem gierigen Blick der Jäger preisgeben, muss er ihr Werk vereiteln und die Tiefe bewahren.", hooks: ["natur","verlust"] },
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
          { title: "Hüter des alten Hains", description: "Der Held spricht die Sprache der Erde, und die Tiere des Waldes folgen seinem Wort. Doch jenseits des Dickichts blitzen Äxte, und Rauch kündet von Bränden, die sein Wesen versengen könnten. Langsam, aber unbeirrbar zieht er seine wuchernden Wurzeln zusammen, um den letzten Urwald vor Axt und Flamme zu schützen.", hooks: ["natur","glaube"] },
          { title: "Wachsen ohne Ende", description: "Wo der Held seine Ranken ausstreckt, erwacht totes Land zu grünem Leben. Das verödete Reich ringsum ruft nach ihm, nach Wurzeln und Schatten und der alten Ordnung des Hains. Schwerfällig, doch unermüdlich breitet er sein lebendiges Reich aus, bis selbst die kahlsten Ebenen unter seinem Dickicht atmen.", hooks: ["natur","macht"] },
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
          { title: "Die geschändeten Gipfel", description: "Mit übermächtiger Stärke und einer Haut aus Fels und Erz ist der Held eins mit dem Gebirge, das ihn gebar. Doch Bergleute schlagen Stollen in sein uraltes Gestein und reißen Wunden in seinen Grund. Mit baumfällendem Schwanz vertreibt er die Eindringlinge, denn fern der Berge schwindet seine Kraft, und dieses Revier ist alles.", hooks: ["natur","kampf"] },
          { title: "Ältestes Blut", description: "In den Adern des Helden pocht das Blut der Urwesen, älter als jede Chronik der Menschen. Wer waren sie, und warum blieb nur er zurück? Bevor das Wissen für immer im Stein verschüttet wird, folgt er den verwitterten Spuren durch sein Gebirge, um den Ursprung seines uralten Geschlechts zu ergründen.", hooks: ["schicksal","geheimnis"] },
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
          { title: "Ich finde meinesgleichen", description: "Der Held altert nicht und übersteht jede Wunde, doch keine Macht heilt die endlose Einsamkeit in ihm. Aus den Zeitaltern, die er durchwandert hat, ist niemand seiner Art geblieben. Mit unergründlichem Blick durchsucht er die Welt nach einem Zeichen, einem Atemzug, der ihm verriete, dass irgendwo noch ein anderer überlebt hat.", hooks: ["außenseiter","verlust"] },
          { title: "Letztes Erbe", description: "Der Held trägt das Wissen vergangener Zeitalter, ein Schatz, der mit ihm zu verlöschen droht. Jäger sehen in ihm nur eine begehrte Trophäe, nicht das Vermächtnis, das er hütet. Bevor seine Art ganz aus der Erinnerung fällt, sucht er einen Würdigen, dem er all das anvertrauen kann, was nur er noch weiß.", hooks: ["verlust","schicksal"] },
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
          { title: "Verlorene Göttlichkeit", description: "Einst war der Held mehr als sterblich, umgeben von einer Aura der Furcht und einem Blut jenseits aller Magie. Doch seine Göttlichkeit verblasst, Funke um Funke, gebunden an einen alten Namen, den kaum noch jemand kennt. Verzweifelt sucht er einen Weg, die schwindende Macht zurückzurufen, ehe von ihm nur ein Schatten bleibt.", hooks: ["glaube","verlust"] },
          { title: "Letzte Anbeter", description: "Noch beten Gläubige zu dem Helden, und in ihren Gebeten lebt der letzte Funke seiner Göttlichkeit fort. Doch der Kult schrumpft, die Altäre verwaisen, und mit jedem vergessenen Namen verblasst auch er. Darum wacht er über seine letzten Anbeter, denn solange einer ihn ruft, ist er noch nicht ganz dahin.", hooks: ["glaube","schicksal"] },
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
          { title: "Nicht geweckt werden", description: "Tief im Eis schläft der Held, und sein Schlaf formt die Welt in stillen, gewaltigen Strömungen. Doch er ist verwundbar im Erwachen, und Narren mit Hacken und Feuer wollen ihn vor der Zeit befreien. Ehe sie ihn ungeschützt aus dem Frost brechen, muss er sie aufhalten, damit die rechte Stunde nicht zu früh schlägt.", hooks: ["geheimnis","schicksal"] },
          { title: "Die Stunde des Erwachens", description: "Eisige Kälte umgibt den Helden, während seine Träume bis in ferne Lande reichen. Wenn er endgültig erwacht, wird unermessliche Kraft mit ihm aufsteigen, doch der Zeitpunkt liegt im Dunkeln. In seinen Träumen sucht er das eine Zeichen, das sein Erwachen verkündet, damit er nicht schwach und unvorbereitet ans Licht tritt.", hooks: ["schicksal","verlust"] },
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
          { title: "Untergegangene Welt", description: "Der Held trägt die übermächtige Stärke und das Wissen einer toten Welt, der Zeit entrückt und fremd in dieser Gegenwart. Alles, was er kannte, ist Staub und Sage geworden. Mit einem Schrei, der die Erde erschüttert, durchstreift er das Land auf der Suche nach den letzten Resten seines versunkenen Zeitalters.", hooks: ["verlust","wissen"] },
          { title: "Ich überdauere", description: "Fremd in dieser Zeit und gebunden an alte Riten findet der Held keinen Platz unter den neuen Völkern. Doch er weiß, dass Welten kommen und gehen, und dass auch diese eines Tages Wesen wie ihn rufen wird. Darum harrt er aus, geduldig wie der Stein, bis die Stunde der Titanen wiederkehrt.", hooks: ["schicksal","glaube"] },
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
          { title: "Ewige Wache", description: "Ein Schreckenskreis umgibt den Helden, und er spürt den Tod auf Meilen herannahen. An die Schwelle gebunden, kennt er das Rätsel der Pforte, die er bewacht, und das Grauen dahinter. Was auch immer hindurchdrängt, lässt er nicht vorbei, denn fiele das Tor, fiele mehr als nur ein Wächter.", hooks: ["glaube","kampf"] },
          { title: "Von der Pflicht erlöst", description: "Endlos währt die Wacht des Helden an der Schwelle, gebunden an jeden Pakt, den er einst schwor. Die Jahrhunderte haben ihn ausgehöhlt, doch verlassen darf er den Posten nicht. So sucht er insgeheim einen Würdigen, dem er das Rätsel der Pforte und die ewige Pflicht übertragen kann, um endlich Ruhe zu finden.", hooks: ["glaube","verlust"] },
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
          { title: "Den Hunger zähmen", description: "Ein unstillbarer Hunger treibt den Helden, und seine zermalmenden Schlünde verschlingen alles, was ihm zu nahe kommt. Doch dieser Trieb übermannt ihn, reißt ihn fort, bis nichts mehr bleibt. Bevor der Hunger das Letzte in ihm verzehrt, sucht er einen Weg, den uralten Drang zu beherrschen, statt ihm willenlos zu dienen.", hooks: ["natur","verlust"] },
          { title: "Unter Menschen wandeln", description: "Der Held kann auf Menschengröße schrumpfen und seine Diener gehorchen ihm aus den Tiefen. Doch wo er auftaucht, bricht Panik aus, sobald jemand sein wahres Wesen erahnt. Verkleinert und verborgen will er unter Sterblichen leben, ihre Welt verstehen und seinen Hunger zähmen, ohne dass das Ungeheuer in ihm ans Licht kommt.", hooks: ["geheimnis","außenseiter"] },
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
          { title: "Auftrag zu zweit gemeistert", description: "Allein wäre der Held nur eine Klinge unter vielen, doch im Trupp findet er seine wahre Stärke. Schulter an Schulter, in geschlossener Klingenlinie, hat seine Schwertbande schon manches überstanden. Eine Aufgabe wartet, die kein Einzelner bewältigt, und der Held weiß: Nur gemeinsam, als verschworener Haufen, lässt sie sich vollbringen.", hooks: ["glaube","fahrend"] },
          { title: "Die Bande zusammenhalten", description: "Eine Schwertbande, die jedem Befehl gehorcht und als Trupp durch die Lande zieht, ist mehr als ihre einzelnen Klingen. Doch sie ist auch lärmig, unbeherrscht und verlangt ihren Sold, und solcher Zwist droht sie zu zersprengen. Der Held kämpft darum, seine Leute beieinanderzuhalten, denn ohne die Bande ist er nichts.", hooks: ["kampf","verlust"] },
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
          { title: "Meinen Hund beschützen", description: "Der treue Wolfshund an seiner Seite ist mehr als ein Tier: unfehlbare Spürnase, schlafloser Wächter, der den Helden im Notfall schon oft gerettet hat. Doch der Gefährte beschützt nur ihn und gerät dabei leicht selbst in Gefahr. Ohne dieses Tier geht es für den Helden nicht weiter, und so wacht nun er über den, der über ihn wacht.", hooks: ["glaube","kampf"] },
          { title: "Die Witterung verfolgen", description: "Was Augen und Ohren des Helden entgeht, fängt die unfehlbare Nase seines Wolfshunds mühelos auf. Eine Fährte hat das Tier aufgenommen, eine Spur, die kein Mensch je gefunden hätte. Der Held vertraut dem Gefährten blind und folgt der Witterung, wohin sie auch führt, denn der Hund irrt sich nie.", hooks: ["natur","fahrend"] },
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
          { title: "Den Geist verstehen", description: "Ein unsichtbarer Schutzgeist wacht über den Helden, flüstert ihm Warnungen zu und wendet das Unglück ab, ehe es ihn trifft. Doch warum diese Macht sich gerade an ihn gebunden hat, bleibt ihm ein Rätsel. Der Held will begreifen, wem er seine Rettungen verdankt, denn ein Beschützer, den man nicht versteht, schweigt vielleicht im falschen Moment.", hooks: ["geheimnis","schicksal"] },
          { title: "Seinen letzten Willen erfüllen", description: "Der Schutzgeist, der dem Helden feindliche Absichten verrät und das Unheil von ihm fernhält, ist an dessen Schicksal gefesselt. Doch dieser Beistand währt nicht ewig: Eine alte, ungeklärte Sache hält die Seele zurück. Der Held will herausfinden, was sie bindet, und ihren letzten Willen erfüllen, ehe der Geist für immer schweigt.", hooks: ["schicksal","verlust"] },
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
          { title: "Den Pixie zähmen", description: "Der freche Pixie an der Seite des Helden ist ein Meister der Ablenkung, zerstreut Wachen und beobachtet aus dem Verborgenen. Doch das kleine Wesen stiftet auch ständig Unfug und handelt ungefragt das Falsche. Der Held bemüht sich, die Streiche des Kobolds in nützliche Bahnen zu lenken, ehe dessen Übermut sie beide ins Verderben reißt.", hooks: ["magie","natur"] },
          { title: "Sein Versprechen einlösen", description: "Ein kleiner Zauberstreich hier, eine geschickte Ablenkung dort: Der freche Pixie ist ein launischer, doch wertvoller Gefährte. Aus der Feenwelt schuldet ihm das Wesen noch einen Gefallen, ein Versprechen, das eingelöst werden will. Der Held drängt darauf, dass der Kobold sein Wort hält, auch wenn der ständige Unfug die Sache nicht leichter macht.", hooks: ["magie","geheimnis"] },
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
          { title: "Das Vermächtnis ehren", description: "Der Falke, der aus der Höhe späht und stets den Weg zurückfindet, ist das letzte Andenken an die Mutter des Helden. Mehr als ein Jagdtier ist er ein Stück ihres Erbes, scheu vor Fremden, vertraut nur ihm. Solange der Vogel auf seiner Faust sitzt, hält der Held die Erinnerung an seine Mutter lebendig und wacht über ihr Vermächtnis.", hooks: ["verlust","glaube"] },
          { title: "Den Falken heimbringen", description: "Der Falke seiner Mutter bringt dem Helden das Gesuchte und kehrt aus jeder Ferne heim, doch ein Ort ruft das Tier stärker als alle anderen. Dort, wo seine Mutter den Vogel einst hielt, gehört der Falke wohl wirklich hin. Der Held nimmt die Reise auf sich, um das letzte Andenken an jenen heimatlichen Platz zurückzubringen.", hooks: ["natur","verlust"] },
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
          { title: "Den Pakt erfüllen", description: "Auf seinen Ruf erscheint der Geist, durchschreitet Wände und teilt verborgenes Wissen, doch er dient nur dem Pakt, den der Held einst schloss. Fordert die Erscheinung ihren Preis und der Held bleibt ihn schuldig, so endet der Beistand. Darum hält er seinen Teil der Abmachung mit Sorgfalt, denn ein gebrochener Pakt verwandelt den Diener leicht in eine Gefahr.", hooks: ["magie","macht"] },
          { title: "Den wahren Namen finden", description: "Der beschworene Geist deutet den Pakt eigenwillig und biegt sich jede Klausel zurecht, solange sein wahrer Name verborgen bleibt. Der Held ahnt: Wer diesen Namen kennt, gebietet wirklich über das Wesen, statt nur seinen Launen ausgeliefert zu sein. Also sucht er nach dem einen Wort, das die Erscheinung zwingt und den Pakt endlich in seine Hand legt.", hooks: ["geheimnis","wissen"] },
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
          { title: "Den alten Freund würdigen", description: "Überall verrufen und mit alten Knochen geschlagen, ist der zerlumpte Strolch dennoch der treueste Gefährte des Helden. Er kennt jede Gasse, schmuggelt Botschaften und findet überall Unterschlupf, und vor allem steht er treu zu ihm. Mehr Treue als jeder Edelmann steckt in diesem alten Halunken, und der Held will ihm endlich die Ehre erweisen, die er verdient.", hooks: ["außenseiter","glaube"] },
          { title: "Ein letztes Abenteuer", description: "Der treue alte Strolch hat schon manche Botschaft geschmuggelt und manchen Unterschlupf geteilt, doch seine Knochen sind alt geworden und seine Tage gezählt. Bevor der Gefährte sich zur Ruhe legt, will der Held mit ihm noch einmal hinausziehen. Ein letztes Abenteuer zu zweit, eine letzte gemeinsame Gasse, ehe der alte Freund für immer rastet.", hooks: ["fahrend","verlust"] },
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
          { title: "Sein Schweigen ehren", description: "Der stumme Wächter versteht jedes Zeichen des Helden, hält unermüdlich Wache und verrät niemals ein Wort, denn er kann nicht sprechen. In seinem Schweigen bewahrt er ein Geheimnis, das nie über seine Lippen kommt. Der Held achtet diese Verschwiegenheit als Tugend, schützt den oft Missverstandenen vor fremdem Urteil und hütet das Vertrauen, das zwischen ihnen wortlos gewachsen ist.", hooks: ["geheimnis","glaube"] },
          { title: "Ihm eine Stimme geben", description: "Unverbrüchlich treu hält der stumme Wächter dem Helden die Wacht, doch warum er verstummt ist, weiß niemand, und von Fremden wird er stets missverstanden. Der Held will das Schweigen durchdringen und herausfinden, was dem Gefährten einst die Stimme nahm. Vielleicht lässt sich heilen, was ihn verstummen ließ, und dem treuen Wächter endlich wieder eine Stimme geben.", hooks: ["geheimnis","verlust"] },
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
          { title: "Das Haus bewahren", description: "Der Geist des Hauses kennt jeden Winkel der alten Mauern, verbirgt den Helden im Gemäuer und weckt ihn, sobald Eindringlinge nahen. Doch der Hüter ist an das Haus gebunden und erträgt keine Fremden. Solange das Gemäuer steht, hat der Geist eine Heimat und der Held einen Beschützer, darum kämpft er darum, die alten Mauern vor Verfall und Feinden zu bewahren.", hooks: ["geheimnis","magie"] },
          { title: "Den Hausgeist erlösen", description: "Treu hütet der Geist die alten Mauern und wacht über den Helden, doch er ist an das Haus gefesselt und kann es niemals verlassen. Der Held spürt das stille Leid des Hüters und will herausfinden, was ihn an dieses Gemäuer bindet. Wenn er die alte Fessel löst, schenkt er dem treuen Geist vielleicht endlich die Erlösung.", hooks: ["geheimnis","verlust"] },
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
          { title: "Ihr Vertrauen verdienen", description: "Lautlos schleichend und schneller als jedes Pferd, durchschaut die wilde Katze jede Lage und handelt dabei ganz nach eigenem Willen. Sie bleibt nur, solange sie es selbst will, und verschwindet nach Lust und Laune. Der Held weiß, dass kein Zwang dieses Tier hält, und müht sich geduldig darum, das Vertrauen der eigensinnigen Gefährtin Schritt für Schritt zu verdienen.", hooks: ["natur","schicksal"] },
          { title: "Ihrem Instinkt folgen", description: "Die wilde Katze mit Verstand durchschaut Gefahren, die dem Helden verborgen bleiben, und folgt einem Instinkt, der selten trügt. Wohin das eigensinnige Tier ihn auch führt, dort liegt oft die Antwort, die er sucht. Auch wenn die Gefährtin ihrem eigenen Willen gehorcht und nach Lust verschwindet, lernt der Held, ihrer untrüglichen Witterung zu vertrauen.", hooks: ["schicksal","natur"] },
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
          { title: "Die Bande anführen", description: "Eine Schar erprobter Veteranen steht dem Helden zur Seite, alte Waffenbrüder, die jede Schlachtordnung kennen und die Stellung halten. Doch ohne Hauptmann sind sie führerlos, zerstritten und von alten Wunden gezeichnet. Der Held sieht die Stärke, die in diesen Männern noch schlummert, und will derjenige werden, der sie wieder zu einer Einheit schmiedet und in den Kampf führt.", hooks: ["kampf","macht"] },
          { title: "Einen letzten Feldzug beenden", description: "Die Veteranenbande hat schon manche Schlacht geschlagen, doch der Krieg ließ ihren letzten Auftrag unvollendet, und seither nagt das Unfertige an den zerstrittenen Männern. Der Held erkennt, dass diese Wunde tiefer sitzt als jede Narbe. Gemeinsam mit den alten Waffenbrüdern will er den unterbrochenen Feldzug zu Ende bringen, damit die Bande endlich Frieden findet.", hooks: ["kampf","verlust"] },
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
          { title: "Die Probe bestehen", description: "Roher Urgewalt entsprungen, entfacht der Elementargeist Feuer und bändigt Wind und Welle, doch noch ist er nicht gebunden und prüft unablässig den Willen des Helden. Bei jeder Schwäche droht die Macht ihm zu entgleiten. Der Held weiß, dass der Geist nur bleibt, wenn er sich seiner würdig erweist, und stellt sich entschlossen jeder Prüfung, die das Wesen ihm auferlegt.", hooks: ["magie","schicksal"] },
          { title: "Den Pakt besiegeln", description: "Noch dient der Elementargeist nur auf Probe und entgleitet dem Helden, sobald dessen Wille wankt, eine ungezähmte Urgewalt, die jederzeit fortzustürmen droht. Der Held will dieser Ungewissheit ein Ende setzen und das Wesen dauerhaft an sich binden. Gelingt es ihm, den Pakt zu besiegeln, so steht ihm die Macht von Feuer, Wind und Welle für immer zur Seite.", hooks: ["magie","macht"] },
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
          { title: "Den Sturm bändigen", description: "Die Winde gehorchen dem Held, doch der Sturm hört selten ganz auf ihn, und jeder Zauber lässt ihn erschöpft zurück. Schon einmal entglitt ihm das Unwetter und traf, wen es nicht treffen sollte. Diese Schuld treibt ihn an, seine Gabe endlich zu meistern, ehe der nächste Donner Unschuldige verschlingt.", hooks: ["magie","natur"] },
          { title: "Rache des Himmels", description: "Der Held sah sein Land unter fremden Händen verwüstet, und in ihm braut sich etwas zusammen, das dunkler ist als jede Wolke. Er kann den Donner rufen und den Feind verfluchen. Nun will er das Wetter selbst gegen jene herabrufen, die das Unrecht begingen, auch wenn der Himmel ihm nur widerwillig dient.", hooks: ["natur","kampf","verlust"] },
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
          { title: "Würdige Hände", description: "Die Götter legten dem Held heilendes Licht in die Hände, doch sein eigener Körper zahlt für jeden Segen den Preis. Da er keinen Leidenden abweisen kann, droht ihn die Last zu verzehren. Also ringt er um die Weisheit, seine geschenkte Kraft nur für jene einzusetzen, die ihrer wahrhaft würdig sind.", hooks: ["magie","glaube"] },
          { title: "Gunst der Götter halten", description: "Alles Heilen, alle Schutzzauber des Held fließen aus dem Segen einer Gottheit, deren Gunst so zerbrechlich ist wie kostbar. Ein Fehltritt, ein Bruch des Glaubens, und das tröstende Licht könnte für immer erlöschen. Darum hält der Held seiner Gottheit treu, denn ohne ihre Gnade sind seine Hände nur noch Hände.", hooks: ["glaube","magie"] },
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
          { title: "Ruhelose Seelen erlösen", description: "Der Held sieht durch den Schleier und hört die Toten, die im Bannkreis nach Antwort verlangen. Ihre ruhelose Klage lässt ihn nicht schlafen, denn er allein vermag ihnen zu helfen. So zieht er aus, gefangene Geister von ihrer Last zu lösen und ihnen endlich den Weg in den Frieden zu weisen.", hooks: ["geheimnis","magie","verlust"] },
          { title: "Den Schleier wahren", description: "Wo der Held mit Geistern spricht, wird die Grenze zwischen Lebenden und Toten dünn, und seine Gabe zieht gefährliche Aufmerksamkeit auf sich. Etwas drängt von der anderen Seite herüber. Darum zieht er Bannkreis um Bannkreis und wacht darüber, dass der Schleier geschlossen bleibt, ehe er ganz zerreißt.", hooks: ["magie","geheimnis"] },
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
          { title: "Das vollkommene Ritual", description: "Der Held kennt die Regeln der Magie und spricht die alten Worte, doch jedes große Ritual fordert Zeit und birgt unberechenbare Nebenwirkungen. Ein Zauber widersteht ihm seit jeher, derselbe, an dem schon seine Lehrmeister zerbrachen. Ihn endlich zu vollenden ist zur stillen Besessenheit geworden, die den Held Nacht für Nacht antreibt.", hooks: ["magie","handwerk"] },
          { title: "Wissen weitergeben", description: "Was nützt die Kunst des Held, wenn sie mit seinem letzten Atemzug verlischt? Seine Rituale brauchen Zeit, und die Zeit eines Menschen ist kurz. Darum sucht er eine Schülerin, der er die alten Worte und die Regeln der Magie anvertrauen kann, damit das Wissen ihn überdauert und nicht verloren geht.", hooks: ["magie","wissen","handwerk"] },
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
          { title: "Die wandelnde Formel", description: "In ihrer Werkstatt, ohne die der Held hilflos ist, braut er Tränke und erkennt verborgene Wirkstoffe, die anderen entgehen. Eine Formel aber lockt ihn mehr als alle anderen: jenes Rezept, das gewöhnliche Stoffe in etwas Wunderbares verwandelt. Diese Verheißung treibt ihn an, auch wenn sein eigener Körper für jeden Versuch zahlt.", hooks: ["magie","wissen","handwerk"] },
          { title: "Gegengift für die Pest", description: "Der Held kennt die Heilkräuter und die verborgenen Wirkstoffe, und doch frisst eine Seuche sich durch die Dörfer, gegen die noch kein Mittel hilft. An seine Werkstatt gebunden, beugt er sich über Kessel und Salben. Das eine Gegengift zu finden, das diese Krankheit stillt, ist die Aufgabe, die alles andere überwiegt.", hooks: ["magie","handwerk","natur"] },
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
          { title: "Die verlorene Rune", description: "Der Held ritzt mächtige Runen und liest die Magie aus den Dingen, doch ein Zeichen fehlt, dessen Macht seit Generationen vergessen ist. Eine falsche Rune zerstört alles, also wiegt jede Suche schwer. Dennoch lässt ihn der Gedanke an das verlorene Zeichen nicht los, denn mit ihm wäre seine Kunst endlich vollständig.", hooks: ["magie","wissen","geheimnis"] },
          { title: "Unzerstörbarer Bann", description: "Mit alten Worten und uralten Schutzzaubern bannt der Held das Böse, doch was er schreibt, können andere nicht lesen, und ein Fehler zunichte machen. Nun strebt er nach dem dauerhaftesten Werk: jene Runen zu ritzen, die einen Ort für immer schützen. Ein Bann, der noch steht, wenn der Held längst Staub ist.", hooks: ["magie","glaube"] },
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
          { title: "Die versiegte Quelle", description: "Der Held ruft die Flut und spricht mit den Tiefen, doch fern vom Wasser ist er machtlos, und jeder Zauber verlangt seinen Preis. Nun ist das Land verdorrt und die Quelle versiegt, das Leben weicht aus der Erde. Also macht er sich auf, das Wasser dorthin zurückzubringen, wo es einst sprudelte.", hooks: ["natur","magie"] },
          { title: "Pakt mit den Tiefen", description: "Einst sprach der Held mit den Wesen unter den Wellen und schloss einen Pakt, der ihm seine Macht über die Flut verlieh. Doch jede Gabe verlangt einen Preis, und das Versprechen wiegt schwer. Nun ist die Zeit gekommen, das Wort einzulösen, das er den Tiefen gab, ehe sie es einfordern.", hooks: ["magie","geheimnis","schicksal"] },
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
          { title: "Der Traum hinter dem Traum", description: "Der Held flüstert in fremde Träume, biegt den Zufall und deutet die Vorzeichen, doch im Schlaf droht er sich selbst zu verlieren. Eine Vision sucht ihn seit Jahren Nacht für Nacht heim und lässt ihn nicht los. Dem Traum hinter dem Traum zu folgen, bis er seinen Sinn versteht, ist sein heimlicher Antrieb.", hooks: ["magie","schicksal","geheimnis"] },
          { title: "Den Albträumen ein Ende", description: "Der Held sieht durch den Schleier und wandelt durch die Träume anderer, doch seine Gabe zieht gefährliche Aufmerksamkeit auf sich. Irgendwo quält ein Schrecken einen Schläfer, vergiftet jede seiner Nächte. Der Held kann es nicht ertragen und will hineingehen in diese Albträume, um den Geplagten von ihrem Griff zu befreien.", hooks: ["magie","geheimnis"] },
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
          { title: "Das versiegelte Tor", description: "Der Held öffnet verschlossene Wege und schreitet durch Schwellen, die anderen verborgen bleiben, doch jeder Übergang verlangt seinen Preis, und etwas folgt durch die Tür. Unbedacht hat er einen Weg aufgetan, der besser geschlossen geblieben wäre. Nun lässt ihm der Gedanke keine Ruhe, dieses Tor für immer zu versiegeln, ehe Schlimmeres hindurchtritt.", hooks: ["magie","geheimnis"] },
          { title: "Weg zwischen den Welten", description: "Der Held sieht die verborgenen Verbindungen und schreitet durch Schwellen, die für andere bloß Wände sind. Eine Sehnsucht treibt ihn weiter, als jede gewöhnliche Tür reicht: der Pfad in das Reich jenseits des unseren. Ihn zu finden, auch wenn der Übergang einen Preis fordert und etwas hindurch folgen mag, lässt ihn nicht ruhen.", hooks: ["magie","fahrend","geheimnis"] },
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
          { title: "Die gestörte Ordnung", description: "Der Held spürt die gestörte Ordnung wie einen Misston und steht an der Grenze von Magie und Natur, wo das Gleichgewicht ins Wanken gerät. Jeder Bann, jeder Schutzzauber zehrt an ihm. Dennoch muss er der Wurzel des Ungleichgewichts nachgehen, das die Welt aus dem Lot bringt, ehe alles vollends zerfällt.", hooks: ["magie","natur","schicksal"] },
          { title: "Weder Licht noch Schatten", description: "Der Held hebt Flüche und wahrt die Grenze von Magie und Natur, doch sein Eid verbietet ihm, je eine Seite zu ergreifen, und die Magie erschöpft ihn. Beide Lager drängen ihn, sich zu erklären. Trotzdem hält er das Gleichgewicht, auch wenn ihn Licht wie Schatten dafür verachten, denn dies ist seine Bestimmung.", hooks: ["magie","glaube","natur"] },
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
          { title: "Die letzte verlorene Silbe", description: "Der Held spricht die alten Worte und liest fremde Magie, doch nach jedem Zauber entgleitet ihm sein Wissen wieder. Eine Silbe fehlt, die letzte, die die uralte Sprache wieder ganz machen würde. Sie zu finden ist seine stille Besessenheit, auch wenn ein einziges Wort zu viel verheerende Folgen heraufbeschwören kann.", hooks: ["magie","wissen","verlust"] },
          { title: "Zu gefährlich zu bewahren", description: "Der Held kennt die Regeln der Magie und Worte von roher Macht, doch eben diese Worte könnten die Welt zerreißen, spräche ein Unbedachter sie aus. Da ihm ohnehin jeder Zauber wieder entfällt, weiß er um die Gefahr. Darum will er dieses Wissen tilgen, ehe es in falsche Hände gerät und alles verschlingt.", hooks: ["magie","wissen","geheimnis"] },
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
          { title: "Ich spiele die verlorene Melodie wieder", description: "Die selbst geschnitzte Panflöte hängt griffbereit am Gürtel, doch eine Weise aus Kindheitstagen ist dem Held entfallen, so sehr er auch sucht. Jede halb erinnerte Note schmerzt wie ein verlorenes Stück seiner selbst. Er wird nicht ruhen, bis die seelenbewegende Melodie wieder rein aus dem Rohr klingt und ihn heimholt.", hooks: ["fahrend","verlust"] },
          { title: "Ich vollende mein Meisterstück", description: "Mit eigenen Händen schnitzte der Held das Rohr, und sein Klang lockt jeden Lauscher herbei. Doch das Holz ist zerbrechlich, und ein feiner Misston nagt an seinem Ohr. Er feilt und probt unermüdlich weiter, denn erst wenn jeder Ton vollkommen rein erklingt, ist die Flöte wahrhaft sein Werk.", hooks: ["handwerk"] },
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
          { title: "Ich bewahre meine Klingen geheim", description: "Unter dem Mantel trägt der Held stets eine versteckte Waffe, blitzschnell gezogen, wenn die Not es verlangt. Sein Vorteil lebt allein davon, dass niemand ahnt, wie viele Dolche ihn wirklich umgürten. Eine Leibesvisitation könnte alles verraten, darum wahrt er sein Geheimnis sorgsam und lässt keinen zu nah an seine verborgenen Klingen.", hooks: ["geheimnis","kampf"] },
          { title: "Ich räche mit verborgenem Stahl", description: "Eine alte Schuld lastet auf dem Held, ein Unrecht, das nach Vergeltung verlangt. Aus der Nähe trifft sein verborgener Stahl im Dunkeln, ehe das Opfer den Streich kommen sieht. Geduldig wartet er auf den einen Augenblick, in dem die Klinge, die niemand erwartet, die Rechnung endgültig begleicht.", hooks: ["kampf","verlust"] },
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
          { title: "Ich beschütze mein treues Ross", description: "Durch jede Schlacht trug das gehorsame Pferd den Held, unermüdlich im Sattel und treuer als mancher Mensch. Doch das Tier braucht Pflege, und ohne es bliebe nur ein halber Krieger zurück. Was auch komme, er lässt sein Ross niemals im Stich und stellt sich vor jeden, der ihm Leid antun will.", hooks: ["fahrend","glaube"] },
          { title: "Ich erringe Ruhm zu Pferde", description: "Mit gut gewarteter Rüstung und sturmreifer Reiterattacke fühlt sich der Held nur im offenen Feld ganz lebendig. Zu Fuß ist er schwerfällig, doch hoch zu Ross kennt seine Kühnheit keine Grenzen. Er sucht die große Schlacht, in der eine einzige donnernde Attacke beweist, was ein wahrer Reiter zu vollbringen vermag.", hooks: ["kampf","macht"] },
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
          { title: "Ich überbringe den Brief sicher", description: "Ein versiegelter Brief des Fürsten liegt schwer in der Tasche des Held und öffnet ihm verschlossene Tore und das Recht auf Audienz. Doch Spione lauern auf die fürstliche Gunst, und falsche Befehle binden ihn an fremden Willen. Was im Siegel ruht, muss seinen Empfänger erreichen, koste es, was es wolle.", hooks: ["adel","fahrend"] },
          { title: "Ich lese die wahre Botschaft", description: "Höfliche Worte zieren das Schreiben, doch der Held spürt, dass die hochfürstliche Gunst einen Preis trägt, den niemand ihm nennt. Hinter den Floskeln verbirgt sich ein Geheimnis, das ihn an fremde Befehle ketten könnte. Ehe er sein Leben dafür riskiert, will er entschlüsseln, was dieser Brief in Wahrheit fordert.", hooks: ["geheimnis","adel"] },
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
          { title: "Ich kaufe mir einen Platz im Adel", description: "Die goldene Kette am Hals des Held öffnet Türen und verleiht ihm edles Ansehen, wo immer er sie zeigt. Was die Geburt ihm verwehrte, will er sich mit ihrem Wert erkaufen, Stufe um Stufe hinauf. Doch das Gold ist auffällig und lockt Diebe, darum wagt er den Aufstieg, ehe ihn jemand wieder herabstößt.", hooks: ["adel","macht"] },
          { title: "Ich gebe das Gold gerecht aus", description: "Jederzeit ließe sich die wertvolle Kette zu Geld machen, doch der Held weiß, dass ihm dieser Reichtum nicht allein gehört. Während Diebe nach dem auffälligen Schmuck schielen, denkt er an jene, die nichts haben. Was ihm zufiel, will er gerecht unter den Bedürftigen teilen, statt es eifersüchtig zu horten.", hooks: ["glaube","außenseiter"] },
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
          { title: "Ich verbessere mein Werkzeug stetig", description: "Für jeden Fall trägt der Held das rechte Werkzeug bei sich, stets einsatzbereit und mit einem Ersatzteil für alle Lagen. Ohne diesen Besitz fühlt er sich hilflos, denn der Kasten ist ein Teil von ihm geworden. Beständig bessert er ihn aus und ergänzt ihn, damit er ganz wird, was er sein kann.", hooks: ["handwerk"] },
          { title: "Ich repariere das Unmögliche", description: "Man bringt dem Held, was alle längst aufgegeben haben, zerschlagen und scheinbar verloren. Mit dem Werkzeug für jeden Fall und einem Blick für jeden Kniff nimmt er die Herausforderung an. Schwer schleppt er seinen Kasten überallhin, doch seine Hände beweisen am Ende, dass selbst das Unrettbare sich noch retten lässt.", hooks: ["handwerk","schicksal"] },
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
          { title: "Ich enträtsle die Herkunft der Münzen", description: "In der Truhe des Held liegen Münzen aus fernen Reichen, fremde Prägungen, deren Wert er genau zu deuten weiß. Doch jede erzählt eine Geschichte von Wegen und Händen, die er nie sah. Andere begehren den Schatz, ihn aber treibt die Frage, woher diese seltsamen Stücke wirklich stammen und was sie verbergen.", hooks: ["geheimnis","fahrend"] },
          { title: "Ich mehre den Schatz durch Handel", description: "Der Held kennt jeden Wert genau und handelt mit Gewinn, wo andere übers Ohr gehauen werden. Was in der Truhe ruht, soll nicht müßig liegen, sondern durch geschickten Tausch wachsen. Doch sein Überfluss verführt ihn leicht zur Verschwendung, und andere lauern auf den Hort, den er Münze um Münze zu mehren sucht.", hooks: ["stadt","macht"] },
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
          { title: "Ich werde dem Erbe würdig", description: "Das verzierte Wams trägt einen ehrwürdigen Namen, doch es sitzt schlecht und erinnert den Held an längst vergangene Größe. Noch beeindruckt die alte Pracht, auch wenn sie ihm zu weit geschnitten ist. Er will in dieses Erbe hineinwachsen, bis der Name nicht mehr nur am Stoff hängt, sondern an ihm selbst.", hooks: ["adel","verlust"] },
          { title: "Ich behalte das Erbstück um jeden Preis", description: "Unbequem und schlecht sitzend ist das geerbte Wams, und es weckt im Held die Erinnerung an alles, was er verlor. Doch es ist das Letzte, was ihm von denen vor ihm blieb, ein Faden zu vergangener Größe. Mag es noch so drücken, er gibt dieses Erbstück um keinen Preis aus der Hand.", hooks: ["adel","glaube"] },
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
          { title: "Ich ehre die gefallenen Gefährten", description: "Stahl mit Schlachtenehre und das Banner der gefallenen Truppe trägt der Held nun allein, jeden Kniff der Veteranen im Gedächtnis. Ihre Feinde verfolgen ihn noch, und die Ausrüstung lastet schwer auf seiner Seele. Doch ihre Waffen zu führen heißt, ihr Andenken weiterzutragen, und das ist er den toten Gefährten schuldig.", hooks: ["kampf","verlust"] },
          { title: "Ich vollende ihren letzten Auftrag", description: "Die Kompanie fiel, ehe ihr Werk getan war, und dem Held blieb die gut gewartete Kampfausrüstung als schwere Bürde. Alte Feinde sind ihm auf den Fersen, doch er weicht nicht. Was seine Gefährten nicht mehr zu Ende brachten, führt er an ihrer statt zum Schluss, damit ihr Opfer nicht umsonst war.", hooks: ["kampf","glaube"] },
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
          { title: "Ich finde was die Karte verbirgt", description: "Die Reisekarte des Held zeigt verborgene Wege und markierte Schätze, doch sie ist unvollständig und in Teilen verschlüsselt. Andere begehren sie, denn die eingezeichneten Zeichen führen zu etwas Verheißungsvollem. Er folgt jeder Markierung durch fremdes Land, fest entschlossen, das aufzuspüren, was unter ihren rätselhaften Linien auf einen Finder wartet.", hooks: ["fahrend","geheimnis"] },
          { title: "Ich entschlüssele die letzten Zeichen", description: "Durch jedes Land führt die Karte den Held verlässlich, doch einige ihrer Zeichen bleiben dunkel und verschlüsselt. Solange er sie nicht deutet, bleibt ihr Geheimnis unvollständig, und andere strecken die Hand danach aus. Er beugt sich Nacht für Nacht über die rätselhaften Symbole, bis er endlich liest, was sie verschweigen.", hooks: ["geheimnis","wissen"] },
        ]
      },
      {
        text: "letztes Stück Heimat", hooks: ["verlust","fahrend"],
        powerTags: [
          { text: "weckt Mut in Hoffnungslosen", hooks: ["verlust","fahrend"] },
          { text: "spendet Trost in der Fremde", hooks: ["verlust","glaube"] },
          { text: "verbindet mit den Meinen", hooks: ["fahrend","glaube"] },
          { text: "weckt vertraute Kraft", hooks: ["verlust","natur"] },
        ],
        weaknessTags: [
          { text: "Bindung an einen Ort", hooks: ["natur","verlust"] },
          { text: "unersetzlich wenn verloren", hooks: ["verlust","handwerk"] },
        ],
        quests: [
          { title: "Ich kehre einst nach Hause zurück", description: "In der Fremde trägt der Held ein letztes Stück Heimat bei sich, das an bessere Tage erinnert und ihn mit den Seinen verbindet. Es spendet Trost und weckt vertraute Kraft, doch es bindet ihn auch schmerzlich an einen fernen Ort. Dieses kleine Andenken hält die Erinnerung wach, bis er den Weg heim findet.", hooks: ["fahrend","verlust"] },
          { title: "Ich bewahre die Heimat in der Fremde", description: "Wäre dieses Stück verloren, bliebe es unersetzlich, denn es ist alles, was dem Held von daheim geblieben ist. In dunklen Stunden weckt es vertraute Kraft und tröstet ihn unter Fremden. Solange er es bei sich trägt, ist er nie ganz fort von den Seinen, und das will er um jeden Preis bewahren.", hooks: ["verlust","glaube"] },
        ]
      },
      {
        text: "Nachlass eines Verschollenen", hooks: ["fahrend","verlust","geheimnis"],
        powerTags: [
          { text: "Aufzeichnungen des Vermissten", hooks: ["geheimnis","wissen"] },
          { text: "getarnter Reisemantel", hooks: ["geheimnis","fahrend"] },
          { text: "birgt verborgene Ressourcen", hooks: ["fahrend","verlust"] },
          { text: "Spuren einer letzten Reise", hooks: ["fahrend","geheimnis"] },
        ],
        weaknessTags: [
          { text: "weckt fremde Feinde", hooks: ["geheimnis","verlust"] },
          { text: "rätselhaft und unvollständig", hooks: ["geheimnis","wissen"] },
        ],
        quests: [
          { title: "Ich kläre das Schicksal des Verschollenen", description: "Eine unerwartete Hinterlassenschaft fiel dem Held zu, Aufzeichnungen eines Vermissten und Spuren seiner letzten Reise. Das Bündel ist rätselhaft und unvollständig, und es weckt fremde Feinde, die nach ihm greifen. Was mit dem Verschollenen geschah, liegt im Dunkeln, doch er wird die Wahrheit Stück für Stück ans Licht bringen.", hooks: ["geheimnis","verlust"] },
          { title: "Ich vollende seine letzte Reise", description: "Den getarnten Reisemantel und die Notizen des Verschollenen trägt der Held nun selbst, gezeichnet von einem unvollendeten Weg. Fremde Feinde wittern die Spur und setzen ihm nach. Doch wohin der Vermisste nicht mehr gelangte, will er an dessen statt gelangen, damit die unterbrochene Reise endlich ihr Ziel erreicht.", hooks: ["fahrend","verlust"] },
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
