const express = require('express');
const controladorUsuario = require('../../controlador/usuario');

const { verificaToken } = require('../../intermediarios/autenticacao');

const rotasToken = express.Router();

rotasToken.get('/', verificaToken, controladorUsuario.buscaDadosUsuario);

rotasToken.post('/', controladorUsuario.cadastroUsuario);
rotasToken.post('/login', controladorUsuario.login);

module.exports = { rotasToken };
