import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
  note = {
    message: "",
    author: ""
  }
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

  updateNotes(){
    this._httpService.updateNotes(this.notes);
  }

  onSubmit(form){
    this._httpService.createNote(this.note)
    .then(data => {
      this.notes = data;
      this.updateNotes();
    })
    .catch(err => console.log('error: ', err))
    form.reset();
  }

}
