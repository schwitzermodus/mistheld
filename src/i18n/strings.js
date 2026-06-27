/* =====================================================
   UI-Texte (i18n). Aktuell nur Deutsch. Struktur key->Text ist
   sprachfaehig; weitere Sprachen kommen in einem spaeteren Schritt.
   Aus index.html extrahiert.
===================================================== */
export const STRINGS={
  pageTitle:'Mistheld – Heldengenerator',
  welcome:{
    mark:'Legenden des Nebels',title:'Heldengenerator',
    sub:'Mit ein paar Swipes erschaffst du deinen nächsten Helden.',
    howTitle:"So funktioniert's",
    howItems:[
      'Du siehst Bilder und Situationen. Wische nach rechts wenn sie zu deinem Helden passen könnten.',
      'Wische nach links wenn sie eher nicht passen.',
      'Am Ende erhältst du Vorschläge für deinen Helden.',
    ],
    btnStart:'Start',
    btnLibrary:'Meine Helden',
  },
  library:{
    title:'Meine Helden',
    empty:'Noch keine Helden gespeichert. Erschaffe deinen ersten Helden mit „Start“.',
    open:'Öffnen',
    delete:'Löschen',
    themesWord:'Themes',
  },
  intro:{
    title:'So funktioniert es',
    intro:'Du bekommst gleich verschiedene Inspirationen für deinen nächsten Helden angezeigt. Was gut passt, wischst du nach rechts und was weniger gut passt nach links. Durch deine Auswahl entsteht anschließend dein neuer Held.',
    modeLabel:'Spielmodus',
    modeDesc:{
      beginner:'Nur Theme-Typ und Might-Stufe Ursprung',
      standard:'Alle Theme-Typen mit regulären Might-Stufen',
      custom:'Individuelle Theme-Typen und Might-Stufen'
    },
    settingsHint:'Feineinstellungen unter',
    settingsLink:'Einstellungen',
    cta:"Los geht's",
    back:'Zurück',
    partialWarning:function(k){return 'Mit diesen Einstellungen entsteht nur ein Teilergebnis ('+k+' von 4 Themes). Passe die Einstellungen an für einen vollständigen Helden.';},
  },
  swipe:{
    decisionYes:'Passt',decisionNo:'Nicht',decisionSuper:'Genau ich!',
    cardCounter:function(cur,tot){return 'Karte '+cur+' von '+tot;},
    inspirationLabel:'Inspiration',possibleThemesLabel:'Theme-Typen',examplesLabel:'etwa:',
    formingLabel:'Dein Held nimmt Form an …',
    readyCta:'Dein Held ist bereit – ansehen',
    ariaYes:'Passt',ariaNo:'Passt nicht',ariaSuper:'Genau mein Held – zählt doppelt',ariaUndo:'Letzte Karte zurück',ariaSkip:'Restliche Karten überspringen',
  },
  result:{
    btnAccept:'Speichern',
    btnRestart:'Neu',
    btnEdit:'Bearbeiten',
    btnDone:'Fertig',
    questLabel:'Quest',
    storyLabel:'Geschichte',
    themesLabel:'Themes',
    themeTypeLabel:'Theme Type',
    backpackLabel:'Backpack',
    fellowshipLabel:'Fellowship-Karte',
    placeholderSoon:'Folgt später',
  },
  hero:{
    eyebrow:'Dein Held',
    saveEyebrow:'Bereit!',
    labelName:'Name',
    labelTitle:'Titel',
    labelDescription:'Beschreibung',
    labelFirstName:'Vorname',
    labelEpithet:'Beiname',
    labelTitleTag:'Power Tag · Titel',
    labelPowerTags:'Power Tags',
    labelPower1:'Power Tag',
    labelPower2:'Power Tag',
    labelWeakness:'Weakness Tag',
    labelQuest:'Quest',
    editTheme:'Bearbeiten',
    rerollShort:'Neu',
    fullReroll:'↺ Ganzes Theme neu würfeln',
  },
  settings:{
    heading:'Einstellungen',ariaBack:'Zurück',ariaOpen:'Einstellungen',
    presetIntro:'Wähle ein Profil als Ausgangspunkt – es legt fest, welche Theme-Typen dein Held bekommen kann:',
    presets:{ beginner:'Einsteiger', standard:'Standard', custom:'Individuell' },
    presetHints:{
      beginner:'Für den Einstieg: nur Ursprung-Typen (Might fixiert). Begleiter, Magie und Besitz sind optional. Mehr Auswahl unter „Standard“.',
      standard:'Buch-Standard: alle Theme-Typen auf ihrer Quellbuch-Stufe. Begleiter, Magie und Besitz darfst du in der Stufe frei wählen.',
      custom:'Volle Kontrolle: jeden Theme-Typ ein- oder ausschalten und jede Might-Stufe frei wählen.',
    },
    ttSectionPrefix:'Theme Type ',
    ttVariableGroup:'Variable Might-Stufe',
    quick:{ 'all-on':'Alle an', 'all-off':'Alle aus', 'reset':'Zurücksetzen' },
    consequence:function(n,total){ return 'Aktuell können <b>'+n+'</b> von '+total+' Theme-Typen entstehen.'; },
  },
  loading:{default:'Einen Moment...',generating:'Helden weben...',alternative:'Anderen Helden weben...',cards:'Inspirationen werden geladen...'},
  audio:{ariaOn:'Musik stumm schalten',ariaOff:'Musik anschalten'},
  might:{Origin:'Ursprung',Adventure:'Abenteuer',Greatness:'Allmacht'},
  themebooks:{
    'Circumstance':'Umstand','Devotion':'Hingabe','Past':'Vergangenheit',
    'People':'Volk','Personality':'Persönlichkeit','Skill or Trade':'Fähigkeit oder Beruf',
    'Trait':'Begabung','Duty':'Pflicht','Influence':'Einfluss','Knowledge':'Wissen',
    'Prodigious Ability':'Außergewöhnliche Fähigkeit','Relic':'Relikt',
    'Uncanny Being':'Unheimliches Wesen','Destiny':'Bestimmung','Dominion':'Herrschaft',
    'Mastery':'Meisterschaft','Monstrosity':'Monstrosität',
    'Companion':'Begleiter','Magic':'Magie','Possessions':'Besitz',
  },
  pdf:{
    sheetTitle:'Heldenblatt',
    powerTags:'Power-Tags',weaknessTag:'Weakness-Tag',quest:'Quest',
    storyLabel:'Geschichte',backpack:'Backpack',fellowship:'Fellowship',notes:'Notizen',
    filename:'mistheld-character.pdf',
    errLoad:'PDF-Bibliothek konnte nicht geladen werden.',
    errCreate:'PDF konnte nicht erstellt werden.',
  },
};

export function displayMight(l)    { return STRINGS.might[l]      || l; }
export function displayThemebook(n){ return STRINGS.themebooks[n] || n; }
