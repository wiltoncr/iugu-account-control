const express = require('express');
const controladorFaturas = require('../../controladores/fatura');

const { verificaToken } = require('../../intermediarios/autenticacao');

const rotasFaturas = express.Router();

rotasFaturas.get('/', verificaToken, controladorFaturas.listagemFatura);

module.exports = { rotasFaturas };
