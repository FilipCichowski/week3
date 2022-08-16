import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'menu',
    loadChildren: () =>
      import('./usser-selectable/usser-selectable.module').then(
        (mod) => mod.UsserSelectableModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
