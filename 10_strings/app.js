const firstName = 'Yaroslav';
const lastName = 'Mishchenko';
const age = 25;
const tags = 'Web design, web development, java script, node js';
let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome';

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('a');

// charAt()
val = firstName.charAt(3);

// Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(4, firstName.length);

// slice()
val = firstName.slice(-4);

// split()
val = tags.split(',');

// replace()
val = tags.replace('node js', 'react');

// includes()
val = tags.includes('angular');

console.log(val);