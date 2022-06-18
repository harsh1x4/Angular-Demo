import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SqrtTestPipe } from './sqrt-test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SqrtTestPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
