import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './home/home/home.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import { SignupComponent } from './signup/signup/signup.component';
import { SignupViewComponent } from './signup/signup-view/signup-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeViewComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    SignupViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
