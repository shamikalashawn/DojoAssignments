//requires express and path
var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;
//create the express app
var app = express();
//static content
app.use(express.static(path.join(__dirname, "./static")));
//setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//root route to render the index.ejs view
app.get('/', function (req, res) {
  res.render('index');
});
//tell the express app to listen on port 8000
//storing app.listen within a variable calld server
var server = app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
//AFTER our server listener, pass server variable into the listen method
var io = require('socket.io').listen(server);
//whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
  console.log('we are using sockets!');
  console.log(socket.id);
  //all the socket code goes here
  socket.on('button_clicked', function (data) {
    console.log('Someone clicked a button! Reason: ' + data.reason);
    socket.emit('server_response', {response: 'sockets are the best!'});
    //  EMIT:
   socket.emit('my_emit_event');
   //  BROADCAST:
   socket.broadcast.emit("my_broadcast_event");
   //  FULL BROADCAST:
   io.emit("my_full_broadcast_event");
  });
});
