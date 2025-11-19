/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = `"Ancient Egypt"`;
console.log(destination);
/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = `"Medieval Europe"`;
console.log(destination);
/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
/*
 * Observations: I recieved a type error: Assignment to constant variable.
 * TODO: Explain here. You cannot reassign a constant variable a new value. The value is constant and will remain the same no matter what.
 */
const travelDate = `"2024-03-15"`;
// travelDate = `"3-15-2026"`;
/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
/*
 * Observations: Printing the var before declaring the value gave me undefined.
 * TODO: Explain here. The variable was hoisted to be assigned later. This is a feature that only var has. So if the variable is printed after it is assigned, it then will display the assigned varible and not undefined.
 */
console.log(timeMachineModel);
var timeMachineModel = "T-800";
console.log(timeMachineModel);
