/* This weekend, go online and find a long text file (such as http://www.classicreader.com/book/206/1, for example -- although any multi-page text would suffice). We want to do some analysis on this text! Find a way to get the text into your JavaScript code, and then determine the following:
  * How many letters (including spaces) are in the text? How many words? */

function letters(text) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var count = 0;
  for (var idx = 0; idx < text.length; idx++) {
    if (alphabet.includes(text[idx]) || text[idx] == ' ') {
      count++;
    }
  }
  console.log('There are ' + count + ' letters and spaces in the text provided.');
  return count;
}
var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

// letters(lorem);
// console.log(lorem.length);


function words(text) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var count = 0;
  for (var idx = 0; idx < text.length; idx++) {
    if (!alphabet.includes(text[idx]) && alphabet.includes(text[idx-1])) {
      count++;
    }
  }
  if (alphabet.includes(text[text.length-1])) {
    count++;
  }
  console.log('There are ' + count + ' words in the text provided.');
}

// words(lorem);

  /*
  * How many unique letters are in the text? Ignoring punctuation, how many unique words? */
function uniqueLetters(text) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var unique = [];
  var index = 0;
  for (var idx = 0; idx < text.length; idx++) {
    if (alphabet.includes(text[idx]) && !unique.includes(text[idx])) {
      unique[index] = text[idx];
      index++;
    }
  }
  console.log(unique);
  console.log(unique.length);
  return unique.length;
}
var test = "aabbccddeeffgghh"
// uniqueLetters(test)

function uniqueWords(text) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var unique = [];
  var index = 0;
  var pointer = 0;
  var word = '';
  for (var idx = 0; idx < text.length; idx++) {
    if (alphabet.includes(text[idx])) {
      pointer = idx;
      while (alphabet.includes(text[idx])) {
        idx++
      }
      word = text.substring(pointer, idx);
      if (!unique.includes(word)) {
        unique[index] = word;
        index++;
      }
      console.log(unique);
    }
  }
  console.log(unique.length);
  return unique.length;
}

// uniqueWords(lorem);

var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  /*  * What are the unique-letter and unique-word results if you ignore capitalization? */
var test = 'LOREM lorem '
uniqueLetters(test);
uniqueWords(test);
  /*  * List all the unique words in alphabetical order. Put them into an array in this order. */
  function uniqueWords2(text) {
    var temp1;
    var temp2;
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var unique = [];
    var index = 0;
    var pointer = 0;
    var word = '';
    for (var idx = 0; idx < text.length; idx++) {
      if (alphabet.includes(text[idx])) {
        pointer = idx;
        while (alphabet.includes(text[idx])) {
          idx++
        }
        word = text.substring(pointer, idx);
        if (!unique.includes(word)) {
          unique[index] = word;
          index++;
        }
        console.log(unique);
      }
    }
    // sort unique array alphabetically
    for (var idx = 0; idx < unique.length-1; idx++) {
      if (unique[idx][0].toLowerCase() != unique[idx+1][0].toLowerCase()) { //compare first letter of first word to first letter of second word
          if (alphabet.indexOf(unique[idx][0]) ) { //if they are not the same, figure out the higher index of the letter and put that word in second position

          }
      }
    }

    console.log(unique);
    return unique;
  }
var test = ['the', 'big', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
/*  * What are the ten most common words in this text? How frequently do each of them occur? */


/*  * Create an array of unique words and number of appearances, in ascending count order. What is your best choice of data structure here? */
