// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// // the same -> const loginInput = document.querySelector("#login-form input");

// /********** #4.0 **********/
// // function onLoginButtonClick() {
// // 	console.log(loginInput.value);
// // 	console.log("click!!!");
// // }

// /********** #4.1 **********/
// // function onLoginButtonClick() {
// // 	const username = loginInput.value;
// // 	if (username === "")
// // 		alert("Please write your name");
// // 	else if (username.length > 15)
// // 		alert("Your name is too long");
// // }

// function onLoginButtonClick() {
// 	const username = loginInput.value;
// 	console.log(username);
// }

// loginButton.addEventListener("click", onLoginButtonClick);

/********** #4.2 **********/

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(event) {
// 	event.preventDefault();
// 	console.log(loginInput.value);
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// // onLoginSubmit(some info that JS gives)

/********** #4.3 **********/

// const link = document.querySelector("a");

// function handleLinkClick(event) {
// 	event.preventDefault();
// 	console.dir(event);
// }

// link.addEventListener("click", handleLinkClick);

/********** #4.4 - #4.6 **********/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	// greeting.innerText = "Hello " + username;
	localStorage.setItem(USERNAME_KEY, loginInput.value);
	paintGreetings();
}

// loginForm.addEventListener("submit", onLoginSubmit);
// onLoginSubmit(some info that JS gives)

function paintGreetings() {
	const username = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
}
else
	paintGreetings(savedUsername);
