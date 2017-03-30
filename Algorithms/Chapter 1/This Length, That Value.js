// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function returnArray(num1, num2) {
  var newArr = [];
  for (var i = 0; i < num1; i++) {
    if (num1 == num2) {
      return ('Jinx!');
    } else{
      newArr.push(num2)
    }
  }
  return newArr
}

console.log(returnArray(4,4));
