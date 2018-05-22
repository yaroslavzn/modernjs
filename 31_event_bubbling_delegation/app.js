// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function() {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function() {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
//   console.log('col');
// });

// EVENT DELEGATION
const lis = document.querySelectorAll('li.collection-item');

for(let i = 0; i < lis.length; i++) {
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>'
  link.setAttribute('href', '#');
  lis[i].appendChild(link);
}

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete');
  // }

  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}

