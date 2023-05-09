import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { HomeComponent } from './pages/home.component';
import { OneMovieComponent } from './pages/one-movie.component';
import { MovieDetailComponent } from './components/movie-detail.component';
import { HomeMoviesComponent } from './components/home-movies.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";
import { FilterMoviePipe } from './pipes/filter-movie.pipe'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneMovieComponent,
    MovieDetailComponent,
    HomeMoviesComponent,
    FilterMoviePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
