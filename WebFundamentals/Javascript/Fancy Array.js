function fancyArray(array, char, reversed=false){

  if (reversed === true) {
    var idx = array.length-1
    for (idx; idx > -1; idx--) {
      console.log(idx + char + array[idx])
    }
    console.log("reversed is true");
  }else{
    for (var i = 0; i < array.length; i++) {
    console.log(i + char + array[i])
    }
  }
}
var names = ["James", "Jill", "Jane", "Jack"]
fancyArray(names, " ->> ", false)
