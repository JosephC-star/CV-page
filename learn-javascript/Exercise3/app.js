const randomDecimal = Math.random();
const range = 33 - 3 + 1;
const randomInRange = randomDecimal * range;
const randomInt = Math.floorl(randomInRange); 
const shiftValue = randomInt + 3;

// const range = 33 - 3 + 1;
// To include both end points of our range.
// const randomInRange = randomDecimal * range;
// It scales the decimal to fall within the range of 0 to range. 0 is inclusive and 1 is excluded.
// const randomInt = Math.floor(randomInRange
// Math.floor take the floating number away and rounds it down to a whole number.
// const shiftValue = randomInt +3;
// Adding 3 shifts this range upward which gives numbers between 3 and 33.
