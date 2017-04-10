// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements.  Do not alter the original arrays. Ex: arrConcat(['a','b'],[1,2]) should return new array ['a','b',1,2].

var arr1 = ['a','b'];
var arr2 = [1,2];
function arrConcat(arr1, arr2) {
  var newArr = [];
  var pointer = 0;
  var len = arr1.length + arr2.length;

  for (var idx = 0; idx < arr1.length; idx++) {
      newArr[idx] = arr1[idx];
      console.log('arr1', newArr);
  }
  for (var idx = 0; idx < arr2.length; idx++) {
    newArr[arr1.length+idx] = arr2[idx];
    console.log('arr2', newArr);
  }
}

arrConcat(arr1, arr2)
