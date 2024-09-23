// Lecture: Commonly Used Number Methods in JavaScript

// **1. toFixed()**
// Rounds a number to a specified number of decimal places.
let num = 3.14159;
console.log("Rounded to 2 decimal places:", num.toFixed(2)); // Output: '3.14'

// **2. toString()**
// Converts a number to a string.
let number = 42;
console.log("Number as a string:", number.toString()); // Output: '42'

// **3. toExponential()**
// Returns the number in exponential notation with the specified number of decimal places.
let largeNumber = 123456;
console.log("Exponential notation:", largeNumber.toExponential(2)); // Output: '1.23e+5'

// **4. toPrecision()**
// Formats a number to a specific length.
let preciseNumber = 5.6789;
console.log("Formatted to 3 significant digits:", preciseNumber.toPrecision(3)); // Output: '5.68'

// **5. parseFloat()**
// Parses a string and returns a floating-point number.
let floatStr = "3.14159";
console.log("Parsed floating-point number:", parseFloat(floatStr)); // Output: 3.14159

// **6. parseInt()**
// Parses a string and returns an integer.
let intStr = "100.99";
console.log("Parsed integer:", parseInt(intStr)); // Output: 100
