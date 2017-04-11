// For this challenge, we will look not only at the entire string provided, but also at the substrings within it.  Return the longest palindromic substring. Given 'what up, daddy-o?', return 'dad'. Given 'uh... not much', return 'u'. Include spaces as well (i.e. be strict, as in previous challenge): given 'Yikes! my favorite racecar erupted!', return 'e racecar e'. Strings longer or shorter than complete words are OK.

function isPalindrome(str) {
  for (var idx = 0; idx < Math.floor(str.length); idx++) {
    if(str[idx] != str[str.length-1-idx]){
      return false;
    }
  }
  return true;
}

var str = 'what up, daddy-o?';
function longestPalindrome(str) {
  var compStr = "";
  var longest = '';
  for (var y = str.length; y > 0; y--) {
    for (var x = 0; x < y && (x-y) > longest.length; x++) {
      if (str[x] == str[y]) {
        compStr = str.substring(x,y);
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
