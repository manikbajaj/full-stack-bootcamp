import { clearBtn, inputBtns } from "./src/selectors.js";

import addDecimal from "./src/addDecimal.js";
import addNumberValue from "./src/addNumberValue.js";
import { resetAll } from "./src/values.js";
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

// Event Listener
clearBtn.addEventListener("click", resetAll);
