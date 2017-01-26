'use strict';
var mongoose = require('mongoose');
var Cerveja = mongoose.model('Cerveja');
var httpStatus = require('./resources').httpStatus;

var controller = {
    postCerveja: postCerveja,
    getCervejas: getCervejas,
    removeCerveja: removeCerveja
};

function getCervejas(req, res) {
    var projection = { nome: 1, estilo: 1 };
    var query = {};

    Cerveja.find(query, projection).sort('nome').exec(function (err, cervejas) {
        if (err) {
            console.error(err);
            return res.status(httpStatus.INTERNAL_ERROR).end();
        }

        res.status(httpStatus.OK).json(cervejas);
    });
}

function postCerveja(req, res) {
    var query = { nome: RegExp(req.body.nome, 'i') };

    Cerveja.findOne(query, function (err, doc) {
        if (err) {
            console.error(err);
            return res.status(httpStatus.INTERNAL_ERROR).end();
        }

        if (doc) {
            return res.status(httpStatus.CONFLICT).end();
        }

        var cerveja = new Cerveja(req.body);

        cerveja.save(function (err) {
            if (err) {
                console.error(err);
                return res.status(httpStatus.INTERNAL_ERROR).end();
            }
            return res.status(httpStatus.CREATED).json(cerveja);
        });
    });
}

function removeCerveja(req, res) {
    var id = req.params.id;

    Cerveja.findById(id, function (err, cerveja) {
        if (err) {
            console.error(err);
            return res.status(httpStatus.INTERNAL_ERROR).end();
        }

        if (!cerveja) {
            return res.status(httpStatus.NOT_FOUND).send();
        }

        cerveja.remove(function (err) {
            if (err) {
                return res.status(httpStatus.INTERNAL_ERROR).end();
            }
            res.status(httpStatus.NO_CONTENT).send();
        });
    });
}

module.exports = controller;