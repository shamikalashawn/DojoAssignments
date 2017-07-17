const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const parser = require('body-parser');
const mongoose = require('mongoose');
const moment = require('moment');
app.use(parser.urlencoded({extended: true}));
//views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client/views'));
//db
require('./server/config/mongoose.js');
//routes
const routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});
