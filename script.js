// JavaScript Lecture: Using Default Parameters in Functions

// 1. Introduction to Default Parameters
// Default parameters allow you to set initial values for function parameters.
// If no argument is provided when the function is called, the default value is used.

// Example: Basic use of default parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

// Calling the function with an argument
greet("Alice"); // Output: Hello, Alice!

// Calling the function without an argument (default value is used)
greet(); // Output: Hello, Guest!

// 2. Multiple Default Parameters
// You can have multiple default parameters in a function. Each parameter can have its own default value.

function orderCoffee(size = "medium", type = "black") {
  console.log(`You ordered a ${size} ${type} coffee.`);
}

// Calling with both arguments
orderCoffee("large", "latte"); // Output: You ordered a large latte coffee.

// Calling with one argument (second argument uses the default value)
orderCoffee("small"); // Output: You ordered a small black coffee.

// Calling with no arguments (both default values are used)
orderCoffee(); // Output: You ordered a medium black coffee.

// 3. Expressions in Default Parameters
// You can use expressions as default values. These expressions are evaluated when the function is called.

function add(x = 10, y = x * 2) {
  return x + y;
}

console.log(add(5, 15)); // Output: 20
console.log(add(5)); // Output: 15 (y defaults to 5 * 2)
console.log(add()); // Output: 30 (x defaults to 10, y defaults to 10 * 2)

// 4. Function with Optional Parameters
// Default parameters can also be used to make some parameters optional.

function calculateArea(length, width = length) {
  return length * width;
}

// Calling with both arguments
console.log(calculateArea(5, 10)); // Output: 50

// Calling with one argument (width defaults to length, making this a square calculation)
console.log(calculateArea(4)); // Output: 16
