// Sept 16, 2014 headline: "Ancient Computer Found in Roman Shipwreck". Comprising 30 bronze gears, its wooden frame features 2000 characters. Given a string containing a Roman numeral representation of a positive integer, return the integer. Remember that III is 3, DCIX is 609 and MCDXCII is 1492.

function romanNumeralToIngeger(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'M'){
      sum += 1000;
      console.log('thousand');
    } else if (str[i] == 'C' && str[i+1] == 'M') {
      sum += 900;
      i++;
      console.log('nine hundred');
    } else if (str[i] == 'D') {
      sum += 500;
      console.log('five hundred');
    } else if (str[i] == 'C' && str[i+1] == 'D'){
      sum += 400;
      i++;
      console.log('four hundred');
    } else if (str[i] == 'C') {
      sum += 100;
      console.log('one hundred');
    } else if (str[i] == 'X' && str[i+1] == 'C') {
      sum += 90;
      i++;
      console.log('ninety');
    } else if (str[i] == 'L') {
      sum += 50;
      console.log('fifty');
    } else if (str[i] == 'X' && str[i+1] == 'L') {
      sum += 40;
      i++;
      console.log('forty');
    } else if (str[i] == 'X') {
      sum += 10;
      console.log('ten');
    } else if (str[i] == 'I' && str[i+1] == 'X') {
      sum += 9;
      i++;
      console.log('nine');
    } else if (str[i] == 'V'){
      sum += 5;
      console.log('five');
    } else if (str[i] == 'I' && str[i+1] == 'V') {
      sum += 4;
      i++;
      console.log('four');
    } else if (str[i] == 'I') {
      sum += 1;
      console.log('one');
    }
  }
  console.log('Roman Numeral ' + str + ": " + sum);
  return sum;
}

//III is 3, DCIX is 609 and MCDXCII is 1492
romanNumeralToIngeger('MCDXCII')
