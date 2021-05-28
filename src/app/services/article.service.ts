import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';
import {Article} from '../models/article';
@Injectable()
export class ArticleService {

    public apiUrl: string;

    constructor (private _http: HttpClient) {
        this.apiUrl = Global.apiUrl;
    }

    getArticles(numArticles:any = null):Observable<any> {

        let endpoint = 'articles/';

        if (numArticles != null) {
            endpoint += numArticles;
        }

        return this._http.get(this.apiUrl + endpoint);

    }

    getArticle(id:any = null):Observable<any> {
        return this._http.get(this.apiUrl + 'article/' + id);
    }

    search(searchStr:string = ''):Observable<any> {
        return this._http.get(this.apiUrl + 'search/' + searchStr);
    }

    create(article:Article):Observable<any> {

        const params = JSON.stringify(article);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.apiUrl + 'save', params, {headers});

    }

}