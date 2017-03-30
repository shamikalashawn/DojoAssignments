// This weekend, for a challenge, create a fill-in-the-blank quiz game. Ask the user’s name, then refer to the user by name as you ask him/her a series of questions that you have stored in an array. Use the prompt() function to get each input from the user and compare it to the answer you expected. When the user enters “Q” (for quit), or perhaps when the user hits [Cancel], exit the game and print the statistics of the game to the console: user name, the number of questions answered and questions correct.

function gameShow() {
  var userName = prompt("What's your name user?");
  var questionsAsked = 0;
  var questionsRight = 0;
  var questions = [
    'What month is the first of the year?', 'January',
    'How many little pigs were there in the story?', 3,
    'What planet are we currently on?', 'Earth'
  ]
  for (var i = 0; i < questions.length; i+=2) {
    var guess = prompt(userName + ", " + questions[i])
    questionsAsked ++;
    if ((guess == null) || (guess.toLowerCase() == 'q') || (guess.toLowerCase() == 'quit')) {
      console.log('Alright, we will quit the game.');
      break;
    } else if (guess.toString().toLowerCase() == questions[i+1].toString().toLowerCase()) {
      console.log("That's right!");
      questionsRight ++;
    } else {
      console.log("Sorry, that's not correct.  The right answer is " + questions[i+1]);
    }
  }
  if (questionsAsked > 1) {
    console.log('Well ' + userName + ' you were asked ' + questionsAsked + ' questions and got ' + questionsRight + ' right!');
  } else if (questionsAsked == 1) {
    console.log('Well ' + userName + ' you were asked ' + questionsAsked + ' question and got ' + questionsRight + ' right!');

  }
}

gameShow();
