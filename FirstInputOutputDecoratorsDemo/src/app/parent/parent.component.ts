import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  Ename:string ="Harsh"
  constructor() { }
  childDataReceived:string = "";
  ngOnInit(): void {
  }
  ReceiveData(event:string){
    console.log(event);
    this.childDataReceived=event;
  }

}