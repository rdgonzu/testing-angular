import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Movie} from '../../models/movie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie = new Movie('', '', 0, new Date());
  @Input() movieIndex: number = 0;
  @Output() outputMarkMovieAsFeatured = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  markMovieAsFeatured(event: any, movie: any) {
    this.outputMarkMovieAsFeatured.emit({movie});
  }

}
