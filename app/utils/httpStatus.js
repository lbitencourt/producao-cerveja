'use strict';
module.exports = httpStatus;

function httpStatus(app) {
    return {
        OK: 200,
        CREATED: 201,
        NO_CONTENT: 204,
        NOT_FOUND: 400,
        CONFLICT: 409,
        INTERNAL_ERROR: 500
    };
}