// For this challenge, we will look not only at the entire string provided, but also at the substrings within it.  Return the longest palindromic substring. Given 'what up, daddy-o?', return 'dad'. Given 'uh... not much', return 'u'. Include spaces as well (i.e. be strict, as in previous challenge): given 'Yikes! my favorite racecar erupted!', return 'e racecar e'. Strings longer or shorter than complete words are OK.

function isPalindrome(str) {
  for (var idx = 0; idx < Math.floor(str.length); idx++) {
    if(str[idx] != str[str.length-1-idx]){
      return false;
    }
  }
  return true;
}

var str = 'what up, dady-o?';
function longestPalindrome(str) {
  var compStr = "";
  var longest = '';
  for (var y = str.length-1; y > 0; y--) {
    for (var x = 0; (x < y) && ((y-x) > longest.length); x++) {
      if (str[x] == str[y]) {
        console.log('str[x] is ' + str[x] + ' str[y] is ' + str[y]);
        compStr = str.substring(x,y+1);
        console.log('compStr is ' + compStr);
        if (isPalindrome(compStr) && compStr.length > longest.length) {
          longest = compStr;
        }
      }
    }
  }
  console.log(longest);
  return longest;
}

longestPalindrome(str)

// Second: re-solve the above problem, but ignore spaces, tabs, returns, capitalization and punctuation. Given 'Hot puree eruption!', return 'tpureeerupt'.
function longestPalindrome2(str) {
  var compStr = "";
  var longest = '';
  var newStr = '';
  str = str.toLowerCase();
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (var letter = 0; letter < str.length; letter++) {
    if (alphabet.includes(str[letter])) {
      newStr += str[letter];
    }
  }
  console.log('newStr is ' + newStr);
  for (var y = newStr.length-1; y > 0; y--) {
    for (var x = 0; x < y && (y-x) > longest.length; x++) {
      if (newStr[x] == newStr[y]) {
        compStr = newStr.substring(x,y+1);
        console.log('newStr[x] is ' + newStr[x] + ' newStr[y] is ' + newStr[y] + ' compStr is ' + compStr);
        if (isPalindrome(compStr) && compStr.length > longest.length) {
          longest = compStr;
        }
      }
    }
  }
  console.log('longest is ' + longest);
  return longest;
}
// longestPalindrome2('Hot puree eruption!')
