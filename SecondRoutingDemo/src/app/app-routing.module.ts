import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{AboutComponent} from './about/about.component';
import{ContactComponent} from './contact/contact.component';
import{ServicesComponent} from './services/services.component';
import { AboutroutingComponent } from './aboutrouting/aboutrouting.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {component:HomeComponent, path:'home'},
  {component:AboutComponent, path:'about'},
  {component:ContactComponent, path:'contact'},
  {component:ServicesComponent, path:'services'},
  {path:'aboutrouting', component:AboutroutingComponent},
  {path:'', component:NavbarComponent}
  // {path:'', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
