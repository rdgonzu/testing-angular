import {Injectable} from '@angular/core';
import {Movie} from '../models/movie';

@Injectable()
export class MovieService {

    public movies: Movie[];

    constructor () {

        this.movies = [
            new Movie('Movie 1 title', 'https://via.placeholder.com/300x300', 2020, new Date()),
            new Movie('Movie 2 title', 'https://via.placeholder.com/300x300', 2015, new Date()),
            new Movie('Movie 3 title', 'https://via.placeholder.com/300x300', 2018, new Date()),
            new Movie('Movie 4 title', 'https://via.placeholder.com/300x300', 2017, new Date())
        ];

    }

    getMovies () {
        return this.movies;
    }

}