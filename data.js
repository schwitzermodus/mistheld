/* =====================================================
   LITM DATA · Themebooks aus Vol. 1
   System: Origin / Adventure / Greatness / Variable Might
   Quests: { title, description }
===================================================== */

const THEMEBOOKS = {
  Circumstance: {
    type: 'Origin',
    titleTagSuggestions: ['gefallener Adel', 'flüchtiger Außenseiter', 'Schankhaus-Schläger', 'einsamer Schänkengast', 'verlorenes Erbe', 'Stimme des Volkes'],
    powerTagPool: ['standesgemäße Kleidung', 'kennt jeden im Ort', 'verlässliche Schaubühne', 'sicheres Versteck', 'Zunge wie ein Messer', 'Standesvorrecht', 'verborgene Gönner', 'durchschaut Masken', 'kann sich verstecken', 'ein Ort, wo ich frei bin', 'leise Beobachtung', 'Hofmanieren', 'beschwichtigender Tonfall', 'spricht für die Schwachen', 'Schloss aufbrechen', 'spielt den Narren', 'lebt vom Wenigen', 'meine Leute halten zu mir'],
    weaknessTagPool: ['gehetzt von einer Macht', 'vom Standesdünkel verfolgt', 'gilt als Außenseiter', 'verboten an manchen Orten', 'Schulden, die mich einholen', 'gebrochene Hände'],
    questPool: [
      { title: 'Ich beweise meinen Wert trotz allem.', description: 'Andere haben mich abgeschrieben oder gar nicht erst gesehen. Jede Wahl, jede Tat ist eine stille Antwort: ich bin mehr, als sie meinten.' },
      { title: 'Ich werde meinen alten Namen wiederherstellen.', description: 'Was einst Ehre und Ansehen hatte, liegt im Schmutz. Solange das so bleibt, finde ich keinen Frieden in dem, was ich bin.' },
      { title: 'Ich finde einen Ort, an dem ich frei sein kann.', description: 'Hier bin ich nur eine Last oder eine Beute. Irgendwo da draußen muss ein Platz sein, an dem ich einfach atmen darf.' },
      { title: 'Ich bleibe meiner Sippe treu, koste es, was es wolle.', description: 'Wer mich aufzog, wer mich kannte, als ich noch nichts war: für sie würde ich brennen. Das ist nicht verhandelbar.' }
    ]
  },
  Devotion: {
    type: 'Origin',
    titleTagSuggestions: ['Schwertschwur', 'Werdender Ritter', 'Verteidiger des Dorfes', 'Diener der Göttin', 'Pflegerin der Kranken', 'Liebe meines Lebens'],
    powerTagPool: ['Schwur ablegen', 'Mut sammeln', 'Schutzschild für die Schwachen', 'erinnert sich an einen Schwur', 'tröstet die Verzagten', 'kennt heilende Kräuter', 'einfache Heilkunst', 'spricht für die Stille', 'hält ein heiliges Symbol', 'Hände, die heilen', 'Ritualgesang', 'schützt mit dem eigenen Leib', 'sammelt Almosen für andere', 'kennt jedes Gebet', 'auf das Wort verlassen', 'schreitet ein, wo andere wegsehen'],
    weaknessTagPool: ['blind durch Hingabe', 'verpflichtet, nicht zu fliehen', 'jeder Schmerz der Gruppe ist meiner', 'die Pflicht verschlingt die Zeit', 'unbarmherzig gegen Verräter'],
    questPool: [
      { title: 'Ich beschütze sie, bis ich sterbe.', description: 'Sie sind mir anvertraut, ob sie es wissen oder nicht. Solange ich atme, geschieht ihnen nichts.' },
      { title: 'Mein Gelübde halte ich, was auch geschieht.', description: 'Worte sind keine Münzen, die man ausgibt. Was ich versprochen habe, das tue ich, auch wenn die Welt sich gegen mich stellt.' },
      { title: 'Ich bringe das Heiligtum zurück, das wir verloren haben.', description: 'Ohne diesen Ort ist mein Volk gebrochen. Ich werde Wege gehen, die niemand sonst zu gehen wagt, um es zurückzuholen.' },
      { title: 'Ich bestehe die Pilgerfahrt.', description: 'Der Weg selbst ist die Prüfung. Erst wenn ich das Ziel erreiche, weiß ich, ob ich der war, für den ich mich gehalten habe.' }
    ]
  },
  Past: {
    type: 'Origin',
    titleTagSuggestions: ['Verflucht', 'Im Krieg geschmiedet', 'Letzter meines Volkes', 'mystischer Pilger', 'aus den Trümmern', 'der Heimkehrer'],
    powerTagPool: ['altes Andenken', 'narbiges Schwertarm', 'Sprache der Verlorenen', 'Erinnerungen, die warnen', 'getragene Reisetracht', 'durchgemacht und überlebt', 'kennt das Schlachtfeld', 'spürt einen Fluch', 'hat die Ruinen gesehen', 'einst gelernte Liturgie', 'eiserner Wille', 'sieht durch Lügen', 'Erinnerungsstück eines Toten', 'eine Lektion aus Leid', 'kennt den Weg zurück', 'spricht eine vergessene Zunge'],
    weaknessTagPool: ['Albträume kehren wieder', 'verfolgt von alten Feinden', 'das Mal des Fluches', 'eine Schuld, die nie erlischt', 'Erinnerung schmerzt'],
    questPool: [
      { title: 'Ich finde heraus, was wirklich geschah.', description: 'Die Geschichte, die man mir erzählt hat, hat Risse. Ich werde nicht eher ruhen, bis ich die Wahrheit selbst gesehen habe.' },
      { title: 'Ich befreie mich von dem, was mich bindet.', description: 'Etwas hängt an mir: ein Fluch, eine Schuld, ein Schatten. Solange er bleibt, gehört mein Leben mir nicht ganz.' },
      { title: 'Ich bringe das Vergangene zur Ruhe.', description: 'Die Geister meines früheren Lebens lassen mich nicht schlafen. Ich werde tun, was nötig ist, damit sie endlich schweigen.' },
      { title: 'Ich rette, was noch zu retten ist.', description: 'Vieles ist verloren, doch nicht alles. Solange irgendwo ein Funken glimmt, gebe ich nicht auf.' }
    ]
  },
  People: {
    type: 'Origin',
    titleTagSuggestions: ['Sylvenelf', 'Highlanderin', 'Battlerider', 'Hexenblut', 'Karawanenvolk', 'Bibervolk'],
    powerTagPool: ['kennt die Sitten meines Volkes', 'altertümliches Lied', 'angeborener Sinn für Spuren', 'Werkzeug aus der Heimat', 'Bogen meines Volkes', 'wettergegerbte Haut', 'die Sprache der Ahnen', 'Tracht meines Volkes', 'Ruf der Verbündeten', 'unerwartete Stärke', 'angeborene Schnelligkeit', 'leiser Schritt', 'Schwert meines Volkes', 'Heimischer Boden gibt Kraft', 'sieht im Dunkeln', 'Affinität zu Tieren'],
    weaknessTagPool: ['gemieden in dieser Gegend', 'angeborene Schwäche', 'misstrauisch gegen Fremde', 'aus dem Element gerissen', 'auffälliges Merkmal'],
    questPool: [
      { title: 'Ich erhebe mein Volk wieder zu Würde.', description: 'Wir sind mehr als die Geschichten, die andere über uns erzählen. Ich werde es ihnen zeigen, mit jedem Schritt, den ich gehe.' },
      { title: 'Ich erfülle eine Prophezeiung meiner Sippe.', description: 'Die Alten sahen voraus, was kommen würde, und sie sahen mich darin. Ich kann mich dem nicht entziehen, auch wenn ich es wollte.' },
      { title: 'Ich bewahre die Lieder meines Volkes vor dem Vergessen.', description: 'Wer keine Lieder mehr hat, hat kein Volk. Ich trage sie weiter, von Mund zu Mund, bis sie wieder Heimat finden.' },
      { title: 'Ich finde meinesgleichen.', description: 'Irgendwo dort draußen müssen sie sein, die wie ich sind. Mein Schritt geht in ihre Richtung, auch wenn ich noch nicht weiß, wohin.' }
    ]
  },
  Personality: {
    type: 'Origin',
    titleTagSuggestions: ['Herz aus Gold', 'das gelbe Lächeln', 'mürrisch wie Stein', 'übte Lügnerin', 'unstillbar neugierig', 'tröstet die Welt'],
    powerTagPool: ['durchschaut eine Lüge', 'Lacher in dunkler Stunde', 'frohe Geschichte', 'Sturheit als Tugend', 'einnehmendes Lächeln', 'kennt die richtige Frage', 'gibt anderen Hoffnung', 'kalter Blick', 'einschüchterndes Auftreten', 'einfühlsame Stille', 'spielt den Narren', 'sucht nach der Wahrheit', 'plaudert sich aus jeder Lage', 'gibt einen Rat, der hilft', 'macht Mut zum Aufstehen', 'keine Gerüchte entgehen mir'],
    weaknessTagPool: ['leicht zu provozieren', 'sentimental im falschen Moment', 'ausnutzbar', 'spricht zu viel', 'erwartet Anerkennung'],
    questPool: [
      { title: 'Ich bleibe mir treu, koste es, was es wolle.', description: 'Lieber zerbreche ich, als dass ich mich biege. Wer ich bin, ist das Einzige, das mir wirklich gehört.' },
      { title: 'Ich helfe denen, die sonst niemand sieht.', description: 'Die Welt rauscht an den Schwachen vorbei. Ich tue es nicht, denn ich war einmal einer von ihnen.' },
      { title: 'Ich verstehe endlich, wer ich wirklich bin.', description: 'All meine Masken sind alt geworden. Ich werde sie eine nach der anderen abnehmen und schauen, was darunter ist.' },
      { title: 'Ich bringe Licht in dunkle Räume.', description: 'Wo Verzweiflung herrscht, brauche ich keine Schwerter. Ein Lachen, ein Lied, eine Hand reichen oft.' }
    ]
  },
  'Skill or Trade': {
    type: 'Origin',
    titleTagSuggestions: ['Hinterland-Spurenleser', 'Schmied der Berge', 'taschendiebischer Wandersmann', 'Heilkundige', 'Steuermann', 'Bogenbauer'],
    powerTagPool: ['meisterhaft an der Esse', 'Werkzeug meines Handwerks', 'kennt jede Spur im Wald', 'gut sortierte Vorratskammer', 'flinke Finger', 'liest die Karte', 'kennt jeden Knoten', 'Pfeil und Bogen geübt', 'eingespielte Schrittfolge', 'Stahl bis zur Klinge', 'leise Schritte', 'fester Griff', 'umgeht jede Wache', 'gut gemachte Werkzeuge', 'fachkundiger Blick', 'verlässliche Routine'],
    weaknessTagPool: ['überfordert ohne Werkzeug', 'wirkt einseitig', 'misstrauisch beobachtet', 'oft erschöpft vom Üben', 'kennt nur eine Welt'],
    questPool: [
      { title: 'Ich werde der Beste in meinem Fach.', description: 'Andere sollen meinen Namen nennen, wenn sie an Meisterschaft denken. Bis dahin lasse ich keinen Stein der Übung unberührt.' },
      { title: 'Ich bewahre mein Handwerk vor dem Vergessen.', description: 'Das, was ich kann, droht zu verschwinden. Solange ich lehre und übe, bleibt ein Funken davon lebendig.' },
      { title: 'Ich finde Anwendung für meine Kunst, die wirklich zählt.', description: 'Ich kann mehr, als nur Geld dafür zu nehmen. Irgendwo wartet die Aufgabe, die meinem Können einen Sinn gibt.' },
      { title: 'Ich gebe mein Wissen weiter.', description: 'Was ich gelernt habe, soll nicht mit mir sterben. Ich finde die, die es brauchen, und übergebe es ihnen mit ruhigen Händen.' }
    ]
  },
  Trait: {
    type: 'Origin',
    titleTagSuggestions: ['stark wie ein Ochse', 'akrobatische Beweglichkeit', 'unheimlich schön', 'prophetische Visionen', 'Kraft des Wassers', 'unerschütterlich'],
    powerTagPool: ['leichter Schritt', 'unbändige Kraft', 'unverwundbar wirkende Schönheit', 'sieht, was kommen wird', 'spricht im Schlaf', 'springt höher als andere', 'taucht tief und lange', 'fühlt magische Spuren', 'unermüdlich', 'klettert wie eine Katze', 'ungewöhnlich präzise', 'lacht, wo andere schreien', 'übermenschliche Sinne', 'erinnert sich an alles', 'sehr geschickt', 'sieht im Halbdunkel'],
    weaknessTagPool: ['auffällig für Feinde', 'wird beneidet', 'erschöpft sich rasch', 'wirkt befremdlich', 'unbeholfen ohne Gabe'],
    questPool: [
      { title: 'Ich finde heraus, woher meine Gabe stammt.', description: 'Das, was ich kann, kann nicht aus dem Nichts gekommen sein. Ich werde der Spur folgen, bis ich an ihren Anfang gelange.' },
      { title: 'Ich nutze meine Gabe für etwas Größeres.', description: 'Was ich bin, ist mir nicht für mich allein gegeben worden. Ich finde heraus, wofür sie wirklich bestimmt ist.' },
      { title: 'Ich versuche, normal zu sein.', description: 'Mein ganzes Leben war ich anders. Vielleicht ist es Zeit, einmal zu lernen, wie es sich anfühlt, einer von vielen zu sein.' },
      { title: 'Ich überwinde die Grenzen meiner Gabe.', description: 'Andere glauben, sie wissen, was ich kann. Aber sie haben das Ende noch nicht gesehen, und ich auch nicht.' }
    ]
  },
  Duty: {
    type: 'Adventure',
    titleTagSuggestions: ['Licht gegen die Finsternis', 'auf Vertrag', 'Schwur dem Lehnsherrn', 'Hüterin des Landes', 'Rachezwang', 'Bote des Königs'],
    powerTagPool: ['leuchtende Rüstung', 'kennt die Verbündeten der Sache', 'kraftvoller Schwur', 'Banner meines Lehnsherrn', 'Recht auf freien Durchgang', 'Recht auf Kost und Quartier', 'mein Eid macht mich stark', 'kennt das Reich von Norden bis Süden', 'gefürchteter Gegner des Bösen', 'Vertrag in der Hand', 'Anweisungen ausführen', 'kommandiert Soldaten', 'kennt Strategien des Kampfes', 'unbeirrbar im Zweck'],
    weaknessTagPool: ['rivalisiert um die Aufgabe', 'verhasst bei Feinden des Auftrags', 'fühlt Schuld bei Versagen', 'an Befehle gebunden'],
    questPool: [
      { title: 'Ich erfülle meinen Schwur, koste es, was es wolle.', description: 'Was ich versprochen habe, ist mehr als ein Wort. Es ist die Achse, um die mein Leben sich dreht.' },
      { title: 'Ich bringe die Auftraggeber zu Fall, wenn sie das Versprechen brechen.', description: 'Wer mich für etwas einspannt, das verlogen ist, wird meinen Zorn kennenlernen. Auch wenn er der Mächtige ist.' },
      { title: 'Ich räche das Unrecht, das mir geschah.', description: 'Ich habe es nicht vergessen, und ich werde es auch nicht. Erst wenn die Schuld beglichen ist, finde ich Schlaf.' },
      { title: 'Ich beschütze das Land, dem ich diene.', description: 'Diese Erde, diese Menschen — das ist mein Auftrag und mein Anker. Wer ihnen schadet, schadet mir.' }
    ]
  },
  Influence: {
    type: 'Adventure',
    titleTagSuggestions: ['Dockmeisterin', 'graue Eminenz', 'Stadtrat', 'Gildenführer', 'Anführerin der Schmuggler', 'Diplomatin'],
    powerTagPool: ['Spitzel an jeder Ecke', 'kennt die wahren Mächte der Stadt', 'spricht mit Befehlsgewalt', 'Gefälligkeiten einfordern', 'Gold öffnet Türen', 'eine Karte mit allen Namen', 'Boten in jede Richtung', 'Briefe öffnen Tore', 'kennt das Geheimnis aller', 'Gildensiegel', 'Recht auf Audienz', 'Beobachter überall', 'Schatzkammer im Hintergrund', 'Vertrauen der Mächtigen'],
    weaknessTagPool: ['Konkurrenz um die Position', 'erpressbar durch Geheimnisse', 'der Hof ist ein Schlangennest', 'unsichtbare Feinde'],
    questPool: [
      { title: 'Ich verteidige meine Position bis zum Ende.', description: 'Was ich aufgebaut habe, gebe ich nicht her. Wer es mir nehmen will, soll wissen, wie viel es mich gekostet hat.' },
      { title: 'Ich nutze meinen Einfluss, um die Welt zu wenden.', description: 'Macht ohne Sinn ist Selbstzweck. Ich werde sie nutzen, solange sie mir gehört, und etwas hinterlassen, das bleibt.' },
      { title: 'Ich entlarve die wahren Strippenzieher.', description: 'Hinter allem, was offen geschieht, bewegen sich verborgene Hände. Ich werde sie finden und ans Licht zerren.' },
      { title: 'Ich werde der Mächtigste in dieser Stadt.', description: 'Hier bin ich noch ein Stein unter vielen. Aber ich kenne meinen Weg an die Spitze, und niemand wird mich aufhalten.' }
    ]
  },
  Knowledge: {
    type: 'Adventure',
    titleTagSuggestions: ['Sterndeuter', 'Bewohner des Verborgenen', 'kennt jedes Land', 'Bibliothekar des Verbotenen', 'Studium der alten Reiche', 'Sprachgelehrter'],
    powerTagPool: ['liest in den Sternen', 'kennt die alten Sprachen', 'erkennt jedes Symbol', 'sieht die Zeichen', 'kennt verbotene Riten', 'erinnert sich an jedes Buch', 'analysiert eine Substanz', 'übersetzt jede Schrift', 'kennt Bestienkunde', 'führt geheime Forschung', 'ein Lexikon an Lore', 'kennt den Weg zur Wahrheit', 'spricht die Sprache der Toten', 'kennt jedes Provinzwappen'],
    weaknessTagPool: ['gefährliches Wissen anziehend für Feinde', 'verloren in der Welt der Bücher', 'körperlich nicht stark', 'verfolgt von neugierigen Mächten'],
    questPool: [
      { title: 'Ich enthülle die letzte Wahrheit, koste es, was es wolle.', description: 'Es gibt eine Antwort, hinter all den Schleiern und Lügen. Ich werde sie sehen, auch wenn sie mich zerbricht.' },
      { title: 'Ich bewahre dieses Wissen vor dem Falschen.', description: 'In den falschen Händen wäre dieses Wissen Gift. Ich trage es, damit es niemand anders muss.' },
      { title: 'Ich finde die Quelle der alten Lieder.', description: 'Sie sind nicht aus dem Nichts entstanden. Irgendwo muss der Brunnen sein, aus dem sie geflossen sind.' },
      { title: 'Ich verstehe, was niemand sonst versteht.', description: 'Was die anderen für ein Rätsel halten, kann ich auflösen. Wenn ich nur lange genug schaue und ehrlich genug frage.' }
    ]
  },
  'Prodigious Ability': {
    type: 'Adventure',
    titleTagSuggestions: ['fesselnder Geschichtenerzähler', 'meisterhafter Koch', 'gefürchteter Klingenmeister', 'wundersamer Heiler', 'unbestechlicher Bogenschütze', 'Meister des Spiels'],
    powerTagPool: ['Schwertkunst, die staunen macht', 'eigene Signaturtechnik', 'verzaubert mit Worten', 'erfindet im Augenblick', 'staunenswerter Sprung', 'einmalige Heiltechnik', 'erkennt den schwachen Punkt', 'erkennt jeden Zauber', 'wundersames Werk', 'unfehlbarer Pfeil', 'unbestreitbare Eleganz', 'erstaunliche Geschwindigkeit', 'gilt als der Beste', 'reißt jede Menge mit'],
    weaknessTagPool: ['arrogant gegenüber Schwächeren', 'wird ständig herausgefordert', 'erschöpft im Alltag', 'misstrauisch beobachtet'],
    questPool: [
      { title: 'Ich werde unangefochten der Beste.', description: 'Es gibt nur einen Platz an der Spitze. Ich werde den, der dort steht, ablösen, und den, der nach mir kommt, nicht zulassen.' },
      { title: 'Ich gebe meine Kunst weiter, bevor ich sterbe.', description: 'Was in mir ist, soll nicht mit mir vergehen. Ich finde den, der bereit ist, es zu nehmen.' },
      { title: 'Ich vollbringe das Meisterwerk meines Lebens.', description: 'Ein Werk, das alles enthält, was ich bin. Erst dann darf ich Ruhe geben, nicht eher.' },
      { title: 'Ich nutze meine Gabe für etwas Würdiges.', description: 'Mein Können ist mehr als Schauspiel. Es muss seinen Platz finden, dort wo es wirklich zählt.' }
    ]
  },
  Relic: {
    type: 'Adventure',
    titleTagSuggestions: ['die Riesenfaust', 'Beutel mit Zauberstaub', 'Kessel der Beschwörung', 'verfluchte Klinge', 'Stab der alten Zeiten', 'Krone der Vergessenen'],
    powerTagPool: ['donnernder Faustschlag', 'beschwört nützliche Dinge', 'lauscht den Geistern', 'der Stein flüstert mir zu', 'die Klinge schneidet alles', 'Kraft aus dem Artefakt', 'wärmt die Seele', 'leuchtet im Dunkeln', 'leitet zum Ziel', 'verbirgt mich vor Bösem', 'enthüllt verborgene Wahrheiten', 'bindet feindliche Magie', 'der Helm zeigt Visionen', 'die Münze kommt zurück'],
    weaknessTagPool: ['der Gegenstand hat einen eigenen Willen', 'Diebe begehren ihn', 'Magie hat ihren Preis', 'kann verloren gehen'],
    questPool: [
      { title: 'Ich entschlüssele das Geheimnis dieses Artefakts.', description: 'Es spricht zu mir in einer Sprache, die ich noch nicht ganz verstehe. Aber ich werde sie lernen, Wort für Wort.' },
      { title: 'Ich erfülle, was die alte Magie von mir verlangt.', description: 'Das Artefakt fordert etwas, und ich kann mich dem nicht entziehen. Ich höre, ich gehe, ich tue.' },
      { title: 'Ich bringe das Artefakt an seinen Ursprung zurück.', description: 'Es gehört nicht hierher. Mein Weg ist es, es nach Hause zu tragen, koste es, was es wolle.' },
      { title: 'Ich befreie mich von seinem Bann.', description: 'Es hat mich gewählt, doch ich habe nie zugestimmt. Eines Tages werde ich es ablegen können, ohne zu sterben.' }
    ]
  },
  'Uncanny Being': {
    type: 'Adventure',
    titleTagSuggestions: ['körperloser Geist', 'Höllenkind', 'Kleiner Hob', 'Wechselgestalt', 'Mondgeborene', 'Schattenwandler'],
    powerTagPool: ['verschwindet in den Schatten', 'sieht das Unsichtbare', 'spricht mit Toten', 'unverletzlich durch Stahl', 'kann sich verwandeln', 'spürt lebende Seelen', 'übersteht Feuer', 'bewegt Dinge ohne Berührung', 'Krallen oder Reißzähne', 'fließt durch Spalten', 'erscheint und verschwindet', 'flüstert Gedanken in andere', 'spürt böse Magie', 'liebt Dunkelheit'],
    weaknessTagPool: ['gebannt durch Salz / Eisen / Sonne', 'gemieden von Mensch und Tier', 'angreifbar durch heiliges Symbol', 'gehasst von beiden Welten'],
    questPool: [
      { title: 'Ich finde heraus, was ich wirklich bin.', description: 'Mein Spiegelbild gehorcht mir nicht ganz, mein Schatten flüstert. Es muss eine Antwort geben, und ich werde sie finden.' },
      { title: 'Ich finde meinen Platz unter den Menschen.', description: 'Ich bin nicht ganz von ihnen, doch ich bin auch nirgendwo sonst. Vielleicht gibt es einen Weg, dazwischen zu leben.' },
      { title: 'Ich bin meinem Wesen treu, koste es, was es wolle.', description: 'Mich zu verstecken ist eine Form von Tod. Ich werde sein, was ich bin, auch wenn die Welt es nicht erträgt.' },
      { title: 'Ich befreie mich von meinem Bann.', description: 'Was an mir hängt, hängt nicht zu Recht. Ich werde es abschütteln, und sei es das Letzte, was ich tue.' }
    ]
  },
  Destiny: {
    type: 'Greatness',
    titleTagSuggestions: ['Erbin des Throns', 'Untergang der Welt', 'finde den Erzähler', 'Auserwählter der Götter', 'das letzte Licht', 'das Kind der Sterne'],
    powerTagPool: ['das Schicksal beschützt mich', 'Zeichen weisen den Weg', 'Verbündete erscheinen', 'Glück folgt meinen Schritten', 'wundersame Rettung', 'die Welt hört auf mich', 'Vorhersehung leitet mich', 'verborgene Helfer', 'Wege öffnen sich', 'Türen, die niemand öffnen sollte', 'mein Antlitz erkennt jeder', 'Bestimmung pulsiert in mir', 'Träume offenbaren Geheimnisse', 'unerschütterlicher Mut'],
    weaknessTagPool: ['Feinde wollen mich verhindern', 'der Pfad ist eng', 'Hochmut verfolgt mich', 'andere fordern meinen Tod'],
    questPool: [
      { title: 'Ich erfülle, wozu ich geboren wurde.', description: 'Es ist alles in mir angelegt, ob ich es wollte oder nicht. Ich höre auf, mich zu wehren, und gehe den Weg.' },
      { title: 'Ich beweise, dass ich frei bin trotz meiner Bestimmung.', description: 'Sie sagen, mein Pfad sei vorgezeichnet. Ich werde ihnen zeigen, dass sie sich irren, mit jedem Schritt, den ich anders setze.' },
      { title: 'Ich rette die Welt vor dem, was kommt.', description: 'Andere sehen es nicht, oder sie wollen es nicht sehen. Aber das Unheil ist nahe, und ich stehe in seinem Weg.' },
      { title: 'Ich entdecke, wer mich auserwählt hat.', description: 'Diese Bestimmung kommt nicht aus dem Nichts. Hinter ihr steht jemand, und ich werde ihn finden, ob er das will oder nicht.' }
    ]
  },
  Dominion: {
    type: 'Greatness',
    titleTagSuggestions: ['Herrin der Mark', 'Anführerin der Gilde', 'Lehnsherr von Stein', 'Königin des Tales', 'Befehlshaber der Wache'],
    powerTagPool: ['Soldaten meines Reiches', 'Tribute aus dem Land', 'Banner und Wappen', 'Recht zu richten', 'Burg auf dem Berg', 'Räte und Berater', 'Steuereinnahmen', 'eingespielte Verwaltung', 'kennt die Adligen', 'Boten in jede Richtung', 'spricht für ein Volk', 'Recht auf Krieg', 'beste Spione weit und breit'],
    weaknessTagPool: ['der Thron wird begehrt', 'Schulden gegenüber Mächtigen', 'Aufstand gärt', 'einsam an der Spitze'],
    questPool: [
      { title: 'Ich vergrößere mein Reich.', description: 'Was ich habe, ist nicht genug. Mein Schatten soll länger werden, und stärker, bis er die Welt berührt.' },
      { title: 'Ich beschütze mein Land vor allen Feinden.', description: 'Diese Erde gehört zu mir, und ich zu ihr. Wer sie bedroht, bedroht alles, wofür ich stehe.' },
      { title: 'Ich bin der gerechte Herrscher, den dieses Land verdient.', description: 'Vor mir gab es Tyrannen oder Schwächlinge. Ich werde anders sein, und mein Volk wird es spüren.' },
      { title: 'Ich finde heraus, wer mich verraten hat.', description: 'Es war jemand, dem ich vertraute. Solange dieser Name nicht ans Licht kommt, kann ich niemandem mehr glauben.' }
    ]
  },
  Mastery: {
    type: 'Greatness',
    titleTagSuggestions: ['legendärer Schmied', 'Meister der Klinge', 'Erbauer der Welten', 'Königin der Stimme', 'unangefochtene Heilerin'],
    powerTagPool: ['Werkzeuge eines Meisters', 'gilt als Legende', 'Schüler aus aller Welt', 'kann das Unmögliche schaffen', 'kennt jede Variante', 'meisterhafte Kontrolle', 'eine Werkstatt mit eigenem Namen', 'Werke werden Jahrhunderte überdauern', 'andere Meister suchen Rat', 'andere Disziplinen ähnlich beherrscht', 'unverwechselbarer Stil', 'kann keinen Wettkampf verlieren', 'geheime Techniken'],
    weaknessTagPool: ['gefährdet durch Neid', 'jeder will von mir lernen', 'erwartet zu hohe Standards', 'wird zur Geisel meiner Größe'],
    questPool: [
      { title: 'Ich erschaffe das Meisterwerk meines Lebens.', description: 'Alles bisher war nur Üben. Das Werk, das mich überdauert, liegt noch vor mir, und ich weiß, dass es kommt.' },
      { title: 'Ich gebe meine Kunst an die nächste Generation weiter.', description: 'Was ich kann, ist zu kostbar, um zu verschwinden. Ich finde die, die würdig sind, und übergebe es ihnen.' },
      { title: 'Ich verändere die Welt mit meiner Kunst.', description: 'Mein Werk soll mehr sein als schön. Es soll etwas verschieben, etwas öffnen, das vorher zu war.' },
      { title: 'Ich finde jemanden, der mich übertrifft.', description: 'An der Spitze ist es einsam. Erst wenn jemand kommt, der mich fordert, bin ich wirklich am Leben.' }
    ]
  },
  Monstrosity: {
    type: 'Greatness',
    titleTagSuggestions: ['Drachenwurm', 'Sturmtitan', 'Nebelhydra', 'das Größenwesen aus dem See', 'der Wandelnde Wald'],
    powerTagPool: ['enorme Größe', 'flügelschlag wie Sturm', 'unverletzbare Haut', 'magische Aura der Furcht', 'unstillbarer Hunger', 'Schwanz, der Bäume fällt', 'Atem aus Feuer / Eis / Säure', 'Schreckenskreis um mich', 'unergründlicher Blick', 'Diener gehorchen mir', 'übermächtige Stärke', 'rufe Stürme', 'gigantische Schritte'],
    weaknessTagPool: ['eine verwundbare Stelle', 'jagdwürdig in den Augen vieler', 'zu groß für menschliche Welt', 'der Hunger erschüttert mich'],
    questPool: [
      { title: 'Ich finde meinesgleichen.', description: 'Irgendwo da draußen müssen andere sein wie ich. Bis ich sie gefunden habe, bin ich allein in der Welt.' },
      { title: 'Ich akzeptiere mein Wesen.', description: 'So lange habe ich mit dem gerungen, was ich bin. Es ist Zeit, damit zu leben, statt davor zu fliehen.' },
      { title: 'Ich beschütze meine Brut, koste es, was es wolle.', description: 'Sie sind mein und nur mein. Wer sie anrührt, kennt meine ganze Macht, und keine Gnade.' },
      { title: 'Ich kehre zur menschlichen Form zurück.', description: 'Das, was ich war, fehlt mir mehr, als ich es ertrage. Ich werde einen Weg zurück finden, oder daran zugrunde gehen.' }
    ]
  },
  Companion: {
    type: 'Variable Might',
    titleTagSuggestions: ['Schwertbande', 'imposanter Wolfshund', 'Schutzgeist', 'frecher Pixie', 'Falke meiner Mutter', 'Beschwörter Geist'],
    powerTagPool: ['imposanter Wolfshund', 'spürt feindliche Absichten', 'Bande Schwertkämpfer', 'kämpft mit mir Schulter an Schulter', 'gehorcht jedem Befehl', 'Ablenkung mit Verve', 'unsichtbarer Schutzgeist', 'flüstert Warnungen', 'zerstreut die Wache', 'läuft schneller als mein Pferd', 'schmuggelt Botschaften', 'tröstet mich in der Nacht', 'unfehlbare Spürnase', 'Familie an meiner Seite'],
    weaknessTagPool: ['gerät leicht in Gefahr', 'lärmig und unbeherrscht', 'kann mich verlassen', 'beschützt nur mich'],
    questPool: [
      { title: 'Ich beschütze meinen Begleiter um jeden Preis.', description: 'Sie sind das, was meinen Weg erträglich macht. Ohne sie geht es nicht weiter, und das wissen wir beide.' },
      { title: 'Ich erfülle einen Auftrag mit meinem Begleiter.', description: 'Was wir uns vorgenommen haben, schaffen wir nur zusammen. Allein wäre keiner von uns genug.' },
      { title: 'Ich bringe ihn / sie heim.', description: 'Wir wurden auseinandergerissen, doch ich vergesse den Weg nicht. Ich bringe sie zurück, woher wir kamen.' },
      { title: 'Ich befreie ihn / sie aus dem Bann.', description: 'Das, was an meinem Begleiter hängt, gehört da nicht hin. Ich werde es lösen, mit jedem Mittel, das ich finde.' }
    ]
  },
  Magic: {
    type: 'Variable Might',
    titleTagSuggestions: ['Hexe der Wälder', 'Sturmrufer', 'Heiler der Götter', 'Banner der Geister', 'rituelle Zauberin', 'Alchemistin'],
    powerTagPool: ['kleines Zauberwerk', 'Bannkreis ziehen', 'spricht alte Worte', 'verflucht den Feind', 'segnet die Verbündeten', 'spricht mit Geistern', 'verwandelt sich in Tier', 'sieht durch Schleier', 'braut starke Tränke', 'schreibt mächtige Runen', 'beschwört kleine Wesen', 'Heilkräuter und Salben', 'Magieeisen erkennen', 'lenkt die Winde', 'hext Dinge in die Bewegung', 'flüstert in die Träume'],
    weaknessTagPool: ['erschöpft durch Magie', 'gehasst und gehetzt', 'verlangt einen Preis', 'unkontrollierbare Nebenwirkungen'],
    questPool: [
      { title: 'Ich verstehe, woher meine Magie wirklich kommt.', description: 'Sie kommt aus mir, aber nicht nur. Ich folge ihr zurück zu ihrer Quelle, auch wenn sie mich erschreckt.' },
      { title: 'Ich nutze meine Magie nur für Würdiges.', description: 'Was ich kann, ist gefährlich. Ich werde nicht zulassen, dass es sich verschwendet oder beschmutzt.' },
      { title: 'Ich befreie die, denen ich Unrecht tat.', description: 'Meine Magie hat Schaden angerichtet, oft ohne dass ich es wollte. Ich werde diese Schuld abtragen, eine nach der anderen.' },
      { title: 'Ich finde einen Lehrer, der mich vollendet.', description: 'Allein komme ich nicht weiter. Irgendwo gibt es einen, der weiß, was ich brauche, und ich werde ihn finden.' }
    ]
  },
  Possessions: {
    type: 'Variable Might',
    titleTagSuggestions: ['handgefertigte Panflöte', 'verborgene Dolche', 'Pferd und Rüstung', 'Brief des Fürsten', 'Kette aus Gold', 'mein Werkzeugkasten'],
    powerTagPool: ['meisterhaft geschmiedete Klinge', 'reich gefüllte Reisetasche', 'Pferd, das mir gehorcht', 'verborgene Dolche', 'verziertes Wams', 'Werkzeug für jeden Fall', 'Brief mit Siegel', 'Kette von Wert', 'gut gewartete Rüstung', 'silberne Pfeile', 'Reisekarten', 'wertvoller Schmuck', 'Truhe mit Wertsachen', 'getarnter Reisemantel'],
    weaknessTagPool: ['verletzlich gegen Diebe', 'braucht Pflege', 'auffällig im Wert', 'Bindung an einen Ort'],
    questPool: [
      { title: 'Ich verbessere mein Werkzeug, bis es perfekt ist.', description: 'Was ich besitze, ist mehr als nur Material. Es ist Teil von mir, und es soll werden, was es sein kann.' },
      { title: 'Ich behalte das Erbstück um jeden Preis.', description: 'Es gehörte zu denen vor mir, und es ist alles, was mir von ihnen blieb. Ich gebe es nicht her.' },
      { title: 'Ich finde das fehlende Stück meiner Sammlung.', description: 'Etwas fehlt, und solange es fehlt, bin ich nicht fertig. Ich werde nicht ruhen, bis es bei mir ist.' },
      { title: 'Ich teile, was ich habe, gerecht aus.', description: 'Was mir zugefallen ist, gehört nicht mir allein. Ich finde den richtigen Weg, es zu verteilen.' }
    ]
  }
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
