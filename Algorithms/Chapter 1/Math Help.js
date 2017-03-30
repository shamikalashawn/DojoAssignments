/*
Cartman doesn’t really like math class and needs help. You are given two numbers – the coefficients M and B in the equation Y = MX + B. Build a function that returns the X-intercept (Cartman’s older cousin Charlie wisely reminds him that X-intercept is the value of X where Y equals zero, but he just scoffs).
*/

function slope(m, b) {
  var x = -b/m
  return x
}

console.log(slope(3,5));
