var session = require('express-session');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.get('/', function (request, response) {
  response.send('<h1>Hello Express</h1>')
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));
app.use(express.static(__dirname + '/static'));
console.log(__dirname);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/users', function (request, response) {
  var users_array = [
    {name: 'Michael', email: "m@cd.com"},
    {name: 'Sam', email: "s@cd.com"},
    {name: 'Rachel', email: "r@cd.com"},
    {name: 'Mary', email: "m@cd.com"},
  ];
  response.render('users', {users: users_array});
});
app.get('/index', function (req, res) {
  res.render('index');
});
app.post('/users', function (req, res) {
  console.log('POST DATA \n\n', req.body);
  res.redirect('/')
});
app.get('/users/:id', function (req, res) {
  console.log('The user id requested is: ', req.params.id);
  res.send('You requested the user with id: ' + req.params.id);
});
app.listen(8000, function () {
  console.log('listening on port 8000');
})
