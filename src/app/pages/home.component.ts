import { Component, OnInit } from '@angular/core';
import { HomeMovie } from '../interfaces/home-movies.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesList: HomeMovie[] = [{title: "shawshank redemption", img: "img1", rank:1}, {title: "godfather", img: "img2", rank:2}]

  constructor() { }

  ngOnInit(): void {
  }


  

}
