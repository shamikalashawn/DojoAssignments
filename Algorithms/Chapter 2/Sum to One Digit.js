/*
Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer's digits repeatedly until the sum is only one digit. Return that one-digit result.

Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.
*/

function sumToOne(num) {
  var hundreds, tens, ones, sum, rem;

  function summation(value) {
    if (value >= 100) {
      hundreds = Math.floor(value/100);
      rem = value % 100;
      tens = Math.floor(rem/10);
      rem = value % 10;
      ones = rem;
    } else if (value >= 10) {
      tens = Math.floor(value/10);
      rem = value % 10;
      ones = rem;
      hundreds = 0;
    } else {
      ones = value;
      hundreds = 0;
      tens = 0;
    }
    sum = hundreds + tens + ones;
    console.log('hundreds: ' + hundreds + '\n' + 'tens: ' + tens + '\n' + 'ones: ' + ones + '\n' + 'sum: ' + sum);
    return sum
  }

  sum = summation(num);
  while (sum >= 10) {
    sum = summation(sum)
  }
  return sum;
}

console.log(sumToOne(333));
