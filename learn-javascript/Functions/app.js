// If the number divides evenly by 3 and 5 print "Fizzbuzz
// Else if divides evenly by 3 print "Fizz"
// Else if divides evenly by 5 print "Buzz"
// Else print the number.

function fizzBuzz(n) {
  if (!Number.isInteger(n) || n < 1 || n >= 100) {
    console.log("Error");
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz("k");
fizzBuzz(100);
fizzBuzz(16);
