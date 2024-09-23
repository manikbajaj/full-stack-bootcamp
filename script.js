// JavaScript Lecture: Spread Operator with Objects

// 1. Introduction to Spread Operator with Objects
// The spread operator (...) allows you to copy, merge, or add properties to objects.
// This is particularly useful when working with complex objects and needing to modify or combine them.

// Example: Basic use of spread operator with objects
let car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  make: 2024,
};

let updatedCar = { ...car, color: "Black" }; // Overwriting the color property
console.log("Original Car:", car);
console.log("Updated Car:", updatedCar);
// Output: Original Car: {brand: "BMW", model: "7 Series", color: "White", make: 2024}
//         Updated Car: {brand: "BMW", model: "7 Series", color: "Black", make: 2024}

// 2. Merging Multiple Objects
// You can combine properties from multiple objects into one using the spread operator.

let owner = {
  name: "John",
  age: 30,
};

let carWithOwner = { ...car, ...owner };
console.log("Car with Owner Details:", carWithOwner);
// Output: {brand: "BMW", model: "7 Series", color: "White", make: 2024, name: "John", age: 30}

// 3. Adding New Properties with Spread Operator
// You can add new properties while copying an object using the spread operator.

let detailedCar = { ...car, fuel: "Petrol", price: "$50,000" };
console.log("Detailed Car:", detailedCar);
// Output: {brand: "BMW", model: "7 Series", color: "White", make: 2024, fuel: "Petrol", price: "$50,000"}

// 4. Overriding Properties with Spread Operator
// When combining objects with the spread operator, if properties overlap, the one on the right overwrites the one on the left.

let carUpdate = {
  color: "Red",
  year: 2025,
};

let finalCar = { ...car, ...carUpdate };
console.log("Final Car with Overridden Properties:", finalCar);
// Output: {brand: "BMW", model: "7 Series", color: "Red", make: 2024, year: 2025}
// The `color` property has been overwritten, and the `year` property was added.

// 5. Shallow Copy Warning with Spread Operator
// The spread operator creates a shallow copy, which means that nested objects are still shared between the original and the copy.

let nestedCar = {
  brand: "BMW",
  specs: {
    color: "White",
    engine: "V8",
  },
};

let copiedNestedCar = { ...nestedCar };
copiedNestedCar.specs.color = "Black"; // Modifying the nested object

console.log("Original Nested Car:", nestedCar);
// Output: {brand: "BMW", specs: {color: "Black", engine: "V8"}}
console.log("Copied Nested Car:", copiedNestedCar);
// Output: {brand: "BMW", specs: {color: "Black", engine: "V8"}}
// Both objects reflect the same nested object change because only a shallow copy was made.
