import { Component } from '@angular/core';
import { Book } from '@optio-nx-presentation/api-interfaces';

@Component({
  selector: 'optio-nx-presentation-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  books: Book[] = [
    { id: '1', title: 'Book 01', description: 'Pending', pages: 123 },
    { id: '2', title: 'Book 02', description: 'Pending', pages: 123 },
    { id: '3', title: 'Book 03', description: 'Pending', pages: 123 },
  ];
}
