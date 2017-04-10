// Alan is good at breaking secret codes.  One method is to elimiate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

var arr = [1,2,3,4,5,6]

function filterRange(arr, min, max) {
  var pointer = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > min && arr[idx] < max) {
      arr[pointer] = arr[idx];
      pointer ++;
    }
  }
  arr.length = pointer;
  console.log(arr);
  return arr;
}

filterRange(arr, 2, 5)
