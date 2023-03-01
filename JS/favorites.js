let productDom = document.querySelector(".products");
let nullCart = document.querySelector(".noProducts");

function favoritesProductsUI(itemsCart = []) {
  //start empty cart
  if (
    !JSON.parse(localStorage.getItem("productsFavorite")) ||
    JSON.parse(localStorage.getItem("productsFavorite")).length === 0
  ) {
    productDom.style.display = "none";
    nullCart.innerHTML = `<div class="emptyCart">Your Favorites Is Empty!</div>
          <a href="index.html" class="backHome"> Back To Home </a>`;
    nullCart.style.display = "block";
  }
  // end
  let items = JSON.parse(localStorage.getItem("productsFavorite")) || itemsCart;
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
              <button class="remove-from-cart" onclick = "removeItemFromFavorite(${item.id})">Remove From Favorite</button>
          </div>
    </div>
          `;
  });
  productDom.innerHTML = productsUI.join("");
}
favoritesProductsUI();
// remove item from cart
function removeItemFromFavorite(id) {
  let productsFavorite = localStorage.getItem("productsFavorite");
  if (productsFavorite) {
    let items = JSON.parse(productsFavorite);
    let filterItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsFavorite", JSON.stringify(filterItems));
    favoritesProductsUI(filterItems);
  }
}
