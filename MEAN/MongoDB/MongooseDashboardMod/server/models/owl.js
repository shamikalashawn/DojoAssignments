var mongoose = require('mongoose');


var OwlSchema = new mongoose.Schema({
  name: String,
  age: Number,
  wizard: String
});
mongoose.model("Owl", OwlSchema);
var Owl = mongoose.model('Owl');
