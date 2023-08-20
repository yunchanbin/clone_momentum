const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#tode-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
  console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;
  
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);