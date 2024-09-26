// Select the parent UL element to apply event delegation
const taskList = document.getElementById("taskList");

taskList.addEventListener("click", function (event) {
  // Check if the clicked element is a delete button
  if (event.target.className === "deleteButton") {
    const task = event.target.parentElement; // The parent element of the button is the task li
    taskList.removeChild(task); // Remove the task from the list
    console.log("Task deleted:", task.textContent);
  }
});

/*
Explanation:
- We attach a single event listener to the UL element, not each button.
- Using event.target, we check if a delete button was clicked.
- If true, we remove the corresponding task from the DOM.
- This method is efficient and simplifies the handling of dynamic elements.
*/
