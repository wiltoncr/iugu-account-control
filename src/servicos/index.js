const { criaUsuario, login, datalhesUsuario } = require('./usuario');

const { listaClientes } = require('./cliente');

const { listaFaturas } = require('./fatura');

module.exports = {
  login,
  datalhesUsuario,
  criaUsuario,
  listaFaturas,
  listaClientes,
};
