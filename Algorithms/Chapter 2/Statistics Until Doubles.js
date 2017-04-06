//Here's another game for our New Year's Eve party. Implement a '20-sided die' that randomly returns integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row. Display number of rolls, min, max, and average.

function statisticsUntilDoubles() {
  var twentySidedDie1;
  var twentySidedDie2;
  var roll = 0;
  var min = Infinity;
  var max = -Infinity;
  var sum = 0;
  var average = 0;

  while (true) {
    twentySidedDie1 = Math.floor(Math.random() * 20) + 1;
    twentySidedDie2 = Math.floor(Math.random() * 20) + 1;
    sum += twentySidedDie1;
    sum += twentySidedDie2;
    roll += 2;
    if (twentySidedDie1 > max) {
      max = twentySidedDie1;
    } else if (twentySidedDie2 > max) {
      max = twentySidedDie2;
    }
    if (twentySidedDie1 < min) {
      min = twentySidedDie1;
    }  else if (twentySidedDie2 < min) {
      min = twentySidedDie2;
    }
    if (twentySidedDie1 == twentySidedDie2) {
      console.log(twentySidedDie1 + " " + twentySidedDie2);
      break;
    }
  }
  average = Math.floor(sum/roll);
  console.log('Number of rolls: ' + roll + ' Min: ' + min + ' Max: ' + max + ' Average: ' + average);
}

statisticsUntilDoubles();
