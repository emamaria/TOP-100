import { Component, Input, OnInit } from '@angular/core';
import { HomeMovie } from '../interfaces/home-movies.interface';

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.css']
})
export class HomeMoviesComponent implements OnInit {

  @Input() movieData!:HomeMovie;

  constructor() { 

    
  }

  ngOnInit(): void {

    // console.log(this.movieData)
  }

  get getMovieData(){
    return this.movieData
  }


  goToMovieDetailPage(){
    console.log("ir a detalle pagina");
  }

}
