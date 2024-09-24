// Lecture: Selecting a Parent with parentNode vs parentElement

// 1. Selecting a child element (paragraph) inside the 'container' div
let paragraph = document.getElementById("paragraph");

// 2. Using parentNode to get the parent of the 'paragraph'
let parentUsingNode = paragraph.parentNode;
console.log("parentNode of paragraph:", parentUsingNode);
// Output: <div id="container" class="highlight">...</div>
// Explanation: parentNode returns the parent node, which is the 'div' element in this case.

// 3. Using parentElement to get the parent of the 'paragraph'
let parentUsingElement = paragraph.parentElement;
console.log("parentElement of paragraph:", parentUsingElement);
// Output: <div id="container" class="highlight">...</div>
// Explanation: parentElement also returns the parent element, which is the 'div'.

// Let's explore the difference between parentNode and parentElement using a text node

// 4. Selecting the text node within the 'p' element
let textNode = document.getElementById("textNodeExample").firstChild;
console.log("Text Node content:", textNode.textContent);

// 5. Getting the parent node of a text node
let parentOfTextNodeUsingNode = textNode.parentNode;
console.log("parentNode of text node:", parentOfTextNodeUsingNode);
// Output: <p id="textNodeExample">Some text here.</p>
// Explanation: parentNode returns the parent, which is the <p> element even for text nodes.

// 6. Getting the parent element of a text node
let parentOfTextNodeUsingElement = textNode.parentElement;
console.log("parentElement of text node:", parentOfTextNodeUsingElement);
// Output: <p id="textNodeExample">Some text here.</p>
// Explanation: parentElement returns the parent element of a text node, similar to parentNode in this case.
// However, if the parent is not an element, it will return null.

// 7. Example where parentNode returns a document, but parentElement returns null
let htmlElement = document.documentElement; // Refers to the <html> tag
console.log("parentNode of html:", htmlElement.parentNode); // Output: #document
console.log("parentElement of html:", htmlElement.parentElement); // Output: null
// Explanation: parentNode returns the document node, but parentElement returns null because the parent isn't an element.
