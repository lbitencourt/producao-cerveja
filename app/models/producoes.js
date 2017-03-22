'use strict';
module.exports = producao;

function producao(app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var fields = app.fields;

    var producaoSchema = {
        situacao: fields.situacao,
        cerveja: {
            _id: String,
            nome: fields.nome,
            estilo: fields.estilo,
            og: fields.og,
            fg: fields.fg,
            ibu: fields.ibu,
            abv: fields.abv
        },
        brassagem: {
            dia: fields.dia,
            observacao: fields.observacao,
            og: fields.og,
            volume: fields.volume
        },
        fermentacao: {
            primaria: {
                inicio: fields.inicio,
                temperatura: fields.temperatura,
                observacao: fields.observacao
            },
            secundaria: {
                inicio: fields.inicio,
                temperatura: fields.temperatura,
                observacao: fields.observacao
            }
        },
        maturacao: {
            inicio: fields.inicio,
            temperatura: fields.temperatura,
            observacao: fields.observacao
        },
        envase: {
            dia: fields.dia,
            carbonatacao: fields.carbonatacao,
            volume: fields.volume,
            observacao: fields.observacao
        }
    };

    var producaoModel = new Schema(producaoSchema);
    return mongoose.model('producoes', producaoModel);
}
