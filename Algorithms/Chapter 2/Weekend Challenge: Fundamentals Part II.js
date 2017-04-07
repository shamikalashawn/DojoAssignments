// This weekend, complete the "Date, on a Deserted Island" problem series, if you have not yet done so.  Then, if time allows, incorporate the Math library into a new quiz game. See if users can memorize 10 digits of Pi. Do the same for the constant e, the square root of 2, as well as the square root of 1/2. These values are all available within the Math library. What other Math functions or properties can you incorporate?  Continue to use prompt, and output the game statistics when the user quits.

function quizGame() {
    var userName = prompt("What's your name player?");
    var guesses = 0;
    var guessRight = 0;
    var start;
    if (userName === null) {
      alert("In that case, we'll quit while we're ahead.");
    } else {
    var gameChoice = prompt("Which game would you like to play " + userName + "?  Type 'p' for fun with Pi, 'e' for the constant e, '2' for the square root of 2, and 'half' for the square root of 1/2. Type 'q' to quit.");
    if (gameChoice === null || gameChoice.toLowerCase() == 'q') {
      alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
    }
    else {
    while (gameChoice.toLowerCase() != 'q' || gameChoice !== null) {
      if (gameChoice.toLowerCase() == 'q' || (gameChoice.toLowerCase() != 'p' && gameChoice.toLowerCase() != 'e' && gameChoice.toLowerCase() != '2' && gameChoice.toLowerCase() != 'half')) {
        alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
        break;
      }
    else if (gameChoice.toLowerCase() == 'p') { // pi game
      var pi = Math.PI.toFixed(10);
      start = prompt("Take a moment to memorize pi: " + pi + ".  Once you are ready to be tested, type 'ready'.");
      if (start === null) {
        alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
        break;
      }
      else if (start.toLowerCase() == 'ready') {
        var piGuess = prompt('Please type pi up to the 10th digit.');
        guesses ++;
        if (piGuess === null) {
          alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
          break;
        } else {
        while (piGuess != pi && piGuess !== null) {
          piGuess = prompt("That's not quite it.  Try again. Please type pi up to the 10th digit.");
          guesses ++;
        }
        if (piGuess == pi) {
          guessRight ++;
          alert('Good job! You are correct!');
          gameChoice = prompt("Which game would you like to play " + userName + "?  Type 'p' for fun with Pi, 'e' for the constant e, '2' for the square root of 2, and 'half' for the square root of 1/2. Type 'q' to quit.");
        } else if (piGuess === null) {
          alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
          break;
        }
      }
      }
    } else if (gameChoice.toLowerCase() == 'e') { // e game
      var e = Math.E.toFixed(10);
      start = prompt("Take a moment to memorize e: " + e + ".  Once you are ready to be tested, type 'ready'.");
      if (start === null) {
        alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
        break;
      } else if (start.toLowerCase() == 'ready') {
        var eGuess = prompt('Please type e up to the 10th digit.');
        guesses ++;
        if (eGuess === null) {
          alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
          break;
        } else{
        while (eGuess != e && eGuess !== null) {
          eGuess = prompt("That's not quite it.  Try again. Please type e up to the 10th digit.");
          guesses++;
        }
        if (eGuess == e) {
          guessRight ++;
          alert('Good job! You are correct!');
          gameChoice = prompt("Which game would you like to play " + userName + "?  Type 'p' for fun with Pi, 'e' for the constant e, '2' for the square root of 2, and 'half' for the square root of 1/2. Type 'q' to quit.");
        } else if (eGuess === null) {
          alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
          break;
        }
      }
    }
    } else if (gameChoice.toLowerCase() == '2') { // square root of 2 game
      var sqrtTwo = Math.sqrt(2).toFixed(10);
      start = prompt("Take a moment to memorize the square root of 2: " + sqrtTwo + ".  Once you are ready to be tested, type 'ready'.");
      if (start === null) {
        alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
        break;
      } else if (start.toLowerCase() == 'ready') {
        var twoGuess = prompt('Please type the square root of 2 up to the 10th digit.');
        guesses++;
        if (twoGuess === null) {
          alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
          break;
        } else {
          while (twoGuess != sqrtTwo && twoGuess !== null) {
          twoGuess = prompt("That's not quite it.  Try again. Please type the square root of 2 up to the 10th digit.");
          guesses++;
        }
        if (twoGuess == sqrtTwo) {
          guessRight ++;
          alert('Good job! You are correct!');
          gameChoice = prompt("Which game would you like to play " + userName + "?  Type 'p' for fun with Pi, 'e' for the constant e, '2' for the square root of 2, and 'half' for the square root of 1/2. Type 'q' to quit.");
        }  else if (twoGuess === null) {
          alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
          break;
        }
      }
    }
    } else if (gameChoice.toLowerCase() == 'half') { // square root of 1/2 game
      var sqrtHalf = Math.sqrt(1/2).toFixed(10);
      start = prompt("Take a moment to memorize the square root of 1/2: " + sqrtHalf + ".  Once you are ready to be tested, type 'ready'.");
      if (start === null) {
        alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
        break;
      } else if (start.toLowerCase() == 'ready') {
        var halfGuess = prompt('Please type the square root of 1/2 up to the 10th digit.');
        guesses++;
        if (halfGuess === null) {
          alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
          break;
        } else {
          while (halfGuess != sqrtHalf && halfGuess !== null) {
          halfGuess = prompt("That's not quite it.  Try again. Please type the square root of 1/2 up to the 10th digit.");
          guesses++;
        }
        if (halfGuess == sqrtHalf) {
          guessRight ++;
          alert('Good job! You are correct!');
          gameChoice = prompt("Which game would you like to play " + userName + "?  Type 'p' for fun with Pi, 'e' for the constant e, '2' for the square root of 2, and 'half' for the square root of 1/2. Type 'q' to quit.");
        } else if (halfGuess === null) {
          alert("In that case, we'll quit while we're ahead. You made " + guesses + " guesses and got " + guessRight + " right.");
          break;
        }
      }
    }
    }
  }
}
}
}

quizGame()
