import { counter, incrementCounter } from "./src/counter.js";

/**
 * ! This will only work because counter and incrementCounter are in same module and Scope if counter is in a separate module it will not work
 *
 */

document.getElementById("updateCounter").addEventListener("click", () => {
  incrementCounter();
  console.log("Counter updated to:", counter); // This logs the updated value of counter
});

document.getElementById("showCounter").addEventListener("click", () => {
  alert(`Current counter value is: ${counter}`); // Shows the current value of counter reflecting any increments
});

/*
Explanations:
- Live bindings in ES6 modules ensure that `counter` reflects the latest value across all modules that import it.
- Clicking 'Update Counter' will increment the counter and log its new value.
- Clicking 'Show Counter' will display the current value of counter, demonstrating live updates across module imports.
*/
