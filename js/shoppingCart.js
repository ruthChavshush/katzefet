function getShoppingCart() {
  const shoppingCart = sessionStorage.getItem("shoppingCart")
  return shoppingCart ? JSON.parse(shoppingCart) : []
}

function getProducts() {
  return sessionStorage.getItem("products")
    ? JSON.parse(sessionStorage.getItem("products"))
    : []
}

function resetShoppingCart() {
  sessionStorage.setItem("shoppingCart", [])
}

function addItemToCart(productToAdd) {
  let shoppingCart = getShoppingCart()
  let products = getProducts()
  const product = products.find(
    (productInCart) => productInCart.makat === productToAdd.makat
  )
  if (Number(product.quantityInStore) > 0) {
    existingProduct = shoppingCart.find(
      (productInCart) => productInCart.makat === productToAdd.makat
    )
    product.quantityInStore--
    const { quantityInStore, ...productDetails } = productToAdd
    existingProduct
      ? existingProduct.amount++
      : shoppingCart.push({ ...productDetails, amount: 1 })
    sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
    sessionStorage.setItem("products", JSON.stringify(products))
  } else {
    alert("מצטערים, המוצר אזל מהמלאי:(")
  }
}
function changeProductAmount(productIndex, changingAmount) {
  let shoppingCart = getShoppingCart()
  let productInCart = shoppingCart[productIndex]
  const products = getProducts()
  const product = products.find((p) => p.makat === productInCart.makat)

  if (changingAmount == "1") {
    if (product.quantityInStore >= 1) {
      productInCart.amount += 1
      product.quantityInStore--
    } else {
      alert("לא ניתן להוסיף יותר מן הכמות הנוכחית עקב מחסור במלאי")
    }
  } else {
    productInCart.amount -= 1
    productInCart.amount <= 0 ? shoppingCart.splice(productIndex, 1) : null
    product.quantityInStore++
  }
  sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
  sessionStorage.setItem("products", JSON.stringify(products))
  renderShoppingCart()
}

function clearShoppingCart() {
  //לעבור על הסשן סטורג ולהוסיף את הכמויות
  shoppingCart = []
  renderShoppingCart()
}

function calculateTotal() {
  const shoppingCart = getShoppingCart()
  let total = 0
  for (let item of shoppingCart) {
    total += item.amount * item.cost
  }
  return total
}

function removeItemFromCart(indexItemToRemove) {
  const shoppingCart = getShoppingCart()
  shoppingCart.splice(indexItemToRemove, 1)
  sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
  renderShoppingCart()
}

function renderShoppingCart() {
  let shoppingCart = getShoppingCart()
  const shoppingCartList = document.getElementById("shoppingCartList")
  let strCartListTags = ""
  if (shoppingCart.length) {
    shoppingCart.forEach((productInCart, indexProduct) => {
      strCartListTags += `<ul class="list-group list-group-flush">
        <li class="list-group-item">
            <div class="itemInCart">
             <img class="round itemInCartImg" src="${productInCart.imgSrc}">
               <h5 class="itemInCartTitle">${productInCart.name}</h3>
                <div onclick="changeProductAmount(${indexProduct},1)" class="itemAmountBtn">+</div>
                <span class="itemAmount">${productInCart.amount}</span>
                <div onclick="changeProductAmount(${indexProduct},-1)" class="itemAmountBtn">-</div>
                <span class="itemTotalCost">${
                  productInCart.amount * productInCart.cost
                } ש"ח</span>
                <img onclick="removeItemFromCart(${indexProduct})" class="removeItem" src="../images/garbage.jpeg"></img>
            </div>
        </li>
        </ul>`
    })
  } else {
    strCartListTags = `<p class="emptyCartText">העגלה ריקה ובחנות יש הרבה דברים טעימים :)</p>`
  }
  shoppingCartList.innerHTML = strCartListTags
  totalCartPrice = document.getElementById("totalCartPrice").innerText =
    calculateTotal() + ' ש"ח '
}

document.addEventListener("DOMContentLoaded", renderShoppingCart)
