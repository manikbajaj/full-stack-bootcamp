// JavaScript Lecture: Rest Parameters in Functions

// 1. Introduction to Rest Parameters
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
// Syntax: The rest parameter syntax uses three dots `...` followed by the parameter name.
// Example: function myFunc(...args) {}

// 2. Rest Parameters Usage
// Rest parameters gather all remaining arguments into an array.

function sumAll(...numbers) {
  // numbers is an array of all passed arguments
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

// Using the function with various numbers of arguments
console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(4, 5, 6, 7)); // Output: 22

// 3. Rest Parameters vs. Arguments Object
// The `arguments` object in JavaScript functions can also contain all arguments passed to a function.
// However, `arguments` is not an actual array and lacks array methods.
// Rest parameters, on the other hand, are actual arrays and can use array methods.

function restVsArguments(a, b) {
  console.log(arguments); // Shows all arguments as an array-like object
  console.log([a, b]); // Shows the first two arguments as an array
  console.log(Array.isArray(arguments)); // false (arguments is not an array)
}

restVsArguments(1, 2, 3, 4, 5); // Output: arguments as array-like

// Example with Rest Parameters (preferred way)
function restVsArgumentsRest(...args) {
  console.log(args); // args is a real array
  console.log(Array.isArray(args)); // true (args is an array)
}

restVsArgumentsRest(1, 2, 3, 4, 5); // Output: array with arguments

// 4. Combining Rest Parameters with Other Parameters
// Rest parameters must always be the **last** parameter in the function definition.
// Any parameters before the rest parameter get assigned individual values.

function displayNames(firstName, lastName, ...otherNames) {
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Other Names: ${otherNames}`); // otherNames is an array
}

displayNames("John", "Doe", "Mr.", "Junior", "III");
// Output:
// First Name: John
// Last Name: Doe
// Other Names: [ 'Mr.', 'Junior', 'III' ]

// 5. Working with Rest Parameters in Function Calls
// Rest parameters allow functions to accept varying numbers of arguments, making them more flexible.

function multiply(multiplier, ...numbers) {
  return numbers.map((num) => num * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(3, 5, 6, 7, 8)); // Output: [15, 18, 21, 24]

// 6. Rest Parameters vs Spread Operator
// While the rest parameter collects all remaining arguments into an array,
// the spread operator `...` spreads elements of an array into individual arguments.
// Example of combining both:

function calculateSum(multiplier, ...numbers) {
  let total = numbers.reduce((sum, current) => sum + current, 0);
  return multiplier * total;
}

const numArray = [2, 3, 4];
console.log(calculateSum(2, ...numArray)); // Using spread operator to pass array elements
// Output: 18 (2 * (2 + 3 + 4))

// 7. Benefits of Rest Parameters
// - Simplifies handling of functions with a variable number of arguments.
// - Replaces the need to use the `arguments` object.
// - Works seamlessly with array methods.
