import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  apiUrl:string = "http://api.openweathermap.org/data/2.5/weather?q=";
  apiKey:string = "&units=imperial&APPID=1293f1bdfcfe2157393973a031f2efbc";
  api:string;

  constructor(private _http: Http) { }
  retrieveWeather(city){
    this.api = this.apiUrl + city + this.apiKey;
    return this._http.get(this.api).map(data => data.json()).toPromise();
  }

}
