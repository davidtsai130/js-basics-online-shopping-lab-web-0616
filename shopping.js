var cart = []

function getCart {
  return cart
}

function setCart(newCart) {
  cart = newCart
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item) {
  price = Math.floor((Math.rand() * 100)) 
  cart.push({ [item]: price })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart {
  if (!cart.length) {return "Your shopping cart is empty."}

  cartdisplay = []

  for (i=0; i < cart.length; i++) {
    itemprice = cart[i]
    item = Object.keys(itemprice)[0]
    price = itemprice[item]

    cartdisplay.push(`${item} at \$${price}`)
  }
  console.log(`In your cart you have ${itemprice.join(', ')}`)
}

function removeFromCart(item) {
  if (cart.indexOf(item) >= 0) {"That item is not in your cart."}

  delete cart[item]
  return cart  
}

function placeOrder(creditcard) {
  if (!creditcard) { console.log("We don't have a credit card on file for you to place your order.")}

  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditcard}.`)

  cart = []
}
