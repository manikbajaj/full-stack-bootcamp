// Demonstrates live binding by exporting a mutable value
export let counter = 0;

export function incrementCounter() {
  counter++;
}

/*
Explanation:
- The `counter` variable is exported and can be mutated.
- The `incrementCounter` function increments the counter. Changes to `counter` are reflected wherever it's imported due to live bindings.
*/
