// Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.

function another(array) {
  console.log(array[array.length-2]);
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0){
      return array[i];
    }
  }
}

console.log(another([2,5,2,3,4]));
