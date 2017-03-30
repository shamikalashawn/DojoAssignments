// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlus(array) {
  if (typeof(array[0]) != 'number') {
    return "That's not a number!";
  } else{
    return array[0] + array.length;
  }
}

console.log(firstPlus(['bob',2,3,4,5]));
