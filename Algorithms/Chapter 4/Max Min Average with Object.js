// Given an array, return an object containing the array's max, min and average values.

function maxMinAverage(arr) {
  var stats = {};
  var max = -Infinity;
  var min = Infinity;
  var sum = 0;
  var average;

  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > max) {
      max = arr[idx];
    }
    if (arr[idx] < min) {
      min = arr[idx];
    }
    sum += arr[idx]
  }
  average = sum/arr.length;
  stats.max = max;
  stats.min = min;
  stats.average = average;

  console.log(stats);
  return stats;
}

maxMinAverage([1,2,3,4,5]);
