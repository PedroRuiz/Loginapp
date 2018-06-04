import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './compomentes/home-page/home-page.component';
import { NavbarComponent } from './compomentes/navbar/navbar.component';
import { RegisterPageComponent } from './compomentes/register-page/register-page.component';
import { LoginPageComponent } from './compomentes/login-page/login-page.component';
import { PrivadoPageComponent } from './compomentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './compomentes/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
