import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.retrieveWeather("burbank")
    .then( data => this.city = data)
    .catch(console.log)
  }
}
