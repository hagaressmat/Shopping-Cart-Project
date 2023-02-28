let username = document.getElementById("username");
let password = document.getElementById("password");

let loginButton = document.getElementById("sign_in");

let localUsername = localStorage.getItem("username");
let localPassword = localStorage.getItem("password");

loginButton.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("Please Fill Data");
    console.log("Please Fill Data");
  } else {
    if (localUsername && localPassword) {
      // redirect to home page
      if (
        localUsername.trim() === username.value.trim() &&
        localPassword === password.value
      ) {
        setTimeout(() => {
          window.location = "index.html";
        }, 500);
      } else {
        alert("Username OR Password Incorrect");
      }
    } else {
      alert("Your Account Not Avilable");
    }
  }
}
