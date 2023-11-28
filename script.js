// script.js

// Function to be executed on button click
function updateOutput() {
  // Get the output element
  var outputElement = document.getElementById('output');

  // Update the content
  outputElement.textContent = 'Button clicked!';

  // Log a message to the console
  console.log("Button clicked!");
}

// Adding a click event listener to the button
document.getElementById('clickMeButton').addEventListener('click', updateOutput);