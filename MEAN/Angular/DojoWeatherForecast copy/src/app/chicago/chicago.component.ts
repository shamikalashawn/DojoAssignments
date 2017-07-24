import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.retrieveWeather("chicago")
    .then( data => this.city = data)
    .catch(console.log)
  }
}
