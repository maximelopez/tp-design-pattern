class TechnicalTicket {
  constructor(description) {
    this.type = "Technique";
    this.description = description;
  }
}

class BillingTicket {
  constructor(description) {
    this.type = "Facturation";
    this.description = description;
  }
}

class GeneralTicket {
  constructor(description) {
    this.type = "Général";
    this.description = description;
  }
}

module.exports = { TechnicalTicket, BillingTicket, GeneralTicket };