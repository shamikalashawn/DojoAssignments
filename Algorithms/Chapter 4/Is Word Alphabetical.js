// Nikki, a queen of gentle sarcasm, loves th word facetiously. Lance helpfully points out that it is the only known English word that cotnains all five vowels in alphabetical order, and it even has a 'y' on the end! Nikki takes a break from debugging to turn and give hi man acid stare - indeed a look that was delivered arseniously.  Given a string, return whether all contained letters are in alphabetical order.

function isWordAlphabetical(str) {
  for (var idx = 0; idx < str.length; idx++) {
    if (str[idx] > str[idx + 1]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

var str1 = 'abcfgo'
var str2 = 'abcfgz'
var str3 = 'beah'
var str4 = 'facetiously'
var str5 = 'arseniously'

// isWordAlphabetical(str3)

//are vowels in word in alphabetical order?
function isWordAlphabetical2(str) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var vowel;
  for (var idx = 0; idx < str.length; idx++) {
    if (vowels.includes(str[idx])) {
      if (!vowel) {
        vowel = str[idx]
      } else{
        if (vowel > str[idx]) {
          console.log(false);
          return false;
        } else{
          vowel = str[idx]
        }
      }
    }
  }
  console.log(true);
  return true;
}
isWordAlphabetical2(str3)
