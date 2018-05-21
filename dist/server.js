'use strict';

var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

//mongoose.connect('mongodb://localhost/local');
//mongoose.connect(process.env.MONGOLAB_URI);
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

var db = mongoose.connection;

app.use(express.static(path.join(__dirname, '../static')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../static', 'index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App started for your convenience');
});

module.exports = app;
//# sourceMappingURL=server.js.map