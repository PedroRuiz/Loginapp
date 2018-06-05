import { Component, OnInit } from '@angular/core';

// S E R V I C E
import { AuthService } from '../../servicios/auth.service';

// R O U T E R
import { Router } from '@angular/router';

// F L A S H - M E S S A G E - S E R V I C E
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flashMessage.show(
        'Usuario logado correctamente',
        { cssClass: 'alert-success', timeout: 4000 }
      );
      this.router.navigate(['/privado']);
    }).catch( (err) => {
      this.flashMessage.show(
        err.message,
        { cssClass: 'alert-danger', timeout: 4000 }
      );
      this.router.navigate(['/login']);
    });
  }

}
