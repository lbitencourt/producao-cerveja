'use strict';
var mongoose = require('mongoose');

mongoose.connect('localhost/producao-cerveja');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Erro de conexão.', err);
});

db.on('open', function () {
    console.log('Opened connection');
});

db.on('connected', function () {
    console.log('Connected');
});

db.on('disconnected', function () {
    console.log('Disconnected');
});

db.on('error', function (err) {
    console.log('Erro de padrão de conexão do Mongoose: ' + err);
});

process.on('SIGINT', function () {
    db.close(function () {
        console.log(
            'conexão Mongoose desconectada através de término do node CRTL + C'
        );
        process.exit(0);
    });
});

module.exports = db; 

mongoose.model('Cerveja', require('./schemas'));
