// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t)0(k" return false, because the underlined ")" is premature: there is nothing open for it to close.

function validParens(str) {
  var counter = 0;
  for (var idx = 0; idx < str.length; idx++) {
    if (str[idx] == '(') {
      counter ++
    } else if (str[idx] == ')') {
      counter --
      if (counter<0) {
        return false;
      }
    }
  }
  if (counter) {
    return false;
  }
  return true;
}
