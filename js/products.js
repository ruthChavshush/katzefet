document.addEventListener("DOMContentLoaded", function () {
  const shopProducts = {
    iceCream: [
      {
        makat: "1",
        name: "גלידת כרמל",
        cost: "5",
        imgSrc: "../images/iceCream/caramel.png",
      },
      {
        makat: "2",
        name: "שוקולד שוויצרי ",
        cost: "5",
        imgSrc: "../images/iceCream/chocolate.png",
      },
      {
        makat: "3",
        name: "שוקולד מריר",
        cost: "25",
        imgSrc: "../images/iceCream/dark.png",
      },
      {
        makat: "4",
        name: "אספרסו",
        cost: "23",
        imgSrc: "../images/iceCream/espresso.png",
      },
      {
        makat: "5",
        name: "קינדר בואנו",
        cost: "22",
        imgSrc: "../images/iceCream/kinder.png",
      },
      {
        makat: "6",
        name: "פיסטוק",
        cost: "42",
        imgSrc: "../images/iceCream/fistok.png",
      },
      {
        makat: "7",
        name: "וניל צרפתי",
        cost: "34",
        imgSrc: "../images/iceCream/french.png",
      },
      {
        makat: "8",
        name: "מסטיק",
        cost: "24",
        imgSrc: "../images/iceCream/gum.png",
      },
      {
        makat: "9",
        name: "עוגיות לוטוס",
        cost: "24",
        imgSrc: "../images/iceCream/lotus.png",
      },
      {
        makat: "10",
        name: "עוגיות אוראו",
        cost: "34",
        imgSrc: "../images/iceCream/oreo.png",
      },
      {
        makat: "11",
        name: "פררו רושה",
        cost: "22",
        imgSrc: "../images/iceCream/roshe.png",
      },
      {
        makat: "12",
        name: "וניל מקופלת",
        cost: "15",
        imgSrc: "../images/iceCream/vanille.png",
      },
      {
        makat: "13",
        name: "סורבה תות",
        cost: "32",
        imgSrc: "../images/iceCream/strawberry.png",
      },
      {
        makat: "14",
        name: "סורבה פירות יער",
        cost: "17",
        imgSrc: "../images/iceCream/yaar.png",
      },
      {
        makat: "15",
        name: "סורבה פסיפלורה",
        cost: "25",
        imgSrc: "../images/iceCream/pasiflora.png",
      },
      {
        makat: "16",
        name: "סורבה מנגו",
        cost: "23",
        imgSrc: "../images/iceCream/mango.png",
      },
    ],
    drinks: [
      {
        makat: "1",
        name: "מים",
        cost: "6",
        imgSrc: "../images/drinks/water.png",
      },
      {
        makat: "2",
        name: "מוגז",
        cost: "10",
        imgSrc: "../images/drinks/schweppes.jpg",
      },
      {
        makat: "3",
        name: "פחית",
        cost: "7",
        imgSrc: "../images/drinks/coca.jpg",
      },
      {
        makat: "4",
        name: "בקבוק גדול",
        cost: "12",
        imgSrc: "../images/drinks/bigBottle.png",
      },
    ],
  };

  const container = document.getElementById("iceCreamContainer");
  container.classList.add("container");

  function renderCards(selectedType) {
    container.innerHTML = "";
    shopProducts[selectedType].forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = product.imgSrc;
      img.alt = product.name;

      const name = document.createElement("h2");
      name.textContent = product.name;

      const cost = document.createElement("p");
      cost.textContent = product.cost + ' ש"ח ';

      const addButton = document.createElement("button");
      addButton.textContent = "הוסף לעגלה";
      
      addButton.addEventListener("click", function () {
        addItemToCart(product)
      });

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(cost);
      card.appendChild(addButton);

      container.appendChild(card);
    });
  }
  document.querySelectorAll(".tag").forEach((tag) => {
    tag.addEventListener("click", function () {
      const selectedType = this.getAttribute("data-filter");
      renderCards(selectedType);
    });
  });
  renderCards("iceCream");
});
