// adjectives-db-a2.js — A2 Elementary German Adjectives (comprehensive)
const adjectivesA2 = [
  {
    "base": "krank", "level": "A2",
    "comparison": { "positive": "krank", "comparative": "kränker", "superlative_predicative": "am kränksten", "superlative_attributive": "kränkste" },
    "irregular": true,
    "declension_examples": { "strong": "kranker (m)", "weak": "kranke (f)", "mixed": "krankes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["sick", "ill"],
    "tip": "Comparative with umlaut: krank → kränker. Common phrase: 'Ich bin krank' (I am sick).",
    "examples": ["Ich bin krank.", "Das kranke Kind bleibt zu Hause.", "Er ist kränker als gestern."]
  },
  {
    "base": "gesund", "level": "A2",
    "comparison": { "positive": "gesund", "comparative": "gesünder", "superlative_predicative": "am gesündesten", "superlative_attributive": "gesündeste" },
    "irregular": true,
    "declension_examples": { "strong": "gesunder (m)", "weak": "gesunde (f)", "mixed": "gesundes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["healthy", "wholesome"],
    "tip": "Comparative: gesünder (umlaut). Used for people, food, and lifestyle.",
    "examples": ["Iss gesund!", "Er führt ein gesundes Leben.", "Das ist sehr gesund."]
  },
  {
    "base": "müde", "level": "A2",
    "comparison": { "positive": "müde", "comparative": "müder", "superlative_predicative": "am müdesten", "superlative_attributive": "müdeste" },
    "irregular": false,
    "declension_examples": { "strong": "müder (m)", "weak": "müde (f)", "mixed": "müdes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["tired", "weary"],
    "tip": "Very common at A2. Superlative adds -est- (stem ends in -d).",
    "examples": ["Ich bin sehr müde.", "Das müde Kind schläft.", "Er sieht müde aus."]
  },
  {
    "base": "froh", "level": "A2",
    "comparison": { "positive": "froh", "comparative": "froher", "superlative_predicative": "am frohsten", "superlative_attributive": "frohste" },
    "irregular": false,
    "declension_examples": { "strong": "froher (m)", "weak": "frohe (f)", "mixed": "frohes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["glad", "happy", "pleased"],
    "tip": "Used for mild happiness or relief. 'Ich bin froh, dass...' = I'm glad that... Less intense than 'glücklich'.",
    "examples": ["Ich bin froh, dass du da bist.", "Sie ist froh über das Ergebnis.", "Frohe Weihnachten!"]
  },
  {
    "base": "traurig", "level": "A2",
    "comparison": { "positive": "traurig", "comparative": "trauriger", "superlative_predicative": "am traurigsten", "superlative_attributive": "traurigste" },
    "irregular": false,
    "declension_examples": { "strong": "trauriger (m)", "weak": "traurige (f)", "mixed": "trauriges (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["sad"],
    "tip": "Opposite of froh/glücklich. 'Ich bin traurig, weil...' = I am sad because...",
    "examples": ["Ich bin sehr traurig.", "Warum bist du so traurig?", "Das ist eine traurige Geschichte."]
  },
  {
    "base": "satt", "level": "A2",
    "comparison": { "positive": "satt", "comparative": "satter", "superlative_predicative": "am sattsten", "superlative_attributive": "sattste" },
    "irregular": false,
    "declension_examples": { "strong": "satter (m)", "weak": "satte (f)", "mixed": "sattes (n)" },
    "position": ["predicative"],
    "translations": ["full (after eating)", "satiated"],
    "tip": "'Ich bin satt' = I'm full (after eating). Different from 'voll' which means physically full/filled.",
    "common_mistakes": ["'Ich bin satt' (after eating) vs 'Das Glas ist voll' (the glass is full). Don't confuse these!"],
    "examples": ["Ich bin satt, danke.", "Bist du noch hungrig oder schon satt?", "Nach dem Essen bin ich immer satt."]
  },
  {
    "base": "fertig", "level": "A2",
    "comparison": { "positive": "fertig", "comparative": "fertiger", "superlative_predicative": "am fertigsten", "superlative_attributive": "fertigste" },
    "irregular": false,
    "declension_examples": { "strong": "fertiger (m)", "weak": "fertige (f)", "mixed": "fertiges (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["finished", "done", "ready"],
    "tip": "Very common word. 'Bist du fertig?' = Are you done/ready? Can also mean 'exhausted' colloquially.",
    "examples": ["Ich bin fertig!", "Das Essen ist fertig.", "Bist du schon fertig?"]
  },
  {
    "base": "wichtig", "level": "A2",
    "comparison": { "positive": "wichtig", "comparative": "wichtiger", "superlative_predicative": "am wichtigsten", "superlative_attributive": "wichtigste" },
    "irregular": false,
    "declension_examples": { "strong": "wichtiger (m)", "weak": "wichtige (f)", "mixed": "wichtiges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["important"],
    "tip": "Very common at A2+. 'Das ist wichtig!' = That's important! Used in many contexts.",
    "examples": ["Das ist sehr wichtig.", "Er ist eine wichtige Person.", "Was ist das Wichtigste für dich?"]
  },
  {
    "base": "nett", "level": "A2",
    "comparison": { "positive": "nett", "comparative": "netter", "superlative_predicative": "am nettesten", "superlative_attributive": "netteste" },
    "irregular": false,
    "declension_examples": { "strong": "netter (m)", "weak": "nette (f)", "mixed": "nettes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["nice", "kind", "pleasant"],
    "tip": "A friendly but somewhat mild compliment. Stronger: 'freundlich' (friendly), 'nett' can sometimes be faint praise.",
    "examples": ["Er ist sehr nett.", "Das ist nett von dir.", "Sie hat nette Nachbarn."]
  },
  {
    "base": "freundlich", "level": "A2",
    "comparison": { "positive": "freundlich", "comparative": "freundlicher", "superlative_predicative": "am freundlichsten", "superlative_attributive": "freundlichste" },
    "irregular": false,
    "declension_examples": { "strong": "freundlicher (m)", "weak": "freundliche (f)", "mixed": "freundliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["friendly", "kind", "pleasant"],
    "tip": "More formal/professional than 'nett'. Used in customer service: 'sehr freundlich' = very friendly.",
    "examples": ["Die Bedienung ist sehr freundlich.", "Er lächelt freundlich.", "Mit freundlichen Grüßen (formal letter closing)."]
  },
  {
    "base": "besonders", "level": "A2",
    "comparison": { "positive": "besonders", "comparative": "—", "superlative_predicative": "—", "superlative_attributive": "besondere" },
    "irregular": false,
    "declension_examples": { "strong": "besonderer (m)", "weak": "besondere (f)", "mixed": "besonderes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["special", "particular", "especially"],
    "tip": "As adverb: 'besonders gut' = especially good. As adjective: 'ein besonderer Tag' = a special day.",
    "examples": ["Heute ist ein besonderer Tag.", "Das schmeckt besonders gut.", "Er ist nicht besonders groß."]
  },
  {
    "base": "weit", "level": "A2",
    "comparison": { "positive": "weit", "comparative": "weiter", "superlative_predicative": "am weitesten", "superlative_attributive": "weiteste" },
    "irregular": false,
    "declension_examples": { "strong": "weiter (m)", "weak": "weite (f)", "mixed": "weites (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["far", "wide", "distant"],
    "tip": "Used for distance and width. 'Wie weit ist es?' = How far is it? Also: 'weiter' = further/continue.",
    "examples": ["Das ist weit weg.", "Wie weit ist es zum Bahnhof?", "Er wohnt weit von hier."]
  },
  {
    "base": "nah", "level": "A2",
    "comparison": { "positive": "nah", "comparative": "näher", "superlative_predicative": "am nächsten", "superlative_attributive": "nächste" },
    "irregular": true,
    "declension_examples": { "strong": "naher (m)", "weak": "nahe (f)", "mixed": "nahes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["near", "close"],
    "tip": "Highly irregular superlative: nah → näher → am nächsten / nächste. 'In der Nähe' = nearby.",
    "common_mistakes": ["Superlative: 'am nächsten' (not 'am nahsten'). 'Der nächste Bahnhof' = the nearest station."],
    "examples": ["Das Hotel ist nah.", "In der Nähe gibt es einen Supermarkt.", "Das nächste Café ist um die Ecke."]
  },
  {
    "base": "pünktlich", "level": "A2",
    "comparison": { "positive": "pünktlich", "comparative": "pünktlicher", "superlative_predicative": "am pünktlichsten", "superlative_attributive": "pünktlichste" },
    "irregular": false,
    "declension_examples": { "strong": "pünktlicher (m)", "weak": "pünktliche (f)", "mixed": "pünktliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["punctual", "on time"],
    "tip": "Germans are famous for valuing punctuality. 'Bitte sei pünktlich!' = Please be on time!",
    "examples": ["Der Zug ist pünktlich.", "Sei bitte pünktlich!", "Er kommt immer pünktlich."]
  },
  {
    "base": "dunkel", "level": "A2",
    "comparison": { "positive": "dunkel", "comparative": "dunkler", "superlative_predicative": "am dunkelsten", "superlative_attributive": "dunkelste" },
    "irregular": false,
    "declension_examples": { "strong": "dunkler (m)", "weak": "dunkle (f)", "mixed": "dunkles (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["dark"],
    "tip": "Drops -e- before endings: dunkel → dunkle (not 'dunkele'). Opposite: hell (bright/light).",
    "common_mistakes": ["'Eine dunkle Nacht' not 'eine dunkele Nacht'. The -e- in the stem drops before endings."],
    "examples": ["Es ist sehr dunkel.", "Er trägt dunkle Kleidung.", "Das Zimmer ist dunkel."]
  },
  {
    "base": "hell", "level": "A2",
    "comparison": { "positive": "hell", "comparative": "heller", "superlative_predicative": "am hellsten", "superlative_attributive": "hellste" },
    "irregular": false,
    "declension_examples": { "strong": "heller (m)", "weak": "helle (f)", "mixed": "helles (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["bright", "light", "fair"],
    "tip": "Opposite of dunkel. Used for rooms, colors, hair, and skin. 'Helles Bier' = light beer.",
    "examples": ["Das Zimmer ist hell.", "Sie hat helle Haare.", "Es wird langsam hell."]
  },
  {
    "base": "sauber", "level": "A2",
    "comparison": { "positive": "sauber", "comparative": "sauberer", "superlative_predicative": "am saubersten", "superlative_attributive": "sauberste" },
    "irregular": false,
    "declension_examples": { "strong": "sauberer (m)", "weak": "saubere (f)", "mixed": "sauberes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["clean", "tidy"],
    "tip": "Opposite: schmutzig (dirty). 'Sauber machen' = to clean. Also used informally to mean 'great': 'Das ist sauber!' (colloquial).",
    "examples": ["Das Zimmer ist sauber.", "Wasch dir die Hände — sie sind nicht sauber.", "Eine saubere Lösung."]
  },
  {
    "base": "schmutzig", "level": "A2",
    "comparison": { "positive": "schmutzig", "comparative": "schmutziger", "superlative_predicative": "am schmutzigsten", "superlative_attributive": "schmutzigste" },
    "irregular": false,
    "declension_examples": { "strong": "schmutziger (m)", "weak": "schmutzige (f)", "mixed": "schmutziges (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["dirty", "filthy"],
    "tip": "Opposite of sauber. 'Schmutzige Wäsche' = dirty laundry.",
    "examples": ["Deine Hände sind schmutzig.", "Das schmutzige Geschirr liegt in der Spüle.", "Der Hund ist schmutzig."]
  },
  {
    "base": "hungrig", "level": "A2",
    "comparison": { "positive": "hungrig", "comparative": "hungriger", "superlative_predicative": "am hungrigsten", "superlative_attributive": "hungrigste" },
    "irregular": false,
    "declension_examples": { "strong": "hungriger (m)", "weak": "hungrige (f)", "mixed": "hungriges (n)" },
    "position": ["predicative"],
    "translations": ["hungry"],
    "tip": "Both 'Ich bin hungrig' and 'Ich habe Hunger' are correct. 'Ich habe Hunger' is very common.",
    "examples": ["Ich bin total hungrig.", "Die hungrigen Kinder essen schnell.", "Bist du noch hungrig?"]
  },
  {
    "base": "voll", "level": "A2",
    "comparison": { "positive": "voll", "comparative": "voller", "superlative_predicative": "am vollsten", "superlative_attributive": "vollste" },
    "irregular": false,
    "declension_examples": { "strong": "voller (m)", "weak": "volle (f)", "mixed": "volles (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["full", "crowded", "completely"],
    "tip": "Used for containers, places (crowds). Colloquial intensifier: 'voll cool' = totally cool. 'Voll' + adj = very (slang).",
    "examples": ["Das Glas ist voll.", "Der Zug ist voll.", "Er ist voll müde (colloquial)."]
  },
  {
    "base": "leer", "level": "A2",
    "comparison": { "positive": "leer", "comparative": "leerer", "superlative_predicative": "am leersten", "superlative_attributive": "leerste" },
    "irregular": false,
    "declension_examples": { "strong": "leerer (m)", "weak": "leere (f)", "mixed": "leeres (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["empty"],
    "tip": "Opposite of voll. 'Das Glas ist leer.' 'Leere Flasche' = empty bottle.",
    "examples": ["Das Glas ist leer.", "Der Saal war fast leer.", "Er hat eine leere Flasche."]
  },
  {
    "base": "schwierig", "level": "A2",
    "comparison": { "positive": "schwierig", "comparative": "schwieriger", "superlative_predicative": "am schwierigsten", "superlative_attributive": "schwierigste" },
    "irregular": false,
    "declension_examples": { "strong": "schwieriger (m)", "weak": "schwierige (f)", "mixed": "schwieriges (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["difficult", "tricky"],
    "tip": "Synonym: 'schwer'. 'Schwierig' often implies complexity/nuance; 'schwer' implies weight/effort.",
    "examples": ["Die Aufgabe ist schwierig.", "Das ist eine schwierige Situation.", "Grammatik ist manchmal schwierig."]
  },
  {
    "base": "beliebt", "level": "A2",
    "comparison": { "positive": "beliebt", "comparative": "beliebter", "superlative_predicative": "am beliebtesten", "superlative_attributive": "beliebteste" },
    "irregular": false,
    "declension_examples": { "strong": "beliebter (m)", "weak": "beliebte (f)", "mixed": "beliebtes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["popular", "well-liked"],
    "tip": "'Beliebt bei' = popular with. 'Das beliebteste Restaurant' = the most popular restaurant.",
    "examples": ["Das ist sehr beliebt.", "Er ist bei seinen Kollegen beliebt.", "Das beliebteste Gericht ist Schnitzel."]
  }
,
  {
    "base": "laut",
    "level": "A2",
    "comparison": {
      "positive": "laut",
      "comparative": "lauter",
      "superlative_predicative": "am lautesten",
      "superlative_attributive": "lauteste"
    },
    "translations": [
      "loud",
      "noisy"
    ],
    "category": "sound",
    "examples": [
      "Die Musik ist sehr laut.",
      "Sprich nicht so laut!",
      "Der Laerm ist zu laut."
    ],
    "tip": "Antonym: leise (quiet). Essential for describing sounds and environments.",
    "antonym": "leise"
  },
  {
    "base": "leise",
    "level": "A2",
    "comparison": {
      "positive": "leise",
      "comparative": "leiser",
      "superlative_predicative": "am leisesten",
      "superlative_attributive": "leiseste"
    },
    "translations": [
      "quiet",
      "soft (sound)"
    ],
    "category": "sound",
    "examples": [
      "Bitte sei leise!",
      "Das Baby schlaeft — sprich leise.",
      "Die Musik ist zu leise."
    ],
    "tip": "Antonym: laut (loud). Also means 'softly' when used as adverb.",
    "antonym": "laut"
  },
  {
    "base": "einfach",
    "level": "A2",
    "comparison": {
      "positive": "einfach",
      "comparative": "einfacher",
      "superlative_predicative": "am einfachsten",
      "superlative_attributive": "einfachste"
    },
    "translations": [
      "simple",
      "easy",
      "just"
    ],
    "category": "degree",
    "examples": [
      "Das ist einfach zu machen.",
      "Hast du eine einfache Erklaerung?",
      "Das ist ganz einfach."
    ],
    "tip": "Very versatile. As an adjective: easy/simple. As a particle: 'just' (einfach toll = just great)."
  },
  {
    "base": "kompliziert",
    "level": "A2",
    "comparison": {
      "positive": "kompliziert",
      "comparative": "komplizierter",
      "superlative_predicative": "am kompliziertesten",
      "superlative_attributive": "komplizierteste"
    },
    "translations": [
      "complicated",
      "complex"
    ],
    "category": "degree",
    "examples": [
      "Die Aufgabe ist kompliziert.",
      "Das ist nicht so kompliziert, wie es aussieht.",
      "Er macht alles kompliziert."
    ],
    "tip": "Antonym: einfach (simple). Loan word, cognate to English complicated.",
    "antonym": "einfach"
  },
  {
    "base": "gleich",
    "level": "A2",
    "comparison": {
      "positive": "gleich",
      "comparative": "gleicher",
      "superlative_predicative": "am gleichsten",
      "superlative_attributive": "gleiche"
    },
    "translations": [
      "same",
      "equal",
      "in a moment"
    ],
    "category": "relation",
    "examples": [
      "Wir haben die gleiche Meinung.",
      "Ich komme gleich.",
      "Das ist das Gleiche."
    ],
    "tip": "Watch context: as adjective means same/equal; as adverb means in a moment / right away."
  },
  {
    "base": "anders",
    "level": "A2",
    "comparison": {
      "positive": "anders",
      "comparative": "—",
      "superlative_predicative": "—",
      "superlative_attributive": "ander-"
    },
    "translations": [
      "different",
      "other"
    ],
    "category": "relation",
    "examples": [
      "Ich denke anders darueber.",
      "Das ist etwas ganz anderes.",
      "Er ist heute irgendwie anders."
    ],
    "tip": "Note: attributive form is 'ander-' (ein anderes Auto). 'anders' is typically used predicatively or as adverb."
  },
  {
    "base": "genug",
    "level": "A2",
    "comparison": {
      "positive": "genug",
      "comparative": "—",
      "superlative_predicative": "—",
      "superlative_attributive": "—"
    },
    "translations": [
      "enough",
      "sufficient"
    ],
    "category": "degree",
    "examples": [
      "Ich habe genug gegessen.",
      "Das ist genug.",
      "Hast du genug Geld?"
    ],
    "tip": "Indeclinable — does not change form. Always placed AFTER the adjective: alt genug (old enough)."
  }
];
window.adjectivesA2 = adjectivesA2;
