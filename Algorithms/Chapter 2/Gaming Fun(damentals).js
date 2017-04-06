// It's New Year's Eve, so let's play some dice games! It'll be fun. What could go wrong?

// 1) Create function rollOne() to return a randomly selected integer betweeen 1 and 6 (inclusive).
function rollOne() {
  return Math.floor(Math.random() * 6) + 1
}

// console.log(rollOne());
// 2) Second, create a function playFives(num), which should call rollOne() multiple timse - 'num' times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print the value rollOne() returns, and if that return value is 5, also print "That's good luck!"

function playFives(num) {
  var value;
  for (var i = 0; i < num; i++) {
    value = rollOne();
    console.log(value);
    if (value == 5) {
      console.log("That's good luck!");
    }
  }
}

// playFives(5)
// 3) Third, create a new function named playStatistics(), which should call rollOne() eight times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne, among those eight calls.

function playStatistics() {
  var lowest = Infinity;
  var highest = -Infinity;
  for (var i = 0; i < 8; i++) {
    value = rollOne()
    if (value > highest) {
      highest = value;
    } else if (value < lowest) {
      lowest = value;
    }
  }
  console.log('Out of 8 rolls, the highest value was ' + highest + ' and the lowest value was ' + lowest);
}

// playStatistics()


// 4) Fourth, make a copy of playStatistics and add code to make playStatistics2(), so that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.

function playStatistics2() {
  var lowest = Infinity;
  var highest = -Infinity;
  var sum = 0;
  for (var i = 0; i < 8; i++) {
    value = rollOne()
    sum += value;
    if (value > highest) {
      highest = value;
    } else if (value < lowest) {
      lowest = value;
    }
  }
  console.log('Out of 8 rolls, the highest value was ' + highest + ', the lowest value was ' + lowest + ' and the sum of the rolls was ' + sum);
}

// playStatistics2();
// 5) Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), so that it will roll as many times as you want, instead of always doing this eight times.

function playStatistics3(num) {
  var lowest = Infinity;
  var highest = -Infinity;
  var sum = 0;
  for (var i = 0; i < num; i++) {
    value = rollOne()
    sum += value;
    if (value > highest) {
      highest = value;
    } else if (value < lowest) {
      lowest = value;
    }
  }
  console.log('Out of ' + num + ' rolls, the highest value was ' + highest + ', the lowest value was ' + lowest + ' and the sum of the rolls was ' + sum);
}

// playStatistics3(7);
// 6) Finally, make a copy of playStatistics3 and change it to create playStatistics4(num), so that at the end instead of the total sum, it prints the average roll.

function playStatistics4(num) {
  var lowest = Infinity;
  var highest = -Infinity;
  var sum = 0;
  var average;
  for (var i = 0; i < num; i++) {
    value = rollOne()
    sum += value;
    if (value > highest) {
      highest = value;
    } else if (value < lowest) {
      lowest = value;
    }
  }
  average = sum/num;
  console.log('Out of ' + num + ' rolls, the highest value was ' + highest + ', the lowest value was ' + lowest + ' and the average of the rolls was ' + average);
}

playStatistics4(10);
