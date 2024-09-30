function loadFile() {
  // Fetch always returns a Promise
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Assuming the task is to log the data
    })
    .catch((error) => {
      console.error(error);
    });
}

loadFile();
