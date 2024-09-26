// moduleScope.js
let privateVar = "This is a private variable";

export const publicVar = "This is a public variable";

// Since this function is not exported this function is only available inside this module and will not be available outside teh module
function showPrivateVar() {
  console.log(privateVar); // Accessible within the module
}

export function showPublicVar() {
  console.log(publicVar);
}

export function showGlobalThis() {
  console.log(globalThis); // Demonstrates access to the global object
}

/*
Explanations:
- Variables within a module are scoped to the module unless exported. `privateVar` is not accessible outside this module.
- `publicVar` is exported and hence accessible outside this module.
- `globalThis` provides a way to access the global scope in a uniform manner across different environments, including browsers, Node.js, and workers.
*/
