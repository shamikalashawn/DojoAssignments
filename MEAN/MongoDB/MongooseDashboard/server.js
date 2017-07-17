const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const parser = require('body-parser');
app.use(parser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "./views"));
//database setup
mongoose.connect('mongodb://localhost/dashboard');
var OwlSchema = new mongoose.Schema({
  name: String,
  age: Number,
  wizard: String
});
mongoose.model("Owl", OwlSchema);
var Owl = mongoose.model('Owl');
//routes
app.get('/', function (req, res) {
  Owl.find({}, function (err, owls) {
    if (err) {
      console.log('something went wrong');
    }
    res.render('index', {owls: owls});
  });
});
app.get('/owls/new', function (req, res) {
  res.render('new');
});
app.get('/owls/:id', function (req, res) {
  Owl.findById(req.params.id, function (err, owl) {
    if (err) {
      console.log('that owl cannot be found');
    }
    res.render('owl', {owl: owl});
  });
});
app.post('/owls', function (req, res) {
  Owl.create(req.body, function (err, owl) {
    if (err) {
      console.log('owl could not be created');
    }
    res.redirect('/');
  });
});
app.get('/owls/edit/:id', function (req, res) {
  Owl.findById(req.params.id, function (err, owl) {
    if (err) {
      console.log('owl could not be found');
    }
    res.render('edit', {owl: owl});
  });
});
app.post('/owls/:id', function (req, res) {
  Owl.update({_id: req.params.id}, {$set: req.body}, function (err, updatedOwl) {
    if (err) {
      console.log('owl could not be updated');
    }
    res.redirect('/');
  });
});
app.post('/owls/destroy/:id', function (req, res) {
  Owl.remove({_id: req.params.id}, function (err, result) {
    if (err) {
      console.log('owl could not be removed');
    }
    res.redirect('/');
  });
});
app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});
