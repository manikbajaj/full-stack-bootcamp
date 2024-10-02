// Example 1: Filtering Numbers
// This example demonstrates using filter() to select numbers greater than 10.
const numbers = [5, 10, 15, 20, 25];
const filteredNumbers = numbers.filter((number) => number > 10);
console.log("Original numbers:", numbers);
console.log("Filtered numbers (>10):", filteredNumbers);

// Example 2: Filtering Objects
// Here we use filter() to find users who are older than 25.
const users = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 28 },
];
const olderThan25 = users.filter((user) => user.age > 25);
console.log("Users older than 25:", olderThan25);

// Example 3: Complex Filtering
// Filtering an array to find even numbers and log if they are even.
const mixedNumbers = [3, 5, 8, 10, 14];
const evenNumbers = mixedNumbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

/*
Key Points Covered:
- filter() returns a new array containing elements that pass a test implemented by a provided function.
- It does not modify the original array.
- Ensure the callback function returns a boolean value to determine if the element should be included in the resulting array.
*/
