const form = document.querySelector(".form");

const input = document.querySelector(".input");

const list = document.querySelector(".list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = input.value;

  const items = document.createElement("li");

  items.innerText = value;

  list.append(items);

  input.value = "";
});

list.addEventListener("click",function(e){
  e.target.remove()

})