import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login() {
    localStorage.setItem('isAuthenticated', 'true');
  }

  logout() {
    localStorage.setItem('isAuthenticated', 'false');
    this.router.navigate(['/home']);
    let snackBarRef = this.snackBar.open('You were logged out');
  }

  get isAuth() {
    return localStorage.getItem('isAuthenticated');
  }
  ngOnInit() {
    localStorage.setItem('isAuthenticated', 'false');
  }

  constructor(private router: Router, private snackBar: MatSnackBar) {}
}
