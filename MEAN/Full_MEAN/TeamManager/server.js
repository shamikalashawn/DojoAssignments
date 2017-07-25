const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8888;
const parser = require('body-parser');
const mongoose = require('mongoose');
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
//angular app
app.use(express.static(path.join(__dirname, 'TeamManager/dist')));
//database
require('./server/config/database');
//routes
const routes_setter = require('./server/config/routes/players.routes');
// routes_setter(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}.`);
});