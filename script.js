// Lecture: JavaScript Built-in Constructors
// This lecture demonstrates how to use JavaScript's built-in constructors for Object(), Array(), and Function().
// We will cover creating objects using constructors and accessing built-in functions on these constructor objects.

/*
  1. Object() Constructor
*/

// Example 1: Creating a new object using the Object() constructor
let person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";
console.log(person);
// Output: { name: 'John', age: 30, city: 'New York' }

// Example 2: Checking if a variable is an instance of Object
let isObject = person instanceof Object;
console.log(isObject);
// Output: true

// Example 3: Using Object.keys() to retrieve the keys of the object
let keys = Object.keys(person);
console.log(keys);
// Output: [ 'name', 'age', 'city' ]

/*
  2. Array() Constructor
*/

// Example 1: Creating a new array using the Array() constructor
let numbers = new Array(10, 20, 30, 40, 50);
console.log(numbers);
// Output: [ 10, 20, 30, 40, 50 ]

// Example 2: Checking if a variable is an array using Array.isArray()
let isArray = Array.isArray(numbers);
console.log(isArray);
// Output: true

/*
  3. Function() Constructor
*/

// Example 1: Creating a new function using the Function() constructor
let add = new Function("a", "b", "return a + b");
console.log(add(5, 10));
// Output: 15

// Example 2: Checking the function’s constructor
console.log(add.constructor === Function);
// Output: true

// Example 3: Accessing the length property of a function to get the number of arguments
console.log(add.length);
// Output: 2 (because the function takes two parameters 'a' and 'b')

// Conclusion:
// The Object(), Array(), and Function() constructors allow us to create new instances and access useful methods on these objects.
// These built-in constructors provide powerful tools to work with objects, arrays, and functions.
