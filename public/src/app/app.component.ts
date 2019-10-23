import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { animate } from  '@angular/animations'; //used for angular animations
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
  ]
})
export class AppComponent {
  title = 'public';
  constructor (private _httpService : HttpService){}

}
