// Example 1: Summing an Array of Numbers
// Demonstrates using reduce() to sum numbers in an array.
const numbers = [10, 20, 30, 40, 50];
const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Initial value is 0
console.log("Total Sum:", total);

// Example 2: Creating a Composite Object
// Using reduce() to combine an array of objects into a single object.
const items = [
  { name: "Apple", type: "fruit", quantity: 10 },
  { name: "Banana", type: "fruit", quantity: 5 },
  { name: "Carrot", type: "vegetable", quantity: 8 },
];
const inventory = items.reduce((accumulator, item) => {
  accumulator[item.type] = (accumulator[item.type] || 0) + item.quantity;
  return accumulator;
}, {}); // Initial value is an empty object
console.log("Inventory:", inventory);

/*
Key Points Covered:
- The `reduce()` method processes each element in the array with the provided function to produce a single output value.
- It is crucial to understand the role of the accumulator and the initial value.
- The reducer function's return value becomes the new accumulator value for the next iteration.
*/
