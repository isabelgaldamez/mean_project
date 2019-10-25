import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};
let headers = new HttpHeaders();
headers = headers.set( 'Access-Control-Allow-Origin','*');
@Injectable({
  providedIn: 'root'
})

export class HttpService {
  
  constructor(private _http : HttpClient) { }

  getCountryData(country){
    return this._http.get(`https://restcountries.eu/rest/v2/name/${country}`);
  }

  getLocationInformation(country, locationType:String){
    locationType = locationType.split(" ").join("%20"); // user input may have spaces so here is to split and join with %20
    return this._http.get(`/api/${locationType}/${country}`);
  }
}
