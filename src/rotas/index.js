const { Router } = require('express');
const { rotasToken } = require('./token');

const rotas = new Router();

rotas.use('/usuario', rotasToken);

module.exports = rotas;
