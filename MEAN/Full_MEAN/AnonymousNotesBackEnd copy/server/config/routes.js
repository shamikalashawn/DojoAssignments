var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var notes = require('../controllers/notes.js')

module.exports = function (app) {
  app.get('/notes', (req, res, next) =>{
    notes.show(req, res);
  });
  app.post('/notes', notes.create);

  app.all("*", (req, res, next)=>{
    res.sendfile(path.resolve("./public/dist/index.html"))
  })
}
