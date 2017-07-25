import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes;
  subscription: Subscription;

  constructor(private _httpService: HttpService) { 
    this.retrieveCurrentNotesData();
    this.subscription = _httpService.observedNotes.subscribe(
      (updatedNotes) => {this.notes = updatedNotes;},
      (err) => {},
      () => {}
    )
    this._httpService.retrieveNotes()
    .then(data => this.notes = data)
    .catch(console.log)
  }

  onDestroy(){
    this.subscription.unsubscribe();
  }

  retrieveCurrentNotesData(){
    this.notes = this._httpService.observedNotes.getValue();
  }

  ngOnInit() {
    this._httpService.retrieveNotes()
    .then(data => this.notes = data)
    .catch(console.log)
  }

}
