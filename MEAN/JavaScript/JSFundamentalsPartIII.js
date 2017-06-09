function personConstructor(name) {
  return {
    name: name,
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
}

function ninjaConstructor(name, cohort) {
  var ninja = {
    name: name,
    cohort: cohort,
    beltLevel: 'yellow-belt';
    levelUp: function () {
      var belts = ['yellow-belt', 'gold-belt', 'orange-belt', 'green-belt', 'blue-belt', 'purple-belt', 'brown-belt', 'red-belt', 'black-belt']
      for (var i = 0; i < belts.length; i++) {
        if (ninja.beltLevel == belts[i]) {
          ninja.beltLevel = belts[i+1];
          break;
        }
      }
      return ninja;
    },
  }
  return ninja;
}
