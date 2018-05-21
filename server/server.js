'use strict';

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//mongoose.connect('mongodb://localhost/local');
//mongoose.connect(process.env.MONGOLAB_URI);
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

const db = mongoose.connection;

app.use(express.static(path.join(__dirname, '../static')));


app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, '../static', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App started for your convenience');
});

module.exports = app;
