import { Component, Input, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie = new Movie('', '', 0);
  @Input() movieIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
