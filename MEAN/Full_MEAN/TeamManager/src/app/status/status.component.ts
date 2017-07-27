import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  game;
  constructor(private _route: ActivatedRoute) {
    this._route.params.subscribe((param)=>{
      this.game = param.id;
    })
  }
  
  ngOnInit() {
  }

}
