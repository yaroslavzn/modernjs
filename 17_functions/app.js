// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
  // if (typeof firstName === 'undefined') {
  //   firstName = 'John';
  // }
  // if (typeof lastName === 'undefined') {
  //   lastName = 'Doe';
  // }
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 2) {
  return x * x;
};

// console.log(square());

// IMMIDATLEY INVOKABLE FUNCTION EXPRESSIONS = IIFEs
// (function() {
//   console.log('IIFEs Ran');
// })();

// (function(name) {
//   console.log('Hello ' + name);
// })('Brad');

// PROPERTY METHODS

const todo = {
  addTodo: function() {
    console.log('Add todo');
  },
  edit: function(id) {
    console.log(`Edit todo id ${id}`);
  }
};

todo.delete = function() {
  console.log('Delete todo');
}

todo.addTodo();
todo.edit(1);
todo.delete();

