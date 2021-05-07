import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public slug: string;

  constructor (private _route: ActivatedRoute, private _router: Router) {
    this.slug = '';
  }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {
      this.slug = params.slug;
    });

  }

  redirect () {
    //Page and params, according to app.router settings.
    this._router.navigate(['/page', 'testing-redirect']);
  }

}
