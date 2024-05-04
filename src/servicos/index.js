const { CriptografaSenha, ComparaSenha } = require('../provedores');
const { RepositorioUsuario } = require('../repositorios');

const { buscaUsuarioPorEmail } = new RepositorioUsuario();

const login = async (email, senha) => {
  const [usuario] = await buscaUsuarioPorEmail(email);

  if (!usuario) {
    throw new Error('Credenciais inválidas. Verifique sua senha e email.');
  }
  
  const senhaCorreta = await ComparaSenha(senha, usuario.senha);

  if (!senhaCorreta) {
    throw new Error('Credenciais inválidas. Verifique sua senha e email.');
  }

  return usuario;
};

module.exports = {
  login,
};