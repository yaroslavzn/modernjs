const id = 100;

// EQUAL TO
// if (id == 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if (id != 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if (id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE & TYPE
// if (id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The id is ${id}`);
// } else {
//   console.log('No ID');
// }

// Greater or less than
// if (id < 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

const color = 'yellow';

// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

// AND &&
const name = 'Steve';
const age = 25;

if (age > 0 && age <= 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} is can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

