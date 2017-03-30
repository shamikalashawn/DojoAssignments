/*
Based from earlier “Countdown By Fours”, given (lowNum, highNum, mult), print the numbers in multiples of mult from highNum down to lowNum, using a FOR loop.

Example: For (2,9,3), print 9 6 3 (on successive lines).
*/

function countDown(lowNum, highNum, mult){
  for (var num = highNum; num > lowNum; num -= mult) {
    console.log(num);
  }
}
countDown(0, 2016, 4)
