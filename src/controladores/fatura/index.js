const servicos = require('../../servicos');
const {
  ErroInternoDoServidor,
} = require('../../infra/http/codigoStatus/mapeadorCodigoStatus');

const listagemFatura = async (req, res) => {
  try {
    const listagemCompleta = await servicos.listaFaturas({ ...req.query });
    res.json(listagemCompleta);
  } catch (error) {
    res.status(ErroInternoDoServidor).json({ mensagem: error.message });
  }
};

module.exports = {
  listagemFatura,
};
