// Given an array, print the max, min and average values for that array.

function maxMinAverage(array) {
  var max, min, average, sum;
  max = -Infinity;
  min = Infinity;
  sum = average = 0;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  average = sum/array.length;
  console.log('Max: ' + max + ' Min: ' + min + ' Average: ' + average);
}

maxMinAverage([1,2,3,4,5])
