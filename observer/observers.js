class ScreenDisplay {
  update(temp) {
    console.log(`Écran principal : ${temp}°C`);
  }
}

class MobileDisplay {
  update(temp) {
    console.log(`Écran mobile : ${temp}°C`);
  }
}

class OutdoorDisplay {
  update(temp) {
    console.log(`Écran extérieur : ${temp}°C`);
  }
}

module.exports = { ScreenDisplay, MobileDisplay, OutdoorDisplay };