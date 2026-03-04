const Cart = require("./cart");

class ShopService {
  constructor() {
    this.cart = new Cart();
  }

  addProductToCart(productName, quantity) {
    this.cart.addItem(productName, quantity);
    console.log(`Produit ajouté : ${productName} x${quantity}`);
  }
}

module.exports = ShopService;