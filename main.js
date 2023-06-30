// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function() {
  // Accessing elements from the DOM
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  // Event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const task = taskInput.value; // Get the task description

    // Create a new list item with the task description
    const listItem = document.createElement('li');
    listItem.textContent = task;

    // Append the new list item to the task list
    taskList.appendChild(listItem);

    // Reset the input field
    taskInput.value = '';
  });

  // Call the submitData function with name and email
  submitData('John Doe', 'johndoe@example.com');
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
