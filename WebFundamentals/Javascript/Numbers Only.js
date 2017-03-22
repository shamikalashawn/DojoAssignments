function numbersOnly(array){
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      newArray.push(array[i])
    }
  }
  return newArray;
}

function removeNumbers(array){
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      array.splice(i, 1)
    }
  }
  return array;
}
var array = [1, "apple", -3, "orange", 0.5]
console.log(removeNumbers(array));
console.log(numbersOnly(array))
