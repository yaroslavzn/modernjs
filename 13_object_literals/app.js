const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  email: 'johndoe@aol.com',
  hobbies: ['sport', 'movies'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[0];
val = person.address.state;
val = person.getBirthYear();

const people = [
  {
    name: 'Steve',
    age: 21
  },
  {
    name: 'John',
    age: 26
  },
  {
    name: 'Mike',
    age: 35
  }
]


console.log(val);

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}