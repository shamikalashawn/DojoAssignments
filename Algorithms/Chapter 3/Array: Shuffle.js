// In JavaScript, the Array object has numerous useful methods.  It does not, however, contain a method that will randomize the order of an array's elements. Let's create shuffle(arr), to efficiently shuffle a given array's values. Work in-place, naturally. Do you need to return anything from your function?

var arr1 = [1,2,3,4,5];
function shuffle(arr) {
  console.log(arr);
  var temp1;
  var temp2;
  var rIdx = Math.floor(Math.random()*(arr.length-1));
  console.log(rIdx);
  for (var idx = 0; idx < arr.length; idx++) {
    temp1 = arr[idx];
    temp2 = arr[rIdx];
    arr[idx] = temp2;
    arr[rIdx] = temp1;
    rIdx = Math.floor(Math.random()*(arr.length-1));
    console.log(arr);
    console.log(rIdx);
  }
  console.log(arr);
  return arr;
}

shuffle(arr1);
