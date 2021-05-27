import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public articles: Article[];

  constructor (private _articleService: ArticleService) {
    this.articles = [];
  }

  ngOnInit(): void {
    this._articleService.getArticles(4).subscribe(
      response => {
        if (response.status == 'success') {
          this.articles = response.articles;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
