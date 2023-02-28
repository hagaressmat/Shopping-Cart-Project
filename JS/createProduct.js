// variables

let productName = document.getElementById("productName");
let productDesc = document.getElementById("productDesc");
let productSizeSelect = document.getElementById("productSize");
let inputFile = document.getElementById("uploadImg");
let productSizeValue;
let createForm = document.getElementById("createForm");
let productImg;
// events
productSizeSelect.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit", createProductFun);
inputFile.addEventListener("change", uploadImg);
// functions
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}

function createProductFun(e) {
  e.preventDefault();
  let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
  let nameValue = productName.value;
  let descValue = productDesc.value;
  if (nameValue && descValue) {
    let obj = {
      id: allProducts ? allProducts.length + 1 : 1,
      title: nameValue,
      description: descValue,
      size: productSizeValue,
      imgUrl: productImg,
      qty: 1,
      isMe: "Y",
    };

    let newProducts = allProducts ? [...allProducts, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));
    productName.value = "";
    productDesc.value = "";
    productSizeSelect.value = "";

    setTimeout(() => {
      window.location = "index.html";
    }, 500);
  } else {
    alert("Enter Data ...");
  }
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
