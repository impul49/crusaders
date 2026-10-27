const citiesByState = {
  "Baden-Württemberg": ["Stuttgart", "Mannheim", "Karlsruhe", "Freiburg im Breisgau", "Heidelberg", "Ulm", "Heilbronn", "Pforzheim", "Reutlingen", "Esslingen am Neckar"],
  "Bayern": ["München", "Nürnberg", "Augsburg", "Regensburg", "Ingolstadt", "Würzburg", "Fürth", "Erlangen", "Bamberg", "Bayreuth", "Passau", "Kempten"],
  "Berlin": ["Berlin"],
  "Brandenburg": ["Potsdam", "Cottbus", "Brandenburg an der Havel", "Frankfurt (Oder)", "Oranienburg", "Eberswalde", "Falkensee", "Bernau bei Berlin"],
  "Bremen": ["Bremen", "Bremerhaven"],
  "Hamburg": ["Hamburg"],
  "Hessen": ["Frankfurt am Main", "Wiesbaden", "Darmstadt", "Kassel", "Offenbach am Main", "Hanau", "Gießen", "Marburg", "Fulda"],
  "Mecklenburg-Vorpommern": ["Rostock", "Schwerin", "Neubrandenburg", "Greifswald", "Stralsund", "Wismar", "Güstrow"],
  "Niedersachsen": ["Hannover", "Braunschweig", "Osnabrück", "Oldenburg", "Wolfsburg", "Göttingen", "Salzgitter", "Hildesheim", "Lüneburg", "Celle"],
  "Nordrhein-Westfalen": ["Köln", "Düsseldorf", "Dortmund", "Essen", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster", "Aachen", "Mönchengladbach", "Gelsenkirchen", "Krefeld", "Oberhausen"],
  "Rheinland-Pfalz": ["Mainz", "Ludwigshafen am Rhein", "Koblenz", "Trier", "Kaiserslautern", "Worms", "Neuwied", "Neustadt an der Weinstraße", "Speyer", "Bad Kreuznach"],
  "Saarland": ["Saarbrücken", "Neunkirchen", "Homburg", "Völklingen", "Saarlouis", "St. Ingbert"],
  "Sachsen": ["Leipzig", "Dresden", "Chemnitz", "Zwickau", "Plauen", "Görlitz", "Freiberg", "Bautzen", "Pirna"],
  "Sachsen-Anhalt": ["Halle (Saale)", "Magdeburg", "Dessau-Roßlau", "Lutherstadt Wittenberg", "Halberstadt", "Stendal", "Merseburg", "Weißenfels"],
  "Schleswig-Holstein": ["Kiel", "Lübeck", "Flensburg", "Neumünster", "Norderstedt", "Elmshorn", "Pinneberg", "Itzehoe", "Rendsburg", "Schleswig"],
  "Thüringen": ["Erfurt", "Jena", "Gera", "Weimar", "Gotha", "Nordhausen", "Eisenach", "Suhl"]
};

const translations = {
  en: {
    pageDescription: "Register your interest in joining a local Crusaders chapter.",
    languageLabel: "Choose language",
    eyebrow: "A local mobilization",
    headline: "JOIN <span>JAKE LANG &amp; LEON SINGH</span> &amp; YOUR LOCAL <span>CRUSADERS</span> CHAPTER",
    slogan: "Take a stand against mass migration",
    intro: "Tell us your city and state to register your interest in joining the crusaders. LEON SINGH will reach out to you immediately!",
    openingCta: "Enlist your chapter",
    crossLabel: "A Christian cross in a circular emblem",
    formKicker: "Enlistment form",
    formTitle: "Crusaders Chapter Registry",
    registryNote: "Share your location and interest. We’ll follow up when local organizer details are available.",
    formIntro: "Register your interest in joining or starting a local chapter.",
    firstNameLabel: "First name *",
    firstNamePlaceholder: "First name",
    lastNameLabel: "Last name *",
    lastNamePlaceholder: "Last name",
    stateLabel: "State *",
    statePlaceholder: "Select a state",
    cityLabel: "City *",
    cityStateFirst: "Select a state first",
    cityPlaceholder: "Select a city",
    emailLabel: "Email *",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Cell phone *",
    phoneCountryLabel: "Fixed country code",
    phoneHint: "Enter the number without the first 0.",
    submitButton: "Enlist my chapter",
    privacy: "Submissions are forwarded via FormSubmit to the chapter inbox.",
    subject: "New Crusaders Chapter Interest"
  },
  de: {
    pageDescription: "Melde dein Interesse an, einer lokalen Crusaders-Ortsgruppe beizutreten.",
    languageLabel: "Sprache auswählen",
    eyebrow: "Mobilisierung vor Ort",
    headline: "SCHLIESSE DICH <span>JAKE LANG &amp; LEON SINGH</span> &amp; DEINER LOKALEN <span>CRUSADERS</span>-ORTSGRUPPE AN",
    slogan: "Nimm Stellung gegen Massenmigration",
    intro: "Nenne uns deine Stadt und dein Bundesland, um dein Interesse an einem Beitritt zu den Crusaders zu bekunden. LEON SINGH wird sich umgehend bei dir melden!",
    openingCta: "Zur Anmeldung",
    crossLabel: "Ein christliches Kreuz in einem runden Emblem",
    formKicker: "Anmeldeformular",
    formTitle: "Crusaders-Register für Ortsgruppen",
    registryNote: "Teile uns deinen Standort und dein Interesse mit. Wir melden uns, sobald Informationen zu lokalen Organisatoren verfügbar sind.",
    formIntro: "Melde dein Interesse an, einer lokalen Ortsgruppe beizutreten oder eine zu gründen.",
    firstNameLabel: "Vorname *",
    firstNamePlaceholder: "Vorname",
    lastNameLabel: "Nachname *",
    lastNamePlaceholder: "Nachname",
    stateLabel: "Bundesland *",
    statePlaceholder: "Bundesland auswählen",
    cityLabel: "Stadt *",
    cityStateFirst: "Wähle zuerst ein Bundesland",
    cityPlaceholder: "Stadt auswählen",
    emailLabel: "E-Mail-Adresse *",
    emailPlaceholder: "du@beispiel.de",
    phoneLabel: "Mobilnummer *",
    phoneCountryLabel: "Fest eingestellte Landesvorwahl",
    phoneHint: "Gib die Nummer ohne die führende 0 ein.",
    submitButton: "Mein Interesse anmelden",
    privacy: "Deine Angaben werden über FormSubmit an das Postfach für Crusaders-Anfragen weitergeleitet.",
    subject: "Neue Anfrage zu einer Crusaders-Ortsgruppe"
  }
};

const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");
let currentLanguage = "en";

function updateCityOptions(preserveSelection = false) {
  const selectedCity = preserveSelection ? citySelect.value : "";
  const state = stateSelect.value;

  if (!state) {
    citySelect.replaceChildren(new Option(translations[currentLanguage].cityStateFirst, ""));
    citySelect.disabled = true;
    return;
  }

  citySelect.replaceChildren(new Option(translations[currentLanguage].cityPlaceholder, ""));
  citiesByState[state].forEach(function (city) {
    citySelect.add(new Option(city, city));
  });
  citySelect.value = selectedCity;
  citySelect.disabled = false;
}

function setLanguage(language) {
  if (!translations[language]) return;

  currentLanguage = language;
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelector('meta[name="description"]').content = copy.pageDescription;
  document.querySelector(".language-switch").setAttribute("aria-label", copy.languageLabel);
  document.getElementById("opening-title").innerHTML = copy.headline;
  document.getElementById("form-subject").value = copy.subject;

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
    element.placeholder = copy[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (element) {
    element.setAttribute("aria-label", copy[element.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-language]").forEach(function (button) {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  updateCityOptions(true);
  try {
    localStorage.setItem("crusaders-language", language);
  } catch (error) {
    // Language switching still works when browser storage is unavailable.
  }
}

stateSelect.addEventListener("change", function () {
  updateCityOptions(false);
});

document.querySelectorAll("[data-language]").forEach(function (button) {
  button.addEventListener("click", function () {
    setLanguage(button.dataset.language);
  });
});

try {
  const savedLanguage = localStorage.getItem("crusaders-language");
  if (savedLanguage === "de") currentLanguage = "de";
} catch (error) {
  // English remains the default when browser storage is unavailable.
}
setLanguage(currentLanguage);
