import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  player = {
    name: "",
    position: "",
    status: "Undecided"
  }
  players;
  subscription: Subscription;

  constructor(private _httpService: HttpService) {
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

  onSubmit(form){
    this._httpService.createPlayer(this.player)
    .then(data => {
      this.players = data;
      this.updatePlayers();
      form.reset();
    })
    .catch(console.log)
  }
}
