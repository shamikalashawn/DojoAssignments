const express = require('express');
const app = express();
const mongoose = require('mongoose');
const parser = require('body-parser');
const port = process.env.PORT || 8000;
//body-parser
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
//db
require('./server/config/mongoose.js')
//routes
const routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});
