// Lecture: JavaScript Sets

// Introduction to Sets
// A Set is a collection of unique values in JavaScript.
// Unlike arrays, Sets do not allow duplicate elements, and values are stored in insertion order.

let mySet = new Set();

// Adding Values to a Set
// You can add values to a Set using the add() method.

mySet.add(1); // Adding a number
mySet.add(5); // Adding another number
mySet.add(1); // This won't be added, as Sets do not allow duplicates
mySet.add("Hello"); // Adding a string

console.log(mySet); // Output: Set { 1, 5, 'Hello' }

// Checking the Size of a Set
// You can check how many unique values are in a Set using the size property.

console.log(mySet.size); // Output: 3 (Only unique values are counted)

// Checking if a Value Exists in a Set
// Use the has() method to check whether a value exists in the Set.

console.log(mySet.has(5)); // Output: true (5 is in the Set)
console.log(mySet.has(10)); // Output: false (10 is not in the Set)

// Removing Values from a Set
// You can remove values from a Set using the delete() method.

mySet.delete(5); // Remove the number 5 from the Set
console.log(mySet); // Output: Set { 1, 'Hello' }

// Converting a Set to an Array
// You can easily convert a Set to an Array using the spread operator or Array.from()

let myArray = [...mySet]; // Convert Set to Array
console.log(myArray); // Output: [ 1, 'Hello' ]

// Clearing all Elements from a Set
// The clear() method removes all elements from a Set.

mySet.clear();
console.log(mySet); // Output: Set {}

// Sets are useful for:
// - Storing unique values without duplicates
// - Removing duplicates from arrays

// Example: Removing duplicates from an array using a Set
let numberArray = [1, 2, 3, 1, 2, 4, 5];
let uniqueNumbers = [...new Set(numberArray)];
console.log(uniqueNumbers); // Output: [ 1, 2, 3, 4, 5 ]
