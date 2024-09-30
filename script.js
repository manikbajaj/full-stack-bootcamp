function myDisplayer(value) {
  document.getElementById("demo").innerHTML = value;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

/**
 * ! JavaScript is executed from Top to Bottom. We we change the sequence of function invocation the output will change as well.
 */

myFirst();
mySecond();

/**
 * ! Sometimes you need control over the function execution sequence
 */

function myCalculator(num1, num2) {
  // !EARLIER return num1 + num2;
  //  The option can be to call the function inside the result
  myDisplayer(num1 + num2);
}

/**
 * ! We have to call two functions to display the result
 */
// let result = myCalculator(5, 5);
// myDisplayer(result);
myCalculator(5, 5);

// * The problem with the second example, is that you cannot prevent the calculator function from displaying the result. These kuind of nested functions are difficult to debug because a fucntion is performing multiple operations and when these increase in large applications it becomes a problem.
