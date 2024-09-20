// Lecture on the JavaScript 'for' loop

// Example 1: Basic 'for' loop structure
// A basic loop that prints numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
  console.log("Iteration", i);
}
// Output: 1 2 3 4 5

// Explanation:
// - The 'for' loop consists of three parts inside parentheses:
//   1. **Initialization**: `let i = 1;` sets the starting value.
//   2. **Condition**: `i <= 5;` checks if the loop should continue.
//   3. **Final Expression**: `i++` increments the counter after every iteration.

// Example 2: Looping through an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output: "Apple" "Banana" "Orange" "Mango"

// Explanation:
// - `fruits.length` is used to ensure the loop runs through each item in the array.
// - `i` serves as the index to access array elements within the loop.

// Example 3: Using 'for' to sum numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum from 1 to 10:", sum);
// Output: Sum from 1 to 10: 55

// Explanation:
// - The loop iterates from 1 to 10, adding each number to the 'sum' variable.
// - This example showcases how loops can be used for calculation tasks.

// Example 4: Loop with a break statement
// Loop through numbers and stop when you find the number 3.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Stopping at 3");
    break;
  }
  console.log(i);
}
// Output: 1 2 "Stopping at 3"

// Explanation:
// - The `break` statement exits the loop when the condition `i === 3` is met.
// - This helps to control when to stop a loop early.

// Example 5: Loop with continue statement
// Loop through numbers and skip the number 3.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3");
    continue;
  }
  console.log(i);
}
// Output: 1 2 "Skipping 3" 4 5

// Explanation:
// - The `continue` statement skips the current iteration and moves to the next one.
// - This allows for selective skipping of certain values within a loop.

// Example 6: Nested 'for' loop
// Loop through a matrix (2D array).
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log("Matrix Value:", matrix[row][col]);
  }
}
// Output: Matrix Values: 1 2 3 4 5 6 7 8 9

// Explanation:
// - A nested loop is used to loop through each row and column of the matrix.
// - The outer loop iterates through rows, while the inner loop iterates through columns.

// Example 7: Decrementing Loop
// Loop backward from 5 to 1.
for (let i = 5; i >= 1; i--) {
  console.log("Decrementing:", i);
}
// Output: 5 4 3 2 1

// Explanation:
// - The loop decrements `i--` on each iteration until the condition `i >= 1` is false.
