document.addEventListener("DOMContentLoaded", function () {
  const boxContainer = document.querySelector("#box-container");
  const newBoxButton = document.querySelector("#new-box-button");
  const colorForm = document.querySelector("#color-form");
  const colorInput = document.querySelector("#color-input");

  let boxColor = null;
  let boxIdCounter = 0;

  function addNewBox() {
    const box = document.createElement("div");
    box.setAttribute("data-box-id", boxIdCounter.toString());
    box.textContent = `Box ${boxIdCounter}`;
    box.className = "box";
    box.style.backgroundColor = boxColor;
    boxContainer.appendChild(box);

    boxIdCounter++;
  }

  colorForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newColor = colorInput.value.trim();

    const boxes = document.querySelectorAll(".box");
    for (const box of boxes) {
      box.style.backgroundColor = newColor;
    }

    colorInput.value = "";

    boxColor = newColor;
  });

  newBoxButton.addEventListener("click", function () {
    addNewBox();
  });

  document.addEventListener("dblclick", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.remove();
    }
  });

  document.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.textContent = `x: ${e.pageX}, y: ${e.pageY}`;
    }
  });

  document.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("box")) {
      const boxId = e.target.getAttribute("data-box-id");
      e.target.textContent = `Box ${boxId}`;
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.target.id === "color-input") {
      return;
    }

    if (e.key === "n" || e.key === "N") {
      addNewBox();
    }
  });
});
