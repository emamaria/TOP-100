import { Component, OnInit } from '@angular/core';
import { HomeMovie } from '../interfaces/home-movies.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputValue: string = "";
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



  constructor() { 
    this.moviesList = this.moviesListOriginal
    console.log("cargando home");
  }

  ngOnInit(): void {
   
  }

  onChange(value:string):any{
    console.log("valor", value);

    this.moviesList = this.moviesListOriginal
  
    this.moviesList = this.moviesList.filter( list =>  list.title.toLowerCase().includes(value.toLowerCase())) 
   
  }
  

}
