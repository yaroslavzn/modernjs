// const brad = {
//   name: 'Brad',
//   age: 30
// };

// console.log(brad);

// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('Brad', 35);
// const john = new Person('John', 25);

// console.log(john);

const brad = new Person('Brad', '11/10/1992');

console.log(brad.calculateAge());