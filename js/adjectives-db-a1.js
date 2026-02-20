// adjectives-db-a1.js — A1 Beginner German Adjectives (comprehensive)
const adjectivesA1 = [
  {
    "base": "groß", "level": "A1",
    "comparison": { "positive": "groß", "comparative": "größer", "superlative_predicative": "am größten", "superlative_attributive": "größte" },
    "irregular": true,
    "declension_examples": { "strong": "großer (m)", "weak": "große (f)", "mixed": "großes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["big", "large", "tall"],
    "tip": "Comparative is irregular: groß → größer (umlaut). Used for both size and height.",
    "examples": ["Das Haus ist groß.", "Er ist ein großer Mann.", "Berlin ist größer als Hamburg."]
  },
  {
    "base": "klein", "level": "A1",
    "comparison": { "positive": "klein", "comparative": "kleiner", "superlative_predicative": "am kleinsten", "superlative_attributive": "kleinste" },
    "irregular": false,
    "declension_examples": { "strong": "kleiner (m)", "weak": "kleine (f)", "mixed": "kleines (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["small", "little", "short"],
    "tip": "Opposite of groß. Used for both size and height of people.",
    "examples": ["Die Katze ist klein.", "Er hat eine kleine Wohnung.", "Sie ist kleiner als ich."]
  },
  {
    "base": "gut", "level": "A1",
    "comparison": { "positive": "gut", "comparative": "besser", "superlative_predicative": "am besten", "superlative_attributive": "beste" },
    "irregular": true,
    "declension_examples": { "strong": "guter (m)", "weak": "gute (f)", "mixed": "gutes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["good", "well"],
    "tip": "Highly irregular comparative and superlative: gut → besser → best-. Very common word.",
    "common_mistakes": ["Don't say 'guter' predicatively. 'Das Essen ist gut' (not 'Das Essen ist gutes')."],
    "examples": ["Das Essen ist gut.", "Er ist ein guter Freund.", "Diese Lösung ist besser.", "Das ist die beste Idee!"]
  },
  {
    "base": "schlecht", "level": "A1",
    "comparison": { "positive": "schlecht", "comparative": "schlechter", "superlative_predicative": "am schlechtesten", "superlative_attributive": "schlechteste" },
    "irregular": false,
    "declension_examples": { "strong": "schlechter (m)", "weak": "schlechte (f)", "mixed": "schlechtes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["bad", "poor", "badly"],
    "tip": "Opposite of gut. 'Mir ist schlecht' = I feel sick/nauseous.",
    "examples": ["Das Wetter ist schlecht.", "Das ist eine schlechte Idee.", "Er fühlt sich schlecht."]
  },
  {
    "base": "neu", "level": "A1",
    "comparison": { "positive": "neu", "comparative": "neuer", "superlative_predicative": "am neuesten", "superlative_attributive": "neueste" },
    "irregular": false,
    "declension_examples": { "strong": "neuer (m)", "weak": "neue (f)", "mixed": "neues (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["new"],
    "tip": "Very common in everyday speech. 'Neu' also means 'newly/recently' as an adverb.",
    "examples": ["Er hat ein neues Auto.", "Das ist eine neue Idee.", "Was gibt es Neues?"]
  },
  {
    "base": "alt", "level": "A1",
    "comparison": { "positive": "alt", "comparative": "älter", "superlative_predicative": "am ältesten", "superlative_attributive": "älteste" },
    "irregular": true,
    "declension_examples": { "strong": "alter (m)", "weak": "alte (f)", "mixed": "altes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["old", "aged"],
    "tip": "Comparative with umlaut: alt → älter. Used for both age and objects. To ask age: 'Wie alt bist du?'",
    "examples": ["Er ist sehr alt.", "Das ist ein altes Buch.", "Sie ist älter als ihr Bruder."]
  },
  {
    "base": "jung", "level": "A1",
    "comparison": { "positive": "jung", "comparative": "jünger", "superlative_predicative": "am jüngsten", "superlative_attributive": "jüngste" },
    "irregular": true,
    "declension_examples": { "strong": "junger (m)", "weak": "junge (f)", "mixed": "junges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["young"],
    "tip": "Comparative with umlaut: jung → jünger. Opposite of alt.",
    "examples": ["Sie ist sehr jung.", "Das ist ein junger Mann.", "Ich bin jünger als du."]
  },
  {
    "base": "schön", "level": "A1",
    "comparison": { "positive": "schön", "comparative": "schöner", "superlative_predicative": "am schönsten", "superlative_attributive": "schönste" },
    "irregular": false,
    "declension_examples": { "strong": "schöner (m)", "weak": "schöne (f)", "mixed": "schönes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["beautiful", "pretty", "nice", "lovely"],
    "tip": "Very versatile: beautiful (person/thing), nice (weather/day), good (time). 'Schönen Tag!' = Have a nice day!",
    "examples": ["Das Wetter ist schön.", "Sie hat schöne Augen.", "Es war ein schöner Abend."]
  },
  {
    "base": "schnell", "level": "A1",
    "comparison": { "positive": "schnell", "comparative": "schneller", "superlative_predicative": "am schnellsten", "superlative_attributive": "schnellste" },
    "irregular": false,
    "declension_examples": { "strong": "schneller (m)", "weak": "schnelle (f)", "mixed": "schnelles (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["fast", "quick", "quickly"],
    "tip": "Used both attributively and adverbially. 'Schnell!' as an exclamation = Quickly!",
    "examples": ["Das Auto fährt schnell.", "Er ist ein schneller Läufer.", "Komm schnell!"]
  },
  {
    "base": "langsam", "level": "A1",
    "comparison": { "positive": "langsam", "comparative": "langsamer", "superlative_predicative": "am langsamsten", "superlative_attributive": "langsamste" },
    "irregular": false,
    "declension_examples": { "strong": "langsamer (m)", "weak": "langsame (f)", "mixed": "langsames (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["slow", "slowly"],
    "tip": "Useful phrase: 'Sprechen Sie bitte langsamer!' = Please speak more slowly!",
    "examples": ["Das Auto fährt langsam.", "Er ist ein langsamer Arbeiter.", "Bitte sprich langsamer!"]
  },
  {
    "base": "teuer", "level": "A1",
    "comparison": { "positive": "teuer", "comparative": "teurer", "superlative_predicative": "am teuersten", "superlative_attributive": "teuerste" },
    "irregular": false,
    "declension_examples": { "strong": "teurer (m)", "weak": "teure (f)", "mixed": "teures (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["expensive", "dear"],
    "tip": "Drops -e- before endings: teuer → teure (not teuere). Opposite: günstig/billig (cheap).",
    "common_mistakes": ["'Ein teures Auto' not 'ein teueres Auto'. The -e- in the stem drops."],
    "examples": ["Das Restaurant ist teuer.", "Das ist ein teures Kleid.", "Berlin ist teurer als Leipzig."]
  },
  {
    "base": "billig", "level": "A1",
    "comparison": { "positive": "billig", "comparative": "billiger", "superlative_predicative": "am billigsten", "superlative_attributive": "billigste" },
    "irregular": false,
    "declension_examples": { "strong": "billiger (m)", "weak": "billige (f)", "mixed": "billiges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["cheap", "inexpensive"],
    "tip": "Colloquially can imply low quality. More neutral: 'günstig' (affordable). 'Das ist billig!' can sound dismissive.",
    "examples": ["Das Buch ist billig.", "Er kauft immer die billigsten Sachen.", "Das Hotel ist billiger als das andere."]
  },
  {
    "base": "interessant", "level": "A1",
    "comparison": { "positive": "interessant", "comparative": "interessanter", "superlative_predicative": "am interessantesten", "superlative_attributive": "interessanteste" },
    "irregular": false,
    "declension_examples": { "strong": "interessanter (m)", "weak": "interessante (f)", "mixed": "interessantes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["interesting"],
    "tip": "Superlative adds -est- because the stem ends in -t: interessant-est-en.",
    "examples": ["Das Buch ist sehr interessant.", "Er hat einen interessanten Beruf.", "Das finde ich interessant."]
  },
  {
    "base": "langweilig", "level": "A1",
    "comparison": { "positive": "langweilig", "comparative": "langweiliger", "superlative_predicative": "am langweiligsten", "superlative_attributive": "langweiligste" },
    "irregular": false,
    "declension_examples": { "strong": "langweiliger (m)", "weak": "langweilige (f)", "mixed": "langweiliges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["boring", "dull"],
    "tip": "From 'lang' (long) + 'Weile' (while/time) — literally 'long-whiling'.",
    "examples": ["Der Film ist langweilig.", "Das Buch finde ich langweilig.", "Mir ist langweilig."]
  },
  {
    "base": "kalt", "level": "A1",
    "comparison": { "positive": "kalt", "comparative": "kälter", "superlative_predicative": "am kältesten", "superlative_attributive": "kälteste" },
    "irregular": true,
    "declension_examples": { "strong": "kalter (m)", "weak": "kalte (f)", "mixed": "kaltes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["cold"],
    "tip": "Comparative with umlaut: kalt → kälter. 'Mir ist kalt' = I am cold.",
    "examples": ["Das Wasser ist kalt.", "Es ist ein kalter Tag.", "Mir ist kalt."]
  },
  {
    "base": "warm", "level": "A1",
    "comparison": { "positive": "warm", "comparative": "wärmer", "superlative_predicative": "am wärmsten", "superlative_attributive": "wärmste" },
    "irregular": true,
    "declension_examples": { "strong": "warmer (m)", "weak": "warme (f)", "mixed": "warmes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["warm"],
    "tip": "Comparative with umlaut: warm → wärmer. Used for weather and objects.",
    "examples": ["Der Sommer ist warm.", "Sie trägt eine warme Jacke.", "Heute ist es wärmer."]
  },
  {
    "base": "müde", "level": "A1",
    "comparison": { "positive": "müde", "comparative": "müder", "superlative_predicative": "am müdesten", "superlative_attributive": "müdeste" },
    "irregular": false,
    "declension_examples": { "strong": "müder (m)", "weak": "müde (f)", "mixed": "müdes (n)" },
    "position": ["predicative", "attributive"],
    "translations": ["tired"],
    "tip": "Very common for expressing tiredness. 'Ich bin so müde!' Superlative adds -est- (stem ends in -d).",
    "examples": ["Ich bin sehr müde.", "Er sieht müde aus.", "Das müde Kind schläft ein."]
  },
  {
    "base": "hungrig", "level": "A1",
    "comparison": { "positive": "hungrig", "comparative": "hungriger", "superlative_predicative": "am hungrigsten", "superlative_attributive": "hungrigste" },
    "irregular": false,
    "declension_examples": { "strong": "hungriger (m)", "weak": "hungrige (f)", "mixed": "hungriges (n)" },
    "position": ["predicative", "attributive"],
    "translations": ["hungry"],
    "tip": "Also common: 'Ich habe Hunger' (I am hungry) — both forms are correct.",
    "examples": ["Ich bin hungrig.", "Die Kinder sind immer hungrig.", "Bist du noch hungrig?"]
  },
  {
    "base": "glücklich", "level": "A1",
    "comparison": { "positive": "glücklich", "comparative": "glücklicher", "superlative_predicative": "am glücklichsten", "superlative_attributive": "glücklichste" },
    "irregular": false,
    "declension_examples": { "strong": "glücklicher (m)", "weak": "glückliche (f)", "mixed": "glückliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["happy", "lucky"],
    "tip": "Means both 'happy' and 'lucky'. Context matters. 'Glücklicherweise' = fortunately.",
    "examples": ["Ich bin sehr glücklich.", "Sie hat ein glückliches Leben.", "Er ist das glücklichste Kind."]
  },
  {
    "base": "richtig", "level": "A1",
    "comparison": { "positive": "richtig", "comparative": "richtiger", "superlative_predicative": "am richtigsten", "superlative_attributive": "richtigste" },
    "irregular": false,
    "declension_examples": { "strong": "richtiger (m)", "weak": "richtige (f)", "mixed": "richtiges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["correct", "right", "proper"],
    "tip": "Used colloquially to intensify: 'Das ist richtig gut!' = That's really good!",
    "examples": ["Das ist richtig.", "Ist das die richtige Antwort?", "Ich habe die richtige Entscheidung getroffen."]
  },
  {
    "base": "falsch", "level": "A1",
    "comparison": { "positive": "falsch", "comparative": "falscher", "superlative_predicative": "am falschesten", "superlative_attributive": "falscheste" },
    "irregular": false,
    "declension_examples": { "strong": "falscher (m)", "weak": "falsche (f)", "mixed": "falsches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["wrong", "false", "incorrect"],
    "tip": "Opposite of richtig. 'Das ist falsch!' Also means 'fake': 'eine falsche Nummer' (wrong number).",
    "examples": ["Das ist falsch.", "Er hat die falsche Antwort.", "Du hast die falsche Nummer gewählt."]
  },
  {
    "base": "laut", "level": "A1",
    "comparison": { "positive": "laut", "comparative": "lauter", "superlative_predicative": "am lautesten", "superlative_attributive": "lauteste" },
    "irregular": false,
    "declension_examples": { "strong": "lauter (m)", "weak": "laute (f)", "mixed": "lautes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["loud", "noisy"],
    "tip": "Opposite: leise (quiet). Also used as preposition: 'laut dem Bericht' (according to the report).",
    "examples": ["Die Musik ist zu laut.", "Er hat eine laute Stimme.", "Sprich nicht so laut!"]
  },
  {
    "base": "leise", "level": "A1",
    "comparison": { "positive": "leise", "comparative": "leiser", "superlative_predicative": "am leisesten", "superlative_attributive": "leiseste" },
    "irregular": false,
    "declension_examples": { "strong": "leiser (m)", "weak": "leise (f)", "mixed": "leises (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["quiet", "soft", "softly"],
    "tip": "Opposite of laut. 'Sei leise!' = Be quiet! Used for sounds and voices.",
    "examples": ["Sei bitte leise!", "Er spricht leise.", "Das ist ein leises Geräusch."]
  },
  {
    "base": "frei", "level": "A1",
    "comparison": { "positive": "frei", "comparative": "freier", "superlative_predicative": "am freisten", "superlative_attributive": "freiste" },
    "irregular": false,
    "declension_examples": { "strong": "freier (m)", "weak": "freie (f)", "mixed": "freies (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["free", "available", "vacant"],
    "tip": "Means both 'free' (liberty) and 'available/vacant'. 'Ist hier noch frei?' = Is this seat available?",
    "examples": ["Ist dieser Platz frei?", "Ich habe heute frei.", "Das ist ein freies Land."]
  },
  {
    "base": "schwer", "level": "A1",
    "comparison": { "positive": "schwer", "comparative": "schwerer", "superlative_predicative": "am schwersten", "superlative_attributive": "schwerste" },
    "irregular": false,
    "declension_examples": { "strong": "schwerer (m)", "weak": "schwere (f)", "mixed": "schweres (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["heavy", "difficult", "hard"],
    "tip": "Means both 'heavy' (weight) and 'difficult'. Context determines meaning.",
    "examples": ["Diese Tasche ist schwer.", "Deutsch ist schwer.", "Das ist eine schwere Aufgabe."]
  },
  {
    "base": "einfach", "level": "A1",
    "comparison": { "positive": "einfach", "comparative": "einfacher", "superlative_predicative": "am einfachsten", "superlative_attributive": "einfachste" },
    "irregular": false,
    "declension_examples": { "strong": "einfacher (m)", "weak": "einfache (f)", "mixed": "einfaches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["easy", "simple", "just"],
    "tip": "Also used as intensifier/filler: 'Das ist einfach schön!' = That's just beautiful! Also: single (ticket).",
    "examples": ["Die Übung ist einfach.", "Einmal Hamburg, einfach, bitte.", "Das ist einfach wunderbar!"]
  }
];
window.adjectivesA1 = adjectivesA1;
