// Get the button element
const button = document.getElementById('myButton');

// Event handler function for the click event
function handleClick(event) {
  console.log('Button clicked!');
  console.log('Event:', event); // Shows the event object in the console
}

// Adding an event listener for the click event on the button
button.addEventListener('click', handleClick);

// Additional example of a keydown event listener
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});