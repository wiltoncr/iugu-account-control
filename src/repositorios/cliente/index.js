const axiosIugu = require('../../infra/iugu/conexao');

class RepositorioCliente {
  async listarClientes(payload) {
    const clientes = await axiosIugu.get('/customers', {
      params: {
        start: payload.start,
        limit: payload.limit,
      },
    });

    return clientes.data;
  }
}

module.exports = RepositorioCliente;
