const servicos = require('../../servicos');
const {
  ErroInternoDoServidor,
} = require('../../infra/http/codigoStatus/mapeadorCodigoStatus');

const listagemCliente = async (req, res) => {
  try {
    const listagemCompleta = await servicos.listaClientes();
    res.json(listagemCompleta);
  } catch (error) {
    res.status(ErroInternoDoServidor).json({ mensagem: error.message });
  }
};

module.exports = {
  listagemCliente,
};
