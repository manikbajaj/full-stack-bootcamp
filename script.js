// Lecture: Understanding the While Loop in JavaScript

// 1. Basic Structure of a While Loop
// A while loop keeps executing as long as the condition inside the parentheses is true.

let count = 0;
console.log("Basic While Loop:");
while (count < 5) {
  console.log("Count is: ", count);
  count++; // Increment count by 1
}
// The above loop will print numbers from 0 to 4 and then stop when count reaches 5.

// 2. While Loop with User Input
// While loops can also be used to repeatedly ask for input until the user enters a valid value.

console.log("\nWhile Loop with User Input:");
let number = 0;
while (number < 1 || number > 10) {
  // Prompt user for a number (1-10)
  number = 3; // Example: we are using a hardcoded value for demonstration (simulate user input)
  console.log("User entered:", number);
}
// In this example, the loop will continue until the user enters a number between 1 and 10.

// 3. Infinite Loops (Be Cautious!)
// A while loop without a condition that becomes false will loop forever, which can crash your program.

console.log("\nInfinite Loop Example (Avoid Running This!):");
// Uncomment the following code to create an infinite loop
// while (true) {
//   console.log("This will run forever!");
// }
// The above loop has no condition to stop, so it runs indefinitely.

// 4. Breaking out of a While Loop
// We can use the "break" statement to manually stop a while loop.

console.log("\nWhile Loop with Break:");
let index = 0;
while (index < 10) {
  console.log("Index:", index);
  if (index === 5) {
    console.log("Breaking out of the loop.");
    break; // Exit the loop when index reaches 5
  }
  index++;
}
// The above loop prints numbers from 0 to 5 and then exits early when the break condition is met.

// 5. While Loop vs. For Loop
// A while loop is usually preferred when we don't know the exact number of iterations in advance.
// For example, waiting for user input or fetching data until a condition is met.
// In contrast, a for loop is better when the number of iterations is known beforehand.

// 6. Do-While Loop (Related to While Loop)
// A "do-while" loop is similar to a while loop, but it guarantees that the loop runs at least once.

console.log("\nDo-While Loop Example:");
let i = 6;
do {
  console.log("Do-While: i is", i);
  i++;
} while (i < 5);
// The above loop will run once, even though the condition (i < 5) is false at the start.

// Conclusion: Use while loops when you want to keep running code as long as a condition remains true. Be careful with infinite loops and ensure that your condition eventually becomes false or use break statements.
