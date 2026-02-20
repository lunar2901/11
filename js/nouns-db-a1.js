// nouns-db-a1.js — A1 Beginner German Nouns (comprehensive)
const nounsA1 = [
  {
    "base": "Mann", "article": "der", "gender": "m", "level": "A1",
    "plural": "Männer", "plural_with_article": "die Männer",
    "genitive_with_article": "des Mannes", "n_declension": false, "plural_pattern": "Umlaut + -er",
    "translations": ["man", "husband"],
    "tip": "Note plural umlaut: Mann → Männer. Also means 'husband' in context.",
    "examples": ["Der Mann heißt Thomas.", "Mein Mann arbeitet in Berlin.", "Die Männer spielen Fußball."],
    "declension": {
      "nominativ": { "singular": "der Mann", "plural": "die Männer" },
      "akkusativ": { "singular": "den Mann", "plural": "die Männer" },
      "dativ": { "singular": "dem Mann", "plural": "den Männern" },
      "genitiv": { "singular": "des Mannes", "plural": "der Männer" }
    }
  },
  {
    "base": "Frau", "article": "die", "gender": "f", "level": "A1",
    "plural": "Frauen", "plural_with_article": "die Frauen",
    "genitive_with_article": "der Frau", "n_declension": false, "plural_pattern": "-en",
    "translations": ["woman", "wife", "Mrs."],
    "tip": "Also used as a polite title: 'Frau Müller'. As 'wife' it is used without article: 'meine Frau'.",
    "examples": ["Die Frau heißt Anna.", "Meine Frau ist Ärztin.", "Guten Tag, Frau Schneider!"],
    "declension": {
      "nominativ": { "singular": "die Frau", "plural": "die Frauen" },
      "akkusativ": { "singular": "die Frau", "plural": "die Frauen" },
      "dativ": { "singular": "der Frau", "plural": "den Frauen" },
      "genitiv": { "singular": "der Frau", "plural": "der Frauen" }
    }
  },
  {
    "base": "Kind", "article": "das", "gender": "n", "level": "A1",
    "plural": "Kinder", "plural_with_article": "die Kinder",
    "genitive_with_article": "des Kindes", "n_declension": false, "plural_pattern": "-er",
    "translations": ["child"],
    "tip": "Plural: Kinder (no umlaut, just -er). Common in compound words: Kinderzimmer, Kindergarten.",
    "examples": ["Das Kind spielt im Garten.", "Wir haben zwei Kinder.", "Das Kind heißt Lukas."],
    "declension": {
      "nominativ": { "singular": "das Kind", "plural": "die Kinder" },
      "akkusativ": { "singular": "das Kind", "plural": "die Kinder" },
      "dativ": { "singular": "dem Kind", "plural": "den Kindern" },
      "genitiv": { "singular": "des Kindes", "plural": "der Kinder" }
    }
  },
  {
    "base": "Haus", "article": "das", "gender": "n", "level": "A1",
    "plural": "Häuser", "plural_with_article": "die Häuser",
    "genitive_with_article": "des Hauses", "n_declension": false, "plural_pattern": "Umlaut + -er",
    "translations": ["house", "home"],
    "tip": "Plural: Häuser (umlaut + -er). Very common in compounds: Rathaus, Krankenhaus, Kaufhaus.",
    "examples": ["Wir wohnen in einem Haus.", "Das Haus ist groß.", "Wo ist das Haus von deinen Eltern?"],
    "declension": {
      "nominativ": { "singular": "das Haus", "plural": "die Häuser" },
      "akkusativ": { "singular": "das Haus", "plural": "die Häuser" },
      "dativ": { "singular": "dem Haus", "plural": "den Häusern" },
      "genitiv": { "singular": "des Hauses", "plural": "der Häuser" }
    }
  },
  {
    "base": "Schule", "article": "die", "gender": "f", "level": "A1",
    "plural": "Schulen", "plural_with_article": "die Schulen",
    "genitive_with_article": "der Schule", "n_declension": false, "plural_pattern": "-en",
    "translations": ["school"],
    "tip": "In die Schule gehen = to go to school (no article with location phrases: 'Er ist in der Schule').",
    "examples": ["Ich gehe in die Schule.", "Die Schule beginnt um 8 Uhr.", "Welche Schule besuchst du?"],
    "declension": {
      "nominativ": { "singular": "die Schule", "plural": "die Schulen" },
      "akkusativ": { "singular": "die Schule", "plural": "die Schulen" },
      "dativ": { "singular": "der Schule", "plural": "den Schulen" },
      "genitiv": { "singular": "der Schule", "plural": "der Schulen" }
    }
  },
  {
    "base": "Buch", "article": "das", "gender": "n", "level": "A1",
    "plural": "Bücher", "plural_with_article": "die Bücher",
    "genitive_with_article": "des Buches", "n_declension": false, "plural_pattern": "Umlaut + -er",
    "translations": ["book"],
    "tip": "Plural: Bücher (umlaut + -er). 'Das Buch lesen' = to read the book.",
    "examples": ["Ich lese ein Buch.", "Das Buch ist interessant.", "Wie viele Bücher hast du?"],
    "declension": {
      "nominativ": { "singular": "das Buch", "plural": "die Bücher" },
      "akkusativ": { "singular": "das Buch", "plural": "die Bücher" },
      "dativ": { "singular": "dem Buch", "plural": "den Büchern" },
      "genitiv": { "singular": "des Buches", "plural": "der Bücher" }
    }
  },
  {
    "base": "Auto", "article": "das", "gender": "n", "level": "A1",
    "plural": "Autos", "plural_with_article": "die Autos",
    "genitive_with_article": "des Autos", "n_declension": false, "plural_pattern": "-s",
    "translations": ["car", "automobile"],
    "tip": "Plural with -s (loanword pattern). 'Mit dem Auto fahren' = to travel by car.",
    "examples": ["Das Auto ist rot.", "Ich fahre mit dem Auto.", "Er kauft ein neues Auto."],
    "declension": {
      "nominativ": { "singular": "das Auto", "plural": "die Autos" },
      "akkusativ": { "singular": "das Auto", "plural": "die Autos" },
      "dativ": { "singular": "dem Auto", "plural": "den Autos" },
      "genitiv": { "singular": "des Autos", "plural": "der Autos" }
    }
  },
  {
    "base": "Stadt", "article": "die", "gender": "f", "level": "A1",
    "plural": "Städte", "plural_with_article": "die Städte",
    "genitive_with_article": "der Stadt", "n_declension": false, "plural_pattern": "Umlaut + -e",
    "translations": ["city", "town"],
    "tip": "Plural: Städte (umlaut + -e). 'In die Stadt gehen' = to go into town.",
    "examples": ["Berlin ist eine große Stadt.", "Ich wohne in einer kleinen Stadt.", "In welcher Stadt wohnst du?"],
    "declension": {
      "nominativ": { "singular": "die Stadt", "plural": "die Städte" },
      "akkusativ": { "singular": "die Stadt", "plural": "die Städte" },
      "dativ": { "singular": "der Stadt", "plural": "den Städten" },
      "genitiv": { "singular": "der Stadt", "plural": "der Städte" }
    }
  },
  {
    "base": "Lehrer", "article": "der", "gender": "m", "level": "A1",
    "plural": "Lehrer", "plural_with_article": "die Lehrer",
    "genitive_with_article": "des Lehrers", "n_declension": false, "plural_pattern": "—",
    "translations": ["teacher (male)"],
    "tip": "Plural = Singular for -er nouns. Female form: die Lehrerin (pl. Lehrerinnen).",
    "examples": ["Der Lehrer erklärt Grammatik.", "Unser Lehrer heißt Herr Weber.", "Die Lehrer machen eine Pause."],
    "declension": {
      "nominativ": { "singular": "der Lehrer", "plural": "die Lehrer" },
      "akkusativ": { "singular": "den Lehrer", "plural": "die Lehrer" },
      "dativ": { "singular": "dem Lehrer", "plural": "den Lehrern" },
      "genitiv": { "singular": "des Lehrers", "plural": "der Lehrer" }
    }
  },
  {
    "base": "Lehrerin", "article": "die", "gender": "f", "level": "A1",
    "plural": "Lehrerinnen", "plural_with_article": "die Lehrerinnen",
    "genitive_with_article": "der Lehrerin", "n_declension": false, "plural_pattern": "-nen",
    "translations": ["teacher (female)"],
    "tip": "Feminine form of Lehrer. All -in nouns take -nen in plural.",
    "examples": ["Die Lehrerin ist nett.", "Unsere Lehrerin kommt aus Berlin.", "Die Lehrerinnen haben eine Besprechung."],
    "declension": {
      "nominativ": { "singular": "die Lehrerin", "plural": "die Lehrerinnen" },
      "akkusativ": { "singular": "die Lehrerin", "plural": "die Lehrerinnen" },
      "dativ": { "singular": "der Lehrerin", "plural": "den Lehrerinnen" },
      "genitiv": { "singular": "der Lehrerin", "plural": "der Lehrerinnen" }
    }
  },
  {
    "base": "Freund", "article": "der", "gender": "m", "level": "A1",
    "plural": "Freunde", "plural_with_article": "die Freunde",
    "genitive_with_article": "des Freundes", "n_declension": false, "plural_pattern": "-e",
    "translations": ["friend (male)", "boyfriend"],
    "tip": "Can mean 'friend' or 'boyfriend' depending on context. Female: Freundin. 'Ein Freund von mir' = a friend of mine.",
    "examples": ["Das ist mein Freund Peter.", "Ich treffe meine Freunde am Wochenende.", "Hast du einen Freund?"],
    "declension": {
      "nominativ": { "singular": "der Freund", "plural": "die Freunde" },
      "akkusativ": { "singular": "den Freund", "plural": "die Freunde" },
      "dativ": { "singular": "dem Freund", "plural": "den Freunden" },
      "genitiv": { "singular": "des Freundes", "plural": "der Freunde" }
    }
  },
  {
    "base": "Freundin", "article": "die", "gender": "f", "level": "A1",
    "plural": "Freundinnen", "plural_with_article": "die Freundinnen",
    "genitive_with_article": "der Freundin", "n_declension": false, "plural_pattern": "-nen",
    "translations": ["friend (female)", "girlfriend"],
    "tip": "Can mean 'female friend' or 'girlfriend'. Context determines meaning.",
    "examples": ["Meine Freundin heißt Sara.", "Wir sind beste Freundinnen.", "Das ist meine Freundin."],
    "declension": {
      "nominativ": { "singular": "die Freundin", "plural": "die Freundinnen" },
      "akkusativ": { "singular": "die Freundin", "plural": "die Freundinnen" },
      "dativ": { "singular": "der Freundin", "plural": "den Freundinnen" },
      "genitiv": { "singular": "der Freundin", "plural": "der Freundinnen" }
    }
  },
  {
    "base": "Familie", "article": "die", "gender": "f", "level": "A1",
    "plural": "Familien", "plural_with_article": "die Familien",
    "genitive_with_article": "der Familie", "n_declension": false, "plural_pattern": "-n",
    "translations": ["family"],
    "tip": "Feminine noun. 'Meine Familie' = my family. Often used without article in phrases like 'Familie haben'.",
    "examples": ["Meine Familie wohnt in München.", "Er hat eine große Familie.", "Die Familie ist sehr wichtig."],
    "declension": {
      "nominativ": { "singular": "die Familie", "plural": "die Familien" },
      "akkusativ": { "singular": "die Familie", "plural": "die Familien" },
      "dativ": { "singular": "der Familie", "plural": "den Familien" },
      "genitiv": { "singular": "der Familie", "plural": "der Familien" }
    }
  },
  {
    "base": "Mutter", "article": "die", "gender": "f", "level": "A1",
    "plural": "Mütter", "plural_with_article": "die Mütter",
    "genitive_with_article": "der Mutter", "n_declension": false, "plural_pattern": "Umlaut",
    "translations": ["mother", "mom"],
    "tip": "Plural: Mütter (umlaut only). Colloquial: Mama.",
    "examples": ["Meine Mutter kocht gern.", "Die Mutter bringt das Kind zur Schule.", "Wie heißt deine Mutter?"],
    "declension": {
      "nominativ": { "singular": "die Mutter", "plural": "die Mütter" },
      "akkusativ": { "singular": "die Mutter", "plural": "die Mütter" },
      "dativ": { "singular": "der Mutter", "plural": "den Müttern" },
      "genitiv": { "singular": "der Mutter", "plural": "der Mütter" }
    }
  },
  {
    "base": "Vater", "article": "der", "gender": "m", "level": "A1",
    "plural": "Väter", "plural_with_article": "die Väter",
    "genitive_with_article": "des Vaters", "n_declension": false, "plural_pattern": "Umlaut",
    "translations": ["father", "dad"],
    "tip": "Plural: Väter (umlaut only). Colloquial: Papa.",
    "examples": ["Mein Vater arbeitet als Arzt.", "Der Vater liest dem Kind vor.", "Wann kommt dein Vater nach Hause?"],
    "declension": {
      "nominativ": { "singular": "der Vater", "plural": "die Väter" },
      "akkusativ": { "singular": "den Vater", "plural": "die Väter" },
      "dativ": { "singular": "dem Vater", "plural": "den Vätern" },
      "genitiv": { "singular": "des Vaters", "plural": "der Väter" }
    }
  },
  {
    "base": "Zimmer", "article": "das", "gender": "n", "level": "A1",
    "plural": "Zimmer", "plural_with_article": "die Zimmer",
    "genitive_with_article": "des Zimmers", "n_declension": false, "plural_pattern": "—",
    "translations": ["room"],
    "tip": "Plural = Singular. Common in compounds: Schlafzimmer (bedroom), Wohnzimmer (living room), Badezimmer (bathroom).",
    "examples": ["Das Zimmer ist groß.", "Ich habe ein eigenes Zimmer.", "Wie viele Zimmer hat die Wohnung?"],
    "declension": {
      "nominativ": { "singular": "das Zimmer", "plural": "die Zimmer" },
      "akkusativ": { "singular": "das Zimmer", "plural": "die Zimmer" },
      "dativ": { "singular": "dem Zimmer", "plural": "den Zimmern" },
      "genitiv": { "singular": "des Zimmers", "plural": "der Zimmer" }
    }
  },
  {
    "base": "Arbeit", "article": "die", "gender": "f", "level": "A1",
    "plural": "Arbeiten", "plural_with_article": "die Arbeiten",
    "genitive_with_article": "der Arbeit", "n_declension": false, "plural_pattern": "-en",
    "translations": ["work", "job"],
    "tip": "Often used without article: 'Ich gehe zur Arbeit' (I go to work). Also means a written assignment.",
    "examples": ["Die Arbeit macht mir Spaß.", "Er geht jeden Tag zur Arbeit.", "Wie ist deine Arbeit?"],
    "declension": {
      "nominativ": { "singular": "die Arbeit", "plural": "die Arbeiten" },
      "akkusativ": { "singular": "die Arbeit", "plural": "die Arbeiten" },
      "dativ": { "singular": "der Arbeit", "plural": "den Arbeiten" },
      "genitiv": { "singular": "der Arbeit", "plural": "der Arbeiten" }
    }
  },
  {
    "base": "Tag", "article": "der", "gender": "m", "level": "A1",
    "plural": "Tage", "plural_with_article": "die Tage",
    "genitive_with_article": "des Tages", "n_declension": false, "plural_pattern": "-e",
    "translations": ["day"],
    "tip": "Used in many greetings: 'Guten Tag!' (Good day!). Compounds: Geburtstag (birthday), Werktag (workday).",
    "examples": ["Heute ist ein schöner Tag.", "Guten Tag!", "Ich lerne jeden Tag Deutsch."],
    "declension": {
      "nominativ": { "singular": "der Tag", "plural": "die Tage" },
      "akkusativ": { "singular": "den Tag", "plural": "die Tage" },
      "dativ": { "singular": "dem Tag", "plural": "den Tagen" },
      "genitiv": { "singular": "des Tages", "plural": "der Tage" }
    }
  },
  {
    "base": "Zeit", "article": "die", "gender": "f", "level": "A1",
    "plural": "Zeiten", "plural_with_article": "die Zeiten",
    "genitive_with_article": "der Zeit", "n_declension": false, "plural_pattern": "-en",
    "translations": ["time"],
    "tip": "Often used without article: 'Ich habe keine Zeit' (I have no time). 'Es ist Zeit' = it's time.",
    "examples": ["Ich habe keine Zeit.", "Wie spät ist es? — Ich weiß nicht, ich habe keine Uhr.", "Die Zeit vergeht schnell."],
    "declension": {
      "nominativ": { "singular": "die Zeit", "plural": "die Zeiten" },
      "akkusativ": { "singular": "die Zeit", "plural": "die Zeiten" },
      "dativ": { "singular": "der Zeit", "plural": "den Zeiten" },
      "genitiv": { "singular": "der Zeit", "plural": "der Zeiten" }
    }
  },
  {
    "base": "Geld", "article": "das", "gender": "n", "level": "A1",
    "plural": "—", "plural_with_article": "— (uncountable)",
    "genitive_with_article": "des Geldes", "n_declension": false, "plural_pattern": "no plural",
    "translations": ["money"],
    "tip": "Usually uncountable in German. 'Ich habe kein Geld' = I have no money.",
    "examples": ["Hast du Geld dabei?", "Das Geld liegt auf dem Tisch.", "Ich brauche Geld."],
    "declension": {
      "nominativ": { "singular": "das Geld", "plural": "—" },
      "akkusativ": { "singular": "das Geld", "plural": "—" },
      "dativ": { "singular": "dem Geld", "plural": "—" },
      "genitiv": { "singular": "des Geldes", "plural": "—" }
    }
  },
  {
    "base": "Telefon", "article": "das", "gender": "n", "level": "A1",
    "plural": "Telefone", "plural_with_article": "die Telefone",
    "genitive_with_article": "des Telefons", "n_declension": false, "plural_pattern": "-e",
    "translations": ["telephone", "phone"],
    "tip": "Also 'das Handy' for mobile phone. 'Telefon' often refers to landlines.",
    "examples": ["Das Telefon klingelt.", "Ruf mich auf dem Telefon an!", "Ich habe mein Telefon nicht dabei."],
    "declension": {
      "nominativ": { "singular": "das Telefon", "plural": "die Telefone" },
      "akkusativ": { "singular": "das Telefon", "plural": "die Telefone" },
      "dativ": { "singular": "dem Telefon", "plural": "den Telefonen" },
      "genitiv": { "singular": "des Telefons", "plural": "der Telefone" }
    }
  },
  {
    "base": "Wasser", "article": "das", "gender": "n", "level": "A1",
    "plural": "— / Wässer", "plural_with_article": "die Wässer (types of water)",
    "genitive_with_article": "des Wassers", "n_declension": false, "plural_pattern": "—",
    "translations": ["water"],
    "tip": "Usually uncountable. Plural 'Wässer' refers to types of water (mineral waters). 'Ein Glas Wasser' = a glass of water.",
    "examples": ["Ich möchte ein Glas Wasser.", "Das Wasser ist kalt.", "Trinkst du Mineralwasser?"],
    "declension": {
      "nominativ": { "singular": "das Wasser", "plural": "die Wässer" },
      "akkusativ": { "singular": "das Wasser", "plural": "die Wässer" },
      "dativ": { "singular": "dem Wasser", "plural": "den Wässern" },
      "genitiv": { "singular": "des Wassers", "plural": "der Wässer" }
    }
  },
  {
    "base": "Essen", "article": "das", "gender": "n", "level": "A1",
    "plural": "Essen", "plural_with_article": "die Essen",
    "genitive_with_article": "des Essens", "n_declension": false, "plural_pattern": "—",
    "translations": ["food", "meal"],
    "tip": "Nominalized infinitive of 'essen'. 'Das Essen ist fertig' = The meal is ready.",
    "examples": ["Das Essen schmeckt gut.", "Wann ist das Essen fertig?", "Er mag das Essen nicht."],
    "declension": {
      "nominativ": { "singular": "das Essen", "plural": "die Essen" },
      "akkusativ": { "singular": "das Essen", "plural": "die Essen" },
      "dativ": { "singular": "dem Essen", "plural": "den Essen" },
      "genitiv": { "singular": "des Essens", "plural": "der Essen" }
    }
  },
  {
    "base": "Name", "article": "der", "gender": "m", "level": "A1",
    "plural": "Namen", "plural_with_article": "die Namen",
    "genitive_with_article": "des Namens", "n_declension": false, "plural_pattern": "-n",
    "translations": ["name"],
    "tip": "Weak-ish noun: Genitiv adds -ns (des Namens). 'Wie heißt du?' / 'Wie ist dein Name?'",
    "examples": ["Wie ist Ihr Name?", "Mein Name ist Lisa.", "Der Name klingt schön."],
    "declension": {
      "nominativ": { "singular": "der Name", "plural": "die Namen" },
      "akkusativ": { "singular": "den Namen", "plural": "die Namen" },
      "dativ": { "singular": "dem Namen", "plural": "den Namen" },
      "genitiv": { "singular": "des Namens", "plural": "der Namen" }
    }
  },
  {
    "base": "Sprache", "article": "die", "gender": "f", "level": "A1",
    "plural": "Sprachen", "plural_with_article": "die Sprachen",
    "genitive_with_article": "der Sprache", "n_declension": false, "plural_pattern": "-en",
    "translations": ["language", "speech"],
    "tip": "Used for both natural languages and the act of speaking. 'Deutsch ist eine schwere Sprache.'",
    "examples": ["Deutsch ist eine interessante Sprache.", "Wie viele Sprachen sprichst du?", "Die deutsche Sprache hat viele Regeln."],
    "declension": {
      "nominativ": { "singular": "die Sprache", "plural": "die Sprachen" },
      "akkusativ": { "singular": "die Sprache", "plural": "die Sprachen" },
      "dativ": { "singular": "der Sprache", "plural": "den Sprachen" },
      "genitiv": { "singular": "der Sprache", "plural": "der Sprachen" }
    }
  },
  {
    "base": "Wort", "article": "das", "gender": "n", "level": "A1",
    "plural": "Wörter / Worte", "plural_with_article": "die Wörter / die Worte",
    "genitive_with_article": "des Wortes", "n_declension": false, "plural_pattern": "-er (individual words) / -e (linked words)",
    "translations": ["word"],
    "tip": "Two plurals: 'Wörter' for individual words (e.g., in a dictionary); 'Worte' for words as meaningful utterances (e.g., 'Seine Worte waren schön').",
    "common_mistakes": ["'Viele neue Wörter lernen' (individual words). 'Schöne Worte sprechen' (meaningful speech)."],
    "examples": ["Das ist ein neues Wort.", "Ich kenne dieses Wort nicht.", "Das sind schöne Worte."],
    "declension": {
      "nominativ": { "singular": "das Wort", "plural": "die Wörter / Worte" },
      "akkusativ": { "singular": "das Wort", "plural": "die Wörter / Worte" },
      "dativ": { "singular": "dem Wort", "plural": "den Wörtern / Worten" },
      "genitiv": { "singular": "des Wortes", "plural": "der Wörter / Worte" }
    }
  },
  {
    "base": "Straße", "article": "die", "gender": "f", "level": "A1",
    "plural": "Straßen", "plural_with_article": "die Straßen",
    "genitive_with_article": "der Straße", "n_declension": false, "plural_pattern": "-n",
    "translations": ["street", "road"],
    "tip": "In addresses: 'Hauptstraße 5' (no article). 'Die Hauptstraße' uses article when described.",
    "examples": ["Ich wohne in der Hauptstraße.", "Die Straße ist laut.", "Geh über die Straße!"],
    "declension": {
      "nominativ": { "singular": "die Straße", "plural": "die Straßen" },
      "akkusativ": { "singular": "die Straße", "plural": "die Straßen" },
      "dativ": { "singular": "der Straße", "plural": "den Straßen" },
      "genitiv": { "singular": "der Straße", "plural": "der Straßen" }
    }
  },
  {
    "base": "Nummer", "article": "die", "gender": "f", "level": "A1",
    "plural": "Nummern", "plural_with_article": "die Nummern",
    "genitive_with_article": "der Nummer", "n_declension": false, "plural_pattern": "-n",
    "translations": ["number"],
    "tip": "Used for phone numbers, addresses, etc. 'Meine Handynummer ist...'",
    "examples": ["Wie ist deine Telefonnummer?", "Das ist Nummer drei.", "Bitte geben Sie Ihre Nummer an."],
    "declension": {
      "nominativ": { "singular": "die Nummer", "plural": "die Nummern" },
      "akkusativ": { "singular": "die Nummer", "plural": "die Nummern" },
      "dativ": { "singular": "der Nummer", "plural": "den Nummern" },
      "genitiv": { "singular": "der Nummer", "plural": "der Nummern" }
    }
  },
  {
    "base": "Jahr", "article": "das", "gender": "n", "level": "A1",
    "plural": "Jahre", "plural_with_article": "die Jahre",
    "genitive_with_article": "des Jahres", "n_declension": false, "plural_pattern": "-e",
    "translations": ["year"],
    "tip": "Age: 'Ich bin 25 Jahre alt.' Time: 'Seit zwei Jahren lerne ich Deutsch.'",
    "examples": ["Ich lerne seit einem Jahr Deutsch.", "Er ist 20 Jahre alt.", "Nächstes Jahr fahre ich nach Berlin."],
    "declension": {
      "nominativ": { "singular": "das Jahr", "plural": "die Jahre" },
      "akkusativ": { "singular": "das Jahr", "plural": "die Jahre" },
      "dativ": { "singular": "dem Jahr", "plural": "den Jahren" },
      "genitiv": { "singular": "des Jahres", "plural": "der Jahre" }
    }
  },
{"base":"Uhr","article":"die","gender":"f","level":"A1","plural":"Uhren","plural_with_article":"die Uhren","genitive_with_article":"der Uhr","translations":["clock","watch","o'clock"],"examples":["Es ist drei Uhr.","Die Uhr geht falsch.","Meine Uhr ist kaputt."],"tip":"Also used to tell time: um drei Uhr = at three o'clock."},
  {"base":"Woche","article":"die","gender":"f","level":"A1","plural":"Wochen","plural_with_article":"die Wochen","genitive_with_article":"der Woche","translations":["week"],"examples":["Diese Woche bin ich beschäftigt.","Die Woche hat sieben Tage.","Wir treffen uns nächste Woche."]},
  {"base":"Monat","article":"der","gender":"m","level":"A1","plural":"Monate","plural_with_article":"die Monate","genitive_with_article":"des Monats","translations":["month"],"examples":["Welcher Monat ist jetzt?","Der Monat Januar ist kalt.","Ich zahle monatlich."]},
  {"base":"Jahr","article":"das","gender":"n","level":"A1","plural":"Jahre","plural_with_article":"die Jahre","genitive_with_article":"des Jahres","translations":["year"],"examples":["Welches Jahr ist es?","Das Jahr hat 365 Tage.","Ich bin seit zwei Jahren hier."]},
  {"base":"Stunde","article":"die","gender":"f","level":"A1","plural":"Stunden","plural_with_article":"die Stunden","genitive_with_article":"der Stunde","translations":["hour"],"examples":["Ich warte seit einer Stunde.","In einer Stunde bin ich fertig.","Die Fahrt dauert drei Stunden."]},
  {"base":"Minute","article":"die","gender":"f","level":"A1","plural":"Minuten","plural_with_article":"die Minuten","genitive_with_article":"der Minute","translations":["minute"],"examples":["Warte eine Minute!","In zehn Minuten komme ich.","Die Sitzung dauert 30 Minuten."]},
  {"base":"Brot","article":"das","gender":"n","level":"A1","plural":"Brote","plural_with_article":"die Brote","genitive_with_article":"des Brotes","translations":["bread"],"examples":["Ich esse Brot zum Frühstück.","Das Brot ist frisch.","Magst du Weißbrot oder Vollkornbrot?"],"tip":"German Brot culture: Germany has over 300 bread varieties."},
  {"base":"Ei","article":"das","gender":"n","level":"A1","plural":"Eier","plural_with_article":"die Eier","genitive_with_article":"des Eies","translations":["egg"],"examples":["Ich esse ein Ei.","Die Eier sind im Kühlschrank.","Magst du Spiegelei oder Rührei?"]},
  {"base":"Milch","article":"die","gender":"f","level":"A1","plural":null,"plural_with_article":null,"genitive_with_article":"der Milch","translations":["milk"],"examples":["Ich trinke Milch.","Die Milch ist frisch.","Kaffee mit Milch bitte."],"tip":"Usually uncountable — no plural in everyday use."},
  {"base":"Käse","article":"der","gender":"m","level":"A1","plural":"Käse","plural_with_article":"die Käse","genitive_with_article":"des Käses","translations":["cheese"],"examples":["Ich esse Brot mit Käse.","Der Käse ist lecker.","Welchen Käse möchtest du?"]},
  {"base":"Fleisch","article":"das","gender":"n","level":"A1","plural":null,"plural_with_article":null,"genitive_with_article":"des Fleisches","translations":["meat"],"examples":["Ich esse kein Fleisch.","Das Fleisch ist gut gekocht.","Schweinefleisch oder Rindfleisch?"]},
  {"base":"Fisch","article":"der","gender":"m","level":"A1","plural":"Fische","plural_with_article":"die Fische","genitive_with_article":"des Fisches","translations":["fish"],"examples":["Ich esse gerne Fisch.","Der Fisch ist frisch.","Wir haben Fisch zum Mittagessen."]},
  {"base":"Gemüse","article":"das","gender":"n","level":"A1","plural":null,"plural_with_article":null,"genitive_with_article":"des Gemüses","translations":["vegetable(s)"],"examples":["Iss mehr Gemüse!","Das Gemüse ist lecker.","Ich kaufe frisches Gemüse."],"tip":"Collective noun — usually uncountable in German."},
  {"base":"Obst","article":"das","gender":"n","level":"A1","plural":null,"plural_with_article":null,"genitive_with_article":"des Obstes","translations":["fruit"],"examples":["Iss mehr Obst!","Das Obst ist süß.","Im Sommer gibt es viel Obst."],"tip":"Collective noun like Gemüse — usually no plural."},
  {"base":"Apfel","article":"der","gender":"m","level":"A1","plural":"Äpfel","plural_with_article":"die Äpfel","genitive_with_article":"des Apfels","translations":["apple"],"examples":["Ich esse einen Apfel.","Der Apfel ist rot.","Magst du Äpfel?"]},
  {"base":"Tomate","article":"die","gender":"f","level":"A1","plural":"Tomaten","plural_with_article":"die Tomaten","genitive_with_article":"der Tomate","translations":["tomato"],"examples":["Die Tomate ist frisch.","Ich mag Tomaten.","Der Salat hat Tomaten."]},
  {"base":"Kartoffel","article":"die","gender":"f","level":"A1","plural":"Kartoffeln","plural_with_article":"die Kartoffeln","genitive_with_article":"der Kartoffel","translations":["potato"],"examples":["Ich koche Kartoffeln.","Deutsche Küche hat viele Kartoffelgerichte.","Pommes sind gebratene Kartoffeln."]},
  {"base":"Suppe","article":"die","gender":"f","level":"A1","plural":"Suppen","plural_with_article":"die Suppen","genitive_with_article":"der Suppe","translations":["soup"],"examples":["Die Suppe ist heiß.","Ich esse Suppe zu Mittag.","Tomatensuppe ist meine Lieblingssuppe."]},
  {"base":"Kuchen","article":"der","gender":"m","level":"A1","plural":"Kuchen","plural_with_article":"die Kuchen","genitive_with_article":"des Kuchens","translations":["cake"],"examples":["Der Kuchen ist lecker.","Mama backt einen Kuchen.","Wir essen Kuchen zum Kaffee."],"tip":"Plural same as singular: der Kuchen → die Kuchen."},
  {"base":"Tee","article":"der","gender":"m","level":"A1","plural":"Tees","plural_with_article":"die Tees","genitive_with_article":"des Tees","translations":["tea"],"examples":["Ich trinke Tee.","Magst du Tee mit Milch?","Ein Tee bitte!"]},
  {"base":"Saft","article":"der","gender":"m","level":"A1","plural":"Säfte","plural_with_article":"die Säfte","genitive_with_article":"des Safts","translations":["juice"],"examples":["Ich trinke Orangensaft.","Der Saft ist frisch gepresst.","Welchen Saft möchtest du?"]},
  {"base":"Wasser","article":"das","gender":"n","level":"A1","plural":"Wasser","plural_with_article":"die Wasser","genitive_with_article":"des Wassers","translations":["water"],"examples":["Ich trinke Wasser.","Das Wasser ist kalt.","Ein Glas Wasser bitte."]},
  {"base":"Bier","article":"das","gender":"n","level":"A1","plural":"Biere","plural_with_article":"die Biere","genitive_with_article":"des Bieres","translations":["beer"],"examples":["Ein Bier bitte!","Das Bier ist kalt.","Deutsches Bier ist bekannt."]},
  {"base":"Wein","article":"der","gender":"m","level":"A1","plural":"Weine","plural_with_article":"die Weine","genitive_with_article":"des Weines","translations":["wine"],"examples":["Ein Glas Wein bitte.","Rotwein oder Weißwein?","Deutscher Wein ist sehr gut."]},
  {"base":"Glas","article":"das","gender":"n","level":"A1","plural":"Gläser","plural_with_article":"die Gläser","genitive_with_article":"des Glases","translations":["glass"],"examples":["Ein Glas Wasser bitte.","Das Glas ist halb voll.","Vorsicht, das Glas bricht leicht."]}
];

window.nounsA1 = nounsA1;
