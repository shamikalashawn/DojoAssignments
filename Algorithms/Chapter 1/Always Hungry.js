// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

function hungry (array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == "food"){
      console.log('yummy');
    } else {
      console.log("I'm hungry");
    }
  }
}

hungry(['bob', 'food', 'sue', 'food', 'rob'])
