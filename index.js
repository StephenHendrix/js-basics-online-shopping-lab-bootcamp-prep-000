var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomIntInclusive(min, max) {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min 
}
  cart.push({ [item]: getRandomIntInclusive(1, 100) })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  Object.keys
}
  
  
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}