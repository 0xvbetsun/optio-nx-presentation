import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '@optio-nx-presentation/api-interfaces';

@Component({
  selector: 'optio-nx-presentation-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent {
  currentBook: Book;
  originalTitle = '';
  @Input() set book(value: Book) {
    if (value) this.originalTitle = value.title;
    this.currentBook = { ...value };
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
