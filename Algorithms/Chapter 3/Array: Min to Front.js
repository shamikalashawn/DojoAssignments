// Given an array of comparable values, move the lowest element to array's front, shifting backward any elements previously ahead of it. Do not otherwise change the array's order.  Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it.  As always, do this without using built-in functions.

var arr = [4,2,1,3,5]
function minToFront(arr) {
  var temp1;
  var temp2;
  var min = Infinity;
  var idx = 0;
  for (var i = arr.length - 1; i >=0; i--) {
    if (arr[i] < min) {
      min = arr[i];
      idx = i;
    }
  }
  for (var i = idx; i > 0; i--) {
    temp1 = arr[i];
    temp2 = arr[i-1];
    arr[i] = temp2;
    arr[i-1] = temp1;
    console.log(arr);
  }
  return arr;
}
minToFront(arr)
