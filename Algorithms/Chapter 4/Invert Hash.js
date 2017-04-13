// Associative arrays are also called hashes (we'll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys.  Example: given {'name': 'Zaphod', 'charm': 'high', 'morals': 'dicey'}, return object {'Zaphod': 'name', 'high': 'charm', 'dicey': 'morals'}.

var assocArr = {'name': 'Zaphod', 'charm': 'high', 'morals': 'dicey'};

function invertHash(assocArr) {
  var newAssocArr = {};

  for (key in assocArr){
    var value = assocArr[key]
    newAssocArr[value] = key;
    console.log(newAssocArr);
  }
  console.log(newAssocArr);
  return newAssocArr;
}

invertHash(assocArr);
