// Given a sequence of parentheses, braces, an brackets, determine whether it is valid. "W(a(t)s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(l)s[o(n]0{t} 0}k" => false.



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
  if (str[idx] == '(' || str[idx] == '{' || str[idx] == '['){
    check.push(str[idx])
  } else if ((str[idx] == ')' || str[idx] == '}' || str[idx] == ']')) {
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
