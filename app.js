import { counter, incrementCounter } from "./src/counter.js";

/**
 * ! This will only work because counter and incrementCounter are in same module and Scope if counter is in a separate module it will not work
 *
 */

document.getElementById("updateCounter").addEventListener("click", () => {
  incrementCounter();
  document.getElementById("counter").textContent = counter;
});

/*
Explanations:
- Live bindings in ES6 modules ensure that `counter` reflects the latest value across all modules that import it.
- Clicking 'Update Counter' will increment the counter and log its new value.
- Clicking 'Show Counter' will display the current value of counter, demonstrating live updates across module imports.
*/
