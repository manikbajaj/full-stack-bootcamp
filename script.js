document.getElementById("exampleButton").addEventListener("click", function () {
  console.log("'this' refers to:", this); // 'this' refers to the element that the event was attached to
  console.log("Element ID is:", this.id); // Logs 'exampleButton'
});

document.getElementById("exampleButton").addEventListener("click", () => {
  console.log("'this' in arrow function refers to:", this); // 'this' refers to the global object or undefined in strict mode
});

/*
Explanations:
1. 'this' Keyword in Event Handlers:
   - In traditional function-based handlers, 'this' refers to the element that the event is currently being executed on. This is often used to directly manipulate the element or access its properties.

2. 'this' in Arrow Functions:
   - Arrow functions do not have their own 'this' context; instead, they inherit 'this' from the enclosing execution context. In global code, 'this' will be the global object (window in browsers), or undefined if in strict mode. This can lead to bugs if not understood properly.

3. Practical Use:
   - Understanding the behavior of 'this' can help prevent common mistakes like incorrect referencing within event handlers. It's crucial for DOM manipulations, particularly in dynamically updated interfaces where elements are frequently added or removed.
*/
