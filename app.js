const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "userName";

const savedUserName = localStorage.getItem(USER_NAME);

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USER_NAME, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(userName);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}
