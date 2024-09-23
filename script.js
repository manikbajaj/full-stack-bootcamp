// JavaScript Lecture: Destructuring Function Parameters

/*
1. Introduction to Destructuring Function Parameters:
Destructuring function parameters allow you to extract values directly from objects or arrays passed as arguments. 
This simplifies the code when dealing with complex parameter structures.
*/

// Example 1: Basic Object Destructuring in Function Parameters
function printCarDetails({ brand, model, year }) {
  console.log(`Brand: ${brand}, Model: ${model}, Year: ${year}`);
}

const car = {
  brand: "BMW",
  model: "7 Series",
  year: 2024,
};

printCarDetails(car); // Output: Brand: BMW, Model: 7 Series, Year: 2024

/*
Explanation:
- In the example above, the function 'printCarDetails' destructures the object properties directly in the parameter list.
- Instead of accessing each property manually within the function, you can extract 'brand', 'model', and 'year' directly.
*/

// Example 2: Providing Default Values in Function Parameters
function printOwnerDetails({ name = "Unknown", age = 0 }) {
  console.log(`Owner: ${name}, Age: ${age}`);
}

// Passing an object with both values
printOwnerDetails({ name: "John", age: 35 }); // Output: Owner: John, Age: 35

// Passing an object with no values
printOwnerDetails({}); // Output: Owner: Unknown, Age: 0

// Passing an undefined object
printOwnerDetails(); // Error: Cannot destructure property 'name' of 'undefined'

/*
Explanation:
- You can set default values for destructured parameters by assigning them in the function parameter list.
- When the function is called with incomplete or no values, it will fall back to the default values.
- However, if the object itself is undefined or missing, you need to handle that case properly.
*/

// Example 3: Handling Missing Objects with Default Values
function printSafeOwnerDetails({ name = "Unknown", age = 0 } = {}) {
  console.log(`Owner: ${name}, Age: ${age}`);
}

printSafeOwnerDetails(); // Output: Owner: Unknown, Age: 0

/*
Explanation:
- To handle cases where the object itself might be missing, you can assign a default value (empty object `{}`) to the parameter.
- This prevents errors when destructuring is applied to `undefined` or `null`.
*/

// Example 4: Array Destructuring in Function Parameters
function printScores([first, second, third]) {
  console.log(`1st: ${first}, 2nd: ${second}, 3rd: ${third}`);
}

const scores = [95, 85, 75];
printScores(scores); // Output: 1st: 95, 2nd: 85, 3rd: 75

/*
Explanation:
- Destructuring can also be applied to arrays passed as function parameters.
- In the example, the array `scores` is destructured into individual variables `first`, `second`, and `third`.
*/

// Example 5: Combining Destructuring with Rest Parameters
function printTopScores([first, second, ...rest]) {
  console.log(`1st: ${first}, 2nd: ${second}`);
  console.log(`Rest: ${rest}`);
}

const allScores = [98, 89, 78, 67, 56];
printTopScores(allScores); // Output: 1st: 98, 2nd: 89, Rest: 78,67,56

/*
Explanation:
- The rest parameter `...rest` can be used with array destructuring to capture the remaining values.
- This is useful when you want to extract the first few values and gather the remaining items into a new array.
*/

// Example 6: Nested Object Destructuring in Function Parameters
function displayOwnerCarDetails({
  owner: { name, age },
  car: { brand, model },
}) {
  console.log(`Owner: ${name}, Age: ${age}`);
  console.log(`Car: ${brand}, Model: ${model}`);
}

const person = {
  owner: { name: "Jane", age: 30 },
  car: { brand: "Tesla", model: "Model S" },
};

displayOwnerCarDetails(person); // Output: Owner: Jane, Age: 30, Car: Tesla, Model: Model S

/*
Explanation:
- Nested objects can be destructured in the function parameters, as shown in the example above.
- The `owner` and `car` objects inside the `person` object are destructured and used directly in the function.
*/

/*
Conclusion:
- Destructuring function parameters simplify the extraction of values from complex objects and arrays.
- It helps reduce redundant code and makes function signatures cleaner and easier to understand.
- Use default values and rest parameters to handle missing or extra data efficiently.
*/
