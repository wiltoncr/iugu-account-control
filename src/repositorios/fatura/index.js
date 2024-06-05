const axiosIugu = require('../../infra/iugu/conexao');

class RepositorioFatura {
  async listarFaturas(payload) {
    const faturas = await axiosIugu.get('/invoices', {
      params: {
        limit: 10,
        ...payload,
      },
    });

    return faturas.data;
  }
}

module.exports = RepositorioFatura;
