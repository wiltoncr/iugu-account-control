const { RepositorioFaturas } = require('../../repositorios');

const { listarFaturas } = new RepositorioFaturas();

const listaFaturas = async (payload) => {
  const faturas = await listarFaturas(payload);

  return faturas;
};

module.exports = { listaFaturas };
