import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../providers/CustomValidators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hide = true;
  registerForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    [CustomValidators.passwordMatch('password', 'confirmPassword')]
  );

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.router.navigate(['menu', 'login']);
    let snackBarRef = this.snackBar.open('Successful registration!');
  }

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {}
}
