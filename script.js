// JavaScript Lecture: The Spread Operator in Function Calls

// 1. Introduction to Spread Operator
// The spread operator (three dots: ...) allows an iterable like an array to be expanded
// in places where multiple elements or arguments are expected.
// When used in a function call, it "spreads" elements of an array or iterable as individual arguments.

function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

// Using spread operator to pass array elements as function arguments
console.log(add(...numbers)); // Output: 6

// 2. Using Spread Operator with Multiple Arrays
// You can use the spread operator to combine arrays or pass multiple arrays to a function.

function multiply(a, b, c, d) {
  return a * b * c * d;
}

const numbers1 = [2, 3];
const numbers2 = [4, 5];

// Spread the elements of two arrays as individual arguments to the function
console.log(multiply(...numbers1, ...numbers2)); // Output: 120

// 3. Spread Operator with Rest Parameters (Advanced)
// The spread operator is also commonly used in conjunction with rest parameters to handle arbitrary numbers of arguments.

function findMax(...args) {
  return Math.max(...args);
}

// Now you can pass any number of arguments to this function
console.log(findMax(1, 2, 3, 4, 5)); // Output: 5
console.log(findMax(10, 20, 30)); // Output: 30

// 4. Benefits of the Spread Operator in Function Calls
// - Cleaner and more readable code when passing arrays or iterables to functions.
// - Reduces the need for manually accessing array elements.
// - Makes it easy to pass variable numbers of arguments.
