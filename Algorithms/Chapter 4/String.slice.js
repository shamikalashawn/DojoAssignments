// String.slice(start,end) - extract part of a string and return in a new one. Start and end are indices into the string, with the first character at index 0. End param is optional and if present, refers to one beyond the last character to include.

String.prototype.slice = function (start, end) {
  end = end || this.length;
  var newStr = '';
  console.log(this);
  for (var idx = start; idx < end; idx++) {
    newStr += this[idx];
    console.log('extraction ' + newStr);
  }
  console.log(newStr);
  return newStr;
}

var string = 'Test';

// string = string.slice(1);

// console.log(string);

// Bonus: include support for negative indices, representing offsets from string-end. Example: string.slice(-1) returns the string's last character.

String.prototype.slice = function (start, end) {
  end = end || this.length;
  var newStr = '';
  if (start > 0) {
    for (var idx = start; idx < end; idx++) {
      newStr += this[idx];
      console.log('extraction ' + newStr);
    }
  } else {
    console.log('start is negative');
    for (var idx = this.length-1; idx > this.length-1+start  ; idx--) {
      newStr = this[idx] + newStr;
      console.log('negative extraction ' + newStr);
    }
  }
  console.log(newStr);
  return newStr;
}

string = string.slice(-2);
console.log(string);
