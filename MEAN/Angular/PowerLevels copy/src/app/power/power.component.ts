import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power = {
    value: 0,
  }

  constructor() { }

  onSubmit(form){
  
  }

  ngOnInit() {
  }

}
