// Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

function double(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i]*2)
  }
  return newArr;
}

console.log(double([2,4,6,8]));
