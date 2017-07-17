const express = require('express');
const app = express();
const parser = require('body-parser');
const port = process.env.PORT || 8888;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client/views'));
app.use(parser.urlencoded({extended: true}));
//routes
app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port, function () {
  console.log('Listening on port ', port);
});
