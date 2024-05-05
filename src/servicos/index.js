const { criaUsuario, login, datalhesUsuario } = require('./usuario');

const { listaFaturas } = require('./fatura');

module.exports = {
  login,
  datalhesUsuario,
  criaUsuario,
  listaFaturas,
};
