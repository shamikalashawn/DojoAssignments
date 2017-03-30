// Kenny tries to stay safe, but somehow everyday something happens. If there is a 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake, 25% chance of blizzard, and 30% chance of meteor strike, write function whatHappensToday() to print the outcome.

function whatHappensToday() {
  var volcano = [1,2,3,4,5,6,7,8,9,10];
  var tsunami = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  var earthquake = [26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
  var blizzard = [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70];
  var meteorStrike = [71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
  var today = Math.floor(Math.random() * (101))

  if (volcano.indexOf(today) > -1) {
    console.log('Volcano!');
  } else if (tsunami.indexOf(today) > -1) {
    console.log('Tsunami!');
  } else if (earthquake.indexOf(today) > -1) {
    console.log('Earthquake!');
  } else if (blizzard.indexOf(today) > -1) {
    console.log('Blizzard!');
  } else if (meteorStrike.indexOf(today) > -1) {
    console.log('Meteor Strike!');
  }
}

whatHappensToday();
