// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.age = age;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Gets married
Person.prototype.getsMaried = function(newLastName) {
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', 'November 15 1992');
const mary = new Person('Mary', 'Johnson', '10-10-1963');

// console.log(john);
// console.log(john.calculateAge());

console.log(mary.getFullName());
mary.getsMaried('Geits');
console.log(mary.getFullName());
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getsMaried'));