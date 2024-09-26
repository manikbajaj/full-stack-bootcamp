// Demonstration of the window.location property in JavaScript

document.getElementById("showHref").addEventListener("click", function () {
  alert("Current URL (href): " + window.location.href);
});

document.getElementById("showHostname").addEventListener("click", function () {
  alert("Hostname: " + window.location.hostname);
});

document.getElementById("showPathname").addEventListener("click", function () {
  alert("Pathname: " + window.location.pathname);
});

document.getElementById("showProtocol").addEventListener("click", function () {
  alert("Protocol: " + window.location.protocol);
});

document.getElementById("goToSite").addEventListener("click", function () {
  // Use location.assign to navigate to a new URL
  window.location.assign("https://www.example.com");
});

/*
Explanations:
- window.location.href: Accesses or updates the full URL.
- window.location.hostname: Returns the domain name of the web server.
- window.location.pathname: Provides the directory and file of the URL.
- window.location.protocol: Returns the protocol scheme of the URL, such as 'http:' or 'https:'.
- window.location.assign(): Used to load a new document.
*/
