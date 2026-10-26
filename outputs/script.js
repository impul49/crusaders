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
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");
stateSelect.addEventListener("change", function () {
  citySelect.replaceChildren(new Option("Select a city", ""));
  citySelect.disabled = !this.value;
  if (!this.value) {
    citySelect.options[0].text = "Select a state first";
    return;
  }
  citiesByState[this.value].forEach(function (city) {
    citySelect.add(new Option(city, city));
  });
});
