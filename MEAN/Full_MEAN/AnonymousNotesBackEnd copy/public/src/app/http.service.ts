import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HttpService {
  observedNotes = new BehaviorSubject(null);
  updateNotes(notes: Array<any>){
    this.observedNotes.next(notes);
  }
  constructor(private _http: Http) { }
  retrieveNotes(){
    return this._http.get('/notes').map(data => data.json()).toPromise();
  }

  createNote(note){
    return this._http.post('/notes', note).map(data => data.json()).toPromise();
  }
}
