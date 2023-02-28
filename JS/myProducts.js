let productDom = document.querySelector(".products");
let noProducts = document.querySelector(".noProducts");

// display products
let putProductsUI;
(putProductsUI = function (products = []) {
  let myProducts = products.filter((item) => item.isMe === "Y");
  if (myProducts.length != 0) {
    let productsUI = myProducts.map((item) => {
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
              <button class="updateProduct" onclick = "updateProduct(${
                item.id
              })">Update Product</button>
              <button class="deleteProduct" onclick = "deleteProduct(${
                item.id
              } )">Delete Product</button>
              
          </div>
    </div>
          `;
    });
    productDom.innerHTML = productsUI.join("");
  } else {
    productDom.style.display = "none";
    noProducts.innerHTML = `<div class="emptyCart">No Products To Display!</div>
    <a href="index.html" class="backHome"> Back To Home </a>`;
    noProducts.style.display = "block";
  }
})(JSON.parse(localStorage.getItem("products") || productsDB));

// updateProduct

function updateProduct(id) {
  localStorage.setItem("updateProductId", id);

  window.location = "updateProduct.html";
}

// deleteProduct

function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;
  let myProducts = products.filter((item) => item.isMe === "Y");
  let filterProducts = myProducts.filter((item) => item.id !== id);
  putProductsUI(filterProducts);

  let clickItem = myProducts.find((item) => item.id === id);
  products = products.filter((item) => item.id !== clickItem.id);
  localStorage.setItem("products", JSON.stringify(products));
}
