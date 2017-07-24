import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  city = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.retrieveWeather("washington,dc")
    .then( data => this.city = data)
    .catch(console.log)
  }

}
