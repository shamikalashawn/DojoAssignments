// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives' order. As always, do not use built-in array functions.

var arr1 = [1,2,-3,4,-5,6]
function removeNegatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]<1){
      for (var j = i; j < arr.length-1; j++) {
        arr[j] = arr[j+1];
        console.log('negative', arr);
      }
      arr.length--;
      console.log(arr);
    }
  }
}

// removeNegatives(arr1)

// Second don't use nested loops
function removeNegatives2(arr) {
  var pointer = 0
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] >= 0){
      arr[pointer] = arr[i];
      pointer ++;
      console.log(arr);
      console.log(pointer);
    }
  }
  arr.length = pointer;
  console.log(arr);
  return arr;
}

removeNegatives2(arr1)
