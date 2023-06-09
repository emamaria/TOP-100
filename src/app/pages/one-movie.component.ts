import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { AllMoviesList } from '../interfaces/all-movies.interface';
@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.css']
})
export class OneMovieComponent implements OnInit {

  filmName:string = "";

  constructor(private activateRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {

    window.scroll(0,10);


    this.activateRoute.params.subscribe(params => {

      const {movieName}  = params;

      this.filmName = movieName
      console.log(movieName);
    })
  }

  get oneMovieDetail(){
    return this.moviesService.getOneMovieDetail(this.filmName)
  }


}
