// Create a standalone function that accepts an input string, removes leading and trailing white spaces (at beginning and end only), capitalizes the first letter of every word, and returns that string. If original string contains the word 'Mike' anywhere, immediately return 'stunned silence' instead.

var str1 = '   test without key word   ';
var str2 = '   test with Mike   ';

function dropTheMike(str) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var strArray = str.split(" ");
  var newStr = '';
  console.log(strArray);
  //test for Mike
  if (strArray.includes('Mike')){
    console.log('stunned silence');
    return 'stunned silence'
  }
  //remove front spaces
  for (var idx = 0; idx < str.length; idx++) {
    if (!alphabet.includes(str[idx])) {
      str = str.substring(idx+1,str.length)
    } else if (alphabet.includes(str[idx])) {
      break;
    }
  }

  //remove back spaces
  for (var idx = str.length-1; idx > 0; idx--) {
    console.log('str is ' + str + ' str[str.length-1] is ' + str[str.length-1] + ' idx is ' + idx);
    if (!alphabet.includes(str[str.length-1])) {
      str = str.substring(0,str.length-1)
      console.log('str.length is ' + str.length + ' str is ' + str);
    } else if (alphabet.includes(str[str.length-1])) {
      break;
    }
  }

  //capitalize words in str
  for (var idx = 0; idx < str.length; idx++) {
    if (idx == 0 || str[idx-1] == ' ') {
      newStr += str[idx].toUpperCase();
      console.log(newStr);
    } else {
      newStr += str[idx];
      console.log(newStr);
    }
  }
  console.log(newStr);
  return newStr;
}

dropTheMike(str1)
