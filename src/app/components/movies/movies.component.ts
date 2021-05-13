import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import {MovieService} from '../../services/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  public movies: Array<Movie>;
  public featuredMovie: Movie = new Movie('', '', 0, new Date());

  constructor (private _movieService: MovieService) {
    this.movies = this._movieService.getMovies();
  }

  ngOnInit(): void {
  }

  showMovieAsFeatured(event: any) {
    this.featuredMovie = event.movie;
  }

}
