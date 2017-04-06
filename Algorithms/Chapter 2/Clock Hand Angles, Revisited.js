//Return to your previous clockHandAngles solution. Allow fractional values for input seconds, but change your implementation to print only integer values for angles (in degrees) of the various hands.

function clockHandAngles(seconds) {
  var secondHand = Math.ceil((seconds % 60) * 6);
  var minuteRev = seconds/60;
  var minuteHand = Math.ceil((minuteRev % 60) * 6);
  var hourRev = minuteRev/12;
  var hourHand = Math.ceil((hourRev % 60) * 6);
  console.log('Hour hand: ' + hourHand + ' deg. Minute hand: ' + minuteHand + ' degs. Second hand: ' + secondHand + ' degs.');
}

clockHandAngles(119730)
