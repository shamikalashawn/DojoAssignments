$(document).ready(function () {
  var game = {
    players: [],
    addPlayer: function(player){
      this.players.push(player);
      return this;
    }
  };
  function playerConstructor(name){
    player = {
      name,
      hand: [],
      addCard: function(card){
        this.hand.push(card);
        return this;
      },
      card: function () {
        //generate a random number in the range of the player.hand array length
        var ranNum = Math.floor(Math.random()*(this.hand.length))
        //return a card in a random position of that array
        return this.hand[ranNum];
      }
    };
    return player;
  };
  function createCard() {
    var card = {};
    var ranNum = Math.floor(Math.random()*151+1)
    var url = "http://pokeapi.co/api/v2/pokemon/" + ranNum;
    var image = "http://pokeapi.co/media/img/" + ranNum + ".png";
    card.image = image;
    $.ajax({url: url, success: function (result) {
      card.name = result.name;
      card.attack = result.stats[4].base_stat;
      card.defense = result.stats[3].base_stat;
      card.hp = result.stats[5].base_stat;
    }
  });
  return card;
  };

  //game div
  var gamediv = document.getElementById('game');
  //player divs
  var p1div = document.getElementById('player1');
  var p2div = document.getElementById('player2');
  //add players to the game
  var player1 = playerConstructor('Ash');
  var player2 = playerConstructor('Misty');
  game.addPlayer(player1).addPlayer(player2);
  p1div.innerHTML += "<h1>Player 1: " + player1.name + "</h1>"
  p2div.innerHTML += "<h1>Player 2: " + player2.name + "</h1>"


  //buttons that create cards for specific players
  var p1add = document.getElementById('p1add');
  var p2add = document.getElementById('p2add');
  var p2card;
  var p1card;
  p1add.addEventListener('click', function () {
    p1card = createCard();
    setTimeout(function () {
      player1.addCard(p1card);
      //put img into player div
      p1div.innerHTML += "<img src='" + p1card.image + "' alt='player 1 pokemon'>";
      //put pokestats into player div
      p1div.innerHTML += "<h3>Name: " + p1card.name + "</h3><h3>Attack: " + p1card.attack + "</h3><h3>Defense: " + p1card.defense + "</h3><h3>Hp: " + p1card.hp + "</h3>"
    }, 2000);
    return p1card;
  });

  p2add.addEventListener('click', function () {
    p2card = createCard();
    setTimeout(function () {
      player2.addCard(p2card);
      //put img into player div
      p2div.innerHTML += "<img src='" + p2card.image + "' alt='player 2 pokemon'>";
      //put pokestats into player div
      p2div.innerHTML += "<h3>Name: " + p2card.name + "</h3><h3>Attack: " + p2card.attack + "</h3><h3>Defense: " + p2card.defense + "</h3><h3>Hp: " + p2card.hp + "</h3>"
    }, 2000);
    return p2card;
  });

  //play again button clears the cards from the player divs
  var again = document.getElementById('again');
  again.addEventListener('click', function () {
    p1div.innerHTML = "<h1>Player 1: " + player1.name + "</h1>"
    p2div.innerHTML = "<h1>Player 2: " + player2.name + "</h1>"
  })

  //fight buttons
  var p1fight = document.getElementById('p1fight');
  var p2fight = document.getElementById('p2fight');
  var p1attack;
  var p2attack;

  p1fight.addEventListener('click', function () {
    console.log('player 1 fights player 2');
    p2card = player2.hand[0]; //value needs to increase by one when play again button is clicked
    p1card = player1.hand[0];
    if (p2card.defense > p1card.attack) {
      p2card.defense = p2card.defense - p1card.attack;
    }
    if (p2card.defense < p1card.attack){
      p1attack = p1card.attack - p2card.defense;
      p2card.defense = 0;
      if (p2card.hp < p1attack) {
        p2card.hp = 0;
        gamediv.innerHTML = "<p>Player 1, " + player1.name + " wins!</p>"
        again.style.display = 'initial';
      }
      if (p2card.hp > p1attack){
        p2card.hp = p2card.hp - p1attack;
      }
    }

  });


  p2fight.addEventListener('click', function () {
    console.log('player 2 fights player 1');
    p2card = player2.hand[0];
    p1card = player1.hand[0];
    if (p1card.defense > p2card.attack) {
      p1card.defense = p1card.defense - p2card.attack;
    }
    if (p1card.defense < p2card.attack){
      p2attack = p2card.attack - p1card.defense;
      p1card.defense = 0;
      if (p1card.hp < p2attack) {
        p1card.hp = 0;
        gamediv.innerHTML = "<p>Player 2, " + player2.name + " wins!</p>"
        again.style.display = 'initial';
      }
      if (p1card.hp > p2attack){
        p1card.hp = p1card.hp - p2attack;
      }
    }
  });

});
