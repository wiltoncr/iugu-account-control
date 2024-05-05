const { RepositorioFaturas } = require('../../repositorios');

const { listarFaturas } = new RepositorioFaturas();

const listaFaturas = async () => {
  const faturas = await listarFaturas();

  return faturas;
};

module.exports = { listaFaturas };
