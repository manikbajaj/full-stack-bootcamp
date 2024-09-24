// Title: Selecting Elements with querySelector and querySelectorAll

// The querySelector() and querySelectorAll() methods allow us to select elements in the DOM using CSS selectors.

/*
1. querySelector()
This method selects the first element that matches a CSS selector. It returns a single DOM element.
*/

let firstHeading = document.querySelector("h1"); // Selects the first <h1> element
console.log(firstHeading.textContent); // Output: Content of the first <h1> element

let firstParagraph = document.querySelector(".intro"); // Selects the first element with class 'intro'
console.log(firstParagraph.textContent); // Output: Content of the first element with class 'intro'

let firstListItem = document.querySelector("#list li"); // Selects the first <li> in the element with id 'list'
console.log(firstListItem.textContent); // Output: Content of the first <li> element inside #list

/*
2. querySelectorAll()
This method selects all elements that match a CSS selector. It returns a NodeList (similar to an array) of elements.
*/

let allHeadings = document.querySelectorAll("h1"); // Selects all <h1> elements
console.log(allHeadings.length); // Output: Number of <h1> elements

allHeadings.forEach((heading) => {
  console.log(heading.textContent); // Output: Each <h1>'s content
});

let allParagraphs = document.querySelectorAll(".intro"); // Selects all elements with class 'intro'
console.log(allParagraphs.length); // Output: Number of elements with class 'intro'

allParagraphs.forEach((para) => {
  console.log(para.textContent); // Output: Content of each element with class 'intro'
});

/*
3. Differences between querySelector() and querySelectorAll()

querySelector() only returns the first matching element:
*/

let firstButton = document.querySelector("button"); // Only the first <button> element is selected
console.log(firstButton.textContent);

/*
querySelectorAll() returns a NodeList of all matching elements, allowing us to loop through them:
*/

let allButtons = document.querySelectorAll("button");
allButtons.forEach((btn) => {
  console.log(btn.textContent); // Output: Content of each <button>
});

/*
4. Using querySelector/querySelectorAll with complex selectors

We can use complex CSS selectors to target elements more specifically.
*/

let navItems = document.querySelectorAll("nav ul li"); // Select all <li> elements inside <ul> within a <nav>
navItems.forEach((item) => {
  console.log(item.textContent); // Output: Text of each <li> in the navigation
});

/*
Conclusion:
- Use querySelector() when you want to select only the first element that matches a selector.
- Use querySelectorAll() when you want to select all matching elements, and loop over them.
- These methods are powerful because they allow selecting elements using CSS selectors.
*/
