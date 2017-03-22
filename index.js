'use strict';
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var db = require('./app/mongo');
var consign = require('consign');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, 'public')));


consign({ cwd: 'app', verbose: false})
	.include('utils')
	.include('fields')
	.include('models')
	.include('services')
	.include('controllers')
	.include('routes')
	.into(app);


module.exports = app;
