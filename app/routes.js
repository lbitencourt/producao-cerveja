'use strict';
var express = require('express');
var router = express.Router();
var controllers = require('./controllers');

router.post('/', controllers.postCerveja);
router.get('/', controllers.getCervejas);
router.delete('/:id', controllers.removeCerveja);
router.get('/:id', controllers.getByIdCerveja);


router.get('/:id/lotes', controllers.getLotes);

module.exports = router;