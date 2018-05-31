class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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

  clearInputs() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  showAlert(message, className) {
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

  deleteBook(target) {
    const ui = new UI();

    target.parentElement.parentElement.remove();
    ui.showAlert('Book Removed!', 'success');
  }
}

class Store {
  static getBooks() {
    let books;

    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks() {
    const books = Store.getBooks();

    const ui = new UI();

    books.forEach(function(book) {
      ui.addBookToList(book);
    })
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    })

    localStorage.setItem('books', JSON.stringify(books));
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
    // Store book to LS
    Store.addBook(book);
  }

  e.preventDefault();
});

// Add event listener for delete book
document.getElementById('book-list').addEventListener('click', function(e) {
  const ui = new UI();
  // Delete book
  if (e.target.className === 'delete') {
    ui.deleteBook(e.target);
    // Delete book from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  }

  e.preventDefault();
});

// Get books from LS to UI
document.addEventListener('DOMContentLoaded', Store.displayBooks);