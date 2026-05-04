/* =====================================================
   strings.js — Alle Anzeigetexte der App

   Hier kannst du alle Texte der Anwendung bearbeiten.
   Keine anderen Dateien müssen angefasst werden.
===================================================== */

const STRINGS = {

  // ── Seitentitel ──────────────────────────────────
  pageTitle: 'Mistheld – LitM Heldengenerator',

  // ── Startseite ───────────────────────────────────
  welcome: {
    mark:     'Legend in the Mist',
    title:    'Heldengenerator',
    sub:      'Mit ein paar Swipes erschaffst du deinen nächsten Helden.',
    howTitle: "So funktioniert's",
    howItems: [
      'Du erhältst eine Auswahl verschiedener Inspirationen für deinen neuen Helden.',
      'Wische nach rechts, wenn die Karte zu deinem nächsten Helden passen könnte.',
      'Wische nach links, wenn sie eher nicht passt.',
      'Am Ende erhältst du verschiedene Vorschläge für deinen Helden.',
    ],
    btnStart: "Los geht's",
  },

  // ── Swipe-Screen ─────────────────────────────────
  swipe: {
    decisionYes:   'Passt',
    decisionNo:    'Nicht',
    phaseIntroTap: 'Tippe, um zu beginnen',
    cardCounter:   (cur, tot) => `Karte ${cur} von ${tot}`,
    ariaYes:       'Passt',
    ariaNo:        'Passt nicht',
    ariaUndo:      'Letzte Karte zurück',
  },

  // ── Ergebnisseite ────────────────────────────────
  result: {
    btnAccept:           'Held übernehmen & PDF',
    btnAlternative:      'Alle Themes neu würfeln',
    btnAlternativeMaxed: 'Max. Versuche erreicht',
    btnRestart:          'Nochmal swipen',
    questLabel:          'Quest',
    rerollTitle:         'Neu würfeln',
  },

  // ── Einstellungen ────────────────────────────────
  settings: {
    heading:  'Einstellungen',
    ariaBack: 'Zurück',
    ariaOpen: 'Einstellungen',
    mightGroup: {
      title: 'Might-Stufen',
      sub:   'Welche Might-Stufen sollen für deinen Helden entstehen können?',
    },
    vmGroup: {
      title: 'Theme-Typen mit veränderlichen Might-Stufen',
      sub:   'Welche Might-Stufen sollen diese Theme-Typen erhalten können?',
    },
    mightRows: {
      Origin:    { label: 'Ursprung',   hint: 'Allgemein · alltäglich' },
      Adventure: { label: 'Abenteuer',  hint: 'Besonders · heldenhaft' },
      Greatness: { label: 'Allmacht',   hint: 'Legendär · übernatürlich' },
    },
    vmLabels: {
      Companion:   'Begleiter',
      Magic:       'Magie',
      Possessions: 'Besitz',
    },
  },

  // ── Lade-Overlay ─────────────────────────────────
  loading: {
    default:     'Einen Moment...',
    generating:  'Helden weben...',
    alternative: 'Anderen Helden weben...',
  },

  // ── Audio ────────────────────────────────────────
  audio: {
    ariaOn:  'Musik stumm schalten',
    ariaOff: 'Musik anschalten',
  },

  // ── Might-Stufen (Anzeigenamen) ──────────────────
  // Wird in Ergebniskarten, Einstellungen und PDF verwendet
  might: {
    Origin:    'Ursprung',
    Adventure: 'Abenteuer',
    Greatness: 'Allmacht',
  },

  // ── Themebook-Namen ──────────────────────────────
  themebooks: {
    'Circumstance':       'Umstände',
    'Devotion':           'Hingabe',
    'Past':               'Vergangenheit',
    'People':             'Volk',
    'Personality':        'Persönlichkeit',
    'Skill or Trade':     'Können & Beruf',
    'Trait':              'Begabung',
    'Duty':               'Pflicht',
    'Influence':          'Einfluss',
    'Knowledge':          'Wissen',
    'Prodigious Ability': 'Außergewöhnliche Fähigkeit',
    'Relic':              'Relikt',
    'Uncanny Being':      'Seltsames Wesen',
    'Destiny':            'Bestimmung',
    'Dominion':           'Herrschaft',
    'Mastery':            'Meisterschaft',
    'Monstrosity':        'Ungeheuer',
    'Companion':          'Begleiter',
    'Magic':              'Magie',
    'Possessions':        'Besitz',
  },

  // ── Phasen-Intros ────────────────────────────────
  phases: [
    {
      eyebrow:   'Phase 1 von 4',
      title:     'Stimmung & Welt',
      narrative: 'Die Welt, die deinen Helden umgibt, spricht noch bevor er sich bewegt. Lass dich von Bildern und Atmosphären leiten.',
      questions: [
        'Welche Atmosphäre passt zu deinem Helden?',
        'In welcher Art von Welt bewegt er sich?',
        'Welche Orte und Stimmungen fühlen sich vertraut an?',
      ],
    },
    {
      eyebrow:   'Phase 2 von 4',
      title:     'Herkunft & Hintergrund',
      narrative: 'Die Welt hat Form gewonnen. Nun tauchen wir tiefer: Woher kommt dein Held? Was hat ihn geprägt, bevor die Geschichte ihn fand?',
      questions: [
        'Woher stammt dein Held wirklich?',
        'Welches Erlebnis hat ihn geformt?',
        'Was trägt er aus seiner Vergangenheit noch mit sich?',
      ],
    },
    {
      eyebrow:   'Phase 3 von 4',
      title:     'Können & Wesen',
      narrative: 'Herkunft und Geschichte haben Gestalt angenommen. Jetzt erkunden wir, was deinen Helden in dieser Welt einzigartig macht.',
      questions: [
        'Welche Fähigkeit oder Gabe besitzt er?',
        'Was hebt ihn von anderen ab?',
        'Was für ein Wesen verbirgt sich in ihm?',
      ],
    },
    {
      eyebrow:   'Phase 4 von 4 · Letzte Phase',
      title:     'Antrieb & Verwundbarkeit',
      narrative: 'In dieser letzten Phase geht es um das, was deinen Helden antreibt — und jene Wunden und Sehnsüchte, die ihn menschlich machen.',
      questions: [
        'Was ist sein tiefstes Ziel?',
        'Wovor hat er Angst oder Scheu?',
        'Wo liegt seine verwundbare Seite?',
      ],
    },
  ],

  // ── Erweiterungs-Marker ──────────────────────────
  expanded: {
    symbol:    '\u2726',
    title:     'Erweiterung',
    ariaLabel: 'Erweiterung',
  },

  // ── PDF ──────────────────────────────────────────
  pdf: {
    header:      'LEGEND IN THE MIST \u00b7 HERO CARD',
    powerTags:   'POWER TAGS',
    weaknessTag: 'WEAKNESS TAG',
    quest:       'QUEST',
    footer:      'Mistheld \u00b7 LitM Heldengenerator \u00b7 \u2736 markiert erweiterte Inhalte',
    filename:    'mistheld-character.pdf',
    errLoad:     'PDF-Bibliothek konnte nicht geladen werden.',
    errCreate:   'PDF konnte nicht erstellt werden.',
  },
};
