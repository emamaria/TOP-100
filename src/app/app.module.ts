import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { OneMovieComponent } from './pages/one-movie.component';
import { MovieDetailComponent } from './components/movie-detail.component';
import { HomeMoviesComponent } from './components/home-movies.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneMovieComponent,
    MovieDetailComponent,
    HomeMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
