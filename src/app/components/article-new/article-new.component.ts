import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;

  constructor (private _articleService: ArticleService) {
    this.article = new Article('', '', '', '', '');
    this.status = '';
  }

  ngOnInit(): void {
  }

  sendCreateArticleForm () {

    this.status = '';

    this._articleService.create(this.article).subscribe(

      response => {

        if (response.status == 'success') {
          this.status = 'success';
          console.log('Article created: ', response.article);
          
          this.article = new Article('', '', '', '', '');
        }
        else {
          this.status = 'error';
        }

      },

      error => {
        console.log(error);
        this.status = 'error';
      }

    );

  }

}
