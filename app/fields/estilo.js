'use strict';
module.exports = estilo;

function estilo(app) {
	return {
		type: String,
		trim: true,
		required: true
	};
}
