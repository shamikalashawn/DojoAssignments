const express = require('express');
const path = require('path');
const parser = require('body-parser')
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const ejsLint = require('ejs-lint');
const app = express();
app.use(express.static(path.join(__dirname, './static')));
ejsLint('index.ejs');
app.use(parser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
//set up database
mongoose.connect('mongodb://localhost/message_board');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
  name: {type:String, required: [true, "Name must be entered"], minlength: [4, 'Name must be at least 4 characters.']},
  message: {type:String, required: true},
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {timestamps: true});
var CommentSchema = new mongoose.Schema({
  name: {type:String, required: [true, "Name must be entered"], minlength: [4, 'Name must be at least 4 characters.']},
  comment: {type:String, required: true},
  _message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps: true});
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

//routes
app.get('/', function (req, res) {
  Message.find({}).populate('comments').exec(function (err, messages) {
    if (err) {
      throw err;
    }
    res.render('index', {messages: messages});
  });
});
app.post('/messages', function (req, res) {
  Message.create(req.body, function (err, message) {
    if (err) {
      throw err;
    }
    res.redirect('/');
  });
});
app.post('/comments/:messageId', function (req, res) {
    Message.findOne({_id: req.params.messageId}, function (err, message) {
      if (err) {
        throw err;
      }
      var comment = new Comment(req.body);
      comment._message = message._id;
      message.comments.push(comment);
      comment.save(function (err) {
        message.save(function (err) {
          if (err) {
            throw err;
          }
          res.redirect('/');
        });
      });
    });
  });
app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});
