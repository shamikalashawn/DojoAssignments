import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = new Quote();
  quotes = [];

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(form){
    this.quotes.push(this.quote);
    this.quote = new Quote();
    form.reset();
  }
}
