// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.

function move(array) {
  var temp1, temp2;

  for (var i = 0; i < array.length-1; i++) {
    temp1 = array[i];
    temp2 = array[i+1];
    array[i] = temp2;
  }
  array.length--;
  array.push(0);
  return array;
}

console.log(move([1,2,3,4,5]));
