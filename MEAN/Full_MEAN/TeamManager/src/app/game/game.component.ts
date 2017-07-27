import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game;
  constructor(private _route: ActivatedRoute) {
    this._route.params.subscribe((param)=>{
      this.game = param.id;
    })
   }

  ngOnInit() {
  }

}
