import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: Array<Movie>;
  public featuredMovie: Movie = new Movie('', '', 0);

  constructor () {

    this.movies = [
      new Movie('Movie 1 title', 'https://via.placeholder.com/300x300', 2020),
      new Movie('Movie 2 title', 'https://via.placeholder.com/300x300', 2015),
      new Movie('Movie 3 title', 'https://via.placeholder.com/300x300', 2018),
      new Movie('Movie 4 title', 'https://via.placeholder.com/300x300', 2017)
    ];

  }

  ngOnInit(): void {
  }

  showMovieAsFeatured(event: any) {
    this.featuredMovie = event.movie;
  }

}
