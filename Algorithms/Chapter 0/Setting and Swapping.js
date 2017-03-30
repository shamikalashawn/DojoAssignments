//Set variable myNumber to 42. Set variable myName to your name. Now swap myNumber into myName & vice versa.
var myNumber = 42;
var myName = 'Shamika';
var temp1;
var temp2;
temp1 = myName;
temp2 = myNumber;
myName = temp2;
myNumber = temp1;
console.log('myNumber is ' + myNumber + ' and myName is ' + myName);
