//Given a string array and value (length), remove any strings shorter than length from the array.

function removeShorterStrings(arr, len) { // not in place
  var newArray = [];
  for (var str = 0; str < arr.length; str++) {
    if (arr[str].length >= len) {
      newArray[newArray.length] = arr[str];
    }
  }
  return newArray
}

function removeShorterStrings(arr, len) { // in order and in place
  var pointer = 0;
  for (var str = 0; str < arr.length; str++) {
    if (arr[str].length >= len) {
      arr[pointer] = arr[str];
      pointer ++;
    }
  }
  arr.length = pointer;
  return arr
}

var array = ['I', 'Car', 'House', 'Doctor', 'Tardis']
console.log(removeShorterStrings(array, 5));
