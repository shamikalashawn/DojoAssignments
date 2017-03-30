/*
Given array, write a function that reverses values, in-place.

Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
*/

function reverseArray(array) {
  var mid = array.length/2;
  for (var i = 0; i < mid; i++) {
    var t = array[i]
    array[i] = array[array.length-i-1]
    array[array.length-i-1] = t;
  }
  return array;
}

console.log(reverseArray([1,2,3,4,5]));
