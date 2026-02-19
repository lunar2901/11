// adjectives-db-c1.js — C1 Advanced German Adjectives (comprehensive)
const adjectivesC1 = [
  {
    "base": "ambivalent", "level": "C1",
    "comparison": { "positive": "ambivalent", "comparative": "ambivalenter", "superlative_predicative": "am ambivalentesten", "superlative_attributive": "ambivalenteste" },
    "irregular": false,
    "declension_examples": { "strong": "ambivalenter (m)", "weak": "ambivalente (f)", "mixed": "ambivalentes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["ambivalent", "ambiguous in feeling"],
    "tip": "Used for mixed feelings about the same thing. 'Ich stehe ambivalent dazu' = I have mixed feelings about it.",
    "examples": ["Sie hat eine ambivalente Haltung.", "Die Reaktion war ambivalent.", "Er fühlt sich ambivalent."]
  },
  {
    "base": "nachhaltig", "level": "C1",
    "comparison": { "positive": "nachhaltig", "comparative": "nachhaltiger", "superlative_predicative": "am nachhaltigsten", "superlative_attributive": "nachhaltigste" },
    "irregular": false,
    "declension_examples": { "strong": "nachhaltiger (m)", "weak": "nachhaltige (f)", "mixed": "nachhaltiges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["sustainable", "lasting", "enduring"],
    "tip": "Central term in environmental discourse. 'Nachhaltiges Wirtschaften' = sustainable business practices.",
    "collocations": ["nachhaltige Entwicklung", "nachhaltig handeln", "nachhaltige Wirkung"],
    "examples": ["Das Unternehmen handelt nachhaltig.", "Wir brauchen nachhaltige Lösungen.", "Das hat nachhaltige Wirkung."]
  },
  {
    "base": "kontrovers", "level": "C1",
    "comparison": { "positive": "kontrovers", "comparative": "kontroverser", "superlative_predicative": "am kontroversesten", "superlative_attributive": "kontroverseste" },
    "irregular": false,
    "declension_examples": { "strong": "kontroverser (m)", "weak": "kontroverse (f)", "mixed": "kontroverses (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["controversial"],
    "tip": "Used for debates and disputed topics. Noun: die Kontroverse (controversy). 'Kontrovers diskutiert' = controversially debated.",
    "examples": ["Das Thema ist sehr kontrovers.", "Eine kontroverse Diskussion.", "Das Gesetz wird kontrovers diskutiert."]
  },
  {
    "base": "pragmatisch", "level": "C1",
    "comparison": { "positive": "pragmatisch", "comparative": "pragmatischer", "superlative_predicative": "am pragmatischsten", "superlative_attributive": "pragmatischste" },
    "irregular": false,
    "declension_examples": { "strong": "pragmatischer (m)", "weak": "pragmatische (f)", "mixed": "pragmatisches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["pragmatic", "practical"],
    "tip": "Describes a practical, solution-focused approach rather than ideological. 'Pragmatisch vorgehen' = to proceed pragmatically.",
    "examples": ["Er ist sehr pragmatisch.", "Eine pragmatische Lösung.", "Wir gehen pragmatisch vor."]
  },
  {
    "base": "subtil", "level": "C1",
    "comparison": { "positive": "subtil", "comparative": "subtiler", "superlative_predicative": "am subtilsten", "superlative_attributive": "subtilste" },
    "irregular": false,
    "declension_examples": { "strong": "subtiler (m)", "weak": "subtile (f)", "mixed": "subtiles (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["subtle", "fine", "nuanced"],
    "tip": "Used for fine distinctions, nuanced differences, or indirect approaches. Loanword from Latin.",
    "examples": ["Das ist ein subtiler Unterschied.", "Er hat subtil gehandelt.", "Subtile Kritik kann wirksamer sein."]
  },
  {
    "base": "autoritär", "level": "C1",
    "comparison": { "positive": "autoritär", "comparative": "autoritärer", "superlative_predicative": "am autoritärsten", "superlative_attributive": "autoritärste" },
    "irregular": false,
    "declension_examples": { "strong": "autoritärer (m)", "weak": "autoritäre (f)", "mixed": "autoritäres (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["authoritarian", "dictatorial"],
    "tip": "Political/social term. 'Autoritäre Führung' = authoritarian leadership. Antonym: demokratisch.",
    "examples": ["Der Staat ist autoritär.", "Ein autoritärer Führungsstil.", "Er regiert autoritär."]
  },
  {
    "base": "erheblich", "level": "C1",
    "comparison": { "positive": "erheblich", "comparative": "erheblicher", "superlative_predicative": "am erheblichsten", "superlative_attributive": "erheblichste" },
    "irregular": false,
    "declension_examples": { "strong": "erheblicher (m)", "weak": "erhebliche (f)", "mixed": "erhebliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["considerable", "significant", "substantial"],
    "tip": "Formal synonym for 'beträchtlich' and 'bedeutend'. Common in official and academic texts.",
    "examples": ["Das ist eine erhebliche Verbesserung.", "Die Kosten sind erheblich gestiegen.", "Es gibt erhebliche Unterschiede."]
  },
  {
    "base": "ausgewogen", "level": "C1",
    "comparison": { "positive": "ausgewogen", "comparative": "ausgewogener", "superlative_predicative": "am ausgewogensten", "superlative_attributive": "ausgewogenste" },
    "irregular": false,
    "declension_examples": { "strong": "ausgewogener (m)", "weak": "ausgewogene (f)", "mixed": "ausgewogenes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["balanced", "well-balanced"],
    "tip": "Partizip II of 'auswiegen' used as adjective. 'Eine ausgewogene Ernährung' = a balanced diet.",
    "collocations": ["ausgewogene Ernährung", "ausgewogene Berichterstattung", "ausgewogenes Urteil"],
    "examples": ["Eine ausgewogene Ernährung ist wichtig.", "Der Bericht ist ausgewogen.", "Er hat ein ausgewogenes Urteil."]
  },
  {
    "base": "willkürlich", "level": "C1",
    "comparison": { "positive": "willkürlich", "comparative": "willkürlicher", "superlative_predicative": "am willkürlichsten", "superlative_attributive": "willkürlichste" },
    "irregular": false,
    "declension_examples": { "strong": "willkürlicher (m)", "weak": "willkürliche (f)", "mixed": "willkürliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["arbitrary", "random", "capricious"],
    "tip": "Negative connotation: done without reason or rule. 'Willkürliche Entscheidung' = arbitrary decision.",
    "examples": ["Das ist eine willkürliche Entscheidung.", "Er handelt willkürlich.", "Diese Grenze ist willkürlich gezogen."]
  },
  {
    "base": "beharrlich", "level": "C1",
    "comparison": { "positive": "beharrlich", "comparative": "beharrlicher", "superlative_predicative": "am beharrlichsten", "superlative_attributive": "beharrlichste" },
    "irregular": false,
    "declension_examples": { "strong": "beharrlicher (m)", "weak": "beharrliche (f)", "mixed": "beharrliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["persistent", "tenacious", "steadfast"],
    "tip": "Positive connotation. 'Beharrlich an etwas festhalten' = to stick persistently to something.",
    "examples": ["Er arbeitet beharrlich an seinem Ziel.", "Beharrliche Bemühungen zahlen sich aus.", "Sie ist sehr beharrlich."]
  },
  {
    "base": "irreführend", "level": "C1",
    "comparison": { "positive": "irreführend", "comparative": "irreführender", "superlative_predicative": "am irreführendsten", "superlative_attributive": "irreführendste" },
    "irregular": false,
    "declension_examples": { "strong": "irreführender (m)", "weak": "irreführende (f)", "mixed": "irreführendes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["misleading", "deceptive"],
    "tip": "Partizip I of 'irreführen' used as adjective. 'Das ist irreführend' = That is misleading.",
    "examples": ["Die Werbung ist irreführend.", "Das ist ein irreführender Titel.", "Irreführende Informationen sind problematisch."]
  },
  {
    "base": "weitreichend", "level": "C1",
    "comparison": { "positive": "weitreichend", "comparative": "weitreichender", "superlative_predicative": "am weitreichendsten", "superlative_attributive": "weitreichendste" },
    "irregular": false,
    "declension_examples": { "strong": "weitreichender (m)", "weak": "weitreichende (f)", "mixed": "weitreichendes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["far-reaching", "sweeping", "wide-ranging"],
    "tip": "Used for decisions, consequences, or plans with broad impact. 'Weitreichende Konsequenzen' = far-reaching consequences.",
    "examples": ["Die Entscheidung hat weitreichende Folgen.", "Weitreichende Reformen sind nötig.", "Der Plan ist weitreichend."]
  },
  {
    "base": "trügerisch", "level": "C1",
    "comparison": { "positive": "trügerisch", "comparative": "trügerischer", "superlative_predicative": "am trügerischsten", "superlative_attributive": "trügerischste" },
    "irregular": false,
    "declension_examples": { "strong": "trügerischer (m)", "weak": "trügerische (f)", "mixed": "trügerisches (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["deceptive", "illusory", "treacherous"],
    "tip": "'Der Schein ist trügerisch' = appearances are deceptive (proverb). From the verb 'trügen' (to deceive).",
    "examples": ["Die Stille ist trügerisch.", "Das Eis ist trügerisch dünn.", "Trügerische Hoffnungen sind schädlich."]
  },
  {
    "base": "einschneidend", "level": "C1",
    "comparison": { "positive": "einschneidend", "comparative": "einschneidender", "superlative_predicative": "am einschneidendsten", "superlative_attributive": "einschneidendste" },
    "irregular": false,
    "declension_examples": { "strong": "einschneidender (m)", "weak": "einschneidende (f)", "mixed": "einschneidendes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["drastic", "radical", "incisive"],
    "tip": "Used for changes or events that cut deeply into something. 'Einschneidende Maßnahmen' = drastic measures.",
    "examples": ["Das war ein einschneidendes Erlebnis.", "Einschneidende Veränderungen im Leben.", "Die Maßnahmen sind einschneidend."]
  },
  {
    "base": "einstimmig", "level": "C1",
    "comparison": { "positive": "einstimmig", "comparative": "—", "superlative_predicative": "—", "superlative_attributive": "—" },
    "irregular": false,
    "declension_examples": { "strong": "einstimmiger (m)", "weak": "einstimmige (f)", "mixed": "einstimmiges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["unanimous", "unanimously"],
    "tip": "From 'Stimme' (voice/vote). 'Einstimmig beschlossen' = decided unanimously. No meaningful comparison.",
    "examples": ["Die Entscheidung war einstimmig.", "Sie haben einstimmig abgestimmt.", "Ein einstimmiger Beschluss."]
  },
  {
    "base": "unausweichlich", "level": "C1",
    "comparison": { "positive": "unausweichlich", "comparative": "unausweichlicher", "superlative_predicative": "am unausweichlichsten", "superlative_attributive": "unausweichlichste" },
    "irregular": false,
    "declension_examples": { "strong": "unausweichlicher (m)", "weak": "unausweichliche (f)", "mixed": "unausweichliches (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["unavoidable", "inevitable", "inescapable"],
    "tip": "Stronger and more formal than 'unvermeidbar'. 'Das ist unausweichlich' = That is inevitable.",
    "examples": ["Das Scheitern war unausweichlich.", "Eine unausweichliche Konsequenz.", "Der Konflikt war unausweichlich."]
  },
  {
    "base": "nüchtern", "level": "C1",
    "comparison": { "positive": "nüchtern", "comparative": "nüchterner", "superlative_predicative": "am nüchternsten", "superlative_attributive": "nüchternste" },
    "irregular": false,
    "declension_examples": { "strong": "nüchterner (m)", "weak": "nüchterne (f)", "mixed": "nüchternes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["sober", "clear-headed", "matter-of-fact"],
    "tip": "Multiple meanings: (1) not drunk, (2) fasting (medically), (3) clear-headed/rational in thinking. Context determines meaning.",
    "common_mistakes": ["'Nüchtern betrachtet' (viewed soberly/objectively) vs 'Er ist nüchtern' (he is not drunk/he is fasting)."],
    "examples": ["Er betrachtet die Lage nüchtern.", "Bitte kommen Sie nüchtern zum Arzttermin.", "Eine nüchterne Analyse."]
  },
  {
    "base": "maßgeblich", "level": "C1",
    "comparison": { "positive": "maßgeblich", "comparative": "maßgeblicher", "superlative_predicative": "am maßgeblichsten", "superlative_attributive": "maßgeblichste" },
    "irregular": false,
    "declension_examples": { "strong": "maßgeblicher (m)", "weak": "maßgebliche (f)", "mixed": "maßgebliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["decisive", "authoritative", "definitive"],
    "tip": "From 'Maßstab' (standard/benchmark). 'Maßgeblich daran beteiligt' = decisively involved in it.",
    "examples": ["Das ist die maßgebliche Entscheidung.", "Er war maßgeblich beteiligt.", "Die Norm ist maßgeblich."]
  }
];
export default adjectivesC1;
