// Your time with us will definitely make you smarter! Let’s say a new Dojo student, Bogdan, entered with a modest IQ of 101. How smart would Bogdan be at the end of the bootcamp, if his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, up by .03 more on the third day, etc…. all the way until increasing by .98 on his 98th day (the end of 14 full weeks)?

function iq() {
  var smarts = 101;
  for (var idx = .01; idx < .99 ; idx+=.01) {
    smarts += idx;
  }
  return smarts;
}

console.log(iq());
