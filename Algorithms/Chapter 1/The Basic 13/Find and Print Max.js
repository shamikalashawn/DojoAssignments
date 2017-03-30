// Given an array, find and print its largest element.

function printMax(array) {
  var max = -Infinity;
  for (var i = 0; i < array.length; i++) {
    if(array[i] > max){
      max = array[i];
    }
  }
  console.log('The max integer in array is ' + max);
}

printMax([1,2,3,4,5,6,7])
