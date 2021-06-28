import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@optio-nx-presentation/core-data';
import { CoreStateModule } from '@optio-nx-presentation/core-state';
import { MaterialModule } from '@optio-nx-presentation/material';
import { UiToolbarModule } from '@optio-nx-presentation/ui-toolbar';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BooksComponent,
    BooksListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    UiToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
