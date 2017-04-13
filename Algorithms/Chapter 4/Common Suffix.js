// Lance is writing his opus: Epitome, an epic tome of beat poetry.  Always reaady for a good rhyme, he constantly seeks words that end with the same letters.  Write a function that, when given a word array, returns the largst suffix (word-end) common to all words in the array. For inputs ['deforestation', 'citation', 'conviction', 'incarceration'], return 'tion' (not all that creative a rhyming point). If it is ['nice', 'ice', 'baby'], return '', because that's just ... not.

var arr1 = ['deforestation', 'citation', 'conviction', 'incarceration'];
var arr2 = ['nice', 'ice', 'baby'];

function commonSuffix(arr) {
  var suffix = '';
  var counter = 0;
  var compare;
  for (var letter = arr[0].length-1; letter > 0; letter--) {
    for (var idx = 0; idx < arr.length; idx++) {
      if (idx == 0) {
        console.log('suffix before concat is ' + suffix);
        suffix = arr[idx][letter] + suffix;
        console.log('idx is ' + idx + ' suffix is ' + suffix);
      } else {
        compare = arr[idx].substring(arr[idx].length - 1 - counter, arr[idx].length)
        console.log('idx is ' + idx + ' substring to compare to ' + suffix + ' is ' + compare);
        if (suffix != compare) {
          suffix = suffix.substring(1,suffix.length)
          console.log('final suffix is ' + suffix);
          return suffix;
        }
      }
    }
    counter ++;
  }
}

commonSuffix(arr2)
