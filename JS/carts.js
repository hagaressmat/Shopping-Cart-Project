let productDom = document.querySelector(".products");
let nullCart = document.querySelector(".noProducts");

function cartProductsUI(itemsCart = []) {
  //start empty cart
  if (
    JSON.parse(localStorage.getItem("productsCart")) &&
    JSON.parse(localStorage.getItem("productsCart")).length === 0
  ) {
    productDom.style.display = "none";
    nullCart.innerHTML = `<div class="emptyCart">Your Cart Is Empty!</div>
          <a href="index.html" class="backHome"> Back To Home </a>`;
    nullCart.style.display = "block";
  }
  // end
  let items = JSON.parse(localStorage.getItem("productsCart")) || itemsCart;
  let productsUI = items.map((item) => {
    return `
    <div class="product-item">
          <img
              src="${item.imgUrl}"
              alt=""
              class="product-item-img"
          />
          <div class="product-item-desc">
              <h2>${item.title}</h2>
              <p>
                ${item.description}
              </p>
              <span>Size : ${item.size}</span> <br>
              <span>Qantatity : ${item.qty}</span>
          </div>
          <div class="product-item-actions">
              <button class="remove-from-cart" onclick = "removeItemFromCart(${item.id})">Remove From Cart</button>
          </div>
    </div>
          `;
  });
  productDom.innerHTML = productsUI.join("");
}
cartProductsUI();
// remove item from cart
function removeItemFromCart(id) {
  let productsCart = localStorage.getItem("productsCart");
  if (productsCart) {
    let items = JSON.parse(productsCart);
    let filterItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsCart", JSON.stringify(filterItems));
    cartProductsUI(filterItems);
  }
}
