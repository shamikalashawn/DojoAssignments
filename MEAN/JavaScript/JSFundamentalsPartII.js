function summation(x,y) {
  var sum = 0;
  for (var i = x; i <= y; i++) {
    sum += i;
  }
  console.log(sum);
}

function minimum(arr) {
  var min = Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function average(arr) {
  var sum = 0;
  var avg = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum/arr.length;
  return avg;
}

var summation = function (x,y) {
  var sum = 0;
  for (var i = x; i <= y; i++) {
    sum += i;
  }
  console.log(sum);
};

var minimum = function (arr) {
  var min = Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

var average = function (arr) {
  var min = Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

var object = {
  summation: function (x,y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
      sum += i;
    }
    console.log(sum);
  },
  minimum: function (arr) {
    var min = Infinity;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  },
  average: function (arr) {
    var min = Infinity;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
}

var person = {
  name: 'Shamika',
  distance_traveled: 0,
  say_name: function () {
    alert(person['name']);
  },
  say_something: function (words) {
    alert(`${person.name} says '${words}'`);
    return person;
  },
  walk: function () {
    alert(`${person.name} is walking`);
    person.distance_traveled += 3;
    return person;
  },
  run: function () {
    alert(`${person.name} is running`);
    person.distance_traveled += 10;
    return person;
  },
  crawl: function () {
    alert(`${person.name} is crawling`);
    person.distance_traveled += 1;
    return person;
  },
}
