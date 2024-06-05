const { clienteSchema } = require('../../schemas/cliente');
const servicos = require('../../servicos');
const {
  ErroInternoDoServidor,
} = require('../../infra/http/codigoStatus/mapeadorCodigoStatus');

const listagemCliente = async (req, res) => {
  try {
    await clienteSchema.validate(req.query);
    const listagemCompleta = await servicos.listaClientes({
      start: req.query.start,
      limit: req.query.limit,
    });
    res.json(listagemCompleta);
  } catch (error) {
    res.status(ErroInternoDoServidor).json({ mensagem: error.message });
  }
};

module.exports = {
  listagemCliente,
};
