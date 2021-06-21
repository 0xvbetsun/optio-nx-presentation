import { Component, OnInit } from '@angular/core';
import { Book } from '@optio-nx-presentation/api-interfaces';

const mockBooks: Book[] = [
  { id: '1', title: 'Book 01', description: 'Pending', pages: 123 },
  { id: '2', title: 'Book 02', description: 'Pending', pages: 123 },
  { id: '3', title: 'Book 03', description: 'Pending', pages: 123 },
];

const emptyBook: Book = {
  id: null,
  title: '',
  description: '',
  pages: 0,
};

@Component({
  selector: 'optio-nx-presentation-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book;

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadBooks();
    this.selectBook(emptyBook);
  }

  resetForm() {
    this.selectedBook = emptyBook;
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  loadBooks() {
    this.books = mockBooks;
  }

  saveBook(book: Book) {
    if (book.id) {
      this.updateBook(book);
    } else {
      this.createBook(book);
    }
  }

  createBook(book: Book) {
    const newBook = Object.assign({}, book, { id: this.getRandomID() });
    this.books = [...this.books, newBook];
    this.resetForm();
  }

  updateBook(book: Book) {
    this.books = this.books.map((b) => {
      return book.id === b.id ? book : b;
    });
    this.resetForm();
  }

  deleteBook(book: Book) {
    this.books = this.books.filter((b) => book.id !== b.id);
    this.resetForm();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }
}
