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
    if (cart.length<1) {
    console.log(`Your shopping cart is empty.`)
  } else if (cart.length === 1) {
  for (let [key, value] of Object.entries(cart)) {  
  console.log(`In your cart, you have ${key} at ${value}.`)
}
} else if (cart.length === 2) {
  for(var key in cart) {
  console.log(`In your cart, you have ${key[0]} at $${cart[key][0]} and ${key[1]} at $${cart[key][1]}.`)

}

} else {
  console.log("not done")
}
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