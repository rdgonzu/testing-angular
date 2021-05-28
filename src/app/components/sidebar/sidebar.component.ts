import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public searchStr: string;

  constructor (private _route: ActivatedRoute, private _router: Router) {
    this.searchStr = '';
  }

  ngOnInit(): void {
  }

  searchArticles () {
    this._router.navigate(['/search', this.searchStr]);
    this.searchStr = '';
  }

}
