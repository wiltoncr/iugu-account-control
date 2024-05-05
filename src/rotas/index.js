const { Router } = require('express');
const { rotasToken } = require('./token');
const { rotasClientes } = require('./cliente');
const { rotasFaturas } = require('./fatura');

const rotas = new Router();

rotas.use('/usuario', rotasToken);
rotas.use('/cliente', rotasClientes);
rotas.use('/fatura', rotasFaturas);

module.exports = rotas;
