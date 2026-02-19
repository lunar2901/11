// adverbs-db-a2.js — A2 Elementary German Adverbs (comprehensive)
const adverbsA2 = [
  {
    "base": "meistens", "level": "A2", "category": "frequency",
    "translations": ["mostly", "usually", "most of the time"],
    "tip": "Frequency scale: immer > meistens > oft > manchmal > selten > nie.",
    "examples": ["Ich esse meistens zu Hause.", "Er kommt meistens pünktlich.", "Meistens ist das Wetter hier gut."],
    "position_rules": ["Usually in the middle field after the verb."],
    "example_positions": ["Meistens schlafe ich früh.", "Ich schlafe meistens früh."]
  },
  {
    "base": "normalerweise", "level": "A2", "category": "frequency",
    "translations": ["normally", "usually"],
    "tip": "Often in position 1 to frame the sentence. Synonyms: meistens, gewöhnlich.",
    "examples": ["Normalerweise arbeite ich von 9 bis 17 Uhr.", "Er ist normalerweise pünktlich."],
    "position_rules": ["Often in position 1 for emphasis."],
    "example_positions": ["Normalerweise bin ich früh auf.", "Ich bin normalerweise früh auf."]
  },
  {
    "base": "selten", "level": "A2", "category": "frequency",
    "translations": ["rarely", "seldom"],
    "tip": "Between 'manchmal' (sometimes) and 'nie' (never) on the frequency scale.",
    "examples": ["Ich esse selten Fastfood.", "Er ruft selten an.", "Das passiert selten."],
    "position_rules": ["Usually in the middle field."],
    "example_positions": ["Er kommt selten zu Besuch.", "Selten habe ich so gegessen."]
  },
  {
    "base": "fast", "level": "A2", "category": "degree",
    "translations": ["almost", "nearly"],
    "tip": "'Fast nie' = almost never. 'Fast fertig' = almost done. Always before the word it modifies.",
    "examples": ["Ich bin fast fertig.", "Das kostet fast 100 Euro.", "Er kommt fast nie."],
    "position_rules": ["Directly before the word it modifies."],
    "example_positions": ["Das ist fast richtig.", "Ich bin fast fertig."]
  },
  {
    "base": "ziemlich", "level": "A2", "category": "degree",
    "translations": ["quite", "fairly", "rather"],
    "tip": "Moderate intensifier — less strong than 'sehr' (very), stronger than 'ein bisschen'.",
    "examples": ["Das Buch ist ziemlich interessant.", "Es ist ziemlich kalt heute.", "Er spricht ziemlich gut Deutsch."],
    "position_rules": ["Immediately before the adjective or adverb it modifies."],
    "example_positions": ["Das ist ziemlich schwierig.", "Er ist ziemlich nett."]
  },
  {
    "base": "genug", "level": "A2", "category": "degree",
    "translations": ["enough"],
    "tip": "Placed AFTER the adjective it modifies — opposite of English word order!",
    "common_mistakes": ["'Groß genug' (big enough), NOT 'genug groß'. 'Genug' follows the adjective."],
    "examples": ["Ich habe genug Geld.", "Das ist groß genug.", "Hast du genug gegessen?"],
    "position_rules": ["After the adjective or adverb; before a noun."],
    "example_positions": ["Er ist groß genug.", "Ich habe genug Zeit."]
  },
  {
    "base": "früh", "level": "A2", "category": "time",
    "translations": ["early"],
    "tip": "Opposite: spät. 'Morgen früh' = tomorrow morning. 'Früh aufstehen' = to get up early.",
    "examples": ["Ich stehe früh auf.", "Er kommt immer zu früh.", "Morgen früh muss ich arbeiten."],
    "position_rules": ["Usually in the middle field or after the verb."],
    "example_positions": ["Ich gehe früh schlafen.", "Er ist früh aufgestanden."]
  },
  {
    "base": "spät", "level": "A2", "category": "time",
    "translations": ["late"],
    "tip": "'Wie spät ist es?' = What time is it? 'Zu spät kommen' = to arrive late.",
    "examples": ["Ich komme heute spät nach Hause.", "Wie spät ist es?", "Der Zug kommt zu spät an."],
    "position_rules": ["Usually in the middle field."],
    "example_positions": ["Er arbeitet immer bis spät.", "Der Bus kommt spät."]
  },
  {
    "base": "später", "level": "A2", "category": "time",
    "translations": ["later"],
    "tip": "Comparative of 'spät'. 'Bis später!' = See you later!",
    "examples": ["Ich komme später.", "Bis später!", "Können wir das später besprechen?"],
    "position_rules": ["Can be in position 1 or middle field."],
    "example_positions": ["Später gehe ich einkaufen.", "Ruf mich später an."]
  },
  {
    "base": "bald", "level": "A2", "category": "time",
    "translations": ["soon"],
    "tip": "'Bis bald!' = See you soon! 'So bald wie möglich' = as soon as possible.",
    "examples": ["Er kommt bald.", "Bis bald!", "Das machen wir bald."],
    "position_rules": ["Usually in the middle field or at the start."],
    "example_positions": ["Bald ist es so weit.", "Er wird bald kommen."]
  },
  {
    "base": "wieder", "level": "A2", "category": "time",
    "translations": ["again"],
    "tip": "'Auf Wiedersehen!' = Goodbye (until seeing again). 'Immer wieder' = again and again.",
    "examples": ["Ich lerne wieder Deutsch.", "Auf Wiedersehen!", "Das macht er immer wieder."],
    "position_rules": ["Usually in the middle field."],
    "example_positions": ["Er ist wieder da.", "Ich versuche es wieder."]
  },
  {
    "base": "zuerst", "level": "A2", "category": "order",
    "translations": ["first", "at first"],
    "tip": "'Zuerst... dann...' = First... then... Signals the opening step in a sequence.",
    "examples": ["Zuerst esse ich, dann gehe ich.", "Zuerst lesen wir den Text.", "Zuerst war ich nicht sicher."],
    "position_rules": ["Often in position 1 to signal sequence."],
    "example_positions": ["Zuerst müssen wir das verstehen.", "Ich lerne zuerst Vokabeln."]
  },
  {
    "base": "danach", "level": "A2", "category": "order",
    "translations": ["after that", "afterwards"],
    "tip": "'Erst... danach...' = First... after that... Signals the next step in a sequence.",
    "examples": ["Zuerst esse ich, danach gehe ich.", "Danach war er glücklich.", "Was machst du danach?"],
    "position_rules": ["Often in position 1 to signal next step."],
    "example_positions": ["Danach trinken wir Kaffee.", "Ich gehe danach nach Hause."]
  },
  {
    "base": "allein", "level": "A2", "category": "manner",
    "translations": ["alone", "by oneself"],
    "tip": "'Allein' and 'alleine' are both correct. Opposite: zusammen (together).",
    "examples": ["Ich lebe allein.", "Er macht das allein.", "Sie ist allein zu Hause."],
    "position_rules": ["Usually after the verb or at the end of the clause."],
    "example_positions": ["Ich bin oft allein.", "Er schafft das allein."]
  },
  {
    "base": "ungern", "level": "A2", "category": "manner",
    "translations": ["reluctantly", "unwillingly"],
    "tip": "Opposite of 'gern'. Scale: gern → lieber → am liebsten (positive); ungern (negative).",
    "examples": ["Ich esse ungern Gemüse.", "Er geht ungern zum Arzt.", "Das mache ich ungern."],
    "position_rules": ["Usually after the verb object."],
    "example_positions": ["Ich schlafe ungern allein.", "Er hilft ungern."]
  },
  {
    "base": "draußen", "level": "A2", "category": "place",
    "translations": ["outside"],
    "tip": "Opposite: 'drinnen' (inside). 'Nach draußen gehen' = to go outside.",
    "examples": ["Die Kinder spielen draußen.", "Es ist kalt draußen.", "Geh bitte draußen spielen."],
    "position_rules": ["Usually in the middle field."],
    "example_positions": ["Draußen scheint die Sonne.", "Er wartet draußen."]
  },
  {
    "base": "drinnen", "level": "A2", "category": "place",
    "translations": ["inside", "indoors"],
    "tip": "Opposite of draußen. 'Drinnen ist es warm' = It's warm inside.",
    "examples": ["Es ist warm drinnen.", "Die Kinder spielen drinnen.", "Bleib drinnen, es regnet!"],
    "position_rules": ["Usually in the middle field."],
    "example_positions": ["Drinnen ist es gemütlich.", "Wir sitzen lieber drinnen."]
  },
  {
    "base": "überall", "level": "A2", "category": "place",
    "translations": ["everywhere"],
    "tip": "Opposite: 'nirgendwo' / 'nirgends' (nowhere).",
    "examples": ["Ich suche überall.", "Überall gibt es Probleme.", "Er reist überall hin."],
    "position_rules": ["Usually in the middle field."],
    "example_positions": ["Überall ist es voll.", "Ich bin überall gewesen."]
  },
  {
    "base": "wahrscheinlich", "level": "A2", "category": "modal",
    "translations": ["probably", "likely"],
    "tip": "Stronger certainty than 'vielleicht' (maybe). Certainty scale: sicher > wahrscheinlich > vielleicht.",
    "examples": ["Er kommt wahrscheinlich morgen.", "Wahrscheinlich regnet es.", "Das ist wahrscheinlich richtig."],
    "position_rules": ["Usually in position 1 or middle field."],
    "example_positions": ["Wahrscheinlich kommen sie morgen.", "Er ist wahrscheinlich krank."]
  },
  {
    "base": "sicher", "level": "A2", "category": "modal",
    "translations": ["certainly", "surely", "definitely"],
    "tip": "As adverb: definitely/certainly. As adjective: safe. 'Sicher!' standalone = Sure!",
    "examples": ["Das stimmt sicher.", "Bist du sicher?", "Sie kommt sicher morgen."],
    "position_rules": ["Usually in the middle field."],
    "example_positions": ["Er weiß das sicher.", "Das ist sicher richtig."]
  },
  {
    "base": "ein bisschen", "level": "A2", "category": "degree",
    "translations": ["a little", "a bit"],
    "tip": "Softens adjectives and verbs. Always 2-3 words. South German colloquial: 'ein bissel'.",
    "examples": ["Ich bin ein bisschen müde.", "Kannst du ein bisschen warten?", "Es ist ein bisschen kalt."],
    "position_rules": ["Directly before the word it modifies."],
    "example_positions": ["Ich bin ein bisschen nervös.", "Er spricht ein bisschen Deutsch."]
  },
  {
    "base": "endlich", "level": "A2", "category": "time",
    "translations": ["finally", "at last"],
    "tip": "Expresses relief after waiting. 'Endlich!' as exclamation = Finally! At last!",
    "examples": ["Endlich bist du da!", "Ich bin endlich fertig.", "Endlich kommt der Frühling."],
    "position_rules": ["Often in position 1 for emotional emphasis."],
    "example_positions": ["Endlich ist er da.", "Er hat endlich angerufen."]
  },
  {
    "base": "plötzlich", "level": "A2", "category": "time",
    "translations": ["suddenly", "all of a sudden"],
    "tip": "Describes unexpected events. Often opens dramatic sentences.",
    "examples": ["Plötzlich hat es angefangen zu regnen.", "Er war plötzlich weg.", "Plötzlich klingelt das Telefon."],
    "position_rules": ["Often in position 1 for dramatic effect."],
    "example_positions": ["Plötzlich war es still.", "Er stand plötzlich vor der Tür."]
  },
  {
    "base": "leider", "level": "A2", "category": "modal",
    "translations": ["unfortunately"],
    "tip": "Key word for polite regrets and refusals. 'Das geht leider nicht' = unfortunately that's not possible.",
    "examples": ["Leider kann ich nicht kommen.", "Er ist leider krank.", "Leider haben wir keine Zeit."],
    "position_rules": ["Often in position 1 or the middle field."],
    "example_positions": ["Leider regnet es.", "Ich kann leider nicht helfen."]
  },
  {
    "base": "lieber", "level": "A2", "category": "manner",
    "translations": ["rather", "preferably"],
    "tip": "Comparative of 'gern'. 'Ich esse lieber Fisch als Fleisch' = I prefer fish to meat.",
    "common_mistakes": ["'Ich mag lieber' is redundant. Say 'Ich esse lieber X als Y' or 'Ich hätte lieber...'"],
    "examples": ["Ich trinke lieber Tee als Kaffee.", "Er geht lieber zu Fuß.", "Ich würde lieber zu Hause bleiben."],
    "position_rules": ["Usually in the middle field after the verb."],
    "example_positions": ["Ich fahre lieber mit dem Zug.", "Er bleibt lieber zu Hause."]
  }
];
export default adverbsA2;
