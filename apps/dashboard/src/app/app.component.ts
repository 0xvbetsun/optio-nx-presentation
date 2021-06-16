import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@optio-nx-presentation/api-interfaces';

@Component({
  selector: 'optio-nx-presentation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
