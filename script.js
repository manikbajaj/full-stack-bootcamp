// Lecture: Understanding Methods Inside an Object in JavaScript

// What is a Method?
// A method is a function defined as a property of an object.
// It allows the object to perform specific actions related to its data.

// Example 1: Declaring a Method in an Object
let car = {
  brand: "BMW",
  model: "7 Series",
  year: 2024,

  // Method to describe the car
  describeCar: function () {
    return `This car is a ${this.year} ${this.brand} ${this.model}.`;
  },
};

// Accessing the method
console.log(car.describeCar()); // Output: This car is a 2024 BMW 7 Series

// Explanation:
// - 'describeCar' is a method. It is a function inside the 'car' object.
// - The 'this' keyword refers to the object the method belongs to. In this case, 'this' refers to the 'car' object.

// Shorthand Method Syntax:
// When defining methods, we can use a shorter syntax introduced in ES6.

// Example 2: Using Shorthand Syntax to Declare Methods
let person = {
  firstName: "John",
  lastName: "Doe",

  // Shorthand method to get full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getFullName()); // Output: John Doe

// Explanation:
// - Here, 'getFullName' is a method. The syntax is simpler than the traditional function declaration.
// - This reduces redundancy while maintaining the same functionality.

// Example 3: Methods with Parameters
// Methods can also take parameters just like normal functions.

let calculator = {
  // Method to add two numbers
  add: function (num1, num2) {
    return num1 + num2;
  },

  // Shorthand method to subtract two numbers
  subtract(num1, num2) {
    return num1 - num2;
  },
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6

// Explanation:
// - The 'add' method takes two parameters and returns their sum.
// - Similarly, the 'subtract' method uses the shorthand syntax and returns the difference of the two numbers.

// Example 4: The 'this' Keyword in Methods
// The 'this' keyword refers to the object that the method belongs to.
// Let's see how 'this' works inside a method.

let employee = {
  name: "Jane",
  age: 30,
  position: "Developer",

  // Method using 'this' keyword
  introduce() {
    return `Hello, my name is ${this.name}, I am a ${this.position}.`;
  },
};

console.log(employee.introduce()); // Output: Hello, my name is Jane, I am a Developer.

// Explanation:
// - 'this.name' refers to the 'name' property of the 'employee' object.
// - 'this' ensures that the method can access other properties within the same object.

// Example 5: Methods Inside Nested Objects
// Methods can also be nested inside objects that are properties of other objects.

let company = {
  name: "TechCorp",
  location: "New York",
  employee: {
    name: "John",
    position: "Software Engineer",

    // Method inside nested object
    getDetails() {
      return `${this.name} works as a ${this.position}.`;
    },
  },
};

console.log(company.employee.getDetails()); // Output: John works as a Software Engineer.

// Explanation:
// - The 'employee' object is a nested object inside the 'company' object.
//
