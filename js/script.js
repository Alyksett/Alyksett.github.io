// Basic JavaScript for interactivity

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code goes here

    // Example: Change the text of an element with id="myElement"
    var myElement = document.getElementById("myElement");
    if (myElement) {
        myElement.innerText = "Hello, World!";
    }
});
