import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { LearnComponent } from './learn/learn.component';
import { LocationsComponent } from './locations/locations.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    { path : '', component: LandingPageComponent },
    { path : 'explore', component: ExploreComponent },
    { path : 'locations', component: LocationsComponent},
    { path : 'learn' , component: LearnComponent },
    { path: '', pathMatch: 'full', redirectTo:'/'},
    { path: '**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
