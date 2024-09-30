/** 
 * 
    async function myFunction() {
      return "Hello";
    }

    IS THE SAME AS 

  function myFunction() {
    return Promise.resolve("Hello");
  }

    myFunction().then(
      function(value),  // code if successful await keyword only caters to success
    );

    IS THE SAME AS 
    
    let value = await myFunction();
 * 
 */

async function loadFile() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data); // Log the data
}

loadFile();
