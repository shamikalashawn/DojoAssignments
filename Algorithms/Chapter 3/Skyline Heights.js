// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let's say you are given an array with heights of consecutive buildings, starting closest to you and extending away.  Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see.  In order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

var arr1 = [-1,1,1,7,3];
var arr2 = [0,4];
function skylineHeights(arr) {
  var temp1;
  var temp2;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]<1){
      for (var j = i; j < arr.length-1; j++) {
        arr[j] = arr[j+1];
        console.log('negative', arr);
      }
      arr.length--;
      console.log(arr);
    } else if (arr[i-1] >= arr[i]) {
      console.log('same', arr);
      for (var j = i; j < arr.length-1; j++) {
        arr[j] = arr[j+1];
        console.log('same', arr);
      }
      arr.length--;
      console.log(arr);
    }
  }
}

skylineHeights(arr2)
