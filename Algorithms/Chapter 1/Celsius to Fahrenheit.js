/*
Create celsiusToFahrenheit(cDegrees) that accepts the number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
*/

function celsiusToFahrenheit(cDegrees) {
  return ((9/5)*cDegrees) + 32
}

console.log(celsiusToFahrenheit(0));

/*
(optional) Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.
*/

var fDegrees;
var cDegrees;
for (var cDegrees = 200; cDegrees >= -200; cDegrees--) {
  fDegrees = celsiusToFahrenheit(cDegrees)
  console.log('Fahrenheit: ' + fDegrees + '\n' + 'Celsius: ' + cDegrees);
  if (fDegrees == cDegrees) {
    console.log('Fahrenheit equals Celsius when Fahrenheit is ' + fDegrees + ' and Celsius is ' + cDegrees);
    break;
  }
}
