//Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824, 0), return 4. Given (1824,7), return 0.
function extractDigit(num, digitNum) {
  num = num/Math.pow(10, digitNum);
  num = Math.floor(num);
  var result = num % 10;
  return result;
}

// console.log(extractDigit(1824,7));
//Second: handle negative digitNum values where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45, -1), return 4.

function extractDigit2(num, digitNum) {
  num = num/Math.pow(10, digitNum);
  num = Math.floor(num);
  var result = num % 10;
  return result;
}
// console.log(extractDigit2(123.45, -2));
//Third: handle negative num values as well, doing what you think is appropriate.

function extractDigit3(num, digitNum) {
  num = num * -1
  num = num/Math.pow(10, digitNum);
  num = Math.floor(num);
  var result = num % 10;
  return result;
}

console.log(extractDigit3(-321, 2));
