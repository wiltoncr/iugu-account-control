const bcrypt = require('bcrypt');

const ComparaSenha = async (senha, senhaHash) => {
  const correspondente = await bcrypt.compare(senha, senhaHash);

  return correspondente;
};

module.exports = { ComparaSenha };
