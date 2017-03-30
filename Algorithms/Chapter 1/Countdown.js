// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zero’th element) down to 0 (as the last element). How long is this array?

function countDown(number) {
  var arr = []
  for (var i = 0; i < number + 1; i++) {
    arr[i] = number - i;
  }
  console.log('The length of the array you created is ' + arr.length);
  return arr
}

console.log(countDown(5));
