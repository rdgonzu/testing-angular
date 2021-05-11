import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: Array<any>;

  constructor () {

    this.movies = [
      {title: 'Movie 1 title', image: 'https://via.placeholder.com/300x300', year: 2020},
      {title: 'Movie 2 title', image: 'https://via.placeholder.com/300x300', year: 2015},
      {title: 'Movie 3 title', image: 'https://via.placeholder.com/300x300', year: 2018},
      {title: 'Movie 4 title', image: 'https://via.placeholder.com/300x300', year: 2017}
    ];

  }

  ngOnInit(): void {
  }

}
