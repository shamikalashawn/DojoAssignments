// String.split(separator, limit) - split string into an array of substrings, returning array. Separator specifies where to divide substrings and is not included in any substring. If "" is specified, split the string on every character. Limit is optional and indicates number of splits; additional post-limit items should be discarded. Note: existing string is unaffected.

String.prototype.split = function (separator, limit) {
  var total = 0; // number of items split
  var substrings = [];
  var pointer = 0;
  var index = 0; //index of array at each substring addition
  var add = ''; // substring to be added to array
  if (separator == "") {
    for (var idx = 0; idx < this.length; idx++) {
      substrings[idx] = this[idx];
      console.log(substrings);
      total ++;
    }
  } else if (!separator) {
    console.log(this + "");
    return this;
  } else {
    for (var idx = 0; idx < this.length; idx++) {
      if (this[idx] == separator) {
        add = this.substring(pointer, idx);
        substrings[index] = add;
        console.log(substrings);
        index++;
        pointer = idx+1;
        total ++;
      }
    }
    substrings[index] = this.substring(pointer, this.length);
    total++;
    console.log('adding last element ' + substrings);
  }
  limit = limit || total; // number of items to put in array
  substrings.length = limit;
  console.log(substrings);
}

var string1 = 'Test'
// string1.split("")

var string2 = "The big brown fox jumps over the lazy dog"
string2.split();
