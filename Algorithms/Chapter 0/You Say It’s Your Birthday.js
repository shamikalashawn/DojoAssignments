/* If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day....",

Example: given yourBirthday(4,19) or yourBirthday(19,4) */

function birthday(num1, num2){
  if ((num1 == 08 && num2 == 26) || (num2 == 08 && num1 ==26)){
    console.log('How did you know?');
  } else{
    console.log('Just another day...');
  }
}

birthday(2,3)
