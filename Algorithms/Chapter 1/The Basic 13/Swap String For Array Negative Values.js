// Given an array of numbers, replace any negative values with the string 'Dojo'.

function swap(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 'Dojo'
    }
  }
  return array;
}

console.log(swap([1,2,-3,4,-5]));
