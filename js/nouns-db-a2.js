// nouns-db-a2.js — A2 Elementary German Nouns (comprehensive)
const nounsA2 = [
  {
    "base": "Wohnung", "article": "die", "gender": "f", "level": "A2",
    "plural": "Wohnungen", "plural_with_article": "die Wohnungen",
    "genitive_with_article": "der Wohnung", "n_declension": false, "plural_pattern": "-en",
    "translations": ["apartment", "flat"],
    "tip": "Difference: 'das Haus' = house (whole building); 'die Wohnung' = apartment/flat (part of a building).",
    "examples": ["Ich suche eine Wohnung.", "Die Wohnung hat drei Zimmer.", "Wie viel kostet die Wohnung?"],
    "declension": {
      "nominativ": { "singular": "die Wohnung", "plural": "die Wohnungen" },
      "akkusativ": { "singular": "die Wohnung", "plural": "die Wohnungen" },
      "dativ": { "singular": "der Wohnung", "plural": "den Wohnungen" },
      "genitiv": { "singular": "der Wohnung", "plural": "der Wohnungen" }
    }
  },
  {
    "base": "Bahnhof", "article": "der", "gender": "m", "level": "A2",
    "plural": "Bahnhöfe", "plural_with_article": "die Bahnhöfe",
    "genitive_with_article": "des Bahnhofs", "n_declension": false, "plural_pattern": "Umlaut + -e",
    "translations": ["train station", "railway station"],
    "tip": "Compound: Bahn (railway) + Hof (yard/court). 'Am Bahnhof' = at the train station.",
    "examples": ["Ich warte am Bahnhof.", "Wie komme ich zum Bahnhof?", "Der Bahnhof ist groß."],
    "declension": {
      "nominativ": { "singular": "der Bahnhof", "plural": "die Bahnhöfe" },
      "akkusativ": { "singular": "den Bahnhof", "plural": "die Bahnhöfe" },
      "dativ": { "singular": "dem Bahnhof", "plural": "den Bahnhöfen" },
      "genitiv": { "singular": "des Bahnhofs", "plural": "der Bahnhöfe" }
    }
  },
  {
    "base": "Supermarkt", "article": "der", "gender": "m", "level": "A2",
    "plural": "Supermärkte", "plural_with_article": "die Supermärkte",
    "genitive_with_article": "des Supermarkts", "n_declension": false, "plural_pattern": "Umlaut + -e",
    "translations": ["supermarket", "grocery store"],
    "tip": "Compound noun. 'In den Supermarkt gehen' = to go to the supermarket. 'Im Supermarkt' = in/at the supermarket.",
    "examples": ["Ich kaufe im Supermarkt ein.", "Der Supermarkt schließt um 20 Uhr.", "Gibt es einen Supermarkt in der Nähe?"],
    "declension": {
      "nominativ": { "singular": "der Supermarkt", "plural": "die Supermärkte" },
      "akkusativ": { "singular": "den Supermarkt", "plural": "die Supermärkte" },
      "dativ": { "singular": "dem Supermarkt", "plural": "den Supermärkten" },
      "genitiv": { "singular": "des Supermarkts", "plural": "der Supermärkte" }
    }
  },
  {
    "base": "Restaurant", "article": "das", "gender": "n", "level": "A2",
    "plural": "Restaurants", "plural_with_article": "die Restaurants",
    "genitive_with_article": "des Restaurants", "n_declension": false, "plural_pattern": "-s",
    "translations": ["restaurant"],
    "tip": "Loanword from French, plural -s. 'Im Restaurant essen' = to eat at a restaurant.",
    "examples": ["Wir essen im Restaurant.", "Empfehlen Sie ein gutes Restaurant?", "Das Restaurant hat Tischreservierung."],
    "declension": {
      "nominativ": { "singular": "das Restaurant", "plural": "die Restaurants" },
      "akkusativ": { "singular": "das Restaurant", "plural": "die Restaurants" },
      "dativ": { "singular": "dem Restaurant", "plural": "den Restaurants" },
      "genitiv": { "singular": "des Restaurants", "plural": "der Restaurants" }
    }
  },
  {
    "base": "Urlaub", "article": "der", "gender": "m", "level": "A2",
    "plural": "Urlaube", "plural_with_article": "die Urlaube",
    "genitive_with_article": "des Urlaubs", "n_declension": false, "plural_pattern": "-e",
    "translations": ["vacation", "holiday"],
    "tip": "'Im Urlaub' = on holiday. 'Urlaub machen' = to go on holiday. 'Urlaub nehmen' = to take time off work.",
    "examples": ["Ich mache Urlaub in Spanien.", "Wo verbringst du deinen Urlaub?", "Er hat zwei Wochen Urlaub."],
    "declension": {
      "nominativ": { "singular": "der Urlaub", "plural": "die Urlaube" },
      "akkusativ": { "singular": "den Urlaub", "plural": "die Urlaube" },
      "dativ": { "singular": "dem Urlaub", "plural": "den Urlauben" },
      "genitiv": { "singular": "des Urlaubs", "plural": "der Urlaube" }
    }
  },
  {
    "base": "Termin", "article": "der", "gender": "m", "level": "A2",
    "plural": "Termine", "plural_with_article": "die Termine",
    "genitive_with_article": "des Termins", "n_declension": false, "plural_pattern": "-e",
    "translations": ["appointment", "deadline", "date"],
    "tip": "'Einen Termin machen' = to make an appointment. 'Einen Termin haben' = to have an appointment.",
    "examples": ["Ich habe einen Termin beim Arzt.", "Kannst du den Termin absagen?", "Wann ist der nächste freie Termin?"],
    "declension": {
      "nominativ": { "singular": "der Termin", "plural": "die Termine" },
      "akkusativ": { "singular": "den Termin", "plural": "die Termine" },
      "dativ": { "singular": "dem Termin", "plural": "den Terminen" },
      "genitiv": { "singular": "des Termins", "plural": "der Termine" }
    }
  },
  {
    "base": "Gesundheit", "article": "die", "gender": "f", "level": "A2",
    "plural": "—", "plural_with_article": "— (uncountable)",
    "genitive_with_article": "der Gesundheit", "n_declension": false, "plural_pattern": "no plural",
    "translations": ["health"],
    "tip": "Also said as 'Bless you!' after someone sneezes. No plural. 'Auf Ihre Gesundheit!' = To your health! (toast)",
    "examples": ["Gesundheit!" , "Er achtet auf seine Gesundheit.", "Gesundheit ist das Wichtigste."],
    "declension": {
      "nominativ": { "singular": "die Gesundheit", "plural": "—" },
      "akkusativ": { "singular": "die Gesundheit", "plural": "—" },
      "dativ": { "singular": "der Gesundheit", "plural": "—" },
      "genitiv": { "singular": "der Gesundheit", "plural": "—" }
    }
  },
  {
    "base": "Krankenhaus", "article": "das", "gender": "n", "level": "A2",
    "plural": "Krankenhäuser", "plural_with_article": "die Krankenhäuser",
    "genitive_with_article": "des Krankenhauses", "n_declension": false, "plural_pattern": "Umlaut + -er",
    "translations": ["hospital"],
    "tip": "Compound: krank (sick) + Haus. 'Ins Krankenhaus' = to the hospital. 'Im Krankenhaus' = in the hospital.",
    "examples": ["Er liegt im Krankenhaus.", "Ich muss ins Krankenhaus.", "Das Krankenhaus ist in der Nähe."],
    "declension": {
      "nominativ": { "singular": "das Krankenhaus", "plural": "die Krankenhäuser" },
      "akkusativ": { "singular": "das Krankenhaus", "plural": "die Krankenhäuser" },
      "dativ": { "singular": "dem Krankenhaus", "plural": "den Krankenhäusern" },
      "genitiv": { "singular": "des Krankenhauses", "plural": "der Krankenhäuser" }
    }
  },
  {
    "base": "Arzt", "article": "der", "gender": "m", "level": "A2",
    "plural": "Ärzte", "plural_with_article": "die Ärzte",
    "genitive_with_article": "des Arztes", "n_declension": false, "plural_pattern": "Umlaut + -e",
    "translations": ["doctor (male)", "physician"],
    "tip": "Female: die Ärztin. 'Zum Arzt gehen' = to go to the doctor. 'Mein Arzt' = my doctor.",
    "examples": ["Ich gehe zum Arzt.", "Der Arzt empfiehlt Ruhe.", "Sie ist Ärztin von Beruf."],
    "declension": {
      "nominativ": { "singular": "der Arzt", "plural": "die Ärzte" },
      "akkusativ": { "singular": "den Arzt", "plural": "die Ärzte" },
      "dativ": { "singular": "dem Arzt", "plural": "den Ärzten" },
      "genitiv": { "singular": "des Arztes", "plural": "der Ärzte" }
    }
  },
  {
    "base": "Küche", "article": "die", "gender": "f", "level": "A2",
    "plural": "Küchen", "plural_with_article": "die Küchen",
    "genitive_with_article": "der Küche", "n_declension": false, "plural_pattern": "-n",
    "translations": ["kitchen", "cuisine"],
    "tip": "Means both 'kitchen' (room) and 'cuisine' (style of cooking). 'Deutsche Küche' = German cuisine.",
    "examples": ["Die Küche ist modern.", "Er steht in der Küche.", "Ich liebe die italienische Küche."],
    "declension": {
      "nominativ": { "singular": "die Küche", "plural": "die Küchen" },
      "akkusativ": { "singular": "die Küche", "plural": "die Küchen" },
      "dativ": { "singular": "der Küche", "plural": "den Küchen" },
      "genitiv": { "singular": "der Küche", "plural": "der Küchen" }
    }
  },
  {
    "base": "Woche", "article": "die", "gender": "f", "level": "A2",
    "plural": "Wochen", "plural_with_article": "die Wochen",
    "genitive_with_article": "der Woche", "n_declension": false, "plural_pattern": "-n",
    "translations": ["week"],
    "tip": "'Diese Woche' = this week. 'Letzte Woche' = last week. 'Nächste Woche' = next week. 'In zwei Wochen' = in two weeks.",
    "examples": ["Ich lerne seit zwei Wochen Deutsch.", "Nächste Woche habe ich Urlaub.", "Die Woche hat sieben Tage."],
    "declension": {
      "nominativ": { "singular": "die Woche", "plural": "die Wochen" },
      "akkusativ": { "singular": "die Woche", "plural": "die Wochen" },
      "dativ": { "singular": "der Woche", "plural": "den Wochen" },
      "genitiv": { "singular": "der Woche", "plural": "der Wochen" }
    }
  },
  {
    "base": "Monat", "article": "der", "gender": "m", "level": "A2",
    "plural": "Monate", "plural_with_article": "die Monate",
    "genitive_with_article": "des Monats", "n_declension": false, "plural_pattern": "-e",
    "translations": ["month"],
    "tip": "'Im Monat' = per month / in the month. 'Letzten Monat' = last month. 'Nächsten Monat' = next month.",
    "examples": ["Ich bin seit einem Monat hier.", "Welcher Monat ist dein Lieblingsmonat?", "Er verdient 3000 Euro im Monat."],
    "declension": {
      "nominativ": { "singular": "der Monat", "plural": "die Monate" },
      "akkusativ": { "singular": "den Monat", "plural": "die Monate" },
      "dativ": { "singular": "dem Monat", "plural": "den Monaten" },
      "genitiv": { "singular": "des Monats", "plural": "der Monate" }
    }
  },
  {
    "base": "Reise", "article": "die", "gender": "f", "level": "A2",
    "plural": "Reisen", "plural_with_article": "die Reisen",
    "genitive_with_article": "der Reise", "n_declension": false, "plural_pattern": "-n",
    "translations": ["trip", "journey", "travel"],
    "tip": "'Eine Reise machen' = to take a trip. 'Gute Reise!' = Have a good journey! 'Auf Reisen sein' = to be traveling.",
    "examples": ["Die Reise nach Berlin war schön.", "Wir machen eine Reise nach Spanien.", "Gute Reise!"],
    "declension": {
      "nominativ": { "singular": "die Reise", "plural": "die Reisen" },
      "akkusativ": { "singular": "die Reise", "plural": "die Reisen" },
      "dativ": { "singular": "der Reise", "plural": "den Reisen" },
      "genitiv": { "singular": "der Reise", "plural": "der Reisen" }
    }
  },
  {
    "base": "Brief", "article": "der", "gender": "m", "level": "A2",
    "plural": "Briefe", "plural_with_article": "die Briefe",
    "genitive_with_article": "des Briefes", "n_declension": false, "plural_pattern": "-e",
    "translations": ["letter"],
    "tip": "For postal letters. Email is 'die E-Mail'. 'Einen Brief schreiben' = to write a letter.",
    "examples": ["Ich schreibe einen Brief.", "Er bekommt viele Briefe.", "Kannst du den Brief abschicken?"],
    "declension": {
      "nominativ": { "singular": "der Brief", "plural": "die Briefe" },
      "akkusativ": { "singular": "den Brief", "plural": "die Briefe" },
      "dativ": { "singular": "dem Brief", "plural": "den Briefen" },
      "genitiv": { "singular": "des Briefes", "plural": "der Briefe" }
    }
  },
  {
    "base": "Preis", "article": "der", "gender": "m", "level": "A2",
    "plural": "Preise", "plural_with_article": "die Preise",
    "genitive_with_article": "des Preises", "n_declension": false, "plural_pattern": "-e",
    "translations": ["price", "prize"],
    "tip": "Two meanings: 'price' (cost of something) and 'prize' (award). Context determines meaning.",
    "examples": ["Was ist der Preis?", "Der Preis ist zu hoch.", "Er hat einen Preis gewonnen."],
    "declension": {
      "nominativ": { "singular": "der Preis", "plural": "die Preise" },
      "akkusativ": { "singular": "den Preis", "plural": "die Preise" },
      "dativ": { "singular": "dem Preis", "plural": "den Preisen" },
      "genitiv": { "singular": "des Preises", "plural": "der Preise" }
    }
  },
  {
    "base": "Kleidung", "article": "die", "gender": "f", "level": "A2",
    "plural": "—", "plural_with_article": "— (uncountable)",
    "genitive_with_article": "der Kleidung", "n_declension": false, "plural_pattern": "no plural",
    "translations": ["clothing", "clothes"],
    "tip": "Usually uncountable. Individual items: 'das Kleidungsstück' or specific words (Jacke, Hose, etc.).",
    "examples": ["Er kauft neue Kleidung.", "Die Kleidung hängt im Schrank.", "Welche Kleidung trägst du gern?"],
    "declension": {
      "nominativ": { "singular": "die Kleidung", "plural": "—" },
      "akkusativ": { "singular": "die Kleidung", "plural": "—" },
      "dativ": { "singular": "der Kleidung", "plural": "—" },
      "genitiv": { "singular": "der Kleidung", "plural": "—" }
    }
  },
  {
    "base": "Hobby", "article": "das", "gender": "n", "level": "A2",
    "plural": "Hobbys", "plural_with_article": "die Hobbys",
    "genitive_with_article": "des Hobbys", "n_declension": false, "plural_pattern": "-s",
    "translations": ["hobby"],
    "tip": "English loanword, plural -s. 'Was sind deine Hobbys?' = What are your hobbies?",
    "examples": ["Mein Hobby ist Lesen.", "Was machst du in deiner Freizeit? — Ich habe viele Hobbys.", "Sport ist sein Hobby."],
    "declension": {
      "nominativ": { "singular": "das Hobby", "plural": "die Hobbys" },
      "akkusativ": { "singular": "das Hobby", "plural": "die Hobbys" },
      "dativ": { "singular": "dem Hobby", "plural": "den Hobbys" },
      "genitiv": { "singular": "des Hobbys", "plural": "der Hobbys" }
    }
  },
  {
    "base": "Sport", "article": "der", "gender": "m", "level": "A2",
    "plural": "Sportarten", "plural_with_article": "die Sportarten",
    "genitive_with_article": "des Sports", "n_declension": false, "plural_pattern": "only 'Sportarten' for types",
    "translations": ["sport", "exercise"],
    "tip": "'Sport treiben / machen' = to do sports. Individual sports: Fußball, Tennis, etc. 'Sportarten' for types of sport.",
    "examples": ["Er treibt viel Sport.", "Sport ist gesund.", "Welche Sportarten magst du?"],
    "declension": {
      "nominativ": { "singular": "der Sport", "plural": "die Sportarten" },
      "akkusativ": { "singular": "den Sport", "plural": "die Sportarten" },
      "dativ": { "singular": "dem Sport", "plural": "den Sportarten" },
      "genitiv": { "singular": "des Sports", "plural": "der Sportarten" }
    }
  },
  {
    "base": "Lärm", "article": "der", "gender": "m", "level": "A2",
    "plural": "—", "plural_with_article": "— (uncountable)",
    "genitive_with_article": "des Lärms", "n_declension": false, "plural_pattern": "no plural",
    "translations": ["noise", "racket"],
    "tip": "Usually uncountable. 'Lärm machen' = to make noise. 'Lärm ist störend' = noise is disturbing.",
    "examples": ["Der Lärm ist zu laut.", "Mach keinen Lärm!", "Der Verkehrslärm nervt."],
    "declension": {
      "nominativ": { "singular": "der Lärm", "plural": "—" },
      "akkusativ": { "singular": "den Lärm", "plural": "—" },
      "dativ": { "singular": "dem Lärm", "plural": "—" },
      "genitiv": { "singular": "des Lärms", "plural": "—" }
    }
  },
  {
    "base": "Nachricht", "article": "die", "gender": "f", "level": "A2",
    "plural": "Nachrichten", "plural_with_article": "die Nachrichten",
    "genitive_with_article": "der Nachricht", "n_declension": false, "plural_pattern": "-en",
    "translations": ["message", "news"],
    "tip": "'Nachrichten' (plural) = the news (as in TV news). 'Eine Nachricht' = a message. 'Nachrichten hören/sehen' = to watch/listen to the news.",
    "examples": ["Er schickt mir eine Nachricht.", "Ich schaue die Nachrichten.", "Hast du meine Nachricht bekommen?"],
    "declension": {
      "nominativ": { "singular": "die Nachricht", "plural": "die Nachrichten" },
      "akkusativ": { "singular": "die Nachricht", "plural": "die Nachrichten" },
      "dativ": { "singular": "der Nachricht", "plural": "den Nachrichten" },
      "genitiv": { "singular": "der Nachricht", "plural": "der Nachrichten" }
    }
  },
  {
    "base": "Geburtstag", "article": "der", "gender": "m", "level": "A2",
    "plural": "Geburtstage", "plural_with_article": "die Geburtstage",
    "genitive_with_article": "des Geburtstags", "n_declension": false, "plural_pattern": "-e",
    "translations": ["birthday"],
    "tip": "Compound: Geburt (birth) + Tag (day). 'Herzlichen Glückwunsch zum Geburtstag!' = Happy Birthday!",
    "examples": ["Wann hast du Geburtstag?", "Herzlichen Glückwunsch zum Geburtstag!", "Er feiert seinen Geburtstag."],
    "declension": {
      "nominativ": { "singular": "der Geburtstag", "plural": "die Geburtstage" },
      "akkusativ": { "singular": "den Geburtstag", "plural": "die Geburtstage" },
      "dativ": { "singular": "dem Geburtstag", "plural": "den Geburtstagen" },
      "genitiv": { "singular": "des Geburtstags", "plural": "der Geburtstage" }
    }
  }
,
  {
    "base": "Zeitung",
    "level": "A2",
    "article": "die",
    "plural": "Zeitungen",
    "category": "media",
    "translations": [
      "newspaper"
    ],
    "examples": [
      "Ich lese jeden Morgen die Zeitung.",
      "Hast du die Zeitung schon gelesen?",
      "Die Zeitung kostet 2 Euro."
    ],
    "tip": "Die Zeitung — daily print news. Use with lesen (to read)."
  },
  {
    "base": "Haustier",
    "level": "A2",
    "article": "das",
    "plural": "Haustiere",
    "category": "animals",
    "translations": [
      "pet"
    ],
    "examples": [
      "Haben Sie ein Haustier?",
      "Mein Haustier ist ein Hund.",
      "Wir haben zwei Haustiere: eine Katze und einen Hund."
    ],
    "tip": "Haustier = Haus + Tier (house animal). Very common in everyday conversation."
  },
  {
    "base": "Nachbar",
    "level": "A2",
    "article": "der",
    "plural": "Nachbarn",
    "category": "people",
    "translations": [
      "neighbour"
    ],
    "examples": [
      "Mein Nachbar ist sehr freundlich.",
      "Die Nachbarn machen viel Lärm.",
      "Ich kenne meinen Nachbarn gut."
    ],
    "tip": "der Nachbar / die Nachbarin. Neighbours are often discussed when talking about apartment life in Germany."
  },
  {
    "base": "Geschaeft",
    "level": "A2",
    "article": "das",
    "plural": "Geschaefte",
    "category": "places",
    "translations": [
      "shop",
      "business"
    ],
    "examples": [
      "Das Geschaeft oeffnet um 9 Uhr.",
      "Ich gehe ins Geschaeft.",
      "Die Geschaefte sind sonntags geschlossen."
    ],
    "tip": "Two meanings: 1) a shop/store, 2) business/dealings. Context usually makes it clear.",
    "base_display": "Geschäft",
    "plural_display": "Geschäfte"
  },
  {
    "base": "Jahreszeit",
    "level": "A2",
    "article": "die",
    "plural": "Jahreszeiten",
    "category": "nature",
    "translations": [
      "season"
    ],
    "examples": [
      "Meine Lieblingsjahrzeit ist der Sommer.",
      "Es gibt vier Jahreszeiten.",
      "Im Fruehling bluehen die Blumen."
    ],
    "tip": "Compound: Jahr (year) + Zeit (time). The four seasons: Fruehling, Sommer, Herbst, Winter."
  },
  {
    "base": "Ausflug",
    "level": "A2",
    "article": "der",
    "plural": "Ausfluge",
    "category": "leisure",
    "translations": [
      "excursion",
      "day trip"
    ],
    "examples": [
      "Wir machen einen Ausflug ins Gruene.",
      "Der Ausflug hat viel Spass gemacht.",
      "Plant ihr einen Ausflug am Wochenende?"
    ],
    "tip": "einen Ausflug machen = to go on a day trip. Common weekend activity vocabulary.",
    "plural_display": "Ausflüge"
  },
  {
    "base": "Formular",
    "level": "A2",
    "article": "das",
    "plural": "Formulare",
    "category": "admin",
    "translations": [
      "form"
    ],
    "examples": [
      "Bitte fuellen Sie das Formular aus.",
      "Das Formular muss unterschrieben werden.",
      "Wo bekomme ich dieses Formular?"
    ],
    "tip": "ein Formular ausfuellen = to fill in a form. Unavoidable in German bureaucracy!"
  },
  {
    "base": "Ticket",
    "level": "A2",
    "article": "das",
    "plural": "Tickets",
    "category": "travel",
    "translations": [
      "ticket"
    ],
    "examples": [
      "Ich habe das Ticket online gekauft.",
      "Zeigen Sie mir bitte Ihr Ticket.",
      "Das Ticket kostet 30 Euro."
    ],
    "tip": "Widely used alongside die Fahrkarte (train ticket). Ticket is used for events, flights, and modern transport."
  },
  {
    "base": "Strassenbahnhaltestelle",
    "level": "A2",
    "article": "die",
    "plural": "Haltestellen",
    "category": "transport",
    "translations": [
      "bus stop",
      "tram stop"
    ],
    "examples": [
      "Wo ist die naechste Haltestelle?",
      "Ich warte an der Haltestelle.",
      "Bis zur Haltestelle sind es 5 Minuten."
    ],
    "tip": "Haltestelle = halt (stop) + Stelle (place). Works for bus, tram, and sometimes U-Bahn stops.",
    "base_display": "Haltestelle"
  }
];
export default nounsA2;
