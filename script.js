/**
 * ! Set timeout mimics something that is going to take sometime to complete and can be render blocking or could slow down JS code. We leave it as it is and let it complete
 *
 * ! THIS CODE IS EXECUTED ASYNCHRONOUSLY
 */
setTimeout(myFunction, 5000);
console.log("Set timeout executed", new Date().getSeconds());

function myFunction() {
  console.log("Hello World", new Date().getSeconds());
}

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
