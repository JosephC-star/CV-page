// function letterOccurence(word){
// if(typeof word !== "String");
// console.log("Error");
// return;

function letterCount(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (typeof word !== "string") {
    console.error("Error");
    return;
  }

  for (const letter of word) {
    if (!alphabet.includes(letter.toLowerCase())) {
      console.error("Error");
      return;
    }
  }

  let letterCounts = {};

  for (let letter of word) {
    let lowerCaseLetter = letter.toLowerCase();

    // If the letter is already in the dictionary, increment its count
    if (letterCounts[lowerCaseLetter] !== undefined) {
      letterCounts[lowerCaseLetter]++;
    } else {
      letterCounts[lowerCaseLetter] = 1;
    }
  }

  return letterCounts;
}

letterCount("Caesar42");
console.log(letterCount("Caesar"));
console.log(letterCount("AAbaBa"));
