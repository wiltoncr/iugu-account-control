const { CriptografaSenha, ComparaSenha } = require('../provedores');
const { RepositorioUsuario } = require('../repositorios');

const { buscaUsuarioPorEmail, buscaUsuarioPorId, cadastroUsuario } = new RepositorioUsuario();

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

const datalhesUsuario = async (id) => {
  const [usuario] = await buscaUsuarioPorId(id);

  const usuarioPublico = {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
  };

  return usuarioPublico;
};

const criaUsuario = async (nome, email, senha) => {
  const usuarioJaExiste = await buscaUsuarioPorEmail(email);

  if (usuarioJaExiste.length > 0) {
    throw new Error('Email já cadastrado.');
  }

  const hash = await CriptografaSenha(senha);

  const novoUsuario = {
    nome,
    email,
    senha: hash,
  };

  await cadastroUsuario(novoUsuario);
};

module.exports = {
  login,
  datalhesUsuario,
  criaUsuario,
};
