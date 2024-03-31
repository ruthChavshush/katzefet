document.addEventListener("DOMContentLoaded", function () {
  const shopProducts = {
    iceCream: [
      {
        makat: "1",
        name: "גלידת כרמל",
        cost: "5",
        imgSrc: "../images/iceCream/caramel.png",
        quantityInStore: "5",
      },
      {
        makat: "2",
        name: "שוקולד שוויצרי ",
        cost: "5",
        imgSrc: "../images/iceCream/chocolate.png",
        quantityInStore: "5",
      },
      {
        makat: "3",
        name: "שוקולד מריר",
        cost: "25",
        imgSrc: "../images/iceCream/dark.png",
        quantityInStore: "5",
      },
      {
        makat: "4",
        name: "אספרסו",
        cost: "23",
        imgSrc: "../images/iceCream/espresso.png",
        quantityInStore: "5",
      },
      {
        makat: "5",
        name: "קינדר בואנו",
        cost: "22",
        imgSrc: "../images/iceCream/kinder.png",
        quantityInStore: "5",
      },
      {
        makat: "6",
        name: "פיסטוק",
        cost: "42",
        imgSrc: "../images/iceCream/fistok.png",
        quantityInStore: "5",
      },
      {
        makat: "7",
        name: "וניל צרפתי",
        cost: "34",
        imgSrc: "../images/iceCream/french.png",
        quantityInStore: "5",
      },
      {
        makat: "8",
        name: "מסטיק",
        cost: "24",
        imgSrc: "../images/iceCream/gum.png",
        quantityInStore: "5",
      },
      {
        makat: "9",
        name: "עוגיות לוטוס",
        cost: "24",
        imgSrc: "../images/iceCream/lotus.png",
        quantityInStore: "5",
      },
      {
        makat: "10",
        name: "עוגיות אוראו",
        cost: "34",
        imgSrc: "../images/iceCream/oreo.png",
        quantityInStore: "5",
      },
      {
        makat: "11",
        name: "פררו רושה",
        cost: "22",
        imgSrc: "../images/iceCream/roshe.png",
        quantityInStore: "5",
      },
      {
        makat: "12",
        name: "וניל מקופלת",
        cost: "15",
        imgSrc: "../images/iceCream/vanille.png",
        quantityInStore: "5",
      },
      {
        makat: "13",
        name: "סורבה תות",
        cost: "32",
        imgSrc: "../images/iceCream/strawberry.png",
        quantityInStore: "5",
      },
      {
        makat: "14",
        name: "סורבה פירות יער",
        cost: "17",
        imgSrc: "../images/iceCream/yaar.png",
        quantityInStore: "5",
      },
      {
        makat: "15",
        name: "סורבה פסיפלורה",
        cost: "25",
        imgSrc: "../images/iceCream/pasiflora.png",
        quantityInStore: "5",
      },
      {
        makat: "16",
        name: "סורבה מנגו",
        cost: "23",
        imgSrc: "../images/iceCream/mango.png",
        quantityInStore: "5",
      },
    ],
    drinks: [
      {
        makat: "1",
        name: "מים",
        cost: "6",
        imgSrc: "../images/drinks/water.png",
        quantityInStore: "10",
      },
      {
        makat: "2",
        name: "מוגז",
        cost: "10",
        imgSrc: "../images/drinks/schweppes.jpg",
        quantityInStore: "10",
      },
      {
        makat: "3",
        name: "פחית",
        cost: "7",
        imgSrc: "../images/drinks/coca.jpg",
        quantityInStore: "10",
      },
      {
        makat: "4",
        name: "בקבוק גדול",
        cost: "12",
        imgSrc: "../images/drinks/bigBottle.png",
        quantityInStore: "10",
      },
    ],
  }

  const container = document.getElementById("iceCreamContainer")
  container.classList.add("container")

  function renderCards(selectedType) {
    container.innerHTML = ""
    shopProducts[selectedType].forEach((product) => {
      const card = document.createElement("div")
      card.classList.add("card")

      const img = document.createElement("img")
      img.src = product.imgSrc
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
  document.querySelectorAll(".tag").forEach((tag) => {
    tag.addEventListener("click", function () {
      const selectedType = this.getAttribute("data-filter")
      renderCards(selectedType)
    })
  })
  renderCards("iceCream")
  const shoppingCart = sessionStorage.getItem("products")
  if (!shoppingCart) {
    sessionStorage.setItem("products", JSON.stringify(shopProducts))
  }
})
