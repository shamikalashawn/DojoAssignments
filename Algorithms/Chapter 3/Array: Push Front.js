//Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

var anArray = [1,2,3,4]
function pushFront(arr, value) {
  var temp;
  var idx = arr.length - 1;
  for (idx; idx >= 0; idx--) {
    arr[idx+1] = arr[idx];
    // console.log(arr);
  }
  arr[0] = value;
  console.log(arr);
  return arr;
}

pushFront(anArray, 1)
