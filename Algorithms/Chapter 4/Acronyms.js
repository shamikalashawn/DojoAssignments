//Create a function that, given a string, returns the string's acronym (first letters only, capitalized). Given ' there's no free lunch - gotta pay yer way. ', return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronym(str) {
  newStr = "";
  if(str[0] != " "){
    newStr += str[0].toUpperCase();
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i-1] == " ") {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
