// Kyle (smarter than Kenny) notes that the chance of one disaster is totally unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!

function whatReallyHappensToday() {
  var survive = true;
  var today = Math.floor((Math.random()*101))
  if (today <= 10) { // 10% - volcano - 1-10
    console.log('volcano!');
    survive = false;
  }
  var today = Math.floor((Math.random()*101))
  if (today <= 15) { // 15% - tsunami - 11-25
    console.log('tsunami!');
    survive = false;
  }
  var today = Math.floor((Math.random()*101))
  if (today <= 20) { // 20% - earthquake - 26 - 45
    console.log('earthquake!');
    survive = false;
  }
  var today = Math.floor((Math.random()*101))
  if (today <= 25) { // 25% - blizzard - 46 - 70
    console.log('blizzard!');
    survive = false;
  }
  var today = Math.floor((Math.random()*101))
  if (today <= 30) {// 30% - meteor strike - 70 - 100
    console.log('meteor strike!');
    survive = false;
  }
  if (survive) {
    console.log('He survived!');
  }
}

whatReallyHappensToday();
