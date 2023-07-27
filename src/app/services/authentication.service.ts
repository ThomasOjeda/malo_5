import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  loggedIn = false;
  login(user: string, password: string) {
    if (user == 'admin' && password == '1234') {
      this.loggedIn = true;
      sessionStorage.setItem('user', user);
      sessionStorage.setItem('password', password);
      return true;
    }
    return false;
  }

  logout() {
    if (this.loggedIn) {
      this.loggedIn = false;
      return true;
    }
    return false;
  }

  isLoggedIn() {
    let user = sessionStorage.getItem('user');
    let pass = sessionStorage.getItem('password');
    if (user && pass) {
      return this.login(user, pass);
    }
    return false;
  }
}
