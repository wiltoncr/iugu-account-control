const axiosIugu = require('../../infra/iugu/conexao');

class RepositorioFatura {
  async listarFaturas() {
    const faturas = await axiosIugu.get('/invoices', {
      params: {
        limit: 10,
      },
    });

    return faturas.data;
  }
}

module.exports = RepositorioFatura;
