// Create a function that returns a boolean whether the string is a strit palindrome. For 'a x a' or 'racecar', return true. Do not ignore spaces, punctuation and capitalization: if given 'Dud' or 'oho!', return false.


function isPalindrome(str) {
  for (var idx = 0; idx < Math.floor(str.length)/2; idx++) {
    if(str[idx] != str[str.length-1-idx]){
      return false;
    }
  }
  return true;
}


// Second: now do ignore white space (spaces, tabs, returns), capitalization and punctuation.
function isPalindrome2(str) {
  var newStr = '';
  str = str.toLowerCase();
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (var letter = 0; letter < str.length; letter++) {
    if (alphabet.includes(str[letter])) {
      newStr += str[letter];
    }
  }

  for (var idx = 0; idx < Math.floor(newStr.length)/2; idx++) {
    if(newStr[idx] != newStr[newStr.length-1-idx]){
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

isPalindrome2('a x a');
