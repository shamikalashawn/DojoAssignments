// Swap positions of successive pairs of values of given aray. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendon", true, 42] to [true, "Brendon", 42]. As with all array challenges, do this without using any built-in array methods.

var aArray = [1,2,3,4];
var bArray = ["Brendon", true, 42, 43, 44];
function swapPairs(arr) {
  var temp;
  var temp2;
  if (arr.length % 2 == 0) {
    for (var i = 0; i < arr.length; i = i + 2) {
      temp = arr[i];
      temp2 = arr[i+1];
      arr[i] = temp2;
      arr[i+1] = temp;
      console.log(arr);
    }
  } else {
    for (var i = 0; i < arr.length-1; i = i + 2) {
      temp = arr[i];
      temp2 = arr[i+1];
      arr[i] = temp2;
      arr[i+1] = temp;
      console.log(arr);
    }
  }
  console.log(arr);
  return arr;
}
swapPairs(aArray)
