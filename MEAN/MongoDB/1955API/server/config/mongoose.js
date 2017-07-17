const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/1955_API')
mongoose.Promise = global.Promise;

const models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
