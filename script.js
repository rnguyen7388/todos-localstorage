var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];


//     * Initially set the text content of the todoList to an empty string.
function renderTodos() {
    todoList.innerHTML = "";
//   * todoCountSpan should show the total count of todos on the page.
  todoCountSpan.textContent = todos.length;
// * Inside of your render function you will also need a for loop.
    for (var i = 0; i < todos.length; i++) {
//   * It should loop over the `todos` array creating an `li` element for each index of the array.
    var li = document.createElement("li");
//   * It should set the content of the created `li` element to the value of the current array index.
    li.textContent = todos[i];
//   * Finally the new `li` should be appended to the `ul` provided.
    todoList.appendChild(li);
    }
}

renderTodos();