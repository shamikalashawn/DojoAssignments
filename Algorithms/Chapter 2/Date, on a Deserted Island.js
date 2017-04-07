//After a particularly fabulous New Year's Eve party to end 2016, Eduardo wakes to find himself stranded on a deserted island.  He misses his home in Burbank, but at least now he can spend plenty of time outdoors - and you can't beat the commute! To pass the time until he is rescued, he counts sunrises.

// 1) Help Eduardo track what day of the week it is.  Create a weekdayName(weekdayNum) function that, given a number between 1 and 7 will console.log a string containing the day of the week for that number (given 1, log 'Sunday'). Use a SWITCH statement.
function weekdayName(weekdayNum) {
  var day;
  switch (weekdayNum) {
    case 1:
      day = 'Sunday'
      break;
    case 2:
      day = 'Monday'
      break;
    case 3:
      day = 'Tuesday'
      break;
    case 4:
      day = 'Wednesday'
      break;
    case 5:
      day = 'Thursday'
      break;
    case 6:
      day = 'Friday'
      break;
    case 7:
      day = 'Saturday'
      break;
  }
  console.log(day);
}

// weekdayName(4)
// 2) Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to 365. Return weekday as before given nmber of days total. 'Sunday' still corresponds to 1.

function weekdayName2(dayNum) {
  var day;
  if (dayNum < 1) {
    console.log('That number is out of range.  Try something greater than 1.');
    return null;
  } else {
    switch (dayNum % 7) {
      case 1:
        day = 'Sunday'
        break;
      case 2:
        day = 'Monday'
        break;
      case 3:
        day = 'Tuesday'
        break;
      case 4:
        day = 'Wednesday'
        break;
      case 5:
        day = 'Thursday'
        break;
      case 6:
        day = 'Friday'
        break;
      case 0:
        day = 'Saturday'
        break;
    }
  }
  console.log(day);
  return day;
}

// weekdayName2(400);

// 3) Create a new function someDays() that calls weekdayName2() seventeen times, with randomly generatd integrs as high as 365. Log each result string. If it is a weekday, add the phrase 'Work hard!', and if it is a weekend day, add 'Enjoy your day off!'

function someDays(){
  var ranDay;
  var day;
  var weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  var weekEnd = ['Saturday', 'Sunday']
  for (var i = 0; i < 17; i++) {
    ranDay = Math.floor(Math.random() * 365) + 1;
    day = weekdayName2(ranDay);
    console.log('Day ' + i + ' is ' + day);
    if (weekDay.includes(day)) {
      console.log('Work hard!');
    } else if (weekEnd.includes(day)) {
      console.log('Enjoy your day off!');
    }
  }
}

// someDays();

// 4) Build function monthName(monthNum) that, given a number from 1 to 12, returns a string containing month for that number ("May" corresponds to 5). Use an array, without loops.

function monthName(monthNum){
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[monthNum - 1]
}

// console.log(monthName(5));

// 5) Now expand monthName() to create monthToDays(monthNum), returning the number of days in that month, in the year 2017. Hint: use a SWITCH statement for the days in each month.

function monthToDays(monthNum, leap) {
  var days;
  switch (monthNum) {
    case 1:
      days = 31;
      break;
    case 2:
    if (leap) {
      days = 29
      break;
    } else{
      days = 28;
      break;
    }
    case 3:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    case 5:
      days = 31;
      break;
    case 6:
      days = 30;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 9:
      days = 30;
      break;
    case 10:
      days = 31;
      break;
    case 11:
      days = 30;
      break;
    case 12:
      days = 31;
      break;
  }
  return days;
}

// console.log(monthToDays(2, false));
// 6) Despite using his ember expertise to create a glowing SOS visible from space, the days go by and sadly Eduardo is still not rescued.  Is it spring yet? It might as well be. Build on monthName() to create dayToMonth(dayNum). If given a day number since the year began, return the current month (assuming it is not a Leap year). Given 75, return 'March'.

function dayToMonth(dayNum, leap) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var counter = 0;
  var sum = 0;
  while (sum < dayNum) {
    sum += monthToDays(counter + 1, leap);
    console.log(sum);
    counter += 1
  }
  return months[counter-1];
}

// console.log(dayToMonth(75, false));

// 7) Eduardo builds a Dojo bootcamp on the island. Initially his students only find Ninja Gold in caves, but eventuallly even his tree sloths can write code quickly! Dojo classes meet Monday thru Friday, so let's reincorporate weekday to our calculations. Construct fullDate(dayNum) to accept number of days so far in 2017, and return a full date string. He hardly remembers that fateful New Year's Eve party, but he knows it was a Saturday. Given 142, return "Monday, May 22, 2017".

function fullDate(dayNum) {
  var day = weekdayName2(dayNum);
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = dayToMonth(dayNum, false);
  var monthIdx = months.indexOf(month);
  var date;
  var tempDays = 0;
  var temp;
  for (var i = 1; i <= monthIdx; i++) {
    temp = monthToDays(i, false);
    tempDays += temp;
  }
  date = dayNum - tempDays;
  return day + ', ' + month + ' ' + date + ', 2017'
}

// console.log(fullDate(142));
// 8) Time flies when you're at a Dojo - months in fact. Build fullDate2(dayNum) that will be given a 4-digit integer: the days that have passed since December 31, 2016. This number can stretch into future years! You can assume that any year number divisible by four is a leap year and has a 29-day February. Given 8475, return "Thursday, March 15, 2040".

function fullDate2(dayNum) {
  var year = 2017
  var leap;
  while (dayNum > 365){
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
      dayNum -= 366
    }
    else {
      dayNum -= 365
    }
    year ++
  }
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    leap = true;
  } else {
    leap = false;
  }


  var day = weekdayName2(dayNum);
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = dayToMonth(dayNum, leap);
  var monthIdx = months.indexOf(month);
  var date;
  var tempDays = 0;
  var temp;
  for (var i = 1; i <= monthIdx; i++) {
    temp = monthToDays(i, leap);
    tempDays += temp;
  }
  date = dayNum - tempDays;
  return day + ', ' + month + ' ' + date + ', ' + year
}
console.log(fullDate2(8475));
// 9) Eduardo hacks the Google Maps API and adds this long-forgotten island back onto the map. Soon he is rescued! News of his Hemingway-like stoicism make him famous for centuries. Build fullDate3(dayNum) to handle days up to 140,000! Note: years 2100, 2200, and 2300 are not leap years (although 2400 is). Given 139947, return "Tuesday, February 29, 2400".

function fullDate3(dayNum) {
  var day = weekdayName2(dayNum);
  var year = 2017
  var leap;
  while (dayNum > 365){
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
      dayNum -= 366;
      console.log('year', year, 'daynum', dayNum, 'leap');
    }
    else {
      dayNum -= 365;
      console.log('year', year, 'daynum', dayNum, 'not leap');
    }
    year ++
  }
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    leap = true;
  } else {
    leap = false;
  }
  console.log(leap);
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = dayToMonth(dayNum, leap);
  var monthIdx = months.indexOf(month);
  var date;
  var tempDays = 0;
  var temp;
  for (var i = 1; i <= monthIdx; i++) {
    temp = monthToDays(i, leap);
    tempDays += temp;
  }
  date = dayNum - tempDays;
  return day + ', ' + month + ' ' + date + ', ' + year
}
console.log(fullDate3(139947));
