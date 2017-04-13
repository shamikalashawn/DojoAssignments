// String.concat(str2,str3,...strX) - add string(s) to end of existing one. Return new string.

function concat() {
  var newStr = '';
  for (var idx = 0; idx < arguments.length; idx++) {
    newStr += arguments[idx];
  }
  console.log(newStr);
  return newStr;
}

var string = 'Test';

string = string.concat('1', '2', '3');
console.log(string);
