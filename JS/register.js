// register user
// set vaiables to get data from input "HTML"
// get value when click

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

let registerButton = document.getElementById("signUp");

registerButton.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  if (username.value === "" || email.value === "" || password.value === "") {
    alert("Please Fill Data");
    console.log("Please Fill Data");
  } else {
    //store data in local storage
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    // redirect to home page
    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  }
}
