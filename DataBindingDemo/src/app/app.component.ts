import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'DataBindingDemo';
  inter='Interploation in work';
  propBind="property binded Box";
  propBinds="interpolation binded Box";
  eventbind="";
  url="https://picsum.photos/200";
  disabledBox=true;
  propBinding(){
    this.disabledBox=false,
    this.propBind="Enabled"
  };
  eventBinding(){
    this.eventbind="Welcomne to Java 5 Batch"
  };
  data:any;

}
