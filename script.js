// Example 1: Simple Array Transformation
// This example demonstrates using map() to square each number in an array.
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number * number);
console.log("Original numbers:", numbers);
console.log("Squared numbers:", squares);

// Example 2: Formatting Objects in an Array
// Here we use map() to transform an array of objects, adding a new field.
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 28 },
];
const usersWithBirthYear = users.map((user) => ({
  ...user,
  birthYear: new Date().getFullYear() - user.age,
}));
console.log("Users with birth years:", usersWithBirthYear);

// Example 3: Using map() with a more complex function
// This example shows map() being used to convert temperatures from Celsius to Fahrenheit.
const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map((temp) => temp * 1.8 + 32);
console.log("Temperatures in Fahrenheit:", fahrenheit);

/*
Key Points Covered:
- map() returns a new array; it does not modify the original array.
- It is ideal for cases where you need to transform the elements of an array.
- Remember to return a value from the function passed to map(); otherwise, it will return undefined for that element.
*/
