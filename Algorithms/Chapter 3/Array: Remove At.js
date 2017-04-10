// Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop (). Think of popFront(arr) as equivalent to removeAt(arr,0).

var anArray = [1,1,2,3,4]
function removeAt(arr,idx) {
  console.log(arr);
  var remove = arr[idx]
  for (var i = idx; i < arr.length-1; i++) {
    arr[i] = arr[i+1];
    console.log(arr);
  }
  arr.length--;
  console.log(arr);
  return remove;
}

removeAt(anArray, 1)
