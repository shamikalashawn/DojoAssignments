var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  author: {type:String, required:[true, 'Author must be entered']},
  quote: {type:String, required:[true, 'Quote must be entered']},
  likes: {type: Number, default: 0}
}, {timestamps: true});
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');
