const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateAddNewTodo = (todo) => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash delete"></i>
  </li>`;
  list.innerHTML += html;
};
// Add new todo
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateAddNewTodo(todo);
    // reset method clear the input field that are in the addnewtodo form
    addForm.reset();
  }
});
// delete todo
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//search todo
//filter todos
const filterTodo = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add("filtered"));
  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//keyup event

search.addEventListener("keyup", () => {
  const term = search.value.trim();
  filterTodo(term);
});
