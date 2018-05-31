// Create book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// Create UI constructor
function UI() {}

// Add book
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  const row = document.createElement('tr');
  
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
}

// Clear UI inputs
UI.prototype.clearInputs = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Show alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Create text message
  div.appendChild(document.createTextNode(message));
  // Get container
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Append div
  container.insertBefore(div, form);

  // Timeout div remove
  setTimeout(function() {
    div.remove();
  }, 3000);
}

// Delete book
UI.prototype.deleteBook = function(target) {
  if (target.className = 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Add submit event listener
document.getElementById('book-form').addEventListener('submit', function(e) {
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  
  const book = new Book(title, author, isbn);
  
  const ui = new UI();

  if (title === '' || author === '' || isbn === '') {
    // Show error alert
    ui.showAlert('Please fill in all lines', 'error');
  } else {
    // Add book
    ui.addBookToList(book);
    // Clear inputs
    ui.clearInputs();
    // Show success alert
    ui.showAlert('Book added!', 'success');
  }

  e.preventDefault();
});

// Add event listener for delete book
document.getElementById('book-list').addEventListener('click', function(e) {
  const ui = new UI();
  // Delete book
  ui.deleteBook(e.target);
  // Show message
  ui.showAlert('Book removed', 'success');

  e.preventDefault();
});