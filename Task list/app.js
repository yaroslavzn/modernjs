// Define UI vars
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filterInput = document.querySelector('#filter');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

// All events handler
loadAllEvents();

// All event handler function
function loadAllEvents() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  tasksList.addEventListener('click', removeTask);
  // Clear tasks event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filterInput.addEventListener('keyup', filterTasks);
  // DOM loaded event
  document.addEventListener('DOMContentLoaded', getTasks);
}

// Add task function
function addTask(e) {
  if (taskInput.value === '') {
    alert('Task is empty');
  }

  // Create tasks list item
  const li = document.createElement('li');
  // Add item's classes
  li.className = 'collection-item';
  // Create and append text node to item
  li.appendChild(document.createTextNode(taskInput.value));
  // Create delete link
  const link = document.createElement('a');
  // Add link's classes
  link.className = 'delete-item secondary-content';
  // Add delete icon
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // Set link href attr
  link.setAttribute('href', '#');
  // Append link to the item
  li.appendChild(link);
  // Append task item to the tasks list
  tasksList.appendChild(li);
  // Store task in LS
  storeTaskInLocalStorage(taskInput.value);
  // Clear taskInput
  taskInput.value = '';

  e.preventDefault();
}

// Store task in local storage function
function storeTaskInLocalStorage(taskText) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(taskText);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks function
function getTasks() {
  const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));

  localStorageTasks.forEach(function(task) {
    // Create tasks list item
    const li = document.createElement('li');
    // Add item's classes
    li.className = 'collection-item';
    // Create and append text node to item
    li.appendChild(document.createTextNode(task));
    // Create delete link
    const link = document.createElement('a');
    // Add link's classes
    link.className = 'delete-item secondary-content';
    // Add delete icon
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Set link href attr
    link.setAttribute('href', '#');
    // Append link to the item
    li.appendChild(link);
    // Append task item to the tasks list
    tasksList.appendChild(li);
  });
}

// Remove task function
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }

  removeTaskFromLocalStorage(e.target.parentElement.parentElement.textContent);
}

// Remove task from local storage function
function removeTaskFromLocalStorage(taskText) {
  const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));

  localStorageTasks.forEach(function(task, index){
    if (taskText === task) {
      localStorageTasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(localStorageTasks));
}

// Clear tasks function
function clearTasks() {
  // tasksList.innerHTML = '';

  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.firstChild);
  }

  clearTasksFromLocalStorage();
}

// Clear tasks from local storage function
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter tasks function
function filterTasks(e) {
  // Get filter input text
  const filterText = e.target.value.toLowerCase();
  // Get tasks lis
  const tasksItems = document.querySelectorAll('.collection-item');
  
  tasksItems.forEach(function(task) {
    if (task.textContent.toLowerCase().indexOf(filterText) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
}