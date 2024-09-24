// Lecture: Selecting a Sibling of Nodes in the DOM

// 1. Selecting the Next Sibling Node
// 'nextSibling' will select the next node, which could be a text, comment, or element.
let firstSibling = document.getElementById("first-sibling");
let nextNode = firstSibling.nextSibling; // This might be a text node if there is whitespace or text between siblings.

console.log("Next sibling node of firstSibling:");
console.log(nextNode);
// Output: Depending on the structure, this could be a text node (e.g., "This is a text node between siblings.")

// 2. Selecting the Previous Sibling Node
let secondSibling = document.getElementById("second-sibling");
let prevNode = secondSibling.previousSibling;

console.log("Previous sibling node of secondSibling:");
console.log(prevNode);
// Output: This could also be a text node, not necessarily the first sibling.

// 3. Selecting the Next Sibling Element
// 'nextElementSibling' ensures you are selecting the next sibling element, skipping any text or comment nodes.
let nextElementSibling = firstSibling.nextElementSibling;

console.log("Next element sibling of firstSibling:");
console.log(nextElementSibling);
// Output: <div id="second-sibling" class="sibling">Second Sibling</div>

// 4. Selecting the Previous Sibling Element
// 'previousElementSibling' ensures you are selecting the previous sibling element.
let previousElementSibling = secondSibling.previousElementSibling;

console.log("Previous element sibling of secondSibling:");
console.log(previousElementSibling);
// Output: <div id="first-sibling" class="sibling">First Sibling</div>

// Important Notes:
// - 'nextSibling' and 'previousSibling' can select any node type (text, comment, or element), making them useful for more general traversing.
// - 'nextElementSibling' and 'previousElementSibling' focus strictly on elements, skipping text and comment nodes.

// Example: Skipping text nodes and logging only the element siblings
let thirdSibling = document.getElementById("third-sibling");

// Checking the next and previous element siblings
console.log("Previous element sibling of thirdSibling:");
console.log(thirdSibling.previousElementSibling); // Outputs: <div id="second-sibling" class="sibling">Second Sibling</div>

console.log("Next element sibling of thirdSibling:");
console.log(thirdSibling.nextElementSibling); // Output: null (no next sibling after the third)
