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
               </div>
           </li>
           </ul>`
    })
  } else {
    strCartListTags = `<p class="emptyCartText">העגלה ריקה ובחנות יש הרבה דברים טעימים :)</p>`
  }
  shoppingCartList.innerHTML = strCartListTags
  document.getElementById("totalCartPrice").innerText =
    calculateTotal() + ' ש"ח '
}

document.addEventListener("DOMContentLoaded", renderShoppingCart)
