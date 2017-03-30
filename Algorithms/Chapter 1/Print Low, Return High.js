// Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

function lowHigh(array) {
  var high = -Infinity;
  var low = Infinity;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < low) {
      low = array[i];
    } else if (array[i] > high) {
      high = array[i];
    }
  }
  console.log('lowest number in array is ' + low);
  return high
}

console.log(lowHigh([1,2,3,4,5,6]));
