// Lecture: Understanding innerHTML and Its Risks in JavaScript

// 1. What is innerHTML?
// innerHTML is a property of DOM elements in JavaScript that allows developers to get or set the HTML content of an element.
let contentDiv = document.getElementById("content");

// Safe Example: Setting text content safely
function safeUse() {
  contentDiv.innerHTML =
    "<p>This is a <strong>safe</strong> use of innerHTML.</p>";
}

// Unsafe Example: Using innerHTML with user-provided content (demonstrating the risk)
function unsafeUse() {
  // Imagine this value is coming from user input
  let userInput = "<img src='invalid-image' onerror='alert(\"Hacked!\")'>";

  // Setting user input directly to innerHTML is dangerous as it may contain scripts
  contentDiv.innerHTML = userInput;
  // This will execute any script embedded in the input (like the `onerror` attribute in this example)
}

// Risks of Using innerHTML:
// 1. **Cross-Site Scripting (XSS) Attacks**:
//    When you set `innerHTML` with user-provided content, it may include malicious scripts, leading to XSS attacks.
//    For example, if user input contains a script tag or an event like `onerror`, it can be executed.
//    - In the `unsafeUse()` example, an alert is triggered because of the malicious `onerror` event on the image.

// How to mitigate these risks:
// 1. **Sanitize User Input**: Before setting innerHTML, always sanitize or escape user content to remove harmful scripts.
// 2. **Use textContent or innerText**: If you're only dealing with text, prefer `textContent` or `innerText`, which don't parse HTML.
// Example:
contentDiv.textContent = "<p>This will be treated as plain text, not HTML.</p>";
