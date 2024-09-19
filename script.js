let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits[0]); // Output: "Apple"

let numbers = new Array(10, 20, 30, 40, 50);
console.log(numbers[1]); // Output: 20
console.log(numbers[4]); // Output: 50

// Adding new items to an array
fruits.push("Grapes");
console.log(fruits);

// Mutability
// Const keyword can be used with Arrays
const newFruits = fruits;
// If I use the spread operator it will create a copy of the array
// const newFruits = [...fruits];
console.log(newFruits);

fruits.pop();
console.log(fruits);
console.log(newFruits);
