import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit, DoCheck {

  public title: string;
  public visible: boolean;

  constructor() { //Sets intial values to class' properties.
    console.log('This is the constructor.');
    this.title = 'This is the title.';
    this.visible = true;
    
  }

  ngOnInit(): void { //This event is executed after the constructor.
    console.log('This is the OnInit event.');
  }

  ngDoCheck() { //This event is executed when any change is triggered.
    console.log('This is the DoCheck event.');
  }

  updateTitle() {
    console.log('This is the DoCheck event.');
    this.title = 'The title has benn updated';
  }

  updateVisible() {
    this.visible = !this.visible;
  }

  ngOnDestroy() {
    console.log('The component is about to be destroyed.');
  }

}
