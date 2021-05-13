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

    getArticles():Observable<any> {
        return this._http.get(this.apiUrl + 'articles/5');
    }

}