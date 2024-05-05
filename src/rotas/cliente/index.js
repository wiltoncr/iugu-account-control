const express = require('express');
const controladorClientes = require('../../controladores/cliente');

const { verificaToken } = require('../../intermediarios/autenticacao');

const rotasClientes = express.Router();

rotasClientes.get('/', verificaToken, controladorClientes.listagemCliente);

module.exports = { rotasClientes };
