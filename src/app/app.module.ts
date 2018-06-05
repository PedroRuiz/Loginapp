import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './compomentes/home-page/home-page.component';
import { NavbarComponent } from './compomentes/navbar/navbar.component';
import { RegisterPageComponent } from './compomentes/register-page/register-page.component';
import { LoginPageComponent } from './compomentes/login-page/login-page.component';
import { PrivadoPageComponent } from './compomentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './compomentes/not-found-page/not-found-page.component';

// A N G U L A R F I R E 2
import { AngularFireModule } from 'angularfire2';

// A N G U L A R    A U T H M O D U L E
import { AngularFireAuthModule } from 'angularfire2/auth';

// I M P O R T   S E R V I C E
import { AuthService } from './servicios/auth.service';

// E N V I R O N M E N T   F I R E B A S E
import { environment } from '../environments/environment';



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
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
