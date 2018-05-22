const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');

// form.addEventListener('submit', runEvent);

// Clear input value
// taskInput.value = '';

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
taskInput.addEventListener('change', runEvent); // need select element


function runEvent(e) {
  
  console.log(e.type);

  // heading.innerText = e.target.value;
  
  // Get input value
  // console.log(taskInput.value);
  
  // taskInput.value = '';
  // e.preventDefault();
}