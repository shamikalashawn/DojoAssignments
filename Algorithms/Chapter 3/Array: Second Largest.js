// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.

var arr1 = [42,1,4,Math.PI,7]
function secondLargest(arr) {
  var max = -Infinity;
  var maxTwo = -Infinity;
  var idx = 0;
  if (arr.length < 2) {
    return null;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > max){
        max = arr[i];
        idx = i;
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (i != idx) {
      if (arr[i] > maxTwo) {
        maxTwo = arr[i];
        console.log(maxTwo);
      }
    }
  }
  console.log(maxTwo);
  return maxTwo;
}

secondLargest(arr1)
