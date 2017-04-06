/*
Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
*/

function dedupe(array) {
  var counter = 0;
  for (var i = 1; i < array.length; i++) {
    while ((array[i] === array[i-1]) && (array[i] !== undefined)) {
      counter ++;
      for (var j = i; j < array.length; j++) {
        array[j] = array[j + 1];
      }
    }
  }
  array.length -= counter;
  return array;
}

arr = [1,2,2,3,3,3,4,5,5,6,7,7];

console.log(dedupe(arr));

// Second: solve this without using any nested loops.
function dedupe(arr) {
  
}
