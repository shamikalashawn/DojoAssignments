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

arr = [1,2,2,3,3,4,5,5,6,7,7];

// console.log(dedupe(arr));

// Second: solve this without using any nested loops.
function dedupe2(arr) { //works with doubles
  console.log(arr);
  var counter = 0;
  var len = arr.length;
  for (var i = 0; i < len-1; i++) {
    if (arr[i] == arr[i+1]) {
      counter ++;
      if (arr[i+1] != arr[i+2]) {
        arr[i+1] = arr[i+2];
      } else if (arr[i+1] != arr[i+3]) {
        arr[i+1] = arr[i+3];
        arr[i+2] = arr[i+3];
      } else {
        arr[i+1] = arr[i+4];
        arr[i+2] = arr[i+5];
      }
      console.log(arr);
    }
  }
  arr.length = arr.length - counter + 1;
  console.log(arr);
}
// dedupe2(arr);

arr = [1,2,2,3,3,3,4,5,5,6,7,7];
arr2 = [1,2,2,3,4,4,5,5,6,6,7];

function dedupe3(arr) { //works for any number of duplicates up to 5
  console.log(arr);
  var counter = 0;
  var len = arr.length;
  for (var i = 0; i < len-1; i++) {
    if (arr[i] == arr[i+1]) {
      if (arr[i+1] != arr[i+2]) {
        arr[i+1] = arr[i+2];
        console.log('double');
      } else if (arr[i+1] != arr[i+3]) {
        arr[i+1] = arr[i+3];
        arr[i+2] = arr[i+3];
        console.log('triple');
        counter++;
      }
      else if (arr[i+1] != arr[i+4]) {
        arr[i+1] = arr[i+4];
        arr[i+2] = arr[i+4];
        arr[i+3] = arr[i+4];
        counter++;
        console.log('quadruple');
      } else if (arr[i + 1] != arr[i + 5]){
        arr[i+1] = arr[i+5];
        arr[i+2] = arr[i+5];
        arr[i+3] = arr[i+5];
        arr[i+4] = arr[i+5];
        counter++
        console.log('quintuple');
      }
      console.log(arr);
      console.log(counter);
    }
  }
  arr.length = arr.length - counter;
  console.log(arr);
}
// dedupe3(arr);
// dedupe3(arr2);
arr = [1,2,2,3,3,3,4,5,5,6,7,7];
arr2 = [1,2,2,3,4,4,5,5,6,6,7];


function dedupe4(arr) {
  var pointer = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]!= arr[i+1]){
      arr[pointer] = arr[i];
      pointer ++;
      console.log(arr);
      console.log(pointer);
    }
  }
  arr.length = pointer;
  console.log(arr);
  return arr;
}

dedupe4(arr);
