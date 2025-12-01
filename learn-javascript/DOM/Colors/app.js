function randomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// const h1 = document.querySelector("h1");

// h1.style.color = randomRgb();
// setInterval(function () {
//   h1.style.color = randomRgb();
// }, 500);

// const letters = document.querySelectorAll(".letter");
// setInterval(function () {
//   for (let letter of letters) {
//     letter.style.color = randomRgb();
//   }
// }, 500);

const letters = document.querySelectorAll(".letter");
setInterval(function () {
  for (let i = 0; i < letters.length; i++) {
    letters[i].style.color = randomRgb();
  }
}, 500);

setTimeout(() => {
  const numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < letters.length; i++) {
    letters[i].textContent = numbers[i];
  }
}, 3000);

const movieSearch = document.getElementById("movieSearch");
const submitMovie = document.getElementById("submitMovie");
const movieContainer = document.getElementById("movieContainer");
let movieName = "";
movieSearch.addEventListener("change", (e) => {
  movieName = e.target.value;
});

submitMovie.addEventListener("click", (e) => {
  e.preventDefault();
  movieContainer.innerHTML = "";
  movieSearch.value = "";
  fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${movieName}`)
    .then((response) => response.json())
    .then((data) => {
      for (let movie of data.description) {
        console.log("data", movie);
        const movieBox = document.createElement("div");
        const liElement = document.createElement("li");
        const pElement = document.createElement("p");

        liElement.innerText = movie["#TITLE"];
        pElement.innerText = movie["#YEAR"];
        movieBox.appendChild(liElement);
        movieBox.appendChild(pElement);
        movieBox.style.backgroundColor = "green";
        movieBox.style.marginBottom = "5px";
        movieContainer.appendChild(movieBox);
        movieContainer.style.marginTop = "20px";
      }
    });
});

//https://imdb.iamidiotareyoutoo.com/search?q=Spiderman
