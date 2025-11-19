const words = [
  "car",
  "starship",
  "immediately",
  "geography",
  "unimaginativley",
  "pinto",
  "hi",
  "dzzz",
  "periferral",
];

const scores = [0, 39, 49, 75, 20, 65, 89, 99, 101];

const average = scores.find(function (score) {
  return score > 65;
});
console.log(average);

// const longWords = words.filter(function (word) {
//   return word.length;
// });

// console.log(longWords);

// const cOrU = words.filter(function (w) {
//   return w[0] === "c" || w[0] === "u";
// });
// console.log(cOrU);

// const containsVowel = words.filter(function (vowel) {
//   return "aeiou".indexOf(vowel) !== -1;
// });
// console.log(containsVowel);

// const lookForP = words.filter(function (p) {
//   return p[0] === "p" || p[0] === "u";
// });

// console.log(lookForP);

function myFind(arr, callback) {
  for (i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) return arr[i];
  }
}

function myFind(arr, callback) {
  for (i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) return [i];
  }
  return -1;
}
