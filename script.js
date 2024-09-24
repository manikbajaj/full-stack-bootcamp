// Lecture: How to Select HTML Elements Using DOM Methods Effectively

// 1. Selecting an Element by its ID
// getElementById() method returns a single element object that has the specified ID.
let heading = document.getElementById("main-title");
// Example: Fetches the element with ID 'main-title'
console.log(heading); // Outputs: <h1 id="main-title">Hello, DOM!</h1>

// 2. Selecting Elements by Class Name
// getElementsByClassName() returns an array-like object (HTMLCollection) of all elements with the specified class name.
// Remember, this method does not return a true array but an HTMLCollection.
let paragraphs = document.getElementsByClassName("content");
// Example: Fetches all elements with the class 'content'
console.log(paragraphs); // Outputs: HTMLCollection of all elements with 'content' class

// Accessing individual elements from the HTMLCollection
console.log(paragraphs[0]); // Outputs the first element with class 'content'

// 3. Selecting Elements by Tag Name
// getElementsByTagName() returns an array-like object (HTMLCollection) of all elements with the specified tag name.
let divElements = document.getElementsByTagName("div");
// Example: Fetches all <div> elements in the document
console.log(divElements); // Outputs: HTMLCollection of all <div> elements

// Accessing individual elements from the HTMLCollection
console.log(divElements[1]); // Outputs the second <div> element

// Example of iterating over the HTMLCollection
for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].innerText); // Logs the inner text of each 'content' class element
}

// Important Notes:
// - getElementById() returns a single element or null if not found, making it faster for selecting a specific element.
// - getElementsByClassName() and getElementsByTagName() return an HTMLCollection, which is live and updates automatically if the DOM changes.
// - To work with the results of getElementsByClassName() and getElementsByTagName(), you may need to convert the HTMLCollection to an array for more flexibility (e.g., using Array.from()).

// Converting HTMLCollection to an array example
let paragraphArray = Array.from(paragraphs);
paragraphArray.forEach((p) => console.log(p.innerText)); // Outputs the text of all paragraphs in the array
