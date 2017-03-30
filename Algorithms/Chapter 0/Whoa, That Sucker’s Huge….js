// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

var total = 0;
for (var num = -300000; num < 300001; num++) {
  total += num
}
console.log(total);

//shortcut is the total equals 0
