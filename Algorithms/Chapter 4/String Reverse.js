//Implement reverseString(str) that, given string, returns that string with characters reversed. Given 'creature', return 'erutaerc'. Tempting as it seems, do not use the built-in reverse()!

function reverseString(str) {
  var newStr = '';

  for (var idx = str.length; idx >= 0; idx--) {
    newStr += str[idx];
  }
  return newStr;
}

function reverseString(str) {
  var newStr = '';

  for (var idx = 0; idx < str.length; idx++) { //string concatenation forward
    newStr += str[idx] + newStr;
  }
  return newStr;
}
