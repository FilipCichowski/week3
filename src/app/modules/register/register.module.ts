import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

const routes: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild(routes),
    SharedModuleModule,
    PasswordStrengthMeterModule,
  ],
})
export class RegisterModule {}
