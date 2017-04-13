// Write a function that accepts as a parameter a string containing someone's name. Return a string containing the following oh-so-cool greeting: strip off the first letter of the name, capitalize this new word, and add " to the [first letter]!" Given 'Dylan', return 'Ylan to the D!'

function jiggy(str) {
  var firstLetter = str[0];
  var name = str;
  var capital = '';
  str = str.substring(1,str.length1);
  capital = str[0].toUpperCase();
  str = str.substring(1,str.length);
  str = capital + str;
  console.log(str + " to the " + firstLetter + "!");
  return str + " to the " + firstLetter + "!"
}

var str = 'Dylan'
jiggy(str)
