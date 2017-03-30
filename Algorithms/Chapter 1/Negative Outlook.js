// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlook(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] <= 0){
      newArr.push(array[i]);
    } else {
      newArr.push(array[i] - array[i] - array[i])
    }
  }
  return newArr;
}

console.log(outlook([1,2,3,-4,5]));
