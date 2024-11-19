let jsonCar = `{
  "brand": "BMW",
  "model": "7 Series",
  "color": "blue",
  "make": 2024,
  "available": true
}`;

console.log(typeof jsonCar);
console.log(jsonCar);

const car = JSON.parse(jsonCar);
console.log(car);

const newJson = JSON.stringify(car);
console.log(newJson);
