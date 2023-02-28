let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".itemDetails");

let productDetails = products.find((item) => item.id == productId);
console.log(productDetails);

itemDom.innerHTML = `<img src="${productDetails.imgUrl}" alt="" />
<div class="itemDesc">
  <h2>${productDetails.title}</h2>
  <p>${productDetails.description}</p>
  <span>Size : ${productDetails.size}</span> <br>
  <span>Qantatity : ${productDetails.qty}</span> <br>
  <button class="updateProduct" onclick = "updateProduct(${productDetails.id})">Update Product</button>
</div>
`;

// updateProduct

function updateProduct(id) {
  localStorage.setItem("updateProductId", id);

  window.location = "updateProduct.html";
}
