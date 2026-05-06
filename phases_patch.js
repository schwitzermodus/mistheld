/* =====================================================
   phases_patch.js — Einzelner Kartenstapel (40 Karten)
   Keine Phasen mehr — ein gemischter Stapel.
===================================================== */
(function() {
  var newCards = [
    // Welt & Atmosphäre
    { title: 'Ein Hof am Waldrand bei Nebel', text: 'Stille zwischen den Bäumen, Rauch über dem Dach.', affinities: { 'Skill or Trade': 2, 'People': 2, 'Companion': 1 } },
    { title: 'Eine zerstörte Burg, in der noch jemand wohnt', text: 'Die Mauern sind alt, aber der Rauch ist frisch.', affinities: { 'Circumstance': 2, 'Relic': 1, 'Dominion': 2 } },
    { title: 'Marktplatz, Geschrei, Diebesfinger', text: 'Das Leben drängt, der Geldbeutel ist leichter geworden.', affinities: { 'Skill or Trade': 2, 'Personality': 2, 'Influence': 1 } },
    { title: 'Ein Buch, das niemand lesen sollte', text: 'Tinte, die sich noch bewegt. Die Seiten sind warm.', affinities: { 'Knowledge': 3, 'Magic': 1, 'Relic': 1 } },
    { title: 'Ein Schwur am Sterbebett', text: 'Hand auf dem fiebrigen Brustkorb, Worte, die binden.', affinities: { 'Devotion': 3, 'Duty': 2 } },
    { title: 'Eine alte Schmiede mit Funkenflug', text: 'Jeder Hammerschlag hallt durch das Tal.', affinities: { 'Skill or Trade': 3, 'Mastery': 1, 'Possessions': 1 } },
    { title: 'Ein Saal voll mit Adligen', text: 'Worte werden hier gewogen wie Gold und sind oft tödlicher.', affinities: { 'Circumstance': 2, 'Influence': 2, 'Dominion': 1 } },
    { title: 'Ein Kreis aus Kerzen, mitten in der Nacht', text: 'Die Schatten zucken im Takt einer fremden Sprache.', affinities: { 'Magic': 3, 'Knowledge': 1, 'Devotion': 1 } },
    { title: 'Das Rumpeln tief unter der alten Erde', text: 'Es schläft schon sehr lange. Aber irgendetwas deutet darauf hin, dass es aufwacht.', affinities: { 'Monstrosity': 3, 'Destiny': 2 } },
    { title: 'Eine Meisterin, die keine Worte braucht', text: 'Ich sah sie einmal arbeiten. Ich weiß jetzt, was ich nie erreichen werde.', affinities: { 'Mastery': 3, 'Prodigious Ability': 2 } },
    // Herkunft & Hintergrund
    { title: 'Aus einer alten Familie mit Geheimnissen', text: 'Mein Name öffnet Türen und schließt andere für immer.', affinities: { 'People': 2, 'Past': 1, 'Dominion': 1, 'Circumstance': 1 } },
    { title: 'Aufgewachsen unter Fremden', text: 'Niemand wusste, wer ich wirklich war. Vielleicht ich auch nicht.', affinities: { 'Past': 1, 'Circumstance': 2, 'Personality': 1, 'Influence': 1 } },
    { title: 'Im Krieg verloren, im Frieden nicht heimisch', text: 'Ich kenne die Schlachtfelder besser als die Marktplätze.', affinities: { 'Past': 1, 'Duty': 2, 'Influence': 1 } },
    { title: 'Der einzige Überlebende meines Dorfes', text: 'Ich trage die Asche der Meinen mit mir. Niemand sonst tut es.', affinities: { 'Past': 1, 'People': 2, 'Devotion': 1, 'Destiny': 1 } },
    { title: 'Meine Familie übte ein Handwerk seit Generationen', text: 'Ich kannte den Geruch der Werkstatt, bevor ich laufen konnte.', affinities: { 'Skill or Trade': 3, 'People': 1, 'Possessions': 1 } },
    { title: 'Adelige Erziehung, eigene Wege', text: 'Sie haben mir alles beigebracht, außer wer ich sein will.', affinities: { 'Circumstance': 2, 'Personality': 2, 'Influence': 1 } },
    { title: 'Aufgewachsen mit ungewöhnlichen Lehrern', text: 'Was sie mir beibrachten, lernt man nicht in den Städten.', affinities: { 'Knowledge': 2, 'Magic': 2, 'Trait': 1 } },
    { title: 'Ich war nie wie die anderen', text: 'Schon als Kind wusste ich es. Andere wussten es auch.', affinities: { 'Trait': 3, 'Personality': 1, 'Uncanny Being': 1 } },
    { title: 'Ich war für etwas Großes vorgesehen', text: 'Die Alten sahen es. Ich weigerte mich, es zu glauben.', affinities: { 'Destiny': 3, 'Dominion': 1 } },
    { title: 'Ich habe etwas Wichtiges geerbt, das mich verfolgt', text: 'Es war ein Segen, sagten sie. Der Preis wurde nicht genannt.', affinities: { 'Relic': 3, 'Possessions': 2 } },
    // Können & Wesen
    { title: 'Ein altes Schwert, das nur ich führen kann', text: 'Es kennt meine Hand. Niemand sonst kann es heben.', affinities: { 'Relic': 2, 'Possessions': 1, 'Mastery': 1 } },
    { title: 'Ich verstehe, was Tiere sagen', text: 'Sie haben Geschichten. Manche sind Warnungen.', affinities: { 'Magic': 2, 'Companion': 2, 'Trait': 1 } },
    { title: 'Ich kann Wunden flicken, die andere nicht können', text: 'Hände, die wissen, wo der Faden hin muss.', affinities: { 'Skill or Trade': 2, 'Knowledge': 2, 'Devotion': 1 } },
    { title: 'Ich bin schneller, als jemand wie ich sein dürfte', text: 'Niemand sieht den Schritt kommen, der mich rettet.', affinities: { 'Trait': 3, 'Prodigious Ability': 2 } },
    { title: 'Eine Magie, die ich nicht ganz beherrsche', text: 'Manchmal hilft sie. Manchmal lässt sie mich allein.', affinities: { 'Magic': 3, 'Uncanny Being': 1 } },
    { title: 'Ein Wesen, das mir folgt und mir gehört', text: 'Ich bin nicht allein, auch wenn es niemand sieht.', affinities: { 'Companion': 3, 'Magic': 1, 'Uncanny Being': 1 } },
    { title: 'Wissen über Dinge, die andere fürchten', text: 'Ich weiß, was im Schatten lauert. Sie wissen es nicht.', affinities: { 'Knowledge': 3, 'Uncanny Being': 1 } },
    { title: 'Ich bin etwas anderes als ein Mensch', text: 'Mein Blut weiß es. Mein Spiegelbild auch.', affinities: { 'Uncanny Being': 3, 'Trait': 1, 'Monstrosity': 1 } },
    { title: 'Ich beherrsche etwas wie niemand sonst', text: 'Ich weiß nicht, woher es kommt. Es ist einfach immer da gewesen.', affinities: { 'Prodigious Ability': 3, 'Mastery': 2 } },
    { title: 'Ich bin mächtiger als alle hier wissen', text: 'Ich zeige es ihnen nur, wenn mir keine Wahl bleibt.', affinities: { 'Monstrosity': 2, 'Dominion': 2, 'Destiny': 1 } },
    // Antrieb & Verwundbarkeit
    { title: 'Ich suche jemanden, den ich verloren habe', text: 'Sein/ihr Name ist mein erstes Wort beim Aufwachen.', affinities: { 'Devotion': 2, 'People': 1, 'Duty': 1 } },
    { title: 'Ich will herausfinden, was ich wirklich bin', text: 'Es gibt eine Antwort. Ich hoffe, ich kann mit ihr leben.', affinities: { 'Past': 2, 'Uncanny Being': 1, 'Destiny': 2 } },
    { title: 'Ich vertraue niemandem mehr', text: 'Einmal war einmal zu oft.', affinities: { 'Personality': 2, 'Past': 1, 'Influence': 1 } },
    { title: 'Mein Stolz ist mein größtes Problem', text: 'Ich weiß es. Und tue trotzdem nichts dagegen.', affinities: { 'Personality': 2, 'Mastery': 1, 'Circumstance': 1 } },
    { title: 'Ich habe einen Schwur zu erfüllen', text: 'Worte, die ich nicht zurüknehmen kann. Ich will es auch nicht.', affinities: { 'Devotion': 2, 'Duty': 3 } },
    { title: 'Ich will gegen ein Unrecht kämpfen', text: 'Solange es steht, schlafe ich nicht ruhig.', affinities: { 'Duty': 2, 'Devotion': 2, 'Influence': 1 } },
    { title: 'Ich habe eine Schuld zu begleichen', text: 'Sie steht in mir wie ein Stein. Eines Tages werfe ich ihn.', affinities: { 'Past': 2, 'Duty': 1, 'People': 1 } },
    { title: 'Ich will bewahren, was mir wirklich wichtig ist', text: 'Nicht alles wird ersetzt. Manches ist unwiederbringlich.', affinities: { 'Possessions': 2, 'Companion': 2, 'People': 1 } },
    { title: 'Ich will das Beste von mir zeigen', text: 'Einmal. Für die richtigen Menschen. Zur richtigen Zeit.', affinities: { 'Prodigious Ability': 2, 'Mastery': 2, 'Personality': 1 } },
    { title: 'Ich will das zurükerobern, was mir gehört', text: 'Das Recht ist klar. Nur die Welt ist blind dafür.', affinities: { 'Dominion': 2, 'Monstrosity': 1, 'Duty': 1 } }
  ];
  // Einzelne Phase mit allen Karten
  PHASES.splice(0, PHASES.length, {
    id: 1, title: '', eyebrow: '',
    cards: newCards
  });
})();
