// JavaScript Lecture: Destructuring Arrays

// 1. What is Array Destructuring?
// Destructuring allows us to extract values from arrays and assign them to variables in a concise and readable way.
// This feature was introduced in ES6 (ECMAScript 2015).

// Basic Syntax:
// const [variable1, variable2] = array;

// Example 1: Basic Array Destructuring
const fruits = ["Apple", "Banana", "Orange"];
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); // Output: Apple
console.log(secondFruit); // Output: Banana
console.log(thirdFruit); // Output: Orange

// 2. Skipping Array Elements
// You can skip elements in the array by leaving gaps between the commas.

const numbers = [1, 2, 3, 4, 5];
const [firstNumber, , thirdNumber] = numbers; // Skips the second element

console.log(firstNumber); // Output: 1
console.log(thirdNumber); // Output: 3

// 3. Assigning Default Values
// If the array does not contain enough values, you can assign default values to variables.

const colors = ["Red"];
const [primaryColor, secondaryColor = "Blue"] = colors;

console.log(primaryColor); // Output: Red
console.log(secondaryColor); // Output: Blue (since the second element is missing)

// 4. Destructuring with Rest Operator
// You can use the rest operator (`...`) to collect the remaining elements into a new array.

const scores = [80, 90, 70, 60];
const [topScore, secondTopScore, ...remainingScores] = scores;

console.log(topScore); // Output: 80
console.log(secondTopScore); // Output: 90
console.log(remainingScores); // Output: [70, 60]

// 5. Nested Array Destructuring
// You can destructure nested arrays in a similar manner by matching the structure.

const nestedArray = [1, [2, 3], 4];
const [first, [second, third], fourth] = nestedArray;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
console.log(fourth); // Output: 4

// 6. Swapping Variables using Destructuring
// Destructuring makes it easy to swap variable values without the need for a temporary variable.

let a = 5,
  b = 10;
console.log("Before swap:", a, b); // Output: 5 10

// Swap values
[a, b] = [b, a];

console.log("After swap:", a, b); // Output: 10 5

// 7. Destructuring Function Return Values
// Destructuring can be useful when a function returns an array, allowing you to extract multiple return values easily.

function getDimensions() {
  return [400, 600];
}

const [width, height] = getDimensions();
console.log(`Width: ${width}, Height: ${height}`); // Output: Width: 400, Height: 600

// 8. Use Cases for Destructuring
// - Extracting values from arrays and assigning them to variables
// - Handling function return values
// - Swapping variable values
// - Collecting rest of the elements in an array
