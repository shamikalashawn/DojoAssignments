// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for (var num = 1; num < 101; num++){
  if (num % 10 == 0) {
    console.log('Coding Dojo');
  } else if (num % 5 == 0) {
    console.log('Coding');
  } else {
    console.log(num);
  }
}
