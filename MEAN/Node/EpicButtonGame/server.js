var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8000;
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  res.render('index')
});
var server = app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});
var clicks = 0;
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  socket.on('epic_click', function (data) {
    clicks ++;
    io.emit('update_clicks', clicks);
  });
  socket.on('reset_clicked', function (data) {
    clicks = 0;
    io.emit('update_clicks', clicks);
  })
});
