//Create a JavaScript function that given a string, returns the integer made from the string's digits.  Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str) {
  var newInt = "";
  var numbers = "0123456789"
  for (var idx = 0; idx < str.length; idx++) {
    for (var num = 0; num < numbers.length; num++) {
      if (str[idx] == numbers[num]) {
      newInt += str[idx];
      break;
      }
    }
  }
return Number(newInt);
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));
