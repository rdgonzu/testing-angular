import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user: any;
  public comment: string;

  constructor () {

    this.user = {
      name: '',
      lastName: '',
      bio: '',
      gender: ''
    }

    this.comment = '';

  }

  ngOnInit(): void {
  }

  sendUserForm () {
    console.log(this.user);
  }

  buttonClicked () {
    alert('Button clicked.');
  }

  leftCommentField () {
    alert('Left commend field.');
  }

  enterPressed () {
    alert('Enter pressed.');
  }

}
