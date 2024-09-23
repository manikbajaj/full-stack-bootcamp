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
