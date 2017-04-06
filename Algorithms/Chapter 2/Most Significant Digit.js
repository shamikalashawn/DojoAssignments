//If you already know who Ada Lovelace is, that's great! In a HIstory of Science, she is significant. Given number of any size, return the most significant digit. If you already know what strings are, that's great! However, don't use them here :-). Hint: use while to bring the most significant digit into range where you can use the friendly modulus operator (%). The most significant digit is the leftmost non-zero digit of a number.  Given 12345, return 1. Given 67.89, return 6. Given 0.00987, return 9.

function mostSignificantDigit(num) {
  if (num >= 1) {
    if (num < 10) {
      num = Math.trunc(num);
    } else {
      while (num >= 10) {
        num = num / 10;
      }
      num = Math.trunc(num);
    }
  } else {
    while (num <= 1) {
      num = num * 10;
    }
    num = Math.trunc(num);
  }
  return num;
}
console.log(mostSignificantDigit(0.00987));

//Second: handle negative num values as well, doing what you think is appropriate.

function mostSignificantDigit2(num) {
  num = num * -1;
  if (num >= 1) {
    if (num < 10) {
      num = Math.trunc(num);
    } else {
      while (num >= 10) {
        num = num / 10;
      }
      num = Math.trunc(num);
    }
  } else {
    while (num <= 1) {
      num = num * 10;
    }
    num = Math.trunc(num);
  }
  return num;
}

console.log(mostSignificantDigit2(-.00445));
