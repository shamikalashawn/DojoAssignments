// Given a sequence of parentheses, braces, an brackets, determine whether it is valid.



function validParens(str) {
  // var bracketCounter = 0;
  // var parenCounter = 0;
  // var bracesCounter = 0;
  // for (var idx = 0; idx < str.length; idx++) {
  //   if (str[idx] == '(') {
  //     parenCounter ++;
  //   } else if (str[idx] == '[') {
  //     bracketCounter ++;
  //   } else if (str[idx] == '{') {
  //     bracesCounter ++;
  //   } else if (str[idx] == ')') {
  //     parenCounter --;
  //   } else if (str[idx] == ']') {
  //     bracketCounter --;
  //   } else if (str[idx] == '}') {
  //     bracesCounter --;
  //   }
  //   if (parenCounter < 0 || bracketCounter < 0 || bracesCounter < 0) {
  //     return false;
  //   }
  // }
  // if (parenCounter || bracesCounter || bracketCounter) {
  //   return false;
  // }
  // return true;
var check = [];
for (var idx = 0; idx < str.length; idx++) {
  if (str[i] == '(' || str[i] == '{' || str[i] == '['){
    check.push(str[idx])
  } else if ((str[i] == ')' || str[i] == '}' || str[i] == ']')) {
    if ((str[idx] == ')') && check[check.length-1] == '(') ||
    ((str[idx] == ']') && check[check.length-1] == '[') ||
    ((str[idx] == '}') && check[check.length-1] == '{}'){
      check.pop()
    } else {
      return false;
    }
  }

}
if (check.length) {
  return false;
}
return true;
}
