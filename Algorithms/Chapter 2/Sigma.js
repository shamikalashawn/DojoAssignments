/*
Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).

Example: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).
*/

function sigma(num) {
  var sum = 0;
  for (num; num > 0 ; num--) {
    if (num < 0) {
      return 0;
    } else {
      sum += num;
    }
  }
  return sum;
}

console.log(sigma(3));
