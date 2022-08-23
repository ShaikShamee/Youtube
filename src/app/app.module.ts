import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LibaryComponent } from './libary/libary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdversiteComponent } from './adversite/adversite.component';
import { ToggleComponent } from './toggle/toggle.component';
  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendingComponent,
    SubscriptionComponent,
    LibaryComponent,
    NavbarComponent,
    AdversiteComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
