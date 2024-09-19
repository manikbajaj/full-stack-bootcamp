// Initial object
let car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  make: 2024,
};

console.log("Original car object:", car);

// Mutability Example: Modifying the object directly
let carCopy = car; // carCopy holds a reference to the same object
carCopy.color = "Red"; // Changing color through carCopy also affects car

console.log("Modified carCopy object:", carCopy);
console.log("Original car object after modification:", car);

// Explanation of the problem: Both variables point to the same object, so modifying one affects the other.
// This can lead to unintended consequences if multiple parts of the code rely on the same object.

// Solution to Avoid Unwanted Mutations: Create a copy of the object
let newCar = { ...car }; // Shallow copy using spread operator
console.log("newcar object:", newCar);
newCar.color = "Blue"; // This change won't affect the original car object

console.log("New car object:", newCar);
console.log("Original car object remains unchanged:", car);

// The spread operator does not work for nested objects but we will look at that when we encounter such objects in future
