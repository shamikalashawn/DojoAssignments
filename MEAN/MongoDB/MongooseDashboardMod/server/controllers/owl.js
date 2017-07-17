var mongoose = require('mongoose');
var Owl = mongoose.model('Owl');

module.exports = {
  showAll: function(req, res){
    Owl.find({}, function (err, owls) {
      if (err) {
        console.log('something went wrong!');
      }
      res.render('index', {owls: owls});
    });
  },
  showOne: function (req, res) {
    Owl.findById(req.params.id, function (err, owl) {
      if (err) {
        console.log('that owl cannot be found');
      }
      res.render('owl', {owl: owl});
    });
  },
  create: function (req, res) {
    var owl = new Owl({name: req.body.name, age: req.body.age, wizard: req.body.wizard});
    owl.save(function (err) {
      if (err) {
        console.log('something went wrong');
      }
      res.redirect('/');
    });
  },
  update: function (req, res) {
    Owl.update({_id: req.params.id}, {$set: req.body}, function (err, updatedOwl) {
      if (err) {
        console.log('owl could not be updated');
      }
      res.redirect('/');
    });
  },
  edit: function (req, res) {
    Owl.findById(req.params.id, function (err, owl) {
      if (err) {
        console.log('owl could not be found');
      }
      res.render('edit', {owl: owl});
    });
  },
  destroy: function (req, res) {
    Owl.remove({_id: req.params.id}, function (err, result) {
      if (err) {
        console.log('owl could not be removed');
      }
      res.redirect('/');
    });
  }
}
