//

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
