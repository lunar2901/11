// verbs-db-b2.js — B2 Upper-Intermediate German Verbs (comprehensive)
const verbsB2 = [
  {
    "base": "behaupten",
    "level": "B2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to claim", "to assert", "to maintain"],
    "tip": "'Behaupten' implies asserting something that may be disputed. 'Er behauptet, dass...' = He claims that...",
    "present": { "ich": "behaupte", "du": "behauptest", "er_sie_es": "behauptet", "wir": "behaupten", "ihr": "behauptet", "sie_Sie": "behaupten" },
    "imperative": { "du": "behaupte!", "ihr": "behauptet!", "Sie": "behaupten Sie!" },
    "past_tenses": { "präteritum": "behauptete", "partizip_ii": "behauptet" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat behauptet" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "behaupten + dass-Satz", "prepositions": [], "explanation": "To claim that something is true.", "examples": ["Er behauptet, dass er unschuldig ist.", "Sie behauptete, alles zu wissen."], "derived": null },
      { "label": "sich behaupten (gegen)", "prepositions": ["gegen"], "explanation": "To assert/maintain oneself (against competition).", "examples": ["Er kann sich gegen die Konkurrenz behaupten.", "Sie hat sich gut behauptet."], "derived": null }
    ]
  },
  {
    "base": "begründen",
    "level": "B2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to justify", "to substantiate", "to found"],
    "tip": "'Begründen' = to give reasons for something. 'Kannst du das begründen?' = Can you justify/explain that?",
    "present": { "ich": "begründe", "du": "begründest", "er_sie_es": "begründet", "wir": "begründen", "ihr": "begründet", "sie_Sie": "begründen" },
    "imperative": { "du": "begründe!", "ihr": "begründet!", "Sie": "begründen Sie!" },
    "past_tenses": { "präteritum": "begründete", "partizip_ii": "begründet" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat begründet" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "begründen + mit + Dativ", "prepositions": ["mit"], "explanation": "To justify with a reason.", "examples": ["Er begründet seine Entscheidung mit Zeitmangel.", "Sie begründete ihren Antrag gut."], "derived": null }
    ]
  },
  {
    "base": "überzeugen",
    "level": "B2", "reflexive": true, "separable": false, "separable_prefix": null,
    "translations": ["to convince", "to persuade"],
    "tip": "'Jemanden überzeugen' = to convince someone. 'Sich überzeugen von' = to convince oneself of / to check.",
    "present": { "ich": "überzeuge", "du": "überzeugst", "er_sie_es": "überzeugt", "wir": "überzeugen", "ihr": "überzeugt", "sie_Sie": "überzeugen" },
    "imperative": { "du": "überzeug!", "ihr": "überzeugt!", "Sie": "überzeugen Sie!" },
    "past_tenses": { "präteritum": "überzeugte", "partizip_ii": "überzeugt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat überzeugt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "überzeugen + Akkusativ + von + Dativ", "prepositions": ["von"], "explanation": "To convince someone of something.", "examples": ["Ich überzeuge ihn von der Idee.", "Sie konnte das Team überzeugen."], "derived": null },
      { "label": "sich überzeugen + von + Dativ", "prepositions": ["von"], "explanation": "To verify / to make sure of.", "examples": ["Ich überzeuge mich selbst davon.", "Er hat sich von der Qualität überzeugt."], "derived": null }
    ],
    "reflexive_uses": [{ "label": "sich überzeugen von", "prepositions": ["von"], "explanation": "To convince oneself of / verify.", "examples": ["Ich überzeuge mich von der Richtigkeit."] }]
  },
  {
    "base": "vermeiden",
    "level": "B2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to avoid"],
    "tip": "Strong verb. 'Etwas vermeiden' = to avoid something. Noun: die Vermeidung.",
    "present": { "ich": "vermeide", "du": "vermeidest", "er_sie_es": "vermeidet", "wir": "vermeiden", "ihr": "vermeidet", "sie_Sie": "vermeiden" },
    "imperative": { "du": "vermeide!", "ihr": "vermeidet!", "Sie": "vermeiden Sie!" },
    "past_tenses": { "präteritum": "vermied", "partizip_ii": "vermieden" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat vermieden" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "vermeiden + Akkusativ", "prepositions": [], "explanation": "To avoid something.", "examples": ["Er vermeidet Stress.", "Sie versucht Konflikte zu vermeiden.", "Fehler vermeiden."], "derived": null }
    ]
  },
  {
    "base": "vorschlagen",
    "level": "B2", "reflexive": false, "separable": true, "separable_prefix": "vor",
    "translations": ["to suggest", "to propose"],
    "tip": "Separable. Stem vowel change: a→ä. 'Vorschlagen' takes a direct object or 'dass'-clause.",
    "present": { "ich": "schlage vor", "du": "schlägst vor", "er_sie_es": "schlägt vor", "wir": "schlagen vor", "ihr": "schlagt vor", "sie_Sie": "schlagen vor" },
    "imperative": { "du": "schlag vor!", "ihr": "schlagt vor!", "Sie": "schlagen Sie vor!" },
    "past_tenses": { "präteritum": "schlug vor", "partizip_ii": "vorgeschlagen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat vorgeschlagen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "vorschlagen + Akkusativ / dass-Satz", "prepositions": [], "explanation": "To suggest something.", "examples": ["Ich schlage eine Pause vor.", "Er schlägt vor, dass wir gehen.", "Was schlägst du vor?"], "derived": null }
    ]
  },
  {
    "base": "ablehnen",
    "level": "B2", "reflexive": false, "separable": true, "separable_prefix": "ab",
    "translations": ["to reject", "to refuse", "to decline"],
    "tip": "Separable. 'Ein Angebot ablehnen' = to decline an offer. Noun: die Ablehnung (rejection).",
    "present": { "ich": "lehne ab", "du": "lehnst ab", "er_sie_es": "lehnt ab", "wir": "lehnen ab", "ihr": "lehnt ab", "sie_Sie": "lehnen ab" },
    "imperative": { "du": "lehn ab!", "ihr": "lehnt ab!", "Sie": "lehnen Sie ab!" },
    "past_tenses": { "präteritum": "lehnte ab", "partizip_ii": "abgelehnt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat abgelehnt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "ablehnen + Akkusativ", "prepositions": [], "explanation": "To reject or decline something.", "examples": ["Er lehnte das Angebot ab.", "Die Bewerbung wurde abgelehnt.", "Ich lehne das ab."], "derived": null }
    ]
  },
  {
    "base": "genehmigen",
    "level": "B2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to approve", "to authorize", "to grant"],
    "tip": "Formal/official use. 'Einen Antrag genehmigen' = to approve an application. Noun: die Genehmigung.",
    "present": { "ich": "genehmige", "du": "genehmigst", "er_sie_es": "genehmigt", "wir": "genehmigen", "ihr": "genehmigt", "sie_Sie": "genehmigen" },
    "imperative": { "du": "genehmige!", "ihr": "genehmigt!", "Sie": "genehmigen Sie!" },
    "past_tenses": { "präteritum": "genehmigte", "partizip_ii": "genehmigt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat genehmigt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "genehmigen + Akkusativ", "prepositions": [], "explanation": "To approve or grant something.", "examples": ["Der Chef genehmigt den Urlaub.", "Der Antrag wurde genehmigt.", "Das Projekt ist genehmigt."], "derived": null }
    ]
  },
  {
    "base": "ausdrücken",
    "level": "B2", "reflexive": true, "separable": true, "separable_prefix": "aus",
    "translations": ["to express"],
    "tip": "Separable. 'Sich ausdrücken' = to express oneself. 'Einen Gedanken ausdrücken' = to express a thought.",
    "present": { "ich": "drücke aus", "du": "drückst aus", "er_sie_es": "drückt aus", "wir": "drücken aus", "ihr": "drückt aus", "sie_Sie": "drücken aus" },
    "imperative": { "du": "drück aus!", "ihr": "drückt aus!", "Sie": "drücken Sie aus!" },
    "past_tenses": { "präteritum": "drückte aus", "partizip_ii": "ausgedrückt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat ausgedrückt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "ausdrücken + Akkusativ", "prepositions": [], "explanation": "To express an idea, feeling.", "examples": ["Er drückt seine Gedanken klar aus.", "Ich kann das nicht richtig ausdrücken."], "derived": null },
      { "label": "sich ausdrücken", "prepositions": [], "explanation": "To express oneself.", "examples": ["Sie drückt sich gut aus.", "Er kann sich auf Deutsch gut ausdrücken."], "derived": null }
    ],
    "reflexive_uses": [{ "label": "sich ausdrücken", "prepositions": [], "explanation": "To express oneself.", "examples": ["Sie drückt sich eloquent aus."] }]
  },
  {
    "base": "zurückgehen",
    "level": "B2", "reflexive": false, "separable": true, "separable_prefix": "zurück",
    "translations": ["to go back", "to decline", "to decrease"],
    "tip": "Separable. Uses 'sein'. Multiple meanings: to return (go back) or to decrease (numbers).",
    "present": { "ich": "gehe zurück", "du": "gehst zurück", "er_sie_es": "geht zurück", "wir": "gehen zurück", "ihr": "geht zurück", "sie_Sie": "gehen zurück" },
    "imperative": { "du": "geh zurück!", "ihr": "geht zurück!", "Sie": "gehen Sie zurück!" },
    "past_tenses": { "präteritum": "ging zurück", "partizip_ii": "zurückgegangen" },
    "auxiliaries": [{ "aux": "sein", "condition": "always", "perfekt": "ist zurückgegangen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "zurückgehen (movement)", "prepositions": ["nach", "zu"], "explanation": "To go back to a place.", "examples": ["Ich gehe nach Hause zurück.", "Geh zurück!"], "derived": null },
      { "label": "zurückgehen (decrease)", "prepositions": [], "explanation": "To decrease, decline (numbers/statistics).", "examples": ["Die Zahlen sind zurückgegangen.", "Die Nachfrage geht zurück."], "derived": null }
    ]
  },
  {
    "base": "zunehmen",
    "level": "B2", "reflexive": false, "separable": true, "separable_prefix": "zu",
    "translations": ["to increase", "to gain weight"],
    "tip": "Separable. Stem vowel change: e→i. Two main uses: to increase (in general) or to gain weight (colloquial).",
    "present": { "ich": "nehme zu", "du": "nimmst zu", "er_sie_es": "nimmt zu", "wir": "nehmen zu", "ihr": "nehmt zu", "sie_Sie": "nehmen zu" },
    "imperative": { "du": "nimm zu!", "ihr": "nehmt zu!", "Sie": "nehmen Sie zu!" },
    "past_tenses": { "präteritum": "nahm zu", "partizip_ii": "zugenommen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat zugenommen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "zunehmen (increase)", "prepositions": [], "explanation": "To increase (numbers, problems, etc.).", "examples": ["Die Probleme nehmen zu.", "Der Verkehr hat zugenommen."], "derived": null },
      { "label": "zunehmen (weight)", "prepositions": [], "explanation": "To gain weight.", "examples": ["Er hat 5 Kilo zugenommen.", "Im Winter nehme ich immer zu."], "derived": null }
    ]
  },
  {
    "base": "abnehmen",
    "level": "B2", "reflexive": false, "separable": true, "separable_prefix": "ab",
    "translations": ["to decrease", "to lose weight", "to take off"],
    "tip": "Separable. Opposite of zunehmen. Multiple meanings depending on context.",
    "present": { "ich": "nehme ab", "du": "nimmst ab", "er_sie_es": "nimmt ab", "wir": "nehmen ab", "ihr": "nehmt ab", "sie_Sie": "nehmen ab" },
    "imperative": { "du": "nimm ab!", "ihr": "nehmt ab!", "Sie": "nehmen Sie ab!" },
    "past_tenses": { "präteritum": "nahm ab", "partizip_ii": "abgenommen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat abgenommen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "abnehmen (decrease)", "prepositions": [], "explanation": "To decrease, diminish.", "examples": ["Die Zahl der Arbeitsplätze nimmt ab.", "Die Schmerzen nehmen ab."], "derived": null },
      { "label": "abnehmen (lose weight)", "prepositions": [], "explanation": "To lose weight.", "examples": ["Er will 5 Kilo abnehmen.", "Ich habe abgenommen."], "derived": null },
      { "label": "abnehmen + Dativ + Akkusativ", "prepositions": [], "explanation": "To take something from someone.", "examples": ["Der Zöllner hat ihm den Pass abgenommen.", "Kann ich dir etwas abnehmen?"], "derived": null }
    ]
  },
  {
    "base": "herausfinden",
    "level": "B2", "reflexive": false, "separable": true, "separable_prefix": "heraus",
    "translations": ["to find out", "to discover"],
    "tip": "Separable. 'Ich finde heraus' (present). Used to discover information.",
    "present": { "ich": "finde heraus", "du": "findest heraus", "er_sie_es": "findet heraus", "wir": "finden heraus", "ihr": "findet heraus", "sie_Sie": "finden heraus" },
    "imperative": { "du": "find heraus!", "ihr": "findet heraus!", "Sie": "finden Sie heraus!" },
    "past_tenses": { "präteritum": "fand heraus", "partizip_ii": "herausgefunden" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat herausgefunden" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "herausfinden + Akkusativ / ob / wie / was", "prepositions": [], "explanation": "To find out information.", "examples": ["Ich finde die Wahrheit heraus.", "Wir müssen herausfinden, was passiert ist.", "Hast du herausgefunden, wo er wohnt?"], "derived": null }
    ]
  },
  {
    "base": "berücksichtigen",
    "level": "B2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to take into account", "to consider"],
    "tip": "Formal word common in business and academic writing. 'Alle Faktoren berücksichtigen' = to consider all factors.",
    "present": { "ich": "berücksichtige", "du": "berücksichtigst", "er_sie_es": "berücksichtigt", "wir": "berücksichtigen", "ihr": "berücksichtigt", "sie_Sie": "berücksichtigen" },
    "imperative": { "du": "berücksichtige!", "ihr": "berücksichtigt!", "Sie": "berücksichtigen Sie!" },
    "past_tenses": { "präteritum": "berücksichtigte", "partizip_ii": "berücksichtigt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat berücksichtigt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "berücksichtigen + Akkusativ", "prepositions": [], "explanation": "To take something into account.", "examples": ["Wir müssen alle Faktoren berücksichtigen.", "Ihr Antrag wurde berücksichtigt.", "Das sollte man berücksichtigen."], "derived": null }
    ]
  },
  {
    "base": "anpassen",
    "level": "B2", "reflexive": true, "separable": true, "separable_prefix": "an",
    "translations": ["to adapt", "to adjust"],
    "tip": "Separable. 'Sich anpassen an' = to adapt to. Important in business and intercultural contexts.",
    "present": { "ich": "passe an", "du": "passt an", "er_sie_es": "passt an", "wir": "passen an", "ihr": "passt an", "sie_Sie": "passen an" },
    "imperative": { "du": "pass an!", "ihr": "passt an!", "Sie": "passen Sie an!" },
    "past_tenses": { "präteritum": "passte an", "partizip_ii": "angepasst" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat angepasst" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "anpassen + Akkusativ + an + Akkusativ", "prepositions": ["an"], "explanation": "To adjust something to something else.", "examples": ["Wir passen das Angebot an die Nachfrage an.", "Er hat den Plan angepasst."], "derived": null },
      { "label": "sich anpassen + an + Akkusativ", "prepositions": ["an"], "explanation": "To adapt oneself to something.", "examples": ["Sie passt sich schnell an.", "Er hat sich gut an die neue Situation angepasst."], "derived": null }
    ],
    "reflexive_uses": [{ "label": "sich anpassen an", "prepositions": ["an"], "explanation": "To adapt to something.", "examples": ["Ich passe mich an die neue Kultur an."] }]
  },
  {
    "base": "auffordern",
    "level": "B2", "reflexive": false, "separable": true, "separable_prefix": "auf",
    "translations": ["to call upon", "to request", "to urge"],
    "tip": "Separable. Formal request or demand. 'Auffordern + zu + Infinitiv' = to call upon to do something.",
    "present": { "ich": "fordere auf", "du": "forderst auf", "er_sie_es": "fordert auf", "wir": "fordern auf", "ihr": "fordert auf", "sie_Sie": "fordern auf" },
    "imperative": { "du": "forder auf!", "ihr": "fordert auf!", "Sie": "fordern Sie auf!" },
    "past_tenses": { "präteritum": "forderte auf", "partizip_ii": "aufgefordert" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat aufgefordert" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "auffordern + Akkusativ + zu + Infinitiv", "prepositions": ["zu"], "explanation": "To request/urge someone to do something.", "examples": ["Er fordert sie auf, Platz zu nehmen.", "Die Regierung fordert die Bürger auf, zu wählen.", "Ich fordere dich auf, das zu ändern."], "derived": null }
    ]
  },
  {
    "base": "widersprechen",
    "level": "B2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to contradict", "to object"],
    "tip": "Takes Dativ! 'Ich widerspreche dir' = I contradict you. Strong verb.",
    "common_mistakes": ["The person contradicted is in Dativ: 'Ich widerspreche ihm' (NOT 'ihn')."],
    "present": { "ich": "widerspreche", "du": "widersprichst", "er_sie_es": "widerspricht", "wir": "widersprechen", "ihr": "widersprecht", "sie_Sie": "widersprechen" },
    "imperative": { "du": "widersprich!", "ihr": "widersprecht!", "Sie": "widersprechen Sie!" },
    "past_tenses": { "präteritum": "widersprach", "partizip_ii": "widersprochen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat widersprochen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "widersprechen + Dativ", "prepositions": [], "explanation": "To contradict or object to someone.", "examples": ["Er widerspricht dem Chef.", "Ich muss dir widersprechen.", "Diese Aussage widerspricht den Fakten."], "derived": null }
    ]
  },
  {
    "base": "auswirken",
    "level": "B2", "reflexive": true, "separable": true, "separable_prefix": "aus",
    "translations": ["to have an effect", "to impact"],
    "tip": "Always reflexive: 'sich auswirken auf'. Used for describing effects and impacts.",
    "present": { "ich": "wirke aus", "du": "wirkst aus", "er_sie_es": "wirkt aus", "wir": "wirken aus", "ihr": "wirkt aus", "sie_Sie": "wirken aus" },
    "imperative": { "du": "—", "ihr": "—", "Sie": "—" },
    "past_tenses": { "präteritum": "wirkte aus", "partizip_ii": "ausgewirkt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat ausgewirkt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "sich auswirken + auf + Akkusativ", "prepositions": ["auf"], "explanation": "To have an effect on something.", "examples": ["Das Wetter wirkt sich auf die Stimmung aus.", "Die Entscheidung hat sich negativ ausgewirkt.", "Wie wirkt sich das auf dich aus?"], "derived": null }
    ],
    "reflexive_uses": [{ "label": "sich auswirken auf", "prepositions": ["auf"], "explanation": "To have an effect on.", "examples": ["Die Krise wirkt sich auf die Wirtschaft aus."] }]
  }
];
export default verbsB2;
