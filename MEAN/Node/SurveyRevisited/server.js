var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;
var app = express();
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
})

var server = app.listen(port, function () {
  console.log(`Listening at port ${port}`);
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  socket.on('posting_form', function (data) {
    socket.emit('updated_message', data)
    var rand = Math.floor(Math.random()*1000)+1;
    socket.emit('random_number', rand)
  });
});
