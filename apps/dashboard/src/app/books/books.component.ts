import { Component, OnInit } from '@angular/core';
import { Book } from '@optio-nx-presentation/api-interfaces';
import { BooksService } from '@optio-nx-presentation/core-data';
import { Observable } from 'rxjs';

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
  books$: Observable<Book[]>;
  selectedBook: Book;

  constructor(private booksService: BooksService) {}

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
    this.books$ = this.booksService.all();
  }

  saveBook(book: Book) {
    if (book.id) {
      this.updateBook(book);
    } else {
      this.createBook(book);
    }
  }

  createBook(book: Book) {
    this.booksService.create(book).subscribe(() => this.reset());
  }

  updateBook(book: Book) {
    this.booksService.update(book).subscribe(() => this.reset());
  }

  deleteBook(book: Book) {
    this.booksService.delete(book).subscribe(() => this.reset());
  }
}
