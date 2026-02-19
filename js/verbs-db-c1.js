// verbs-db-c1.js — C1 Advanced German Verbs (comprehensive)
const verbsC1 = [
  {
    "base": "abwägen",
    "level": "C1", "reflexive": false, "separable": true, "separable_prefix": "ab",
    "translations": ["to weigh up", "to consider carefully", "to balance"],
    "tip": "Separable. Used for carefully balancing pros and cons. 'Vor- und Nachteile abwägen' = to weigh advantages and disadvantages.",
    "common_mistakes": ["Don't confuse with 'überlegen' (general thinking) — 'abwägen' specifically implies comparing two sides."],
    "present": { "ich": "wäge ab", "du": "wägst ab", "er_sie_es": "wägt ab", "wir": "wägen ab", "ihr": "wägt ab", "sie_Sie": "wägen ab" },
    "imperative": { "du": "wäg ab!", "ihr": "wägt ab!", "Sie": "wägen Sie ab!" },
    "past_tenses": { "präteritum": "wog ab", "partizip_ii": "abgewogen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat abgewogen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "abwägen + Akkusativ (gegen Akkusativ)", "prepositions": ["gegen"], "explanation": "To weigh something against something else.", "examples": ["Ich wäge die Vor- und Nachteile ab.", "Er wägt das Risiko gegen den Nutzen ab.", "Die Optionen müssen sorgfältig abgewogen werden."], "derived": null }
    ]
  },
  {
    "base": "einräumen",
    "level": "C1", "reflexive": false, "separable": true, "separable_prefix": "ein",
    "translations": ["to admit", "to concede", "to grant"],
    "tip": "Separable. Used in debates and discussions to concede a point. 'Einräumen, dass...' = to admit/concede that...",
    "present": { "ich": "räume ein", "du": "räumst ein", "er_sie_es": "räumt ein", "wir": "räumen ein", "ihr": "räumt ein", "sie_Sie": "räumen ein" },
    "imperative": { "du": "räum ein!", "ihr": "räumt ein!", "Sie": "räumen Sie ein!" },
    "past_tenses": { "präteritum": "räumte ein", "partizip_ii": "eingeräumt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat eingeräumt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "einräumen + dass-Satz", "prepositions": [], "explanation": "To concede/admit that something is true.", "examples": ["Er räumt ein, dass er einen Fehler gemacht hat.", "Man muss einräumen, dass das schwierig ist.", "Die Regierung räumt Probleme ein."], "derived": null },
      { "label": "einräumen + Akkusativ + Dativ", "prepositions": [], "explanation": "To grant someone something.", "examples": ["Man räumte ihr mehr Zeit ein.", "Er räumte ihm Sonderrechte ein."], "derived": null }
    ]
  },
  {
    "base": "aufrechterhalten",
    "level": "C1", "reflexive": false, "separable": true, "separable_prefix": "aufrecht",
    "translations": ["to maintain", "to uphold", "to sustain"],
    "tip": "Separable (aufrecht + erhalten). Used for maintaining standards, positions, or relationships.",
    "present": { "ich": "erhalte aufrecht", "du": "erhältst aufrecht", "er_sie_es": "erhält aufrecht", "wir": "erhalten aufrecht", "ihr": "erhaltet aufrecht", "sie_Sie": "erhalten aufrecht" },
    "imperative": { "du": "erhalte aufrecht!", "ihr": "erhaltet aufrecht!", "Sie": "erhalten Sie aufrecht!" },
    "past_tenses": { "präteritum": "erhielt aufrecht", "partizip_ii": "aufrechterhalten" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat aufrechterhalten" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "aufrechterhalten + Akkusativ", "prepositions": [], "explanation": "To maintain or sustain something.", "examples": ["Sie hat die Kontakte aufrechterhalten.", "Er erhält seine Position aufrecht.", "Den Dialog aufrechterhalten."], "derived": null }
    ]
  },
  {
    "base": "einwenden",
    "level": "C1", "reflexive": false, "separable": true, "separable_prefix": "ein",
    "translations": ["to object", "to raise an objection"],
    "tip": "Separable. Formal. Used in debates, legal, and academic contexts. Noun: der Einwand (objection).",
    "present": { "ich": "wende ein", "du": "wendest ein", "er_sie_es": "wendet ein", "wir": "wenden ein", "ihr": "wendet ein", "sie_Sie": "wenden ein" },
    "imperative": { "du": "wend ein!", "ihr": "wendet ein!", "Sie": "wenden Sie ein!" },
    "past_tenses": { "präteritum": "wandte / wendete ein", "partizip_ii": "eingewandt / eingewendet" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat eingewandt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "einwenden, dass... / gegen Akkusativ", "prepositions": ["gegen"], "explanation": "To object that / to raise an objection against.", "examples": ["Er wandte ein, dass das nicht stimmt.", "Dagegen lässt sich einwenden, dass...", "Sie wandte nichts ein."], "derived": null }
    ]
  },
  {
    "base": "veranschaulichen",
    "level": "C1", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to illustrate", "to demonstrate", "to visualize"],
    "tip": "Used in academic writing and presentations. 'Anhand eines Beispiels veranschaulichen' = to illustrate using an example.",
    "present": { "ich": "veranschauliche", "du": "veranschaulichst", "er_sie_es": "veranschaulicht", "wir": "veranschaulichen", "ihr": "veranschaulicht", "sie_Sie": "veranschaulichen" },
    "imperative": { "du": "veranschauliche!", "ihr": "veranschaulicht!", "Sie": "veranschaulichen Sie!" },
    "past_tenses": { "präteritum": "veranschaulichte", "partizip_ii": "veranschaulicht" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat veranschaulicht" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "veranschaulichen + Akkusativ (+ an + Dativ)", "prepositions": ["an", "anhand"], "explanation": "To illustrate something (with examples).", "examples": ["Er veranschaulicht die Theorie anhand von Beispielen.", "Das Diagramm veranschaulicht den Zusammenhang.", "Ich möchte das veranschaulichen."], "derived": null }
    ]
  },
  {
    "base": "sich beziehen",
    "level": "C1", "reflexive": true, "separable": false, "separable_prefix": null,
    "translations": ["to refer to", "to relate to"],
    "tip": "Always reflexive in this meaning. 'Sich beziehen auf' = to refer to. Common in academic and formal language.",
    "present": { "ich": "beziehe mich", "du": "beziehst dich", "er_sie_es": "bezieht sich", "wir": "beziehen uns", "ihr": "bezieht euch", "sie_Sie": "beziehen sich" },
    "imperative": { "du": "beziehe dich!", "ihr": "bezieht euch!", "Sie": "beziehen Sie sich!" },
    "past_tenses": { "präteritum": "bezog sich", "partizip_ii": "bezogen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat sich bezogen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "sich beziehen + auf + Akkusativ", "prepositions": ["auf"], "explanation": "To refer to something.", "examples": ["Das bezieht sich auf meinen letzten Kommentar.", "Er bezieht sich auf den Artikel.", "Worauf beziehst du dich?"], "derived": null }
    ],
    "reflexive_uses": [{ "label": "sich beziehen auf", "prepositions": ["auf"], "explanation": "To refer or relate to something.", "examples": ["Das bezieht sich auf die Theorie."] }]
  },
  {
    "base": "beeinflussen",
    "level": "C1", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to influence", "to affect"],
    "tip": "Derived from 'Einfluss' (influence). Common in academic, political, and psychological contexts.",
    "present": { "ich": "beeinflusse", "du": "beeinflusst", "er_sie_es": "beeinflusst", "wir": "beeinflussen", "ihr": "beeinflusst", "sie_Sie": "beeinflussen" },
    "imperative": { "du": "beeinflusse!", "ihr": "beeinflusst!", "Sie": "beeinflussen Sie!" },
    "past_tenses": { "präteritum": "beeinflusste", "partizip_ii": "beeinflusst" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat beeinflusst" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "beeinflussen + Akkusativ", "prepositions": [], "explanation": "To influence or affect something/someone.", "examples": ["Die Medien beeinflussen die öffentliche Meinung.", "Hat das deine Entscheidung beeinflusst?", "Umweltfaktoren beeinflussen das Verhalten."], "derived": null }
    ]
  },
  {
    "base": "in Frage stellen",
    "level": "C1", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to question", "to call into question", "to challenge"],
    "tip": "Fixed phrase. 'Etwas in Frage stellen' = to question something, to challenge its validity.",
    "present": { "ich": "stelle in Frage", "du": "stellst in Frage", "er_sie_es": "stellt in Frage", "wir": "stellen in Frage", "ihr": "stellt in Frage", "sie_Sie": "stellen in Frage" },
    "imperative": { "du": "stell in Frage!", "ihr": "stellt in Frage!", "Sie": "stellen Sie in Frage!" },
    "past_tenses": { "präteritum": "stellte in Frage", "partizip_ii": "in Frage gestellt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat in Frage gestellt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "in Frage stellen + Akkusativ", "prepositions": [], "explanation": "To question or challenge something.", "examples": ["Er stellt die Theorie in Frage.", "Das stellt unsere Annahmen in Frage.", "Diese Entscheidung wird grundsätzlich in Frage gestellt."], "derived": null }
    ]
  },
  {
    "base": "erörtern",
    "level": "C1", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to discuss", "to debate", "to examine"],
    "tip": "More formal and thorough than 'besprechen'. 'Erörtern' implies systematic examination of a topic. Noun: die Erörterung (essay/discussion).",
    "present": { "ich": "erörtere", "du": "erörterst", "er_sie_es": "erörtert", "wir": "erörtern", "ihr": "erörtert", "sie_Sie": "erörtern" },
    "imperative": { "du": "erörtere!", "ihr": "erörtert!", "Sie": "erörtern Sie!" },
    "past_tenses": { "präteritum": "erörterte", "partizip_ii": "erörtert" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat erörtert" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "erörtern + Akkusativ", "prepositions": [], "explanation": "To examine or discuss a topic systematically.", "examples": ["Wir erörtern die Frage des Klimawandels.", "Der Artikel erörtert das Problem ausführlich.", "In der Schule muss man Themen erörtern."], "derived": null }
    ]
  },
  {
    "base": "differenzieren",
    "level": "C1", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to differentiate", "to make distinctions"],
    "tip": "-ieren verb, no ge- in Partizip II. 'Zwischen... differenzieren' = to differentiate between. 'Differenziert' as adjective = nuanced.",
    "common_mistakes": ["Partizip II: 'differenziert', NOT 'gedifferenziert'. All -ieren verbs work this way."],
    "present": { "ich": "differenziere", "du": "differenzierst", "er_sie_es": "differenziert", "wir": "differenzieren", "ihr": "differenziert", "sie_Sie": "differenzieren" },
    "imperative": { "du": "differenziere!", "ihr": "differenziert!", "Sie": "differenzieren Sie!" },
    "past_tenses": { "präteritum": "differenzierte", "partizip_ii": "differenziert" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat differenziert" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "differenzieren + zwischen + Dativ", "prepositions": ["zwischen"], "explanation": "To differentiate between two things.", "examples": ["Wir müssen zwischen Fakten und Meinungen differenzieren.", "Er differenziert sehr genau.", "Das muss man differenzieren."], "derived": null }
    ]
  },
  {
    "base": "einschränken",
    "level": "C1", "reflexive": true, "separable": true, "separable_prefix": "ein",
    "translations": ["to limit", "to restrict", "to qualify"],
    "tip": "Separable. Also: 'sich einschränken' = to cut back, limit oneself. In academic writing, used to qualify a statement.",
    "present": { "ich": "schränke ein", "du": "schränkst ein", "er_sie_es": "schränkt ein", "wir": "schränken ein", "ihr": "schränkt ein", "sie_Sie": "schränken ein" },
    "imperative": { "du": "schränk ein!", "ihr": "schränkt ein!", "Sie": "schränken Sie ein!" },
    "past_tenses": { "präteritum": "schränkte ein", "partizip_ii": "eingeschränkt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat eingeschränkt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "einschränken + Akkusativ", "prepositions": [], "explanation": "To restrict/limit something.", "examples": ["Das Gesetz schränkt die Freiheit ein.", "Ich möchte das einschränken.", "Der Fehler hat seine Chancen eingeschränkt."], "derived": null },
      { "label": "sich einschränken", "prepositions": [], "explanation": "To cut back, limit oneself.", "examples": ["Ich muss mich finanziell einschränken.", "Er hat sich sehr eingeschränkt."], "derived": null }
    ],
    "reflexive_uses": [{ "label": "sich einschränken", "prepositions": [], "explanation": "To limit/cut back oneself.", "examples": ["Wir müssen uns einschränken."] }]
  },
  {
    "base": "zurückzuführen sein",
    "level": "C1", "reflexive": false, "separable": true, "separable_prefix": "zurück",
    "translations": ["to be attributable to", "to be due to"],
    "tip": "Fixed passive construction. 'Etwas ist auf etwas zurückzuführen' = Something is attributable to something. Common in academic writing.",
    "present": { "ich": "—", "du": "—", "er_sie_es": "ist zurückzuführen", "wir": "—", "ihr": "—", "sie_Sie": "sind zurückzuführen" },
    "imperative": { "du": "—", "ihr": "—", "Sie": "—" },
    "past_tenses": { "präteritum": "war zurückzuführen", "partizip_ii": "—" },
    "auxiliaries": [{ "aux": "sein", "condition": "always", "perfekt": "war zurückzuführen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "zurückzuführen sein + auf + Akkusativ", "prepositions": ["auf"], "explanation": "To be attributable to something.", "examples": ["Der Fehler ist auf Zeitmangel zurückzuführen.", "Das Problem ist auf mehrere Faktoren zurückzuführen.", "Das lässt sich auf historische Gründe zurückführen."], "derived": null }
    ]
  }
];
export default verbsC1;
