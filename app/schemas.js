'use strict';
var mongoose = require('mongoose');

var CervejaSchema = new mongoose.Schema({
    nome: { type: String, required: true, trim: true },
    estilo: { type: String, required: true, trim: true },    
    
    og: { type: Number, required: true },
    fg: { type: Number, required: true },
    abv: { type: Number, required: true },
    ibu: { type: Number, required: true },

    lotes: [{
        numero: { type: Number, required: true },
        brassagem: {
            dia: { type: Date, default: Date.now },
            observacao: { type: String, default: '' }
        },

        og: { type: Number },
        fg: { type: Number },
        abv: { type: Number },
        ibu: { type: Number },

        custo: { type: Number, default: 0 },
        volume: {
            estimado: { type: Number },
            aferido: { type: Number }
        },
        fermentacao: {
            primaria: {
                inicio: { type: Date },
                temperatura: { type: Number, default: 19 },
                observacao: { type: String }
            },
            secundaria: {
                inicio: { type: Date },
                temperatura: { type: Number, default: 22 },
                observacao: { type: String }
            }
        },
        maturacao: {
            inicio: { type: Date },
            temperatura: { type: Number, default: 2 },
            observacao: { type: String }
        },
        envase: {
            dia: { type: Date, default: Date.now },
            cabornatacao: { type: String, enum: ['Forçada', 'Primming'] },
            acucar: { type: Number },
            volume: { type: String },
            observacao: { type: String }
        }
    }]
});

module.exports = CervejaSchema;
