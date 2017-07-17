var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
var quotes = require('../controllers/quotes.js');

module.exports = function(app){
  app.get('/', function (req, res) {
    res.render('index');
  });
  app.get('/quotes', function (req, res) {
    quotes.show(req, res);
  });
  app.get('/likes/:quoteId', function (req, res) {
    Quote.update(
      {_id: req.params.quoteId},
      {$inc: {likes: 1}},
      function (err, updatedQuote) {
        if (err) {
          console.log('error!');
        }
        console.log(`updated quote: ${updatedQuote}`);
        res.redirect('/quotes');
      });
  });
  app.post('/quotes', function (req, res) {
    quotes.create(req, res);
  });
}
