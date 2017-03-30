// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evenOdd(array) {
  var evenCount = 0;
  var oddCount = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0){
      oddCount ++;
      if ((oddCount % 3 == 0) && oddCount != 0) {
        console.log("That's odd!");
      }
    }

    if (array[i] % 2 == 0){
      evenCount ++;
      if ((evenCount % 3 == 0) && evenCount != 0) {
        console.log("Even more so!");
      }
    }

  }
}

evenOdd([1,1,1,2,2,2,1,1,1])
