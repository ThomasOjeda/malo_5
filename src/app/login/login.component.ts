import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private as: AuthenticationService, private r: Router) {}

  login(user: string, password: string) {
    if (this.as.login(user, password)) this.r.navigateByUrl('/');
    else alert('incorrect user or password');
  }
}
