//Inputs to build meme.
const form = document.querySelector("#meme-form");
const imageInput = document.querySelector("#image-url"); //had trouble with capitalization in my html and lower in javascript. its case sensitive.
const topTextInput = document.querySelector("#top-text");
const bottomTextInput = document.querySelector("#bottom-text");

const memeContainer = document.querySelector("#meme-container"); //Where memes will be stored.

form.addEventListener("submit", function (e) {
  e.preventDefault(); //stops the page from reloading.

  //setting input values to variables
  const imageUrl = imageInput.value.trim();
  const topText = topTextInput.value.trim();
  const bottomText = bottomTextInput.value.trim();

  //Create div for meme
  const meme = document.createElement("div");
  meme.classList.add("meme");

  //Create an image.
  const img = document.createElement("img");
  img.src = imageUrl;

  //Top text div
  const topTextDiv = document.createElement("div");
  topTextDiv.classList.add("meme-text", "top");
  topTextDiv.textContent = topText;

  //Bottom text div
  const bottomTextDiv = document.createElement("div");
  bottomTextDiv.classList.add("meme-text", "bottom");
  bottomTextDiv.textContent = bottomText;

  //Delete button for memes
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-meme");
  deleteBtn.textContent = "Delete";

  //Remove meme event code
  deleteBtn.addEventListener("click", function () {
    meme.remove();
  });

  //Build meme
  meme.appendChild(img);
  meme.appendChild(topTextDiv);
  meme.appendChild(bottomTextDiv);
  meme.appendChild(deleteBtn);

  //Adds meme to the page
  memeContainer.appendChild(meme);

  //Resets the input section to blank for a new request
  form.reset();
});
