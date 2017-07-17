const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
  showAll: function (req, res) {
    Person.find({}, function (err, people) {
      if (err) {
        console.log('something went wrong');
      }
      res.json(people);
    })
  },
  showOne: function (req, res) {
    Person.find({name: req.params.name}, function (err, person) {
      if (err) {
        console.log('something went wrong');
      }
      res.json(person);
    });
  },
  create: function (req, res) {
    var person = new Person({name: req.params.name})
    person.save(function (err, person) {
      if (err) {
        console.log('could not save person');
      }
      res.redirect('/');
    });
  },
  destroy: function (req, res) {
    Person.remove({name: req.params.name}, function (err, result) {
      if (err) {
        console.log('person could not be deleted.');
      }
      res.redirect('/')
    });
  },
}
