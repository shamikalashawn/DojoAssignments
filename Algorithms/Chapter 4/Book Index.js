// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of a cappella fugues.  Some of 'those fugueing challenges' are less popular than others, so he needs an index. Given a sorted array of pages where a term appears, produce an index string. Consecutive pages should form ranges separated by a hyphen. For [1,13,14,15,37,38,70], return string "1, 13-15, 37-38, 70". Take care to get all the commas and spaces correct: Martin is palpably particular (practically persnickety!) about patchy punctuation.
var arr1 = [-27, 1,2,3,4,6,7,8,16,18,21,22,27]

function bookIndex(arr) {
  var returnStr = '';
  var start;
  var end;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] + 1 == arr[idx + 1]) {
      if (!start) {
        start = arr[idx];
      }
      end = arr[idx + 1];
    } else{
      if (!start) {
        returnStr += arr[idx] + ','
      } else{
        returnStr += start + '-' + end + ','
        start = null
      }
    }
  }
  returnStr = returnStr.substring(0, reeturnStr.length-1);
  return returnStr;
}
