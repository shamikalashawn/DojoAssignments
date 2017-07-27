import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpService {

  observedPlayers = new BehaviorSubject(null);
  
  constructor(private _http: Http) { }
  
  updatePlayers(players: Array<any>){
    console.log('...updating players...');
    this.observedPlayers.next(players);
  }

  retrievePlayers(){
    return this._http.get('/players').map(data => data.json()).toPromise();
  }

  createPlayer(player){
    console.log('attempting to use createPlayer function with player: ', player);
    return this._http.post('/players', player).map(data => data.json()).toPromise();
  }

  deletePlayer(id){
    console.log('beginning process to delete player with id: ', id);
    return this._http.delete(`/players/${ id }`).map(data => data.json()).toPromise();
  }
}
