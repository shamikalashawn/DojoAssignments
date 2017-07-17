var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
var server = app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});
var io = require('socket.io').listen(server);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded());
app.get('/', function (req, res) {
  res.render('index');
});
var users = [];
var messages = [];
function is_user(user) {
  var users_count = users.length;
  for (var i = 0; i < users.length; i++) {
    if(user === users[i]){
      return true;
    }
  }
  return false;
}
io.sockets.on('connection', function (socket) {
  socket.on('got_new_user', function (data) {
    if(is_user(data.name) === true){
      socket.emit('existing_user', {error: 'That name already exists in this group chat. Please select a different name to chat:'});
    } else{
      socket.emit('load_messages', {messages: messages});
      var message = {name: "", user_chat: `${data.name} entered group chat.`};
      users.push(data.name);
      messages.push(message);
      io.emit('new_message', {current_user: "", message: message});
    }
  });
  socket.on('form_post', function (data) {
    messages.push({name: data.name, user_chat: data.user_chat});
    io.emit('new_message', {current_user: data.name, message: data.user_chat});
  });
});
