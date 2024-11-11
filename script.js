// 1. Function Declaration
// This is the most common way to declare a function.
// Function declarations are hoisted, meaning they can be called before their definition.
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!

// 2. Function Expression
// A function expression is when a function is assigned to a variable.
// Function expressions are not hoisted.
const sayGoodbye = function (name) {
  console.log(`Goodbye, ${name}!`);
};

sayGoodbye("Mark"); // Output: Goodbye, Mark!

// 3. Arrow Function (ES6+)
// Arrow functions provide a more concise syntax.
// They do not have their own `this` context and are not hoisted.
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 10)); // Output: 15

// Shorter syntax for single-line return:
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // Output: 12
