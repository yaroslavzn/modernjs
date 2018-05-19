// Global scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function scope: ' + a, b, c);
// }

// test();

// If scope
// if(true) {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If scope: ' + a, b, c);
// }

// for scope
for(var a = 0; a < 10; a++) {
  console.log(a);
}

console.log('Global scope: ' + a, b, c);