import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router // R O U T E R
 } from '@angular/router';
import { Observable } from 'rxjs';

// R X J S
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

// A N G U L A R F I R E A U T H
import { AngularFireAuth } from 'angularfire2/auth';

// S E R V I C E
import { AuthService } from '../servicios/auth.service';



@Injectable()

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    //
      return this.authService.afAuth.authState
      .take(1)
      .map( authState => !! authState)
      .do( authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      });
  }
}
