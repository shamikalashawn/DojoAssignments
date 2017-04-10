// Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,'Ulysses',42,false] to [4,4,'Ulysses', 'Ulysses',42,42,false,false].

var arr1 = [4,'Ulysses',42,false];

function doubleTrouble(arr) {
  var temp1;
  var temp2;
  for (var idx = 0; idx < arr.length; idx=idx+2) {
    temp1 = arr[idx];
    temp2 = arr[idx+1];
    arr[idx+1] = temp1;
    console.log('double', arr);
    for (var j = idx+2; j < arr.length; j++) {
      temp1 = arr[j];
      arr[j] = temp2;
      temp2 = temp1;
      console.log('move', arr);
    }
    if (temp2 == undefined) {
      console.log('end', arr);
      return arr;
      break;
    }
    arr[arr.length] = temp2;
    console.log('last add', arr);
  }
}

doubleTrouble(arr1)
