/* =====================================================
   LITM DATA · Themebooks aus Vol. 1
   System: Origin / Adventure / Greatness / Variable Might
   Tag-Pools sind aus den Power-Tag- und Weakness-Tag-Fragen
   sowie Theme-Kits abgeleitet.
   Sprache: Deutsch (Inhalte), Fachbegriffe Englisch.
===================================================== */

const THEMEBOOKS = {
  Circumstance: {
    type: 'Origin',
    titleTagSuggestions: ['gefallener Adel', 'flüchtiger Außenseiter', 'Schankhaus-Schläger', 'einsamer Schänkengast', 'verlorenes Erbe', 'Stimme des Volkes'],
    powerTagPool: ['standesgemäße Kleidung', 'kennt jeden im Ort', 'verlässliche Schaubühne', 'sicheres Versteck', 'Zunge wie ein Messer', 'Standesvorrecht', 'verborgene Gönner', 'durchschaut Masken', 'kann sich verstecken', 'ein Ort, wo ich frei bin', 'leise Beobachtung', 'Hofmanieren', 'beschwichtigender Tonfall', 'spricht für die Schwachen', 'Schloss aufbrechen', 'spielt den Narren', 'lebt vom Wenigen', 'meine Leute halten zu mir'],
    weaknessTagPool: ['gehetzt von einer Macht', 'vom Standesdünkel verfolgt', 'gilt als Außenseiter', 'verboten an manchen Orten', 'Schulden, die mich einholen', 'gebrochene Hände'],
    questPool: ['Ich beweise meinen Wert trotz allem.', 'Ich werde meinen alten Namen wiederherstellen.', 'Ich finde einen Ort, an dem ich frei sein kann.', 'Ich bleibe meiner Sippe treu, koste es, was es wolle.']
  },
  Devotion: {
    type: 'Origin',
    titleTagSuggestions: ['Schwertschwur', 'Werdender Ritter', 'Verteidiger des Dorfes', 'Diener der Göttin', 'Pflegerin der Kranken', 'Liebe meines Lebens'],
    powerTagPool: ['Schwur ablegen', 'Mut sammeln', 'Schutzschild für die Schwachen', 'erinnert sich an einen Schwur', 'tröstet die Verzagten', 'kennt heilende Kräuter', 'einfache Heilkunst', 'spricht für die Stille', 'hält ein heiliges Symbol', 'Hände, die heilen', 'Ritualgesang', 'schützt mit dem eigenen Leib', 'sammelt Almosen für andere', 'kennt jedes Gebet', 'auf das Wort verlassen', 'schreitet ein, wo andere wegsehen'],
    weaknessTagPool: ['blind durch Hingabe', 'verpflichtet, nicht zu fliehen', 'jeder Schmerz der Gruppe ist meiner', 'die Pflicht verschlingt die Zeit', 'unbarmherzig gegen Verräter'],
    questPool: ['Ich beschütze sie, bis ich sterbe.', 'Mein Gelübde halte ich, was auch geschieht.', 'Ich bringe das Heiligtum zurück, das wir verloren haben.', 'Ich bestehe die Pilgerfahrt.']
  },
  Past: {
    type: 'Origin',
    titleTagSuggestions: ['Verflucht', 'Im Krieg geschmiedet', 'Letzter meines Volkes', 'mystischer Pilger', 'aus den Trümmern', 'der Heimkehrer'],
    powerTagPool: ['altes Andenken', 'narbiges Schwertarm', 'Sprache der Verlorenen', 'Erinnerungen, die warnen', 'getragene Reisetracht', 'durchgemacht und überlebt', 'kennt das Schlachtfeld', 'spürt einen Fluch', 'hat die Ruinen gesehen', 'einst gelernte Liturgie', 'eiserner Wille', 'sieht durch Lügen', 'Erinnerungsstück eines Toten', 'eine Lektion aus Leid', 'kennt den Weg zurück', 'spricht eine vergessene Zunge'],
    weaknessTagPool: ['Albträume kehren wieder', 'verfolgt von alten Feinden', 'das Mal des Fluches', 'eine Schuld, die nie erlischt', 'Erinnerung schmerzt'],
    questPool: ['Ich finde heraus, was wirklich geschah.', 'Ich befreie mich von dem, was mich bindet.', 'Ich bringe das Vergangene zur Ruhe.', 'Ich rette, was noch zu retten ist.']
  },
  People: {
    type: 'Origin',
    titleTagSuggestions: ['Sylvenelf', 'Highlanderin', 'Battlerider', 'Hexenblut', 'Karawanenvolk', 'Bibervolk'],
    powerTagPool: ['kennt die Sitten meines Volkes', 'altertümliches Lied', 'angeborener Sinn für Spuren', 'Werkzeug aus der Heimat', 'Bogen meines Volkes', 'wettergegerbte Haut', 'die Sprache der Ahnen', 'Tracht meines Volkes', 'Ruf der Verbündeten', 'unerwartete Stärke', 'angeborene Schnelligkeit', 'leiser Schritt', 'Schwert meines Volkes', 'Heimischer Boden gibt Kraft', 'sieht im Dunkeln', 'Affinität zu Tieren'],
    weaknessTagPool: ['gemieden in dieser Gegend', 'angeborene Schwäche', 'misstrauisch gegen Fremde', 'aus dem Element gerissen', 'auffälliges Merkmal'],
    questPool: ['Ich erhebe mein Volk wieder zu Würde.', 'Ich erfülle eine Prophezeiung meiner Sippe.', 'Ich bewahre die Lieder meines Volkes vor dem Vergessen.', 'Ich finde meinesgleichen.']
  },
  Personality: {
    type: 'Origin',
    titleTagSuggestions: ['Herz aus Gold', 'das gelbe Lächeln', 'mürrisch wie Stein', 'übte Lügnerin', 'unstillbar neugierig', 'tröstet die Welt'],
    powerTagPool: ['durchschaut eine Lüge', 'Lacher in dunkler Stunde', 'frohe Geschichte', 'Sturheit als Tugend', 'einnehmendes Lächeln', 'kennt die richtige Frage', 'gibt anderen Hoffnung', 'kalter Blick', 'einschüchterndes Auftreten', 'einfühlsame Stille', 'spielt den Narren', 'sucht nach der Wahrheit', 'plaudert sich aus jeder Lage', 'gibt einen Rat, der hilft', 'macht Mut zum Aufstehen', 'keine Gerüchte entgehen mir'],
    weaknessTagPool: ['leicht zu provozieren', 'sentimental im falschen Moment', 'ausnutzbar', 'spricht zu viel', 'erwartet Anerkennung'],
    questPool: ['Ich bleibe mir treu, koste es, was es wolle.', 'Ich helfe denen, die sonst niemand sieht.', 'Ich verstehe endlich, wer ich wirklich bin.', 'Ich bringe Licht in dunkle Räume.']
  },
  'Skill or Trade': {
    type: 'Origin',
    titleTagSuggestions: ['Hinterland-Spurenleser', 'Schmied der Berge', 'taschendiebischer Wandersmann', 'Heilkundige', 'Steuermann', 'Bogenbauer'],
    powerTagPool: ['meisterhaft an der Esse', 'Werkzeug meines Handwerks', 'kennt jede Spur im Wald', 'gut sortierte Vorratskammer', 'flinke Finger', 'liest die Karte', 'kennt jeden Knoten', 'Pfeil und Bogen geübt', 'eingespielte Schrittfolge', 'Stahl bis zur Klinge', 'leise Schritte', 'fester Griff', 'umgeht jede Wache', 'gut gemachte Werkzeuge', 'fachkundiger Blick', 'verlässliche Routine'],
    weaknessTagPool: ['überfordert ohne Werkzeug', 'wirkt einseitig', 'misstrauisch beobachtet', 'oft erschöpft vom Üben', 'kennt nur eine Welt'],
    questPool: ['Ich werde der Beste in meinem Fach.', 'Ich bewahre mein Handwerk vor dem Vergessen.', 'Ich finde Anwendung für meine Kunst, die wirklich zählt.', 'Ich gebe mein Wissen weiter.']
  },
  Trait: {
    type: 'Origin',
    titleTagSuggestions: ['stark wie ein Ochse', 'akrobatische Beweglichkeit', 'unheimlich schön', 'prophetische Visionen', 'Kraft des Wassers', 'unerschütterlich'],
    powerTagPool: ['leichter Schritt', 'unbändige Kraft', 'unverwundbar wirkende Schönheit', 'sieht, was kommen wird', 'spricht im Schlaf', 'springt höher als andere', 'taucht tief und lange', 'fühlt magische Spuren', 'unermüdlich', 'klettert wie eine Katze', 'ungewöhnlich präzise', 'lacht, wo andere schreien', 'übermenschliche Sinne', 'erinnert sich an alles', 'sehr geschickt', 'sieht im Halbdunkel'],
    weaknessTagPool: ['auffällig für Feinde', 'wird beneidet', 'erschöpft sich rasch', 'wirkt befremdlich', 'unbeholfen ohne Gabe'],
    questPool: ['Ich finde heraus, woher meine Gabe stammt.', 'Ich nutze meine Gabe für etwas Größeres.', 'Ich versuche, normal zu sein.', 'Ich überwinde die Grenzen meiner Gabe.']
  },
  Duty: {
    type: 'Adventure',
    titleTagSuggestions: ['Licht gegen die Finsternis', 'auf Vertrag', 'Schwur dem Lehnsherrn', 'Hüterin des Landes', 'Rachezwang', 'Bote des Königs'],
    powerTagPool: ['leuchtende Rüstung', 'kennt die Verbündeten der Sache', 'kraftvoller Schwur', 'Banner meines Lehnsherrn', 'Recht auf freien Durchgang', 'Recht auf Kost und Quartier', 'mein Eid macht mich stark', 'kennt das Reich von Norden bis Süden', 'gefürchteter Gegner des Bösen', 'Vertrag in der Hand', 'Anweisungen ausführen', 'kommandiert Soldaten', 'kennt Strategien des Kampfes', 'unbeirrbar im Zweck'],
    weaknessTagPool: ['rivalisiert um die Aufgabe', 'verhasst bei Feinden des Auftrags', 'fühlt Schuld bei Versagen', 'an Befehle gebunden'],
    questPool: ['Ich erfülle meinen Schwur, koste es, was es wolle.', 'Ich bringe die Auftraggeber zu Fall, wenn sie das Versprechen brechen.', 'Ich räche das Unrecht, das mir geschah.', 'Ich beschütze das Land, dem ich diene.']
  },
  Influence: {
    type: 'Adventure',
    titleTagSuggestions: ['Dockmeisterin', 'graue Eminenz', 'Stadtrat', 'Gildenführer', 'Anführerin der Schmuggler', 'Diplomatin'],
    powerTagPool: ['Spitzel an jeder Ecke', 'kennt die wahren Mächte der Stadt', 'spricht mit Befehlsgewalt', 'Gefälligkeiten einfordern', 'Gold öffnet Türen', 'eine Karte mit allen Namen', 'Boten in jede Richtung', 'Briefe öffnen Tore', 'kennt das Geheimnis aller', 'Gildensiegel', 'Recht auf Audienz', 'Beobachter überall', 'Schatzkammer im Hintergrund', 'Vertrauen der Mächtigen'],
    weaknessTagPool: ['Konkurrenz um die Position', 'erpressbar durch Geheimnisse', 'der Hof ist ein Schlangennest', 'unsichtbare Feinde'],
    questPool: ['Ich verteidige meine Position bis zum Ende.', 'Ich nutze meinen Einfluss, um die Welt zu wenden.', 'Ich entlarve die wahren Strippenzieher.', 'Ich werde der Mächtigste in dieser Stadt.']
  },
  Knowledge: {
    type: 'Adventure',
    titleTagSuggestions: ['Sterndeuter', 'Bewohner des Verborgenen', 'kennt jedes Land', 'Bibliothekar des Verbotenen', 'Studium der alten Reiche', 'Sprachgelehrter'],
    powerTagPool: ['liest in den Sternen', 'kennt die alten Sprachen', 'erkennt jedes Symbol', 'sieht die Zeichen', 'kennt verbotene Riten', 'erinnert sich an jedes Buch', 'analysiert eine Substanz', 'übersetzt jede Schrift', 'kennt Bestienkunde', 'führt geheime Forschung', 'ein Lexikon an Lore', 'kennt den Weg zur Wahrheit', 'spricht die Sprache der Toten', 'kennt jedes Provinzwappen'],
    weaknessTagPool: ['gefährliches Wissen anziehend für Feinde', 'verloren in der Welt der Bücher', 'körperlich nicht stark', 'verfolgt von neugierigen Mächten'],
    questPool: ['Ich enthülle die letzte Wahrheit, koste es, was es wolle.', 'Ich bewahre dieses Wissen vor dem Falschen.', 'Ich finde die Quelle der alten Lieder.', 'Ich verstehe, was niemand sonst versteht.']
  },
  'Prodigious Ability': {
    type: 'Adventure',
    titleTagSuggestions: ['fesselnder Geschichtenerzähler', 'meisterhafter Koch', 'gefürchteter Klingenmeister', 'wundersamer Heiler', 'unbestechlicher Bogenschütze', 'Meister des Spiels'],
    powerTagPool: ['Schwertkunst, die staunen macht', 'eigene Signaturtechnik', 'verzaubert mit Worten', 'erfindet im Augenblick', 'staunenswerter Sprung', 'einmalige Heiltechnik', 'erkennt den schwachen Punkt', 'erkennt jeden Zauber', 'wundersames Werk', 'unfehlbarer Pfeil', 'unbestreitbare Eleganz', 'erstaunliche Geschwindigkeit', 'gilt als der Beste', 'reißt jede Menge mit'],
    weaknessTagPool: ['arrogant gegenüber Schwächeren', 'wird ständig herausgefordert', 'erschöpft im Alltag', 'misstrauisch beobachtet'],
    questPool: ['Ich werde unangefochten der Beste.', 'Ich gebe meine Kunst weiter, bevor ich sterbe.', 'Ich vollbringe das Meisterwerk meines Lebens.', 'Ich nutze meine Gabe für etwas Würdiges.']
  },
  Relic: {
    type: 'Adventure',
    titleTagSuggestions: ['die Riesenfaust', 'Beutel mit Zauberstaub', 'Kessel der Beschwörung', 'verfluchte Klinge', 'Stab der alten Zeiten', 'Krone der Vergessenen'],
    powerTagPool: ['donnernder Faustschlag', 'beschwört nützliche Dinge', 'lauscht den Geistern', 'der Stein flüstert mir zu', 'die Klinge schneidet alles', 'Kraft aus dem Artefakt', 'wärmt die Seele', 'leuchtet im Dunkeln', 'leitet zum Ziel', 'verbirgt mich vor Bösem', 'enthüllt verborgene Wahrheiten', 'bindet feindliche Magie', 'der Helm zeigt Visionen', 'die Münze kommt zurück'],
    weaknessTagPool: ['der Gegenstand hat einen eigenen Willen', 'Diebe begehren ihn', 'Magie hat ihren Preis', 'kann verloren gehen'],
    questPool: ['Ich entschlüssele das Geheimnis dieses Artefakts.', 'Ich erfülle, was die alte Magie von mir verlangt.', 'Ich bringe das Artefakt an seinen Ursprung zurück.', 'Ich befreie mich von seinem Bann.']
  },
  'Uncanny Being': {
    type: 'Adventure',
    titleTagSuggestions: ['körperloser Geist', 'Höllenkind', 'Kleiner Hob', 'Wechselgestalt', 'Mondgeborene', 'Schattenwandler'],
    powerTagPool: ['verschwindet in den Schatten', 'sieht das Unsichtbare', 'spricht mit Toten', 'unverletzlich durch Stahl', 'kann sich verwandeln', 'spürt lebende Seelen', 'übersteht Feuer', 'bewegt Dinge ohne Berührung', 'Krallen oder Reißzähne', 'fließt durch Spalten', 'erscheint und verschwindet', 'flüstert Gedanken in andere', 'spürt böse Magie', 'liebt Dunkelheit'],
    weaknessTagPool: ['gebannt durch Salz / Eisen / Sonne', 'gemieden von Mensch und Tier', 'angreifbar durch heiliges Symbol', 'gehasst von beiden Welten'],
    questPool: ['Ich finde heraus, was ich wirklich bin.', 'Ich finde meinen Platz unter den Menschen.', 'Ich bin meinem Wesen treu, koste es, was es wolle.', 'Ich befreie mich von meinem Bann.']
  },
  Destiny: {
    type: 'Greatness',
    titleTagSuggestions: ['Erbin des Throns', 'Untergang der Welt', 'finde den Erzähler', 'Auserwählter der Götter', 'das letzte Licht', 'das Kind der Sterne'],
    powerTagPool: ['das Schicksal beschützt mich', 'Zeichen weisen den Weg', 'Verbündete erscheinen', 'Glück folgt meinen Schritten', 'wundersame Rettung', 'die Welt hört auf mich', 'Vorhersehung leitet mich', 'verborgene Helfer', 'Wege öffnen sich', 'Türen, die niemand öffnen sollte', 'mein Antlitz erkennt jeder', 'Bestimmung pulsiert in mir', 'Träume offenbaren Geheimnisse', 'unerschütterlicher Mut'],
    weaknessTagPool: ['Feinde wollen mich verhindern', 'der Pfad ist eng', 'Hochmut verfolgt mich', 'andere fordern meinen Tod'],
    questPool: ['Ich erfülle, wozu ich geboren wurde.', 'Ich beweise, dass ich frei bin trotz meiner Bestimmung.', 'Ich rette die Welt vor dem, was kommt.', 'Ich entdecke, wer mich auserwählt hat.']
  },
  Dominion: {
    type: 'Greatness',
    titleTagSuggestions: ['Herrin der Mark', 'Anführerin der Gilde', 'Lehnsherr von Stein', 'Königin des Tales', 'Befehlshaber der Wache'],
    powerTagPool: ['Soldaten meines Reiches', 'Tribute aus dem Land', 'Banner und Wappen', 'Recht zu richten', 'Burg auf dem Berg', 'Räte und Berater', 'Steuereinnahmen', 'eingespielte Verwaltung', 'kennt die Adligen', 'Boten in jede Richtung', 'spricht für ein Volk', 'Recht auf Krieg', 'beste Spione weit und breit'],
    weaknessTagPool: ['der Thron wird begehrt', 'Schulden gegenüber Mächtigen', 'Aufstand gärt', 'einsam an der Spitze'],
    questPool: ['Ich vergrößere mein Reich.', 'Ich beschütze mein Land vor allen Feinden.', 'Ich bin der gerechte Herrscher, den dieses Land verdient.', 'Ich finde heraus, wer mich verraten hat.']
  },
  Mastery: {
    type: 'Greatness',
    titleTagSuggestions: ['legendärer Schmied', 'Meister der Klinge', 'Erbauer der Welten', 'Königin der Stimme', 'unangefochtene Heilerin'],
    powerTagPool: ['Werkzeuge eines Meisters', 'gilt als Legende', 'Schüler aus aller Welt', 'kann das Unmögliche schaffen', 'kennt jede Variante', 'meisterhafte Kontrolle', 'eine Werkstatt mit eigenem Namen', 'Werke werden Jahrhunderte überdauern', 'andere Meister suchen Rat', 'andere Disziplinen ähnlich beherrscht', 'unverwechselbarer Stil', 'kann keinen Wettkampf verlieren', 'geheime Techniken'],
    weaknessTagPool: ['gefährdet durch Neid', 'jeder will von mir lernen', 'erwartet zu hohe Standards', 'wird zur Geisel meiner Größe'],
    questPool: ['Ich erschaffe das Meisterwerk meines Lebens.', 'Ich gebe meine Kunst an die nächste Generation weiter.', 'Ich verändere die Welt mit meiner Kunst.', 'Ich finde jemanden, der mich übertrifft.']
  },
  Monstrosity: {
    type: 'Greatness',
    titleTagSuggestions: ['Drachenwurm', 'Sturmtitan', 'Nebelhydra', 'das Größenwesen aus dem See', 'der Wandelnde Wald'],
    powerTagPool: ['enorme Größe', 'flügelschlag wie Sturm', 'unverletzbare Haut', 'magische Aura der Furcht', 'unstillbarer Hunger', 'Schwanz, der Bäume fällt', 'Atem aus Feuer / Eis / Säure', 'Schreckenskreis um mich', 'unergründlicher Blick', 'Diener gehorchen mir', 'übermächtige Stärke', 'rufe Stürme', 'gigantische Schritte'],
    weaknessTagPool: ['eine verwundbare Stelle', 'jagdwürdig in den Augen vieler', 'zu groß für menschliche Welt', 'der Hunger erschüttert mich'],
    questPool: ['Ich finde meinesgleichen.', 'Ich akzeptiere mein Wesen.', 'Ich beschütze meine Brut, koste es, was es wolle.', 'Ich kehre zur menschlichen Form zurück.']
  },
  Companion: {
    type: 'Variable Might',
    titleTagSuggestions: ['Schwertbande', 'imposanter Wolfshund', 'Schutzgeist', 'frecher Pixie', 'Falke meiner Mutter', 'Beschwörter Geist'],
    powerTagPool: ['imposanter Wolfshund', 'spürt feindliche Absichten', 'Bande Schwertkämpfer', 'kämpft mit mir Schulter an Schulter', 'gehorcht jedem Befehl', 'Ablenkung mit Verve', 'unsichtbarer Schutzgeist', 'flüstert Warnungen', 'zerstreut die Wache', 'läuft schneller als mein Pferd', 'schmuggelt Botschaften', 'tröstet mich in der Nacht', 'unfehlbare Spürnase', 'Familie an meiner Seite'],
    weaknessTagPool: ['gerät leicht in Gefahr', 'lärmig und unbeherrscht', 'kann mich verlassen', 'beschützt nur mich'],
    questPool: ['Ich beschütze meinen Begleiter um jeden Preis.', 'Ich erfülle einen Auftrag mit meinem Begleiter.', 'Ich bringe ihn / sie heim.', 'Ich befreie ihn / sie aus dem Bann.']
  },
  Magic: {
    type: 'Variable Might',
    titleTagSuggestions: ['Hexe der Wälder', 'Sturmrufer', 'Heiler der Götter', 'Banner der Geister', 'rituelle Zauberin', 'Alchemistin'],
    powerTagPool: ['kleines Zauberwerk', 'Bannkreis ziehen', 'spricht alte Worte', 'verflucht den Feind', 'segnet die Verbündeten', 'spricht mit Geistern', 'verwandelt sich in Tier', 'sieht durch Schleier', 'braut starke Tränke', 'schreibt mächtige Runen', 'beschwört kleine Wesen', 'Heilkräuter und Salben', 'Magieeisen erkennen', 'lenkt die Winde', 'hext Dinge in die Bewegung', 'flüstert in die Träume'],
    weaknessTagPool: ['erschöpft durch Magie', 'gehasst und gehetzt', 'verlangt einen Preis', 'unkontrollierbare Nebenwirkungen'],
    questPool: ['Ich verstehe, woher meine Magie wirklich kommt.', 'Ich nutze meine Magie nur für Würdiges.', 'Ich befreie die, denen ich Unrecht tat.', 'Ich finde einen Lehrer, der mich vollendet.']
  },
  Possessions: {
    type: 'Variable Might',
    titleTagSuggestions: ['handgefertigte Panflöte', 'verborgene Dolche', 'Pferd und Rüstung', 'Brief des Fürsten', 'Kette aus Gold', 'mein Werkzeugkasten'],
    powerTagPool: ['meisterhaft geschmiedete Klinge', 'reich gefüllte Reisetasche', 'Pferd, das mir gehorcht', 'verborgene Dolche', 'verziertes Wams', 'Werkzeug für jeden Fall', 'Brief mit Siegel', 'Kette von Wert', 'gut gewartete Rüstung', 'silberne Pfeile', 'Reisekarten', 'wertvoller Schmuck', 'Truhe mit Wertsachen', 'getarnter Reisemantel'],
    weaknessTagPool: ['verletzlich gegen Diebe', 'braucht Pflege', 'auffällig im Wert', 'Bindung an einen Ort'],
    questPool: ['Ich verbessere mein Werkzeug, bis es perfekt ist.', 'Ich behalte das Erbstück um jeden Preis.', 'Ich finde das fehlende Stück meiner Sammlung.', 'Ich teile, was ich habe, gerecht aus.']
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
