import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { OneMovieComponent } from './pages/one-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneMovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
