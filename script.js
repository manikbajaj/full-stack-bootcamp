/**
 * The Event Loop and Task Queues
 * Promise Creation and Execution:
 *
 * When a Promise is created, the executor function (the function that contains the code to execute the promise, passed as an argument to the Promise constructor) runs immediately. This function generally initiates an asynchronous operation.
 * Handling Resolution and Rejection:
 *
 * The executor function provides two functions: resolve and reject. When either of these functions is called, it indicates that the promise has been resolved or rejected, respectively.
 * Calling resolve or reject doesn't immediately execute the registered promise callbacks (.then, .catch, .finally). Instead, these callbacks are placed into a task queue known as the microtask queue.
 * Microtask Queue:
 *
 * JavaScript has a microtask queue that gets processed at the end of the current run of the event loop, just after the currently executing script and before yielding control back to the system to handle other events or rendering.
 * Tasks in the microtask queue include operations like promise resolution and other small tasks like object mutation observer callbacks.
 * The event loop checks the microtask queue after each callback/task in the macro task queue (e.g., timer functions, I/O tasks) has been executed and before it starts a new iteration. If the queue is not empty, the event loop continues to process all tasks from the microtask queue before moving onto the next macro task or rendering tasks.
 */

// !See Below code skeleton first without data just the promise

// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     /* code if successful */
//   },
//   function (error) {
//     /* code if some error */
//   }
// );

function myDisplayer(someValue) {
  document.getElementById("demo").innerHTML = someValue;
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  // The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
