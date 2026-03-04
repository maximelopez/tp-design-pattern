const {
  TechnicalTicket,
  BillingTicket,
  GeneralTicket,
} = require("./tickets");

class TicketFactory {
  createTicket(category, description) {
    switch (category) {
      case "tech":
        return new TechnicalTicket(description);
      case "billing":
        return new BillingTicket(description);
      default:
        return new GeneralTicket(description);
    }
  }
}

module.exports = TicketFactory;