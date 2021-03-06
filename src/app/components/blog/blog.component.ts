import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[];

  constructor (private _articleService: ArticleService) {
    this.articles = [];
  }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(
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
