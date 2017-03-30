// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for (var num = -300; num < 1 ;num++){
  if ((num == -3) || (num == -6)){
    continue;
  }else if (num % 3 == 0){
    console.log(num);
  }

}
