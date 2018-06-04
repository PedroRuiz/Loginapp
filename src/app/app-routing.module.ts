import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// I M P O R T O    C O M P O N E N T E S
import { HomePageComponent } from './compomentes/home-page/home-page.component';
import { LoginPageComponent } from './compomentes/login-page/login-page.component';
import { RegisterPageComponent } from './compomentes/register-page/register-page.component';
import { PrivadoPageComponent } from './compomentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './compomentes/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'privado', component: PrivadoPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
