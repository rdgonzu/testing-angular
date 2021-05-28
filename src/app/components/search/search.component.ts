import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public apiUrl: string;
  public searchStr: string;

  constructor (private _articleService: ArticleService, private _route: ActivatedRoute, private _router: Router) {
    this.articles = [];
    this.apiUrl = Global.apiUrl;
    this.searchStr = '';
  }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {

      this.searchStr = params['searchStr'];
      
      this._articleService.search(this.searchStr).subscribe(
        response => {
          if (response.status == 'success') {
            this.articles = response.articles;
          }
        },
        error => {
          console.log(error);
        }
      );
      
    });

  }

}
