// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

function previous(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].length;
  }
  return array;
}

console.log(previous(['bob', 'susan', 'rick']));
