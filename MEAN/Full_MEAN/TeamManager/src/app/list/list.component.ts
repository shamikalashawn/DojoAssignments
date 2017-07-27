import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HttpService } from '../http.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players = [];
  subscription: Subscription;

  constructor(private _httpService: HttpService) {
    this.subscription = _httpService.observedPlayers.subscribe(
      (updatedPlayers) => {this.players = updatedPlayers;},
      (err) => {},
      () => {}
    )
    console.log('...in constructor...')
    this._httpService.updatePlayers(this.players);
   }

  onDestroy(){
    this.subscription.unsubscribe();
  }

  retrieveCurrentPlayersData(){
    console.log('...retrieving current players data...');
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

  deletePlayer(player){
    console.log('the player attempting to be deleted is: ', player);
    this._httpService.deletePlayer(player._id)
    .then(deletedPlayer => {
      console.log('player successfully deleted: ', deletedPlayer);
      this.players.splice(this.players.indexOf(player), 1);
      this.updatePlayers();
      this.retrieveCurrentPlayersData();
    })
    .catch(err => console.log('error deleting player from list component ts file: ', err))
  }
}
