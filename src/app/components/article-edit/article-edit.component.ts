import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {Global} from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article = new Article('', '', '', '', '');
  public status: string;
  public updatingArticle: boolean;
  public apiUrl: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: 2,
    uploadAPI:  {
      url: Global.apiUrl + 'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Upload your file.',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor (private _articleService: ArticleService, private _route: ActivatedRoute, private _router: Router) {
    this.status = '';
    this.updatingArticle = true;
    this.apiUrl = Global.apiUrl;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  sendCreateArticleForm () {

    this.status = '';

    this._articleService.update(this.article._id, this.article).subscribe(

      response => {

        if (response.status == 'success') {
          this.status = 'success';
          console.log('Article editado: ', response.article);
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

  uploadArticleImage (data: any) {
    this.article.image = data.body.fileName;
  }

  getArticle() {

    this._route.params.subscribe((params: Params) => {
      
      this._articleService.getArticle(params['id']).subscribe(
        response => {
          if (response.status == 'success') {
            this.article = response.article;
          }
          else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
      
    });

  }

}
