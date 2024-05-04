const express = require('express');
const controladorUsuario = require('../../controlador/usuario')

const rotasToken = express.Router();

rotasToken.post('/login', controladorUsuario.login);

module.exports = { rotasToken };
