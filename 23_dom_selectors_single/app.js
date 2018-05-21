// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#c3c3c3';
taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change content
taskTitle.textContent = 'Tasks List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color: red;">Tasks List</span>';

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('.btn'));