// Décorateur de base
class NotifierDecorator {
  constructor(notifier) {
    this.notifier = notifier;
  }

  send(message) {
    this.notifier.send(message);
  }
}

class TimestampDecorator extends NotifierDecorator {
  send(message) {
    const stamped = `[${new Date().toISOString()}] ${message}`;
    super.send(stamped);
  }
}

class UrgentDecorator extends NotifierDecorator {
  send(message) {
    const urgent = `[URGENT] ${message}`;
    super.send(urgent);
  }
}

class CounterDecorator extends NotifierDecorator {
  constructor(notifier) {
    super(notifier);
    this.count = 0;
  }

  send(message) {
    this.count++;
    const counted = `[#${this.count}] ${message}`;
    super.send(counted);
  }
}

module.exports = {
  TimestampDecorator,
  UrgentDecorator,
  CounterDecorator,
};