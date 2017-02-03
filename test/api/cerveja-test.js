'use strict';

var payload = {
    nome: 'Brown Porter',
    estile: 'Brown Porter'
};

describe('cervejas', function () {
    it('/POST', function (done) {
        request
            .post('/api/cervejas')
            .send(payload)
            .end(function (err, res) {
                expect(res.statusCode).to.be.eql(201);
                expect(res.body.nome).to.be.eql(payload.nome);
                done(err);
            });
    });
});