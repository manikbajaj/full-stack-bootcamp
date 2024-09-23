// JavaScript Lecture: Destructuring Objects

// 1. What is Object Destructuring?
// Object destructuring allows you to unpack properties from objects into distinct variables.
// This feature was introduced in ES6 (ECMAScript 2015).

// Basic Syntax:
// const { property1, property2 } = object;

// Example 1: Basic Object Destructuring
const car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  year: 2024,
};

// Destructuring the object to extract properties
const { brand, model, year } = car;

console.log(brand); // Output: BMW
console.log(model); // Output: 7 Series
console.log(year); // Output: 2024

// 2. Assigning New Variable Names
// You can assign different variable names while destructuring by using a colon (:).

const { brand: carBrand, model: carModel } = car;

console.log(carBrand); // Output: BMW
console.log(carModel); // Output: 7 Series

// 3. Assigning Default Values
// If a property does not exist in the object, you can assign a default value.

const { color = "Black", engine = "V8" } = car;

console.log(color); // Output: White (uses the actual value)
console.log(engine); // Output: V8 (uses the default value as engine does not exist in the car object)

// 4. Nested Object Destructuring
// You can destructure properties from nested objects by matching their structure.

const carWithOwner = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  owner: {
    name: "John Doe",
    age: 35,
  },
};

const {
  owner: { name, age },
} = carWithOwner;

console.log(name); // Output: John Doe
console.log(age); // Output: 35

// 5. Destructuring with Rest Operator
// You can use the rest operator to collect remaining properties into a new object.

const { brand: carBrandNew, ...otherDetails } = carWithOwner;

console.log(carBrandNew); // Output: BMW
console.log(otherDetails); // Output: { model: '7 Series', color: 'White', owner: { name: 'John Doe', age: 35 } }
