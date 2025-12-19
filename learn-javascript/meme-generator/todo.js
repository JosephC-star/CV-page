// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector(".form");
//   const input = document.querySelector(".input");
//   const list = document.querySelector(".input");
// });
let i = 0;
for (let i = 0; i <= 40; i++) {
  if (i % 4 === 0 || i % 8 === 0) console.log(`Dis is a Multiple of 4 or 8!: ${i}`);
  else {
    console.log(i);
  }
}
