// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

// Create person1
const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit Person prtotype method
Customer.prototype = Object.create(Person.prototype);
// Make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer1
const customer1 = new Customer('Steve', 'Smith', '555-555-5555', 'Standard');

Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}, welcome to our company!`;
}

console.log(customer1);
console.log(customer1.greeting());