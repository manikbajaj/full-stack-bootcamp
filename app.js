import { showGlobalThis, showPublicVar } from "./src/moduleScope.js";

showPublicVar(); // Accesses and shows the exported public variable
showGlobalThis(); // Shows the global scope object

/*
Explanations:
- `showPublicVar` accesses a public variable that is exported from the module.
- `showGlobalThis` calls a function that logs the `globalThis` object, demonstrating its value and properties.
*/

/**
 *  ! WHY globalThis IS NEEDED?
 *
 * ! Scenario: Writing Cross-Environment Code
 * Imagine you are developing a JavaScript library that is intended to be used in multiple environments: in browsers, within Node.js applications, and inside web workers. Each environment has traditionally used a different global object:
 *
 * Browsers: window
 * Web Workers: self
 * Node.js: global
 * Using globalThis provides a uniform way to access the global object across these environments, which simplifies the code and eliminates the need for environment detection logic.
 */
