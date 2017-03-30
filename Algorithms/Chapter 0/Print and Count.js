// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

var count = 0
for (var num = 512; num < 4097; num++) {
  if (num % 5 == 0) {
    console.log(num);
    count ++;
  }
}
console.log('There were ' + count + ' multiples of 5.');
