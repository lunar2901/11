// verbs-db-c1.js
const verbsC1 = [
  {"base": "abwägen", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to weigh up", "to consider carefully", "to balance"], "conjugation": {"present_3sg": "wägt ab", "past_participle": "abgewogen"}, "examples": ["Man muss Vor- und Nachteile abwägen.", "Er wog seine Worte sorgfältig ab.", "Alle Faktoren wurden abgewogen.", "Bitte wägen Sie das gut ab."], "tip": "Separable: wägt ab."},
  {"base": "einräumen", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to concede", "to admit", "to grant"], "conjugation": {"present_3sg": "räumt ein", "past_participle": "eingeräumt"}, "examples": ["Er räumte ein, einen Fehler gemacht zu haben.", "Das muss ich einräumen.", "Sie räumte ein, dass die Kritik berechtigt war.", "Ich räume ein, dass ich Unrecht hatte."], "tip": "Separable: räumt ein. Conceding a point in argument."},
  {"base": "aufrechterhalten", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to maintain", "to uphold", "to sustain"], "conjugation": {"present_3sg": "erhält aufrecht", "past_participle": "aufrechterhalten"}, "examples": ["Der Druck muss aufrechterhalten werden.", "Die Ordnung wurde aufrechterhalten.", "Den Kontakt aufrechterhalten ist wichtig.", "Das System wurde trotz aller Schwierigkeiten aufrechterhalten."], "tip": "Complex separable compound."},
  {"base": "einwenden", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to object", "to raise an objection"], "conjugation": {"present_3sg": "wendet ein", "past_participle": "eingewandt"}, "examples": ["Er wandte ein, dass die Zeit nicht reiche.", "Was lässt sich dagegen einwenden?", "Sie wandte ein, dass das so nicht funktioniert.", "Niemand konnte etwas einwenden."], "tip": "Separable: wendet ein."},
  {"base": "veranschaulichen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to illustrate", "to demonstrate", "to make clear"], "conjugation": {"present_3sg": "veranschaulicht", "past_participle": "veranschaulicht"}, "examples": ["Das Beispiel veranschaulicht das Prinzip gut.", "Ein Diagramm kann das veranschaulichen.", "Lassen Sie mich das veranschaulichen.", "Der Vortrag veranschaulichte die Zusammenhänge."], "tip": "Used in academic and explanatory contexts."},
  {"base": "in Frage stellen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to question", "to call into question", "to challenge"], "conjugation": {"present_3sg": "stellt in Frage", "past_participle": "in Frage gestellt"}, "examples": ["Er stellte die Entscheidung in Frage.", "Das stellt unsere Annahmen in Frage.", "Die Ergebnisse wurden in Frage gestellt.", "Grundannahmen sollte man regelmäßig in Frage stellen."], "tip": "Idiomatic phrase functioning as a verb."},
  {"base": "erörtern", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to discuss", "to examine", "to analyse"], "conjugation": {"present_3sg": "erörtert", "past_participle": "erörtert"}, "examples": ["Das Thema wurde ausführlich erörtert.", "Wir müssen die Möglichkeiten erörtern.", "Die Frage wird im Bericht erörtert.", "Bitte erörtern Sie Ihre Position."], "tip": "Formal; common in academic writing."},
  {"base": "differenzieren", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to differentiate", "to make distinctions", "to nuance"], "conjugation": {"present_3sg": "differenziert", "past_participle": "differenziert"}, "examples": ["Man muss hier differenzieren.", "Er differenziert klar zwischen den Konzepten.", "Das lässt sich nicht so einfach differenzieren.", "Ein differenziertes Urteil ist wichtig."], "tip": "Also reflexive: sich differenzieren."},
  {"base": "einschränken", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to restrict", "to limit", "to qualify"], "conjugation": {"present_3sg": "schränkt ein", "past_participle": "eingeschränkt"}, "examples": ["Das schränkt uns stark ein.", "Die Freiheit wird eingeschränkt.", "Er schränkte seine Aussage ein.", "Haushaltskürzungen schränken die Möglichkeiten ein."], "tip": "Separable: schränkt ein."},
  {"base": "abwenden", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to avert", "to ward off", "to turn away"], "conjugation": {"present_3sg": "wendet ab", "past_participle": "abgewendet"}, "examples": ["Eine Katastrophe wurde abgewendet.", "Er wandte den Blick ab.", "Die Krise konnte abgewendet werden.", "Sie wendete das Schlimmste ab."], "tip": "Separable: wendet ab."},
  {"base": "bekräftigen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to confirm", "to reinforce", "to reaffirm"], "conjugation": {"present_3sg": "bekräftigt", "past_participle": "bekräftigt"}, "examples": ["Er bekräftigte seine Aussage.", "Das bekräftigt meinen Verdacht.", "Die Ergebnisse bekräftigen die Theorie.", "Sie bekräftigte ihre Forderungen."], "tip": "Emphasizing or strengthening a claim."},
  {"base": "darlegen", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to set out", "to present", "to explain", "to expound"], "conjugation": {"present_3sg": "legt dar", "past_participle": "dargelegt"}, "examples": ["Er legte seine Position dar.", "Bitte legen Sie Ihre Sichtweise dar.", "Die Argumente wurden klar dargelegt.", "Sie legte die Risiken ausführlich dar."], "tip": "Separable: legt dar. Formal presentation of a position."},
  {"base": "hinterfragen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to question critically", "to examine", "to scrutinize"], "conjugation": {"present_3sg": "hinterfragt", "past_participle": "hinterfragt"}, "examples": ["Man sollte seine Überzeugungen hinterfragen.", "Das System muss hinterfragt werden.", "Niemand hinterfragt das.", "Er hinterfragt alles."], "tip": "Implies critical examination, not just questioning."},
  {"base": "überwiegen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to predominate", "to outweigh", "to prevail"], "conjugation": {"present_3sg": "überwiegt", "past_participle": "überwogen"}, "examples": ["Die Vorteile überwiegen.", "In diesem Fall überwiegen die Risiken.", "Positive Aspekte überwiegen die negativen.", "Skepsis überwiegt momentan."], "tip": "Common in comparative analysis."},
  {"base": "veranlassen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to cause", "to prompt", "to arrange"], "conjugation": {"present_3sg": "veranlasst", "past_participle": "veranlasst"}, "examples": ["Was hat Sie dazu veranlasst?", "Er veranlasste die nötigen Schritte.", "Das veranlasste mich zum Nachdenken.", "Eine Überprüfung wurde veranlasst."], "tip": "Formal; often used in passive."},
  {"base": "verdeutlichen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to clarify", "to make clear", "to illustrate"], "conjugation": {"present_3sg": "verdeutlicht", "past_participle": "verdeutlicht"}, "examples": ["Das verdeutlicht das Problem.", "Können Sie das verdeutlichen?", "Ein Beispiel soll das verdeutlichen.", "Die Grafik verdeutlicht die Entwicklung."], "tip": "Slightly stronger than 'erklären'."},
  {"base": "widerlegen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to refute", "to disprove", "to rebut"], "conjugation": {"present_3sg": "widerlegt", "past_participle": "widerlegt"}, "examples": ["Die Theorie wurde widerlegt.", "Er konnte die Behauptung nicht widerlegen.", "Das Argument ist leicht zu widerlegen.", "Neue Beweise widerlegten die Hypothese."], "tip": "Used in academic and logical argumentation."},
  {"base": "nahelegen", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to suggest", "to imply", "to recommend strongly"], "conjugation": {"present_3sg": "legt nahe", "past_participle": "nahegelegt"}, "examples": ["Die Daten legen nahe, dass er recht hat.", "Was legt das nahe?", "Der Befund legt eine weitere Untersuchung nahe.", "Es liegt nahe, dass..."], "tip": "Separable: legt nahe. Implies a strong suggestion without commanding."},
  {"base": "unterstreichen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to underline", "to emphasize", "to highlight"], "conjugation": {"present_3sg": "unterstreicht", "past_participle": "unterstrichen"}, "examples": ["Das unterstreicht die Bedeutung des Themas.", "Er unterstrich seine Worte mit Gesten.", "Die Ergebnisse unterstreichen die Notwendigkeit.", "Sie unterstrich ihre Forderungen."], "tip": "Both literal (underlining text) and figurative use."},
  {"base": "abzielen", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to aim at", "to target", "to be directed at"], "conjugation": {"present_3sg": "zielt ab", "past_participle": "abgezielt"}, "examples": ["Das Gesetz zielt auf Chancengleichheit ab.", "Worauf zielt diese Frage ab?", "Die Maßnahme zielt auf eine Verhaltensänderung ab.", "Die Kampagne zielte auf junge Wähler ab."], "tip": "Separable: zielt ab. Always with 'auf + Akkusativ'."},
,
  {
    "base": "implizieren",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "impliziere",
        "du": "implizierst",
        "er": "impliziert"
      },
      "perfect": "hat impliziert",
      "preterite": "implizierte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to imply",
      "to entail"
    ],
    "examples": [
      "Das impliziert, dass er luegt.",
      "Deine Aussage impliziert einen Widerspruch.",
      "Was impliziert das fuer die Forschung?"
    ],
    "tip": "Academic/formal. Use 'bedeuten' or 'andeuten' in everyday speech instead."
  },
  {
    "base": "ueberwaeltigen",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "ueberwaeltige",
        "du": "ueberwaeltigst",
        "er": "ueberwaeltigt"
      },
      "perfect": "hat ueberwaeltigt",
      "preterite": "ueberwaeltigte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to overwhelm",
      "to overpower"
    ],
    "examples": [
      "Die Schoenheit der Landschaft ueberwaeltigte sie.",
      "Er wurde von seinen Gefuehlen ueberwaeltigt.",
      "Das Ergebnis hat mich ueberwaeltigt."
    ],
    "tip": "Often used in passive or reflexive constructions. Emotional impact is key connotation.",
    "base_display": "überwältigen"
  },
  {
    "base": "hervorgehen",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "gehe hervor",
        "du": "gehst hervor",
        "er": "geht hervor"
      },
      "perfect": "ist hervorgegangen",
      "preterite": "ging hervor"
    },
    "auxiliary": "sein",
    "is_separable": true,
    "translations": [
      "to emerge from",
      "to result from",
      "to follow from"
    ],
    "examples": [
      "Aus der Studie geht hervor, dass der Ansatz funktioniert.",
      "Daraus geht hervor, dass er recht hat.",
      "Was geht aus dem Dokument hervor?"
    ],
    "tip": "Uses SEIN. Key phrase: 'Aus X geht hervor, dass...' = it emerges from X that. Essential for academic writing."
  },
  {
    "base": "praegen",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "praege",
        "du": "praegst",
        "er": "praegt"
      },
      "perfect": "hat geplaegt",
      "preterite": "praegte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to shape",
      "to characterise",
      "to coin a term"
    ],
    "examples": [
      "Die Kindheit praegt den Menschen.",
      "Er hat diesen Begriff geplaegt.",
      "Das Erlebnis hat sie tief geplaegt."
    ],
    "tip": "Three meanings: shape/influence, characterise, and coin a term. All common in academic writing.",
    "base_display": "prägen"
  },
  {
    "base": "reflektieren",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "reflektiere",
        "du": "reflektierst",
        "er": "reflektiert"
      },
      "perfect": "hat reflektiert",
      "preterite": "reflektierte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to reflect on",
      "to reflect light"
    ],
    "examples": [
      "Wir muessen ueber unser Handeln reflektieren.",
      "Das Glas reflektiert das Licht.",
      "Er reflektiert seine eigenen Fehler kaum."
    ],
    "tip": "ueber + acc: to reflect on something. Also literal (light/mirror). Key word for academic and philosophical texts."
  },
  {
    "base": "verwerfen",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "verwerfe",
        "du": "verwirfst",
        "er": "verwirft"
      },
      "perfect": "hat verworfen",
      "preterite": "verwarf"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to reject",
      "to dismiss",
      "to discard"
    ],
    "examples": [
      "Das Gericht hat die Klage verworfen.",
      "Wir muessen diesen Plan verwerfen.",
      "Ihre Theorie wurde von der Gemeinschaft verworfen."
    ],
    "tip": "More decisive/final than 'ablehnen'. Used in legal, scientific, and formal decision-making contexts."
  },
  {
    "base": "erschliessen",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "erschliesse",
        "du": "erschliesst",
        "er": "erschliesst"
      },
      "perfect": "hat erschlossen",
      "preterite": "erschloss"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to develop",
      "to open up",
      "to infer"
    ],
    "examples": [
      "Das Unternehmen erschliesst neue Maerkte.",
      "Neue Erkenntnisse lassen sich daraus erschliessen.",
      "Das Gebiet wurde erschlossen."
    ],
    "tip": "Three uses: 1) develop territory/market, 2) infer/deduce, 3) sich erschliessen = become clear. Academic and economic contexts.",
    "base_display": "erschließen"
  },
  {
    "base": "begruenden",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "begruende",
        "du": "begruendest",
        "er": "begruendet"
      },
      "perfect": "hat begruendet",
      "preterite": "begruendete"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to justify",
      "to give reasons for",
      "to found (an institution)"
    ],
    "examples": [
      "Sie hat ihre Entscheidung gut begruendet.",
      "Das Unternehmen wurde 1990 begruendet.",
      "Wie begruenden Sie Ihre These?"
    ],
    "tip": "Two meanings: 1) justify/give reasons (very common in formal writing), 2) found/establish an organisation.",
    "base_display": "begründen"
  },
{
    "base": "inbetrachtziehen",
    "level": "C1",
    "separable": false,
    "translations": ["to consider", "to take into consideration"],
    "tip": "Often written as 'in Betracht ziehen' (two words). Formal and used in written/academic German.",
    "present": {"ich": "ziehe in Betracht", "du": "ziehst in Betracht", "er_sie_es": "zieht in Betracht", "wir": "ziehen in Betracht", "ihr": "zieht in Betracht", "sie_Sie": "ziehen in Betracht"},
    "past_tenses": {"präteritum": "zog in Betracht", "partizip_ii": "in Betracht gezogen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat in Betracht gezogen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "in Betracht ziehen + Akkusativ", "prepositions": [], "explanation": "Take something into consideration.", "examples": ["Wir ziehen alle Optionen in Betracht.", "Das muss in Betracht gezogen werden.", "Haben Sie das in Betracht gezogen?"]}]
  },
  {
    "base": "gewährleisten",
    "level": "C1",
    "translations": ["to ensure", "to guarantee", "to safeguard"],
    "tip": "Formal verb, common in legal, political, and official contexts. Stronger than sicherstellen.",
    "present": {"ich": "gewährleiste", "du": "gewährleistest", "er_sie_es": "gewährleistet", "wir": "gewährleisten", "ihr": "gewährleistet", "sie_Sie": "gewährleisten"},
    "past_tenses": {"präteritum": "gewährleistete", "partizip_ii": "gewährleistet"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gewährleistet"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "gewährleisten + Akkusativ", "prepositions": [], "explanation": "Guarantee or ensure something.", "examples": ["Das Gesetz gewährleistet die Grundrechte.", "Die Sicherheit muss gewährleistet werden.", "Das kann ich nicht gewährleisten."]}]
  },
  {
    "base": "herbeiführen",
    "level": "C1",
    "separable": true,
    "separable_prefix": "herbei",
    "translations": ["to bring about", "to cause", "to produce"],
    "tip": "Formal. Refers to causing or producing a change, outcome, or situation.",
    "present": {"ich": "führe herbei", "du": "führst herbei", "er_sie_es": "führt herbei", "wir": "führen herbei", "ihr": "führt herbei", "sie_Sie": "führen herbei"},
    "past_tenses": {"präteritum": "führte herbei", "partizip_ii": "herbeigeführt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat herbeigeführt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "herbeiführen + Akkusativ", "prepositions": [], "explanation": "Bring about or cause a result.", "examples": ["Die Reform hat Veränderungen herbeigeführt.", "Er hat den Wandel herbeigeführt.", "Das kann eine Einigung herbeiführen."]}]
  },
  {
    "base": "veranschaulichen",
    "level": "C1",
    "translations": ["to illustrate", "to demonstrate", "to make clear"],
    "tip": "Academic and formal. Used to clarify abstract ideas with examples or visuals.",
    "present": {"ich": "veranschauliche", "du": "veranschaulichst", "er_sie_es": "veranschaulicht", "wir": "veranschaulichen", "ihr": "veranschaulicht", "sie_Sie": "veranschaulichen"},
    "past_tenses": {"präteritum": "veranschaulichte", "partizip_ii": "veranschaulicht"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat veranschaulicht"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "veranschaulichen + Akkusativ", "prepositions": [], "explanation": "Illustrate or make something concrete.", "examples": ["Das Beispiel veranschaulicht den Punkt.", "Er veranschaulicht das Prinzip mit Grafiken.", "Diese Statistik veranschaulicht das Problem."]}]
  },
  {
    "base": "abwägen",
    "level": "C1",
    "separable": true,
    "separable_prefix": "ab",
    "translations": ["to weigh up", "to consider carefully", "to balance"],
    "tip": "Used for carefully weighing pros and cons. Vor- und Nachteile abwägen = to weigh up advantages and disadvantages.",
    "present": {"ich": "wäge ab", "du": "wägst ab", "er_sie_es": "wägt ab", "wir": "wägen ab", "ihr": "wägt ab", "sie_Sie": "wägen ab"},
    "past_tenses": {"präteritum": "wog ab", "partizip_ii": "abgewogen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat abgewogen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "abwägen + Akkusativ (gegen)", "prepositions": ["gegen"], "explanation": "Carefully weigh up options.", "examples": ["Ich wäge die Optionen ab.", "Er hat die Vor- und Nachteile abgewogen.", "Man muss Risiken und Chancen abwägen."]}]
  },
  {
    "base": "einwenden",
    "level": "C1",
    "separable": true,
    "separable_prefix": "ein",
    "translations": ["to object", "to raise an objection"],
    "tip": "Formal. Often in legal, academic, or debate contexts. Etwas einwenden gegen = to object to something.",
    "present": {"ich": "wende ein", "du": "wendest ein", "er_sie_es": "wendet ein", "wir": "wenden ein", "ihr": "wendet ein", "sie_Sie": "wenden ein"},
    "past_tenses": {"präteritum": "wandte ein", "partizip_ii": "eingewandt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat eingewandt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "einwenden + dass / gegen + Akkusativ", "prepositions": ["gegen"], "explanation": "Raise an objection.", "examples": ["Er wendet ein, dass das zu teuer ist.", "Ich habe nichts einzuwenden.", "Sie wandte ein, dass das falsch sei."]}]
  }
];

window.verbsC1 = verbsC1;
