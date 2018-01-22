// Define UI vars
const form = document.querySelector('#task-form');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const delItem = document.querySelector('delete-item');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM  load event
  document.addEventListener('DOMContentLoaded', getTasks);

  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  tasksList.addEventListener('click', removeTask);

  // Clear all tasks event
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasls
function getTasks() {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement('li');

    // Add class to li
    li.classList.add('collection-item');

    // Create text node and append to the li
    li.appendChild(document.createTextNode(task));

    // Create close link
    const link = document.createElement('a');

    // Add class to the link
    link.classList.add('delete-item', 'secondary-content');

    // Add close icon to the link
    link.innerHTML = '<i class="fa fa-remove"></i>'

    // Append link to the li
    li.appendChild(link);

    // Append li to the ul
    tasksList.appendChild(li);
  });
}

// Add task

function addTask(e) {

  e.preventDefault();

  if (taskInput.value === '') {
    alert('Enter a task');
  }

  // Create li element
  const li = document.createElement('li');

  // Add class to li
  li.classList.add('collection-item');

  // Create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create close link
  const link = document.createElement('a');

  // Add class to the link
  link.classList.add('delete-item', 'secondary-content');

  // Add close icon to the link
  link.innerHTML = '<i class="fa fa-remove"></i>'

  // Append link to the li
  li.appendChild(link);

  // Append li to the ul
  tasksList.appendChild(li);

  // Store in LS

  storeTaskInLocalStorage(taskInput.value);

  // Clear taskInput
  taskInput.value = '';

  // console.log(li);
}

// Store task

function storeTaskInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you really want to delete?')) {
      e.target.parentElement.parentElement.remove();
      
      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove task from localStorage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Clear all tasks
function clearTasks() {

  // Slower method
  // tasksList.innerHTML = '';

  // Remove all child with while loop
  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.firstChild);
  }

  clearTasksFromLocalStorage();
}

// Clear tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const taskText = task.firstChild.textContent.toLowerCase();

    if (taskText.indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
