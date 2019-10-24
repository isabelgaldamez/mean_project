import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) { }
  getCountryData(country){
    return this._http.get(`https://restcountries.eu/rest/v2/name/${country}`);
  }
}
