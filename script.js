// Lecture: Understanding innerText and textContent Properties in JavaScript

// 1. What is innerText?
// innerText is a property that represents the "rendered" text content of a node.
// It will ignore hidden elements and returns the text exactly as it appears to the user in the browser.
function useInnerText() {
  let exampleDiv1 = document.getElementById("example1");
  let exampleDiv2 = document.getElementById("example2");

  console.log("Before using innerText:");
  console.log("Example 1:", exampleDiv1.innerText); // Outputs: "This is bold text."
  console.log("Example 2:", exampleDiv2.innerText); // Outputs: "Another italic example."

  // Changing innerText
  exampleDiv1.innerText = "Updated content using innerText";
  exampleDiv2.innerText = "Another innerText update";
}

// 2. What is textContent?
// textContent returns the raw text inside the node and all its descendants, ignoring HTML formatting.
// It will include hidden elements and doesn't respect the styling applied (e.g., `display: none` or `visibility: hidden`).
function useTextContent() {
  let exampleDiv1 = document.getElementById("example1");
  let exampleDiv2 = document.getElementById("example2");

  console.log("Before using textContent:");
  console.log("Example 1:", exampleDiv1.textContent); // Outputs: "This is bold text."
  console.log("Example 2:", exampleDiv2.textContent); // Outputs: "Another italic example."

  // Changing textContent
  exampleDiv1.textContent = "Updated content using textContent";
  exampleDiv2.textContent = "Another textContent update";
}

// Key Differences Between innerText and textContent:
// - innerText respects the CSS styles and returns only the visible text as displayed to the user.
// - textContent returns the full text content of the element, including hidden elements and without regard to how it is rendered.
