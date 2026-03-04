const ShopService = require("./shopService");
const Cart = require("./cart");

const shopA = new ShopService();
const shopB = new ShopService();

shopA.addProductToCart("Casque audio", 1);
shopB.addProductToCart("Clavier mécanique", 2);

// Vérification : les deux services utilisent le même panier
const cart = new Cart();
console.log("Contenu du panier :");
console.log(cart.getItems());