class WeatherStation {
  constructor() {
    this.observers = [];
    this.temperature = null;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  setTemperature(temp) {
    this.temperature = temp;
    console.log(`Nouvelle température : ${temp}°C`);
    this.notifyObservers();
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.temperature));
  }
}

module.exports = WeatherStation;