'use strict';
module.exports = carbonatacao;

function carbonatacao(app) {
	return {
		type: String,
		enum: ['Forçada', 'Primming']
	};
}
