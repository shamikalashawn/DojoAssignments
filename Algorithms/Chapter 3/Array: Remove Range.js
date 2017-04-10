// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20, 30, 40, 50, 60, 70], 2, 4) change to [20,30,70] and return it.

var arr1 = [20, 30, 40, 50, 60, 70];
function removeRange(arr, start, end) {
  var temp1;
  var temp2;
  console.log(arr);
  for (var idx = start; idx <= end; idx++) {
    for (var j = start; j < arr.length-1; j++) {
      temp1 = arr[j];
      temp2 = arr[j+1];
      arr[j] = temp2;
      arr[j+1] = temp1;
      console.log('move', arr);
    }
    console.log('after move', arr);
  }
  arr.length = arr.length - (end - start) - 1;
  console.log(arr);
}

removeRange(arr1, 2, 4);
