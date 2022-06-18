import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() EmployeeName !:string;
  childData:string="Data from child component";
  @Output() childStringData : EventEmitter<string>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  SendData(){
    this.childStringData.emit(this.childData)
  }

}