import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpService {

  observedPlayers = new BehaviorSubject(null);
  updatePlayers(players: Array<any>){
    this.observedPlayers.next(players);
  }
  constructor(private _http: Http) { }
  
  retrievePlayers(){
    return this._http.get('/players').map(data => data.json()).toPromise();
  }

  createPlayer(player){
    return this._http.post('/players', player).map(data => data.json()).toPromise();
  }
}
