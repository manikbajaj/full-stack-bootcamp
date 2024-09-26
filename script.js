// Selecting elements
const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

// Event handler function
function logEvent(event) {
  console.log(
    `${event.currentTarget.id} ${event.type} handled at ${event.eventPhase}`
  );
  if (event.currentTarget.id === "middle") {
    event.stopPropagation(); // Stop propagation at middle container
    console.log("Propagation stopped at middle container");
  }
}

// Event listeners for capturing phase (true for capturing)
outer.addEventListener("click", logEvent, true);
middle.addEventListener("click", logEvent, true);
inner.addEventListener("click", logEvent, true);

// Event listeners for bubbling phase (false for bubbling)
// outer.addEventListener("click", logEvent, false);
// middle.addEventListener("click", logEvent, false);
// inner.addEventListener("click", logEvent, false);

/*
Explanations:
1. Event Bubbling:
   - Events start from the target element and then bubble up to the outermost ancestor. This is the default phase.

2. Event Capturing (also known as Event Trickling):
   - Events start from the outermost ancestor and go down to the target element. It needs to be explicitly specified by setting the third argument of addEventListener to true.

3. stopPropagation() Method:
   - Used to stop the event from bubbling up or capturing down to other elements. This is useful when you want to prevent parent handlers from being notified of the event.

These concepts are crucial for understanding how events are handled in the DOM, providing control over event flow and interaction patterns.
*/
