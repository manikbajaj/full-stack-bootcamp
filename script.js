/**
 *! Steps to modularize the Calculator App
 * * 1. Create a separate module for the calculate object and import it
 * * 2. Create values.js to create functions to set and get values
 * * 3. Create selectors.js file and add all selectors to a single file
 * * 4. Create module for addNumberValue
 * * 5. Create useOperator module
 * * 6. create addDecimal Module
 * * 7. Import all modules and test
 * * 8. Create the reset Module
 */

import { clearBtn, inputBtns } from "./src/selectors.js";

import addDecimal from "./src/addDecimal.js";
import addNumberValue from "./src/addNumberValue.js";
import useOperator from "./src/useOperator.js";

// Add Event Listeners for numbers, operators, decimal
// Add event listeners one at a time
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => addNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", () => addDecimal());
  }
});

// Reset all values, display
function resetAll() {
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;
  calculatorDisplay.textContent = "0";
}

// Event Listener
clearBtn.addEventListener("click", resetAll);
