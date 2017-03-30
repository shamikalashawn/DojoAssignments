// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function addSeven(array) {
  var newArr = [];
  for (var i = 1; i < array.length; i++) {
    newArr.push(array[i] + 7)
  }
  return newArr;
}

console.log(addSeven([1,2,3,4,5]));
