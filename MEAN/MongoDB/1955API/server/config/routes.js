const mongoose = require('mongoose');
const Person = mongoose.model('Person');
const person = require('../controllers/person.js');
const fs = require('fs');


module.exports = function (app) {
  app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.setHeader('Content-Type', 'application/json');
    person.showAll(req, res);
  });
  app.get('/new/:name', function (req, res) {
    person.create(req, res);
  });
  app.get('/remove/:name', function (req, res) {
    person.destroy(req, res);
  });
  app.get('/:name', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.setHeader('Content-Type', 'application/json');
    person.showOne(req, res);
  });
}
