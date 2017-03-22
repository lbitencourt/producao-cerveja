'use strict';
module.exports = cerveja;

function cerveja(app) {
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	var fields = app.fields;

	var CervejaSchema = {
		nome: fields.nome,
		estilo: fields.estilo,
		og: fields.og,
		fg: fields.fg,
		ibu: fields.ibu,
		abv: fields.abv
	};

	var CervejaModel = new Schema(CervejaSchema);
	return mongoose.model('cervejas', CervejaModel);
}
