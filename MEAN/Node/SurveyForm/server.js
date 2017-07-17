var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  res.render('index');
});

app.post('/result', function (req, res) {
  console.log(req.body);
  var submitted = {
    name: req.body.name,
    dojo: req.body.location,
    language: req.body.language,
    comment: req.body.comment
  }
  res.render('result', {info: submitted})
});

app.listen(port, function (req, res) {
  console.log(`Listening on port ${port}`);
})
