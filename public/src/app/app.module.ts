import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExploreComponent } from './explore/explore.component';
import { LearnComponent } from './learn/learn.component';
import { LocationsComponent } from './locations/locations.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    LearnComponent,
    LocationsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, //used for animations
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
