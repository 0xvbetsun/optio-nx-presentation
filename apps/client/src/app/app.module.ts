import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreDataModule } from '@optio-nx-presentation/core-data';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreDataModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
