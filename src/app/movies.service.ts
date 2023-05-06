import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

   allMovies: any = [];
  

  constructor(private http: HttpClient) { 

    
    console.log("cargando servicios");
  


   

    
  }

  requestMovies(): any{

    if(this.allMovies.length > 0){
      console.log("already has data");
      return this.allMovies;
    }else{
     this.http.get("").subscribe((resp:any) => {
      console.log("done request", resp.results);
       this.allMovies = resp.results
    
    })

    return this.allMovies;
    }
  }


  probando(){
   console.log("metodo probando");
  }


}
