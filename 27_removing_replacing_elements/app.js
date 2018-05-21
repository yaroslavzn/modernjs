const listItems = document.querySelectorAll('li.collection-item');

for(let i = 0; i < listItems.length; i++) {
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>'
  listItems[i].appendChild(link);
}
// REPLACE ELEMENT

// Create lement
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// Add text node
newHeading.appendChild(document.createTextNode('Tasks List'));

// Get old heading
const oldHeading = document.getElementById('task-title');
// Get old heading parent
const parent = oldHeading.parentElement;
// Replace
parent.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const ul = document.querySelector('ul');

// Remove method
lis[0].remove();

// Remove child element
ul.removeChild(lis[1]);

// CLASSES & ATTR
const firstLi = document.querySelector('li.collection-item:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test-class');
link.classList.remove('test-class');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('title');
link.setAttribute('title', 'Google');
val = link.getAttribute('title');
link.removeAttribute('title');
