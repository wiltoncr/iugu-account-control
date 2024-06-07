const { faturaSchema } = require('../../schemas/fatura');
const servicos = require('../../servicos');
const {
  ErroInternoDoServidor,
} = require('../../infra/http/codigoStatus/mapeadorCodigoStatus');

const listagemFatura = async (req, res) => {
  try {
    await faturaSchema.validate(req.query);
    const listagemCompleta = await servicos.listaFaturas({
      start: req.query.start,
      limit: req.query.limit,
    });
    res.json(listagemCompleta);
  } catch (error) {
    res.status(ErroInternoDoServidor).json({ mensagem: error.message });
  }
};

module.exports = {
  listagemFatura,
};
