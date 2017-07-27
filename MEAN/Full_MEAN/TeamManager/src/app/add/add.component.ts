import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private _httpService: HttpService, private _router: Router) {
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
    console.log('submitted form.  attempting to create player: ', this.player);
    this._httpService.createPlayer(this.player)
    .then(data => {
      console.log("creating player with following data: ", data);
      this.players.push(data);
      this.updatePlayers();
      form.reset();
      this._router.navigate(["players/list"])
      .then(result => console.log("redirecting from add player form to list component" , result))
      .catch(err => console.log("attempt to redirect after submitting new player failed: ", err))
    })
    .catch(err => console.log("error while creating player: ", err))
  }
}
