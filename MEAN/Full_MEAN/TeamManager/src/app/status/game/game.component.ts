import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game;
  subscription: Subscription;
  players = [];
  constructor(private _route: ActivatedRoute, private _httpService: HttpService) {
    this._route.params.subscribe((param)=>{
      this.game = param.id;
    })
    this.retrieveCurrentPlayersData();
    this.subscription = _httpService.observedPlayers.subscribe(
      (updatedPlayers) => {this.players = updatedPlayers;},
      (err) => {},
      () => {}
    )
    this._httpService.retrievePlayers()
    .then(data => this.players = data)
    .catch(console.log)
   }
  onDestroy(){
    this.subscription.unsubscribe();
  }

  retrieveCurrentPlayersData(){
    this.players = this._httpService.observedPlayers.getValue();
  }

  ngOnInit() {
  this._httpService.retrievePlayers()
  .then(data => this.players = data)
  .catch(console.log)
  }

  updatePlayers(){
    this._httpService.updatePlayers(this.players);
  }

  statusChange(player, status){
    player.status = status;
    
  }
}
