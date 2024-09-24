// Function for Inline Event Handler
function handleInlineClick() {
  alert("Clicked via inline handler!");
}

// Using on-event handlers
document.getElementById("onEventButton").onclick = function () {
  alert("Clicked via on-event handler!");
};

// Using the addEventListener method
document
  .getElementById("addEventListenerButton")
  .addEventListener("click", function () {
    alert("Clicked via addEventListener!");
  });

/*
Explanations:
1. Inline Event Handlers:
   - Function is defined in JavaScript and referenced in the HTML. Provides better separation than writing JavaScript directly in attributes but still keeps some coupling.

2. On-event Handlers:
   - Set directly on the DOM object in JavaScript. Easier to manage and debug than inline handlers but can only handle one function per event type per element.

3. Using addEventListener:
   - Allows multiple event listeners on a single element and more flexibility, including the ability to specify event capturing or bubbling. This is the recommended method for handling events in modern web applications.
*/
