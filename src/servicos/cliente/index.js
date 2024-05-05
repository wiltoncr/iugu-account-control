const { RepositorioClientes } = require('../../repositorios');

const { listarClientes } = new RepositorioClientes();

const listaClientes = async () => {
  const clientes = await listarClientes();

  return clientes;
};

module.exports = { listaClientes };
