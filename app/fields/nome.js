'use strict';
module.exports = nome;

function nome(app) {
	return {
		type: String,
		trim: true,
		required: true
	};
}
