import { awaitingNextValue } from "./values.js";
import { calculatorDisplay } from "./selectors";

function addDecimal() {
  // If operator pressed, don't add decimal
  if (awaitingNextValue()) return;
  // If no decimal, add one
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

export default addDecimal;
