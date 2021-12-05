import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './_guard/auth.guard';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreComponent } from './components/store/store.component';
import { NftComponent } from './components/nft/nft.component';
import { GamesComponent } from './components/games/games.component';
import { OwlModule } from 'ngx-owl-carousel';
import { NftDetailsComponent } from './components/nft-details/nft-details.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioserviceService } from './components/portfolio/portfolioservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    HomepageComponent,
    FooterComponent,
    StoreComponent,
    NftComponent,
    GamesComponent,
    NftDetailsComponent,
    CookiesComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    HttpClientModule
  ],
  providers: [AuthGuard, PortfolioserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
