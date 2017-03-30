// Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(array, y) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > y) {
      console.log(array[i]);
      count ++;
    }
  }
  console.log(count + ' values greater than y.');
}

greaterThanY([1,2,3,4,5], 1);
