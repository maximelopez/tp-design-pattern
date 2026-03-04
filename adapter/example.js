// Classe existante (incompatible)
class ExternalService {
  post(text) {
    console.log("Service externe :", text);
  }
}

// Interface attendue
class Notifier {
  send(message) {}
}

// Adapter
class NotifierAdapter extends Notifier {
  constructor(externalService) {
    super();
    this.externalService = externalService;
  }

  send(message) {
    this.externalService.post(message);
  }
}

// Utilisation
const external = new ExternalService();
const notifier = new NotifierAdapter(external);

notifier.send("Hello !");