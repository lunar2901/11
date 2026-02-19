// adverbs-db-c1.js — C1 Advanced German Adverbs (comprehensive)
const adverbsC1 = [
  {
    "base": "gleichwohl", "level": "C1", "category": "concessive",
    "translations": ["nevertheless", "nonetheless", "yet"],
    "tip": "Formal/written synonym for 'trotzdem' / 'dennoch'. Concedes a point but introduces a counter-argument.",
    "register": "formal/written",
    "examples": ["Das Problem ist real; gleichwohl muss man weitermachen.", "Die Kritik ist berechtigt. Gleichwohl bleibt das Projekt wichtig."],
    "position_rules": ["Often at the start of a new clause or sentence to signal contrast."],
    "example_positions": ["Gleichwohl hält er an seiner Meinung fest.", "Das ist schwierig, gleichwohl machbar."]
  },
  {
    "base": "demzufolge", "level": "C1", "category": "consecutive",
    "translations": ["consequently", "therefore", "as a result"],
    "tip": "Formal connective: 'demnach' is similar but 'demzufolge' emphasizes logical consequence. Triggers verb-second order.",
    "register": "formal/written",
    "examples": ["Es fehlten Beweise. Demzufolge wurde er freigesprochen.", "Die Nachfrage sank. Demzufolge sanken auch die Preise."],
    "position_rules": ["Used in position 1, causing verb-subject inversion."],
    "example_positions": ["Demzufolge gelten neue Regeln.", "Er ist krank; demzufolge fehlt er."]
  },
  {
    "base": "infolgedessen", "level": "C1", "category": "consecutive",
    "translations": ["as a consequence", "as a result thereof"],
    "tip": "Very formal. More specific than 'deshalb': emphasizes that what follows is a direct result of what was said.",
    "register": "formal/written",
    "examples": ["Das Experiment scheiterte. Infolgedessen wurden weitere Studien angeordnet.", "Er verletzte die Regeln und wurde infolgedessen suspendiert."],
    "position_rules": ["Used in position 1 or after semicolons in formal text."],
    "example_positions": ["Infolgedessen musste er zurücktreten.", "Das Projekt verzögerte sich, infolgedessen stiegen die Kosten."]
  },
  {
    "base": "überdies", "level": "C1", "category": "additive",
    "translations": ["moreover", "furthermore", "besides"],
    "tip": "Formal additive: adds a further argument. Synonyms: 'außerdem', 'darüber hinaus'. 'Überdies' is most literary.",
    "register": "formal/written",
    "examples": ["Er ist kompetent. Überdies ist er sehr zuverlässig.", "Das Projekt ist teuer, überdies ist die Qualität fragwürdig."],
    "position_rules": ["Usually in position 1 at the beginning of a sentence."],
    "example_positions": ["Überdies ist er pünktlich.", "Das ist falsch; überdies ist es gefährlich."]
  },
  {
    "base": "nichtsdestotrotz", "level": "C1", "category": "concessive",
    "translations": ["nevertheless", "nonetheless"],
    "tip": "Long but very expressive. Colloquially 'nichtsdestoweniger'. Often used in writing and speeches.",
    "register": "formal/spoken",
    "examples": ["Er ist erschöpft; nichtsdestotrotz setzt er seine Arbeit fort.", "Nichtsdestotrotz bin ich der Meinung, dass..."],
    "position_rules": ["Usually in position 1 or after semicolons."],
    "example_positions": ["Nichtsdestotrotz bleibt es unsere Pflicht.", "Das Problem ist groß; nichtsdestotrotz haben wir Lösungen."]
  },
  {
    "base": "freilich", "level": "C1", "category": "concessive",
    "translations": ["of course", "admittedly", "certainly (but...)"],
    "tip": "Southern German/Austrian usage common. Can concede a point: 'freilich, aber...' = 'admittedly, but...'",
    "register": "formal/regional",
    "examples": ["Das ist freilich richtig, aber...", "Freilich hat er Recht damit.", "Das geht freilich nicht so einfach."],
    "position_rules": ["Can be in position 1 or middle field."],
    "example_positions": ["Freilich haben wir das gewusst.", "Das stimmt freilich."]
  },
  {
    "base": "hingegen", "level": "C1", "category": "adversative",
    "translations": ["on the other hand", "in contrast", "however"],
    "tip": "More formal than 'aber' for contrast. Sets up a clear contrast between two situations. Triggers verb inversion.",
    "register": "formal/written",
    "examples": ["Er befürwortet die Reform. Sein Kollege hingegen lehnt sie ab.", "Das erste Modell scheiterte; das zweite hingegen war erfolgreich."],
    "position_rules": ["Usually after the subject or in position 1 with verb inversion."],
    "example_positions": ["Er ist reich; sie hingegen hat nichts.", "Das Projekt ist teuer, der Nutzen hingegen gering."]
  },
  {
    "base": "keineswegs", "level": "C1", "category": "negation",
    "translations": ["by no means", "not at all", "in no way"],
    "tip": "Strong emphatic negation. More formal than 'überhaupt nicht'. 'Das stimmt keineswegs' = That is by no means true.",
    "register": "formal",
    "examples": ["Das ist keineswegs selbstverständlich.", "Er ist keineswegs unschuldig.", "Keineswegs bin ich damit einverstanden."],
    "position_rules": ["Can be in position 1 for emphasis or in the middle field."],
    "example_positions": ["Keineswegs ist das einfach.", "Das war keineswegs meine Absicht."]
  },
  {
    "base": "wenngleich", "level": "C1", "category": "concessive",
    "translations": ["even though", "although"],
    "tip": "Formal conjunction/adverb for concession. More literary than 'obwohl'. 'Wenngleich es stimmt,...' = Even though it is true,...",
    "register": "formal/literary",
    "examples": ["Wenngleich er krank war, erschien er zur Sitzung.", "Das ist wahr, wenngleich unangenehm."],
    "position_rules": ["Introduces a subordinate clause (verb at end) or can modify predicatively."],
    "example_positions": ["Wenngleich er erschöpft war, hörte er zu.", "Das Ergebnis ist, wenngleich unerwartet, positiv."]
  },
  {
    "base": "mitunter", "level": "C1", "category": "frequency",
    "translations": ["sometimes", "occasionally", "at times"],
    "tip": "More literary/formal than 'manchmal'. Implies somewhat irregular, notable occurrences.",
    "register": "formal/literary",
    "examples": ["Das kann mitunter sehr schwierig sein.", "Mitunter gibt es Ausnahmen.", "Er ist mitunter unberechenbar."],
    "position_rules": ["Usually in the middle field."],
    "example_positions": ["Das passiert mitunter.", "Mitunter braucht man Geduld."]
  },
  {
    "base": "sicherlich", "level": "C1", "category": "modal",
    "translations": ["certainly", "surely", "no doubt"],
    "tip": "Epistemic: the speaker expresses high confidence. 'Er wird sicherlich kommen' = He will certainly come.",
    "examples": ["Das ist sicherlich richtig.", "Sicherlich wird er erfolgreich sein.", "Das hat sicherlich seine Gründe."],
    "position_rules": ["Usually in the middle field or position 1."],
    "example_positions": ["Sicherlich hat er Recht.", "Er kommt sicherlich bald."]
  },
  {
    "base": "ausgerechnet", "level": "C1", "category": "focus",
    "translations": ["of all things", "of all people", "precisely"],
    "tip": "Expresses surprise or irony: of all the possibilities, this one? 'Ausgerechnet jetzt!' = Right now, of all times!",
    "examples": ["Ausgerechnet er soll das getan haben?", "Warum ausgerechnet heute?", "Sie hat ausgerechnet mich gefragt."],
    "position_rules": ["Directly before the focused word."],
    "example_positions": ["Ausgerechnet heute kommt Besuch.", "Er fragt ausgerechnet mich."]
  },
  {
    "base": "unbedingt", "level": "C1", "category": "degree",
    "translations": ["absolutely", "by all means", "definitely", "unconditionally"],
    "tip": "'Unbedingt!' as exclamation = Absolutely! By all means! 'Das musst du unbedingt sehen' = You absolutely must see this.",
    "examples": ["Ich muss das unbedingt lesen.", "Das ist nicht unbedingt richtig.", "Komm unbedingt!"],
    "position_rules": ["Usually in the middle field before the focused word."],
    "example_positions": ["Das ist nicht unbedingt notwendig.", "Ich will ihn unbedingt sehen."]
  },
  {
    "base": "schlechthin", "level": "C1", "category": "degree",
    "translations": ["par excellence", "as such", "absolutely", "the very embodiment of"],
    "tip": "Used to define something as the prime or definitive example: 'Das Wort schlechthin' = the word par excellence.",
    "register": "formal/academic",
    "examples": ["Er ist das Genie schlechthin.", "Das ist der Fehler schlechthin.", "Beethoven ist der Komponist schlechthin."],
    "position_rules": ["Placed after the noun or adjective it modifies."],
    "example_positions": ["Er ist der Experte schlechthin.", "Das ist das Problem schlechthin."]
  },
  {
    "base": "gar", "level": "C1", "category": "degree",
    "translations": ["at all", "even", "indeed (emphatic)"],
    "tip": "Emphatic particle. 'Gar nicht' = not at all. 'Gar nichts' = nothing whatsoever. 'Oder gar...' = or even...",
    "common_mistakes": ["'Gar nicht' is stronger than 'nicht'. 'Das macht mir gar nichts aus' = That doesn't bother me at all."],
    "examples": ["Das stört mich gar nicht.", "Er hat gar nichts gesagt.", "Oder gar schlimmer?"],
    "position_rules": ["Used directly before the element it intensifies."],
    "example_positions": ["Das interessiert mich gar nicht.", "Er weiß gar nichts davon."]
  },
  {
    "base": "wiederum", "level": "C1", "category": "adversative",
    "translations": ["in turn", "on the other hand", "again"],
    "tip": "Signals a return or flip to a contrasting perspective. 'Das wiederum bedeutet...' = That in turn means...",
    "register": "formal",
    "examples": ["Das führt wiederum zu neuen Fragen.", "Er wiederum ist anderer Meinung.", "Das hat wiederum Folgen."],
    "position_rules": ["Usually in position 1 or after subject."],
    "example_positions": ["Das wiederum ist interessant.", "Wiederum stellt sich die Frage..."]
  }
];
export default adverbsC1;
