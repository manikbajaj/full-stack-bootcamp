// Demonstration of the Window Object in JavaScript
// The Window object represents the browser's window and includes numerous methods and properties for manipulating it.

let newWindow; // This will reference the new window when opened

// Get and display the size of the window
console.log("Window inner height:", window.innerHeight);
console.log("Window inner width:", window.innerWidth);

// Using window.document to access the DOM
const headerElement = window.document.getElementById("header");
console.log("Accessed element:", headerElement.textContent);

document.getElementById("btnShowProps").addEventListener("click", function () {
  // Display properties of the screen object
  // Screen just like the document is a property of the window object
  alert(
    `
    Screen Width: ${window.screen.width}px
    Screen Height: ${screen.height}px
    Available Screen Width: ${screen.availWidth}px
    Available Screen Height: ${screen.availHeight}px
    Color Depth: ${screen.colorDepth} bits
    Pixel Depth: ${screen.pixelDepth} bits
    `
  );
});

/*
Explanations:
- window.document: Access the DOM; here we get an element by ID.
- window.innerHeight/window.innerWidth: Get the dimensions of the content area of the browser window.
- window.open(): Opens a new window or tab.
-Screen Width/Height: Full width and height of the user's screen.
- Available Screen Width/Height: Width and height available after subtracting interfaces like the taskbar.
- Color Depth: Number of bits used to display the color of a single pixel.
- Pixel Depth: Number of bits per pixel on the screen; typically similar to color depth.

Difference between Window and Screen dimensions:
- window.innerWidth/Height refers to the dimensions of the viewport that can display content, not including browser toolbars and scrollbars.
- screen.width/height refers to the actual size of the screen, which is useful for understanding the physical display area available.
*/
