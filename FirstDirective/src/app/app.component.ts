import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstDirective';
  showHides=true;
  showHide=true;
  colorvalue='green';
  switchValue=2;
  users=[
    {id:1, name:"john"},
    {id:2, name:"Virat"},
    {id:3, name:"ABD"},
    {id:4, name:"Peter"},
    {id:5, name:"Kohli"},
    {id:6, name:"Dhoni"},
    {id:7, name:'jackson'}
  ]; 
  colorval="green";
  clsName='two';
  clsName2='three';
}
