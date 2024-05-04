const bcrypt = require('bcrypt');

const CriptografaSenha = async (senha) => {
  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(senha, salt);

  return hash;
};

module.exports = { CriptografaSenha };
