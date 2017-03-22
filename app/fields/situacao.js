'use strict';
module.exports = situacao;

function situacao(app) {
	return {
		type: String,
		enum: ['Fermentação', 'Maturação', 'Carbonatação', 'Terminado']
	};
}
