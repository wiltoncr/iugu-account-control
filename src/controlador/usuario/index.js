const { loginSchema } = require('../../schemas/login');
const servicos = require('../../servicos');
const { geraTokenJwt } = require('../../utils/geraTokenJwt.js');
const mapeadorCodigoStatus = require('../../infra/http/codigoStatus/mapeadorCodigoStatus.js');

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

module.exports = {
  login,
};
