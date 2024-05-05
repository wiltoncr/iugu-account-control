const { Router } = require('express');
const { rotasToken } = require('./token');
const { rotasFaturas } = require('./fatura');

const rotas = new Router();

rotas.use('/usuario', rotasToken);
rotas.use('/fatura', rotasFaturas);

module.exports = rotas;
