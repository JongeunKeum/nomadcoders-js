/******** 3.8 ********/
​
const h1 = document.querySelector("div.hello:first-child h1");
​
function handleTitleClick() {
	const clickedClass = "clicked";
	if (h1.classList.contains(clickedClass))
		h1.classList.remove(clickedClass);
	else
		h1.classList.add(clickedClass);
}
// toggle() -> doing the same thing
​
function handleTitleClick() {
	h1.classList.toggle("clicked");
}
​
h1.addEventListener("click", handleTitleClick);

/* *********************************** */

// /******** 3.7 ********/
// const h1 = document.querySelector("div.hello:first-child h1");
// ​
// function handleTitleClick() {
// 	const clickedClass = "clicked";
// 	if (h1.className === clickedClass)
// 		h1.className = "";
// 	else
// 		h1.className = clickedClass ;
// }
// ​
// h1.addEventListener("click", handleTitleClick);

/* *********************************** */

// const h1 = document.querySelector("div.hello:first-child h1");
// ​
// function handleTitleClick() {
// 	const currentColor = h1.style.color;
// 	let = newColor;
// 	if (currentColor === "blue")
// 		newColor = "tomato";
// 	else
// 		newColor = "blue";
// 	h1.style.color = newColor;
// }
// ​
// h1.addEventListener("click", handleTitleClick);

/* *********************************** */

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
// 	// console.log("title was clicked!");
// 	h1.style.color = "blue";
// }

// function handleMouseEnter() {
// 	// console.log("mouse is here");
// 	h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
// 	h1.innerText = "Mouse is gone!";
// }

// h1.onclick = handleTitleClick;
// // h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// function handleWindowResize() {
// 	document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
// 	alert("copier!");
// }
// ​
// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }
// ​
// function handleWindowOnline() {
//     alert("ALL GOOD");
// }
// ​
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

/* *********************************** */

// const title = document.querySelector(".hello h1");	//class="hello"
// //querySelector("#hello"); -> id="hello"
// // querySelector -> returns the first element
// // querySelectorAll -> returns every elements by Array
// console.log(title);
// title.innerText = "Hello";
// title.style.color = "blue";

/* *********************************** */

// const age = parseInt(prompt("How old are you?"));

// // console.log(typeof age);
// // convert string to int
// // console.log(age, parseInt(age));
// // if cannot change string to int? => NaN(Not a Number)
// // console.log(isNaN(age));
// if (isNaN(age) || age < 0) {
// 	console.log("Please write a real positive Number");
// } else if (age < 18) {
// 	console.log("You are too young");
// } else if (age >= 18 && age <= 50) {
// 	console.log("You can drink");
// } else if (age === 100) {
// 	console.log("Wow");
// } else {
// 	console.log("You can't drink");
// }
// // === : identity operator. do not type casting (42 === '42' -> false)
// // == : equality operator. type casting (42 == '42' -> true)

/* *********************************** */

// const age = 42;
// function calculateKrAge(ageOfForeigner) {
// 	return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);

/* *********************************** */

// const player = {
// 	name: "jkeum",
// 	sayHello: function(otherPersonName) {
// 		console.log("Hello " + otherPersonName + ", nice to meet you!");
// 	},
// };

// console.log(player.name);
// player.sayHello("hyunlee");

// function plus(firstNum, secondNum) {
// 	console.log(firstNum + secondNum);
// }

// function divide(a, b) {
// 	console.log(a / b);
// }

// plus(40, 2);
// divide(40, 2);

// function sayHello(nameOfPerson, age) {
// 	console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("jkeum", 24);
// sayHello("hyunlee", 28);
// sayHello("jaeskim", 21);
// sayHello("hkwon", 28);

/* *********************************** */

// const player = {
// 	name: "jkeum",
// 	points: 100,
// 	fat: false
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);
// // const -> object(player)
// // can change the value of the object
// player.points += 200;
// console.log(player.points);
// player.age = 24;
// console.log(player);

/* *********************************** */

// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(daysOfWeek);
// // Get Item from Array
// console.log(daysOfWeek[4]);
// // Add one more day to the array
// daysOfWeek.push("Sun");
// console.log(daysOfWeek);

// const nonsense = [42, "hello", false, null, undefined];
// console.log(nonsense);

/* *********************************** */

// const a = 4;
// const b = 2;
// let myName = "jkeum";

// console.log(a+b);
// console.log(a/b);
// console.log(a*b);
// console.log("hello " + myName);

// myName = "JongeunKeum";
// console.log("hello " + myName);

/* *********************************** */

// const b = true;
// const n = null;
// let something;
// console.log(b, n);
// console.log(something);
