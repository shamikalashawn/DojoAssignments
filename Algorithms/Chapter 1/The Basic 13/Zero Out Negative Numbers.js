// Return the given array, after setting any negative values to zero.

function zeroOut(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 0;
    }
  }
  return array;
}

console.log(zeroOut([1,2,-3,4,-5]));
