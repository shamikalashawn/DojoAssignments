/*
Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:

If current count (not num) is evenly divisible by 3, don't add to sum; use continue to skip to the next value of count;
Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once;
Regardless of the above, if the current count is exactly 1/3 of num, return -1 immediately.
Example: if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.
*/

function messyMath(num) {
  var sum = 0;
  for (var i = 0; i < num + 1; i++) {
    if (i == ((1/3) * num)) {
      console.log('the i' + i + ' is a third of ' + num);
      return -1;
    } if ((i % 3 == 0) && (i != 0)) {
      console.log('i is ' + i + ' so skip!');
      continue;
    } else if ((i % 7 == 0) && (i != 0)) {
      console.log('i is ' + i + ' and is divisible by 7.');
      sum += i * 2;
    } else {
      sum += i;
      console.log('all is normal and the sum is ' + sum);
    }
  }
  return sum;
}

console.log(messyMath(15));
