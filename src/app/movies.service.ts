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

    //comment request passed the request limit
  
    // this.http.get("https://top-100-movies-request.onrender.com/movies").subscribe((resp:any) => {
    
    //   console.log("done request in service", resp);
    //    this.allMovies = resp

    //    this.homeMovies = resp.map((movie:AllMoviesList) => ({title: movie.title, img: movie.image, rank: movie.rank} ) )
    

    // })

   
    //para pruebas con datos en duro
    // this.allMovies = data;
    // this.homeMovies = data.map((movie:AllMoviesList) => ({title: movie.title, img: movie.image, rank: movie.rank} ) )


   }



  getOneMovieDetail(movieName: string){
    return [...this.allMovies].filter((movie: AllMoviesList) => movie.title.toLowerCase() === movieName.toLowerCase())[0]
  }

 
  

}
