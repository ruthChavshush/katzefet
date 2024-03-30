function getShoppingCart() {
  console.log("get shopping cart")
  const shoppingCart = sessionStorage.getItem("shoppingCart")
    ? JSON.parse(sessionStorage.getItem("shoppingCart"))
    : []
  console.log(shoppingCart)
  return shoppingCart
}

function resetShoppingCart() {
  sessionStorage.setItem("shoppingCart", [])
}

function addItemToCart(productToAdd) {
  let shoppingCart = getShoppingCart()
  existingProduct = shoppingCart.find(
    (productInCart) => productInCart.makat === productToAdd.makat
  )
  existingProduct
    ? existingProduct.amount++
    : shoppingCart.push({ ...productToAdd, amount: 1 })

  sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
}

function changeProductAmount(productIndex, changingAmount) {
  let shoppingCart = getShoppingCart()
  let product = shoppingCart[productIndex]
  product.amount += changingAmount
  product.amount <= 0 ? shoppingCart.splice(productIndex, 1) : null
  sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
  renderShoppingCart()
}

function calculateTotal() {
  let shoppingCart = getShoppingCart()
  let total = 0
  for (let item of shoppingCart) {
    total += item.amount * item.cost
  }
  return total
}
