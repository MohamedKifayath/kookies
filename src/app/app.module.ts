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
    NftDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
