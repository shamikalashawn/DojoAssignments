// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

function integerToRomanNumerals(num) {
  var romanNumeral = '';
  var remainder = num % 1000;
  var thousand = 0;
  var fiveHundred = 0;
  var fourHundred = 0;
  var hundred = 0;
  var ninety = 0;
  var fifty = 0;
  var forty = 0;
  var ten = 0;
  var nine = 0;
  var five = 0;
  var four = 0;
  var one = 0;
  thousand = (num - remainder)/1000;
  num = remainder;
  remainder = num % 500;
  fiveHundred = (num - remainder)/500;
  num = remainder;
  remainder = num % 400;
  fourHundred = (num - remainder)/400;
  num = remainder;
  remainder = num % 100;
  hundred = (num - remainder)/100;
  num = remainder;
  remainder = num % 90;
  ninety = (num - remainder)/90;
  num = remainder;
  remainder = num % 50;
  fifty = (num - remainder)/50;
  num = remainder;
  remainder = num % 40;
  forty = (num - remainder)/40;
  num = remainder;
  remainder = num % 10;
  ten = (num - remainder)/10;
  num = remainder;
  remainder = num % 9;
  nine = (num - remainder)/9;
  num = remainder;
  remainder = num % 5;
  five = (num - remainder)/5;
  num = remainder;
  remainder = num % 4;
  four = (num - remainder)/4;
  one = remainder;


  console.log('M'.repeat(thousand) + 'D'.repeat(fiveHundred) + 'CD'.repeat(fourHundred) + 'C'.repeat(hundred) + 'XC'.repeat(ninety) +  'L'.repeat(fifty) + 'XL'.repeat(forty) + 'X'.repeat(ten) + 'IX'.repeat(nine) + 'V'.repeat(five) + 'IV'.repeat(four) + 'I'.repeat(one));
}

integerToRomanNumerals(1492)
