// Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of teh second. For arr1 = ['abc', 3, 'yo'] and arr2 = [42, 'wassup', true], return {'abc': 42, 3: 'wassup', 'yo': true}.

var arr1 = ['abc', 3, 'yo']
var arr2 = [42, 'wassup', true]

function zipArrayToMap(arr1, arr2) {
  var dictionary = {};
  for (var idx = 0; idx < arr1.length; idx++) {
    dictionary[arr1[idx]] = arr2[idx]
  }
  console.log(dictionary);
  return dictionary;
}

zipArrayToMap(arr1, arr2)
