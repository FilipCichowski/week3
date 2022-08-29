import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthService } from './services/auth.service';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule
      ),
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (mod) => mod.RegisterModule
      ),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./modules/menu/module').then(
        (mod) => mod.Module
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
