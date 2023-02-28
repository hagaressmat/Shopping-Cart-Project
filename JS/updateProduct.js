// variables
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productId = JSON.parse(localStorage.getItem("updateProductId"));
let getProduct = products.find((item) => item.id === productId);

let productName = document.getElementById("productName");
let productDesc = document.getElementById("productDesc");
let productSizeSelect = document.getElementById("productSize");
let inputFile = document.getElementById("uploadImg");
let productSizeValue;
let updateForm = document.getElementById("updateForm");
let productImg;

productName.value = getProduct.title;
productDesc.value = getProduct.description;
productSizeSelect.value = getProduct.size;
productImg = getProduct.imgUrl;

// events
productSizeSelect.addEventListener("change", getProductSizeValue);
updateForm.addEventListener("submit", updateProductFun);
inputFile.addEventListener("change", uploadImg);

// functions
function getProductSizeValue(e) {
  e.preventDefault();
  productSizeValue = e.target.value;
  getProduct.size = productSizeValue;
}

function updateProductFun(e) {
  e.preventDefault();
  getProduct.title = productName.value;
  getProduct.description = productDesc.value;
  getProduct.size = productSizeValue
    ? productSizeValue
    : productSizeSelect.value;
  getProduct.imgUrl = productImg;

  localStorage.setItem("products", JSON.stringify(products));

  setTimeout(() => {
    window.location = "index.html";
  }, 500);
}

function uploadImg() {
  let file = this.files[0];

  let types = ["image/jpeg", "image/png"];
  if (types.indexOf(file.type) == -1) {
    alert("Type Not Supported");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("Image Not Exced 2MG");
    return;
  }
  getImgBasa6(file);
  // productImg = URL.createObjectURL(file);
}

function getImgBasa6(file) {
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    productImg = reader.result;
  };

  reader.onerror = function () {
    alert("Erroe !!");
  };
}
