// verbs-db-b2.js
const verbsB2 = [
  {"base": "behaupten", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to claim", "to assert", "to maintain"], "conjugation": {"present_3sg": "behauptet", "past_participle": "behauptet"}, "examples": ["Er behauptet, unschuldig zu sein.", "Sie behauptet, alles gewusst zu haben.", "Das lässt sich nicht behaupten.", "Man kann nicht einfach behaupten, dass das stimmt."], "tip": "Requires 'zu' + infinitive or a subordinate clause."},
  {"base": "begründen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to justify", "to give reasons for", "to found"], "conjugation": {"present_3sg": "begründet", "past_participle": "begründet"}, "examples": ["Er begründete seine Entscheidung ausführlich.", "Wie begründen Sie das?", "Die Kritik ist gut begründet.", "Das Unternehmen wurde 1990 begründet."], "tip": "Can also mean 'to establish/found'."},
  {"base": "überzeugen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": true, "translations": ["to convince", "to persuade"], "conjugation": {"present_3sg": "überzeugt", "past_participle": "überzeugt"}, "examples": ["Er überzeugte die Gruppe von seiner Idee.", "Ich konnte ihn nicht überzeugen.", "Das Argument überzeugt mich nicht.", "Sie ist von ihrer Meinung überzeugt."], "tip": "Reflexive: sich überzeugen = to satisfy oneself, check."},
  {"base": "vermeiden", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to avoid", "to prevent"], "conjugation": {"present_3sg": "vermeidet", "past_participle": "vermieden"}, "examples": ["Man sollte Missverständnisse vermeiden.", "Sie vermied es, das Thema anzusprechen.", "Konflikte lassen sich nicht immer vermeiden.", "Ich versuche, Fehler zu vermeiden."], "tip": "Takes 'zu' + infinitive."},
  {"base": "vorschlagen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to suggest", "to propose", "to recommend"], "conjugation": {"present_3sg": "schlägt vor", "past_participle": "vorgeschlagen"}, "examples": ["Er schlug einen Kompromiss vor.", "Ich schlage vor, dass wir pausieren.", "Was würdest du vorschlagen?", "Sie schlug eine neue Strategie vor."], "tip": "Separable: schlägt vor. Takes Dativ of person + Akkusativ of thing."},
  {"base": "ablehnen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to reject", "to refuse", "to decline"], "conjugation": {"present_3sg": "lehnt ab", "past_participle": "abgelehnt"}, "examples": ["Der Antrag wurde abgelehnt.", "Er lehnte das Angebot ab.", "Sie lehnte es ab, das zu kommentieren.", "Den Vorschlag muss ich ablehnen."], "tip": "Separable: lehnt ab."},
  {"base": "genehmigen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to approve", "to authorize", "to permit"], "conjugation": {"present_3sg": "genehmigt", "past_participle": "genehmigt"}, "examples": ["Der Antrag wurde genehmigt.", "Das Projekt wurde von der Behörde genehmigt.", "Können Sie das genehmigen?", "Die Baugenehmigung wurde erteilt."], "tip": "Official/formal approval."},
  {"base": "ausdrücken", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": true, "translations": ["to express", "to articulate"], "conjugation": {"present_3sg": "drückt aus", "past_participle": "ausgedrückt"}, "examples": ["Er drückte seine Meinung klar aus.", "Wie kann ich das ausdrücken?", "Sie drückte ihre Dankbarkeit aus.", "Manchmal ist es schwer, Gefühle auszudrücken."], "tip": "Separable: drückt aus. Reflexive possible: sich ausdrücken."},
  {"base": "zunehmen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to increase", "to grow", "to gain weight"], "conjugation": {"present_3sg": "nimmt zu", "past_participle": "zugenommen"}, "examples": ["Die Nachfrage nimmt zu.", "Er hat in letzter Zeit zugenommen.", "Die Probleme nehmen zu.", "Der Verkehr nimmt täglich zu."], "tip": "Separable: nimmt zu. Context determines meaning."},
  {"base": "abnehmen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to decrease", "to lose weight", "to take off"], "conjugation": {"present_3sg": "nimmt ab", "past_participle": "abgenommen"}, "examples": ["Die Zahl der Beschwerden nimmt ab.", "Sie hat fünf Kilo abgenommen.", "Die Temperatur nimmt ab.", "Niemand nimmt das Telefon ab."], "tip": "Separable: nimmt ab. Multiple meanings by context."},
  {"base": "herausfinden", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to find out", "to discover", "to figure out"], "conjugation": {"present_3sg": "findet heraus", "past_participle": "herausgefunden"}, "examples": ["Ich habe herausgefunden, warum das passiert.", "Kannst du herausfinden, wer das war?", "Es wurde herausgefunden, dass sie recht hatte.", "Wie findest du das heraus?"], "tip": "Separable: findet heraus."},
  {"base": "berücksichtigen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to take into account", "to consider", "to factor in"], "conjugation": {"present_3sg": "berücksichtigt", "past_participle": "berücksichtigt"}, "examples": ["Bitte berücksichtigen Sie alle Faktoren.", "Dieser Aspekt wurde nicht berücksichtigt.", "Wir müssen die Kosten berücksichtigen.", "Die Bedürfnisse der Mitarbeiter wurden berücksichtigt."], "tip": "Often used in formal/professional contexts."},
  {"base": "anpassen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": true, "translations": ["to adapt", "to adjust", "to tailor"], "conjugation": {"present_3sg": "passt an", "past_participle": "angepasst"}, "examples": ["Er hat seinen Stil angepasst.", "Du musst dich an die neue Situation anpassen.", "Die Pläne wurden angepasst.", "Das Programm lässt sich individuell anpassen."], "tip": "Separable: passt an. Reflexive: sich anpassen."},
  {"base": "auffordern", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to call on", "to ask", "to invite", "to urge"], "conjugation": {"present_3sg": "fordert auf", "past_participle": "aufgefordert"}, "examples": ["Er wurde aufgefordert, das Gebäude zu verlassen.", "Ich fordere Sie auf, Stellung zu nehmen.", "Die Polizei forderte ihn auf anzuhalten.", "Sie wurde aufgefordert, eine Erklärung abzugeben."], "tip": "Separable: fordert auf. Formal request or demand."},
  {"base": "widersprechen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to contradict", "to oppose", "to object to"], "conjugation": {"present_3sg": "widerspricht", "past_participle": "widersprochen"}, "examples": ["Er widersprach mir direkt.", "Das widerspricht den Tatsachen.", "Ich muss Ihnen widersprechen.", "Das widerspricht seiner früheren Aussage."], "tip": "Takes Dativ: jemandem widersprechen."},
  {"base": "auswirken", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": true, "translations": ["to affect", "to have an effect on", "to impact"], "conjugation": {"present_3sg": "wirkt aus", "past_participle": "ausgewirkt"}, "examples": ["Das wirkt sich auf die Qualität aus.", "Wie wirkt sich das aus?", "Die Entscheidung hat sich negativ ausgewirkt.", "Stress wirkt sich auf die Gesundheit aus."], "tip": "Always reflexive: sich auswirken auf + Akkusativ."},
  {"base": "einschätzen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to assess", "to evaluate", "to judge", "to estimate"], "conjugation": {"present_3sg": "schätzt ein", "past_participle": "eingeschätzt"}, "examples": ["Ich schätze die Lage falsch ein.", "Wie schätzen Sie das ein?", "Das Risiko wurde unterschätzt.", "Er ist schwer einzuschätzen."], "tip": "Separable: schätzt ein."},
  {"base": "voraussetzen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to presuppose", "to require", "to assume"], "conjugation": {"present_3sg": "setzt voraus", "past_participle": "vorausgesetzt"}, "examples": ["Das setzt bestimmte Kenntnisse voraus.", "Gute Deutschkenntnisse werden vorausgesetzt.", "Ich setze voraus, dass du das weißt.", "Das setzt gegenseitiges Vertrauen voraus."], "tip": "Separable: setzt voraus."},
  {"base": "nachweisen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to prove", "to demonstrate", "to verify"], "conjugation": {"present_3sg": "weist nach", "past_participle": "nachgewiesen"}, "examples": ["Er konnte seine Unschuld nachweisen.", "Das wurde wissenschaftlich nachgewiesen.", "Schuld muss nachgewiesen werden.", "Können Sie das nachweisen?"], "tip": "Separable: weist nach."},
  {"base": "umsetzen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to implement", "to put into practice", "to convert"], "conjugation": {"present_3sg": "setzt um", "past_participle": "umgesetzt"}, "examples": ["Die Pläne wurden umgesetzt.", "Wie setzt man das um?", "Die Strategie wurde erfolgreich umgesetzt.", "Ideen in die Tat umsetzen."], "tip": "Separable: setzt um."},
  {"base": "beitragen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to contribute", "to help bring about"], "conjugation": {"present_3sg": "trägt bei", "past_participle": "beigetragen"}, "examples": ["Er trägt viel zum Erfolg bei.", "Was kann ich beitragen?", "Jeder kann zur Lösung beitragen.", "Das trägt zur Qualität bei."], "tip": "Separable: trägt bei. Takes zu + Dativ."},
  {"base": "vereinbaren", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to agree on", "to arrange", "to settle"], "conjugation": {"present_3sg": "vereinbart", "past_participle": "vereinbart"}, "examples": ["Wir haben einen Termin vereinbart.", "Das wurde so vereinbart.", "Bitte vereinbaren Sie einen Termin.", "Die Bedingungen wurden vereinbart."], "tip": "Common in professional and planning contexts."},
  {"base": "gewährleisten", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to ensure", "to guarantee", "to safeguard"], "conjugation": {"present_3sg": "gewährleistet", "past_participle": "gewährleistet"}, "examples": ["Die Sicherheit muss gewährleistet werden.", "Das kann ich nicht gewährleisten.", "Qualität wird gewährleistet.", "Der Vertrag gewährleistet bestimmte Rechte."], "tip": "Formal; often used in legal/official language."},
  {"base": "beeinflussen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to influence", "to affect"], "conjugation": {"present_3sg": "beeinflusst", "past_participle": "beeinflusst"}, "examples": ["Das Wetter beeinflusst meine Stimmung.", "Werbung beeinflusst das Kaufverhalten.", "Wer hat ihn beeinflusst?", "Die Entscheidung wird von vielen Faktoren beeinflusst."], "tip": "Common in analytical and descriptive contexts."},
  {"base": "zurückführen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to attribute to", "to trace back to"], "conjugation": {"present_3sg": "führt zurück", "past_participle": "zurückgeführt"}, "examples": ["Das lässt sich auf Stress zurückführen.", "Der Fehler wird auf einen Irrtum zurückgeführt.", "Worauf führen Sie das zurück?", "Die Ursache wurde auf einen Mangel zurückgeführt."], "tip": "Separable: führt zurück. Always with 'auf + Akkusativ'."},
,
  {
    "base": "durchsetzen",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "setze durch",
        "du": "setzt durch",
        "er": "setzt durch"
      },
      "perfect": "hat durchgesetzt",
      "preterite": "setzte durch"
    },
    "auxiliary": "haben",
    "is_separable": true,
    "translations": [
      "to enforce",
      "to assert",
      "to prevail"
    ],
    "examples": [
      "Er konnte seine Meinung durchsetzen.",
      "Das Gesetz muss durchgesetzt werden.",
      "Sie hat sich in der Diskussion durchgesetzt."
    ],
    "tip": "sich durchsetzen (reflexive) = to prevail / get one's way. Very common in professional and political contexts."
  },
  {
    "base": "gefaehrden",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "gefaehrde",
        "du": "gefaehrdest",
        "er": "gefaehrdet"
      },
      "perfect": "hat gefaehrdet",
      "preterite": "gefaehrdete"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to endanger",
      "to threaten",
      "to jeopardise"
    ],
    "examples": [
      "Das gefaehrdet die oeffentliche Sicherheit.",
      "Rauchen gefaehrdet Ihre Gesundheit.",
      "Der Sturm gefaehrdet die Ernte."
    ],
    "tip": "Derived from 'Gefahr' (danger). Common in news media, health, and environment discussions.",
    "base_display": "gefährden"
  },
  {
    "base": "entsprechen",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "entspreche",
        "du": "entsprichst",
        "er": "entspricht"
      },
      "perfect": "hat entsprochen",
      "preterite": "entsprach"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to correspond to",
      "to comply with",
      "to meet requirements"
    ],
    "examples": [
      "Das entspricht meinen Erwartungen.",
      "Das Produkt entspricht nicht dem Standard.",
      "Der Bericht entspricht den Fakten."
    ],
    "tip": "Takes DATIVE: etwas (dat) entsprechen. Key phrase: den Anforderungen entsprechen = meet requirements."
  },
  {
    "base": "verleihen",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "verleihe",
        "du": "verleihst",
        "er": "verleiht"
      },
      "perfect": "hat verliehen",
      "preterite": "verlieh"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to lend",
      "to award",
      "to confer"
    ],
    "examples": [
      "Die Stadt verleiht ihm den Preis.",
      "Das verleiht dem Wort eine andere Bedeutung.",
      "Man hat ihr die Ehrenbuergerschaft verliehen."
    ],
    "tip": "Different from 'leihen' — verleihen is more formal and also means to award or confer an honour."
  },
  {
    "base": "scheitern",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "scheitere",
        "du": "scheiterst",
        "er": "scheitert"
      },
      "perfect": "ist gescheitert",
      "preterite": "scheiterte"
    },
    "auxiliary": "sein",
    "is_separable": false,
    "translations": [
      "to fail",
      "to founder"
    ],
    "examples": [
      "Das Projekt ist gescheitert.",
      "Viele Ehen scheitern an Kommunikationsproblemen.",
      "Der Plan scheiterte an fehlendem Geld."
    ],
    "tip": "Uses SEIN as auxiliary. Often followed by 'an + dative' to give the reason for failure."
  },
  {
    "base": "einbeziehen",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "beziehe ein",
        "du": "beziehst ein",
        "er": "bezieht ein"
      },
      "perfect": "hat einbezogen",
      "preterite": "bezog ein"
    },
    "auxiliary": "haben",
    "is_separable": true,
    "translations": [
      "to include",
      "to involve",
      "to factor in"
    ],
    "examples": [
      "Wir muessen alle Faktoren einbeziehen.",
      "Die Bevoelkerung sollte einbezogen werden.",
      "Das wurde nicht einbezogen."
    ],
    "tip": "Separable: bezieht ein. More formal than 'einschliessen'. Key in professional and political language."
  },
  {
    "base": "staerken",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "staerke",
        "du": "staerkst",
        "er": "staerkt"
      },
      "perfect": "hat gestaerkt",
      "preterite": "staerkte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to strengthen",
      "to reinforce"
    ],
    "examples": [
      "Das staerkt das Vertrauen.",
      "Sport staerkt den Koerper.",
      "Diese Massnahme soll die Wirtschaft staerken."
    ],
    "tip": "Derived from 'stark' (strong). Common in political, economic, and motivational contexts.",
    "base_display": "stärken"
  }
];

window.verbsB2 = verbsB2;
