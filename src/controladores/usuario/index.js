const { loginSchema } = require('../../schemas/login');
const servicos = require('../../servicos');
const { geraTokenJwt } = require('../../utils/geraTokenJwt');
const mapeadorCodigoStatus = require('../../infra/http/codigoStatus/mapeadorCodigoStatus');

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    await loginSchema.validate({ email, senha });

    const usuario = await servicos.login(email, senha);

    const token = await geraTokenJwt(usuario);

    res.json({
      token,
      user: {
        id: usuario.id,
        email: usuario.email,
        nome: usuario.nome,
      },
    });
  } catch (error) {
    res
      .status(mapeadorCodigoStatus.ErroInternoDoServidor)
      .json({ message: error.message });
  }
};

const buscaDadosUsuario = async (req, res) => {
  const { id } = res.locals.usuario;

  try {
    const detalhes = await servicos.datalhesUsuario(id);
    res.json(detalhes);
  } catch (error) {
    res
      .status(mapeadorCodigoStatus.ErroInternoDoServidor)
      .json({ message: error.message });
  }
};

const cadastroUsuario = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(mapeadorCodigoStatus.SolicitacaoInvalida).json({
        mensagem: 'O preenchimento de todos os campos são obrigatórios.',
      });
    }

    await servicos.criaUsuario(nome, email, senha);

    return res.status(mapeadorCodigoStatus.Criado).json();
  } catch (error) {
    return res
      .status(mapeadorCodigoStatus.ErroInternoDoServidor)
      .json({ mensagem: error.message });
  }
};

module.exports = {
  login,
  buscaDadosUsuario,
  cadastroUsuario,
};
