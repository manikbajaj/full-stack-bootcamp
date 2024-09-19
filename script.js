// Initial car object
let car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  make: 2024,
  owner: {
    name: "John Doe",
    age: 45,
  },
};

// Example of mutability - changing a property
console.log("Original car color:", car.color); // White
car.color = "Red"; // Modifying the color property
console.log("Updated car color:", car.color); // Red

// The object is mutable; hence, its properties can be changed

// Nested object modification
console.log("Original car owner:", car.owner.name); // John Doe
car.owner.name = "Jane Doe"; // Changing the name of the car owner
console.log("Updated car owner:", car.owner.name); // Jane Doe
