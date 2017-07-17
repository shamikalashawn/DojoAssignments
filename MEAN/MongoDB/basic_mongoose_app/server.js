const express = require('express');
const app = express();
const parser = require('body-parser');
const port = process.env.PORT || 8000;
const path = require('path');
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(parser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');
app.get('/', function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      console.log('something went wrong');
      throw err;
    }
    res.render('index', {users: users});
  })
});
app.post('/users', function (req, res) {
  console.log('POST DATA', req.body);
  var user = new User({name: req.body.name, age: req.body.age});
  user.save(function (err) {
    if (err) {
      console.log('something went wrong');
    } else {
      console.log('successfully added user');
      res.redirect('/');
    }
  });
});
app.listen(port, function () {
  console.log('Listening on port ', port);
});
