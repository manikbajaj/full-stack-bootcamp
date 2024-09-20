// Introduction to Maps in JavaScript

// A Map is a collection of key-value pairs where both the keys and the values can be of any type.
// Unlike objects, Maps allow keys to be objects, functions, or any primitive values.

/* 
Creating a new Map:
You can create a new Map using the Map constructor.
*/

let myMap = new Map(); // Creating an empty Map
console.log(myMap); // Output: Map(0) {}

// Adding key-value pairs to a Map using the set() method
myMap.set("name", "John"); // A string key
myMap.set(123, "Number as key"); // A number as a key
myMap.set(true, "Boolean as key"); // A boolean as a key

//  Setting an object as a key to map
let car = { brand: "BMW", model: "7 Series" };
myMap.set(car, "Luxury Car"); // An object as a key

/* 
Output: 
Map(4) {
  'name' => 'John',
  123 => 'Number as key',
  true => 'Boolean as key',
  { key: 'value' } => 'Object as key'
}
*/

// Accessing values in a Map using the get() method
console.log(myMap.get("name")); // Output: John
console.log(myMap.get(123)); // Output: Number as key
console.log(myMap.get(true)); // Output: Boolean as key
console.log(myMap.get(car)); // Output: Boolean as key

// Check if a key exists in the Map using the has() method
console.log(myMap.has("name")); // Output: true
console.log(myMap.has("age")); // Output: false

// Removing a key-value pair from the Map using the delete() method
myMap.delete(123);
console.log(myMap);
/* 
Output:
Map(3) {
  'name' => 'John',
  true => 'Boolean as key',
  { key: 'value' } => 'Object as key'
}
*/

// Checking the size of the Map using the size property
console.log(myMap.size); // Output: 3

// Clearing all key-value pairs from the Map using the clear() method
myMap.clear();
console.log(myMap); // Output: Map(0) {}

/* 
Key Differences between Maps and Objects:
1. Maps can use any value (objects, functions, primitives) as keys, whereas objects can only use strings or symbols.
2. Maps maintain the order of key insertion, whereas object keys are not ordered.
3. Maps have better performance when adding or removing many key-value pairs compared to objects.
*/
