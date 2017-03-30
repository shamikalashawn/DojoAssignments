// Square each value in a given array, returning that same array with changed values.

function squareValues(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i],2);
  }
  return array;
}

console.log(squareValues([2,4,6]));
