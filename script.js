// JavaScript Lecture: Constructor Functions

/* 
Constructor functions are used to create multiple instances of similar objects. 
They help create reusable "blueprints" for object creation and are an important part of object-oriented programming (OOP) in JavaScript.
*/

// 1. USing Capital C is a naming convention not mandatory

function Car(brand, model, year, color) {
  // Assign properties using 'this'
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
}

// Creating instances (objects) of the Car constructor
let car1 = new Car("BMW", "7 Series", 2024, "White");
let car2 = new Car("Audi", "A6", 2021, "Black");

console.log(car1); // Output: Car {brand: 'BMW', model: '7 Series', year: 2024, color: 'White'}
console.log(car2); // Output: Car {brand: 'Audi', model: 'A6', year: 2021, color: 'Black'}

/* 
Explanation:
- The constructor function `Car` creates an object with properties: `brand`, `model`, `year`, and `color`.
- Each time the function is called with the `new` keyword, a new object is created.
*/

// 2. Property Default Values

/* 
Default values can be assigned to constructor properties if arguments are not passed. 
This ensures that even if the user doesn't provide specific values, the object will still have meaningful values.
*/

function Bike(brand, model, year, color = "Black") {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color; // Default value if no color is provided
}

// Creating Bike objects with and without providing color
let bike1 = new Bike("Yamaha", "R15", 2021, "Blue");
let bike2 = new Bike("Ducati", "Panigale", 2023); // No color provided

console.log(bike1); // Output: Bike {brand: 'Yamaha', model: 'R15', year: 2021, color: 'Blue'}
console.log(bike2); // Output: Bike {brand: 'Ducati', model: 'Panigale', year: 2023, color: 'Black'}

/* 
Explanation:
- In the `Bike` constructor, `color` has a default value of "Black". 
- If the user doesn't provide a color, the default "Black" is assigned to the property.
*/

// 3. Constructor Function Methods

/* 
Methods can be added inside constructor functions. These methods are specific to each object instance.
*/

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  // Adding a method inside the constructor
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Creating Person objects
let person1 = new Person("John", "Doe", 30);
let person2 = new Person("Jane", "Smith", 25);

console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith

/* 
Explanation:
- The `getFullName` method is added to each object created using the `Person` constructor.
- Each object can call its own version of this method.
- Methods defined inside the constructor are specific to each instance of the object.
*/

// Summary:
/* 
- Constructor functions allow for the creation of multiple instances of similar objects.
- Default values can be assigned to properties to handle cases when arguments are not passed.
- Methods can be added inside constructor functions to give objects specific behaviors.
*/
