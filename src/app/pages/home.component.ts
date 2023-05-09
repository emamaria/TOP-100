import { Component, OnInit } from '@angular/core';
import { HomeMovie } from '../interfaces/home-movies.interface';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  



  constructor(private movieService:MoviesService) {
  
  }
 


  get allMovies(){
    return this.movieService.homeMovies
  }

  
  get Date(){
   
    return new Date().getFullYear()
 }
  


 



}
