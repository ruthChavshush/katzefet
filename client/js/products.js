import axios from "axios"

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("iceCreamContainer")
  container.classList.add("container")

  // Function to fetch products from the server
  async function fetchShopProducts() {
    try {
      console.log("try to fetch products")
      const response = await axios.get("http://localhost:5000/storeItems") // Update the URL to match your API endpoint
      console.log("response :", response)
      const shopProducts = response.data.products
      // sessionStorage.setItem("products", JSON.stringify(shopProducts))
      return shopProducts
    } catch (error) {
      console.log("Error fetching shop products:", error)
      return null
    }
  }

  function renderCards(products, selectedType) {
    console.log("renderCards")
    console.log("selectedType :", selectedType)
    console.log("products :", products)
    container.innerHTML = ""
    products[selectedType].forEach((product) => {
      console.log("product :", product)
      const card = document.createElement("div")
      card.classList.add("card")

      const img = document.createElement("img")
      img.src = "../images/iceCream/fistok.png" 
      console.log('product.img :', product.img);
      img.alt = product.name

      const name = document.createElement("h2")
      name.textContent = product.name

      const cost = document.createElement("p")
      cost.textContent = product.cost + ' ש"ח '

      const addButton = document.createElement("button")
      addButton.textContent = "הוסף לעגלה"

      addButton.addEventListener("click", function () {
        addItemToCart(product)
      })

      card.appendChild(img)
      card.appendChild(name)
      card.appendChild(cost)
      card.appendChild(addButton)

      container.appendChild(card)
    })
  }

  // Load products from the server or from sessionStorage if available
  async function initializeProducts() {
    console.log("initializeProducts")
    // let products = JSON.parse(sessionStorage.getItem("products"))
    // if (!products) {
    const products = await fetchShopProducts()
    // }
    console.log("products :", products)
    if (products) {
      renderCards(products, "iceCream")
      document.querySelectorAll(".tag").forEach((tag) => {
        tag.addEventListener("click", function () {
          const selectedType = this.getAttribute("data-filter")
          renderCards(products, selectedType)
        })
      })
    }
  }

  // Call the function to initialize the product display
  initializeProducts()
})
