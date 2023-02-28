let cartProductDom = document.querySelector(".cart-products div");
let badge = document.querySelector(".badge");
let shoppingCartIcon = document.querySelector(".shoppingCart");
let cartProduct = document.querySelector(".cart-products");

// open cart menu event
shoppingCartIcon.addEventListener("click", openCartMenu);

// check if there is items in localsrotage
let itemsArray = localStorage.getItem("productsCart")
  ? JSON.parse(localStorage.getItem("productsCart"))
  : [];

if (itemsArray) {
  itemsArray.map((item) => {
    cartProductDom.innerHTML += `<p> ${item.title} ${item.qty}</p>`;
    badge.style.display = "block";
    badge.innerHTML = itemsArray.length;
  });
}

// open cart menu
function openCartMenu() {
  if (cartProductDom.innerHTML !== "") {
    if (cartProduct.style.display == "block") {
      cartProduct.style.display = "none";
    } else {
      cartProduct.style.display = "block";
    }
  }
}
