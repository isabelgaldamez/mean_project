import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  _searchCountry : String;
  _userSelection: '';
  _displayPlaces = false;
  _placesFound : any = [];
  _image : any = [];

  // Used for the form where displays options
  myControl = new FormControl();
  options: string[] = ['Beaches', 'Museums', 'Restaurants', 'Gym', 'Mall', 'Parks', 'Temples'];
  filteredOptions: Observable<string[]>;



  //on this page I need to call the service so that I can make api calls, ActivatedRoute to use for params which is passing 
  // parameters through the route 
  constructor(private _httpService : HttpService, private _route: ActivatedRoute, private _router: Router, private _http: HttpClient) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getCountryInfo(params.country);
    });
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
     
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  getCountryInfo(_country){
    this._searchCountry = _country;
    //This request is sent to the Angular server, which makes a request to express server. If i do not do the 
    //express server, it will give a CORS error, this is a way to bypass this error
    if(this._userSelection != undefined){
      const observable = this._httpService.getLocationInformation(this._searchCountry, this._userSelection);
      observable.subscribe(locationInfo => {
        this._displayPlaces = true;
        this._placesFound = locationInfo['results'];
        for(let photo of locationInfo['results']){
          //results is an array of dictionaries, I need to access the key in that dictionary which is 
        }
      })
    }
  }
}

