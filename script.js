/**
 * ! Set timeout mimics something that is going to take sometime to complete and can be render blocking or could slow down JS code. We leave it as it is and let it complete
 *
 * ! THIS CODE IS EXECUTED ASYNCHRONOUSLY
 */
setTimeout(renderImage, 10000);
console.log("Set timeout executed", new Date().getSeconds());

function renderImage() {
  console.log("Hello World", new Date().getSeconds());
}

function myDisplayer(value) {
  console.log("Printing Result:", value);
}

function myCalculator(num1, num2, callback) {
  let result = num1 + num2;

  if (callback) {
    setTimeout(() => callback(result), 10000);
  }
  return result;
}

myCalculator(10, 20, myDisplayer);
