import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './_guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'dashboard',
    component: HomepageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
