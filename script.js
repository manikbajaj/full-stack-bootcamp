// Lecture: Working with getAttribute() and setAttribute() in JavaScript

// 1. Using getAttribute()
// getAttribute() retrieves the value of a specified attribute of an element.
function updateImageAttributes() {
  let imageElement = document.getElementById("exampleImage");

  // Example: Get the 'src' and 'alt' attributes of the image
  let imgSrc = imageElement.getAttribute("src");
  let imgAlt = imageElement.getAttribute("alt");

  console.log("Current image source:", imgSrc); // Outputs: "https://via.placeholder.com/150"
  console.log("Current image alt text:", imgAlt); // Outputs: "Placeholder Image"

  // 2. Using setAttribute()
  // setAttribute() allows you to update or add an attribute to an element.
  // Example: Change the image source and alt text
  imageElement.setAttribute("src", "https://via.placeholder.com/300");
  imageElement.setAttribute("alt", "Updated Placeholder Image");

  // Update the text description
  let descriptionElement = document.getElementById("description");
  descriptionElement.textContent = "The image attributes have been updated!";
}

// Key Points:
// - getAttribute(attrName): Retrieves the value of the specified attribute.
// - setAttribute(attrName, value): Sets or updates the value of the specified attribute.
// - Both methods allow dynamic manipulation of HTML elements, making it useful for interactive content.
