// Example of defininig all the properties of a car
let carBrand = "BMW";
let carModel = "7 Series";
let carColor = "White";
let carMake = 2024;

// All these properties belong to the same entity Car
// Types of cars will probably have all these properties
// There is a way to group all these properties of a Car into a single group or object called Car
let car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  make: 2024,
  "car owner": "John",
};

// Now each property of the car can be accessed using the car Object or group
console.log("Car Model:", car.model);
console.log("Car Brand:", car.brand);
console.log("Car Owner:", car["car owner"]);

// Creating a car object using the new Object constructor
let audi = new Object();
audi.brand = "Audi";
audi.model = "A7";
audi.color = "black";
audi.make = 2024;
audi["car owner"] = "mark";

console.log("Audi Color:", audi.color);
console.log("Audi Owner:", audi["car owner"]);
