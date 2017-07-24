var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
  show: function (req, res) {
    Note.find({}).sort({'created_at': -1}).exec(function (err, notes) {
      if (err) {
        console.log(err);
      }
      res.json(notes);
    })
  },
  create: function (req, res) {
    console.log('creating note in server method req: ', req.body);
    var newNote = new Note({message: req.body.message});
    newNote.save(function (err) {
      if (err) {
        console.log(err);
      }
      console.log('note created: ', newNote);
      res.redirect('/notes');
    })
  }
}
