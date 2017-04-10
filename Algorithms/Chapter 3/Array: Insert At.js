//Given array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

var anArray = [1,3,4]
function insertAt(arr,idx,val) {
  for (var i = arr.length-1; i >= idx; i--) {
    arr[i+1] = arr[i];
    console.log(arr);
  }
  arr[idx] = val;
  console.log(arr);
  return arr;
}

insertAt(anArray, 1, 2)
