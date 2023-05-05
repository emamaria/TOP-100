import { Component, OnInit } from '@angular/core';
import { HomeMovie } from '../interfaces/home-movies.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesList: HomeMovie[] = [
    {title: "shawshank redemption", img: "", rank:1}, 
    {title: "godfather", img: "", rank:2},
    {title: "taxi driver", img: "", rank:3},
    {title: "shawshank redemption", img: "", rank:1}, 
    {title: "godfather", img: "", rank:2},
    {title: "taxi driver", img: "", rank:3},
    {title: "shawshank redemption", img: "", rank:1}, 
    {title: "godfather", img: "", rank:2},
    {title: "taxi driver", img: "", rank:3},
    {title: "shawshank redemption", img: "", rank:1}, 
   
  ]

  constructor() { }

  ngOnInit(): void {
  }


  

}
