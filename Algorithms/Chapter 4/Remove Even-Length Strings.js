//Build a standalone function to remove strings of even lengths from a given array.  For array containing ['Nope!', "It's", 'Kris', 'starting', 'with', 'K!', '(instead', 'of', 'Chris', 'with', 'C)', '.'], change that same array to ['Nope!', "It's", "Chris", '.'].

function removeEven(arr) {
  var pointer = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx].length % 2 != 0) {
      arr[pointer] = arr[idx];
      pointer ++;
    }
  }
  arr.length = pointer;
  return arr;
}

arr = ['Nope!', "It's", 'Kris', 'starting', 'with', 'K!', '(instead', 'of', 'Chris', 'with', 'C)', '.']

console.log(removeEven(arr));
