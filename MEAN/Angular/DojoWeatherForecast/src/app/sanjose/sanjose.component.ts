import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  city = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.retrieveWeather("san jose")
    .then( data => this.city = data)
    .catch(console.log)
  }
}
