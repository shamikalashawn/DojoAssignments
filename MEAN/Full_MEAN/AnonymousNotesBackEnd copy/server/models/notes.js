var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  message: String,
}, {timestamps: true});
mongoose.model("Note", NoteSchema);
var Note = mongoose.model('Note');
