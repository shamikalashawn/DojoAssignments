//Your function should accept an array. If the value at [0] is greater than array’s length, print "Too big!"; if the value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function value(array) {
  if (array[0] > array.length) {
    console.log('Too big!');
  } else if (array[0] < array.length){
    console.log('Too small!');
  } else{
    console.log('Just right!');
  }
}

value([5,2,3,4,5])
