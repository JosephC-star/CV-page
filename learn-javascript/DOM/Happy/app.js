const h1 = document.querySelector("h1");

setInterval(function () {
  if (h1.classList.contains("big")) {
    h1.innerText = "Sad";
  } else {
    h1.innerText = "Happy";
  }

  h1.classList.toggle("big");
  h1.classList.toggle("small");
}, 1000);

const toDo = document.createElement("li");
toDo.textContent = "To Do List";
toDo.classList = "big";
toDo.append(textContent);
