import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

import { Router } from '@angular/router';

// F L A S H - M E S S A G E - S E R V I C E
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then( (res) => {
      this.flashMessage.show(
        'Usuario creado correctamente',
        {cssClass: 'alert-success', timeout: 4000 }
      );
      this.router.navigate(['/privado']);
    }).catch( (err) => {
      this.flashMessage.show(
        err.message,
        { cssClass: 'alert-danger', timeout: 4000 }
      );
    });
  }

}
