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
 


  getAllMovies(){
    return this.movieService.getAllHomeMovies()
  }

  
  get Date(){
   
    return new Date().getFullYear()
 }
  


 



}
