document.addEventListener("DOMContentLoaded", function () {
  solveTask1();
  doTask2();
  colorTask3();
  selectItems();
  newAddress();
  newPlaceHolder();
  addNewClass();
  addNewElement();
  removeElement();
});
function solveTask1() {
  document.getElementById("task1").innerText = "Changed using 'innerText'.";
}

function doTask2() {
  document.getElementById("task2").innerHTML = "<button>Submit</button>";
}

function colorTask3() {
  document.body.style.backgroundColor = "#232323";
}

function selectItems() {
  document.querySelectorAll(".item").forEach((item) => {
    item.style.border = "2px solid black";
  });
}

function newAddress() {
  document.getElementById("task5").href = "https://www.springboard.com";
}

function newPlaceHolder() {
  document.getElementById("task6").value = "DOM Master";
}

function addNewClass() {
  document.getElementById("task7").classList.add("new-class");
}

function addNewElement() {
  const addButton = document.createElement("button");
  addButton.innerText = "New Button";
  document.getElementById("task8").appendChild(addButton);
}

function removeElement() {
  const task9Element = document.getElementById("task9");
  task9Element.parentNode.removeChild(task9Element);
}
