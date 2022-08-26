var addTodo = document.querySelector(".addtodo");
var text = document.getElementById("text");
var todos = document.querySelector(".todos");

addTodo.addEventListener("submit", function (e) {
  e.preventDefault();
  const div = document.createElement("div");
  div.setAttribute("class", "todo");
  const para = document.createElement("p");
  para.innerText = text.value;
  const btn = document.createElement("button");
  btn.setAttribute("class", "btn-remove");
  btn.innerText = "x";
  div.append(para);
  div.append(btn);
  todos.append(div);
  text.value = "";
  btn.addEventListener("click", function () {
    div.remove();
  });
});
