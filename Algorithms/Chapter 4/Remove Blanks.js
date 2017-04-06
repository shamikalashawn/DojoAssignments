//Create a function that, given a string, returns all of that string's contents, but without blanks.  If given the string " Pl    ayTha   tF   u   nkyM   usi    c   ", return "PlayThatFunkyMusic".


function removeBlanks(str) {
  var newStr = "";
  for (var idx = 0; idx < str.length; idx++) {
    if (str[idx] != ' ') {
      newStr += str[idx];
    }
  }
  return newStr;
}

console.log(removeBlanks(" Pl    ayTha   tF   u   nkyM   usi    c   "));
