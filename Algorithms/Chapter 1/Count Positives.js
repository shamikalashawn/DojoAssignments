/*
Given array of numbers, create function to replace last value with number of positive values.

Example: countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
*/

function countPositives(array) {
  var positive = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0){
      positive ++
    }
  }
  array[array.length-1] = positive;
  return array
}

console.log(countPositives([-1,1,1,1]));
