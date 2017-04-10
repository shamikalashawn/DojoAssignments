// Return the element that is N-from-array's-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

var arr1 = [5,2,3,6,4,9,7]
function nthToLast(arr, nth) {
  if (arr.length < nth) {
    return null
  } else {
    return arr[arr.length-nth]
  }
}

console.log(nthToLast(arr1,3));
