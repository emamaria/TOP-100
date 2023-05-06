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

  // get filmsList(){
    
  //    this.moviesList = [...this.movieService.homeMovies()]
  //    this.moviesListOriginal = [...this.movieService.homeMovies()]
  //    console.log("ejecuto filmsList");
  //    return this.moviesList
  // }
   


}
