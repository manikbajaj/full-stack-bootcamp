const inputField = document.getElementById("inputField");

// Key Down Event
inputField.addEventListener("keydown", function (event) {
  console.log("Key Down:", event.key, "Code:", event.code);
});

// Key Press Event
inputField.addEventListener("keypress", function (event) {
  console.log("Key Pressed:", event.key, "Character Code:", event.charCode);
});

// Key Up Event
inputField.addEventListener("keyup", function (event) {
  console.log("Key Up:", event.key);
  if (event.key === "Enter") {
    console.log("Enter key was released");
    alert("You pressed Enter!");
  }
});

/*
Explanations:
1. 'keydown': Triggered when a key is pressed down. This event occurs before the 'keypress', and it can detect all key presses, including non-character keys.

2. 'keypress': Triggered when a key that produces a character value is pressed down. This event is deprecated and it's recommended to use 'keydown' in most cases for better compatibility.

3. 'keyup': Occurs when a key is released. Useful for handling events after a key has been pressed and ensuring the user has finished typing or executing a command.
*/
