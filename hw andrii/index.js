const date = new Date().toLocaleDateString();
const arrOfBooks = [];
class BookList {
	constructor(read,arrOfBooks){
  this.read = read;
  this.notRead = 0;
  this.nextBook = null;
  this.currentBook = 0;
  this.lastBook = 0;
  this.arrOfBooks = arrOfBooks;
  this.firstUnrededBook = null;
  	
  }
  
  addBook(item){
  	return arrOfBooks.push(item);
  }
  setReadedBook(id) {
  		for(let i = 0; i < this.arrOfBooks.length; i++){
      			if(this.arrOfBooks[i].id === id){
                this.arrOfBooks[i].read = true;
                this.readDate = time;
            }
      }
  }
  findUnreadBooks(){
  	for(let i = 0; i < this.arrOfBooks.length; i++){
      			if(!this.arrOfBooks[i].read){
            		this.notRead += 1;
            }
      }
  }
  
  setFinishedBook(id){
  	for(let i = 0; i < this.arrOfBooks.length; i++){
      			if(this.arrOfBooks[i].id === id){
            		this.arrOfBooks[i].read = true;
                this.arrOfBooks[i].isfinished = true;
            }
      }
  }
  
  setTheNextBook(id){
  		for(let i = 0; i < this.arrOfBooks.length; i++){
      			if(this.arrOfBooks[i].id === id){
            		this.nextBook = this.arrOfBooks[i];
            }
      }
  } 
  
  checkForCurrentBook(){
    if(this.nextBook){
       const nextId =  this.nextBook.id + 1;
        for(let i = 0; i < this.arrOfBooks.length; i++){
            if(this.arrOfBooks[i].id === nextId){
                this.firstUnrededBook = this.arrOfBooks[i];
                this.arrOfBooks[i].read = false;
      }
    }
  		
  }
}
  
  setCurrentReadBook(id){
  		const readed = this.arrOfBooks.filter(book => book.id === id);
       this.lastBook = readed;
  }
  
  get books () {
  		return this.arrOfBooks
  }
 
  get unreadBooks () {
  		return this.notRead;
  }
  get lastReadedBook () {
  		return  this.lastBook;
  }
  get showNextBook () {
   		return this.nextBook;
  }
  get checkForBook(){
      return this.firstUnrededBook;
  }
}
const booklist = new BookList(0,arrOfBooks);
class Book extends BookList{
        constructor(id,author, genre,read,readDate,title,isfinished) {
        super(0, arrOfBooks);
        this.id = id;
        this.author = author;
        this.genre = genre;
        this.read = read;
        this.readDate = readDate;
        this.title = title;
        this.isfinished = isfinished;
        this.arrOfBooks = arrOfBooks ;
    }
  }
  
  class UI {
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach((book) => UI.addBookToList(book));
    }
  
    static addBookToList(book) {
      const list = document.querySelector('#book-list');
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.id}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
        <td>${book.read}</td>
        <td>${book.readDate}</td>
        <td>${book.title}</td>
        <td>${book.isfinished}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteBook(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');
      container.insertBefore(div, form);
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
    static clearFields() {
      document.querySelector('#id').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#genre').value = '';
      document.querySelector('#read').value = '';
      document.querySelector('#readDate').value = '';
      document.querySelector('#title').value = '';
      document.querySelector('#isfinished').value = '';
    }
  }
  
  class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
    
    static addBook(book) {
    const books = Store.getBooks();
    if(book.isfinished == "Is finished"){
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }else{
      books.unshift(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
      
    }
  
    static removeBook(genre) {
      const books = Store.getBooks();
  
      books.forEach((book, index) => {
        if(book.genre === genre) {
          books.splice(index, 1);
          Store.removeItem('books');
        }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
      
    }

  }
  document.addEventListener('DOMContentLoaded', UI.displayBooks);

  document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.querySelector('#id').value;
    const author = document.querySelector('#author').value;
    const genre = document.querySelector('#genre').value;
    const read = checkRead();
    const readDate = isRead();
    const title = document.querySelector('#title').value;
    const isfinished = check();
    function check(){
      if(document.getElementById("isfinished").checked){
        return "Is finished";
      }else{
        return "Is not finished";
      }
    }
    function checkRead(){
      if(document.getElementById("read").checked){
        return "Is read";
      }else{
        return "Not read yet";
      }
    }
    function isRead(){
      if(document.getElementById("isfinished").checked){
        return date;
      }else{
        return "Not read yet!"
      }
    }
   
    if(title === '' || author === '' || genre === '' || id === '' ||  readDate === '') {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
      const book = new Book(id, author, genre, read, readDate, title, isfinished);
  
      UI.addBookToList(book);
      Store.addBook(book);
      UI.showAlert('Book Added', 'success');
  
      UI.clearFields();
    }
  });
  // Event: Remove a Book
  document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling);
    UI.showAlert('Book Removed', 'success');
  });
