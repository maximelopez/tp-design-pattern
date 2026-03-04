const Notifier = require("./services");
const {
  TimestampDecorator,
  UrgentDecorator,
  CounterDecorator,
} = require("./decorators");

// Objet de base
let notifier = new Notifier();

// On empile les décorateurs
notifier = new TimestampDecorator(notifier);
notifier = new UrgentDecorator(notifier);
notifier = new CounterDecorator(notifier);

// Envoi de messages
notifier.send("Système opérationnel");
notifier.send("Batterie faible");