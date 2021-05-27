import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../../models/article';
import {Global} from '../../services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[];
  public apiUrl: string;

  constructor() {
    this.articles = [];
    this.apiUrl = Global.apiUrl;
  }

  ngOnInit(): void {
  }

}
