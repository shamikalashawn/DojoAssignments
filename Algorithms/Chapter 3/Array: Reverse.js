//Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array - move values within the array that you are given. As always, do not use built-in array functions such as splice().

var arr = [1,2,3,4,5]
function reverseArray(arr) {
  console.log(arr);
  var temp1;
  var temp2;
  for (var i = 0; i < arr.length/2; i++) {
    temp1 = arr[i];
    temp2 = arr[arr.length-1-i];
    arr[i] = temp2;
    arr[arr.length-1-i] = temp1;
    console.log(arr);
  }
}
reverseArray(arr);
