// Window load event
window.addEventListener("load", function () {
  console.log("Window fully loaded");
  alert("Window is loaded!");
});

// Window resize event
window.addEventListener("resize", function () {
  console.log(
    "Window resized to:",
    window.innerWidth + "x" + window.innerHeight
  );
});

// Window scroll event
window.addEventListener("scroll", function () {
  console.log(
    "Window scrolled to:",
    window.pageXOffset + ", " + window.pageYOffset
  );
});

// Before unload event
window.addEventListener("beforeunload", function (event) {
  // Prompt the user with a choice to leave the page
  var confirmationMessage = "Are you sure you want to leave?";
  event.returnValue = confirmationMessage; // Standard for most browsers
  return confirmationMessage; // For some older browsers
});

/*
Explanations:
1. 'load': This event fires when the entire page including all dependent resources (like images) are fully loaded.
2. 'resize': Triggered whenever the browser window is resized. Useful for adjusting layouts or elements based on window size.
3. 'scroll': Occurs when the window is scrolled. Can be used to implement features like "scroll to top" buttons or lazy loading images.
4. 'beforeunload': This event is fired when the window is about to be unloaded. It can be used to alert users about unsaved changes or to ask for confirmation before leaving the page.
*/
