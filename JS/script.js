// define products
let productDom = document.querySelector(".products");
let products = productsDB;

// display products
let putProductsUI;
(putProductsUI = function (products = []) {
  let productsUI = products.map((item) => {
    return `
    <div class="product-item" style = "border : ${
      item.isMe === "Y" ? "4px solid #00425a" : ""
    }">
          <img
              src="${item.imgUrl}"
              alt=""
              class="product-item-img"
          />
          <div class="product-item-desc">
              <a onclick = "saveItemData(${item.id})">${item.title}</a>
              <p>
                ${item.description}
              </p>
              <span>Size : ${item.size}</span>
          </div>
          <div class="product-item-actions">
              <i class="favorite fa-regular fa-heart" style = "font-weight : ${
                item.liked == true ? "bold" : "100"
              }" onclick = "addToFavorite(${item.id})"></i>
             
              <button class="updateProduct" onclick = "updateProduct(${
                item.id
              })" style = "display : ${
      item.isMe === "Y" ? "block" : "none"
    }">Update Product</button>

                 <button class="deleteProduct" onclick = "deleteProduct(${
                   item.id
                 })" style = "display : ${
      item.isMe === "Y" ? "block" : "none"
    }">Update Product</button>
              <button class="add-to-cart"  " onclick = "addToCart(${
                item.id
              })">Add To Cart</button>
          </div>
    </div>
          `;
  });
  productDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products") || products));

// add to cart
function addToCart(id) {
  if (localStorage.getItem("username")) {
    let products = JSON.parse(localStorage.getItem("products")) || products;
    let product = products.find((item) => item.id === id);
    let isProductInCart = itemsArray.some((i) => i.id === product.id);

    if (isProductInCart) {
      itemsArray = itemsArray.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      itemsArray.push(product);
    }
    cartProductDom.innerHTML = "";
    itemsArray.forEach((item) => {
      cartProductDom.innerHTML += `<p> ${item.title} <span class = "itemQty">${item.qty}</span></p>`;
    });

    // itemsArray = [...itemsArray, product];
    // let uniqueProducts = getUniqueItem(itemsArray, "id");
    localStorage.setItem("productsCart", JSON.stringify(itemsArray));

    badge.style.display = "block";
    let cartItems = document.querySelectorAll(".cart-products div p");
    console.log(cartItems);
    badge.innerHTML = cartItems.length;
  } else {
    window.location = "login.html";
  }
}

function getUniqueItem(array, filterType) {
  let unique = array
    .map((item) => item[filterType])
    .map((item, i, finalArr) => finalArr.indexOf(item) === i && i)
    .filter((item) => array[item])
    .map((item) => array[item]);

  return unique;
}

function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "cartDetails.html";
}

// search by name in title
let input = document.getElementById("search");

input.addEventListener("keyup", function (e) {
  search(e.target.value, JSON.parse(localStorage.getItem("products")));

  if (e.target.value.trim() === "") {
    putProductsUI(JSON.parse(localStorage.getItem("products")));
  }
});

function search(title, productsArray) {
  let array = productsArray.filter(
    (item) => item.title.tolowercase().indexOf(title.tolowercase()) !== -1
  );
  putProductsUI(array);
}

// add to favorite
let favoriteItems = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];
function addToFavorite(id) {
  if (localStorage.getItem("username")) {
    let findItem = products.find((item) => item.id === id);
    findItem.liked = true;
    favoriteItems = [...favoriteItems, findItem];
    let uniqueProducts = getUniqueItem(favoriteItems, "id");
    localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
    products.map((item) => {
      if (item.id === findItem.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    putProductsUI(products);
  } else {
    window.location = "login.html";
  }
}

// filter products by size
let sizeFilter = document.getElementById("sizeFilter");

sizeFilter.addEventListener("change", filterProductBySize);

function filterProductBySize(e) {
  let value = e.target.value;
  let products = JSON.parse(localStorage.getItem("products")) || products;

  if (value === "all") {
    putProductsUI(products);
  } else {
    products = products.filter((item) => item.size === value);
    putProductsUI(products);
  }
}

// updateProduct

function updateProduct(id) {
  localStorage.setItem("updateProductId", id);

  window.location = "updateProduct.html";
}

// deleteProduct

function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;
  let filterProducts = products.filter((item) => item.id !== id);
  putProductsUI(filterProducts);

  let clickItem = products.find((item) => item.id === id);
  products = products.filter((item) => item.id !== clickItem.id);
  localStorage.setItem("products", JSON.stringify(products));
}
