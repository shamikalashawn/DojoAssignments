import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    {body: 'I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me.', author: 'Ada Lovelace', vote: 25},
    {body: 'To be, or not to be', author: 'Prince Hamlet', vote: 2},
    {body: 'There are risks and costs to action. But they are far less than the long range risks of comfortable inaction.', author: 'John F. Kenndy', vote: 23}
  ];

  createQuote(quote) {
    console.log(quote);
    this.quotes.push(quote);
  }

  deleteQuote(quote){
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }
}
