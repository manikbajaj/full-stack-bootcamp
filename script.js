// Lecture: Function Scope in JavaScript

// 1. Global Scope Example (Outside any function)
var globalVar = "Global variable (var)";
let globalLet = "Global variable (let)";

console.log(globalVar); // Accessible here: Output "I'm a global variable (var)"
console.log(globalLet); // Accessible here: Output "I'm a global variable (let)"

// 2. Function Scope Example
function scopeTest() {
  var functionScopedVar = "Function-scoped variable (var)";
  let functionScopedLet = "Block-scoped variable (let)";

  console.log(functionScopedVar); // Output: "I'm a function-scoped variable (var)"
  console.log(functionScopedLet); // Output: "I'm a block-scoped variable (let)"
}

scopeTest();

// Uncommenting the below lines will throw an error because the variables are scoped inside the function
// console.log(functionScopedVar); // Error: functionScopedVar is not defined
// console.log(functionScopedLet); // Error: functionScopedLet is not defined

// 3. Block Scope with 'var' and 'let'
function blockScopeExample() {
  // Example of a conditional scope
  if (true) {
    var blockVar = "Declared with var inside a block";
    let blockLet = "Declared with let inside a block";
  }

  console.log(blockVar); // Output: "I'm declared with var inside a block"
  // Uncommenting the below line will throw an error because 'blockLet' is block-scoped
  // console.log(blockLet); // Error: blockLet is not defined
}

blockScopeExample();

// 4. var vs let in Loops
console.log("Using var in loops:");
for (var i = 0; i < 3; i++) {
  console.log("Inside loop with var:", i);
}
console.log("Outside loop with var:", i); // 'i' is still accessible here with var

console.log("Using let in loops:");
for (let j = 0; j < 3; j++) {
  console.log("Inside loop with let:", j);
}
// Uncommenting the below line will throw an error because 'j' is block-scoped with let
// console.log("Outside loop with let:", j); // Error: j is not defined

// Summary: 'var' is function-scoped, while 'let' is block-scoped, making 'let' safer for block-level operations.
