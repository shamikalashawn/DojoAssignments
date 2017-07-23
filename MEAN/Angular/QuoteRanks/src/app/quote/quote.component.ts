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
    quote: "",
    author: "",
    vote: 0
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    this.quotes.push(this.quote);
    console.log('quotes: before', this.quotes)
    this.quote = {
    quote: "",
    author: "",
    vote: 0
  };
    console.log('quotes: after', this.quotes)
    form.reset();
  }
}
