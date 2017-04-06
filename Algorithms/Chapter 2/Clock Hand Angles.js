// Regardless of how hard a Dojo student works (and they shold work hard), they need time now and then to unwind - like hands on a clock.  Traditional clocks are increasingly uncommon, but most can still read an analog clock's hands of hours, minutes, and seconds. Create clockHandAngles (seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands.  As review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs."  For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 deg. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.

function clockHandAngles(seconds) {
  // var rem = seconds % 3600;
  // var hours = ((seconds - rem)/ 3600) % 12;
  // if (rem == seconds){
  //   rem = seconds % 60;
  //   var minutes = ((seconds - rem)/ 60) % 60;
  //   seconds = rem;
  // } else{
  //   seconds = rem;
  //   rem = seconds % 60;
  //   var minutes = ((seconds - rem)/ 60) % 60;
  //   seconds = rem;
  // }
  // // var hourHand = (30 * hours) + (minutes * (30/60)) + (seconds * (30/3600));
  // var minuteHand = (6 * minutes) + (seconds * (0.1));
  // console.log(seconds * (0.1));
  // var secondHand = (6 * seconds);

  var secondHand = (seconds % 60) * 6;
  var minuteRev = seconds/60;
  var minuteHand = (minuteRev % 60) * 6;
  var hourRev = minuteRev/12;
  var hourHand = (hourRev % 60) * 6;
  console.log('Hour hand: ' + hourHand + ' deg. Minute hand: ' + minuteHand + ' degs. Second hand: ' + secondHand + ' degs.');
}

console.log(clockHandAngles(119730));



// Second: also calculate and print degrees for an additional 'week hand' that rotates once each week.
function clockHandAngles2(seconds) {
  var secondHand = (seconds % 60) * 6;
  var minuteRev = seconds/60;
  var minuteHand = (minuteRev % 60) * 6;
  var hourRev = minuteRev/12;
  var hourHand = (hourRev % 60) * 6;
  var weekRev = hourRev/14;
  var weekHand = (weekRev % 60) * 6;
  console.log('Week hand: ' + weekHand + ' degs. Hour hand: ' + hourHand + ' degs. Minute hand: ' + minuteHand + ' degs. Second hand: ' + secondHand + ' degs.');
}

clockHandAngles2(1200000)
