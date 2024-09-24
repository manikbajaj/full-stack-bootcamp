// Lecture: Setting Styles with .style and Manipulating Classes in the DOM

// 1. Using .style to Apply Inline Styles
function applyStyles() {
  let box1 = document.getElementById("box1");

  // Setting individual CSS properties using the .style property
  box1.style.backgroundColor = "green";
  box1.style.borderColor = "red";
  box1.style.width = "200px";
  box1.style.height = "200px";

  console.log(box1.style); // Outputs the inline styles set on the element
}

// Explanation:
// The .style property directly sets inline styles on an element. In this example, the styles applied with .style overwrite any external or embedded CSS rules for the element.

// 2. Adding and Removing Classes using classList
function toggleClass() {
  let box2 = document.getElementById("box2");

  // Toggling the 'highlight' class on the second box
  box2.classList.toggle("highlight");

  // Toggling another class 'large' to change the size
  box2.classList.toggle("large");

  console.log(box2.className); // Outputs the current classes applied to the element
}

/**
 *
 *! .style: Targets individual CSS properties and is limited to inline styles classList: A more efficient way to apply multiple style rules at once by managing CSS classes, allowing you to easily reuse styles across elements.
 */

// Explanation:
// classList is used to manipulate classes on an element.
// - toggle() will add the class if it doesn't exist and remove it if it does, enabling quick toggling of states like "highlight" or "large."
// - You can also use add() and remove() methods to explicitly manage class addition or removal.
