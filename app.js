// Importing named exports
import { add, pi, subtract } from "./src/mathUtils.js";

// Importing a default export
import greet from "./message.js";

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
console.log(pi); // Output: 3.14159

console.log(greet("John")); // Output: Hello, John!
/*
Explanation:
- `import { add, subtract, pi } from './mathUtils.js';` demonstrates how to import named exports.
- `import greet from './message.js';` shows how to import a default export.
- This structure promotes clear dependency management and modular code architecture.
*/

/**
 * ! WHAT DO USE DEFAULT EXPORTS OR NAMED EXPORTS
 * ! Default Exports:
 *
 * Ideal for single-functionality modules.
 * Allows importers to name the import freely.
 * Simplifies imports when there is one main thing to export.
 *
 * ! Named Exports:
 *
 * Best for modules offering multiple functions or variables.
 * Facilitates selective importing of specific components.
 * Enhances tree shaking by allowing explicit imports of only what's needed.
 * Provides a clear API structure by specifying exact export names.
 *
 */
