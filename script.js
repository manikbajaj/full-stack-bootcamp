function myDisplayer(value) {
  document.getElementById("demo").innerHTML = value;
}

/**
 * ! Now using a callback function
 *
 * ! A callback function in JavaScript is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
 */

function myCalculator(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

/**
 * ! We can now trigger a callback function which is independent of the calculator function and calculator is not only responsible for doing the calculation and calling the callback function when its done.
 */
myCalculator(5, 5, myDisplayer);

// ! A callback can be another function as well
function log(value) {
  console.log(value);
}

myCalculator(5, 5, log);

/**
 * ! In the below example callbacks are used to take decisions and the above example a callback is used to solve the problem of taking a decision
 *
 */

function filterPositives(number) {
  return number >= 0;
}

function filterNegatives(number) {
  return number < 0;
}

// Another example
function filterNumbers(numbers, /* callback predicate*/ filter) {
  const numArray = [];
  for (let number of numbers) {
    if (filter(number)) {
      numArray.push(number);
    }
  }
  return numArray;
}

const numbers = [4, 9, 8, -9, -12, 6];

console.log(filterNumbers(numbers, filterPositives));
console.log(filterNumbers(numbers, filterNegatives));
