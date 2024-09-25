const eventArea = document.getElementById("eventArea");

// Mouse Over Event
eventArea.addEventListener("mouseover", function () {
  console.log("Mouse over the area");
  this.style.backgroundColor = "lightblue";
});

// Mouse Out Event
eventArea.addEventListener("mouseout", function () {
  console.log("Mouse out of the area");
  this.style.backgroundColor = "#f0f0f0";
});

// Mouse Down Event
eventArea.addEventListener("mousedown", function (event) {
  console.log("Mouse button down", "Button:", event.button);
  this.style.backgroundColor = "lightgreen";
});

// Mouse Up Event
eventArea.addEventListener("mouseup", function () {
  console.log("Mouse button released");
  this.style.backgroundColor = "lightblue";
});

// Click Event
eventArea.addEventListener("click", function () {
  console.log("Area clicked");
});

/*
Explanations:
1. 'mouseover': Triggered when the mouse pointer enters the element area. Used to apply hover effects.

2. 'mouseout': Triggered when the mouse pointer leaves the element area. Often used to reset styles set by 'mouseover'.

3. 'mousedown': Occurs when a mouse button is pressed down over an element. Useful for initiating drag operations.

4. 'mouseup': Occurs when a mouse button is released over an element. Often used in conjunction with 'mousedown' to detect a click.

5. 'click': Triggered after a full click action (press and release). The most commonly used mouse event for interactive behaviors.

These events help in creating interactive and responsive web applications by detecting and responding to user interactions via the mouse.
*/
