const axiosIugu = require('../../infra/iugu/conexao');

class RepositorioCliente {
  async listarClientes() {
    const clientes = await axiosIugu.get('/customers', {
      params: {
        limit: 10,
      },
    });

    return clientes.data;
  }
}

module.exports = RepositorioCliente;
