// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values.  If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums.  Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].

var arr1 = [1,2,1,2,1,2,1,2,1,2,1,2,1,2];
function intermediateSum(arr) {
  var count = 1;
  var sum = 0;
  var temp1;
  var temp2;
  var len = Math.ceil(arr.length/10)
  for (var idx = 0; idx < arr.length; idx++) {
    sum += arr[idx];
    if (count % 10 == 0) {
      temp1 = arr[idx+1];
      arr[idx+1] = sum;
      sum = 0;
      for (var j = idx + 2; j < arr.length; j++) {
        temp2 = arr[j];
        arr[j] = temp1;
        temp1 = temp2;
      }
      idx ++;
      arr[arr.length] = temp1;
    }
    count ++;
  }
  arr[arr.length] = sum;
  console.log(arr);
}

intermediateSum(arr1);
