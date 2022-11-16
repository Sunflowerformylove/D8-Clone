//DOM variables
const submit_btn = document.querySelector(".submit_button");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const password_confirm = document.querySelector(".password_confirm");
const register_form = document.querySelector(".register_form");
const message = document.querySelector(".message");

//functions
function form_behavior(password, password_confirm, username) {
  if (password.value !== password_confirm.value) {
    message.innerHTML = "Passwords do not match!";
  } else if (
    password.value === "" ||
    password_confirm.value === "" ||
    username.value === ""
  ) {
    message.innerHTML = "Please enter your username and password.";
  } else {
    register_form.action = "server.php";
    register_form.submit();
  }
}

submit_btn.addEventListener("click", (e) => {
  form_behavior(password, password_confirm, username);
});

username.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    register_form.submit();
  }
});

password.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    register_form.submit();
  }
});

password_confirm.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    register_form.submit();
  }
});