const TicketFactory = require("./ticketFactory");

const factory = new TicketFactory();

const t1 = factory.createTicket("tech", "Le serveur ne répond plus");
const t2 = factory.createTicket("billing", "Erreur sur ma facture");
const t3 = factory.createTicket("other", "Question sur mon compte");

console.log("=== Tickets créés ===");
console.log(t1);
console.log(t2);
console.log(t3);