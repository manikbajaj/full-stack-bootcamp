document
  .getElementById("exampleButton")
  .addEventListener("click", function (event) {
    console.log("Event type:", event.type); // Logs 'click'
    console.log("Target element:", event.target.tagName); // Logs 'BUTTON'
    console.log("Current element:", event.currentTarget.tagName); // Logs 'BUTTON'
    console.log("Mouse X position:", event.clientX); // Logs X coordinate of the mouse
    console.log("Mouse Y position:", event.clientY); // Logs Y coordinate of the mouse
    console.log("Event timestamp:", event.timeStamp); // Logs the timestamp of the event

    alert(`Clicked at position: (${event.clientX}, ${event.clientY})`);
  });

/*
Explanations:
1. event.type: Describes the type of event (e.g., 'click', 'mouseover').

2. event.target: Returns the DOM element that triggered the event. Useful for delegation when handling events on multiple elements.

3. event.currentTarget: The element that the event listener is actually attached to. Useful to distinguish between target and currentTarget in event delegation scenarios.

4. event.clientX and event.clientY: Provide the horizontal and vertical coordinates, respectively, where the event occurred relative to the viewport.

5. event.timeStamp: Indicates the time at which the event was created.
*/
