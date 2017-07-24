import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quotes;
  @Output() createQuoteEvent = new EventEmitter();

  quote = {
    body: "",
    author: "",
    vote: 0
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData){
    console.log(formData);
    console.log(this.quote);
    this.createQuoteEvent.emit(this.quote);
    this.quote = {
      body: "",
      author: "",
      vote: 0
    };
  }
}
