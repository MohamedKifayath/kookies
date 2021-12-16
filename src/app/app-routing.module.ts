import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookiesComponent } from './components/cookies/cookies.component';
import { GamesComponent } from './components/games/games.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NftDetailsComponent } from './components/nft-details/nft-details.component';
import { NftComponent } from './components/nft/nft.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { StoreComponent } from './components/store/store.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './_guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path: 'dashboard',
    component: HomepageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LandingComponent,
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
  },
  {
    path:'nftdetails',
    component:NftDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'cookies',
    component:CookiesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    component: LandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
