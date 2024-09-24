// Lecture: Working with removeAttribute() and hasAttribute() in JavaScript

// 1. Using hasAttribute()
// hasAttribute() checks if an element has a specified attribute and returns true or false.
function checkAndRemoveAttributes() {
  let imageElement = document.getElementById("exampleImage");

  // Example: Check if the image has a 'src' and 'alt' attribute
  let hasSrc = imageElement.hasAttribute("src");
  let hasAlt = imageElement.hasAttribute("alt");

  console.log("Has 'src' attribute?", hasSrc); // Outputs: true
  console.log("Has 'alt' attribute?", hasAlt); // Outputs: true

  // 2. Using removeAttribute()
  // removeAttribute() removes the specified attribute from an element.
  if (hasSrc) {
    imageElement.removeAttribute("src");
    console.log("'src' attribute removed.");
  }

  if (hasAlt) {
    imageElement.removeAttribute("alt");
    console.log("'alt' attribute removed.");
  }

  // Update the description text
  let descriptionElement = document.getElementById("description");
  descriptionElement.textContent =
    "The image attributes have been checked and removed!";
}

// Key Points:
// - hasAttribute(attrName): Checks if the element has the specified attribute, returns true/false.
// - removeAttribute(attrName): Removes the specified attribute from the element.
