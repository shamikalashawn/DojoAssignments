/*
Deck class constructs a deck with 52 cards and could shuffle, reset, and deal.
*/
class Deck {
  constructor() {
    /*
    properties
    */
    this.cards = [];
  }
}
Deck.prototype.shuffle = function () {
  var ranidx;
  var temp;
  for (var i = 0; i < 52; i++) {
    ranidx = Math.floor(Math.random()*52+1);
    if (randidx != i) {
      temp = this.cards[ranidx];
      this.cards[ranidx] = this.cards[i];
      this.cards[i] = temp;
    }
    else {
      i--;
    }
  }
  return this;
}

Deck.prototype.reset = function () {
  this.createCards().shuffle();

}

Deck.prototype.deal = function () {
  var ranidx = Math.floor(Math.random()*52 +1);
  //remove card from Deck
  var card = this.cards.splice(ranidx, 1);
  return card[0];
}

Deck.prototype.createCards = function () {
  this.cards = [];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  var values = [2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King', 'Ace'];
  var card;
  for (var i = 0; i < suits.length; i++) {
    card = {};
    for (var j = 0; j < values.length; j++) {
      card['suit'] = card[suits[i]];
      card['value'] = values[j];
      this.cards.push(card);
      card = {};
    }
  }
  return this;
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.take = function =(deck) {
      this.hand.push(deck.deal());
      return this;
    }
    this.discard = function () {
      this.hand.pop()
    }
  }
}

var newDeck = new Deck();
console.log(newDeck.cards);
newDeck.createCards();
console.log(newDeck.cards);
