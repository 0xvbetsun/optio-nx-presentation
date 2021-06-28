import { Component, OnInit } from '@angular/core';
import { Book } from '@optio-nx-presentation/api-interfaces';
import { BooksService } from '@optio-nx-presentation/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'optio-nx-presentation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  books$: Observable<Book[]>;
  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.books$ = this.booksService.all();
  }

  toggleSideNav() {}
  logout() {}
}
