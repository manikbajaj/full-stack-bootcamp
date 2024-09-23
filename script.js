// Lecture: Commonly Used Array Methods in JavaScript

// **1. push()**
// Adds one or more elements to the end of an array.
let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log("After push:", fruits); // Output: ['Apple', 'Banana', 'Orange']

// **2. pop()**
// Removes the last element from an array.
fruits.pop();
console.log("After pop:", fruits); // Output: ['Apple', 'Banana']

// **3. unshift()**
// Adds one or more elements to the beginning of an array.
fruits.unshift("Mango");
console.log("After unshift:", fruits); // Output: ['Mango', 'Apple', 'Banana']

// **4. shift()**
// Removes the first element from an array.
fruits.shift();
console.log("After shift:", fruits); // Output: ['Apple', 'Banana']

// **5. indexOf()**
// Returns the first index of a specified element.
let index = allFruits.indexOf("Pineapple");
console.log("Index of 'Pineapple':", index); // Output: 2

// **6. includes()**
// Determines if an array includes a certain element.
let hasBanana = allFruits.includes("Banana");
console.log("Includes 'Banana'?", hasBanana); // Output: false

// **7. slice()**
// Returns a shallow copy of a portion of an array into a new array.
let slicedFruits = allFruits.slice(1, 3);
console.log("After slice:", slicedFruits); // Output: ['Banana', 'Pineapple']

// **8. splice()**
// Adds/removes elements in an array at a specified index.
allFruits.splice(2, 0, "Kiwi");
console.log("After splice (adding):", allFruits); // Output: ['Apple', 'Banana', 'Kiwi', 'Pineapple', 'Grapes']
allFruits.splice(1, 1); // Removes 1 element at index 1
console.log("After splice (removing):", allFruits); // Output: ['Apple', 'Kiwi', 'Pineapple', 'Grapes']
