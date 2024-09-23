// JavaScript Lecture: Spread Operator with Arrays

// 1. Introduction to Spread Operator with Arrays
// The spread operator (...) allows an array to be expanded in places where zero or more elements are expected.
// It essentially "spreads" out the elements of an array into individual elements.

let numbers = [1, 2, 3];
let moreNumbers = [4, 5, 6];

// Using spread operator to combine arrays
let combined = [...numbers, ...moreNumbers];
console.log("Combined Array:", combined);
// Output: [1, 2, 3, 4, 5, 6]

// 2. Adding Elements to an Array Using Spread Operator
// You can use the spread operator to easily add new elements to an array without modifying the original array.

let moreFruits = ["Grapes", ...fruits, "Pineapple"];
console.log("New Fruits Array:", moreFruits);
// Output: ["Grapes", "Apple", "Banana", "Orange", "Pineapple"]

// 3. Shallow Copy Warning with Spread Operator
// The spread operator only creates a shallow copy of an array, meaning that nested objects within the array will still be referenced.

let nestedArray = [
  [1, 2],
  [3, 4],
];
let copiedArray = [...nestedArray];

// Modifying the nested array in the copied array affects the original array
copiedArray[0][0] = 99;
console.log("Original Nested Array:", nestedArray);
// Output: [[99, 2], [3, 4]]

// 7. Spread Operator with Arrays Inside Objects
// Spread operator can also be used inside objects to spread arrays as values.

let objectWithArray = {
  name: "Sample Object",
  items: [...fruits],
};

console.log("Object with Array Inside:", objectWithArray);
// Output: { name: 'Sample Object', items: ['Apple', 'Banana', 'Orange'] }
