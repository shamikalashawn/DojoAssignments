// Liam has 'N' number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.

var arr1 = [42,1,4,Math.PI,7]; // consider sorting list and returning arr[nth] element
function nthLargest(arr, nth) {
  var temp1;
  var temp2;
  console.log(arr);
  if (arr.length < nth) {
    return null
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i+1]) {
        temp1 = arr[i];
        temp2 = arr[i+1];
        arr[i] = temp2;
        arr[i+1] = temp1;
        console.log(arr);
      }
    }
  }
  console.log(arr[nth-1]);
  return arr[nth-1]
}

nthLargest(arr1, 3)
