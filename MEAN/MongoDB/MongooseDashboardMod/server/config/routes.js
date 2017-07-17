var mongoose = require('mongoose');
var Owl = mongoose.model('Owl');
var owl = require('../controllers/owl.js');

module.exports = function (app) {
  app.get('/', function (req, res) {
    owl.showAll(req, res);
  });
  app.get('/owls/new', function (req, res) {
    res.render('new');
  });
  app.get('/owls/:id', function (req, res) {
    owl.showOne(req, res);
  });
  app.post('/owls', function (req, res) {
    owl.create(req, res);
  });
  app.get('/owls/edit/:id', function (req, res) {
    owl.edit(req, res);
  });
  app.post('/owls/:id', function (req, res) {
    owl.update(req, res);
  });
  app.post('/owls/destroy/:id', function (req, res) {
    owl.destroy(req, res);
  });
}
