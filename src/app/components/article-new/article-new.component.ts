import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {Global} from '../../services/global';
@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article = new Article('', '', '', '', '');
  public status: string;

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

  constructor (private _articleService: ArticleService) {
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

  uploadArticleImage (data: any) {
    this.article.image = data.body.fileName;
  }

}
