let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log(fruits[Symbol.iterator]);
console.log("string"[Symbol.iterator]);
console.log({}[Symbol.iterator]);

for (let fruit of fruits) {
  console.log(fruit);
}

const word = "Javascript";

for (let char of word) {
  console.log(char.toUpperCase());
}
