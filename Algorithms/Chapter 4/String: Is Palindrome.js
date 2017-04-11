// Create a function that returns a boolean whether the string is a strit palindrome. For 'a x a' or 'racecar', return true. Do not ignore spaces, punctuation and capitalization: if given 'Dud' or 'oho!', return false.


function isPalindrome(str) {
  for (var idx = 0; idx < Math.floor(str.length); idx++) {
    if(str[idx] != str[str.length-1-idx]){
      return false;
    }
  }
  return true;
}


// Second: now do ignore white space (spaces, tabs, returns), capitalization and punctuation.
