import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibaryComponent } from './libary/libary.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
                          { path: 'home', component:HomeComponent},
                          {path:'trend' ,component:TrendingComponent} ,
                          {path:'subscription',component:SubscriptionComponent},
                          {path:'libary',component:LibaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
