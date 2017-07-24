const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8888;
const parser = require('body-parser');
const mongoose = require('mongoose');
app.use(parser.urlencoded({extended: true}));
//angular app
app.use(express.static(path.join(__dirname, 'public/dist')));
//database
require('./server/config/mongoose.js');
//routes
const routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});
