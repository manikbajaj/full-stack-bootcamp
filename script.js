/*
 * Lecture: Understanding Lexical Scope in JavaScript
 * Lexical scope refers to the visibility of variables based on their position within the code.
 * Let's explore the various scopes and see how `var` and `let` behave differently.
 */

/////////////////////////////////
// 1. Global Scope
/////////////////////////////////

// Variables declared outside of any function or block are in the global scope.
// These variables can be accessed from anywhere in the program.

var globalVar = "I am a global variable";
let globalLet = "I am also a global variable";

function checkGlobalScope() {
  console.log(globalVar); // Output: I am a global variable
  console.log(globalLet); // Output: I am also a global variable
}
checkGlobalScope(); // Global variables can be accessed inside functions

console.log(globalVar); // Accessible from anywhere
console.log(globalLet); // Accessible from anywhere

/////////////////////////////////
// 2. Local Scope (Function Scope)
/////////////////////////////////

// Variables declared inside a function are scoped to that function only.
// They are not accessible from outside the function.

function localScopeExample() {
  var localVar = "I am local to this function";
  let localLet = "I am also local to this function";

  console.log(localVar); // Output: I am local to this function
  console.log(localLet); // Output: I am also local to this function
}
localScopeExample();

// Uncommenting the following lines will throw errors because localVar and localLet are not accessible outside the function.
// console.log(localVar); // Error: localVar is not defined
// console.log(localLet);  // Error: localLet is not defined

/////////////////////////////////
// 3. Block Scope
/////////////////////////////////

// Variables declared with `let` and `const` inside a block (curly braces) are scoped to that block.
// `var`, however, ignores block scope and leaks out of the block.

function blockScopeExample() {
  if (true) {
    var blockVar = "I am declared with var inside a block";
    let blockLet = "I am declared with let inside a block";
    console.log(blockVar); // Output: I am declared with var inside a block
    console.log(blockLet); // Output: I am declared with let inside a block
  }
  console.log(blockVar); // Output: I am declared with var inside a block (because `var` ignores block scope)
  // console.log(blockLet); // Error: blockLet is not defined (because `let` respects block scope)
}
blockScopeExample();

/////////////////////////////////
// 4. Nested Scope
/////////////////////////////////

// Nested scope occurs when functions are defined inside other functions.
// Inner functions can access variables from their outer functions due to JavaScript's lexical scoping.

function outerFunction() {
  var outerVar = "I am in the outer function";

  function innerFunction() {
    var innerVar = "I am in the inner function";
    console.log(outerVar); // Inner function can access outer function's variables (Output: I am in the outer function)
    console.log(innerVar); // Output: I am in the inner function
  }

  innerFunction();
  // console.log(innerVar); // Error: innerVar is not defined (outer function cannot access inner function's variables)
}
outerFunction();

/////////////////////////////////
// 5. Differences between var and let
/////////////////////////////////

// `var` is function-scoped, while `let` is block-scoped. This can lead to unintended behavior if you're not careful.

function varVsLetExample() {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(x); // Output: 10 (because `var` is function-scoped and leaks out of the block)
  // console.log(y); // Error: y is not defined (because `let` is block-scoped)
}
varVsLetExample();

// Another example demonstrating the difference in loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 1000); // Output: var i: 3, 3, 3 (var is function-scoped, so `i` is overwritten)
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 1000); // Output: let j: 0, 1, 2 (let is block-scoped, so `j` maintains its value in each loop)
}

/*
 * Conclusion:
 * - Global Scope: Accessible from anywhere.
 * - Local Scope: Limited to the function in which the variable is declared.
 * - Block Scope: Variables declared with `let` and `const` are block-scoped, while `var` is not.
 * - Nested Scope: Inner functions can access variables from their outer functions.
 *
 * `var` vs `let`: `var` is function-scoped, while `let` is block-scoped. Be mindful when using them, especially inside loops and conditionals.
 */
