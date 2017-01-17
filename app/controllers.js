'use strict';
var mongoose = require('mongoose');
var Cerveja = mongoose.model('Cerveja');

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
            return res.status(500).end();
        }

        res.status(200).json(cervejas);
    });
}

function postCerveja(req, res) {
    var query = { nome: req.body.nome };

    Cerveja.findOne(query, function (err, doc) {
        if (err) {
            return res.status(500).end();
        }

        if (doc) {
            return res.status(409).end();
        }

        var cerveja = new Cerveja(req.body);
        cerveja.save(function (err) {
            return res.status(201).json(cerveja);
        });
    });
}

    function removeCerveja(req, res) {
        var id = req.params.id;

        Cerveja.findById(id, function(err, cerveja) {
            if (err) {
                return res.status(500).end();
            }

            if (!cerveja) {
                return res.status(404).send();
            }

            cerveja.remove(function(err){
                if (err) {
                    return res.status(500).end();
                }
                res.status(204).send();
            });
        });
    }


module.exports = controller;