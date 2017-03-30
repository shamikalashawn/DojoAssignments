// Analyze an array’s values and print the average.
function arrayAverage(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum/array.length);
}

arrayAverage([1,2,3,4,5,6])
