const { RepositorioClientes } = require('../../repositorios');

const { listarClientes } = new RepositorioClientes();

const listaClientes = async (payload) => {
  const clientes = await listarClientes(payload);

  return clientes;
};

module.exports = { listaClientes };
