// Lecture on JavaScript 'for...in' Loop

// Example 1: Using 'for...in' to loop through an object
let car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  year: 2024,
};

// Loop through the car object
for (let property in car) {
  console.log(property + ": " + car[property]);
}
// Output:
// brand: BMW
// model: 7 Series
// color: White
// year: 2024

// Explanation:
// - The 'for...in' loop iterates over the properties of the car object.
// - 'property' is a variable that holds the name of each property in the object.
// - We use bracket notation to access the property value (`car[property]`).

// Example 2: Using 'for...in' with an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Loop through the fruits array
for (let index in fruits) {
  console.log("Index " + index + ": " + fruits[index]);
}
// Output:
// Index 0: Apple
// Index 1: Banana
// Index 2: Orange
// Index 3: Mango

// Explanation:
// - The 'for...in' loop iterates over the indices of the array.
// - 'index' is a variable that holds each index of the array.
// - We use the index to access each element in the array (`fruits[index]`).

// Example 3: Demonstrating the potential issue with 'for...in' for arrays
let mixedArray = ["Hello", 25, true, null, { name: "John" }];

// Add a custom property to the array (not common in practice)
mixedArray.customProperty = "I am a custom property";

// Loop through the mixedArray
for (let key in mixedArray) {
  console.log(key + ": " + mixedArray[key]);
}
// Output:
// 0: Hello
// 1: 25
// 2: true
// 3: null
// 4: [object Object]
// customProperty: I am a custom property

// Explanation:
// - 'for...in' loops over both indices and any added properties in an array.
// - In this example, 'customProperty' is also included in the loop, which is usually undesirable for arrays.
// - That's why it's safer to use 'for...of' or other array-specific methods for arrays.
