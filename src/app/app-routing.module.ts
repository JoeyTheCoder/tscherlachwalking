import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeViewComponent} from './home/home-view/home-view.component';
import {SignupComponent} from './signup/signup/signup.component';
import {SignupViewComponent} from './signup/signup-view/signup-view.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeViewComponent},
  {path: 'signup', component: SignupViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
