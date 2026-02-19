// adverbs-db-b2.js — B2 Upper-Intermediate German Adverbs (comprehensive)
const adverbsB2 = [
  {
    "base": "allerdings", "level": "B2", "category": "concession",
    "translations": ["however", "though", "indeed (but)"],
    "tip": "Signals a contrast or qualification. Softer than 'aber'. Can also confirm with reservation: 'Das stimmt allerdings' = That is true, however.",
    "examples": ["Das stimmt, allerdings gibt es Ausnahmen.", "Er ist intelligent, allerdings faul.", "Allerdings hätte ich das anders gemacht."],
    "position_rules": ["Usually in position 1 for contrast, or in the middle field."],
    "example_positions": ["Allerdings ist das nicht ganz richtig.", "Das geht, allerdings dauert es lange."]
  },
  {
    "base": "hingegen", "level": "B2", "category": "contrast",
    "translations": ["however", "on the other hand", "by contrast"],
    "tip": "Used to contrast two things. More formal than 'aber'. Typical in written German.",
    "examples": ["Er arbeitet viel. Sie hingegen hat Zeit.", "Die Kosten steigen; der Nutzen hingegen sinkt.", "In Deutschland ist es kalt, in Spanien hingegen warm."],
    "position_rules": ["Usually in the middle field after the verb to show contrast."],
    "example_positions": ["Er ist ruhig, sie hingegen ist laut.", "Das ist billig, das hier hingegen teuer."]
  },
  {
    "base": "dennoch", "level": "B2", "category": "concession",
    "translations": ["nevertheless", "yet", "still"],
    "tip": "Stronger than 'trotzdem'. Signals unexpected continuation despite obstacles. Used in formal writing.",
    "examples": ["Es regnete, dennoch gingen wir spazieren.", "Er war krank, dennoch kam er zur Arbeit.", "Das Projekt war schwierig, dennoch erfolgreich."],
    "position_rules": ["Usually in position 1 after a contrast clause."],
    "example_positions": ["Dennoch muss man weitermachen.", "Er scheiterte, dennoch gab er nicht auf."]
  },
  {
    "base": "insgesamt", "level": "B2", "category": "summary",
    "translations": ["overall", "in total", "altogether"],
    "tip": "Used to summarize or total something. 'Insgesamt' can precede a number (total) or summarize an argument.",
    "examples": ["Insgesamt hat das Projekt gut funktioniert.", "Es haben insgesamt 50 Personen teilgenommen.", "Insgesamt war es ein gutes Jahr."],
    "position_rules": ["Often in position 1 for summaries, or before numbers."],
    "example_positions": ["Insgesamt bin ich zufrieden.", "Wir haben insgesamt 200 Euro ausgegeben."]
  },
  {
    "base": "grundsätzlich", "level": "B2", "category": "manner",
    "translations": ["fundamentally", "in principle", "generally"],
    "tip": "Expresses a fundamental stance. 'Grundsätzlich bin ich einverstanden' = In principle I agree. Can also mean 'always' (without exception).",
    "examples": ["Grundsätzlich bin ich dafür.", "Er lehnt das grundsätzlich ab.", "Das sollte man grundsätzlich beachten."],
    "position_rules": ["Usually in position 1 for emphasis or middle field."],
    "example_positions": ["Grundsätzlich stimme ich zu.", "Ich bin grundsätzlich gegen diese Idee."]
  },
  {
    "base": "letztendlich", "level": "B2", "category": "time/summary",
    "translations": ["ultimately", "in the end", "after all"],
    "tip": "Indicates the final conclusion or result. Synonym: 'letztlich', 'am Ende'. Used in reasoning and arguments.",
    "examples": ["Letztendlich hat er recht.", "Letztendlich liegt die Entscheidung bei ihm.", "Das ist letztendlich egal."],
    "position_rules": ["Usually in position 1 or middle field."],
    "example_positions": ["Letztendlich müssen wir entscheiden.", "Er hat letztendlich nachgegeben."]
  },
  {
    "base": "keineswegs", "level": "B2", "category": "negation",
    "translations": ["by no means", "not at all", "in no way"],
    "tip": "Strong formal negation. More emphatic than 'nicht'. 'Das ist keineswegs klar' = That is by no means clear.",
    "examples": ["Das ist keineswegs sicher.", "Er ist keineswegs der Einzige.", "Das stimmt keineswegs."],
    "position_rules": ["Usually in the middle field for emphasis."],
    "example_positions": ["Das ist keineswegs einfach.", "Er ist keineswegs zufrieden."]
  },
  {
    "base": "einerseits... andererseits", "level": "B2", "category": "contrast",
    "translations": ["on the one hand... on the other hand"],
    "tip": "Used to present two contrasting aspects of an argument. Common in essays and discussions.",
    "examples": ["Einerseits ist das günstig, andererseits zeitaufwendig.", "Einerseits will ich reisen, andererseits habe ich kein Geld."],
    "position_rules": ["Usually in position 1 in each contrasting clause."],
    "example_positions": ["Einerseits stimmt das. Andererseits ist es kompliziert."]
  },
  {
    "base": "bereits", "level": "B2", "category": "time",
    "translations": ["already", "as early as"],
    "tip": "More formal than 'schon'. 'Bereits im 18. Jahrhundert' = As early as the 18th century. Used in formal writing.",
    "examples": ["Er hat bereits die Hälfte geschafft.", "Bereits gestern war das Problem bekannt.", "Das weiß ich bereits."],
    "position_rules": ["Usually in the middle field, similar to 'schon'."],
    "example_positions": ["Ich bin bereits fertig.", "Das hat er bereits gestern gesagt."]
  },
  {
    "base": "kaum", "level": "B2", "category": "degree",
    "translations": ["hardly", "barely", "scarcely"],
    "tip": "'Kaum' negates almost completely. 'Ich kann es kaum glauben' = I can hardly believe it. Often causes verb-second word order.",
    "examples": ["Ich kann es kaum glauben.", "Er schläft kaum.", "Kaum hatte er das gesagt, da klingelte das Telefon."],
    "position_rules": ["Usually in the middle field; in position 1 with narrative inversion."],
    "example_positions": ["Er versteht kaum Deutsch.", "Kaum war er da, fing es an zu regnen."]
  },
  {
    "base": "zumindest", "level": "B2", "category": "restriction",
    "translations": ["at least"],
    "tip": "Indicates a minimum. Synonym: 'mindestens' (for numbers), 'wenigstens' (for consolation). 'Zumindest' is more neutral.",
    "examples": ["Er kommt zumindest am Wochenende.", "Das ist zumindest ein Anfang.", "Kannst du zumindest eine E-Mail schreiben?"],
    "position_rules": ["Usually in the middle field or before the word it limits."],
    "example_positions": ["Zumindest hat er es versucht.", "Das sollte zumindest klar sein."]
  },
  {
    "base": "weitgehend", "level": "B2", "category": "degree",
    "translations": ["largely", "to a great extent", "mostly"],
    "tip": "Indicates that something is mostly but not entirely true. 'Weitgehend fertig' = largely finished.",
    "examples": ["Die Arbeit ist weitgehend abgeschlossen.", "Das stimmt weitgehend.", "Er ist weitgehend gesund."],
    "position_rules": ["Usually before the adjective or in the middle field."],
    "example_positions": ["Das Problem ist weitgehend gelöst.", "Wir sind weitgehend einig."]
  }
];
export default adverbsB2;
