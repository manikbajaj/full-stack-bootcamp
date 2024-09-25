document
  .getElementById("exampleForm")
  .addEventListener("submit", function (event) {
    console.log("Form submitted!");
    event.preventDefault(); // Prevents the form from submitting normally
  });

document.getElementById("textInput").addEventListener("input", function () {
  console.log("Text input changed:", this.value);
});

document.getElementById("emailInput").addEventListener("change", function () {
  console.log("Email input changed:", this.value);
});

document.getElementById("passwordInput").addEventListener("focus", function () {
  console.log("Password input focused");
});

document.getElementById("passwordInput").addEventListener("blur", function () {
  console.log("Password input lost focus");
});

document
  .getElementById("checkboxInput")
  .addEventListener("change", function () {
    console.log("Checkbox state:", this.checked ? "Checked" : "Unchecked");
  });

document.getElementById("fileInput").addEventListener("change", function () {
  console.log("Selected file:", this.files[0].name);
  console.log("The file object:", this.files[0]);
});

/*
Explanations:
1. 'submit': Triggers when the form is about to be submitted. Use preventDefault() to stop the submission if needed.
2. 'input': Fired every time the value of an input type text changes. Useful for real-time validation or feedback.
3. 'change': Occurs when the value of an input (e.g., email, file, checkbox) changes and loses focus, used for delayed validation or processing.
4. 'focus': Activated when an element receives focus. Can be used to add styling or prep functionality.
5. 'blur': Fires when an element loses focus, useful for validation and cleanup tasks.
6. 'file change': Detects changes in file inputs, which can be used to handle file uploads or validations immediately.
*/
