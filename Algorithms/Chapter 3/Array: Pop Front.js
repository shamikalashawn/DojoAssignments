// Given array, remove and return the value at the beginning of the array.  Do this without using any built-in array methods except pop().

var anArray = [1,2,3,4]
function popFront(array) {
  var front = array[0];
  for (var i = 0; i < array.length-1; i++) {
    array[i] = array[i+1]
    console.log(array);
  }
  array.length--;
  console.log(array);
  return front
}

console.log(popFront(anArray));
