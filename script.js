// Lecture: Commonly Used Date Object Methods in JavaScript

// // // // // // // //
// WHY Math Object can be used without instantiatioon and Date cannot be used
// // // // // // // //
/**
 * Since Math only contains utility functions (like Math.pow() or Math.random()), there is no need for storing individual state or data. Therefore, you can access and use the methods directly without creating a new instance.
 *
 * Creating a new Date object using new Date() allows you to store, manipulate, and work with unique time values for different scenarios, unlike Math, which just provides utility functions that don’t rely on individual instances.
 *
 * THERE ARE SOME FUNCTIONS ON DATE THAT CANBE USED DIRECTLY like now()
 */

// **1. Creating a new Date Object**
// If no arguments are provided, the Date object will be initialized to the current date and time.
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// **2. Date with Specific Date and Time**
// You can create a Date object with specific date and time values by passing them as arguments.
let specificDate = new Date(2024, 6, 18, 15, 30, 0); // Year, Month (0-based), Day, Hour, Minute, Second
console.log("Specific Date and Time:", specificDate);

// **3. Get the current year**
// Using the `getFullYear()` method to get the 4-digit year of the date.
console.log("Current Year:", currentDate.getFullYear());

// **4. Get the current month**
// Using the `getMonth()` method to get the month (0-based, so January is 0, February is 1, etc.).
console.log("Current Month (0-based):", currentDate.getMonth()); // 0-based

// **5. Get the current day of the month**
// The `getDate()` method returns the day of the month (1-31).
console.log("Current Day of the Month:", currentDate.getDate());

// **6. Get the current day of the week**
// The `getDay()` method returns the day of the week (0-based, Sunday is 0, Monday is 1, etc.).
console.log(
  "Current Day of the Week (0-Sunday, 6-Saturday):",
  currentDate.getDay()
);

// **10. Date.now()**
// This method returns the number of milliseconds that have passed since January 1, 1970 (Unix Epoch).
let currentTimestamp = Date.now();
console.log("Current Timestamp:", currentTimestamp);

// **11. Converting Date to String**
// Use `toString()`, `toDateString()`, and `toTimeString()` to convert a date to a readable format.
console.log("Date to String:", currentDate.toString()); // Full string representation
console.log("Date only String:", currentDate.toDateString()); // Only date
console.log("Time only String:", currentDate.toTimeString()); // Only time
