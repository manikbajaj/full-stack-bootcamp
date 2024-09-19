let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[2]); // Output: "Orange"

let numbers = [10, 20, 30, 40, 50];
console.log(numbers[1]); // Output: 20
console.log(numbers[4]); // Output: 50

let mixedArray = ["Hello", 25, true, null, { name: "John" }, [1, 2, 3]];
// Extracting a string
console.log(mixedArray[0]); // Output: "Hello"

// Extracting an object property
console.log(mixedArray[4].name); // Output: "John"

// Extracting a nested array
console.log(mixedArray[5][1]); // Output: 2
