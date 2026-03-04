class Cart {
  constructor() {
    if (Cart._instance) {
      return Cart._instance;
    }

    this.items = [];
    Cart._instance = this;
  }

  addItem(productName, quantity) {
    this.items.push({ productName, quantity });
  }

  getItems() {
    return this.items;
  }
}

module.exports = Cart;