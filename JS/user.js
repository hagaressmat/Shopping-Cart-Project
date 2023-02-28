let userInfo = document.getElementById("user_info");
let userDom = document.getElementById("user");
let links = document.getElementById("links");
let logoutBtn = document.getElementById("logout");
let username = localStorage.getItem("username");
if (username) {
  links.remove();
  userInfo.style.display = "flex";
  userDom.innerHTML = username;
}

logoutBtn.addEventListener("click", logout);
function logout(e) {
  e.preventDefault();
  localStorage.clear();
  setTimeout(() => {
    window.location = "index.html";
  }, 500);
}
