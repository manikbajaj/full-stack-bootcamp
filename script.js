// Lecture: JavaScript Functions

// 1. Basic Function Declaration
function greet() {
  console.log("Hello, welcome to the function tutorial!");
}

// Invoking the function
greet(); // Output: "Hello, welcome to the function tutorial!"

// 2. Function with Parameters
function addTwoNumbers(a, b) {
  return a + b;
}

// Invoking the function with arguments
let sum = addTwoNumbers(5, 7);
console.log("Sum of 5 and 7 is:", sum); // Output: "Sum of 5 and 7 is: 12"

// 3. Function with Default Parameters
function greetUser(name = "Student") {
  console.log("Hello, " + name + "!");
}

// Invoking with and without arguments
greetUser("John"); // Output: "Hello, John!"
greetUser(); // Output: "Hello, Student!" (using the default value)

// 4. Returning Values from Functions
function multiplyNumbers(x, y) {
  return x * y;
}

let result = multiplyNumbers(4, 3);
console.log("Multiplication of 4 and 3 is:", result); // Output: 12

// 5. Anonymous Function (Function Expression)
const divideNumbers = function (a, b) {
  return a / b;
};

// Invoking the anonymous function
console.log("Division of 20 by 5 is:", divideNumbers(20, 5)); // Output: 4

// 6. Arrow Functions (ES6+ syntax)
const subtractNumbers = (x, y) => x - y;

// Invoking the arrow function
console.log("Subtraction of 10 and 3 is:", subtractNumbers(10, 3)); // Output: 7
