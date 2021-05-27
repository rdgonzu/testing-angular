import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';

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

}