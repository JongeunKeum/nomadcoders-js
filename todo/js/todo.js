const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const todos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, todos);
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	li.remove();
}

function paintToDo(newTodo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	span.innerText = newTodo;
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	todos.push(newTodo);
	paintToDo(newTodo);
	saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
	console.log("hello", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	parsedToDos.forEach(sayHello);
	// the same : parsedToDos.forEach((item) => console.log("hello", item));
}
