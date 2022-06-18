import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstPipeDemo';
  user={
    userId:20,
    firstName:'Parv',
    lastName:'Singh',
    today:Date.now(),
    salary:12000
  };
}
