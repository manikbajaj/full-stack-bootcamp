// Lecture: Commonly Used String Methods in JavaScript

// **1. length**
// Returns the length of the string.
let example = "JavaScript is awesome!";
console.log("Length of the string:", example.length); // Output: 21

// **2. charAt()**
// Returns the character at a specific index.
console.log("Character at index 4:", example.charAt(4)); // Output: 'S'

// **3. indexOf()**
// Finds the first occurrence of a substring. Returns -1 if not found.
console.log("Index of 'awesome':", example.indexOf("awesome")); // Output: 15
console.log("Index of 'Python':", example.indexOf("Python")); // Output: -1 (not found)

// **4. slice()**
// Extracts a section of the string and returns it as a new string.
console.log("Slice from index 0 to 10:", example.slice(0, 10)); // Output: 'JavaScript'

// **5. toUpperCase()**
// Converts the entire string to uppercase.
console.log("Uppercase:", example.toUpperCase()); // Output: 'JAVASCRIPT IS AWESOME!'

// **6. toLowerCase()**
// Converts the entire string to lowercase.
console.log("Lowercase:", example.toLowerCase()); // Output: 'javascript is awesome!'

// **7. replace()**
// Replaces the first occurrence of a substring with another substring.
let replaced = example.replace("awesome", "fantastic");
console.log("Replaced 'awesome' with 'fantastic':", replaced); // Output: 'JavaScript is fantastic!'

// **8. includes()**
// Checks if the string contains a substring.
console.log(
  "Does the string include 'JavaScript'?",
  example.includes("JavaScript")
); // Output: true
console.log("Does the string include 'Python'?", example.includes("Python")); // Output: false

// **9. split()**
// Splits the string into an array based on a specified delimiter.
let words = example.split(" ");
console.log("Split string into words:", words); // Output: ['JavaScript', 'is', 'awesome!']

// **10. trim()**
// Removes whitespace from both sides of a string.
let paddedString = "   Hello World!   ";
console.log("Trimmed string:", paddedString.trim()); // Output: 'Hello World!'
