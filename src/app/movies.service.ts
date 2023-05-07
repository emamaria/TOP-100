import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeMovie } from './interfaces/home-movies.interface';
import { AllMoviesList } from './interfaces/all-movies.interface';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

   allMovies: AllMoviesList[] = [];
   
  loadedData: boolean = false;
  

  constructor(private http: HttpClient) { 

    
    console.log("cargando servicios");
  
    // this.http.get("http://localhost:4000/movies").subscribe((resp:any) => {
    
    //   console.log("done request", resp);
    //    this.allMovies = resp
    //   console.log("primera carga", this.allMovies);

    // })

   

    
  }

  

  get moviesList(){
    return [...this.allMovies]
  }

  homeMovies(): HomeMovie[]{
    console.log("ejecuto homeMovies");
    this.loadedData = true;
    console.log("loaded status", this.loadedData);
 
    return [...this.allMovies].map((movie:AllMoviesList) => ({title: movie.title, img: movie.image, rank: movie.rank} ) )
  }

  
  // requestMovies(): any{

  //   if(this.allMovies.length > 0){
  //     console.log("already has data");
  //     return this.allMovies;
  //   }else{
  //    this.http.get("http://localhost:4000/movies").subscribe((resp:any) => {
  //     console.log("done request", resp.results);
  //      this.allMovies = resp.results
    
  //   })

  //   return this.allMovies;
  //   }
  // }

 

}
