// Named exports for functions
export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

// Named export for a variable
export const pi = 3.14159;

/*
Explanation:
- We use `export` before the function or variable declaration.
- This allows these functions and variables to be imported in other JavaScript files using their exact names.
*/
