document.getElementById("gallery");

const h1 = document.querySelector("h1");

const allH3s = document.querySelectorAll("h2");
for (let i = 0; i < allH3s.length; i++) {
  allH3s[i].style.color = "pink";
}
const allH2s = document.querySelectorAll("h2");
for (let h2 of allH2s) {
  h2.style.color = "orange";
  h2.style.fontSize = "50px";
}

const imgs = document.querySelectorAll("img");

for (let img of imgs) {
  img.style.width = "100px";
  img.style.border = "2px solid green";
}
