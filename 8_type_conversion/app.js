let val;

// Number to string
val = String(10 + 100);
// Bool to String
val = String(true);
// Date to String
val = String(new Date());
// Array to string
val = String([1,2,3,4,5]);

// toString()
val = (10).toString();
val = (false).toString();

// String to Number
val = Number('5');
// Boolean to Number
val = Number(true);
val = Number(false);
// Null to Number
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('45');
val = parseFloat('45.45');

// Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 10;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);




