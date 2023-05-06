import { Component, OnInit } from '@angular/core';
import { HomeMovie } from '../interfaces/home-movies.interface';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  inputValue: string = "";

 movie: any = [];
  
  moviesList: HomeMovie[] = [
    
   
  ]

 
  moviesListOriginal: HomeMovie[] = [
    
    {title: "shawshank redemption", img: "", rank:1}, 
    {title: "godfather", img: "", rank:2},
    {title: "taxi driver", img: "", rank:3},
    {title: "shawshank redemption", img: "", rank:1}, 
    {title: "godfather", img: "", rank:2},
    {title: "taxi driver", img: "", rank:3},
    {title: "shawshank redemption", img: "", rank:1}, 
    {title: "godfather", img: "", rank:2},
    {title: "taxi driver", img: "", rank:3},
    {title: "shaws", img: "", rank:1}, 
  ]




  constructor(private movieService:MoviesService) {
    this.movieService.probando()
    
  }

  ngOnInit(): void {
    
    this.moviesList = this.moviesListOriginal
    
    console.log("cargando home");
  }

  onChange(value:string):any{
    console.log("valor", value);

    this.moviesList = this.moviesListOriginal
  
    this.moviesList = this.moviesList.filter( list =>  list.title.toLowerCase().includes(value.toLowerCase())) 
   
  }

   get moviesData(){
     //mapeo ditrectamente el resltado de this.movieService.requestMovies()
     //y lo almaceno en this.moviesListOriginal
    // this.moviesListOriginal = this.movieService.requestMovies()
    this.movie = this.movieService.requestMovies()
    console.log("home movie data", this.movie);

    return this.movie
  }


}
