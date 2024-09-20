// Example 1: Multi-line String with Template Literals (using backticks)
let multiLineString = `This is a string
that spans multiple
lines using backticks.`;
console.log(multiLineString);

// Example 2: Using Variables in Strings (String Interpolation)
let firstName = "Alice";
let greeting = `Hello, ${firstName}! Welcome to JavaScript learning.`;
console.log(greeting); // Output: Hello, Alice! Welcome to JavaScript learning.

// Example 3: Embedding Expressions in String Interpolation
let x = 5;
let y = 10;
let expressionInString = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(expressionInString); // Output: The sum of 5 and 10 is 15.

// Example 3: Using Backticks for Flexibility
let escapeChars = `This string can include line breaks
and even "quotes" without escaping them.`;
console.log(escapeChars);

// Example 4: Nesting Template Literals
let innerTemplate = `The result of ${x} + ${y} is ${x + y}`;
let outerTemplate = `Here's some math: ${innerTemplate}`;
console.log(outerTemplate);
