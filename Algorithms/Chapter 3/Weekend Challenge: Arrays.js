/* For this weekend challenge, consider the game Tic-Tac-Toe.  How would you represent a 3x3 game board: specifically whether each square is unoccupied or claimed by a player?  Could you represent this with an array?  What would the array contain?  Is there a benefit from having an array of arrays?

Once you have a good design in mind, create a function that, given one of these gameboards, automatically determines and returns the overall state of the game. A game is always in one of five different states - one state might be "Player 1's turn"; another might be "Game over: player 2 has won".
*/

function ticTacToe(gameboard) {
  var player1Turn = true;
  var player2Turn = false;
  var player1 = 0; //X's
  var player2 = 0; //O's
  var winner = '';
  var diagonal = 0;
  var turns = 0; // how many X's and O's on the board
  var total = 0; // how many elements in the gameboard

  //vertical winner
  for (var idx = 0; idx < gameboard[0].length; idx++) {
    for (var row = 0; row < gameboard.length; row++) {
      if(gameboard[row][idx] == 'X'){
        player1 ++;
        player1Turn = false;
        player2Turn = true;
        if (player1 == 3) {
          winner = 'player 1 (vertical)'
          break;
        }
      } else if (gameboard[row][idx] == 'O') {
        player2 ++;
        player2Turn = false;
        player1Turn = true;
        if (player2 == 3) {
          winner = 'player 2 (vertical)'
          break;
        }
      }
    }
    player1 = 0;
    player2 = 0;
  }
  if (!winner) {
  // horizontal winner
  for (var idx = 0; idx < gameboard.length; idx++) {
    for (var row = 0; row < gameboard[idx].length; row++) {
      total ++;
      if(gameboard[idx][row] == 'X'){
        player1 ++;
        player1Turn = false;
        player2Turn = true;
        turns ++;
        if (player1 == 3) {
          winner = 'player 1 (horizontal)'
          break;
        }
      } else if (gameboard[idx][row] == 'O') {
        player2 ++;
        player2Turn = false;
        player1Turn = true;
        turns ++;
        if (player2 == 3) {
          winner = 'player 2 (horizontal)'
          break;
        }
      }
    }
    player1 = 0;
    player2 = 0;
  }
}
  if(!winner){
    // diagonal winner
    for (var row = 0; row < gameboard.length; row++) {
      if (gameboard[row][diagonal] == 'X') {
        player1 ++;
        console.log('X', player1);
      } else if (gameboard[row][diagonal] == 'O') {
        player2 ++;
        console.log('O', player2);
      }
      diagonal ++;
    }
    if (player1 == 3) {
      winner = 'player 1 (diagonal)';
    } else if (player2 == 3) {
      winner = 'player 2 (diagonal)';
    } else {
      diagonal --;
      console.log('diagonal round two', diagonal);
      player1 = 0;
      player2 = 0;
      for (var row = 0; row < gameboard.length; row++) {
        if (gameboard[row][diagonal] == 'X') {
          player1 ++;
          console.log('X', player1);
        } else if (gameboard[row][diagonal] == 'O') {
          player2 ++;
          console.log('O', player2);
        }
        diagonal --;
      }
      if (player1 == 3) {
        winner = 'player 1 (diagonal)';
      } else if (player2 == 3) {
        winner = 'player 2 (diagonal)';
      }
    }
  }

    if (winner){
    return 'Game over: ' + winner + ' has won.';
  } else if (turns == total) {
    return 'Game over: no one won.'
  } else if (player1Turn) {
    return "Player 1's turn";
  } else if (player2Turn) {
    return "Player 2's turn"
  }

}

var gameboardTie = [
  ['X','O','X'],
  ['O','X','X'],
  ['X','O','O']
]
var gameboardVWin = [
  ['X','O','X'],
  ['X','X','O'],
  ['X','O','O']
]
var gameboardHWin = [
  ['X','X','X'],
  ['O','X','O'],
  ['X','O','O']
]
var gameboardDWin = [
  ['X','O','X'],
  ['O','X','O'],
  ['X','X','O']
]

// console.log(ticTacToe(gameboardDWin));


// Once you have mastered that, can you extend this function to handle gameboards of arbitrary size?
function ticTacToe2(gameboard) {
  var player1Turn = true;
  var player2Turn = false;
  var player1 = 0; //X's
  var player2 = 0; //O's
  var winner = '';
  var diagonal = 0;
  var vertical = gameboard.length; // # needed to win vertically
  var horizontal = gameboard[0].length; // # needed to win horizontally
  var turns = 0; // how many X's and O's on the board
  var total = 0; // how many elements in the gameboard

  //vertical winner
  for (var idx = 0; idx < horizontal; idx++) {
    for (var row = 0; row < vertical; row++) {
      if(gameboard[row][idx] == 'X'){
        player1 ++;
        player1Turn = false;
        player2Turn = true;
        if (player1 == vertical) {
          winner = 'player 1 (vertical)'
          break;
        }
      } else if (gameboard[row][idx] == 'O') {
        player2 ++;
        player2Turn = false;
        player1Turn = true;
        if (player2 == vertical) {
          winner = 'player 2 (vertical)'
          break;
        }
      }
    }
    player1 = 0;
    player2 = 0;
  }
  if (!winner) {
  // horizontal winner
  for (var idx = 0; idx < vertical; idx++) {
    for (var row = 0; row < horizontal; row++) {
      total ++;
      if(gameboard[idx][row] == 'X'){
        player1 ++;
        player1Turn = false;
        player2Turn = true;
        turns ++;
        if (player1 == horizontal) {
          winner = 'player 1 (horizontal)'
          break;
        }
      } else if (gameboard[idx][row] == 'O') {
        player2 ++;
        player2Turn = false;
        player1Turn = true;
        turns ++;
        if (player2 == horizontal) {
          winner = 'player 2 (horizontal)'
          break;
        }
      }
    }
    player1 = 0;
    player2 = 0;
  }
}
  if(!winner){
    // diagonal winner
    for (var row = 0; row < horizontal; row++) {
      if (gameboard[row][diagonal] == 'X') {
        player1 ++;
        console.log('X', player1);
      } else if (gameboard[row][diagonal] == 'O') {
        player2 ++;
        console.log('O', player2);
      }
      diagonal ++;
    }
    if (player1 == horizontal) {
      winner = 'player 1 (diagonal)';
    } else if (player2 == horizontal) {
      winner = 'player 2 (diagonal)';
    } else {
      diagonal --;
      console.log('diagonal round two', diagonal);
      player1 = 0;
      player2 = 0;
      for (var row = 0; row < vertical; row++) {
        if (gameboard[row][diagonal] == 'X') {
          player1 ++;
          console.log('X', player1);
        } else if (gameboard[row][diagonal] == 'O') {
          player2 ++;
          console.log('O', player2);
        }
        diagonal --;
      }
      if (player1 == horizontal) {
        winner = 'player 1 (diagonal)';
      } else if (player2 == horizontal) {
        winner = 'player 2 (diagonal)';
      }
    }
  }

    if (winner){
    return 'Game over: ' + winner + ' has won.';
  } else if (turns == total) {
    return 'Game over: no one won.'
  } else if (player1Turn) {
    return "Player 1's turn";
  } else if (player2Turn) {
    return "Player 2's turn"
  }

}
var gameboardTie = [
  ['X','O','X'],
  ['O','X','X'],
  ['X','O','O'],
  ['X','O','O']
]
var gameboardVWin = [
  ['X','O','X'],
  ['X','X','O'],
  ['X','O','O'],
  ['X','O','O']
]
var gameboardHWin = [
  ['X','X','X'],
  ['O','X','O'],
  ['X','O','O'],
  ['X','O','O']
]
var gameboardDWin = [
  ['X','O','X'],
  ['O','X','O'],
  ['X','X','O'],
  ['X','X','O']
]

console.log(ticTacToe2(gameboardDWin));
