// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'test-id';

// Add attribute
li.setAttribute('title', 'New item');

// Create new link element
const link = document.createElement('a');
// Add link classes
link.className = 'delete-item secondary-content';
// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>'
// Append link into li
li.appendChild(link);
// Append link into all li
const lis = document.querySelectorAll('li.collection-item');

for(let i = 0; i < lis.length; i++) {
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>'
  lis[i].appendChild(link);
}

// Create and append text node
li.appendChild(document.createTextNode('Hello World'));

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);