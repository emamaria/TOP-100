import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeMovie } from './interfaces/home-movies.interface';
import { AllMoviesList } from './interfaces/all-movies.interface';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

 

   allMovies: AllMoviesList[] = [];

   homeMovies:HomeMovie[] = [];
  

  constructor(private http: HttpClient) { 

  
    // this.http.get("http://localhost:4000/movies").subscribe((resp:any) => {
    
    //   console.log("done request in service", resp);
    //    this.allMovies = resp

    //    this.homeMovies = resp.map((movie:AllMoviesList) => ({title: movie.title, img: movie.image, rank: movie.rank} ) )
    

    // })


  


    
    // this.allMovies = data;
    // this.homeMovies = data.map((movie:AllMoviesList) => ({title: movie.title, img: movie.image, rank: movie.rank} ) )


   }



  getOneMovieDetail(movieName: string){
    return [...this.allMovies].filter((movie: AllMoviesList) => movie.title.toLowerCase() === movieName.toLowerCase())[0]
  }

 
  

}
