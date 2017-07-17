const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
  name: String
});
mongoose.model('Person', PersonSchema);
const Person = mongoose.model('Person');
