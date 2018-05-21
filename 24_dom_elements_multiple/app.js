// document.getElementsByClassname
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[2].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName
// const lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[2].textContent = 'Hello';

// Convert HTMLCollection into array

// const lisArr = Array.from(lis);
// // console.log(lisArr);
// lisArr.reverse();

// lisArr.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);

const lisOdd = document.querySelectorAll('li.collection-item:nth-child(odd)');
const lisEven = document.querySelectorAll('li.collection-item:nth-child(even)');

lisOdd.forEach(function(li) {
  li.style.background = '#c3c3c3';
});

for(let i = 0; i < lisEven.length; i++) {
  lisEven[i].style.background = '#f4f4f4';
};

