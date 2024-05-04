const jwt = require('jsonwebtoken');
const {
  NaoAutorizado,
} = require('../../infra/http/codigoStatus/mapeadorCodigoStatus');
require('dotenv').config();

const verificaToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res
      .status(NaoAutorizado)
      .json({ mensagem: 'Token de autenticação não fornecido' });
  }

  if (!token.startsWith('Bearer ')) {
    return res.status().json({ mensagem: 'Formato de token inválido' });
  }

  const tokenJWT = token.substring(7);

  try {
    const decoded = jwt.verify(tokenJWT, process.env.SECRET_KEY_JWT);

    res.locals.usuario = decoded;

    return next();
  } catch (error) {
    return res
      .status(NaoAutorizado)
      .json({ mensagem: 'Token de autenticação inválido' });
  }
};

module.exports = { verificaToken };
