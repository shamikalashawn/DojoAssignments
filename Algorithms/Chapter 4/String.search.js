// String.search(val) - search string for the given val (another string). Return the index position of the first match found (or -1 if not found).

String.prototype.search = function (val) {
  var index = 0;
  var test = '';
  for (var idx = 0; idx < this.length; idx++) {
    test = this.substring(idx, idx+val.length);
    if (test == val) {
      console.log('test is ' + test + ' idx is ' + idx);
      return idx;
    }
  }
  return -1;
}

var string2 = "The big brown fox jumps over the lazy dog";
console.log(string2.search('fox'));
