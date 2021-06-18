import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '@optio-nx-presentation/api-interfaces';

@Component({
  selector: 'optio-nx-presentation-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  @Input() books: Book[] = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
