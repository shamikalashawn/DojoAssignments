// Given array, swap first and last, third and third-tolast, etc. Input [true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swap (array) {
  var num = 0;
  var temp1;
  var temp2;

  for (num; num * 2 < array.length; num += 2){
    temp1 = array[num];
    temp2 = array[array.length-1-num];
    array[num] = temp2;
    array[array.length-1-num] = temp1;

  }
  return array;
}

console.log(swap([1,2,3,4,5,6]));
