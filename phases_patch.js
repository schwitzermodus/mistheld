/* =====================================================
   phases_patch.js — Korrigierte Phasenkarten
   Wird nach data.js geladen.
   Nutzt Array.splice() um PHASES in-place zu ersetzen
   (funktioniert auch bei const-Deklaration in data.js).
===================================================== */
(function() {
  const newPhases = [
    {
      id: 1, title: 'Stimmung & Welt', eyebrow: 'Phase 1 von 4',
      cards: [
        { title: 'Ein Hof am Waldrand bei Nebel', text: 'Stille zwischen den Bäumen, Rauch über dem Dach.', affinities: { 'Skill or Trade': 2, 'People': 1, 'Past': 1, 'Companion': 1 }, hooks: ['ländlich','wildnis','ruhig'] },
        { title: 'Eine zerstörte Burg, in der noch jemand wohnt', text: 'Die Mauern sind alt, aber der Rauch ist frisch.', affinities: { 'Past': 2, 'Circumstance': 2, 'Relic': 1, 'Dominion': 1 }, hooks: ['üster','vergangenheit','geheimnis'] },
        { title: 'Marktplatz, Geschrei, Diebesfinger', text: 'Das Leben drängt, der Geldbeutel ist leichter geworden.', affinities: { 'Skill or Trade': 2, 'Personality': 2, 'Influence': 1, 'Circumstance': 1 }, hooks: ['stadt','gewitzt','sozial'] },
        { title: 'Ein Buch, das niemand lesen sollte', text: 'Tinte, die sich noch bewegt. Die Seiten sind warm.', affinities: { 'Knowledge': 3, 'Magic': 1, 'Relic': 1, 'Past': 1 }, hooks: ['verboten','wissen','magisch'] },
        { title: 'Ein Schwur am Sterbebett', text: 'Hand auf dem fiebrigen Brustkorb, Worte, die binden.', affinities: { 'Devotion': 3, 'Duty': 2, 'Past': 1 }, hooks: ['eid','pflicht','schmerz'] },
        { title: 'Die offene Straße im Morgenlicht', text: 'Hinter mir die Heimat, vor mir das Unbekannte.', affinities: { 'Past': 1, 'Knowledge': 1, 'Personality': 1, 'Circumstance': 1 }, hooks: ['wanderer','frei','aufbruch'] },
        { title: 'Eine alte Schmiede mit Funkenflug', text: 'Jeder Hammerschlag hallt durch das Tal.', affinities: { 'Skill or Trade': 3, 'Mastery': 1, 'Possessions': 1 }, hooks: ['handwerk','feuer'] },
        { title: 'Ein Saal voll mit Adligen', text: 'Worte werden hier gewogen wie Gold und sind oft tödlicher.', affinities: { 'Circumstance': 2, 'Influence': 2, 'Personality': 1, 'Dominion': 1 }, hooks: ['hof','intrige','sozial'] },
        { title: 'Ein Kreis aus Kerzen, mitten in der Nacht', text: 'Die Schatten zucken im Takt einer fremden Sprache.', affinities: { 'Magic': 3, 'Knowledge': 1, 'Devotion': 1, 'Relic': 1 }, hooks: ['ritual','magisch','geheim'] },
        { title: 'Das Rumpeln tief unter der alten Erde', text: 'Es schläft schon sehr lange. Aber irgendetwas deutet darauf hin, dass es aufwacht.', affinities: { 'Monstrosity': 3, 'Destiny': 1, 'Knowledge': 1 }, hooks: ['monster','schicksal'] },
        { title: 'Eine Meisterin, die keine Worte braucht', text: 'Ich sah sie einmal arbeiten. Ich weiß jetzt, was ich nie erreichen werde.', affinities: { 'Mastery': 3, 'Prodigious Ability': 2 }, hooks: ['können','legende'] },
        { title: 'Die leere Burg auf dem Hügel', text: 'Jemand regierte einst hier. Ihr Erbe liegt in Trümmern. Noch.', affinities: { 'Dominion': 3, 'Trait': 1, 'Relic': 1 }, hooks: ['herrschaft','macht'] }
      ]
    },
    {
      id: 2, title: 'Herkunft & Hintergrund', eyebrow: 'Phase 2 von 4',
      cards: [
        { title: 'Aus einer alten Familie mit Geheimnissen', text: 'Mein Name öffnet Türen und schließt andere für immer.', affinities: { 'People': 2, 'Past': 2, 'Circumstance': 1 }, hooks: ['adel','erbe','geheimnis'] },
        { title: 'Aufgewachsen unter Fremden', text: 'Niemand wusste, wer ich wirklich war. Vielleicht ich auch nicht.', affinities: { 'Past': 1, 'Circumstance': 2, 'Personality': 1 }, hooks: ['außenseiter','geheimnis'] },
        { title: 'Im Krieg verloren, im Frieden nicht heimisch', text: 'Ich kenne die Schlachtfelder besser als die Marktplätze.', affinities: { 'Past': 2, 'Duty': 1, 'Circumstance': 1 }, hooks: ['veteran','trauma','soldat'] },
        { title: 'Der einzige Überlebende meines Dorfes', text: 'Ich trage die Asche der Meinen mit mir. Niemand sonst tut es.', affinities: { 'Past': 2, 'People': 1, 'Devotion': 1 }, hooks: ['verlust','erinnerung'] },
        { title: 'Geboren in Reichtum, alles verloren', text: 'Heute kenne ich den Preis von Brot. Damals nicht.', affinities: { 'Circumstance': 3, 'Personality': 1 }, hooks: ['gefallen','adel'] },
        { title: 'Meine Familie übte ein Handwerk seit Generationen', text: 'Ich kannte den Geruch der Werkstatt, bevor ich laufen konnte.', affinities: { 'Skill or Trade': 3, 'People': 1, 'Possessions': 1 }, hooks: ['handwerk','tradition'] },
        { title: 'Adelige Erziehung, eigene Wege', text: 'Sie haben mir alles beigebracht, außer wer ich sein will.', affinities: { 'Circumstance': 2, 'Personality': 2, 'Knowledge': 1, 'Influence': 1 }, hooks: ['adel','rebellion'] },
        { title: 'Aufgewachsen mit ungewöhnlichen Lehrern', text: 'Was sie mir beibrachten, lernt man nicht in den Städten.', affinities: { 'Knowledge': 2, 'People': 1, 'Magic': 2 }, hooks: ['gelehrt','ungewöhnlich'] },
        { title: 'Ein Versprechen, das alles veränderte', text: 'Ein einziges Wort, gesagt zur falschen Zeit. Oder zur richtigen.', affinities: { 'Devotion': 3, 'Duty': 2 }, hooks: ['eid','wendepunkt'] },
        { title: 'Ich war nie wie die anderen', text: 'Schon als Kind wusste ich es. Andere wussten es auch.', affinities: { 'Trait': 3, 'Personality': 1, 'Uncanny Being': 1 }, hooks: ['anders','besonders'] },
        { title: 'Ich war für etwas Großes vorgesehen', text: 'Die Alten sahen es. Ich weigerte mich, es zu glauben.', affinities: { 'Destiny': 3, 'Dominion': 1 }, hooks: ['schicksal','größe'] },
        { title: 'Ich habe etwas Wichtiges geerbt, das mich verfolgt', text: 'Es war ein Segen, sagten sie. Der Preis wurde nicht genannt.', affinities: { 'Relic': 3, 'Possessions': 2 }, hooks: ['erbe','artefakt'] }
      ]
    },
    {
      id: 3, title: 'Können & Wesen', eyebrow: 'Phase 3 von 4',
      cards: [
        { title: 'Ein altes Schwert, das nur ich führen kann', text: 'Es kennt meine Hand. Niemand sonst kann es heben.', affinities: { 'Relic': 3, 'Possessions': 1 }, hooks: ['relikt','waffe','erbe'] },
        { title: 'Ich verstehe, was Tiere sagen', text: 'Sie haben Geschichten. Manche sind Warnungen.', affinities: { 'Magic': 2, 'Trait': 1, 'Companion': 2, 'Uncanny Being': 1 }, hooks: ['tiere','magie','trait'] },
        { title: 'Ich lüge so gut, dass es manchmal wahr wird', text: 'Worte sind weicher als Stahl und schneiden tiefer.', affinities: { 'Skill or Trade': 2, 'Personality': 2, 'Influence': 1 }, hooks: ['list','sozial'] },
        { title: 'Ich kann Wunden flicken, die andere für tödlich halten', text: 'Hände, die wissen, wo der Faden hin muss.', affinities: { 'Skill or Trade': 2, 'Knowledge': 2, 'Magic': 1, 'Devotion': 1 }, hooks: ['heilung','handwerk'] },
        { title: 'Ich bin schneller, als jemand wie ich sein dürfte', text: 'Niemand sieht den Schritt kommen, der mich rettet.', affinities: { 'Trait': 3, 'Prodigious Ability': 2 }, hooks: ['gabe','gewandt'] },
        { title: 'Eine Magie, die ich nicht ganz beherrsche', text: 'Manchmal hilft sie. Manchmal lässt sie mich allein.', affinities: { 'Magic': 3, 'Uncanny Being': 1 }, hooks: ['magie','wild'] },
        { title: 'Ein Wesen, das mir folgt und mir gehört', text: 'Ich bin nicht allein, auch wenn es niemand sieht.', affinities: { 'Companion': 3, 'Magic': 1, 'Uncanny Being': 1 }, hooks: ['begleiter','geist'] },
        { title: 'Wissen über Dinge, die andere fürchten', text: 'Ich weiß, was im Schatten lauert. Sie wissen es nicht.', affinities: { 'Knowledge': 3, 'Magic': 1 }, hooks: ['gelehrt','dunkel'] },
        { title: 'Eine Bestimmung, die mir vorausgesagt wurde', text: 'Eine alte Frau sah es. Ich habe es lange nicht geglaubt.', affinities: { 'Destiny': 3, 'People': 1 }, hooks: ['schicksal','prophezeiung'] },
        { title: 'Ich bin etwas anderes als ein Mensch', text: 'Mein Blut weiß es. Mein Spiegelbild auch.', affinities: { 'Uncanny Being': 3, 'Trait': 1, 'Monstrosity': 1 }, hooks: ['nicht-mensch','magisch'] },
        { title: 'Ich beherrsche etwas wie niemand sonst', text: 'Ich weiß nicht, woher es kommt. Es ist einfach immer da gewesen.', affinities: { 'Prodigious Ability': 3, 'Mastery': 2, 'Skill or Trade': 1 }, hooks: ['können','meisterschaft'] },
        { title: 'Ich bin mächtiger als alle hier wissen', text: 'Ich zeige es ihnen nur, wenn mir keine Wahl bleibt.', affinities: { 'Monstrosity': 2, 'Dominion': 2, 'Destiny': 1 }, hooks: ['monster','macht'] }
      ]
    },
    {
      id: 4, title: 'Antrieb & Verwundbarkeit', eyebrow: 'Phase 4 von 4',
      cards: [
        { title: 'Ich suche jemanden, den ich verloren habe', text: 'Sein/ihr Name ist mein erstes Wort beim Aufwachen.', affinities: { 'Devotion': 2, 'Past': 1, 'Duty': 1 }, hooks: ['quest:suchen','liebe','vermisst'] },
        { title: 'Ich will herausfinden, was ich wirklich bin', text: 'Es gibt eine Antwort. Ich hoffe, ich kann mit ihr leben.', affinities: { 'Past': 2, 'Uncanny Being': 1, 'Trait': 1, 'Destiny': 1 }, hooks: ['quest:identität'] },
        { title: 'Ich vertraue niemandem mehr', text: 'Einmal war einmal zu oft.', affinities: { 'Personality': 2, 'Past': 1 }, hooks: ['weakness:misstrauen'] },
        { title: 'Mein Stolz ist mein größtes Problem', text: 'Ich weiß es. Und tue trotzdem nichts dagegen.', affinities: { 'Personality': 2, 'Mastery': 1, 'Circumstance': 1 }, hooks: ['weakness:stolz'] },
        { title: 'Ich habe einen Schwur zu erfüllen', text: 'Worte, die ich nicht zurüknehmen kann. Ich will es auch nicht.', affinities: { 'Devotion': 2, 'Duty': 3 }, hooks: ['quest:eid'] },
        { title: 'Ich will gegen ein Unrecht kämpfen', text: 'Solange es steht, schlafe ich nicht ruhig.', affinities: { 'Duty': 2, 'Devotion': 2, 'Influence': 1 }, hooks: ['quest:gerechtigkeit'] },
        { title: 'Ich habe eine Schuld zu begleichen', text: 'Sie steht in mir wie ein Stein. Eines Tages werfe ich ihn.', affinities: { 'Past': 2, 'Duty': 1 }, hooks: ['quest:schuld'] },
        { title: 'Ich will herausfinden, was hinter dem Nebel liegt', text: 'Andere drehen um. Ich gehe weiter.', affinities: { 'Knowledge': 2, 'Past': 1, 'Destiny': 1, 'Personality': 1 }, hooks: ['quest:erkenntnis'] },
        { title: 'Ich will bewahren, was mir wirklich wichtig ist', text: 'Nicht alles wird ersetzt. Manches ist unwiederbringlich.', affinities: { 'Possessions': 2, 'Companion': 2, 'People': 1 }, hooks: ['bindung','besitz'] },
        { title: 'Ich will das Beste von mir zeigen', text: 'Einmal. Für die richtigen Menschen. Zur richtigen Zeit.', affinities: { 'Prodigious Ability': 2, 'Mastery': 2, 'Personality': 1 }, hooks: ['können','ruhm'] },
        { title: 'Ich will das zurükerobern, was mir gehört', text: 'Das Recht ist klar. Nur die Welt ist blind dafür.', affinities: { 'Dominion': 2, 'Monstrosity': 1, 'Duty': 1 }, hooks: ['recht','herrschaft'] }
      ]
    }
  ];
  PHASES.splice(0, PHASES.length, ...newPhases);
})();
