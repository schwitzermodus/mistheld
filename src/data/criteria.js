/* =====================================================
   Tag-/Theme-/Quest-Kriterien — EINZIGE maschinelle Quelle.
   Vereint: Form-Regeln + Bündelstruktur (mechanisch, von validate_tags genutzt),
   universelle LitM-Bewertungsfragen + pro-Themebook Power/Weakness Tag Questions
   (verbatim aus dem Core Book v1.01, englisch = kanonisch) + Might-Leitlinien.
   Genutzt vom Tag-Validator (Form/Struktur) und vom LLM-Judge (Relevanz/Nützlichkeit).
   Menschliche Doku: TAGS.md (verweist hierauf). Auto-generiert aus dem Quellbuch.
===================================================== */

// Mechanisch prüfbar (Form):
export const FORM_RULES = { maxWords: 5, forbidComma: true, forbidSentenceEnd: true };
export const STRUCTURE = { titlesPerBook: 12, minPowerTags: 4, minWeaknessTags: 2, minQuests: 2 };

// Universelle Bewertungsfragen (das semantische Herzstück — vom LLM-Judge angewandt).
export const UNIVERSAL = {
  powerUseful: 'Power Tags sollen überwiegend nützlich sein. Frage: „Welche Arten von Aktionen würde dieser Tag unterstützen oder ermöglichen — und sind die im Spiel und für den Helden hilfreich?"',
  weaknessLimiting: 'Weakness Tags sollen einschränken. Frage: „Welche Aktionen würde dieser Tag behindern? Wie oder wann verursacht er Probleme für den Helden?"',
  questMilestone: 'Quest-Frage: „Was könnte ein Milestone für diese Quest sein?"',
  questAbandon: 'Quest-Frage: „Welche Handlungen würden als Aufgeben (Abandoning) dieser Quest gelten?"',
  relevancePrinciple: 'Relevanz und Nützlichkeit eines Tags ergeben sich immer aus dem aktuellen Kontext: ein Tag kann für eine Aktion nützlich, für eine andere unnütz und in einer dritten hinderlich sein.',
  // Englische Originalformulierungen (Core Book S. 76–77):
  sourceEN: {
    powerUseful: 'Your power tags should be useful. Ask yourself: "What kind of actions would this tag support?"',
    weaknessLimiting: 'Your weakness tags should be limiting. Ask yourself: "What kind of actions would this tag hinder?" or "How or when would it cause problems for my Hero?"',
    quest: 'Ask yourself: "What could be a Milestone for this Quest?" and "What kind of actions would be considered Abandoning this Quest?"',
    relevance: 'A tag\'s relevance and usefulness is always determined in the context of what you\'re doing now.',
  },
};

// Might-Leitlinien (Titel + alle Power Tags passen zur Stufe). Quelle: TAGS.md / Core Book.
export const MIGHT_GUIDANCE = {
  Origin: { label: 'Ursprung', desc: 'gewöhnlich, bodenständig, im Rahmen normaler Mittel', examples: ['Dorfklatsch', 'geübter Schmied', 'gutes Schwert'] },
  Adventure: { label: 'Abenteuer', desc: 'über dem Gewöhnlichen: bemerkenswert, selten, heldenhaft, beginnend übernatürlich', examples: ['bemerkenswerter Schwertkämpfer', 'Segen der Götter'] },
  Greatness: { label: 'Allmacht', desc: 'grandios, legendär, welt- oder schicksalsprägend', examples: ['Königin des Reiches', 'Zauber der Vernichtung'] },
};

// Pro Themebook: die offiziellen Fragen, die ein guter Tag beantwortet (= Relevanz + Diversität).
export const THEMEBOOK_QUESTIONS = {
  "Circumstance": {
    "themeQuestions": [
      "What is your place in life and in society?",
      "What's interesting about where you have found yourself?",
      "What social position do you possess and how long have you had it?",
      "What makes you a stereotypical example of your circumstance?",
      "Are you a victim of circumstance or did you choose your lot in life?"
    ],
    "power": {
      "A": "What Circumstance do you find yourself in?",
      "B": "What tools or trappings of your position or station do you carry?",
      "C": "Who can you call upon or relate to thanks to your Circumstance?",
      "D": "What social skills have you developed as part of your Circumstance?",
      "E": "How can you exploit your Circumstance to get out of trouble?",
      "F": "Where do you go to be with others of similar social status?",
      "G": "What special right or privilege comes with your Circumstance?",
      "H": "What knowledge or knack is common to people in your position?",
      "I": "How have you learned to overcome your Circumstances?",
      "J": "What is the motto or creed you've adopted?"
    },
    "weakness": {
      "A": "What's the biggest challenge you face due to your unique position?",
      "B": "What aspect of your Circumstance do others scorn, shun, or detest?",
      "C": "What kinds of places or situations are off limits to you?",
      "D": "How do others commonly mistreat you?"
    }
  },
  "Devotion": {
    "themeQuestions": [
      "What is the most important thing to you, personally?",
      "How did you end up caring so much about this person, group, or ideal?",
      "Do you chafe under the needs, demands, or ethos of who or what you are devoted to?",
      "How far would you go to protect that which you are devoted to?"
    ],
    "power": {
      "A": "Who or what are you Devoted to?",
      "B": "What action do you most commonly take in service of your Devotion?",
      "C": "What feeling does your Devotion fill you with that you can call upon?",
      "D": "What possession do you carry or have that symbolizes your Devotion?",
      "E": "Where or when can you connect with your Devotion?",
      "F": "What does the object of your Devotion often help you with?",
      "G": "What quality do you possess that best exemplifies your dedication?",
      "H": "What approach do you take in social situations due to your Devotion?",
      "I": "What ethos or saying do you aspire to live up to in your dedication?",
      "J": "What useful ritual or habit do you have to show your Devotion?"
    },
    "weakness": {
      "A": "What are you blind to because of your Devotion?",
      "B": "What duties do you have that frequently need your time or resources?",
      "C": "What unsightly or destructive behavior can your Devotion evoke in you?",
      "D": "What often threatens the object of your Devotion?"
    }
  },
  "Past": {
    "themeQuestions": [
      "What life event or past experience shaped who you are?",
      "Why did you leave it behind, or how did you move past it?",
      "What repercussions of that experience still haunt you?",
      "Are you trying to return to the better days, or hoping to leave the past behind?"
    ],
    "power": {
      "A": "What past event or existence has shaped your life?",
      "B": "What major lesson did you learn from your Past?",
      "C": "What clothing or equipment have you kept with you?",
      "D": "What memento do you still hold on to?",
      "E": "What person or people from your Past can you still call upon?",
      "F": "What situation from your Past are you skilled at dealing with?",
      "G": "What reputation have you earned for yourself locally?",
      "H": "What secret skill or technique did you pick up?",
      "I": "What quality of character have you developed from your experiences?",
      "J": "What particular culture, clique, or people do you connect with now?"
    },
    "weakness": {
      "A": "What ugly secret do you keep, connected to your Past?",
      "B": "What person or group from your Past is still out to get you?",
      "C": "What past situations bring back painful or unwanted memories?",
      "D": "What physical or mental marks has your Past left on you?"
    }
  },
  "People": {
    "themeQuestions": [
      "Is your heritage a proud part of who you are, a plain fact of your existence, or a stain you're trying to wash off?",
      "What about your clothing style, items, or physique makes you stand out?",
      "What is more important to you, the traditions themselves or the lessons they teach?",
      "When in a bind, how do you turn to your native abilities and beliefs?"
    ],
    "power": {
      "A": "What do your People call themselves or one of their members?",
      "B": "What physical attribute common to your People serves you best?",
      "C": "What skill, technique, or trick is practiced by your People?",
      "D": "What item of cultural significance do you carry with you?",
      "E": "What knowledge is shared among your People?",
      "F": "Where are your People from, commonly found, or most comfortable?",
      "G": "When in need, who among your People can you call for aid?",
      "H": "What is the combat style or typical weapon used by your People?",
      "I": "What useful quality about you is very typical of your People?",
      "J": "What unique or supernatural ability do your People possess?"
    },
    "weakness": {
      "A": "What plight or difficulty of your People most affects you?",
      "B": "What often causes strife or discord among your People?",
      "C": "When are you hindered by your cultural ways or inherited traits?",
      "D": "How or by whom are your People most prejudiced against?"
    }
  },
  "Personality": {
    "themeQuestions": [
      "What are you like?",
      "What made you this way?",
      "How well does your personality mesh with others'?",
      "Is it all a show you're putting on for the world?"
    ],
    "power": {
      "A": "What Personality trait is most central to you?",
      "B": "In what situations does your Personality truly shine?",
      "C": "How do you influence other people?",
      "D": "What item or garment best expresses your personal style?",
      "E": "What interpersonal or social skill or talent do you possess?",
      "F": "When in trouble or stressed, what emotion or behavior do you turn to?",
      "G": "What is an unexpected but useful facet of your Personality?",
      "H": "How do you support or help others?",
      "I": "How do you resist influence or stay true to yourself?",
      "J": "How can your unique worldview help you figure things out?"
    },
    "weakness": {
      "A": "In what situations does your Personality get you into trouble?",
      "B": "What is an ugly or unfortunate aspect of your Personality?",
      "C": "What unwanted behavior does your Personality push you toward?",
      "D": "Who finds you, or who do you find, irksome or loathsome?"
    }
  },
  "Skill or Trade": {
    "themeQuestions": [
      "How did you acquire this skill or trade?",
      "What are its everyday needs?",
      "How do others look upon you as a practitioner of this skill?",
      "How do you keep your skills honed?"
    ],
    "power": {
      "A": "What Skill or Trade are you good at?",
      "B": "What specific technique within this Skill set is your specialty?",
      "C": "What tool, equipment, or outfit is a staple of your Trade?",
      "D": "Who most respects, values, or requires your abilities?",
      "E": "What unusual or inventive application have you found for your Skill?",
      "F": "In what conditions can you work with the most confidence and efficiency?",
      "G": "How do you reduce the risk of failure, harm, or poor outcome?",
      "H": "What are you more aware of or know about, thanks to your Skill?",
      "I": "Who assists you in practicing your Skill or Trade?",
      "J": "What conviction or emotion motivates you to practice your Skill?"
    },
    "weakness": {
      "A": "What challenge or feat is quite beyond your everyday ability?",
      "B": "What conditions make it harder for you to practice your Skill or Trade?",
      "C": "How does your practice or talent bias your perceptions or interactions?",
      "D": "Where or when are those of your Trade unwelcome or unwilling to work?"
    }
  },
  "Trait": {
    "themeQuestions": [
      "When did you first discover or become aware of your trait?",
      "How reliant on this trait are you?",
      "Who around you came to appreciate or resent this trait?",
      "What can this trait help you achieve?"
    ],
    "power": {
      "A": "What is your most defining Trait?",
      "B": "What is a specific or common way you put this Trait to use?",
      "C": "How is this Trait helping you keep safe?",
      "D": "What item or ally helps you get the most of your Trait?",
      "E": "What can you do that only those with this Trait can?",
      "F": "In which situation is this Trait especially useful to you?",
      "G": "What skill have you developed to make the most of this gift?",
      "H": "What do you notice, sense, or understand that most other people cannot?",
      "I": "How can you perform, show off, or be creative with your Trait?",
      "J": "How do you hide this Trait, when you need to?"
    },
    "weakness": {
      "A": "What happens when you overuse your Trait?",
      "B": "Who around you resents, covets, or mocks your Trait?",
      "C": "What is the most obvious vulnerability or misuse of this Trait?",
      "D": "When is your Trait utterly useless?"
    }
  },
  "Duty": {
    "themeQuestions": [
      "What set you on this course, and what keeps you on it?",
      "Who supports you in the fulfillment of your duty?",
      "Who holds you accountable to your duty?",
      "What have you given up to gain and keep this level of responsibility?"
    ],
    "power": {
      "A": "What is the task, goal, or ideal you have taken on so dutifully?",
      "B": "What quality of character is crucial in taking up this Duty?",
      "C": "How do you proclaim your Duty or convince others of its importance?",
      "D": "Who or what is at your beck and call thanks to your commitment?",
      "E": "What useful resource or tool is needed for the fulfillment of this Duty?",
      "F": "What legal or social privileges or exceptions apply to you?",
      "G": "What are the arms, armor, or trappings of your Duty?",
      "H": "Where do you patrol, hold office, or carry your Duties?",
      "I": "How do you interact favorably with the patron(s) of this Duty?",
      "J": "What keeps you on the right track when you despair or falter?"
    },
    "weakness": {
      "A": "Who or what opposes you on this task?",
      "B": "What personal failing sets you back on the path to fulfill your Duty?",
      "C": "Who is your rival or challenger for this responsibility?",
      "D": "What negative emotion does your Duty bring up?"
    }
  },
  "Influence": {
    "themeQuestions": [
      "What is the nature of the influence you possess?",
      "Do others follow you willingly or begrudgingly?",
      "What did you have to undertake or sacrifice to get to this position?",
      "How far are you willing to go to keep your power?"
    ],
    "power": {
      "A": "What gives you power and Influence over others?",
      "B": "What is the most common task or service people do for you?",
      "C": "Who are your followers, servants, foot soldiers, or agents?",
      "D": "What is the most potent way in which you exert Influence?",
      "E": "In what domain is your Influence the strongest?",
      "F": "What assets or benefits have you gained thanks to your Influence?",
      "G": "Who is the most susceptible to your Influence?",
      "H": "How do you grow the reach of your Influence?",
      "I": "How do you dismantle others' resistance?",
      "J": "How do you protect yourself from others' influence?"
    },
    "weakness": {
      "A": "Who resists, ignores, or is immune to your Influence?",
      "B": "What do you do that undermines your own power?",
      "C": "Who does your Influence cause you to clash with?",
      "D": "What lies outside of your sphere of Influence?"
    }
  },
  "Knowledge": {
    "themeQuestions": [
      "What is it that you know that most people do not?",
      "How did you come across this knowledge?",
      "How did discovering this knowledge change you and your perception of the world?",
      "Who else seeks this knowledge?"
    ],
    "power": {
      "A": "What special Knowledge do you possess?",
      "B": "What subject do you specialize in within your body of Knowledge?",
      "C": "What can be understood, analyzed, or explained with your Knowledge?",
      "D": "What is a practical application of your Knowledge?",
      "E": "What advantage do you have over those lacking your Knowledge?",
      "F": "How do you protect, store, or preserve your Knowledge?",
      "G": "What have you learned that is adjacent to your Knowledge?",
      "H": "What do you always carry with you, because of what you know?",
      "I": "What is your method of collection, discovery, or research?",
      "J": "What is a new frontier of Knowledge you are beginning to explore?"
    },
    "weakness": {
      "A": "What are the biggest holes in your body of Knowledge?",
      "B": "What is beyond fathom, obscured, or confusing to you?",
      "C": "Who seeks to steal, take, or deny this Knowledge from you?",
      "D": "What hurdles stand in your way when you attempt to apply your Knowledge?"
    }
  },
  "Prodigious Ability": {
    "themeQuestions": [
      "What responsibility do you feel as to how to use your abilities?",
      "When faced with a problem that seemingly cannot be solved with your ability, how do you act?",
      "Are you proud of your hard-earned skills, or angry that you were forced to learn what you wish you didn't have to?",
      "Are you dismissive of people beneath your level of expertise?"
    ],
    "power": {
      "A": "What do you call someone who has your Prodigious Ability?",
      "B": "What is a secondary skill or characteristic of this ability?",
      "C": "What incredible technique or stunt can you pull off?",
      "D": "How can you use your ability to impress and amaze?",
      "E": "What emotion unleashes your potential?",
      "F": "What is the chief tool you use when practicing your ability?",
      "G": "How do you prevent failure or regain the advantage with your ability?",
      "H": "What signature move or unique slant did you add to your repertoire?",
      "I": "What do you know, sense, or discern that a beginner wouldn't?",
      "J": "What nearly (or truly) miraculous thing can you accomplish?"
    },
    "weakness": {
      "A": "What is a flaw or weakness of your ability you are still refining?",
      "B": "What bad habits or behaviors have you developed due to your ability?",
      "C": "Under what conditions is your ability less effective, even with your proficiency?",
      "D": "Who resents or harasses you because of your ability?"
    }
  },
  "Relic": {
    "themeQuestions": [
      "What does your relic look like?",
      "Was your relic a gift, an heirloom, a chance discovery?",
      "How obvious is its magic and how far-reaching are its effects?",
      "Does it have a will of its own?"
    ],
    "power": {
      "A": "What powerful or mysterious item do you possess?",
      "B": "What is its most potent power or ability?",
      "C": "What is another aspect or part of its magic?",
      "D": "What do you feel when you hold, wear, or use it?",
      "E": "When does your Relic come to life or becomes stronger?",
      "F": "What skill is required to best handle the Relic?",
      "G": "Who or what was your Relic made to affect the most?",
      "H": "What is revealed to you through the use of your Relic?",
      "I": "What is a secret feature of the Relic that no one else knows about?",
      "J": "What does your Relic unlock or unleash?"
    },
    "weakness": {
      "A": "What is the most troublesome shortcoming of your Relic?",
      "B": "What can interfere with the powers of your Relic?",
      "C": "What can damage or destroy your Relic?",
      "D": "What has changed in you for the worse because of your Relic?"
    }
  },
  "Uncanny Being": {
    "themeQuestions": [
      "What powers and limitations are innate to your being?",
      "Were you born, created, cursed, or transformed into your uncanny existence?",
      "How similar is your appearance to that of a human?",
      "Do you wish to become something else?"
    ],
    "power": {
      "A": "What manner of fantastical being are you?",
      "B": "What can you do that a human never could?",
      "C": "What other magic or supernatural ability do you possess?",
      "D": "What unusual shape, feature, or trait do you have or can assume?",
      "E": "What do you know or sense that mundane beings cannot?",
      "F": "How do you gain sustenance, draw strength, or recover?",
      "G": "What aura, miasma, or other unique essence do you possess or exude?",
      "H": "What is your natural or preferred habitat, territory, or range?",
      "I": "Who or what is a common ally or prey to creatures such as you?",
      "J": "How does your kind interact with mortal and mundane beings?"
    },
    "weakness": {
      "A": "What repels or harms your kind?",
      "B": "How can mortal creatures bind or manipulate you?",
      "C": "What is a shortcoming of your physical or magical nature?",
      "D": "Who hunts or antagonizes you?"
    }
  },
  "Destiny": {
    "themeQuestions": [
      "Why were you chosen and what for?",
      "How did you learn of your destiny (if at all)?",
      "How does your destiny manifest in your daily life?",
      "What stands in your way to fulfill your destiny?"
    ],
    "power": {
      "A": "What Destiny will you fulfill?",
      "B": "How does fate help you out when you are in danger?",
      "C": "What useful resource has Destiny provided you with?",
      "D": "Who believes in your Destiny and will do anything to help fulfill it?",
      "E": "What quality is the reason you were chosen for this fate?",
      "F": "How has your fate made your life much easier than that of others?",
      "G": "What useful possession of yours seems tied to your fate?",
      "H": "What signs, advice, intuition, or prophecy helps guide you?",
      "I": "What do you need most to fulfill your Destiny?",
      "J": "How does fate abruptly alter reality to keep you on your path?"
    },
    "weakness": {
      "A": "Who is determined to thwart your Destiny?",
      "B": "What essential piece are you missing to fulfill your Destiny?",
      "C": "What problem are you destined to face at every turn?",
      "D": "How has your Destiny gone to your head?"
    }
  },
  "Dominion": {
    "themeQuestions": [
      "What do you rule over and how did you achieve this position?",
      "What power do you wield through your position and what are its limits?",
      "Who can you trust and who do you fear from within your immediate circle?",
      "Where do you stand between playing intrigue and staying true to yourself?"
    ],
    "power": {
      "A": "State your title, or what you rule over.",
      "B": "What is the most common or useful use of your authority?",
      "C": "Who is your closest confidant, advisor, or servant?",
      "D": "What underlings serve you in droves?",
      "E": "What valuable resources does your Dominion produce regularly?",
      "F": "What special quality or circumstance serves you as a ruler?",
      "G": "Where or when is your Dominion at its strongest?",
      "H": "What group within your Dominion supports you most?",
      "I": "What ways have you devised to hold on to your power?",
      "J": "What is your favored tactic or strategy during conflict?"
    },
    "weakness": {
      "A": "Who seeks to usurp your power or dethrone you?",
      "B": "What problem plagues your Dominion?",
      "C": "What personal flaw have you become known for?",
      "D": "What dark secret do you hide?"
    }
  },
  "Mastery": {
    "themeQuestions": [
      "Do you pass down your knowledge or keep it to yourself?",
      "What is your ultimate masterpiece or breakthrough?",
      "Who is most affected by your work, and how?",
      "What is your signature or maker's mark, recognized by all?"
    ],
    "power": {
      "A": "What skill, ability, or field have you come to Master?",
      "B": "What supplementary skills have you become equally proficient at?",
      "C": "What can you do that no other practitioner can?",
      "D": "How can your Mastery change the world?",
      "E": "What specially-made tools or expert assistants are at your disposal?",
      "F": "What is the name of your legendary workshop, library, forge, or the like?",
      "G": "What can you do with incredible effectiveness, speed, or magnitude?",
      "H": "What is your most well-practiced technique or best-studied subject?",
      "I": "What awe-striking feat can you perform at your whim?",
      "J": "What special privileges or material benefits come with your Mastery?"
    },
    "weakness": {
      "A": "What are the inherent repercussions of practicing at your level?",
      "B": "How has your Mastery affected your disposition or lifestyle for the worse?",
      "C": "What do you ignore, because you no longer notice such trivial things?",
      "D": "Who feels jealous of your Mastery?"
    }
  },
  "Monstrosity": {
    "themeQuestions": [
      "What makes you so powerful compared to others?",
      "What is your relationship with the simple people of the land?",
      "Where are you most at home?",
      "What great schemes do you plot, or what deep need drives you?"
    ],
    "power": {
      "A": "What magnificent or terrifying creature are you?",
      "B": "What is your most prominent physical feature?",
      "C": "What innate magical ability do you most often wield?",
      "D": "What feature, move, or power enables you to affect many at once?",
      "E": "How do you defend yourself with magic or size?",
      "F": "What unique offensive capability do you possess?",
      "G": "What powerful emotion drives you or is rooted in your core?",
      "H": "What arcane truth is revealed to you that mere mortals cannot sense?",
      "I": "Who serves you?",
      "J": "What about you commands respect from lesser creatures?"
    },
    "weakness": {
      "A": "What is your blind spot, that you miss due to your size or power?",
      "B": "What can counteract your magic or weaken you?",
      "C": "What is your one weak spot or bane?",
      "D": "Who seeks out your destruction?"
    }
  },
  "Companion": {
    "themeQuestions": [
      "Who is always there with you, and why?",
      "How did you fall in with your companion?",
      "How did you come to trust and rely upon them?",
      "What is their role in your life, your job, or your duties?"
    ],
    "power": {
      "A": "Who is regularly at your side, supporting you?",
      "B": "What is your Companion's most handy quality or skill?",
      "C": "How does your Companion get you out of a jam?",
      "D": "What activity do you and your Companion do well together?",
      "E": "Where do you and your Companion go to relax or to get things done?",
      "F": "What is your Companion's signature move, trick, or ability?",
      "G": "What useful item does your Companion always have at the ready?",
      "H": "How does your Companion help you improve or recover, or vice versa?",
      "I": "What is a useful physical characteristic of your Companion?",
      "J": "What is your Companion's outlook or modus operandi?"
    },
    "weakness": {
      "A": "How does your Companion get you into trouble or danger?",
      "B": "What is your Companion's most annoying quality?",
      "C": "What causes your Companion to become unavailable?",
      "D": "In what situation is your Companion least useful?"
    }
  },
  "Magic": {
    "themeQuestions": [
      "What is the source of your power, and what are its limits?",
      "What does it demand of you, and why do you agree to pay the price?",
      "Where did you learn or gain this magic, and how?",
      "Who else can perform these miraculous acts?"
    ],
    "power": {
      "A": "What is your magical nature, art, or expression?",
      "B": "What category, field, or type of Magic do you specialize in?",
      "C": "What specific magical ability, maneuver, or spell do you use regularly?",
      "D": "What is different, better, or special about the way you use Magic?",
      "E": "Which personal style or flourish have you added to your Magic?",
      "F": "What knowledge or lore related to this form of Magic did you acquire?",
      "G": "In which conditions is your Magic most powerful?",
      "H": "What item or material do you use to empower your Magic?",
      "I": "What skill related to your Magic have you developed?",
      "J": "What social skill, trait, or benefit do you have thanks to your Magic?"
    },
    "weakness": {
      "A": "What conditions, uses, or targets are unfavorable for your Magic?",
      "B": "What does your Magic require in order to function well?",
      "C": "What are the side effects of having or using your Magic?",
      "D": "How does having Magic make your life harder?"
    }
  },
  "Possessions": {
    "themeQuestions": [
      "How have you come to own this item?",
      "Why is it important to you?",
      "Do you take pride in having it in your possession?",
      "What would you be willing to trade this item for?"
    ],
    "power": {
      "A": "What is your most important Possession or material resource?",
      "B": "What useful characteristic or feature does it have?",
      "C": "What supplemental or related item or set do you possess?",
      "D": "What is the most common way you use your Possession?",
      "E": "What surprising secret or trick use does this item have?",
      "F": "What situations or conditions was this item designed for?",
      "G": "How do you handle, repair, or maintain your Possessions?",
      "H": "What emotion or memory does this Possession evoke in you?",
      "I": "How do you keep your Possession safe or concealed?",
      "J": "What is the make, style, design, or quality standard of this item?"
    },
    "weakness": {
      "A": "What is a flaw or downside of your Possession?",
      "B": "What causes your Possession to need repair or maintenance?",
      "C": "How do you overuse or abuse your Possession?",
      "D": "What is beyond the capabilities or standards of your Possession?"
    }
  }
};
