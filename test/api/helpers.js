
'use strict';

var supertest = require('supertest');
var chai = require('chai');
var app = require('../../index');
var mongoose = require('mongoose');
require('sinon-mongoose');

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;

var Cerveja = require('../../app/modules/cervejas/cervejas-schemas');