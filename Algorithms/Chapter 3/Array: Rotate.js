// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.

var arr = [1,2,3,4,5,6];
function rotateArr(arr, shiftBy) {
  var temp2;
  for (var shift = 0; shift < shiftBy; shift++) {
    var temp1 = arr[1];
    for (var idx = 0; idx < arr.length; idx++) {
      if (idx == arr.length-1) {
        arr[0] = temp1;
        console.log(arr);
      } else if(idx == 0){
        arr[idx+1] = temp1;
        arr[idx+1] = arr[idx]
        console.log(arr);
      } else {
        temp2 = arr[idx+1];
        arr[idx+1] = temp1;
        temp1 = temp2;
        console.log(arr);
      }
    }
  }
}

rotateArr(arr, 2)
// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.
