// adjectives-db-b2.js — B2 Upper-Intermediate German Adjectives (comprehensive)
const adjectivesB2 = [
  {
    "base": "erheblich", "level": "B2",
    "comparison": { "positive": "erheblich", "comparative": "erheblicher", "superlative_predicative": "am erheblichsten", "superlative_attributive": "erheblichste" },
    "irregular": false,
    "declension_examples": { "strong": "erheblicher (m)", "weak": "erhebliche (f)", "mixed": "erhebliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["considerable", "significant", "substantial"],
    "tip": "Formal/academic register. Synonym: beträchtlich, bedeutend. 'Erheblich besser' = considerably better.",
    "examples": ["Das ist ein erheblicher Unterschied.", "Die Kosten sind erheblich gestiegen.", "Er hat erhebliche Fortschritte gemacht."]
  },
  {
    "base": "sachlich", "level": "B2",
    "comparison": { "positive": "sachlich", "comparative": "sachlicher", "superlative_predicative": "am sachlichsten", "superlative_attributive": "sachlichste" },
    "irregular": false,
    "declension_examples": { "strong": "sachlicher (m)", "weak": "sachliche (f)", "mixed": "sachliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["factual", "objective", "matter-of-fact"],
    "tip": "Important in academic and professional contexts. 'Bleib sachlich!' = Stay objective! Opposite: emotional, subjektiv.",
    "examples": ["Bleib bitte sachlich.", "Er gibt eine sachliche Einschätzung.", "Das ist ein sachlicher Bericht."]
  },
  {
    "base": "nachhaltig", "level": "B2",
    "comparison": { "positive": "nachhaltig", "comparative": "nachhaltiger", "superlative_predicative": "am nachhaltigsten", "superlative_attributive": "nachhaltigste" },
    "irregular": false,
    "declension_examples": { "strong": "nachhaltiger (m)", "weak": "nachhaltige (f)", "mixed": "nachhaltiges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["sustainable", "lasting"],
    "tip": "Very trendy word in contemporary German. 'Nachhaltige Entwicklung' = sustainable development. Also means 'lasting' (impact).",
    "collocations": ["nachhaltige Entwicklung", "nachhaltig wirtschaften", "nachhaltiger Eindruck"],
    "examples": ["Wir brauchen eine nachhaltige Lösung.", "Das hat einen nachhaltigen Eindruck hinterlassen.", "Nachhaltige Produkte sind teurer."]
  },
  {
    "base": "ausreichend", "level": "B2",
    "comparison": { "positive": "ausreichend", "comparative": "ausreichender", "superlative_predicative": "am ausreichendsten", "superlative_attributive": "ausreichendste" },
    "irregular": false,
    "declension_examples": { "strong": "ausreichender (m)", "weak": "ausreichende (f)", "mixed": "ausreichendes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["sufficient", "adequate", "enough"],
    "tip": "More formal than 'genug'. Used in official/academic contexts. Also a school grade in Germany (D grade: barely passing).",
    "examples": ["Die Mittel sind ausreichend.", "Das reicht nicht aus.", "Er hat ausreichende Kenntnisse."]
  },
  {
    "base": "umfangreich", "level": "B2",
    "comparison": { "positive": "umfangreich", "comparative": "umfangreicher", "superlative_predicative": "am umfangreichsten", "superlative_attributive": "umfangreichste" },
    "irregular": false,
    "declension_examples": { "strong": "umfangreicher (m)", "weak": "umfangreiche (f)", "mixed": "umfangreiches (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["extensive", "comprehensive", "substantial"],
    "tip": "Describes something large in scope. 'Eine umfangreiche Sammlung' = an extensive collection.",
    "examples": ["Das ist ein umfangreiches Projekt.", "Er hat umfangreiche Erfahrung.", "Die Auswahl ist sehr umfangreich."]
  },
  {
    "base": "vorläufig", "level": "B2",
    "comparison": { "positive": "vorläufig", "comparative": "vorläufiger", "superlative_predicative": "am vorläufigsten", "superlative_attributive": "vorläufigste" },
    "irregular": false,
    "declension_examples": { "strong": "vorläufiger (m)", "weak": "vorläufige (f)", "mixed": "vorläufiges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["provisional", "temporary", "preliminary"],
    "tip": "Used for temporary measures or preliminary results. 'Vorläufig' as adverb = for the time being.",
    "examples": ["Das ist eine vorläufige Lösung.", "Vorläufig bleibt alles beim Alten.", "Das sind vorläufige Ergebnisse."]
  },
  {
    "base": "angemessen", "level": "B2",
    "comparison": { "positive": "angemessen", "comparative": "angemessener", "superlative_predicative": "am angemessensten", "superlative_attributive": "angemessenste" },
    "irregular": false,
    "declension_examples": { "strong": "angemessener (m)", "weak": "angemessene (f)", "mixed": "angemessenes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["appropriate", "adequate", "reasonable"],
    "tip": "From 'messen' (to measure) + 'an' — literally 'measured to'. Implies suitability for a situation.",
    "examples": ["Das ist eine angemessene Reaktion.", "Der Lohn ist angemessen.", "Er hat sich angemessen verhalten."]
  },
  {
    "base": "überzeugend", "level": "B2",
    "comparison": { "positive": "überzeugend", "comparative": "überzeugender", "superlative_predicative": "am überzeugendsten", "superlative_attributive": "überzeugendste" },
    "irregular": false,
    "declension_examples": { "strong": "überzeugender (m)", "weak": "überzeugende (f)", "mixed": "überzeugendes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["convincing", "persuasive"],
    "tip": "Present participle used as adjective. 'Überzeugende Argumente' = convincing arguments.",
    "examples": ["Das Argument ist überzeugend.", "Sie hat überzeugend gesprochen.", "Eine überzeugende Leistung."]
  },
  {
    "base": "eindeutig", "level": "B2",
    "comparison": { "positive": "eindeutig", "comparative": "eindeutiger", "superlative_predicative": "am eindeutigsten", "superlative_attributive": "eindeutigste" },
    "irregular": false,
    "declension_examples": { "strong": "eindeutiger (m)", "weak": "eindeutige (f)", "mixed": "eindeutiges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["unambiguous", "clear", "definite"],
    "tip": "From 'ein' (one) + 'deutig' (interpretable). Means something with only one clear meaning. Opposite: mehrdeutig (ambiguous).",
    "examples": ["Das Ergebnis ist eindeutig.", "Er hat eine eindeutige Antwort gegeben.", "Das ist eindeutig falsch."]
  },
  {
    "base": "vielfältig", "level": "B2",
    "comparison": { "positive": "vielfältig", "comparative": "vielfältiger", "superlative_predicative": "am vielfältigsten", "superlative_attributive": "vielfältigste" },
    "irregular": false,
    "declension_examples": { "strong": "vielfältiger (m)", "weak": "vielfältige (f)", "mixed": "vielfältiges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["diverse", "varied", "manifold"],
    "tip": "Common in descriptions of culture, job offers, and projects. 'Vielfältige Möglichkeiten' = diverse possibilities.",
    "examples": ["Das Angebot ist vielfältig.", "Er hat vielfältige Erfahrungen.", "Die Stadt ist kulturell vielfältig."]
  },
  {
    "base": "unvermeidlich", "level": "B2",
    "comparison": { "positive": "unvermeidlich", "comparative": "unvermeidlicher", "superlative_predicative": "am unvermeidlichsten", "superlative_attributive": "unvermeidlichste" },
    "irregular": false,
    "declension_examples": { "strong": "unvermeidlicher (m)", "weak": "unvermeidliche (f)", "mixed": "unvermeidliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["inevitable", "unavoidable"],
    "tip": "Prefix 'un-' + 'vermeidlich' (avoidable from 'vermeiden'). 'Das war unvermeidlich' = That was inevitable.",
    "examples": ["Das war unvermeidlich.", "Ein unvermeidlicher Konflikt.", "Der Wandel ist unvermeidlich."]
  },
  {
    "base": "strittig", "level": "B2",
    "comparison": { "positive": "strittig", "comparative": "strittiger", "superlative_predicative": "am strittigsten", "superlative_attributive": "strittigste" },
    "irregular": false,
    "declension_examples": { "strong": "strittiger (m)", "weak": "strittige (f)", "mixed": "strittiges (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["controversial", "disputed", "contentious"],
    "tip": "Used for topics, issues, or points that are disputed. Synonym: umstritten (more common). 'Das ist strittig' = That is disputed.",
    "examples": ["Das ist ein strittiger Punkt.", "Die Frage ist strittig.", "Strittige Themen sollte man diplomatisch ansprechen."]
  }
];
export default adjectivesB2;
