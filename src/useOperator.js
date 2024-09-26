import {
  getAwaitingNextValue,
  getFirstValue,
  getOperatorValue,
  setAwaitingNextValue,
  setFirstValue,
  setOperatorValue,
} from "./values";

import calculate from "./calculate";
import { calculatorDisplay } from "./selectors";

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  // Prevent multiple operators
  // Show console.log() that multiple operators are being added
  // Also assumes if the user did not added another opertor and straghtaway a new value was added new value will be assigned to the display assuming a NEW CALCULATION FROM BEGINNING
  if (getOperatorValue() && getAwaitingNextValue()) {
    setOperatorValue(operator);
    return;
  }
  // Assign firstValue if no value
  if (!getFirstValue()) {
    setFirstValue(currentValue);
  } else {
    const calculation = calculate[operatorValue](getFirstValue(), currentValue);
    calculatorDisplay.textContent = calculation;
    setFirstValue(calculation);
  }
  // Ready for next value, store operator
  setAwaitingNextValue(true);
  setOperatorValue(operator);
}

export default useOperator;
