// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array.  Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

var arr1 = [1,2];
var arr2 = [10,20,30,40];
function zipIt(arr1, arr2) {
  var newArr = [];
  var idx1 = 0;
  var idx2 = 0;
  var len = arr1.length + arr2.length;
  for (var idx = 0; idx < len; idx = idx + 2) {
    if ((idx1 < arr1.length) && (idx2 < arr2.length)) {
      newArr[idx] = arr1[idx1];
      newArr[idx+1] = arr2[idx2];
      idx1 ++;
      idx2 ++;
    } else if (idx1 < arr1.length) {
      newArr[idx] = arr1[idx1];
      idx1 ++;
      idx--;
    } else if (idx2 < arr2.length) {
      newArr[idx] = arr2[idx2];
      idx2 ++;
      idx--;
    }
  }
  console.log(newArr);
  return newArr;
}
zipIt(arr1,arr2);



// Second: combine the two array's values into the first array, instead of a new array. Much more fun!
