var express = require('express');
var app = express();

// var bodyParser = require('body-parser');
// var urlencode = bodyParser.urlencoded({ extended: false });

app.use(express.static('app/public'));
app.use(express.static('app/vendor'));

module.exports = app;