// String.trim() - remove whitespace (spaces, tabs, newlines) from both sides, and return a new string. Example " \n hello goodbye \t  ".trim() should return "hello goodbye".

String.prototype.trim = function () {
  var newStr = "";
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  for (var idx = 0; idx < this.length; idx++) {
    if ((alphabet.includes(this[idx]) && this[idx-1] != '\\') || this[idx] == " " && alphabet.includes(this[idx-1]) && alphabet.includes(this[idx+1])) {
      newStr += this[idx]
      console.log(newStr);
    }
  }
  return newStr;
}

var string = " \n hello goodbye \t  ";
string = string.trim();
console.log(JSON.stringify(string));
