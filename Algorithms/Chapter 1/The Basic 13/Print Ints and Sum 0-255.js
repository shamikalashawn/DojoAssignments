// Print integers from 0 to 255, and with each integer print the sum so far.

var count = 0;
for (var i = 0; i < 256; i++) {
  count+= i;
  console.log('we are at integer ' + i + ' and the sum so far is ' + count);
}
