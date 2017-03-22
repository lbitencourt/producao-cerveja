'use strict';
module.exports = route;

function route(app) {
    var cervejas = app.controllers.cervejas;
    
    app.route('/api/cervejas').post(cervejas.postCerveja);
    app.route('/api/cervejas').get(cervejas.getCervejas);
    app.route('/api/cervejas/:id').delete(cervejas.removeCerveja);
    app.route('/api/cervejas/:id').get(cervejas.getByIdCerveja);
}