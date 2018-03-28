// Create some arrays
const numbers = [2, 34, 61, 45, 93];
const numbers2 = new Array(36, 52, 69, 83, 57);
const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = ['Apple', 34, true, undefined, null, {a: 1, b: 3}, new Date()];

let val;

// Check array lenght
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = fruits[1];
// Insert into array
numbers[2] = 25;
// Find index of value
val = numbers.indexOf(45);

// MUTATING ARRAYS
// Add on to end
numbers.push(23);
// Add on to start
numbers.unshift(12);
// Take off from end
val = numbers.pop();
// Take off from front
val = numbers.shift();
// Splice values
val = numbers.splice(1,1);
// Reverse
numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2);

// Sorting arrays
val = fruits.sort();
val = numbers2.sort();

// Use the compare function
val = numbers2.sort(function(x, y) {
  return x - y;
});

// Reverse sort
val = numbers2.sort(function(x, y) {
  return y - x;
});

// Find
function under10(num) {
  return num < 10;
}
val = numbers.find(under10);

console.log(numbers);
console.log(val);
