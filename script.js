// Lecture: Understanding nodeName and nodeType in the DOM

// 1. Accessing an Element Node
let divElement = document.getElementById("sample-element");

// nodeName returns the name of the node in uppercase (for element nodes).
console.log("nodeName of the element:", divElement.nodeName);
// Output: "DIV" (because <div> is an element node)

// nodeType returns the type of the node as a number. 1 indicates an element node.
console.log("nodeType of the element:", divElement.nodeType);
// Output: 1 (because it's an element node)

// 2. Accessing a Text Node
let textNode = divElement.firstChild; // Selecting the text inside the div

// nodeName for text nodes is always "#text".
console.log("nodeName of the text node:", textNode.nodeName);
// Output: "#text"

// nodeType for text nodes is 3.
console.log("nodeType of the text node:", textNode.nodeType);
// Output: 3

// 3. Checking the nodeType for a comment node
// Let's add a comment node dynamically
let comment = document.createComment("This is a comment node");
document.body.appendChild(comment);

// nodeName for comment nodes is "#comment"
console.log("nodeName of the comment node:", comment.nodeName);
// Output: "#comment"

// nodeType for comment nodes is 8.
console.log("nodeType of the comment node:", comment.nodeType);
// Output: 8

// Summary of nodeType values:
// 1 = Element
// 3 = Text
// 8 = Comment
