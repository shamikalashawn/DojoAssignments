/*
Stan learned something today: that reducing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.
*/

function lastFew(arr, number) {
  var reverseArr = arr.reverse();
  var i = arr.length - number;
  for (i; i > 0; i--) {
    reverseArr.length--;
  }
  arr = reverseArr.reverse();
  return arr;
}

console.log(lastFew([2,4,6,8,10],3));

// solved in-place

function lastFew2(arr, number) {
  var temp1;
  var temp2;
  var j = arr.length - number;
  for (var j; j > 0; j --) {
    for (var i = 0; i < arr.length-1; i++) {
      temp1 = arr[i];
      temp2 = arr[i+1];
      arr[i] = temp2;
    }
    arr.length--;
  }
  return arr;
}

console.log(lastFew2([2,4,6,8,10],3));
