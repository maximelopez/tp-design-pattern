const WeatherStation = require("./subject");
const {
  ScreenDisplay,
  MobileDisplay,
  OutdoorDisplay,
} = require("./observers");

const station = new WeatherStation();

// Création des observateurs
const screen = new ScreenDisplay();
const mobile = new MobileDisplay();
const outdoor = new OutdoorDisplay();

// Abonnement
station.addObserver(screen);
station.addObserver(mobile);
station.addObserver(outdoor);

// Mise à jour de la température
station.setTemperature(12);
station.setTemperature(18);