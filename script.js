// Demonstrations of window.alert(), window.confirm(), and window.prompt() methods in JavaScript

document.getElementById("showAlert").addEventListener("click", function () {
  // Simple alert box
  window.alert("This is an alert box.");
});

document.getElementById("showConfirm").addEventListener("click", function () {
  // Confirmation box that returns a boolean value
  let userResponse = window.confirm("Do you wish to continue?");
  if (userResponse) {
    console.log("User clicked OK.");
  } else {
    console.log("User clicked Cancel.");
  }
});

document.getElementById("showPrompt").addEventListener("click", function () {
  // Prompt box that asks for user input
  let userName = window.prompt("Please enter your name:");
  if (userName !== null) {
    console.log(`Hello, ${userName}!`);
  } else {
    console.log("User did not enter a name.");
  }
});

/*
Explanations:
- window.alert(): Displays an alert dialog with a specified message and an OK button. Used for informing users.
- window.confirm(): Displays a modal dialog with a specified message and OK and Cancel buttons. Returns true if OK is clicked (useful for confirmation scenarios).
- window.prompt(): Displays a dialog that prompts the visitor for input. Returns the input as a string, or null if Cancel is clicked (useful for input-required scenarios).

Differences and Usage:
- Use alert() for simple notifications to the user.
- Use confirm() for user consent or decision before proceeding.
- Use prompt() for obtaining user input before proceeding.
*/
