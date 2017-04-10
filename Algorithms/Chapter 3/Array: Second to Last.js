// Return the second-to-last element of an array. Given [42, true, 4, 'Kate', 7], return 'Kate'. If array is too short, return null.

var arr1 = [42, true, 4, 'Kate', 7]
function secondToLast(arr) {
  if (arr.length < 2) {
    return null
  } else {
    return arr[arr.length-2]
  }
}

console.log(secondToLast(arr1));
