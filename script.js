// Lecture: Selecting Elements with childNodes vs children

// 1. Selecting child nodes using childNodes (includes text and comment nodes)
let parentContainer = document.getElementById("parent");
let childNodes = parentContainer.childNodes;

console.log("childNodes of parentContainer:");
console.log(childNodes);
// Output: NodeList(5) [text, div, text, div, text, span]
// Explanation: childNodes includes text nodes and the span element in addition to div elements.

// 2. Selecting child elements using children (only element nodes)
let children = parentContainer.children;

console.log("children of parentContainer:");
console.log(children);
// Output: HTMLCollection(3) [div, div, span]
// Explanation: children only includes the div and span elements, ignoring text nodes.

// Accessing individual elements from HTMLCollection and NodeList
console.log(children[0]); // Output: <div class="child">First Child (Element)</div>
console.log(childNodes[1]); // Output: <div class="child">First Child (Element)</div>
console.log(childNodes[2]); // Output: Text node

// Example 2: Selecting nodes in a container with text and comment nodes
let parentContainer2 = document.getElementById("parent2");
let childNodes2 = parentContainer2.childNodes;

console.log("childNodes of parentContainer2:");
console.log(childNodes2);
// Output: NodeList(5) [text, span, text, comment, text]
// Explanation: childNodes includes text and comment nodes along with the span element.

let children2 = parentContainer2.children;

console.log("children of parentContainer2:");
console.log(children2);
// Output: HTMLCollection(1) [span]
// Explanation: children only includes the span element and ignores text nodes.

// Important Notes:
// - childNodes returns a NodeList, which includes all child nodes (element, text, comment, etc.).
// - children returns an HTMLCollection, which only contains element nodes and ignores text and comment nodes.
// - HTMLCollection is live, meaning it updates automatically if the DOM changes, while NodeList can be live or static depending on how it’s retrieved.

// Looping through NodeList
console.log("Looping through childNodes:");
childNodes.forEach((node) => {
  console.log(node.nodeName, node.nodeType); // Logs the node name and type
});

// Looping through HTMLCollection
console.log("Looping through children:");
for (let i = 0; i < children.length; i++) {
  console.log(children[i].nodeName); // Logs the node names of elements
}
