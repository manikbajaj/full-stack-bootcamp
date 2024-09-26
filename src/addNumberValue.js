import { getAwaitingNextValue, setAwaitingNextValue } from "./values.js";

import { calculatorDisplay } from "./selectors.js";

function addNumberValue(number) {
  // Replace current display value if first value is entered
  if (getAwaitingNextValue()) {
    calculatorDisplay.textContent = number;
    setAwaitingNextValue(false);
  } else {
    // If current display value is 0, replace it, if not add number to display value
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === "0" ? number : displayValue + number;
  }
}

export default addNumberValue;
