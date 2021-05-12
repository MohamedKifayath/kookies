import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NftComponent } from './components/nft/nft.component';
import { StoreComponent } from './components/store/store.component';
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
  },
  {
    path:'store',
    component:StoreComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'nft',
    component:NftComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'games',
    component:GamesComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
