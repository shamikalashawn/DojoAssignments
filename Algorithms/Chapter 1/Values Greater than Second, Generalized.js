/*
Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
*/

function value(array) {
  var count = 0;
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[1]) {
      newArr.push(array[i])
      count ++;
    }
  }
  console.log(count);
  return newArr
}

var arr = [1,3,5,7,9,13]

console.log(value(arr));
