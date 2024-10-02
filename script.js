// Define a JSON string
const jsonString = `{
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "courses": ["Mathematics", "Science"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown"
    }
}`;

// Parse the JSON string into a JavaScript object
const userObj = JSON.parse(jsonString);

// Log the parsed object to the console
console.log("Parsed Object:", userObj);

// Modify the user object
userObj.age = 31; // Increment age
userObj.courses.push("English"); // Add another course

// Convert the modified object back to a JSON string
const modifiedJsonString = JSON.stringify(userObj);

// Log the modified JSON string to the console
console.log("Modified JSON String:", modifiedJsonString);
