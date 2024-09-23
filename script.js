// Lecture: Understanding the 'this' Keyword in JavaScript

/*
What is the 'this' Keyword?
- The 'this' keyword in JavaScript refers to the object that is executing the current function.
- It dynamically changes its value based on the context in which it is used.
*/

// Example 1: 'this' in the Global Context
console.log(this); // In the browser, 'this' refers to the global Window object

// Explanation:
// - In the global scope, 'this' refers to the global object (Window in the browser, global in Node.js).

// Example 2: 'this' in an Object Method
let car = {
  brand: "BMW",
  model: "7 Series",
  displayInfo: function () {
    console.log(this); // 'this' refers to the 'car' object
    return `This car is a ${this.brand} ${this.model}.`;
  },
};

console.log(car.displayInfo()); // Output: This car is a BMW 7 Series

// Explanation:
// - Inside a method, 'this' refers to the object that owns the method. In this case, it's the 'car' object.

// Example 3: 'this' in a Function (Regular Function)
function showThis() {
  console.log(this);
}

showThis(); // In non-strict mode, 'this' refers to the global object (Window in browser)

// Explanation:
// - In a regular function, outside of an object, 'this' refers to the global object in non-strict mode.
// - In strict mode, 'this' will be undefined in such a case.

// Example 4: 'this' in Arrow Functions
let person = {
  name: "John",
  showThisArrow: () => {
    console.log(this); // 'this' refers to the enclosing scope (Window in browser)
  },
  showThisRegular: function () {
    console.log(this); // 'this' refers to the 'person' object
  },
};

person.showThisArrow(); // Output: 'this' refers to the Window object (due to arrow function)
person.showThisRegular(); // Output: 'this' refers to the 'person' object

// Explanation:
// - Arrow functions do not have their own 'this'. They inherit 'this' from their enclosing scope.
// - Regular functions have their own 'this' based on how they're called.

// Example 5: 'this' in Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 30);
console.log(john.name); // Output: John
console.log(john.age); // Output: 30

// Explanation:
// - When a function is used as a constructor (called with 'new'), 'this' refers to the newly created object.

// Example 6: 'this' in Event Handlers
let button = document.createElement("button");
button.textContent = "Click me!";
document.body.appendChild(button);

button.addEventListener("click", function () {
  console.log(this); // 'this' refers to the button element
});

// Explanation:
// - In event handlers, 'this' refers to the HTML element that received the event (e.g., the button).

/*
Summary:
1. In the global context or a regular function, 'this' refers to the global object (Window in browser).
2. In an object method, 'this' refers to the object that owns the method.
3. In arrow functions, 'this' refers to the enclosing scope and doesn't bind to its own 'this'.
4. In a constructor function, 'this' refers to the newly created object.
5. In event handlers, 'this' refers to the HTML element that triggered the event.
*/
