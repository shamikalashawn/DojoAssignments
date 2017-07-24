import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
city = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.retrieveWeather("seattle")
    .then( data => this.city = data)
    .catch(console.log)
  }
}
