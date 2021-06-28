import { Component } from '@angular/core';

@Component({
  selector: 'optio-nx-presentation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/books', icon: 'view_list', title: 'books' },
  ];

  toggleSideNav() {}

  logout() {}
}
